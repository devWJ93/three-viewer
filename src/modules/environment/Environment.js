// refer: https://github.com/cedricpinson/osgjs

import * as THREE from 'three';
import EnvironmentCubeMap from './EnvironmentCubeMap';
import EnvironmentPanorama from './EnvironmentPanorama';
import EnvironmentSphericalHarmonics from './EnvironmentSphericalHarmonics';
import fileHelper from './fileHelper';
import Loader from 'JS/Loader';
import brdfLUT from './assets/brdfLUT.jpg';

class Environment {
	constructor(viewer) {
		let { renderer, isMobile } = viewer;
		this.isMobile = isMobile;
		this._config = undefined;
		this._files = {};
		let ctx = renderer.getContext();
		this.textureLODSupport = ctx.getExtension('EXT_shader_texture_lod');
		this.uIntegrateBRDF = null;
	}

	async loadPackage(url) {
		this.url = url;
		const configSrc = `${url}config.json`;
		let config = await fileHelper.requestResource(configSrc);
		return await this.init(config);
	}

	getImage(type, encoding, format) {
		let results = this.getTextures(type, encoding, format);
		if (!results.length) return undefined;
		// Add limitSize
		if (results[0].limitSize) results[0].images[0].limitSize = results[0].limitSize;
		return results[0].images[0];
	}

	// Filter texture by condition
	// Todo: Sync encoding param
	getTextures(type, encoding, format) {
		let textures = this._config.textures;
		let results = textures.filter(texture => {
			return texture.encoding === encoding && texture.format === format && texture.type === type;
		});
		return results;
	}

	async init(config) {
		// LUV format only (Todo: Support More format)
		this._config = config;

		let envMapFormat = 'panorama';
		if(this.textureLODSupport) envMapFormat = 'cubemap';

		let textureData = this.getImage('specular_ue4', 'luv', envMapFormat);
		let mapFile = textureData.file;
		let mapSize = textureData.width;
		let mapData = await fileHelper.requestResource(`${this.url}${mapFile}`);
		if(envMapFormat === 'cubemap'){
			this.mapEnv = new EnvironmentCubeMap(mapData, mapSize, config);
		}else{
			this.mapEnv = new EnvironmentPanorama(mapData, mapSize, config);
		}
		this.mapEnv.loadPacked();
		let minTextureSize = textureData.limitSize;
		let nbLod = Math.log(mapSize) / Math.LN2;
		let maxLod = nbLod - Math.log(minTextureSize) / Math.LN2;
		this.uEnvironmentLodRange = [nbLod, maxLod];
		this.uEnvironmentSize = [mapSize, mapSize];
		
		if(!this.isMobile && !this.uIntegrateBRDF){
			// LUT
			let loader = new Loader();
			this.uIntegrateBRDF = await loader.loadTexture(brdfLUT);
			this.uIntegrateBRDF.flipY = false;
		}

		// Background
		let bgTextureData = this.getImage('background', 'luv', 'cubemap');
		let bgFile = bgTextureData.file;
		let bgSize = bgTextureData.width;
		let bgData = await fileHelper.requestResource(`${this.url}${bgFile}`);
		this.backgroundEnv = new EnvironmentCubeMap(bgData, bgSize, {
			minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter
		});
		this.backgroundEnv.loadPacked();
		this.uBGEnvironmentSize = [bgSize, bgSize];

		// EnvironmentSphericalHarmonics
		this._spherical = new EnvironmentSphericalHarmonics(config.diffuseSPH);
		this.uEnvironmentSphericalHarmonics = this._spherical._uniformSpherical;

		// Light
		if(config.Lights){
			let sunlight = config.Lights[0];
			this.sunlightInfo = {
				color: new THREE.Color().fromArray(sunlight.color),
				position: new THREE.Vector3().fromArray(sunlight.direction).negate(),
				intensity: sunlight.luminosity
			}
		}
		return this;
	}
}

export { Environment };

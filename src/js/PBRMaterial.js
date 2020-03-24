import * as THREE from 'three';
import pbrVS from '../shaders/pbrVS';
import pbrFS from '../shaders/pbrFS';
import { syncMapArr, syncUniformArr, pbrDefaultUniforms, pbrDefaultDefines } from '../const/defaultParams';

class PBRMaterial extends THREE.ShaderMaterial {
	constructor(mesh, uniformsOpt) {
		let sourceMaterial = mesh.material;
		super();
		this.modelNormalMatrix = new THREE.Matrix3();
		this.copy(sourceMaterial);
		
		this.defines = Object.assign({}, pbrDefaultDefines);
		// VertexTangents rely on (vertexTangents && normalMap) in threejs
		// if(this.vertexTangents) this.defines.USE_TANGENT = 1;
		// Copy method no include normalMapType
		this.normalMapType = sourceMaterial.normalMapType;
		
		// Uniforms
		let UniformsLib = THREE.UniformsLib;
		this.uniforms = THREE.UniformsUtils.merge([
			UniformsLib.common,
			UniformsLib.normalmap,
			UniformsLib.lightmap,
			UniformsLib.bumpmap,
			UniformsLib.roughnessmap,
			UniformsLib.metalnessmap,
			UniformsLib.aomap,
			UniformsLib.emissivemap,
			UniformsLib.displacementmap,
			UniformsLib.envmap,
			UniformsLib.fog,
			UniformsLib.lights,
			pbrDefaultUniforms
		]);
		this.uniforms['uShadowDepthRange'] = { value: uniformsOpt.shadowDepthRange };
		this.uniforms['uEnvironmentSphericalHarmonics'] = { value: uniformsOpt.uEnvironmentSphericalHarmonics };
		this.uniforms['uEnvironmentLodRange'] = { value: uniformsOpt.uEnvironmentLodRange };
		this.uniforms['uEnvironmentSize'] = { value: uniformsOpt.uEnvironmentSize };
		this.uniforms['uIntegrateBRDF'] = { value: uniformsOpt.uIntegrateBRDF };
		this.uniforms['uModelNormalMatrix'] = { value: this.modelNormalMatrix };

		// PBR param sync
		this.syncParam(sourceMaterial);

		this.vertexShader = pbrVS;
		this.fragmentShader = pbrFS;
		this.lights = true;

		// Other
		if(sourceMaterial.isGLTFSpecularGlossinessMaterial === true) this.initSGWorkflow(sourceMaterial);
		if(uniformsOpt.isMobile) this.defines.MOBILE = 1;

		// Sync worldNormal matrix
		mesh.onBeforeRender = () => {
			this.modelNormalMatrix.getNormalMatrix(mesh.matrixWorld);
		}
	}

	syncParam(sourceMaterial) {
		// Map sync
		syncMapArr.forEach(key => {
			if (sourceMaterial[key] != undefined) {
				this[key] = sourceMaterial[key];
				this.uniforms[key].value = sourceMaterial[key];
			}
		});
		// Uniform sync
		syncUniformArr.forEach(key => {
			if (sourceMaterial[key] != undefined) {
				this.uniforms[key].value = sourceMaterial[key];
			}
		});
		// Special key
		this.uniforms.diffuse.value = sourceMaterial.color || new Color(0xffffff);
	}

	initSGWorkflow(sourceMaterial){
		console.log('SpecularGlossinessMaterial');
		this.defines[`SPECULAR_GLOSSINESS`] = 1;
		let { specular, glossiness, specularMap, glossinessMap } = sourceMaterial._extraUniforms;
		if(specularMap.value){
			this.defines[`USE_SPECULARMAP`] = 1;
			this.uniforms[`specularMap`] = specularMap;
		}
		if(glossinessMap.value){
			this.defines[`USE_GLOSSINESSMAP`] = 1;
			this.uniforms[`glossinessMap`] = glossinessMap;
		}
		this.uniforms[`specularFactor`] = specular;
		this.uniforms[`glossinessFactor`] = glossiness;
	}
}

export { PBRMaterial };
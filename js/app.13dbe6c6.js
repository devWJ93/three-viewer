(function(e) {
    function n(n) {
        for (var a, r, s = n[0], l = n[1], u = n[2], d = 0, f = []; d < s.length; d++) r = s[d], Object.prototype.hasOwnProperty.call(i, r) && i[r] && f.push(i[r][0]), i[r] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        c && c(n);
        while (f.length) f.shift()();
        return o.push.apply(o, u || []), t()
    }

    function t() {
        for (var e, n = 0; n < o.length; n++) {
            for (var t = o[n], a = !0, s = 1; s < t.length; s++) {
                var l = t[s];
                0 !== i[l] && (a = !1)
            }
            a && (o.splice(n--, 1), e = r(r.s = t[0]))
        }
        return e
    }
    var a = {},
        i = {
            app: 0
        },
        o = [];

    function r(n) {
        if (a[n]) return a[n].exports;
        var t = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }
    r.m = e, r.c = a, r.d = function(e, n, t) {
        r.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, n) {
        if (1 & n && (e = r(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (r.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var a in e) r.d(t, a, function(n) {
                return e[n]
            }.bind(null, a));
        return t
    }, r.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return r.d(n, "a", n), n
    }, r.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, r.p = "/three-viewer/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = s.push.bind(s);
    s.push = n, s = s.slice();
    for (var u = 0; u < s.length; u++) n(s[u]);
    var c = l;
    o.push([0, "chunk-vendors"]), t()
})({
    0: function(e, n, t) {
        e.exports = t("56d7")
    },
    3468: function(e, n, t) {},
    "56d7": function(e, n, t) {
        "use strict";
        t.r(n);
        t("e260"), t("e6cf"), t("cca6"), t("a79d");
        var a = t("2b0e"),
            i = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("div", {
                    staticClass: "isLoading",
                    attrs: {
                        id: "wrapper"
                    }
                }, [t("div", {
                    attrs: {
                        id: "canvasContainer"
                    }
                }), t("p", {
                    staticClass: "loadingText"
                }, [e._v("Loading...")]), t("main", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.openImportPage,
                        expression: "openImportPage"
                    }],
                    staticClass: "dropWrap"
                }, [t("div", {
                    staticClass: "dropzone"
                }, [t("div", {
                    staticClass: "innerArea"
                }, [e._m(0), t("div", {
                    staticClass: "btnArea"
                }, [t("div", {
                    staticClass: "uploadBtn"
                }, [t("input", {
                    attrs: {
                        type: "file",
                        name: "file-input[]",
                        id: "file-input",
                        multiple: ""
                    }
                }), t("label", {
                    attrs: {
                        for: "file-input"
                    }
                }, [t("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "17",
                        viewBox: "0 0 20 17"
                    }
                }, [t("path", {
                    attrs: {
                        d: "M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
                    }
                })]), t("span", [e._v("Upload")])])]), t("div", {
                    staticClass: "uploadBtn",
                    on: {
                        click: e.loadDefaultModel
                    }
                }, [t("span", [e._v("Defalut(3.5MB)")])])])])])])])
            },
            o = [function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("div", {
                    staticClass: "placeholder"
                }, [t("p", [e._v("Please drag the glTF file or folder (zip supported) to this page")])])
            }],
            r = (t("c0b6"), t("d4ec")),
            s = t("bee2"),
            l = t("5a89"),
            u = (t("99af"), t("d81d"), t("b0c0"), t("b64b"), t("4c53"), t("96cf"), t("1da1")),
            c = (t("b8bf"), t("d3b7"), t("ddb0"), function(e, n) {
                void 0 === n && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), n === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = n, this.enabled = !0, this.target = new l["Vector3"], this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    BOTTOM: 40
                }, this.mouseButtons = {
                    LEFT: l["MOUSE"].ROTATE,
                    MIDDLE: l["MOUSE"].DOLLY,
                    RIGHT: l["MOUSE"].PAN
                }, this.touches = {
                    ONE: l["TOUCH"].ROTATE,
                    TWO: l["TOUCH"].DOLLY_PAN
                }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
                    return c.phi
                }, this.getAzimuthalAngle = function() {
                    return c.theta
                }, this.saveState = function() {
                    t.target0.copy(t.target), t.position0.copy(t.object.position), t.zoom0 = t.object.zoom
                }, this.reset = function() {
                    t.target.copy(t.target0), t.object.position.copy(t.position0), t.object.zoom = t.zoom0, t.object.updateProjectionMatrix(), t.dispatchEvent(a), t.update(), s = r.NONE
                }, this.update = function() {
                    var n = new l["Vector3"],
                        i = (new l["Quaternion"]).setFromUnitVectors(e.up, new l["Vector3"](0, 1, 0)),
                        o = i.clone().inverse(),
                        m = new l["Vector3"],
                        v = new l["Quaternion"];
                    return function() {
                        var e = t.object.position;
                        return n.copy(e).sub(t.target), n.applyQuaternion(i), c.setFromVector3(n), t.autoRotate && s === r.NONE && F(S()), t.enableDamping ? (c.theta += d.theta * t.dampingFactor, c.phi += d.phi * t.dampingFactor) : (c.theta += d.theta, c.phi += d.phi), c.theta = Math.max(t.minAzimuthAngle, Math.min(t.maxAzimuthAngle, c.theta)), c.phi = Math.max(t.minPolarAngle, Math.min(t.maxPolarAngle, c.phi)), c.makeSafe(), c.radius *= f, c.radius = Math.max(t.minDistance, Math.min(t.maxDistance, c.radius)), !0 === t.enableDamping ? t.target.addScaledVector(h, t.dampingFactor) : t.target.add(h), n.setFromSpherical(c), n.applyQuaternion(o), e.copy(t.target).add(n), t.object.lookAt(t.target), !0 === t.enableDamping ? (d.theta *= 1 - t.dampingFactor, d.phi *= 1 - t.dampingFactor, h.multiplyScalar(1 - t.dampingFactor)) : (d.set(0, 0, 0), h.set(0, 0, 0)), f = 1, !!(p || m.distanceToSquared(t.object.position) > u || 8 * (1 - v.dot(t.object.quaternion)) > u) && (t.dispatchEvent(a), m.copy(t.object.position), v.copy(t.object.quaternion), p = !1, !0)
                    }
                }(), this.dispose = function() {
                    t.domElement.removeEventListener("contextmenu", se, !1), t.domElement.removeEventListener("mousedown", $, !1), t.domElement.removeEventListener("wheel", te, !1), t.domElement.removeEventListener("touchstart", ie, !1), t.domElement.removeEventListener("touchend", re, !1), t.domElement.removeEventListener("touchmove", oe, !1), document.removeEventListener("mousemove", ee, !1), document.removeEventListener("mouseup", ne, !1), t.domElement.removeEventListener("keydown", ae, !1)
                };
                var t = this,
                    a = {
                        type: "change"
                    },
                    i = {
                        type: "start"
                    },
                    o = {
                        type: "end"
                    },
                    r = {
                        NONE: -1,
                        ROTATE: 0,
                        DOLLY: 1,
                        PAN: 2,
                        TOUCH_ROTATE: 3,
                        TOUCH_PAN: 4,
                        TOUCH_DOLLY_PAN: 5,
                        TOUCH_DOLLY_ROTATE: 6
                    },
                    s = r.NONE,
                    u = 1e-6,
                    c = new l["Spherical"],
                    d = new l["Spherical"],
                    f = 1,
                    h = new l["Vector3"],
                    p = !1,
                    m = new l["Vector2"],
                    v = new l["Vector2"],
                    g = new l["Vector2"],
                    _ = new l["Vector2"],
                    A = new l["Vector2"],
                    x = new l["Vector2"],
                    b = new l["Vector2"],
                    y = new l["Vector2"],
                    E = new l["Vector2"];

                function S() {
                    return 2 * Math.PI / 60 / 60 * t.autoRotateSpeed
                }

                function T() {
                    return Math.pow(.95, t.zoomSpeed)
                }

                function F(e) {
                    d.theta -= e
                }

                function L(e) {
                    d.phi -= e
                }
                var N = function() {
                        var e = new l["Vector3"];
                        return function(n, t) {
                            e.setFromMatrixColumn(t, 0), e.multiplyScalar(-n), h.add(e)
                        }
                    }(),
                    P = function() {
                        var e = new l["Vector3"];
                        return function(n, a) {
                            !0 === t.screenSpacePanning ? e.setFromMatrixColumn(a, 1) : (e.setFromMatrixColumn(a, 0), e.crossVectors(t.object.up, e)), e.multiplyScalar(n), h.add(e)
                        }
                    }(),
                    w = function() {
                        var e = new l["Vector3"];
                        return function(n, a) {
                            var i = t.domElement;
                            if (t.object.isPerspectiveCamera) {
                                var o = t.object.position;
                                e.copy(o).sub(t.target);
                                var r = e.length();
                                r *= Math.tan(t.object.fov / 2 * Math.PI / 180), N(2 * n * r / i.clientHeight, t.object.matrix), P(2 * a * r / i.clientHeight, t.object.matrix)
                            } else t.object.isOrthographicCamera ? (N(n * (t.object.right - t.object.left) / t.object.zoom / i.clientWidth, t.object.matrix), P(a * (t.object.top - t.object.bottom) / t.object.zoom / i.clientHeight, t.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), t.enablePan = !1)
                        }
                    }();

                function O(e) {
                    t.object.isPerspectiveCamera ? f /= e : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom * e)), t.object.updateProjectionMatrix(), p = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1)
                }

                function R(e) {
                    t.object.isPerspectiveCamera ? f *= e : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom / e)), t.object.updateProjectionMatrix(), p = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1)
                }

                function M(e) {
                    m.set(e.clientX, e.clientY)
                }

                function C(e) {
                    b.set(e.clientX, e.clientY)
                }

                function I(e) {
                    _.set(e.clientX, e.clientY)
                }

                function U(e) {
                    v.set(e.clientX, e.clientY), g.subVectors(v, m).multiplyScalar(t.rotateSpeed);
                    var n = t.domElement;
                    F(2 * Math.PI * g.x / n.clientHeight), L(2 * Math.PI * g.y / n.clientHeight), m.copy(v), t.update()
                }

                function D(e) {
                    y.set(e.clientX, e.clientY), E.subVectors(y, b), E.y > 0 ? O(T()) : E.y < 0 && R(T()), b.copy(y), t.update()
                }

                function k(e) {
                    A.set(e.clientX, e.clientY), x.subVectors(A, _).multiplyScalar(t.panSpeed), w(x.x, x.y), _.copy(A), t.update()
                }

                function B() {}

                function H(e) {
                    e.deltaY < 0 ? R(T()) : e.deltaY > 0 && O(T()), t.update()
                }

                function G(e) {
                    var n = !1;
                    switch (e.keyCode) {
                        case t.keys.UP:
                            w(0, t.keyPanSpeed), n = !0;
                            break;
                        case t.keys.BOTTOM:
                            w(0, -t.keyPanSpeed), n = !0;
                            break;
                        case t.keys.LEFT:
                            w(t.keyPanSpeed, 0), n = !0;
                            break;
                        case t.keys.RIGHT:
                            w(-t.keyPanSpeed, 0), n = !0;
                            break
                    }
                    n && (e.preventDefault(), t.update())
                }

                function X(e) {
                    if (1 == e.touches.length) m.set(e.touches[0].pageX, e.touches[0].pageY);
                    else {
                        var n = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                            t = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                        m.set(n, t)
                    }
                }

                function V(e) {
                    if (1 == e.touches.length) _.set(e.touches[0].pageX, e.touches[0].pageY);
                    else {
                        var n = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                            t = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                        _.set(n, t)
                    }
                }

                function z(e) {
                    var n = e.touches[0].pageX - e.touches[1].pageX,
                        t = e.touches[0].pageY - e.touches[1].pageY,
                        a = Math.sqrt(n * n + t * t);
                    b.set(0, a)
                }

                function j(e) {
                    t.enableZoom && z(e), t.enablePan && V(e)
                }

                function Y(e) {
                    t.enableZoom && z(e), t.enableRotate && X(e)
                }

                function Q(e) {
                    if (1 == e.touches.length) v.set(e.touches[0].pageX, e.touches[0].pageY);
                    else {
                        var n = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                            a = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                        v.set(n, a)
                    }
                    g.subVectors(v, m).multiplyScalar(t.rotateSpeed);
                    var i = t.domElement;
                    F(2 * Math.PI * g.x / i.clientHeight), L(2 * Math.PI * g.y / i.clientHeight), m.copy(v)
                }

                function W(e) {
                    if (1 == e.touches.length) A.set(e.touches[0].pageX, e.touches[0].pageY);
                    else {
                        var n = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                            a = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                        A.set(n, a)
                    }
                    x.subVectors(A, _).multiplyScalar(t.panSpeed), w(x.x, x.y), _.copy(A)
                }

                function K(e) {
                    var n = e.touches[0].pageX - e.touches[1].pageX,
                        a = e.touches[0].pageY - e.touches[1].pageY,
                        i = Math.sqrt(n * n + a * a);
                    y.set(0, i), E.set(0, Math.pow(y.y / b.y, t.zoomSpeed)), O(E.y), b.copy(y)
                }

                function q(e) {
                    t.enableZoom && K(e), t.enablePan && W(e)
                }

                function Z(e) {
                    t.enableZoom && K(e), t.enableRotate && Q(e)
                }

                function J() {}

                function $(e) {
                    if (!1 !== t.enabled) {
                        switch (e.preventDefault(), t.domElement.focus ? t.domElement.focus() : window.focus(), e.button) {
                            case 0:
                                switch (t.mouseButtons.LEFT) {
                                    case l["MOUSE"].ROTATE:
                                        if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                            if (!1 === t.enablePan) return;
                                            I(e), s = r.PAN
                                        } else {
                                            if (!1 === t.enableRotate) return;
                                            M(e), s = r.ROTATE
                                        }
                                        break;
                                    case l["MOUSE"].PAN:
                                        if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                            if (!1 === t.enableRotate) return;
                                            M(e), s = r.ROTATE
                                        } else {
                                            if (!1 === t.enablePan) return;
                                            I(e), s = r.PAN
                                        }
                                        break;
                                    default:
                                        s = r.NONE
                                }
                                break;
                            case 1:
                                switch (t.mouseButtons.MIDDLE) {
                                    case l["MOUSE"].DOLLY:
                                        if (!1 === t.enableZoom) return;
                                        C(e), s = r.DOLLY;
                                        break;
                                    default:
                                        s = r.NONE
                                }
                                break;
                            case 2:
                                switch (t.mouseButtons.RIGHT) {
                                    case l["MOUSE"].ROTATE:
                                        if (!1 === t.enableRotate) return;
                                        M(e), s = r.ROTATE;
                                        break;
                                    case l["MOUSE"].PAN:
                                        if (!1 === t.enablePan) return;
                                        I(e), s = r.PAN;
                                        break;
                                    default:
                                        s = r.NONE
                                }
                                break
                        }
                        s !== r.NONE && (document.addEventListener("mousemove", ee, !1), document.addEventListener("mouseup", ne, !1), t.dispatchEvent(i))
                    }
                }

                function ee(e) {
                    if (!1 !== t.enabled) switch (e.preventDefault(), s) {
                        case r.ROTATE:
                            if (!1 === t.enableRotate) return;
                            U(e);
                            break;
                        case r.DOLLY:
                            if (!1 === t.enableZoom) return;
                            D(e);
                            break;
                        case r.PAN:
                            if (!1 === t.enablePan) return;
                            k(e);
                            break
                    }
                }

                function ne(e) {
                    !1 !== t.enabled && (B(e), document.removeEventListener("mousemove", ee, !1), document.removeEventListener("mouseup", ne, !1), t.dispatchEvent(o), s = r.NONE)
                }

                function te(e) {
                    !1 === t.enabled || !1 === t.enableZoom || s !== r.NONE && s !== r.ROTATE || (e.preventDefault(), e.stopPropagation(), t.dispatchEvent(i), H(e), t.dispatchEvent(o))
                }

                function ae(e) {
                    !1 !== t.enabled && !1 !== t.enableKeys && !1 !== t.enablePan && G(e)
                }

                function ie(e) {
                    if (!1 !== t.enabled) {
                        switch (e.preventDefault(), e.touches.length) {
                            case 1:
                                switch (t.touches.ONE) {
                                    case l["TOUCH"].ROTATE:
                                        if (!1 === t.enableRotate) return;
                                        X(e), s = r.TOUCH_ROTATE;
                                        break;
                                    case l["TOUCH"].PAN:
                                        if (!1 === t.enablePan) return;
                                        V(e), s = r.TOUCH_PAN;
                                        break;
                                    default:
                                        s = r.NONE
                                }
                                break;
                            case 2:
                                switch (t.touches.TWO) {
                                    case l["TOUCH"].DOLLY_PAN:
                                        if (!1 === t.enableZoom && !1 === t.enablePan) return;
                                        j(e), s = r.TOUCH_DOLLY_PAN;
                                        break;
                                    case l["TOUCH"].DOLLY_ROTATE:
                                        if (!1 === t.enableZoom && !1 === t.enableRotate) return;
                                        Y(e), s = r.TOUCH_DOLLY_ROTATE;
                                        break;
                                    default:
                                        s = r.NONE
                                }
                                break;
                            default:
                                s = r.NONE
                        }
                        s !== r.NONE && t.dispatchEvent(i)
                    }
                }

                function oe(e) {
                    if (!1 !== t.enabled) switch (e.preventDefault(), e.stopPropagation(), s) {
                        case r.TOUCH_ROTATE:
                            if (!1 === t.enableRotate) return;
                            Q(e), t.update();
                            break;
                        case r.TOUCH_PAN:
                            if (!1 === t.enablePan) return;
                            W(e), t.update();
                            break;
                        case r.TOUCH_DOLLY_PAN:
                            if (!1 === t.enableZoom && !1 === t.enablePan) return;
                            q(e), t.update();
                            break;
                        case r.TOUCH_DOLLY_ROTATE:
                            if (!1 === t.enableZoom && !1 === t.enableRotate) return;
                            Z(e), t.update();
                            break;
                        default:
                            s = r.NONE
                    }
                }

                function re(e) {
                    !1 !== t.enabled && (J(e), t.dispatchEvent(o), s = r.NONE)
                }

                function se(e) {
                    !1 !== t.enabled && e.preventDefault()
                }
                t.domElement.addEventListener("contextmenu", se, !1), t.domElement.addEventListener("mousedown", $, !1), t.domElement.addEventListener("wheel", te, !1), t.domElement.addEventListener("touchstart", ie, !1), t.domElement.addEventListener("touchend", re, !1), t.domElement.addEventListener("touchmove", oe, !1), t.domElement.addEventListener("keydown", ae, !1), -1 === t.domElement.tabIndex && (t.domElement.tabIndex = 0), this.update()
            });
        c.prototype = Object.create(l["EventDispatcher"].prototype), c.prototype.constructor = c;
        var d = function(e, n) {
            c.call(this, e, n), this.mouseButtons.LEFT = l["MOUSE"].PAN, this.mouseButtons.RIGHT = l["MOUSE"].ROTATE, this.touches.ONE = l["TOUCH"].PAN, this.touches.TWO = l["TOUCH"].DOLLY_ROTATE
        };
        d.prototype = Object.create(l["EventDispatcher"].prototype), d.prototype.constructor = d;
        t("4de4"), t("ace4"), t("5cc6"), t("9a8c"), t("a975"), t("735e"), t("c1ac"), t("d139"), t("3a7b"), t("d5d6"), t("82f8"), t("e91f"), t("60bd"), t("5f96"), t("3280"), t("3fcc"), t("ca91"), t("25a1"), t("cd26"), t("3c5d"), t("2954"), t("649e"), t("219c"), t("170b"), t("b39a"), t("72f7");
        var f = window.Zlib;

        function h(e) {
            var n = new Uint8Array(e);
            return 31 === n[0] && 139 === n[1]
        }

        function p(e) {
            var n = new Uint8Array(e);
            if (f) {
                var t = new f.Gunzip(n),
                    a = t.decompress();
                return a.buffer
            }
            console.error("Lack of necessary dependencies: gunzip.min.js.\n You can add this vendors to enable this feature or get it at https://github.com/imaya/zlib.js/blob/master/bin/gunzip.min.js")
        }
        var m = function() {
                function e(n, t, a) {
                    Object(r["a"])(this, e), this._options = a || {}, this._size = t, this._data = n
                }
                return Object(s["a"])(e, [{
                    key: "deinterleaveImage4",
                    value: function(e, n, t) {
                        for (var a = e * e, i = 2 * e * e, o = 3 * e * e, r = 0, s = 0; s < a; s++) t[r++] = n[s], t[r++] = n[s + a], t[r++] = n[s + i], t[r++] = n[s + o]
                    }
                }, {
                    key: "loadPacked",
                    value: function() {
                        var e = this,
                            n = function(n) {
                                var t = n;
                                h(t) && (t = p(t));
                                for (var a = Math.log(e._size) / Math.LN2, i = 0, o = {}, r = 0; r <= a; r++) {
                                    var s = Math.pow(2, a - r),
                                        l = void 0;
                                    if (i >= t.byteLength) break;
                                    for (var u = 0; u < 6; u++) {
                                        o[u] || (o[u] = []);
                                        var c = void 0,
                                            d = void 0;
                                        l = s * s * 4, c = new Uint8Array(t, i, l), d = new Uint8Array(l), e.deinterleaveImage4(s, c, d), c = d, o[u].push(c), i += l
                                    }
                                }
                                e._packedImages = o, e.createRGBA8Packed()
                            };
                        return n(this._data)
                    }
                }, {
                    key: "createRGBA8Packed",
                    value: function() {
                        for (var e = this.cubeTextures = [], n = this._size, t = this._packedImages, a = t[0].length, i = l["LogLuvEncoding"], o = 0; o < a; o++) {
                            var r = new l["CubeTexture"];
                            e.push(r), r.format = l["RGBAFormat"], r.encoding = i, r.minFilter = l["LinearMipMapLinearFilter"], r.magFilter = l["LinearFilter"], r.generateMipmaps = !1;
                            for (var s = 0; s < 6; s++) {
                                var u = new l["DataTexture"](t[s][o], n, n, l["RGBAFormat"]);
                                u.format = r.format, u.encoding = i, u.type = r.type, u.generateMipmaps = !1, r.images[s] = u, r.needsUpdate = !0
                            }
                            r.needsUpdate = !0, n /= 2
                        }
                        this.texture = new l["CubeTexture"], this.texture.format = l["RGBAFormat"], this.texture.encoding = i, this.texture.minFilter = this._options.minFilter || l["LinearMipMapLinearFilter"], this.texture.magFilter = this._options.magFilter || l["LinearFilter"], this.texture.generateMipmaps = !1;
                        for (var c = 0; c < 6; c++) {
                            this.texture.image[c] = this.cubeTextures[0].images[c];
                            for (var d = 1; d < a; d++) this.texture.mipmaps[d - 1] = this.cubeTextures[d], this.cubeTextures[d].needsUpdate = !0
                        }
                        this.texture.needsUpdate = !0
                    }
                }]), e
            }(),
            v = function() {
                function e(n, t, a) {
                    Object(r["a"])(this, e), this._options = a || {}, this._size = t, this._data = n, this._texture = null
                }
                return Object(s["a"])(e, [{
                    key: "deinterleaveImage4",
                    value: function(e, n, t) {
                        for (var a = e * e, i = 2 * e * e, o = 3 * e * e, r = 0, s = 0; s < a; s++) t[r++] = n[s], t[r++] = n[s + a], t[r++] = n[s + i], t[r++] = n[s + o]
                    }
                }, {
                    key: "loadPacked",
                    value: function() {
                        var e = this,
                            n = function(n) {
                                var t = n;
                                h(t) && (t = p(t));
                                var a, i, o = e._size;
                                a = new Uint8Array(t), i = new Uint8Array(t.byteLength), e.deinterleaveImage4(o, a, i), a = i;
                                var r = new l["DataTexture"](a, o, o, l["RGBAFormat"]);
                                r.encoding = l["LogLuvEncoding"], r.flipY = !0, r.needsUpdate = !0, r.magFilter = l["LinearFilter"], r.minFilter = l["LinearFilter"], e._texture = r
                            };
                        return n(this._data)
                    }
                }, {
                    key: "texture",
                    get: function() {
                        return this._texture
                    }
                }]), e
            }(),
            g = function() {
                function e(n, t) {
                    Object(r["a"])(this, e), this._data = n, this._size = t
                }
                return Object(s["a"])(e, [{
                    key: "loadPacked",
                    value: function() {
                        var e = this,
                            n = function(n) {
                                var t = e._size,
                                    a = n;
                                h(a) && (a = p(a));
                                var i = t * t * 4,
                                    o = new Uint8Array(a, 0, i),
                                    r = new l["DataTexture"](o, t, t, l["RGBAFormat"]);
                                return r
                            };
                        return n(this._data)
                    }
                }]), e
            }(),
            _ = (t("fb6a"), t("cfc3"), function() {
                function e(n) {
                    Object(r["a"])(this, e), this._file = n, this.initSHCoef(n)
                }
                return Object(s["a"])(e, [{
                    key: "initSHCoef",
                    value: function(e) {
                        var n = this;
                        this._sphCoef = e.slice(0, 27);
                        var t = 1 / (2 * Math.sqrt(Math.PI)),
                            a = -.5 * Math.sqrt(3 / Math.PI),
                            i = -a,
                            o = a,
                            r = .5 * Math.sqrt(15 / Math.PI),
                            s = -r,
                            l = .25 * Math.sqrt(5 / Math.PI),
                            u = s,
                            c = .25 * Math.sqrt(15 / Math.PI),
                            d = [t, t, t, a, a, a, i, i, i, o, o, o, r, r, r, s, s, s, l, l, l, u, u, u, c, c, c];
                        this._sphCoef = d.map((function(e, t) {
                            return e * n._sphCoef[t]
                        })), this._uniformSpherical = new Float32Array(27);
                        for (var f = 0; f < 9; f++) this._uniformSpherical[3 * f] = this._sphCoef[3 * f], this._uniformSpherical[3 * f + 1] = this._sphCoef[3 * f + 1], this._uniformSpherical[3 * f + 2] = this._sphCoef[3 * f + 2]
                    }
                }]), e
            }()),
            A = "./assets/envMap/brdf_ue4.bin.gz",
            x = function() {
                function e(n) {
                    Object(r["a"])(this, e);
                    var t = n.renderer,
                        a = n.isMobile;
                    this.isMobile = a;
                    var i = t.getContext();
                    this.textureLODSupport = i.getExtension("EXT_shader_texture_lod"), this._config = null, this._files = {}, this.fileLoader = new l["FileLoader"], this.uIntegrateBRDF = null
                }
                return Object(s["a"])(e, [{
                    key: "loadPackage",
                    value: function() {
                        var e = Object(u["a"])(regeneratorRuntime.mark((function e(n) {
                            var t, a;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return this.url = n, t = "".concat(n, "config.json"), e.next = 4, this.loadDataFromFile(t, "json");
                                    case 4:
                                        return a = e.sent, e.next = 7, this.init(a);
                                    case 7:
                                        return e.abrupt("return", e.sent);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function n(n) {
                            return e.apply(this, arguments)
                        }
                        return n
                    }()
                }, {
                    key: "getImage",
                    value: function(e, n, t) {
                        var a = this.getTextures(e, n, t);
                        if (a.length) return a[0].limitSize && (a[0].images[0].limitSize = a[0].limitSize), a[0].images[0]
                    }
                }, {
                    key: "getTextures",
                    value: function(e, n, t) {
                        var a = this._config.textures,
                            i = a.filter((function(a) {
                                return a.encoding === n && a.format === t && a.type === e
                            }));
                        return i
                    }
                }, {
                    key: "loadDataFromFile",
                    value: function(e) {
                        var n = this,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "arraybuffer";
                        return this.fileLoader.setResponseType(t), new Promise((function(t) {
                            return n.fileLoader.load(e, (function(e) {
                                return t(e)
                            }))
                        }))
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = Object(u["a"])(regeneratorRuntime.mark((function e(n) {
                            var t, a, i, o, r, s, u, c, d, f, h, p, x, b, y, E;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return this._config = n, t = "panorama", this.textureLODSupport && (t = "cubemap"), a = this.getImage("specular_ue4", "luv", t), i = a.file, o = a.width, e.next = 8, this.loadDataFromFile("".concat(this.url).concat(i));
                                    case 8:
                                        if (r = e.sent, this.mapEnv = "cubemap" === t ? new m(r, o, n) : new v(r, o, n), this.mapEnv.loadPacked(), s = a.limitSize, u = Math.log(o) / Math.LN2, c = u - Math.log(s) / Math.LN2, this.uEnvironmentLodRange = [u, c], this.uEnvironmentSize = [o, "cubemap" == t ? o : o / 2], this.uIntegrateBRDF) {
                                            e.next = 24;
                                            break
                                        }
                                        return d = this.getImage("brdf_ue4", "rg16", "lut"), f = d.width, e.next = 21, this.loadDataFromFile(A);
                                    case 21:
                                        h = e.sent, this._integrateBRDF = new g(h, f), this.uIntegrateBRDF = this._integrateBRDF.loadPacked();
                                    case 24:
                                        return p = this.getImage("background", "luv", "cubemap"), x = p.file, b = p.width, e.next = 29, this.loadDataFromFile("".concat(this.url).concat(x));
                                    case 29:
                                        return y = e.sent, this.backgroundEnv = new m(y, b, {
                                            minFilter: l["LinearFilter"],
                                            magFilter: l["LinearFilter"]
                                        }), this.backgroundEnv.loadPacked(), this.uBGEnvironmentSize = [b, b], this._spherical = new _(n.diffuseSPH), this.uEnvironmentSphericalHarmonics = this._spherical._uniformSpherical, n.Lights && (E = n.Lights[0], this.sunlightInfo = {
                                            color: (new l["Color"]).fromArray(E.color),
                                            position: (new l["Vector3"]).fromArray(E.direction).negate(),
                                            intensity: E.luminosity
                                        }), e.abrupt("return", this);
                                    case 37:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function n(n) {
                            return e.apply(this, arguments)
                        }
                        return n
                    }()
                }]), e
            }(),
            b = (t("4160"), t("159b"), t("262e")),
            y = t("2caf"),
            E = ["map", "normalMap", "lightMap", "bumpMap", "roughnessMap", "metalnessMap", "aoMap", "emissiveMap", "displacementmap"],
            S = ["color", "roughness", "metalness", "emissive"],
            T = {
                uEnvBrightness: {
                    value: 1
                },
                uEnvironmentTransform: {
                    value: new l["Matrix3"]
                }
            },
            F = {
                roughness: {
                    value: .5
                },
                metalness: {
                    value: 0
                },
                color: {
                    value: new l["Color"](16777215)
                },
                emissive: {
                    value: new l["Color"](0)
                },
                uEnvironmentTransform: {
                    value: new l["Matrix3"]
                },
                uEnvBrightness: {
                    value: 1
                },
                uSpecularAAVariance: {
                    value: .1
                },
                uSpecularAAThreshold: {
                    value: 1
                },
                uAnisotropyRotation: {
                    value: 0
                },
                uAnisotropyFactor: {
                    value: .5
                },
                uClearCoatRoughness: {
                    value: .5
                },
                uClearCoat: {
                    value: .5
                }
            },
            L = {
                ENABLE_IBL: 1,
                ENABLE_LIGHT: 1,
                ENERGY_COMPENSATION: 1,
                DIFFUSE_LAMBERT: 1,
                NDF_GGX: 1,
                F_SCHLICK: 1,
                V_SMITHJOINTAPPROX: 1,
                SPECULAR_AO_SEBLAGARDE: 1,
                MS_SPECULAR_AO: 1,
                MS_DIFFUSE_AO: 1
            },
            N = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e, a, i) {
                    var o;
                    Object(r["a"])(this, t);
                    var s = e.material;
                    o = n.call(this), o.modelNormalMatrix = new l["Matrix3"], o.copy(s), o.defines = Object.assign({}, L), o.vertexTangents = s.vertexTangents, o.normalMapType = s.normalMapType;
                    var u = l["UniformsLib"];
                    return o.uniforms = l["UniformsUtils"].merge([u.common, u.normalmap, u.lightmap, u.bumpmap, u.roughnessmap, u.metalnessmap, u.aomap, u.emissivemap, u.displacementmap, u.envmap, u.fog, u.lights, F]), o.uniforms["uShadowDepthRange"] = {
                        value: i.shadowDepthRange
                    }, o.uniforms["uModelNormalMatrix"] = {
                        value: o.modelNormalMatrix
                    }, o.syncEnvSetting(a), o.syncParam(s), o.vertexShader = i.pbrVS, o.fragmentShader = i.pbrFS, o.lights = !0, !0 === s.isGLTFSpecularGlossinessMaterial && o.initSGWorkflow(s), e.onBeforeRender = function() {
                        o.modelNormalMatrix.getNormalMatrix(e.matrixWorld)
                    }, o.extensions = {
                        derivatives: !0,
                        shaderTextureLOD: !0
                    }, o.needsUpdate = !0, o
                }
                return Object(s["a"])(t, [{
                    key: "syncEnvSetting",
                    value: function(e) {
                        var n = e.mapEnv,
                            t = e.uEnvironmentSphericalHarmonics,
                            a = e.uEnvironmentLodRange,
                            i = e.uEnvironmentSize,
                            o = e.textureLODSupport;
                        o ? this.defines["CUBEMAP_LOD"] = 1 : this.defines["PANORAMA"] = 1, this.envMap = n.texture, this.uniforms["envMap"] = {
                            value: n.texture
                        }, this.uniforms["uEnvironmentSphericalHarmonics"] = {
                            value: t
                        }, this.uniforms["uEnvironmentLodRange"] = {
                            value: a
                        }, this.uniforms["uEnvironmentSize"] = {
                            value: i
                        }, this.uniforms["uIntegrateBRDF"] = {
                            value: e.uIntegrateBRDF
                        }, e.isMobile && (this.defines["MOBILE"] = 1)
                    }
                }, {
                    key: "syncParam",
                    value: function(e) {
                        var n = this;
                        E.forEach((function(t) {
                            void 0 != e[t] && (n[t] = e[t], n.uniforms[t].value = e[t])
                        })), S.forEach((function(t) {
                            void 0 != e[t] && (n.uniforms[t].value = e[t])
                        })), this.uniforms.diffuse.value = e.color || new Color(16777215)
                    }
                }, {
                    key: "initSGWorkflow",
                    value: function(e) {
                        this.defines["SPECULAR_GLOSSINESS"] = 1;
                        var n = e._extraUniforms,
                            t = n.specular,
                            a = n.glossiness,
                            i = n.specularMap,
                            o = n.glossinessMap;
                        i.value && (this.defines["USE_SPECULARMAP"] = 1, this.uniforms["specularMap"] = i), o.value && (this.defines["USE_GLOSSINESSMAP"] = 1, this.uniforms["glossinessMap"] = o), this.uniforms["specularFactor"] = t, this.uniforms["glossinessFactor"] = a
                    }
                }]), t
            }(l["ShaderMaterial"]),
            P = "varying vec3 vViewNormal;\n\nvoid main() {\n    vViewNormal = position;\n    vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    pos.z = 1.;\n    gl_Position = pos;\n}\n",
            w = "uniform samplerCube envMap;\nuniform mat3 uEnvironmentTransform;\nuniform float uEnvBrightness;\nuniform vec2 uEnvironmentSize;\n\nvarying vec3 vViewNormal;\n\nvec3 cubemapSeamlessFixDirection(const in vec3 direction, const in float scale ){\n    vec3 dir = direction;\n    // http://seblagarde.wordpress.com/2012/06/10/amd-cubemapgen-for-physically-based-rendering/\n    float M = max(max(abs(dir.x), abs(dir.y)), abs(dir.z));\n\n    if (abs(dir.x) != M) dir.x *= scale;\n    if (abs(dir.y) != M) dir.y *= scale;\n    if (abs(dir.z) != M) dir.z *= scale;\n\n    return dir;\n}\n\nvec4 textureCubemap(const in samplerCube tex, const in vec3 dir){\n    vec4 rgba = textureCube(tex, dir);\n    return LogLuvToLinear(rgba);\n}\n\n// Seamless cubemap for background\nvec4 textureCubeFixed(const in samplerCube tex, const in vec3 direction){\n    // http://seblagarde.wordpress.com/2012/06/10/amd-cubemapgen-for-physically-based-rendering/\n    float scale = 1.0 - 1.0 / uEnvironmentSize[0];\n    vec3 dir = cubemapSeamlessFixDirection(direction, scale);\n    return textureCubemap(tex, dir);\n}\n\nvoid main(){\n    vec3 direction = normalize(vViewNormal);\n    direction = uEnvironmentTransform * direction;\n    vec4 samplerColor = uEnvBrightness * textureCubeFixed(envMap, direction);\n    \n    gl_FragColor = samplerColor;\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n}\n",
            O = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e) {
                    Object(r["a"])(this, t);
                    var a = e.envMap,
                        i = e.uBGEnvironmentSize,
                        o = e.uEnvBrightness,
                        s = e.debug,
                        u = T.uEnvironmentTransform,
                        c = {
                            envMap: {
                                value: a
                            },
                            uEnvironmentSize: {
                                value: i
                            },
                            uEnvBrightness: o,
                            uEnvironmentTransform: u
                        };
                    return n.call(this, {
                        uniforms: c,
                        vertexShader: P,
                        fragmentShader: w,
                        side: l["DoubleSide"],
                        depthTest: !!s
                    })
                }
                return t
            }(l["ShaderMaterial"]),
            R = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e) {
                    var a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    Object(r["a"])(this, t);
                    var o = i / 2,
                        s = new l["SphereGeometry"](o, 20, 20),
                        u = new O(e);
                    return a = n.call(this, s, u), a.radius = o, a.sphere = s, a
                }
                return Object(s["a"])(t, [{
                    key: "setSize",
                    value: function(e) {
                        var n = e / this.radius;
                        this.scale.setScalar(n)
                    }
                }, {
                    key: "envMap",
                    get: function() {
                        return this.material.envMap
                    },
                    set: function(e) {
                        this.material.envMap = e
                    }
                }, {
                    key: "mesh",
                    get: function() {
                        return this.sphere
                    }
                }]), t
            }(l["Mesh"]),
            M = (t("ac1f"), t("5319"), "vec3 computeDiffuseSPH(vec3 normal, vec3 sphericalHarmonics[9]){\n    float x = normal.x;\n    float y = normal.y;\n    float z = normal.z;\n    vec3 result = (\n        sphericalHarmonics[0] +\n        sphericalHarmonics[1] * y +\n        sphericalHarmonics[2] * z +\n        sphericalHarmonics[3] * x +\n        sphericalHarmonics[4] * y * x +\n        sphericalHarmonics[5] * y * z +\n        sphericalHarmonics[6] * (3.0 * z * z - 1.0) +\n        sphericalHarmonics[7] * (z * x) +\n        sphericalHarmonics[8] * (x*x - y*y)\n    );\n    return max(result, vec3(0.0));\n}"),
            C = "// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec3 integrateBRDF(vec3 specular, float roughness, float NoV) {\n    const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);\n    const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);\n    vec4 r = roughness * c0 + c1;\n    float a004 = min(r.x * r.x, exp2(-9.28 * NoV)) * r.x + r.y;\n    vec2 AB = vec2(-1.04, 1.04) * a004 + r.zw;\n    return specular * AB.x + AB.y * 1.0;\n}",
            I = "// For y up\nvec2 normalToPanoramaUV(vec3 dir){\n    float n = length(dir.xz);\n\n    // to avoid bleeding the max(-1.0,dir.x / n) is needed\n    vec2 pos = vec2( (n>0.0000001) ? max(-1.0,dir.x / n) : 0.0, dir.y);\n\n    // fix edge bleeding\n    if ( pos.x > 0.0 ) pos.x = min( 0.999999, pos.x );\n\n    pos = acos(pos)*0.31830988618; // RECIPROCAL_PI\n\n    pos.x = (dir.z > 0.0) ? pos.x*0.5 : 1.0-(pos.x*0.5);\n\n    // shift u to center the panorama to -z\n    pos.x = mod(pos.x-0.25+1.0, 1.0 );\n    pos.y = 1.0-pos.y;\n    return pos;\n}\n\n\nvec2 computeUVForMipmap(float level, vec2 uv, float size, float maxLOD){\n    // width for level\n    float widthForLevel = exp2( maxLOD-level);\n\n    // the height locally for the level in pixel\n    // to opimitize a bit we scale down the v by two in the inputs uv\n    float heightForLevel = widthForLevel * 0.5;\n\n    // compact version\n    float texelSize = 1.0/size;\n    vec2 uvSpaceLocal =  vec2(1.0) + uv * vec2(widthForLevel - 2.0, heightForLevel - 2.0);\n    uvSpaceLocal.y += size - widthForLevel;\n    return uvSpaceLocal * texelSize;\n}\n\nvec4 texturePanoramaLod(sampler2D tex, vec2 size , vec3 direction, float lod, float maxLOD){\n    vec2 uvBase = normalToPanoramaUV(direction);\n    // we scale down v here because it avoid to do twice in sub functions\n    // uvBase.y *= 0.5;\n    float lod0 = floor(lod);\n    vec2 uv0 = computeUVForMipmap(lod0, uvBase, size.x, maxLOD);\n    vec4 texel0 = texture2D(tex, uv0.xy);\n\n    float lod1 = ceil(lod);\n    vec2 uv1 = computeUVForMipmap(lod1, uvBase, size.x, maxLOD);\n    vec4 texel1 = texture2D(tex, uv0.xy);\n\n    return mix(texel0, texel1, fract(lod));\n}",
            U = "vec3 precomputeLight(vec3 normal, vec3 viewDir, float perceptualRoughness){\n    // perceptually linear roughness to roughness\n    float roughness = perceptualRoughness * perceptualRoughness;\n    float NoV =  saturate(dot(normal, viewDir));\n    return vec3(roughness, roughness * roughness, NoV);\n}",
            D = '// Refer: UE4\n\n// ************************ Normal Distribution Functions(NDF) **************************\n\n// [Blinn 1977, "Models of light reflection for computer synthesized pictures"]\nfloat D_Blinn(vec3 precomputeLight, float NoH){\n    float a2 = precomputeLight.y;\n    float n = 2.0 / a2 - 2.0;\n    return (n+2.0) / (2.0* PI) * pow(NoH, n);   // 1 mad, 1 exp, 1 mul, 1 log\n}\n\n// [Beckmann 1963, "The scattering of electromagnetic waves from rough surfaces"]\nfloat D_Beckmann(vec3 precomputeLight, float NoH){\n    float a2 = precomputeLight.y;\n    float NoH2 = NoH * NoH;\n    return exp( (NoH2 - 1.0) / (a2 * NoH2) ) / ( PI * a2 * NoH2 * NoH2 );\n}\n\n// GGX / Trowbridge-Reitz\n// [Walter et al. 2007, "Microfacet models for refraction through rough surfaces"]\nfloat D_GGX(vec3 precomputeLight, float NoH){\n    float a2 = precomputeLight.y;\n    float d = (NoH * a2 - NoH) * NoH + 1.0;\t// 2 mad\n    return a2 / (PI * d * d);\t// 4 mul, 1 rcp\n}\n\nfloat D_GGX(float rougness, float NoH){\n    float a2 = rougness * rougness;\n    float d = (NoH * a2 - NoH) * NoH + 1.0;\t// 2 mad\n    return a2 / (PI * d * d);\t// 4 mul, 1 rcp\n}\n\nfloat Specular_D(vec3 precomputeLight, float NoH){\n#if defined(NDF_BLINNPHONG)\n    return D_Blinn(precomputeLight, NoH);\n#elif defined(NDF_BECKMANN)\n    return D_Beckmann(precomputeLight, NoH);\n#elif defined(NDF_GGX)\n    return D_GGX(precomputeLight, NoH);\n#else\n    return D_GGX(precomputeLight, NoH);\n#endif\n}\n\n// ************************************ Fresnel ************************************\n\n// [Schlick 1994, "An Inexpensive BRDF Model for Physically-Based Rendering"]\nvec3 F_Schlick(float VoH, vec3 f0, float f90){\n    return f0 + (vec3(f90) - f0) * pow5(1.0 - VoH);\n}\n\nfloat F_Schlick(float VoH, float f0, float f90) {\n    return f0 + (f90 - f0) * pow5(1.0 - VoH);\n}\n\n// [Cook-Torrance 1982]\nvec3 F_CookTorrance(float VoH, vec3 f0, float f90){\n    vec3 sqrtSpec = sqrt(f0);\n    vec3 n = (1.0 + sqrtSpec) / (1.0 - sqrtSpec);\n    float c = saturate(VoH);\n    vec3 g = sqrt(n * n + c * c - 1.0);\n\n    vec3 part1 = (g - c)/(g + c);\n    vec3 part2 = ((g + c) * c - 1.0)/((g - c) * c + 1.0);\n\n    return max(vec3(0.0), 0.5 * part1 * part1 * (1.0 + part2 * part2));\n}\n\nvec3 F_None(vec3 f0){\n    return f0;\n}\n\nvec3 Specular_F(float VoH, vec3 f0, float f90) {\n#if defined(F_SCHLICK)\n    return F_Schlick(VoH, f0, f90);\n#elif defined(F_COOKTORRANCE)\n    return F_CookTorrance(VoH, f0, f90);\n#else // FRESNSEL_NONE\n    return F_None(f0);\n#endif\n}\n\n// ******************************** Visibility Term *********************************\nfloat Vis_Implicit(){\n\treturn 0.25;\n}\n\n// [Neumann et al. 1999, "Compact metallic reflectance models"]\nfloat Vis_Neumann(vec3 precomputeLight, float NoL){\n\tfloat NoV = precomputeLight.z;\n\treturn 1. / (4. * max(NoL, NoV));\n}\n\n// [Kelemen 2001, "A microfacet based coupled specular-matte brdf model with importance sampling"]\nfloat Vis_Kelemen(float VoH){\n\t// constant to prevent NaN\n\treturn 1./(4. * VoH * VoH + 1e-5);\n}\n\n// Tuned to match behavior of Vis_Smith\n// [Schlick 1994, "An Inexpensive BRDF Model for Physically-Based Rendering"]\nfloat Vis_Schlick(vec3 precomputeLight, float NoL){\n\tfloat a2 = precomputeLight.y;\n\tfloat NoV = precomputeLight.z;\n\tfloat k = sqrt(a2) * 0.5;\n\tfloat Vis_SchlickV = NoV * (1. - k) + k;\n\tfloat Vis_SchlickL = NoL * (1. - k) + k;\n\treturn 0.25 / (Vis_SchlickV * Vis_SchlickL);\n}\n\n// Smith term for GGX\n// [Smith 1967, "Geometrical shadowing of a random rough surface"]\nfloat Vis_Smith(vec3 precomputeLight, float NoL){\n\tfloat a2 = precomputeLight.y;\n\tfloat NoV = precomputeLight.z;\n\tfloat Vis_SmithV = NoV + sqrt(NoV * (NoV - NoV * a2) + a2);\n\tfloat Vis_SmithL = NoL + sqrt(NoL * (NoL - NoL * a2) + a2);\n\treturn 1./(Vis_SmithV * Vis_SmithL);\n}\n\n// Appoximation of joint Smith term for GGX\n// [Heitz 2014, "Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs"]\nfloat Vis_SmithJointApprox(vec3 precomputeLight, float NoL){\n    float roughness = precomputeLight.x;\n    float NoV = precomputeLight.z;\n    float Vis_SmithV = NoL * (NoV * (1.0 - roughness) + roughness);\n    float Vis_SmithL = NoV * (NoL * (1.0 - roughness) + roughness);\n    return 0.5 / (Vis_SmithV + Vis_SmithL);\n}\n\n// Hammon 2017, "PBR Diffuse Lighting for GGX+Smith Microsurfaces"\nfloat Vis_SmithJointApprox_Hammon(vec3 precomputeLight, float NoL) {\n    float roughness = precomputeLight.x;\n    float NoV = precomputeLight.z;\n\n    float v = 0.5 / mix(2.0 * NoL * NoV, NoL + NoV, roughness);\n    return v;\n}\n\nfloat Specular_V(vec3 precomputeLight, float NoL, float VoH){\n#if defined(V_IMPLICIT)\n    return Vis_Implicit();\n#elif defined(V_NEUMANN)\n    return Vis_Neumann(precomputeLight, NoL);\n#elif defined(V_KELEMEN)\n    return Vis_Kelemen(VoH);\n#elif defined(V_SCHLICK)\n    return Vis_Schlick(precomputeLight, NoL);\n#elif defined(V_SMITH)\n    return Vis_Smith(precomputeLight, NoL);\n#elif defined(V_SMITHJOINTAPPROX)\n    return Vis_SmithJointApprox(precomputeLight, NoL);\n#elif defined(V_HAMMONAPPROX)\n    return Vis_SmithJointApprox_Hammon(precomputeLight, NoL);\n#else\n\treturn 0.25;\n#endif\n}\n\nvec3 specularLobe(vec3 precomputeLight, vec3 specular, float NoL, float NoH, float VoH, float f90) {\n    float D = Specular_D(precomputeLight, NoH);\n    vec3 F = Specular_F(VoH, specular, f90);\n    float V = Specular_V(precomputeLight, NoL, VoH);\n\t\n    return (D * V) * F;\n}\n\n// ************************************ Diffuse ************************************\nvec3 Diffuse_Lambert(vec3 diffuse){\n\treturn diffuse / PI;\n}\n\n// [Burley 2012, "Physically-Based Shading at Disney"]\nvec3 Diffuse_Burley(vec3 precomputeLight, vec3 diffuse, float NoL, float VoH){\n    float Roughness = precomputeLight.x;\n    float NoV =  precomputeLight.z;\n\n\tfloat FD90 = 0.5 + 2. * VoH * VoH * Roughness;\n\tfloat FdV = 1. + (FD90 - 1.) * pow5(1. - NoV);\n\tfloat FdL = 1. + (FD90 - 1.) * pow5(1. - NoL);\n\treturn diffuse * ((1. / PI) * FdV * FdL);\n}\n\n// [Gotanda 2012, "Beyond a Simple Physically Based Blinn-Phong Model in Real-Time"]\nvec3 Diffuse_OrenNayar(vec3 precomputeLight, vec3 diffuse, float NoL, float VoH){\n    float Roughness = precomputeLight.x;\n\tfloat a = precomputeLight.y;\n    float NoV = precomputeLight.z;\n\tfloat s = a; // / ( 1.29 + 0.5 * a );\n\tfloat s2 = s * s;\n\tfloat VoL = 2. * VoH * VoH - 1.;  // double angle identity\n\tfloat Cosri = VoL - NoV * NoL;\n\tfloat C1 = 1. - 0.5 * s2 / (s2 + 0.33);\n\tfloat C2 = 0.45 * s2 / (s2 + 0.09) * Cosri * (Cosri >= 0. ? 1./(max(NoL, NoV)) : 1.);\n\treturn diffuse / PI * (C1 + C2) * (1. + Roughness * 0.5);\n}\n\n// [Gotanda 2014, "Designing Reflectance Models for New Consoles"]\nvec3 Diffuse_Gotanda(vec3 precomputeLight, vec3 diffuse, float NoL, float VoH){\n    float Roughness = precomputeLight.x;\n\tfloat a = precomputeLight.y;\n    float NoV = precomputeLight.z;\n\tfloat a2 = a * a;\n\tfloat F0 = 0.04;\n\tfloat VoL = 2. * VoH * VoH - 1.;    // double angle identity\n\tfloat Cosri = VoL - NoV * NoL;\n\n\tfloat a2_13 = a2 + 1.36053;\n\tfloat Fr = ( 1. - ( 0.542026*a2 + 0.303573*a ) / a2_13 ) * ( 1. - pow( 1. - NoV, 5. - 4.*a2 ) / a2_13 ) * ( ( -0.733996*a2*a + 1.50912*a2 - 1.16402*a ) * pow( 1. - NoV, 1. + 1./(39.*a2*a2+1.) ) + 1. );\n\tfloat Lm = ( max( 1. - 2.*a, 0. ) * ( 1. - pow5( 1. - NoL ) ) + min( 2.*a, 1. ) ) * ( 1. - 0.5*a * (NoL - 1.) ) * NoL;\n\tfloat Vd = ( a2 / ( (a2 + 0.09) * (1.31072 + 0.995584 * NoV) ) ) * ( 1. - pow( 1. - NoL, ( 1. - 0.3726732 * NoV * NoV ) / ( 0.188566 + 0.38841 * NoV ) ) );\n\tfloat Bp = Cosri < 0. ? 1.4 * NoV * NoL * Cosri : Cosri;\n\tfloat Lr = (21.0 / 20.0) * (1. - F0) * ( Fr * Lm + Vd + Bp );\n\treturn diffuse / PI * Lr;\n}\n\nvec3 diffuseLobe(vec3 precomputeLight, vec3 diffuse, float NoL, float VoH){\n#if defined(DIFFUSE_LAMBERT)\n    return Diffuse_Lambert(diffuse);\n#elif defined(DIFFUSE_BURLEY)\n    return Diffuse_Burley(precomputeLight, diffuse, NoL, VoH);\n#elif defined(DIFFUSE_ORENNAYAR)\n    return Diffuse_OrenNayar(precomputeLight, diffuse, NoL, VoH);\n#elif defined(DIFFUSE_GOTANDA)\n    return Diffuse_Gotanda(precomputeLight, diffuse, NoL, VoH);\n#else // DIFFUSE_NONE\n    return vec3(0.0);\n#endif\n}\n\nvoid surfaceShading(in vec3 normal, in vec3 viewDir, in float NoL, in vec3 precomputeLight, in vec3 diffuse, in vec3 specular, in float attenuation, in vec3 lightColor, in vec3 lightDir, in float f90, out vec3 diffuseOut, out vec3 specularOut, out bool lighted) {\n    lighted = NoL > 0.0;\n    if (!lighted) {\n        specularOut = diffuseOut = vec3(0.0);\n        return;\n    }\n    vec3 H = normalize(viewDir + lightDir);\n    float NoH =  saturate(dot(normal, H));\n    float VoH =  saturate(dot(viewDir, H));\n\t\n    vec3 colorAttenuate = attenuation * NoL * lightColor;\n    diffuseOut = colorAttenuate * diffuseLobe(precomputeLight, diffuse, NoL, VoH);\n    specularOut = colorAttenuate * specularLobe(precomputeLight, specular, NoL, NoH, VoH, f90);\n}',
            k = '// Refer: Filament\n// Anisotropy(GGX)\n#if defined(USE_TANGENT) && defined(ENABLE_ANISOTROPY)\nfloat D_GGX_Anisotropic(float at, float ab, float ToH, float BoH, float NoH) {\n    // Burley 2012, "Physically-Based Shading at Disney"\n\n    // The values at and ab are perceptualRoughness^2, a2 is therefore perceptualRoughness^4\n    // The dot product below computes perceptualRoughness^8. We cannot fit in fp16 without clamping\n    // the roughness to too high values so we perform the dot product and the division in fp32\n    float a2 = at * ab;\n    vec3 v = vec3(ab * ToH, at * BoH, a2 * NoH);\n    float v2 = dot(v, v);\n    float w2 = a2 / v2;\n    return a2 * w2 * w2 * (1.0 / PI);\n}\n\nfloat V_SmithGGXCorrelated_Anisotropic(float at, float ab, float ToV, float BoV, float ToL, float BoL, float NoV, float NoL) {\n    // Heitz 2014, "Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs"\n    // TODO: lambdaV can be pre-computed for all the lights, it should be moved out of this function\n    float lambdaV = NoL * length(vec3(at * ToV, ab * BoV, NoV));\n    float lambdaL = NoV * length(vec3(at * ToL, ab * BoL, NoL));\n    float v = 0.5 / (lambdaV + lambdaL);\n    return v;\n}\n\nvec3 anisotropicLobe(vec3 precomputeGGX, vec3 H, vec3 viewDir, vec3 lightDir, float NoH, float VoH, float NoL, vec3 specular, float f90, in vec3 anisotropicT, in vec3 anisotropicB, in float anisotropy) {\n    float roughness = precomputeGGX.x;\n    float NoV =  precomputeGGX.z;\n\n    float ToV = dot(anisotropicT, viewDir);\n    float BoV = dot(anisotropicB, viewDir);\n    float ToL = dot(anisotropicT, lightDir);\n    float BoL = dot(anisotropicB, lightDir);\n    float ToH = dot(anisotropicT, H);\n    float BoH = dot(anisotropicB, H);\n\n    // Anisotropic parameters: at and ab are the roughness along the tangent and bitangent\n    // to simplify materials, we derive them from a single roughness parameter\n    // Kulla 2017, "Revisiting Physically Based Shading at Imageworks"\n    float at = max(roughness * (1.0 + anisotropy), MIN_ROUGHNESS);\n    float ab = max(roughness * (1.0 - anisotropy), MIN_ROUGHNESS);\n\n    // Specular anisotropic BRDF\n    float D = D_GGX_Anisotropic(at, ab, ToH, BoH, NoH);\n    float V = V_SmithGGXCorrelated_Anisotropic(at, ab, ToV, BoV, ToL, BoL, NoV, NoL);\n    vec3 F = Specular_F(VoH, specular, f90);\n\n    return (D * V) * F;\n}\n\nvoid anisotropicSurfaceShading(vec3 normal, vec3 viewDir, float NoL, vec3 precomputeLight, vec3 diffuse, vec3 specular, float attenuation, vec3 lightColor, vec3 lightDir, float f90, vec3 anisotropicT, vec3 anisotropicB, float anisotropy, out vec3 diffuseOut, out vec3 specularOut, out bool lighted) {\n    lighted = NoL > 0.0;\n    if (!lighted) {\n        specularOut = diffuseOut = vec3(0.0);\n        return;\n    }\n    vec3 H = normalize(viewDir + lightDir);\n    float NoH =  saturate(dot(normal, H));\n    float VoH =  saturate(dot(viewDir, H));\n\n    vec3 colorAttenuate = attenuation * NoL * lightColor;\n    diffuseOut = colorAttenuate * diffuseLobe(precomputeLight, diffuse, NoL, VoH);\n    specularOut = colorAttenuate * anisotropicLobe(precomputeLight, H, viewDir, lightDir, NoH, VoH, NoL, specular, f90, anisotropicT, anisotropicB, anisotropy);\n}\n#endif',
            B = "float pow5(float x) {\n\tfloat xx = x * x;\n\treturn xx * xx * x;\n}\n\n// http://www.neilmendoza.com/glsl-rotation-about-an-arbitrary-axis/\nmat3 rotationMatrix3(vec3 axis, float angle) {\n\taxis = normalize(axis);\n\tfloat s = sin(angle);\n\tfloat c = cos(angle);\n\tfloat oc = 1.0 - c;\n\treturn mat3(oc * axis.x * axis.x + c,\n                oc * axis.x * axis.y - axis.z * s,\n                oc * axis.z * axis.x + axis.y * s,\n\t\t\t\toc * axis.x * axis.y + axis.z * s,\n                oc * axis.y * axis.y + c,\n                oc * axis.y * axis.z - axis.x * s,\n                oc * axis.z * axis.x - axis.y * s,\n                oc * axis.y * axis.z + axis.x * s,\n                oc * axis.z * axis.z + c);\n}",
            H = "// Shadow\nuniform bool receiveShadow;\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n        struct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n        uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n        \n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare, float shadowDistance) {\n        vec2 centroidCoord = uv / size;\n        centroidCoord = centroidCoord + 0.5;\n        vec2 f = fract(centroidCoord);\n\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\n        vec4 fetches;\n        const vec2 offset = vec2( 0.0, 1.0 );\n        fetches.x = compare - unpackRGBAToDepth( texture2D( depths, centroidUV + texelSize * offset.xx ));\n        fetches.y = compare - unpackRGBAToDepth( texture2D( depths, centroidUV + texelSize * offset.xy ));\n        fetches.z = compare - unpackRGBAToDepth( texture2D( depths, centroidUV + texelSize * offset.yx ));\n        fetches.w = compare - unpackRGBAToDepth( texture2D( depths, centroidUV + texelSize * offset.yy ));\n\n        // Shadow distance\n        float _a = mix(fetches.x, fetches.y, f.y);\n        float _b = mix(fetches.z, fetches.w, f.y);\n        shadowDistance = mix(_a, _b, f.x);\n\n\t\tvec4 st = step(fetches, vec4(0.0));\n\n        float a = mix(st.x, st.y, f.y);\n        float b = mix(st.z, st.w, f.y);\n        return mix(a, b, f.x);\n\t}\n\n\tfloat getShadow(bool lighted, sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, out float shadowDistance ) {\n        bool earlyOut = false;\n        float shadow = 1.0;\n\n        if (!lighted){\n            shadow = 0.0;\n            earlyOut = true;\n        }\n\n        if(uShadowDepthRange.x == uShadowDepthRange.y){\n            earlyOut = true;\n        }\n\n        if (!earlyOut) {\n            shadowCoord.xyz /= shadowCoord.w;\n            shadowCoord.z += shadowBias;\n            // if ( something && something ) breaks ATI OpenGL shader compiler\n            // if ( all( something, something ) ) using this instead\n            bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n            bool inFrustum = all( inFrustumVec );\n            bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n            bool frustumTest = all( frustumTestVec );\n            if ( frustumTest ) {\n                vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n                // TODO: Shadow jitter\n                float res = texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z, shadowDistance);\n                shadow = res;\n            }\n        }\n\t\treturn shadow;\n\t}\n#endif",
            G = "// Light\n// DirectionalLight\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tbool visible;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n    void precomputeDirect(vec3 normal, vec3 viewDir, inout DirectionalLight directionalLight, out float attenuation, out vec3 lightDir, out float NoL) {\n        attenuation = 1.0;\n        lightDir = directionalLight.direction;\n        NoL = dot(normal, lightDir);\n\t\tdirectionalLight.visible = true;\n    }\n#endif\n// Todo: Spot/Point Light",
            X = "#preImport <isotropyLightCompute>\n#preImport <anisotropyLightCompute>",
            V = "// IBL\n#preImport <precomputeLight>\n#preImport <computeDiffuseSPH>\n\n#ifdef PANORAMA\n    #preImport <panoramaSampler>\n#endif\n\nvec3 integrateBRDF(vec3 materialSpecular, float roughness, float NoV) {\n    vec4 rgba = texture2D(uIntegrateBRDF, vec2(NoV, roughness));\n    float a = (rgba[1] * 65280.0 + rgba[0] * 255.0) / 65535.0;\n    float b = (rgba[3] * 65280.0 + rgba[2] * 255.0) / 65535.0;\n    return (1.-materialSpecular) * a + materialSpecular * b;\n}\n\n// frostbite, lagarde paper p67\n// http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf\nfloat linRoughnessToMipmap(float roughnessLinear){\n    return sqrt(roughnessLinear);\n}\n\nvec3 prefilterEnvMap(float rLinear, vec3 R) {\n    vec3 dir = R;\n    float lod = linRoughnessToMipmap(rLinear) * uEnvironmentLodRange[1]; //(uEnvironmentMaxLod - 1.0);\n    lod = min(uEnvironmentLodRange[0], lod);\n#ifdef CUBEMAP_LOD\n    // http://seblagarde.wordpress.com/2012/06/10/amd-cubemapgen-for-physically-based-rendering/\n    float scale = 1.0 - exp2(lod) / uEnvironmentSize[0];\n    vec3 absDir = abs(dir);\n    float M = max(max(absDir.x, absDir.y), absDir.z);\n    // cubemapSeamlessFixDirection\n    if (absDir.x != M) dir.x *= scale;\n    if (absDir.y != M) dir.y *= scale;\n    if (absDir.z != M) dir.z *= scale;\n\treturn LogLuvToLinear(textureCubeLodEXT(envMap, dir, lod)).rgb;\n#else\n    return LogLuvToLinear(texturePanoramaLod(envMap, uEnvironmentSize, R, lod, uEnvironmentLodRange[0])).rgb;\n\t#endif\n}\n\n// Anisotropic\n#if defined(USE_TANGENT) && defined(ENABLE_ANISOTROPY)\nvec3 computeAnisotropicBentNormal(vec3 normal, vec3 viewDir, float roughness, vec3 anisotropicT, vec3 anisotropicB, float anisotropy) {\n    vec3 anisotropyDirection = anisotropy >= 0.0 ? anisotropicB : anisotropicT;\n    vec3 anisotropicTangent = cross(anisotropyDirection, viewDir);\n    vec3 anisotropicNormal = cross(anisotropicTangent, anisotropyDirection);\n    float bendFactor = abs(anisotropy) * clamp(5.0 * roughness, 0.0, 1.0);\n    vec3  bentNormal = normalize(mix(normal, anisotropicNormal, bendFactor));\n    return bentNormal;\n}\n#endif\n\n// From Sebastien Lagarde Moving Frostbite to PBR page 69\n// We have a better approximation of the off specular peak\n// but due to the other approximations we found this one performs better.\n// N is the normal direction\n// R is the mirror vector\n// This approximation works fine for G smith correlated and uncorrelated\nvec3 getSpecularDominantDir(vec3 N, vec3 R, float realRoughness) {\n    float smoothness = 1.0 - realRoughness;\n    float lerpFactor = smoothness * (sqrt(smoothness) + realRoughness);\n    return mix(N, R, lerpFactor);\n}\n\nvec3 getPrefilteredEnvMapColor(vec3 normal, vec3 viewDir, float roughness) {\n    vec3 R = reflect(-viewDir, normal);\n    // From Sebastien Lagarde Moving Frostbite to PBR page 69\n    vec3 dominantR = getSpecularDominantDir(normal, R, roughness * roughness);\n    vec3 dir = uEnvironmentTransform * dominantR;\n    vec3 prefilteredColor = prefilterEnvMap(roughness, dir);\n\n    return prefilteredColor;\n}\n\nvec3 computeIBLSpecularUE4(vec3 specularDFG, vec3 normal, vec3 viewDir, float roughness) {\n    return getPrefilteredEnvMapColor(normal, viewDir, roughness) * specularDFG;\n}",
            z = " // ClearCoat\n#ifdef ENABLE_CLEARCOAT\nvoid computeClearCoatIBL(float clearCoatNoV, vec3 clearCoatNormal, float clearCoatPerceptualRoughness, vec3 viewDir, float specularAO, inout vec3 Fd, inout vec3 Fr){\n    // The clear coat layer assumes an IOR of 1.5 (4% reflectance)\n    vec3 materialSpecular = vec3(0.04);\n    float materialF90 = 1.0;\n    float Fc = F_Schlick(clearCoatNoV, materialSpecular.x, materialF90) * uClearCoat;\n    float attenuation = 1.0 - Fc;\n    Fd *= attenuation;\n    Fr *= attenuation;\n\n    vec3 specularDFG = integrateBRDF(materialSpecular, clearCoatPerceptualRoughness, clearCoatNoV);\n    vec3 clearCoatLobe = computeIBLSpecularUE4(specularDFG, clearCoatNormal, viewDir, clearCoatPerceptualRoughness);\n    Fr += clearCoatLobe * (specularAO * uClearCoat);\n}\n\nfloat distributionClearCoat(float roughness, float NoH, const vec3 h) {\n    return D_GGX(roughness, NoH);\n}\n\nfloat visibilityClearCoat(float LoH) {\n    return Vis_Kelemen(LoH);\n}\n\nfloat clearCoatLobe(vec3 h, float clearCoatNoH, float clearCoatLoH, float clearCoatRoughness, out float Fcc){\n    // clear coat specular lobe\n    float D = distributionClearCoat(clearCoatRoughness, clearCoatNoH, h);\n    float V = visibilityClearCoat(clearCoatLoH);\n    float F = F_Schlick(clearCoatLoH, 0.04, 1.0) * uClearCoat; // fix IOR to 1.5\n\n    Fcc = F;\n    return D * V * F;\n}\n#endif",
            j = '#ifdef ENERGY_COMPENSATION\nfloat getEnergyCompensation(vec3 dfg, float f0) {\n   return 1.0 + f0 * (1.0 / dfg.y - 1.0);\n}\n#endif\n\n#ifdef SPECULAR_AO_MARMOSETCO\n// http://marmosetco.tumblr.com/post/81245981087\nfloat occlusionHorizon(float ao, vec3 normal, vec3 viewDir) {\n    float d = dot(normal, viewDir) + ao;\n    return clamp((d * d) - 1.0 + ao, 0.0, 1.0);\n}\n#endif\n\n#ifdef SPECULAR_AO_SEBLAGARDE\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat computeSpecularAO(float ao, vec3 precomputeLight) {\n    float roughness = precomputeLight.x;\n    float NoV =  precomputeLight.z;\n    return clamp(pow(NoV + ao, exp2(-16.0 * roughness - 1.0)) - 1.0 + ao, 0.0, 1.0);\n}\n#endif\n\n/**\n* Returns a color ambient occlusion based on a pre-computed visibility term.\n* The albedo term is meant to be the diffuse color or f0 for the diffuse and\n* specular terms respectively.\n*/\nvec3 gtaoMultiBounce(float visibility, const vec3 albedo) {\n    // Jimenez et al. 2016, "Practical Realtime Strategies for Accurate Indirect Occlusion"\n    vec3 a =  2.0404 * albedo - 0.3324;\n    vec3 b = -4.7951 * albedo + 0.6417;\n    vec3 c =  2.7552 * albedo + 0.6903;\n\n    return max(vec3(visibility), ((visibility * a + b) * visibility + c) * visibility);\n}\n#ifdef MS_DIFFUSE_AO\nvoid multiBounceAO(float visibility, const vec3 albedo, inout vec3 color) {\n    color *= gtaoMultiBounce(visibility, albedo);\n}\n#endif\n\n#ifdef MS_SPECULAR_AO\nvoid multiBounceSpecularAO(float visibility, const vec3 albedo, inout vec3 color) {\n    color *= gtaoMultiBounce(visibility, albedo);\n}\n#endif\n\n#ifdef GEOMETRIC_SPECULAR_AA\nfloat normalFiltering(float perceptualRoughness, const vec3 geometricNormal) {\n    // Kaplanyan 2016, "Stable specular highlights"\n    // Tokuyoshi 2017, "Error Reduction and Simplification for Shading Anti-Aliasing"\n    // Tokuyoshi and Kaplanyan 2019, "Improved Geometric Specular Antialiasing"\n\n    // This implementation is meant for deferred rendering in the original paper but\n    // we use it in forward rendering as well (as discussed in Tokuyoshi and Kaplanyan\n    // 2019). The main reason is that the forward version requires an expensive transform\n    // of the half vector by the tangent frame for every light. This is therefore an\n    // approximation but it works well enough for our needs and provides an improvement\n    // over our original implementation based on Vlachos 2015, "Advanced VR Rendering".\n\n    vec3 du = dFdx(geometricNormal);\n    vec3 dv = dFdy(geometricNormal);\n\n    float variance = uSpecularAAVariance * (dot(du, du) + dot(dv, dv));\n\n    float roughness = perceptualRoughness * perceptualRoughness;\n    float kernelRoughness = min(2.0 * variance, uSpecularAAThreshold);\n    float squareRoughness = saturate(roughness * roughness + kernelRoughness);\n\n    return sqrt(sqrt(squareRoughness));\n}\n#endif',
            Y = {
                computeDiffuseSPH: M,
                integrateBRDFMobile: C,
                panoramaSampler: I,
                precomputeLight: U,
                isotropyLightCompute: D,
                anisotropyLightCompute: k,
                math: B,
                shadow: H,
                light: G,
                brdf: X,
                ibl: V,
                clearCoat: z,
                advance: j
            },
            Q = "uniform mat3 uModelNormalMatrix;\nvarying vec3 vViewPosition;\n\nvarying vec3 vNormal;\nvarying vec3 vWorldNormal;\n\n#ifdef USE_TANGENT\n\tvarying vec3 vTangent;\n\tvarying vec3 vBitangent;\n#endif\n\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\n\nvoid main(){\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n    #include <color_vertex>\n    #include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\tvNormal = normalize(transformedNormal);\n\tvWorldNormal = uModelNormalMatrix * objectNormal;\n\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize(transformedTangent);\n\t\tvBitangent = normalize(cross(vNormal, vTangent) * tangent.w);\n\t#endif\n\n    #include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\n    vViewPosition = mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <shadowmap_vertex>\n}\n",
            W = "// refer: \n// https://github.com/cedricpinson/osgjs\n// https://google.github.io/filament/Filament.html\n\nuniform mat3 uEnvironmentTransform;\nuniform float uEnvBrightness;\nuniform vec3 uEnvironmentSphericalHarmonics[9];\nuniform sampler2D uIntegrateBRDF;\n\nconst float MIN_ROUGHNESS = 0.001;\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\nuniform vec2 uShadowDepthRange;\n\nvarying vec3 vViewPosition;\n\n#ifdef GEOMETRIC_SPECULAR_AA\nuniform float uSpecularAAThreshold;\nuniform float uSpecularAAVariance;\n#endif\n\n// Anisotropy\n#if defined(USE_TANGENT) && defined(ENABLE_ANISOTROPY)\nuniform float uAnisotropyRotation;\nuniform float uAnisotropyFactor;\n#endif\n\n// ClearCoat\n#ifdef ENABLE_CLEARCOAT\nuniform float uClearCoat;\nuniform float uClearCoatRoughness;\n#endif\n\n#ifdef CUBEMAP_LOD\nuniform samplerCube envMap;\n#endif\n#ifdef PANORAMA\nuniform sampler2D envMap;\n#endif\nuniform vec2 uEnvironmentSize;\nuniform vec2 uEnvironmentLodRange;\n\n#ifdef SPECULAR_GLOSSINESS\n    uniform vec3 specularFactor;\n    uniform float glossinessFactor;\n    #ifdef USE_SPECULARMAP\n\t    uniform sampler2D specularMap;\n    #endif\n    #ifdef USE_GLOSSINESSMAP\n\t    uniform sampler2D glossinessMap;\n    #endif\n#endif\n\nvarying vec3 vNormal;\nvarying vec3 vWorldNormal;\n#ifdef USE_TANGENT\n    varying vec3 vTangent;\n    varying vec3 vBitangent;\n#endif\n\n#include <common>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <color_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <map_pars_fragment>\n#include <aomap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n\n#preImport <math>\n#preImport <shadow>\n#preImport <light>\n#preImport <ibl>\n#preImport <brdf>\n#preImport <advance>\n#preImport <clearCoat>\n\nvoid main(){\n    vec3 viewDir = -normalize(vViewPosition);\n\n    vec4 diffuseColor = vec4(diffuse, opacity);\n    vec3 totalEmissiveRadiance = emissive;\n    #include <logdepthbuf_fragment>\n    #include <color_fragment>\n    #include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n    #include <map_fragment>\n    #include <emissivemap_fragment>\n\n    float roughnessVal;\n    #ifdef SPECULAR_GLOSSINESS\n        roughnessVal = glossinessFactor;\n        #ifdef USE_GLOSSINESSMAP\n            roughnessVal = texture2D(glossinessMap, vUv).a * glossinessFactor;\n        #endif\n        roughnessVal = 1.0 - roughnessVal;\n    #else\n        #include <roughnessmap_fragment>\n        roughnessVal = roughnessFactor;\n    #endif\n\n    vec3 materialSpecular;\n    vec3 materialDiffuse = diffuseColor.rgb;\n    #ifdef SPECULAR_GLOSSINESS\n        materialSpecular = specularFactor;\n        #ifdef USE_SPECULARMAP\n            materialSpecular = sRGBToLinear(texture2D(specularMap, vUv)).rgb * specularFactor;\n        #endif\n    #else\n        #include <metalnessmap_fragment>\n        float f0 = 0.04;\n        materialSpecular = mix(vec3(f0), diffuseColor.rgb, metalnessFactor);\n        // materialSpecular = 0.16 * reflectance * reflectance * (1.0 - metallic) + baseColor * metallic;\n        materialDiffuse = diffuseColor.rgb * (1.0 - metalnessFactor);\n    #endif\n\n    float materialF90 = 1.0;\n    #ifndef MOBILE\n    materialF90 = saturate(dot(materialSpecular, vec3(50.0 * 0.33)));\n    // cheap luminance approximation\n    // materialF90 = saturate(50.0 * materialSpecular.g);\n    #endif\n\n    // Roughness\n    float materialRoughness = clamp(roughnessVal, MIN_ROUGHNESS, 1.0);\n    #ifdef GEOMETRIC_SPECULAR_AA\n    materialRoughness = normalFiltering(materialRoughness, geometryNormal);\n    #endif\n\n    vec3 prepCompute = precomputeLight(normal, viewDir, max(0.045, materialRoughness));\n\n    // Anisotropy\n    vec3 bentAnisotropicNormal = normal;\n    #if defined(USE_TANGENT) && defined(ENABLE_ANISOTROPY)\n        float anisotropy = uAnisotropyFactor;\n        vec3 anisotropicT = normalize(vTangent.xyz);\n        vec3 anisotropicB = normalize(vBitangent.xyz);\n        // Change direction\n        mat3 anisotropyRotationMatrix = rotationMatrix3(normal, uAnisotropyRotation);\n        anisotropicB *= anisotropyRotationMatrix;\n        anisotropicT *= anisotropyRotationMatrix;\n        bentAnisotropicNormal = computeAnisotropicBentNormal(normal, viewDir, materialRoughness, anisotropicT, anisotropicB, anisotropy);\n\t#endif\n\n    // IBL\n    float NoV = dot(bentAnisotropicNormal, viewDir);\n    vec3 transformedNormal = uEnvironmentTransform * bentAnisotropicNormal;\n    vec3 diffuseIBL = materialDiffuse * computeDiffuseSPH(transformedNormal, uEnvironmentSphericalHarmonics);\n    vec3 specularDFG = integrateBRDF(materialSpecular, materialRoughness, NoV);\n    vec3 specularIBL = computeIBLSpecularUE4(specularDFG, bentAnisotropicNormal, viewDir, materialRoughness);\n    \n    // Diffuse AO\n    float materialAO = 1.0;\n    #ifdef USE_AOMAP\n\tmaterialAO = (texture2D(aoMap, vUv2).r - 1.0) * aoMapIntensity + 1.0;\n    #endif\n    #ifdef MS_DIFFUSE_AO\n    multiBounceAO(materialAO, materialDiffuse, diffuseIBL);\n    #else\n    diffuseIBL *= materialAO;\n    #endif\n    diffuseIBL *= uEnvBrightness;\n    \n    // Specular AO\n    float specularAO = 1.0;\n    #ifdef SPECULAR_AO_SEBLAGARDE\n    specularAO = computeSpecularAO(materialAO, prepCompute);\n    #elif defined(SPECULAR_AO_MARMOSETCO)\n    specularAO = occlusionHorizon(materialAO, normal, viewDir);\n    #endif\n    float energyCompensation = 1.0;\n    #ifdef ENERGY_COMPENSATION\n    energyCompensation = getEnergyCompensation(specularDFG, materialSpecular.g);\n    #endif\n    #ifdef MS_SPECULAR_AO\n    multiBounceSpecularAO(materialAO, materialSpecular, specularIBL);\n    #endif\n\n    specularIBL *= uEnvBrightness * specularAO * energyCompensation;\n\n    // ClearCoat IBL\n    #ifdef ENABLE_CLEARCOAT\n    // Todo: ClearCoat normalMap\n    // Use the geometric normal for the clear coat layer\n    float clearCoatNoV = prepCompute.z;\n    vec3 clearCoatNormal = geometryNormal;\n    float clearCoatPerceptualRoughness = clamp(uClearCoatRoughness, MIN_ROUGHNESS, 1.0);\n    #ifdef GEOMETRIC_SPECULAR_AA\n    clearCoatPerceptualRoughness = normalFiltering(materialRoughness, geometryNormal);\n    #endif\n    float clearCoatRoughness = clearCoatPerceptualRoughness * clearCoatPerceptualRoughness;\n    computeClearCoatIBL(clearCoatNoV, clearCoatNormal, clearCoatPerceptualRoughness, viewDir, specularAO, diffuseIBL, specularIBL);\n    #endif\n\n    // Light\n    float attenuation, NoL;\n    vec3 lightDir;\n    vec3 lightSpecular;\n    vec3 lightDiffuse;\n    vec3 resultLightSpecular;\n    vec3 resultLightDiffuse;\n    float resultLightClearCoat = 0.;\n    bool lighted;\n    float shadow = 1.0;\n    float shadowDistance;\n\n    #if NUM_DIR_LIGHTS > 0\n        DirectionalLight directionalLight;\n        #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n        DirectionalLightShadow directionalLightShadow;\n        #endif\n        #pragma unroll_loop_start\n\t    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n            directionalLight = directionalLights[ i ];\n            precomputeDirect(normal, viewDir, directionalLight, attenuation, lightDir, NoL);\n            // Todo: combine methods\n            #if defined(USE_TANGENT) && defined(ENABLE_ANISOTROPY)\n            anisotropicSurfaceShading(normal, viewDir, NoL, prepCompute, materialDiffuse, materialSpecular, attenuation, directionalLights[ i ].color, lightDir, materialF90, anisotropicT, anisotropicB, anisotropy, lightDiffuse, lightSpecular, lighted);\n            #else\n            surfaceShading(normal, viewDir, NoL, prepCompute, materialDiffuse, materialSpecular, attenuation, directionalLights[ i ].color, lightDir, materialF90, lightDiffuse, lightSpecular, lighted);\n            #endif\n            // ClearCoat\n            #ifdef ENABLE_CLEARCOAT\n            vec3 H = normalize(viewDir + lightDir);\n            // Todo: ClearCoat normalMap\n            float clearCoatNoH =  saturate(dot(clearCoatNormal, H));\n            float clearCoatLoH =  saturate(dot(lightDir, H));\n            float Fcc;\n            float clearCoat = clearCoatLobe(H, clearCoatNoH, clearCoatLoH, clearCoatRoughness, Fcc);\n            float clearCoatAttenuation = 1.0 - Fcc;\n\n            lightDiffuse *= clearCoatAttenuation;\n            lightSpecular *= energyCompensation * clearCoatAttenuation;\n            resultLightClearCoat += clearCoat;\n            #else\n            lightSpecular *= energyCompensation;\n            #endif\n            \n            // Shadow\n            // Mobile texture unit too little! \n            #if !defined( MOBILE ) && defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n            directionalLightShadow = directionalLightShadows[ i ];\n            shadow *= all( bvec2( directionalLight.visible, receiveShadow ) ) ? getShadow( lighted, directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ], shadowDistance ) : 1.0;\n            lightDiffuse *= shadow;\n            lightSpecular *= shadow;\n            #endif\n\n            resultLightDiffuse += lightDiffuse;\n            resultLightSpecular += lightSpecular;\n        }\n        #pragma unroll_loop_end\n    #endif\n    // Todo: Spot/Point Light\n\n    // Test\n    #ifndef ENABLE_IBL\n        diffuseIBL = vec3(0.);\n        specularIBL = vec3(0.);\n    #endif\n    #ifndef ENABLE_LIGHT\n        resultLightDiffuse = vec3(0.);\n        resultLightSpecular = vec3(0.);\n    #endif\n\n    vec3 resultDiffuse = diffuseIBL + resultLightDiffuse;\n    vec3 resultSpecular = specularIBL + resultLightSpecular;\n\n    vec3 totalResult = resultDiffuse + resultSpecular + totalEmissiveRadiance + resultLightClearCoat;\n    vec4 frag = vec4(totalResult, diffuseColor.a);\n    gl_FragColor = frag;\n    #include <tonemapping_fragment>\n    #include <encodings_fragment>\n}",
            K = function() {
                function e() {
                    Object(r["a"])(this, e), this.includePattern = /^[ \t]*#preImport +<([\w\d./]+)>/gm
                }
                return Object(s["a"])(e, [{
                    key: "getPBRShader",
                    value: function() {
                        var e = this.preParseShader(Q),
                            n = this.preParseShader(W);
                        return {
                            pbrVS: e,
                            pbrFS: n
                        }
                    }
                }, {
                    key: "preParseShader",
                    value: function(e) {
                        var n = this,
                            t = function(e, t) {
                                var a = Y[t];
                                if (void 0 === a) throw new Error("Can not resolve #preImport <" + t + ">");
                                return n.preParseShader(a)
                            };
                        return e.replace(this.includePattern, t)
                    }
                }]), e
            }(),
            q = "./assets/envMap/",
            Z = ["Arches", "Alexs", "GCanyon", "Industrial", "Milkyway", "Outside", "PaperMill", "Royal", "TropicalRuins", "Venice"],
            J = ["Lambert", "Burley", "OrenNayar", "Gotanda", "None"],
            $ = ["Schlick", "CookTorrance", "None"],
            ee = ["GGX", "BlinnPhong", "Beckmann"],
            ne = ["SmithJointApprox", "Implicit", "Neumann", "Kelemen", "Schlick", "Smith", "HammonApprox"],
            te = ["ACESFilmic", "Linear", "Reinhard", "Uncharted2", "Cineon", "No"],
            ae = ["Seblagarde", "Marmosetco", "None"],
            ie = /(ENABLE_IBL)|(ENABLE_LIGHT)|(ENABLE_ANISOTROPY)|(ENABLE_CLEARCOAT)|(ENERGY_COMPENSATION)|(DIFFUSE_*)|(F_*)|(NDF_*)|(V_*)|(SPECULAR_AO_*)|(GEOMETRIC_SPECULAR_AA)|(MS_SPECULAR_AO)|(MS_DIFFUSE_AO)/;

        function oe(e, n, t) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                i = (new l["Box3"]).setFromObject(n),
                o = i.getSize(new l["Vector3"]),
                r = Math.max(o.x, o.y, o.z),
                s = r / (2 * Math.atan(Math.PI * e.fov / 360)),
                u = s / e.aspect,
                c = a * Math.max(s, u);
            return e.near = c / 100, e.far = 100 * c, e.position.set(0, c / 4, c), e.updateProjectionMatrix(), t && (t.maxDistance = 20 * c, t.update()), c
        }

        function re(e, n, t, a) {
            var i = (new l["Box3"]).setFromObject(t);
            e.shadow.mapSize.width = 1024, e.shadow.mapSize.height = 1024;
            var o = e.shadow.camera;
            o.position.copy(e.position), o.lookAt(new l["Vector3"](0, 0, 0)), o.position.set(0, 0, 0), o.updateMatrixWorld(!0);
            var r = new l["Matrix4"];
            if (r.getInverse(o.matrixWorld), i.applyMatrix4(r), o.left = i.min.x - .01, o.right = i.max.x + .01, o.top = i.min.y - .01, o.bottom = i.max.y + .01, o.near = -i.max.z - .01, o.far = .01 - i.min.z, o.updateProjectionMatrix(), e.shadow.bias = -.01, a) {
                var s = new l["DirectionalLightHelper"](e, 5, 16777215);
                n.add(s);
                var u = new l["CameraHelper"](o);
                n.add(u)
            }
        }
        t("c975"), t("4795");

        function se(e) {
            var n;
            return n = e.currentStyle ? e.currentStyle.width : getComputedStyle(e, !1).width, ~n.indexOf("px") && (n = n.slice(0, -2)), n
        }

        function le(e) {
            var n;
            return n = e.currentStyle ? e.currentStyle.height : getComputedStyle(e, !1).height, ~n.indexOf("px") && (n = n.slice(0, -2)), n
        }

        function ue() {
            var e = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
            return e || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent)
        }
        t("13d5"), t("a434");
        var ce = t("b85c"),
            de = t("257e"),
            fe = "#include <common>\n#include <dithering_pars_fragment>\n\nuniform sampler2D inputBuffer;\n\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\n\nvoid main() {\n\n\t// Sample top left texel.\n\tvec4 sum = texture2D(inputBuffer, vUv0);\n\n\t// Sample top right texel.\n\tsum += texture2D(inputBuffer, vUv1);\n\n\t// Sample bottom right texel.\n\tsum += texture2D(inputBuffer, vUv2);\n\n\t// Sample bottom left texel.\n\tsum += texture2D(inputBuffer, vUv3);\n\n\t// Compute the average.\n\tgl_FragColor = sum * 0.25;\n\n\t#include <dithering_fragment>\n\n}\n",
            he = "uniform vec2 texelSize;\nuniform vec2 halfTexelSize;\nuniform float kernel;\nuniform float scale;\n\n/* Packing multiple texture coordinates into one varying and using a swizzle to\nextract them in the fragment shader still causes a dependent texture read. */\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\n\nvoid main() {\n\n\tvec2 uv = position.xy * 0.5 + 0.5;\n\tvec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;\n\n\tvUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);\n\tvUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);\n\tvUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);\n\tvUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);\n\n\tgl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n",
            pe = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new l["Vector2"];
                    return Object(r["a"])(this, t), e = n.call(this, {
                        type: "ConvolutionMaterial",
                        uniforms: {
                            inputBuffer: new l["Uniform"](null),
                            texelSize: new l["Uniform"](new l["Vector2"]),
                            halfTexelSize: new l["Uniform"](new l["Vector2"]),
                            kernel: new l["Uniform"](0),
                            scale: new l["Uniform"](1)
                        },
                        fragmentShader: fe,
                        vertexShader: he,
                        depthWrite: !1,
                        depthTest: !1
                    }), e.toneMapped = !1, e.setTexelSize(a.x, a.y), e.kernelSize = ve.LARGE, e
                }
                return Object(s["a"])(t, [{
                    key: "getKernel",
                    value: function() {
                        return me[this.kernelSize]
                    }
                }, {
                    key: "setTexelSize",
                    value: function(e, n) {
                        this.uniforms.texelSize.value.set(e, n), this.uniforms.halfTexelSize.value.set(e, n).multiplyScalar(.5)
                    }
                }]), t
            }(l["ShaderMaterial"]),
            me = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])],
            ve = {
                VERY_SMALL: 0,
                SMALL: 1,
                MEDIUM: 2,
                LARGE: 3,
                VERY_LARGE: 4,
                HUGE: 5
            },
            ge = "uniform sampler2D inputBuffer;\nuniform float opacity;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tvec4 texel = texture2D(inputBuffer, vUv);\n\tgl_FragColor = opacity * texel;\n\n\t#include <encodings_fragment>\n\n}\n",
            _e = "varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = position.xy * 0.5 + 0.5;\n\tgl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n",
            Ae = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e;
                    return Object(r["a"])(this, t), e = n.call(this, {
                        type: "CopyMaterial",
                        uniforms: {
                            inputBuffer: new l["Uniform"](null),
                            opacity: new l["Uniform"](1)
                        },
                        fragmentShader: ge,
                        vertexShader: _e,
                        depthWrite: !1,
                        depthTest: !1
                    }), e.toneMapped = !1, e
                }
                return t
            }(l["ShaderMaterial"]),
            xe = (t("a9e3"), t("b680"), "#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n\nuniform sampler2D inputBuffer;\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n\n\tuniform highp sampler2D depthBuffer;\n\n#else\n\n\tuniform mediump sampler2D depthBuffer;\n\n#endif\n\nuniform vec2 resolution;\nuniform vec2 texelSize;\n\nuniform float cameraNear;\nuniform float cameraFar;\nuniform float aspect;\nuniform float time;\n\nvarying vec2 vUv;\n\nfloat readDepth(const in vec2 uv) {\n\n\t#if DEPTH_PACKING == 3201\n\n\t\treturn unpackRGBAToDepth(texture2D(depthBuffer, uv));\n\n\t#else\n\n\t\treturn texture2D(depthBuffer, uv).r;\n\n\t#endif\n\n}\n\nfloat getViewZ(const in float depth) {\n\n\t#ifdef PERSPECTIVE_CAMERA\n\n\t\treturn perspectiveDepthToViewZ(depth, cameraNear, cameraFar);\n\n\t#else\n\n\t\treturn orthographicDepthToViewZ(depth, cameraNear, cameraFar);\n\n\t#endif\n\n}\n\nFRAGMENT_HEAD\n\nvoid main() {\n\n\tFRAGMENT_MAIN_UV\n\n\tvec4 color0 = texture2D(inputBuffer, UV);\n\tvec4 color1 = vec4(0.0);\n\n\tFRAGMENT_MAIN_IMAGE\n\n\tgl_FragColor = color0;\n\n\t#ifdef ENCODE_OUTPUT\n\n\t\t#include <encodings_fragment>\n\n\t#endif\n\n\t#include <dithering_fragment>\n\n}\n"),
            be = "uniform vec2 resolution;\nuniform vec2 texelSize;\n\nuniform float cameraNear;\nuniform float cameraFar;\nuniform float aspect;\nuniform float time;\n\nvarying vec2 vUv;\n\nVERTEX_HEAD\n\nvoid main() {\n\n\tvUv = position.xy * 0.5 + 0.5;\n\n\tVERTEX_MAIN_SUPPORT\n\n\tgl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n",
            ye = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        u = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return Object(r["a"])(this, t), e = n.call(this, {
                        type: "EffectMaterial",
                        defines: {
                            DEPTH_PACKING: "0",
                            ENCODE_OUTPUT: "1"
                        },
                        uniforms: {
                            inputBuffer: new l["Uniform"](null),
                            depthBuffer: new l["Uniform"](null),
                            resolution: new l["Uniform"](new l["Vector2"]),
                            texelSize: new l["Uniform"](new l["Vector2"]),
                            cameraNear: new l["Uniform"](.3),
                            cameraFar: new l["Uniform"](1e3),
                            aspect: new l["Uniform"](1),
                            time: new l["Uniform"](0)
                        },
                        depthWrite: !1,
                        depthTest: !1,
                        dithering: u
                    }), e.toneMapped = !1, null !== a && e.setShaderParts(a), null !== i && e.setDefines(i), null !== o && e.setUniforms(o), e.adoptCameraSettings(s), e
                }
                return Object(s["a"])(t, [{
                    key: "setShaderParts",
                    value: function(e) {
                        return this.fragmentShader = xe.replace(Ee.FRAGMENT_HEAD, e.get(Ee.FRAGMENT_HEAD)).replace(Ee.FRAGMENT_MAIN_UV, e.get(Ee.FRAGMENT_MAIN_UV)).replace(Ee.FRAGMENT_MAIN_IMAGE, e.get(Ee.FRAGMENT_MAIN_IMAGE)), this.vertexShader = be.replace(Ee.VERTEX_HEAD, e.get(Ee.VERTEX_HEAD)).replace(Ee.VERTEX_MAIN_SUPPORT, e.get(Ee.VERTEX_MAIN_SUPPORT)), this.needsUpdate = !0, this
                    }
                }, {
                    key: "setDefines",
                    value: function(e) {
                        var n, t = Object(ce["a"])(e.entries());
                        try {
                            for (t.s(); !(n = t.n()).done;) {
                                var a = n.value;
                                this.defines[a[0]] = a[1]
                            }
                        } catch (i) {
                            t.e(i)
                        } finally {
                            t.f()
                        }
                        return this.needsUpdate = !0, this
                    }
                }, {
                    key: "setUniforms",
                    value: function(e) {
                        var n, t = Object(ce["a"])(e.entries());
                        try {
                            for (t.s(); !(n = t.n()).done;) {
                                var a = n.value;
                                this.uniforms[a[0]] = a[1]
                            }
                        } catch (i) {
                            t.e(i)
                        } finally {
                            t.f()
                        }
                        return this
                    }
                }, {
                    key: "adoptCameraSettings",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        null !== e && (this.uniforms.cameraNear.value = e.near, this.uniforms.cameraFar.value = e.far, e instanceof l["PerspectiveCamera"] ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = !0)
                    }
                }, {
                    key: "setSize",
                    value: function(e, n) {
                        e = Math.max(e, 1), n = Math.max(n, 1), this.uniforms.resolution.value.set(e, n), this.uniforms.texelSize.value.set(1 / e, 1 / n), this.uniforms.aspect.value = e / n
                    }
                }, {
                    key: "depthPacking",
                    get: function() {
                        return Number(this.defines.DEPTH_PACKING)
                    },
                    set: function(e) {
                        this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = !0
                    }
                }]), t
            }(l["ShaderMaterial"]),
            Ee = {
                FRAGMENT_HEAD: "FRAGMENT_HEAD",
                FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
                FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
                VERTEX_HEAD: "VERTEX_HEAD",
                VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT"
            },
            Se = "uniform sampler2D inputBuffer;\n\nuniform vec2 resolution;\n\nvarying vec2 vUv;\n\n// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)\n//----------------------------------------------------------------------------------\n// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag\n// SDK Version: v3.00\n// Email:       gameworks@nvidia.com\n// Site:        http://developer.nvidia.com/\n\n// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.\n\n// Redistribution and use in source and binary forms, with or without\n// modification, are permitted provided that the following conditions\n// are met:\n//  * Redistributions of source code must retain the above copyright\n//    notice, this list of conditions and the following disclaimer.\n//  * Redistributions in binary form must reproduce the above copyright\n//    notice, this list of conditions and the following disclaimer in the\n//    documentation and/or other materials provided with the distribution.\n//  * Neither the name of NVIDIA CORPORATION nor the names of its\n//    contributors may be used to endorse or promote products derived\n//    from this software without specific prior written permission.\n\n// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ``AS IS'' AND ANY\n// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\n// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR\n// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\n// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n//----------------------------------------------------------------------------------\n\n#define FXAA_PC 1\n#define FXAA_GLSL_100 1\n#define FXAA_QUALITY_PRESET 12\n\n#define FXAA_GREEN_AS_LUMA 1\n\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_PC_CONSOLE\n    //\n    // The console algorithm for PC is included\n    // for developers targeting really low spec machines.\n    // Likely better to just run FXAA_PC, and use a really low preset.\n    //\n    #define FXAA_PC_CONSOLE 0\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_GLSL_120\n    #define FXAA_GLSL_120 0\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_GLSL_130\n    #define FXAA_GLSL_130 0\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_HLSL_3\n    #define FXAA_HLSL_3 0\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_HLSL_4\n    #define FXAA_HLSL_4 0\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_HLSL_5\n    #define FXAA_HLSL_5 0\n#endif\n/*==========================================================================*/\n#ifndef FXAA_GREEN_AS_LUMA\n    //\n    // For those using non-linear color,\n    // and either not able to get luma in alpha, or not wanting to,\n    // this enables FXAA to run using green as a proxy for luma.\n    // So with this enabled, no need to pack luma in alpha.\n    //\n    // This will turn off AA on anything which lacks some amount of green.\n    // Pure red and blue or combination of only R and B, will get no AA.\n    //\n    // Might want to lower the settings for both,\n    //    fxaaConsoleEdgeThresholdMin\n    //    fxaaQualityEdgeThresholdMin\n    // In order to insure AA does not get turned off on colors\n    // which contain a minor amount of green.\n    //\n    // 1 = On.\n    // 0 = Off.\n    //\n    #define FXAA_GREEN_AS_LUMA 0\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_EARLY_EXIT\n    //\n    // Controls algorithm's early exit path.\n    // On PS3 turning this ON adds 2 cycles to the shader.\n    // On 360 turning this OFF adds 10ths of a millisecond to the shader.\n    // Turning this off on console will result in a more blurry image.\n    // So this defaults to on.\n    //\n    // 1 = On.\n    // 0 = Off.\n    //\n    #define FXAA_EARLY_EXIT 1\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_DISCARD\n    //\n    // Only valid for PC OpenGL currently.\n    // Probably will not work when FXAA_GREEN_AS_LUMA = 1.\n    //\n    // 1 = Use discard on pixels which don't need AA.\n    //     For APIs which enable concurrent TEX+ROP from same surface.\n    // 0 = Return unchanged color on pixels which don't need AA.\n    //\n    #define FXAA_DISCARD 0\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_FAST_PIXEL_OFFSET\n    //\n    // Used for GLSL 120 only.\n    //\n    // 1 = GL API supports fast pixel offsets\n    // 0 = do not use fast pixel offsets\n    //\n    #ifdef GL_EXT_gpu_shader4\n        #define FXAA_FAST_PIXEL_OFFSET 1\n    #endif\n    #ifdef GL_NV_gpu_shader5\n        #define FXAA_FAST_PIXEL_OFFSET 1\n    #endif\n    #ifdef GL_ARB_gpu_shader5\n        #define FXAA_FAST_PIXEL_OFFSET 1\n    #endif\n    #ifndef FXAA_FAST_PIXEL_OFFSET\n        #define FXAA_FAST_PIXEL_OFFSET 0\n    #endif\n#endif\n/*--------------------------------------------------------------------------*/\n#ifndef FXAA_GATHER4_ALPHA\n    //\n    // 1 = API supports gather4 on alpha channel.\n    // 0 = API does not support gather4 on alpha channel.\n    //\n    #if (FXAA_HLSL_5 == 1)\n        #define FXAA_GATHER4_ALPHA 1\n    #endif\n    #ifdef GL_ARB_gpu_shader5\n        #define FXAA_GATHER4_ALPHA 1\n    #endif\n    #ifdef GL_NV_gpu_shader5\n        #define FXAA_GATHER4_ALPHA 1\n    #endif\n    #ifndef FXAA_GATHER4_ALPHA\n        #define FXAA_GATHER4_ALPHA 0\n    #endif\n#endif\n\n\n/*============================================================================\n                        FXAA QUALITY - TUNING KNOBS\n------------------------------------------------------------------------------\nNOTE the other tuning knobs are now in the shader function inputs!\n============================================================================*/\n#ifndef FXAA_QUALITY_PRESET\n    //\n    // Choose the quality preset.\n    // This needs to be compiled into the shader as it effects code.\n    // Best option to include multiple presets is to\n    // in each shader define the preset, then include this file.\n    //\n    // OPTIONS\n    // -----------------------------------------------------------------------\n    // 10 to 15 - default medium dither (10=fastest, 15=highest quality)\n    // 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)\n    // 39       - no dither, very expensive\n    //\n    // NOTES\n    // -----------------------------------------------------------------------\n    // 12 = slightly faster then FXAA 3.9 and higher edge quality (default)\n    // 13 = about same speed as FXAA 3.9 and better than 12\n    // 23 = closest to FXAA 3.9 visually and performance wise\n    //  _ = the lowest digit is directly related to performance\n    // _  = the highest digit is directly related to style\n    //\n    #define FXAA_QUALITY_PRESET 12\n#endif\n\n\n/*============================================================================\n\n                           FXAA QUALITY - PRESETS\n\n============================================================================*/\n\n/*============================================================================\n                     FXAA QUALITY - MEDIUM DITHER PRESETS\n============================================================================*/\n#if (FXAA_QUALITY_PRESET == 10)\n    #define FXAA_QUALITY_PS 3\n    #define FXAA_QUALITY_P0 1.5\n    #define FXAA_QUALITY_P1 3.0\n    #define FXAA_QUALITY_P2 12.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 11)\n    #define FXAA_QUALITY_PS 4\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 3.0\n    #define FXAA_QUALITY_P3 12.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 12)\n    #define FXAA_QUALITY_PS 5\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 4.0\n    #define FXAA_QUALITY_P4 12.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 13)\n    #define FXAA_QUALITY_PS 6\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 4.0\n    #define FXAA_QUALITY_P5 12.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 14)\n    #define FXAA_QUALITY_PS 7\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 4.0\n    #define FXAA_QUALITY_P6 12.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 15)\n    #define FXAA_QUALITY_PS 8\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 4.0\n    #define FXAA_QUALITY_P7 12.0\n#endif\n\n/*============================================================================\n                     FXAA QUALITY - LOW DITHER PRESETS\n============================================================================*/\n#if (FXAA_QUALITY_PRESET == 20)\n    #define FXAA_QUALITY_PS 3\n    #define FXAA_QUALITY_P0 1.5\n    #define FXAA_QUALITY_P1 2.0\n    #define FXAA_QUALITY_P2 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 21)\n    #define FXAA_QUALITY_PS 4\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 22)\n    #define FXAA_QUALITY_PS 5\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 23)\n    #define FXAA_QUALITY_PS 6\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 24)\n    #define FXAA_QUALITY_PS 7\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 3.0\n    #define FXAA_QUALITY_P6 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 25)\n    #define FXAA_QUALITY_PS 8\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 4.0\n    #define FXAA_QUALITY_P7 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 26)\n    #define FXAA_QUALITY_PS 9\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 4.0\n    #define FXAA_QUALITY_P8 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 27)\n    #define FXAA_QUALITY_PS 10\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 2.0\n    #define FXAA_QUALITY_P8 4.0\n    #define FXAA_QUALITY_P9 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 28)\n    #define FXAA_QUALITY_PS 11\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 2.0\n    #define FXAA_QUALITY_P8 2.0\n    #define FXAA_QUALITY_P9 4.0\n    #define FXAA_QUALITY_P10 8.0\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_QUALITY_PRESET == 29)\n    #define FXAA_QUALITY_PS 12\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 2.0\n    #define FXAA_QUALITY_P8 2.0\n    #define FXAA_QUALITY_P9 2.0\n    #define FXAA_QUALITY_P10 4.0\n    #define FXAA_QUALITY_P11 8.0\n#endif\n\n/*============================================================================\n                     FXAA QUALITY - EXTREME QUALITY\n============================================================================*/\n#if (FXAA_QUALITY_PRESET == 39)\n    #define FXAA_QUALITY_PS 12\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.0\n    #define FXAA_QUALITY_P2 1.0\n    #define FXAA_QUALITY_P3 1.0\n    #define FXAA_QUALITY_P4 1.0\n    #define FXAA_QUALITY_P5 1.5\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 2.0\n    #define FXAA_QUALITY_P8 2.0\n    #define FXAA_QUALITY_P9 2.0\n    #define FXAA_QUALITY_P10 4.0\n    #define FXAA_QUALITY_P11 8.0\n#endif\n\n\n\n/*============================================================================\n\n                                API PORTING\n\n============================================================================*/\n#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)\n    #define FxaaBool bool\n    #define FxaaDiscard discard\n    #define FxaaFloat float\n    #define FxaaFloat2 vec2\n    #define FxaaFloat3 vec3\n    #define FxaaFloat4 vec4\n    #define FxaaHalf float\n    #define FxaaHalf2 vec2\n    #define FxaaHalf3 vec3\n    #define FxaaHalf4 vec4\n    #define FxaaInt2 ivec2\n    #define FxaaSat(x) clamp(x, 0.0, 1.0)\n    #define FxaaTex sampler2D\n#else\n    #define FxaaBool bool\n    #define FxaaDiscard clip(-1)\n    #define FxaaFloat float\n    #define FxaaFloat2 float2\n    #define FxaaFloat3 float3\n    #define FxaaFloat4 float4\n    #define FxaaHalf half\n    #define FxaaHalf2 half2\n    #define FxaaHalf3 half3\n    #define FxaaHalf4 half4\n    #define FxaaSat(x) saturate(x)\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_GLSL_100 == 1)\n  #define FxaaTexTop(t, p) texture2D(t, p, 0.0)\n  #define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_GLSL_120 == 1)\n    // Requires,\n    //  #version 120\n    // And at least,\n    //  #extension GL_EXT_gpu_shader4 : enable\n    //  (or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)\n    #define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)\n    #if (FXAA_FAST_PIXEL_OFFSET == 1)\n        #define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)\n    #else\n        #define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)\n    #endif\n    #if (FXAA_GATHER4_ALPHA == 1)\n        // use #extension GL_ARB_gpu_shader5 : enable\n        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)\n        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)\n        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)\n        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)\n    #endif\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_GLSL_130 == 1)\n    #define FxaaTexTop(t, p) textureLod(t, p, 0.0)\n    #define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)\n    #if (FXAA_GATHER4_ALPHA == 1)\n        // use #extension GL_ARB_gpu_shader5 : enable\n        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)\n        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)\n        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)\n        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)\n    #endif\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_HLSL_3 == 1)\n    #define FxaaInt2 float2\n    #define FxaaTex sampler2D\n    #define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))\n    #define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_HLSL_4 == 1)\n    #define FxaaInt2 int2\n    struct FxaaTex { SamplerState smpl; Texture2D tex; };\n    #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)\n    #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)\n#endif\n/*--------------------------------------------------------------------------*/\n#if (FXAA_HLSL_5 == 1)\n    #define FxaaInt2 int2\n    struct FxaaTex { SamplerState smpl; Texture2D tex; };\n    #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)\n    #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)\n    #define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)\n    #define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)\n    #define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)\n    #define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)\n#endif\n\n\n/*============================================================================\n                   GREEN AS LUMA OPTION SUPPORT FUNCTION\n============================================================================*/\n#if (FXAA_GREEN_AS_LUMA == 0)\n    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }\n#else\n    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }\n#endif\n\n\n\n\n/*============================================================================\n\n                             FXAA3 QUALITY - PC\n\n============================================================================*/\n#if (FXAA_PC == 1)\n/*--------------------------------------------------------------------------*/\nFxaaFloat4 FxaaPixelShader(\n    //\n    // Use noperspective interpolation here (turn off perspective interpolation).\n    // {xy} = center of pixel\n    FxaaFloat2 pos,\n    //\n    // Used only for FXAA Console, and not used on the 360 version.\n    // Use noperspective interpolation here (turn off perspective interpolation).\n    // {xy_} = upper left of pixel\n    // {_zw} = lower right of pixel\n    FxaaFloat4 fxaaConsolePosPos,\n    //\n    // Input color texture.\n    // {rgb_} = color in linear or perceptual color space\n    // if (FXAA_GREEN_AS_LUMA == 0)\n    //     {__a} = luma in perceptual color space (not linear)\n    FxaaTex tex,\n    //\n    // Only used on the optimized 360 version of FXAA Console.\n    // For everything but 360, just use the same input here as for tex.\n    // For 360, same texture, just alias with a 2nd sampler.\n    // This sampler needs to have an exponent bias of -1.\n    FxaaTex fxaaConsole360TexExpBiasNegOne,\n    //\n    // Only used on the optimized 360 version of FXAA Console.\n    // For everything but 360, just use the same input here as for tex.\n    // For 360, same texture, just alias with a 3nd sampler.\n    // This sampler needs to have an exponent bias of -2.\n    FxaaTex fxaaConsole360TexExpBiasNegTwo,\n    //\n    // Only used on FXAA Quality.\n    // This must be from a constant/uniform.\n    // {x_} = 1.0/screenWidthInPixels\n    // {_y} = 1.0/screenHeightInPixels\n    FxaaFloat2 fxaaQualityRcpFrame,\n    //\n    // Only used on FXAA Console.\n    // This must be from a constant/uniform.\n    // This effects sub-pixel AA quality and inversely sharpness.\n    //   Where N ranges between,\n    //     N = 0.50 (default)\n    //     N = 0.33 (sharper)\n    // {x__} = -N/screenWidthInPixels\n    // {_y_} = -N/screenHeightInPixels\n    // {_z_} =  N/screenWidthInPixels\n    // {__w} =  N/screenHeightInPixels\n    FxaaFloat4 fxaaConsoleRcpFrameOpt,\n    //\n    // Only used on FXAA Console.\n    // Not used on 360, but used on PS3 and PC.\n    // This must be from a constant/uniform.\n    // {x__} = -2.0/screenWidthInPixels\n    // {_y_} = -2.0/screenHeightInPixels\n    // {_z_} =  2.0/screenWidthInPixels\n    // {__w} =  2.0/screenHeightInPixels\n    FxaaFloat4 fxaaConsoleRcpFrameOpt2,\n    //\n    // Only used on FXAA Console.\n    // Only used on 360 in place of fxaaConsoleRcpFrameOpt2.\n    // This must be from a constant/uniform.\n    // {x__} =  8.0/screenWidthInPixels\n    // {_y_} =  8.0/screenHeightInPixels\n    // {_z_} = -4.0/screenWidthInPixels\n    // {__w} = -4.0/screenHeightInPixels\n    FxaaFloat4 fxaaConsole360RcpFrameOpt2,\n    //\n    // Only used on FXAA Quality.\n    // This used to be the FXAA_QUALITY_SUBPIX define.\n    // It is here now to allow easier tuning.\n    // Choose the amount of sub-pixel aliasing removal.\n    // This can effect sharpness.\n    //   1.00 - upper limit (softer)\n    //   0.75 - default amount of filtering\n    //   0.50 - lower limit (sharper, less sub-pixel aliasing removal)\n    //   0.25 - almost off\n    //   0.00 - completely off\n    FxaaFloat fxaaQualitySubpix,\n    //\n    // Only used on FXAA Quality.\n    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.\n    // It is here now to allow easier tuning.\n    // The minimum amount of local contrast required to apply algorithm.\n    //   0.333 - too little (faster)\n    //   0.250 - low quality\n    //   0.166 - default\n    //   0.125 - high quality\n    //   0.063 - overkill (slower)\n    FxaaFloat fxaaQualityEdgeThreshold,\n    //\n    // Only used on FXAA Quality.\n    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.\n    // It is here now to allow easier tuning.\n    // Trims the algorithm from processing darks.\n    //   0.0833 - upper limit (default, the start of visible unfiltered edges)\n    //   0.0625 - high quality (faster)\n    //   0.0312 - visible limit (slower)\n    // Special notes when using FXAA_GREEN_AS_LUMA,\n    //   Likely want to set this to zero.\n    //   As colors that are mostly not-green\n    //   will appear very dark in the green channel!\n    //   Tune by looking at mostly non-green content,\n    //   then start at zero and increase until aliasing is a problem.\n    FxaaFloat fxaaQualityEdgeThresholdMin,\n    //\n    // Only used on FXAA Console.\n    // This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.\n    // It is here now to allow easier tuning.\n    // This does not effect PS3, as this needs to be compiled in.\n    //   Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.\n    //   Due to the PS3 being ALU bound,\n    //   there are only three safe values here: 2 and 4 and 8.\n    //   These options use the shaders ability to a free *|/ by 2|4|8.\n    // For all other platforms can be a non-power of two.\n    //   8.0 is sharper (default!!!)\n    //   4.0 is softer\n    //   2.0 is really soft (good only for vector graphics inputs)\n    FxaaFloat fxaaConsoleEdgeSharpness,\n    //\n    // Only used on FXAA Console.\n    // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.\n    // It is here now to allow easier tuning.\n    // This does not effect PS3, as this needs to be compiled in.\n    //   Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.\n    //   Due to the PS3 being ALU bound,\n    //   there are only two safe values here: 1/4 and 1/8.\n    //   These options use the shaders ability to a free *|/ by 2|4|8.\n    // The console setting has a different mapping than the quality setting.\n    // Other platforms can use other values.\n    //   0.125 leaves less aliasing, but is softer (default!!!)\n    //   0.25 leaves more aliasing, and is sharper\n    FxaaFloat fxaaConsoleEdgeThreshold,\n    //\n    // Only used on FXAA Console.\n    // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.\n    // It is here now to allow easier tuning.\n    // Trims the algorithm from processing darks.\n    // The console setting has a different mapping than the quality setting.\n    // This only applies when FXAA_EARLY_EXIT is 1.\n    // This does not apply to PS3,\n    // PS3 was simplified to avoid more shader instructions.\n    //   0.06 - faster but more aliasing in darks\n    //   0.05 - default\n    //   0.04 - slower and less aliasing in darks\n    // Special notes when using FXAA_GREEN_AS_LUMA,\n    //   Likely want to set this to zero.\n    //   As colors that are mostly not-green\n    //   will appear very dark in the green channel!\n    //   Tune by looking at mostly non-green content,\n    //   then start at zero and increase until aliasing is a problem.\n    FxaaFloat fxaaConsoleEdgeThresholdMin,\n    //\n    // Extra constants for 360 FXAA Console only.\n    // Use zeros or anything else for other platforms.\n    // These must be in physical constant registers and NOT immediates.\n    // Immediates will result in compiler un-optimizing.\n    // {xyzw} = float4(1.0, -1.0, 0.25, -0.25)\n    FxaaFloat4 fxaaConsole360ConstDir\n) {\n/*--------------------------------------------------------------------------*/\n    FxaaFloat2 posM;\n    posM.x = pos.x;\n    posM.y = pos.y;\n    #if (FXAA_GATHER4_ALPHA == 1)\n        #if (FXAA_DISCARD == 0)\n            FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);\n            #if (FXAA_GREEN_AS_LUMA == 0)\n                #define lumaM rgbyM.w\n            #else\n                #define lumaM rgbyM.y\n            #endif\n        #endif\n        #if (FXAA_GREEN_AS_LUMA == 0)\n            FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);\n            FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));\n        #else\n            FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);\n            FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));\n        #endif\n        #if (FXAA_DISCARD == 1)\n            #define lumaM luma4A.w\n        #endif\n        #define lumaE luma4A.z\n        #define lumaS luma4A.x\n        #define lumaSE luma4A.y\n        #define lumaNW luma4B.w\n        #define lumaN luma4B.z\n        #define lumaW luma4B.x\n    #else\n        FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);\n        #if (FXAA_GREEN_AS_LUMA == 0)\n            #define lumaM rgbyM.w\n        #else\n            #define lumaM rgbyM.y\n        #endif\n        #if (FXAA_GLSL_100 == 1)\n          FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));\n        #else\n          FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));\n        #endif\n    #endif\n/*--------------------------------------------------------------------------*/\n    FxaaFloat maxSM = max(lumaS, lumaM);\n    FxaaFloat minSM = min(lumaS, lumaM);\n    FxaaFloat maxESM = max(lumaE, maxSM);\n    FxaaFloat minESM = min(lumaE, minSM);\n    FxaaFloat maxWN = max(lumaN, lumaW);\n    FxaaFloat minWN = min(lumaN, lumaW);\n    FxaaFloat rangeMax = max(maxWN, maxESM);\n    FxaaFloat rangeMin = min(minWN, minESM);\n    FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;\n    FxaaFloat range = rangeMax - rangeMin;\n    FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);\n    FxaaBool earlyExit = range < rangeMaxClamped;\n/*--------------------------------------------------------------------------*/\n    if(earlyExit)\n        #if (FXAA_DISCARD == 1)\n            FxaaDiscard;\n        #else\n            return rgbyM;\n        #endif\n/*--------------------------------------------------------------------------*/\n    #if (FXAA_GATHER4_ALPHA == 0)\n        #if (FXAA_GLSL_100 == 1)\n          FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));\n        #else\n          FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));\n          FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));\n        #endif\n    #else\n        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));\n        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));\n    #endif\n/*--------------------------------------------------------------------------*/\n    FxaaFloat lumaNS = lumaN + lumaS;\n    FxaaFloat lumaWE = lumaW + lumaE;\n    FxaaFloat subpixRcpRange = 1.0/range;\n    FxaaFloat subpixNSWE = lumaNS + lumaWE;\n    FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;\n    FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;\n/*--------------------------------------------------------------------------*/\n    FxaaFloat lumaNESE = lumaNE + lumaSE;\n    FxaaFloat lumaNWNE = lumaNW + lumaNE;\n    FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;\n    FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;\n/*--------------------------------------------------------------------------*/\n    FxaaFloat lumaNWSW = lumaNW + lumaSW;\n    FxaaFloat lumaSWSE = lumaSW + lumaSE;\n    FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);\n    FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);\n    FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;\n    FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;\n    FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;\n    FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;\n/*--------------------------------------------------------------------------*/\n    FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;\n    FxaaFloat lengthSign = fxaaQualityRcpFrame.x;\n    FxaaBool horzSpan = edgeHorz >= edgeVert;\n    FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;\n/*--------------------------------------------------------------------------*/\n    if(!horzSpan) lumaN = lumaW;\n    if(!horzSpan) lumaS = lumaE;\n    if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;\n    FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;\n/*--------------------------------------------------------------------------*/\n    FxaaFloat gradientN = lumaN - lumaM;\n    FxaaFloat gradientS = lumaS - lumaM;\n    FxaaFloat lumaNN = lumaN + lumaM;\n    FxaaFloat lumaSS = lumaS + lumaM;\n    FxaaBool pairN = abs(gradientN) >= abs(gradientS);\n    FxaaFloat gradient = max(abs(gradientN), abs(gradientS));\n    if(pairN) lengthSign = -lengthSign;\n    FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);\n/*--------------------------------------------------------------------------*/\n    FxaaFloat2 posB;\n    posB.x = posM.x;\n    posB.y = posM.y;\n    FxaaFloat2 offNP;\n    offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;\n    offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;\n    if(!horzSpan) posB.x += lengthSign * 0.5;\n    if( horzSpan) posB.y += lengthSign * 0.5;\n/*--------------------------------------------------------------------------*/\n    FxaaFloat2 posN;\n    posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;\n    posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;\n    FxaaFloat2 posP;\n    posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;\n    posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;\n    FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;\n    FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));\n    FxaaFloat subpixE = subpixC * subpixC;\n    FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));\n/*--------------------------------------------------------------------------*/\n    if(!pairN) lumaNN = lumaSS;\n    FxaaFloat gradientScaled = gradient * 1.0/4.0;\n    FxaaFloat lumaMM = lumaM - lumaNN * 0.5;\n    FxaaFloat subpixF = subpixD * subpixE;\n    FxaaBool lumaMLTZero = lumaMM < 0.0;\n/*--------------------------------------------------------------------------*/\n    lumaEndN -= lumaNN * 0.5;\n    lumaEndP -= lumaNN * 0.5;\n    FxaaBool doneN = abs(lumaEndN) >= gradientScaled;\n    FxaaBool doneP = abs(lumaEndP) >= gradientScaled;\n    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;\n    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;\n    FxaaBool doneNP = (!doneN) || (!doneP);\n    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;\n    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;\n/*--------------------------------------------------------------------------*/\n    if(doneNP) {\n        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n        doneN = abs(lumaEndN) >= gradientScaled;\n        doneP = abs(lumaEndP) >= gradientScaled;\n        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;\n        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;\n        doneNP = (!doneN) || (!doneP);\n        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;\n        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;\n/*--------------------------------------------------------------------------*/\n        #if (FXAA_QUALITY_PS > 3)\n        if(doneNP) {\n            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n            doneN = abs(lumaEndN) >= gradientScaled;\n            doneP = abs(lumaEndP) >= gradientScaled;\n            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;\n            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;\n            doneNP = (!doneN) || (!doneP);\n            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;\n            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;\n/*--------------------------------------------------------------------------*/\n            #if (FXAA_QUALITY_PS > 4)\n            if(doneNP) {\n                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                doneN = abs(lumaEndN) >= gradientScaled;\n                doneP = abs(lumaEndP) >= gradientScaled;\n                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;\n                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;\n                doneNP = (!doneN) || (!doneP);\n                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;\n                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;\n/*--------------------------------------------------------------------------*/\n                #if (FXAA_QUALITY_PS > 5)\n                if(doneNP) {\n                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                    doneN = abs(lumaEndN) >= gradientScaled;\n                    doneP = abs(lumaEndP) >= gradientScaled;\n                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;\n                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;\n                    doneNP = (!doneN) || (!doneP);\n                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;\n                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;\n/*--------------------------------------------------------------------------*/\n                    #if (FXAA_QUALITY_PS > 6)\n                    if(doneNP) {\n                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                        doneN = abs(lumaEndN) >= gradientScaled;\n                        doneP = abs(lumaEndP) >= gradientScaled;\n                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;\n                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;\n                        doneNP = (!doneN) || (!doneP);\n                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;\n                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;\n/*--------------------------------------------------------------------------*/\n                        #if (FXAA_QUALITY_PS > 7)\n                        if(doneNP) {\n                            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                            doneN = abs(lumaEndN) >= gradientScaled;\n                            doneP = abs(lumaEndP) >= gradientScaled;\n                            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;\n                            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;\n                            doneNP = (!doneN) || (!doneP);\n                            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;\n                            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;\n/*--------------------------------------------------------------------------*/\n    #if (FXAA_QUALITY_PS > 8)\n    if(doneNP) {\n        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n        doneN = abs(lumaEndN) >= gradientScaled;\n        doneP = abs(lumaEndP) >= gradientScaled;\n        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;\n        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;\n        doneNP = (!doneN) || (!doneP);\n        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;\n        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;\n/*--------------------------------------------------------------------------*/\n        #if (FXAA_QUALITY_PS > 9)\n        if(doneNP) {\n            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n            doneN = abs(lumaEndN) >= gradientScaled;\n            doneP = abs(lumaEndP) >= gradientScaled;\n            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;\n            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;\n            doneNP = (!doneN) || (!doneP);\n            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;\n            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;\n/*--------------------------------------------------------------------------*/\n            #if (FXAA_QUALITY_PS > 10)\n            if(doneNP) {\n                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                doneN = abs(lumaEndN) >= gradientScaled;\n                doneP = abs(lumaEndP) >= gradientScaled;\n                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;\n                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;\n                doneNP = (!doneN) || (!doneP);\n                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;\n                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;\n/*--------------------------------------------------------------------------*/\n                #if (FXAA_QUALITY_PS > 11)\n                if(doneNP) {\n                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                    doneN = abs(lumaEndN) >= gradientScaled;\n                    doneP = abs(lumaEndP) >= gradientScaled;\n                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;\n                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;\n                    doneNP = (!doneN) || (!doneP);\n                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;\n                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;\n/*--------------------------------------------------------------------------*/\n                    #if (FXAA_QUALITY_PS > 12)\n                    if(doneNP) {\n                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                        doneN = abs(lumaEndN) >= gradientScaled;\n                        doneP = abs(lumaEndP) >= gradientScaled;\n                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;\n                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;\n                        doneNP = (!doneN) || (!doneP);\n                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;\n                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;\n/*--------------------------------------------------------------------------*/\n                    }\n                    #endif\n/*--------------------------------------------------------------------------*/\n                }\n                #endif\n/*--------------------------------------------------------------------------*/\n            }\n            #endif\n/*--------------------------------------------------------------------------*/\n        }\n        #endif\n/*--------------------------------------------------------------------------*/\n    }\n    #endif\n/*--------------------------------------------------------------------------*/\n                        }\n                        #endif\n/*--------------------------------------------------------------------------*/\n                    }\n                    #endif\n/*--------------------------------------------------------------------------*/\n                }\n                #endif\n/*--------------------------------------------------------------------------*/\n            }\n            #endif\n/*--------------------------------------------------------------------------*/\n        }\n        #endif\n/*--------------------------------------------------------------------------*/\n    }\n/*--------------------------------------------------------------------------*/\n    FxaaFloat dstN = posM.x - posN.x;\n    FxaaFloat dstP = posP.x - posM.x;\n    if(!horzSpan) dstN = posM.y - posN.y;\n    if(!horzSpan) dstP = posP.y - posM.y;\n/*--------------------------------------------------------------------------*/\n    FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;\n    FxaaFloat spanLength = (dstP + dstN);\n    FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;\n    FxaaFloat spanLengthRcp = 1.0/spanLength;\n/*--------------------------------------------------------------------------*/\n    FxaaBool directionN = dstN < dstP;\n    FxaaFloat dst = min(dstN, dstP);\n    FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;\n    FxaaFloat subpixG = subpixF * subpixF;\n    FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;\n    FxaaFloat subpixH = subpixG * fxaaQualitySubpix;\n/*--------------------------------------------------------------------------*/\n    FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;\n    FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);\n    if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;\n    if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;\n    #if (FXAA_DISCARD == 1)\n        return FxaaTexTop(tex, posM);\n    #else\n        return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);\n    #endif\n}\n/*==========================================================================*/\n#endif\n\nvoid main() {\n  gl_FragColor = FxaaPixelShader(\n    vUv,\n    vec4(0.0),\n    inputBuffer,\n    inputBuffer,\n    inputBuffer,\n    resolution,\n    vec4(0.0),\n    vec4(0.0),\n    vec4(0.0),\n    0.75,\n    0.166,\n    0.0833,\n    0.0,\n    0.0,\n    0.0,\n    vec4(0.0)\n  );\n\n  // TODO avoid querying texture twice for same texel\n  gl_FragColor.a = texture2D(inputBuffer, vUv).a;\n  #include <encodings_fragment>\n}",
            Te = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e;
                    return Object(r["a"])(this, t), e = n.call(this, {
                        type: "FXAAMaterial",
                        uniforms: {
                            inputBuffer: new l["Uniform"](null),
                            resolution: {
                                value: new l["Vector2"](1 / 1024, 1 / 512)
                            }
                        },
                        fragmentShader: Se,
                        vertexShader: _e,
                        depthWrite: !1,
                        depthTest: !1
                    }), e.toneMapped = !1, e
                }
                return t
            }(l["ShaderMaterial"]),
            Fe = "#include <common>\n\nuniform sampler2D inputBuffer;\n\n#ifdef RANGE\n\n\tuniform vec2 range;\n\n#elif defined(THRESHOLD)\n\n\tuniform float threshold;\n\tuniform float smoothing;\n\n#endif\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tvec4 texel = texture2D(inputBuffer, vUv);\n\tfloat l = linearToRelativeLuminance(texel.rgb);\n\n\t#ifdef RANGE\n\n\t\t// Apply a luminance range mask.\n\t\tfloat low = step(range.x, l);\n\t\tfloat high = step(l, range.y);\n\n\t\tl *= low * high;\n\n\t#elif defined(THRESHOLD)\n\n\t\tl = smoothstep(threshold, threshold + smoothing, l);\n\n\t#endif\n\n\t#ifdef COLOR\n\n\t\tgl_FragColor = vec4(texel.rgb * l, l);\n\n\t#else\n\n\t\tgl_FragColor = vec4(l);\n\n\t#endif\n\n}\n",
            Le = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    Object(r["a"])(this, t);
                    var o = null !== i;
                    return e = n.call(this, {
                        type: "LuminanceMaterial",
                        uniforms: {
                            inputBuffer: new l["Uniform"](null),
                            threshold: new l["Uniform"](0),
                            smoothing: new l["Uniform"](1),
                            range: new l["Uniform"](o ? i : new l["Vector2"])
                        },
                        fragmentShader: Fe,
                        vertexShader: _e,
                        depthWrite: !1,
                        depthTest: !1
                    }), e.toneMapped = !1, e.colorOutput = a, e.useThreshold = !0, e.useRange = o, e
                }
                return Object(s["a"])(t, [{
                    key: "setColorOutputEnabled",
                    value: function(e) {
                        e ? this.defines.COLOR = "1" : delete this.defines.COLOR, this.needsUpdate = !0
                    }
                }, {
                    key: "setLuminanceRangeEnabled",
                    value: function(e) {
                        e ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.needsUpdate = !0
                    }
                }, {
                    key: "threshold",
                    get: function() {
                        return this.uniforms.threshold.value
                    },
                    set: function(e) {
                        this.uniforms.threshold.value = e
                    }
                }, {
                    key: "smoothing",
                    get: function() {
                        return this.uniforms.smoothing.value
                    },
                    set: function(e) {
                        this.uniforms.smoothing.value = e
                    }
                }, {
                    key: "useThreshold",
                    get: function() {
                        return void 0 !== this.defines.THRESHOLD
                    },
                    set: function(e) {
                        e ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.needsUpdate = !0
                    }
                }, {
                    key: "colorOutput",
                    get: function() {
                        return void 0 !== this.defines.COLOR
                    },
                    set: function(e) {
                        e ? this.defines.COLOR = "1" : delete this.defines.COLOR, this.needsUpdate = !0
                    }
                }, {
                    key: "useRange",
                    get: function() {
                        return void 0 !== this.defines.RANGE
                    },
                    set: function(e) {
                        e ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.needsUpdate = !0
                    }
                }, {
                    key: "luminanceRange",
                    get: function() {
                        return void 0 !== this.defines.RANGE
                    },
                    set: function(e) {
                        e ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.needsUpdate = !0
                    }
                }]), t
            }(l["ShaderMaterial"]),
            Ne = -1,
            Pe = function() {
                function e(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ne,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ne;
                    Object(r["a"])(this, e), this.resizable = n, this.base = new l["Vector2"](1, 1), this.target = new l["Vector2"](t, a), this.scale = 1
                }
                return Object(s["a"])(e, [{
                    key: "width",
                    get: function() {
                        var e, n = this.base,
                            t = this.target;
                        return e = t.x !== Ne ? t.x : t.y !== Ne ? Math.round(t.y * (n.x / n.y)) : Math.round(n.x * this.scale), e
                    },
                    set: function(e) {
                        this.target.x = e, this.resizable.setSize(this.base.x, this.base.y)
                    }
                }, {
                    key: "height",
                    get: function() {
                        var e, n = this.base,
                            t = this.target;
                        return e = t.y !== Ne ? t.y : t.x !== Ne ? Math.round(t.x / (n.x / n.y)) : Math.round(n.y * this.scale), e
                    },
                    set: function(e) {
                        this.target.y = e, this.resizable.setSize(this.base.x, this.base.y)
                    }
                }], [{
                    key: "AUTO_SIZE",
                    get: function() {
                        return Ne
                    }
                }]), e
            }(),
            we = new l["Camera"],
            Oe = null;

        function Re() {
            if (null === Oe) {
                var e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                    n = new Float32Array([0, 0, 2, 0, 0, 2]);
                Oe = new l["BufferGeometry"], void 0 !== Oe.setAttribute ? (Oe.setAttribute("position", new l["BufferAttribute"](e, 3)), Oe.setAttribute("uv", new l["BufferAttribute"](n, 2))) : (Oe.addAttribute("position", new l["BufferAttribute"](e, 3)), Oe.addAttribute("uv", new l["BufferAttribute"](n, 2)))
            }
            return Oe
        }
        var Me = function() {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Pass",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new l["Scene"],
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : we;
                    Object(r["a"])(this, e), this.name = n, this.scene = t, this.camera = a, this.screen = null, this.rtt = !0, this.needsSwap = !0, this.needsDepthTexture = !1, this.enabled = !0
                }
                return Object(s["a"])(e, [{
                    key: "getFullscreenMaterial",
                    value: function() {
                        return null !== this.screen ? this.screen.material : null
                    }
                }, {
                    key: "setFullscreenMaterial",
                    value: function(e) {
                        var n = this.screen;
                        null !== n ? n.material = e : (n = new l["Mesh"](Re(), e), n.frustumCulled = !1, null === this.scene && (this.scene = new l["Scene"]), this.scene.add(n), this.screen = n)
                    }
                }, {
                    key: "getDepthTexture",
                    value: function() {
                        return null
                    }
                }, {
                    key: "setDepthTexture",
                    value: function(e) {
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    }
                }, {
                    key: "render",
                    value: function(e, n, t, a, i) {
                        throw new Error("Render method not implemented!")
                    }
                }, {
                    key: "setSize",
                    value: function(e, n) {}
                }, {
                    key: "initialize",
                    value: function(e, n, t) {}
                }, {
                    key: "dispose",
                    value: function() {
                        var e = this.getFullscreenMaterial();
                        null !== e && e.dispose();
                        for (var n = 0, t = Object.keys(this); n < t.length; n++) {
                            var a = t[n];
                            null !== this[a] && "function" === typeof this[a].dispose && this[a].dispose()
                        }
                    }
                }, {
                    key: "renderToScreen",
                    get: function() {
                        return !this.rtt
                    },
                    set: function(e) {
                        if (this.rtt === e) {
                            var n = this.getFullscreenMaterial();
                            null !== n && (n.needsUpdate = !0), this.rtt = !e
                        }
                    }
                }]), e
            }(),
            Ce = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = a.resolutionScale,
                        o = void 0 === i ? .5 : i,
                        s = a.width,
                        u = void 0 === s ? Pe.AUTO_SIZE : s,
                        c = a.height,
                        d = void 0 === c ? Pe.AUTO_SIZE : c,
                        f = a.kernelSize,
                        h = void 0 === f ? ve.LARGE : f;
                    return Object(r["a"])(this, t), e = n.call(this, "BlurPass"), e.renderTargetA = new l["WebGLRenderTarget"](1, 1, {
                        minFilter: l["LinearFilter"],
                        magFilter: l["LinearFilter"],
                        stencilBuffer: !1,
                        depthBuffer: !1
                    }), e.renderTargetA.texture.name = "Blur.Target.A", e.renderTargetB = e.renderTargetA.clone(), e.renderTargetB.texture.name = "Blur.Target.B", e.resolution = new Pe(Object(de["a"])(e), u, d), e.resolution.scale = o, e.convolutionMaterial = new pe, e.ditheredConvolutionMaterial = new pe, e.ditheredConvolutionMaterial.dithering = !0, e.dithering = !1, e.kernelSize = h, e
                }
                return Object(s["a"])(t, [{
                    key: "getResolutionScale",
                    value: function() {
                        return this.resolution.scale
                    }
                }, {
                    key: "setResolutionScale",
                    value: function(e) {
                        this.resolution.scale = e, this.setSize(this.resolution.base.x, this.resolution.base.y)
                    }
                }, {
                    key: "render",
                    value: function(e, n, t, a, i) {
                        var o, r, s, l = this.scene,
                            u = this.camera,
                            c = this.renderTargetA,
                            d = this.renderTargetB,
                            f = this.convolutionMaterial,
                            h = f.uniforms,
                            p = f.getKernel(),
                            m = n;
                        for (this.setFullscreenMaterial(f), r = 0, s = p.length - 1; r < s; ++r) o = 0 === (1 & r) ? c : d, h.kernel.value = p[r], h.inputBuffer.value = m.texture, e.setRenderTarget(o), e.render(l, u), m = o;
                        this.dithering && (f = this.ditheredConvolutionMaterial, h = f.uniforms, this.setFullscreenMaterial(f)), h.kernel.value = p[r], h.inputBuffer.value = m.texture, e.setRenderTarget(this.renderToScreen ? null : t), e.render(l, u)
                    }
                }, {
                    key: "setSize",
                    value: function(e, n) {
                        var t = this.resolution;
                        t.base.set(e, n), e = t.width, n = t.height, this.renderTargetA.setSize(e, n), this.renderTargetB.setSize(e, n), this.convolutionMaterial.setTexelSize(1 / e, 1 / n), this.ditheredConvolutionMaterial.setTexelSize(1 / e, 1 / n)
                    }
                }, {
                    key: "initialize",
                    value: function(e, n, t) {
                        n || t !== l["UnsignedByteType"] || (this.renderTargetA.texture.format = l["RGBFormat"], this.renderTargetB.texture.format = l["RGBFormat"]), void 0 !== t && (this.renderTargetA.texture.type = t, this.renderTargetB.texture.type = t)
                    }
                }, {
                    key: "width",
                    get: function() {
                        return this.resolution.width
                    },
                    set: function(e) {
                        this.resolution.width = e
                    }
                }, {
                    key: "height",
                    get: function() {
                        return this.resolution.height
                    },
                    set: function(e) {
                        this.resolution.height = e
                    }
                }, {
                    key: "scale",
                    get: function() {
                        return this.convolutionMaterial.uniforms.scale.value
                    },
                    set: function(e) {
                        this.convolutionMaterial.uniforms.scale.value = e, this.ditheredConvolutionMaterial.uniforms.scale.value = e
                    }
                }, {
                    key: "kernelSize",
                    get: function() {
                        return this.convolutionMaterial.kernelSize
                    },
                    set: function(e) {
                        this.convolutionMaterial.kernelSize = e, this.ditheredConvolutionMaterial.kernelSize = e
                    }
                }], [{
                    key: "AUTO_SIZE",
                    get: function() {
                        return Pe.AUTO_SIZE
                    }
                }]), t
            }(Me),
            Ie = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e;
                    return Object(r["a"])(this, t), e = n.call(this, "ClearMaskPass", null, null), e.needsSwap = !1, e
                }
                return Object(s["a"])(t, [{
                    key: "render",
                    value: function(e, n, t, a, i) {
                        var o = e.state.buffers.stencil;
                        o.setLocked(!1), o.setTest(!1)
                    }
                }]), t
            }(Me),
            Ue = new l["Color"],
            De = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e, a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return Object(r["a"])(this, t), e = n.call(this, "ClearPass", null, null), e.needsSwap = !1, e.color = a, e.depth = i, e.stencil = o, e.overrideClearColor = null, e.overrideClearAlpha = -1, e
                }
                return Object(s["a"])(t, [{
                    key: "render",
                    value: function(e, n, t, a, i) {
                        var o = this.overrideClearColor,
                            r = this.overrideClearAlpha,
                            s = e.getClearAlpha(),
                            l = null !== o,
                            u = r >= 0;
                        l ? (Ue.copy(e.getClearColor()), e.setClearColor(o, u ? r : s)) : u && e.setClearAlpha(r), e.setRenderTarget(this.renderToScreen ? null : n), e.clear(this.color, this.depth, this.stencil), l ? e.setClearColor(Ue, s) : u && e.setClearAlpha(s)
                    }
                }]), t
            }(Me),
            ke = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e, a) {
                    var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return Object(r["a"])(this, t), i = n.call(this, "RenderPass", e, a), i.needsSwap = !1, i.overrideMaterial = o, i.clearPass = new De, i.depthTexture = null, i
                }
                return Object(s["a"])(t, [{
                    key: "getClearPass",
                    value: function() {
                        return this.clearPass
                    }
                }, {
                    key: "getDepthTexture",
                    value: function() {
                        return this.depthTexture
                    }
                }, {
                    key: "setDepthTexture",
                    value: function(e) {
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.depthTexture = e
                    }
                }, {
                    key: "render",
                    value: function(e, n, t, a, i) {
                        var o = this.scene,
                            r = this.renderToScreen ? null : n,
                            s = o.overrideMaterial;
                        null === this.depthTexture || this.renderToScreen || (n.depthTexture = this.depthTexture, t.depthTexture = null), this.clear && (this.clearPass.renderToScreen = this.renderToScreen, this.clearPass.render(e, n)), o.overrideMaterial = this.overrideMaterial, e.setRenderTarget(r), e.render(o, this.camera), o.overrideMaterial = s
                    }
                }, {
                    key: "clear",
                    get: function() {
                        return this.clearPass.enabled
                    },
                    set: function(e) {
                        this.clearPass.enabled = e
                    }
                }]), t
            }(Me),
            Be = (t("a630"), t("4e82"), t("4ec9"), t("4d63"), t("25f0"), t("6062"), t("3ca3"), t("498a"), t("45eb")),
            He = t("7e84"),
            Ge = {
                SKIP: 0,
                ADD: 1,
                ALPHA: 2,
                AVERAGE: 3,
                COLOR_BURN: 4,
                COLOR_DODGE: 5,
                DARKEN: 6,
                DIFFERENCE: 7,
                EXCLUSION: 8,
                LIGHTEN: 9,
                MULTIPLY: 10,
                DIVIDE: 11,
                NEGATION: 12,
                NORMAL: 13,
                OVERLAY: 14,
                REFLECT: 15,
                SCREEN: 16,
                SOFT_LIGHT: 17,
                SUBTRACT: 18
            },
            Xe = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn min(x + y, 1.0) * opacity + x * (1.0 - opacity);\n\n}\n",
            Ve = "vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\n\treturn y * opacity + x * (1.0 - opacity);\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tfloat a = min(y.a, opacity);\n\n\treturn vec4(blend(x.rgb, y.rgb, a), max(x.a, a));\n\n}\n",
            ze = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn (x + y) * 0.5 * opacity + x * (1.0 - opacity);\n\n}\n",
            je = "float blend(const in float x, const in float y) {\n\n\treturn (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\n\n\treturn z * opacity + x * (1.0 - opacity);\n\n}\n",
            Ye = "float blend(const in float x, const in float y) {\n\n\treturn (y == 1.0) ? y : min(x / (1.0 - y), 1.0);\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\n\n\treturn z * opacity + x * (1.0 - opacity);\n\n}\n",
            Qe = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn min(x, y) * opacity + x * (1.0 - opacity);\n\n}\n",
            We = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn abs(x - y) * opacity + x * (1.0 - opacity);\n\n}\n",
            Ke = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);\n\n}\n",
            qe = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn max(x, y) * opacity + x * (1.0 - opacity);\n\n}\n",
            Ze = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn x * y * opacity + x * (1.0 - opacity);\n\n}\n",
            Je = "float blend(const in float x, const in float y) {\n\n\treturn (y > 0.0) ? min(x / y, 1.0) : 1.0;\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\n\n\treturn z * opacity + x * (1.0 - opacity);\n\n}\n",
            $e = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);\n\n}\n",
            en = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn y * opacity + x * (1.0 - opacity);\n\n}\n",
            nn = "float blend(const in float x, const in float y) {\n\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\n\n\treturn z * opacity + x * (1.0 - opacity);\n\n}\n",
            tn = "float blend(const in float x, const in float y) {\n\n\treturn (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\n\n\treturn z * opacity + x * (1.0 - opacity);\n\n}\n",
            an = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);\n\n}\n",
            on = "float blend(const in float x, const in float y) {\n\n\treturn (y < 0.5) ?\n\t\t(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :\n\t\t(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\n\n\treturn z * opacity + x * (1.0 - opacity);\n\n}\n",
            rn = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);\n\n}\n",
            sn = new Map([
                [Ge.SKIP, null],
                [Ge.ADD, Xe],
                [Ge.ALPHA, Ve],
                [Ge.AVERAGE, ze],
                [Ge.COLOR_BURN, je],
                [Ge.COLOR_DODGE, Ye],
                [Ge.DARKEN, Qe],
                [Ge.DIFFERENCE, We],
                [Ge.EXCLUSION, Ke],
                [Ge.LIGHTEN, qe],
                [Ge.MULTIPLY, Ze],
                [Ge.DIVIDE, Je],
                [Ge.NEGATION, $e],
                [Ge.NORMAL, en],
                [Ge.OVERLAY, nn],
                [Ge.REFLECT, tn],
                [Ge.SCREEN, an],
                [Ge.SOFT_LIGHT, on],
                [Ge.SUBTRACT, rn]
            ]),
            ln = function() {
                function e(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    Object(r["a"])(this, e), this.blendFunction = n, this.opacity = new l["Uniform"](t)
                }
                return Object(s["a"])(e, [{
                    key: "getShaderCode",
                    value: function() {
                        return sn.get(this.blendFunction)
                    }
                }]), e
            }(),
            un = function() {
                function e(n, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = a.attributes,
                        o = void 0 === i ? cn.NONE : i,
                        s = a.blendFunction,
                        l = void 0 === s ? Ge.SCREEN : s,
                        u = a.defines,
                        c = void 0 === u ? new Map : u,
                        d = a.uniforms,
                        f = void 0 === d ? new Map : d,
                        h = a.extensions,
                        p = void 0 === h ? null : h,
                        m = a.vertexShader,
                        v = void 0 === m ? null : m;
                    Object(r["a"])(this, e), this.name = n, this.attributes = o, this.fragmentShader = t, this.vertexShader = v, this.defines = c, this.uniforms = f, this.extensions = p, this.blendMode = new ln(l)
                }
                return Object(s["a"])(e, [{
                    key: "setDepthTexture",
                    value: function(e) {
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    }
                }, {
                    key: "update",
                    value: function(e, n, t) {}
                }, {
                    key: "setSize",
                    value: function(e, n) {}
                }, {
                    key: "initialize",
                    value: function(e, n, t) {}
                }, {
                    key: "dispose",
                    value: function() {
                        for (var e = 0, n = Object.keys(this); e < n.length; e++) {
                            var t = n[e];
                            null !== this[t] && "function" === typeof this[t].dispose && this[t].dispose()
                        }
                    }
                }]), e
            }(),
            cn = {
                CONVOLUTION: 2,
                DEPTH: 1,
                NONE: 0
            };

        function dn(e, n) {
            var t, a = [];
            while (null !== (t = e.exec(n))) a.push(t[1]);
            return a
        }

        function fn(e, n, t) {
            var a, i, o, r = Object(ce["a"])(n);
            try {
                for (r.s(); !(o = r.n()).done;) {
                    var s = o.value;
                    a = "$1" + e + s.charAt(0).toUpperCase() + s.slice(1), i = new RegExp("([^\\.])(\\b" + s + "\\b)", "g");
                    var l, u = Object(ce["a"])(t.entries());
                    try {
                        for (u.s(); !(l = u.n()).done;) {
                            var c = l.value;
                            null !== c[1] && t.set(c[0], c[1].replace(i, a))
                        }
                    } catch (d) {
                        u.e(d)
                    } finally {
                        u.f()
                    }
                }
            } catch (d) {
                r.e(d)
            } finally {
                r.f()
            }
        }

        function hn(e, n, t, a, i, o, r) {
            var s = /(?:\w+\s+(\w+)\([\w\s,]*\)\s*{[^}]+})/g,
                l = /(?:varying\s+\w+\s+(\w*))/g,
                u = n.blendMode,
                c = new Map([
                    ["fragment", n.fragmentShader],
                    ["vertex", n.vertexShader]
                ]),
                d = void 0 !== c.get("fragment") && c.get("fragment").indexOf("mainImage") >= 0,
                f = void 0 !== c.get("fragment") && c.get("fragment").indexOf("mainUv") >= 0,
                h = [],
                p = [],
                m = !1,
                v = !1;
            if (void 0 === c.get("fragment")) console.error("Missing fragment shader", n);
            else if (f && 0 !== (r & cn.CONVOLUTION)) console.error("Effects that transform UV coordinates are incompatible with convolution effects", n);
            else if (d || f) {
                if (f && (t.set(Ee.FRAGMENT_MAIN_UV, t.get(Ee.FRAGMENT_MAIN_UV) + "\t" + e + "MainUv(UV);\n"), m = !0), null !== c.get("vertex") && c.get("vertex").indexOf("mainSupport") >= 0) {
                    var g = "\t" + e + "MainSupport(";
                    c.get("vertex").indexOf("uv") >= 0 && (g += "vUv"), g += ");\n", t.set(Ee.VERTEX_MAIN_SUPPORT, t.get(Ee.VERTEX_MAIN_SUPPORT) + g), h = h.concat(dn(l, c.get("vertex"))), p = p.concat(h).concat(dn(s, c.get("vertex")))
                }
                if (p = p.concat(dn(s, c.get("fragment"))).concat(Array.from(n.defines.keys()).map((function(e) {
                        return e.replace(/\([\w\s,]*\)/g, "")
                    }))).concat(Array.from(n.uniforms.keys())), n.uniforms.forEach((function(n, t) {
                        return o.set(e + t.charAt(0).toUpperCase() + t.slice(1), n)
                    })), n.defines.forEach((function(n, t) {
                        return i.set(e + t.charAt(0).toUpperCase() + t.slice(1), n)
                    })), fn(e, p, i), fn(e, p, c), a.set(u.blendFunction, u), d) {
                    var _ = e + "MainImage(color0, UV, ";
                    0 !== (r & cn.DEPTH) && c.get("fragment").indexOf("depth") >= 0 && (_ += "depth, ", v = !0), _ += "color1);\n\t";
                    var A = e + "BlendOpacity";
                    o.set(A, u.opacity), _ += "color0 = blend" + u.blendFunction + "(color0, color1, " + A + ");\n\n\t", t.set(Ee.FRAGMENT_MAIN_IMAGE, t.get(Ee.FRAGMENT_MAIN_IMAGE) + _), t.set(Ee.FRAGMENT_HEAD, t.get(Ee.FRAGMENT_HEAD) + "uniform float " + A + ";\n\n")
                }
                t.set(Ee.FRAGMENT_HEAD, t.get(Ee.FRAGMENT_HEAD) + c.get("fragment") + "\n"), null !== c.get("vertex") && t.set(Ee.VERTEX_HEAD, t.get(Ee.VERTEX_HEAD) + c.get("vertex") + "\n")
            } else console.error("The fragment shader contains neither a mainImage nor a mainUv function", n);
            return {
                varyings: h,
                transformedUv: m,
                readDepth: v
            }
        }
        var pn = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e) {
                    var a;
                    Object(r["a"])(this, t), a = n.call(this, "EffectPass"), a.setFullscreenMaterial(new ye(null, null, null, e));
                    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                    return a.effects = o.sort((function(e, n) {
                        return n.attributes - e.attributes
                    })), a.skipRendering = !1, a.uniforms = 0, a.varyings = 0, a.minTime = 1, a.maxTime = 1e3, a
                }
                return Object(s["a"])(t, [{
                    key: "updateMaterial",
                    value: function() {
                        var e, n, t = /\bblend\b/g,
                            a = new Map([
                                [Ee.FRAGMENT_HEAD, ""],
                                [Ee.FRAGMENT_MAIN_UV, ""],
                                [Ee.FRAGMENT_MAIN_IMAGE, ""],
                                [Ee.VERTEX_HEAD, ""],
                                [Ee.VERTEX_MAIN_SUPPORT, ""]
                            ]),
                            i = new Map,
                            o = new Map,
                            r = new Map,
                            s = new Set,
                            l = 0,
                            u = 0,
                            c = 0,
                            d = !1,
                            f = !1,
                            h = Object(ce["a"])(this.effects);
                        try {
                            for (h.s(); !(n = h.n()).done;) {
                                var p = n.value;
                                if (p.blendMode.blendFunction === Ge.SKIP) c |= p.attributes & cn.DEPTH;
                                else if (0 !== (c & cn.CONVOLUTION) && 0 !== (p.attributes & cn.CONVOLUTION)) console.error("Convolution effects cannot be merged", p);
                                else if (c |= p.attributes, e = hn("e" + l++, p, a, i, o, r, c), u += e.varyings.length, d = d || e.transformedUv, f = f || e.readDepth, null !== p.extensions) {
                                    var m, v = Object(ce["a"])(p.extensions);
                                    try {
                                        for (v.s(); !(m = v.n()).done;) {
                                            var g = m.value;
                                            s.add(g)
                                        }
                                    } catch (T) {
                                        v.e(T)
                                    } finally {
                                        v.f()
                                    }
                                }
                            }
                        } catch (T) {
                            h.e(T)
                        } finally {
                            h.f()
                        }
                        var _, A = Object(ce["a"])(i.values());
                        try {
                            for (A.s(); !(_ = A.n()).done;) {
                                var x = _.value;
                                a.set(Ee.FRAGMENT_HEAD, a.get(Ee.FRAGMENT_HEAD) + x.getShaderCode().replace(t, "blend" + x.blendFunction) + "\n")
                            }
                        } catch (T) {
                            A.e(T)
                        } finally {
                            A.f()
                        }
                        0 !== (c & cn.DEPTH) ? (f && a.set(Ee.FRAGMENT_MAIN_IMAGE, "float depth = readDepth(UV);\n\n\t" + a.get(Ee.FRAGMENT_MAIN_IMAGE)), this.needsDepthTexture = null === this.getDepthTexture()) : this.needsDepthTexture = !1, d ? (a.set(Ee.FRAGMENT_MAIN_UV, "vec2 transformedUv = vUv;\n" + a.get(Ee.FRAGMENT_MAIN_UV)), o.set("UV", "transformedUv")) : o.set("UV", "vUv"), a.forEach((function(e, n, t) {
                            return t.set(n, e.trim().replace(/^#/, "\n#"))
                        })), this.uniforms = r.size, this.varyings = u, this.skipRendering = 0 === l, this.needsSwap = !this.skipRendering;
                        var b = this.getFullscreenMaterial();
                        if (b.setShaderParts(a).setDefines(o).setUniforms(r), b.extensions = {}, s.size > 0) {
                            var y, E = Object(ce["a"])(s);
                            try {
                                for (E.s(); !(y = E.n()).done;) {
                                    var S = y.value;
                                    b.extensions[S] = !0
                                }
                            } catch (T) {
                                E.e(T)
                            } finally {
                                E.f()
                            }
                        }
                    }
                }, {
                    key: "recompile",
                    value: function() {
                        this.updateMaterial()
                    }
                }, {
                    key: "getDepthTexture",
                    value: function() {
                        return this.getFullscreenMaterial().uniforms.depthBuffer.value
                    }
                }, {
                    key: "setDepthTexture",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            t = this.getFullscreenMaterial();
                        t.uniforms.depthBuffer.value = e, t.depthPacking = n, t.needsUpdate = !0;
                        var a, i = Object(ce["a"])(this.effects);
                        try {
                            for (i.s(); !(a = i.n()).done;) {
                                var o = a.value;
                                o.setDepthTexture(e, n)
                            }
                        } catch (r) {
                            i.e(r)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "render",
                    value: function(e, n, t, a, i) {
                        var o, r = this.getFullscreenMaterial(),
                            s = r.uniforms.time.value + a,
                            l = Object(ce["a"])(this.effects);
                        try {
                            for (l.s(); !(o = l.n()).done;) {
                                var u = o.value;
                                u.update(e, n, a)
                            }
                        } catch (c) {
                            l.e(c)
                        } finally {
                            l.f()
                        }
                        this.skipRendering && !this.renderToScreen || (r.uniforms.inputBuffer.value = n.texture, r.uniforms.time.value = s <= this.maxTime ? s : this.minTime, e.setRenderTarget(this.renderToScreen ? null : t), e.render(this.scene, this.camera))
                    }
                }, {
                    key: "setSize",
                    value: function(e, n) {
                        this.getFullscreenMaterial().setSize(e, n);
                        var t, a = Object(ce["a"])(this.effects);
                        try {
                            for (a.s(); !(t = a.n()).done;) {
                                var i = t.value;
                                i.setSize(e, n)
                            }
                        } catch (o) {
                            a.e(o)
                        } finally {
                            a.f()
                        }
                    }
                }, {
                    key: "initialize",
                    value: function(e, n, t) {
                        var a, i = Object(ce["a"])(this.effects);
                        try {
                            for (i.s(); !(a = i.n()).done;) {
                                var o = a.value;
                                o.initialize(e, n, t)
                            }
                        } catch (l) {
                            i.e(l)
                        } finally {
                            i.f()
                        }
                        this.updateMaterial();
                        var r = e.capabilities,
                            s = Math.min(r.maxFragmentUniforms, r.maxVertexUniforms);
                        this.uniforms > s && console.warn("The current rendering context doesn't support more than " + s + " uniforms, but " + this.uniforms + " were defined"), s = r.maxVaryings, this.varyings > s && console.warn("The current rendering context doesn't support more than " + s + " varyings, but " + this.varyings + " were defined")
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        Object(Be["a"])(Object(He["a"])(t.prototype), "dispose", this).call(this);
                        var e, n = Object(ce["a"])(this.effects);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var a = e.value;
                                a.dispose()
                            }
                        } catch (i) {
                            n.e(i)
                        } finally {
                            n.f()
                        }
                    }
                }, {
                    key: "encodeOutput",
                    get: function() {
                        return void 0 !== this.getFullscreenMaterial().defines.ENCODE_OUTPUT
                    },
                    set: function(e) {
                        if (this.encodeOutput !== e) {
                            var n = this.getFullscreenMaterial();
                            n.needsUpdate = !0, e ? n.defines.ENCODE_OUTPUT = "1" : delete n.defines.ENCODE_OUTPUT
                        }
                    }
                }, {
                    key: "dithering",
                    get: function() {
                        return this.getFullscreenMaterial().dithering
                    },
                    set: function(e) {
                        var n = this.getFullscreenMaterial();
                        n.dithering !== e && (n.dithering = e, n.needsUpdate = !0)
                    }
                }]), t
            }(Me),
            mn = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e, a) {
                    var i;
                    return Object(r["a"])(this, t), i = n.call(this, "MaskPass", e, a), i.needsSwap = !1, i.clearPass = new De(!1, !1, !0), i.inverse = !1, i
                }
                return Object(s["a"])(t, [{
                    key: "render",
                    value: function(e, n, t, a, i) {
                        var o = e.getContext(),
                            r = e.state.buffers,
                            s = this.scene,
                            l = this.camera,
                            u = this.clearPass,
                            c = this.inverse ? 0 : 1,
                            d = 1 - c;
                        r.color.setMask(!1), r.depth.setMask(!1), r.color.setLocked(!0), r.depth.setLocked(!0), r.stencil.setTest(!0), r.stencil.setOp(o.REPLACE, o.REPLACE, o.REPLACE), r.stencil.setFunc(o.ALWAYS, c, 4294967295), r.stencil.setClear(d), r.stencil.setLocked(!0), this.clear && (this.renderToScreen ? u.render(e, null) : (u.render(e, n), u.render(e, t))), this.renderToScreen ? (e.setRenderTarget(null), e.render(s, l)) : (e.setRenderTarget(n), e.render(s, l), e.setRenderTarget(t), e.render(s, l)), r.color.setLocked(!1), r.depth.setLocked(!1), r.stencil.setLocked(!1), r.stencil.setFunc(o.EQUAL, 1, 4294967295), r.stencil.setOp(o.KEEP, o.KEEP, o.KEEP), r.stencil.setLocked(!0)
                    }
                }, {
                    key: "clear",
                    get: function() {
                        return this.clearPass.enabled
                    },
                    set: function(e) {
                        this.clearPass.enabled = e
                    }
                }]), t
            }(Me),
            vn = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e, a) {
                    var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        s = o.resolutionScale,
                        u = void 0 === s ? 1 : s,
                        c = o.width,
                        d = void 0 === c ? Pe.AUTO_SIZE : c,
                        f = o.height,
                        h = void 0 === f ? Pe.AUTO_SIZE : f,
                        p = o.renderTarget;
                    Object(r["a"])(this, t), i = n.call(this, "NormalPass"), i.needsSwap = !1, i.renderPass = new ke(e, a, new l["MeshNormalMaterial"]({
                        morphTargets: !0,
                        morphNormals: !0,
                        skinning: !0
                    }));
                    var m = i.renderPass.getClearPass();
                    return m.overrideClearColor = new l["Color"](7829503), m.overrideClearAlpha = 1, i.renderTarget = p, void 0 === i.renderTarget && (i.renderTarget = new l["WebGLRenderTarget"](1, 1, {
                        minFilter: l["LinearFilter"],
                        magFilter: l["LinearFilter"],
                        format: l["RGBFormat"],
                        stencilBuffer: !1
                    }), i.renderTarget.texture.name = "NormalPass.Target"), i.resolution = new Pe(Object(de["a"])(i), d, h), i.resolution.scale = u, i
                }
                return Object(s["a"])(t, [{
                    key: "getResolutionScale",
                    value: function() {
                        return this.resolutionScale
                    }
                }, {
                    key: "setResolutionScale",
                    value: function(e) {
                        this.resolutionScale = e, this.setSize(this.originalSize.x, this.originalSize.y)
                    }
                }, {
                    key: "render",
                    value: function(e, n, t, a, i) {
                        var o = this.renderToScreen ? null : this.renderTarget;
                        this.renderPass.render(e, o, o)
                    }
                }, {
                    key: "setSize",
                    value: function(e, n) {
                        var t = this.resolution;
                        t.base.set(e, n), e = t.width, n = t.height, this.renderTarget.setSize(e, n)
                    }
                }]), t
            }(Me),
            gn = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e) {
                    var a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "inputBuffer";
                    return Object(r["a"])(this, t), a = n.call(this, "ShaderPass"), a.setFullscreenMaterial(e), a.uniform = null, a.setInput(i), a
                }
                return Object(s["a"])(t, [{
                    key: "setInput",
                    value: function(e) {
                        var n = this.getFullscreenMaterial();
                        if (this.uniform = null, null !== n) {
                            var t = n.uniforms;
                            void 0 !== t && void 0 !== t[e] && (this.uniform = t[e])
                        }
                    }
                }, {
                    key: "render",
                    value: function(e, n, t, a, i) {
                        null !== this.uniform && null !== n && (this.uniform.value = n.texture), e.setRenderTarget(this.renderToScreen ? null : t), e.render(this.scene, this.camera)
                    }
                }]), t
            }(Me),
            _n = function() {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = t.depthBuffer,
                        i = void 0 === a || a,
                        o = t.stencilBuffer,
                        s = void 0 !== o && o,
                        l = t.multisampling,
                        u = void 0 === l ? 0 : l,
                        c = t.frameBufferType;
                    Object(r["a"])(this, e), this.renderer = n, this.inputBuffer = null, this.outputBuffer = null, null !== this.renderer && (this.renderer.autoClear = !1, this.inputBuffer = this.createBuffer(i, s, c, u), this.outputBuffer = this.inputBuffer.clone(), this.enableExtensions()), this.copyPass = new gn(new Ae), this.depthTexture = null, this.passes = [], this.autoRenderToScreen = !0
                }
                return Object(s["a"])(e, [{
                    key: "getRenderer",
                    value: function() {
                        return this.renderer
                    }
                }, {
                    key: "enableExtensions",
                    value: function() {
                        var e = this.inputBuffer.texture.type,
                            n = this.renderer.capabilities,
                            t = this.renderer.getContext();
                        e !== l["UnsignedByteType"] && (n.isWebGL2 ? t.getExtension("EXT_color_buffer_float") : t.getExtension("EXT_color_buffer_half_float"))
                    }
                }, {
                    key: "replaceRenderer",
                    value: function(e) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            t = this.renderer;
                        if (null !== t && t !== e) {
                            var a = t.getSize(new l["Vector2"]),
                                i = e.getSize(new l["Vector2"]),
                                o = t.domElement.parentNode;
                            this.renderer = e, this.renderer.autoClear = !1, a.equals(i) || this.setSize(), n && null !== o && (o.removeChild(t.domElement), o.appendChild(e.domElement)), this.enableExtensions()
                        }
                        return t
                    }
                }, {
                    key: "createDepthTexture",
                    value: function() {
                        var e = this.depthTexture = new l["DepthTexture"];
                        return this.inputBuffer.stencilBuffer ? (e.format = l["DepthStencilFormat"], e.type = l["UnsignedInt248Type"]) : e.type = l["UnsignedIntType"], e
                    }
                }, {
                    key: "createBuffer",
                    value: function(e, n, t, a) {
                        var i = this.renderer.getDrawingBufferSize(new l["Vector2"]),
                            o = this.renderer.getContext().getContextAttributes().alpha,
                            r = {
                                format: o || t !== l["UnsignedByteType"] ? l["RGBAFormat"] : l["RGBFormat"],
                                minFilter: l["LinearFilter"],
                                magFilter: l["LinearFilter"],
                                stencilBuffer: n,
                                depthBuffer: e,
                                type: t
                            },
                            s = a > 0 ? new l["WebGLMultisampleRenderTarget"](i.width, i.height, r) : new l["WebGLRenderTarget"](i.width, i.height, r);
                        return a > 0 && (s.samples = a), s.texture.name = "EffectComposer.Buffer", s.texture.generateMipmaps = !1, s
                    }
                }, {
                    key: "addPass",
                    value: function(e, n) {
                        var t = this.passes,
                            a = this.renderer,
                            i = a.getContext().getContextAttributes().alpha,
                            o = this.inputBuffer.texture.type,
                            r = a.getDrawingBufferSize(new l["Vector2"]);
                        if (e.setSize(r.width, r.height), e.initialize(a, i, o), this.autoRenderToScreen && (t.length > 0 && (t[t.length - 1].renderToScreen = !1), e.renderToScreen && (this.autoRenderToScreen = !1)), void 0 !== n ? t.splice(n, 0, e) : t.push(e), this.autoRenderToScreen && (t[t.length - 1].renderToScreen = !0), e.needsDepthTexture || null !== this.depthTexture)
                            if (null === this.depthTexture) {
                                var s, u = this.createDepthTexture(),
                                    c = Object(ce["a"])(t);
                                try {
                                    for (c.s(); !(s = c.n()).done;) e = s.value, e.setDepthTexture(u)
                                } catch (d) {
                                    c.e(d)
                                } finally {
                                    c.f()
                                }
                            } else e.setDepthTexture(this.depthTexture)
                    }
                }, {
                    key: "removePass",
                    value: function(e) {
                        var n = this.passes,
                            t = n.indexOf(e),
                            a = n.splice(t, 1).length > 0;
                        if (a) {
                            if (null !== this.depthTexture) {
                                var i = function(e, n) {
                                        return e || n.needsDepthTexture
                                    },
                                    o = n.reduce(i, !1);
                                if (!o) {
                                    this.depthTexture.dispose(), this.depthTexture = null, this.inputBuffer.depthTexture = null, this.outputBuffer.depthTexture = null, e.setDepthTexture(null);
                                    var r, s = Object(ce["a"])(n);
                                    try {
                                        for (s.s(); !(r = s.n()).done;) e = r.value, e.setDepthTexture(null)
                                    } catch (l) {
                                        s.e(l)
                                    } finally {
                                        s.f()
                                    }
                                }
                            }
                            this.autoRenderToScreen && n.length > 0 && t === n.length && (n[n.length - 1].renderToScreen = !0)
                        }
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        var n, t, a, i, o = this.renderer,
                            r = this.copyPass,
                            s = this.inputBuffer,
                            l = this.outputBuffer,
                            u = !1,
                            c = Object(ce["a"])(this.passes);
                        try {
                            for (c.s(); !(i = c.n()).done;) {
                                var d = i.value;
                                d.enabled && (d.render(o, s, l, e, u), d.needsSwap && (u && (r.renderToScreen = d.renderToScreen, n = o.getContext(), t = o.state.buffers.stencil, t.setFunc(n.NOTEQUAL, 1, 4294967295), r.render(o, s, l, e, u), t.setFunc(n.EQUAL, 1, 4294967295)), a = s, s = l, l = a), d instanceof mn ? u = !0 : d instanceof Ie && (u = !1))
                            }
                        } catch (f) {
                            c.e(f)
                        } finally {
                            c.f()
                        }
                    }
                }, {
                    key: "setSize",
                    value: function(e, n, t) {
                        var a = this.renderer;
                        if (void 0 === e || void 0 === n) {
                            var i = a.getSize(new l["Vector2"]);
                            e = i.width, n = i.height
                        }
                        a.setSize(e, n, t);
                        var o = a.getDrawingBufferSize(new l["Vector2"]);
                        this.inputBuffer.setSize(o.width, o.height), this.outputBuffer.setSize(o.width, o.height);
                        var r, s = Object(ce["a"])(this.passes);
                        try {
                            for (s.s(); !(r = s.n()).done;) {
                                var u = r.value;
                                u.setSize(o.width, o.height)
                            }
                        } catch (c) {
                            s.e(c)
                        } finally {
                            s.f()
                        }
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var e = this.inputBuffer.clone();
                        this.dispose(), this.inputBuffer = e, this.outputBuffer = e.clone(), this.depthTexture = null, this.copyPass = new gn(new Ae), this.autoRenderToScreen = !0
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        var e, n = Object(ce["a"])(this.passes);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var t = e.value;
                                t.dispose()
                            }
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                        this.passes = [], null !== this.inputBuffer && (this.inputBuffer.dispose(), this.inputBuffer = null), null !== this.outputBuffer && (this.outputBuffer.dispose(), this.outputBuffer = null), null !== this.depthTexture && this.depthTexture.dispose(), this.copyPass.dispose()
                    }
                }, {
                    key: "multisampling",
                    get: function() {
                        return this.inputBuffer instanceof l["WebGLMultisampleRenderTarget"] ? this.inputBuffer.samples : 0
                    },
                    set: function(e) {
                        var n = this.inputBuffer,
                            t = this.multisampling;
                        t > 0 && e > 0 ? (this.inputBuffer.samples = e, this.outputBuffer.samples = e) : t !== e && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(n.depthBuffer, n.stencilBuffer, n.texture.type, e), this.outputBuffer = this.inputBuffer.clone())
                    }
                }]), e
            }(),
            An = "uniform sampler2D texture;\nuniform float intensity;\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\n\n\toutputColor = clamp(texture2D(texture, uv) * intensity, 0.0, 1.0);\n\n}\n",
            xn = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = a.blendFunction,
                        o = void 0 === i ? Ge.SCREEN : i,
                        s = a.luminanceThreshold,
                        u = void 0 === s ? .9 : s,
                        c = a.luminanceSmoothing,
                        d = void 0 === c ? .025 : c,
                        f = a.resolutionScale,
                        h = void 0 === f ? .5 : f,
                        p = a.intensity,
                        m = void 0 === p ? 1 : p,
                        v = a.width,
                        g = void 0 === v ? Pe.AUTO_SIZE : v,
                        _ = a.height,
                        A = void 0 === _ ? Pe.AUTO_SIZE : _,
                        x = a.kernelSize,
                        b = void 0 === x ? ve.LARGE : x;
                    return Object(r["a"])(this, t), e = n.call(this, "BloomEffect", An, {
                        blendFunction: o,
                        uniforms: new Map([
                            ["texture", new l["Uniform"](null)],
                            ["intensity", new l["Uniform"](m)]
                        ])
                    }), e.renderTarget = new l["WebGLRenderTarget"](1, 1, {
                        minFilter: l["LinearFilter"],
                        magFilter: l["LinearFilter"],
                        stencilBuffer: !1,
                        depthBuffer: !1
                    }), e.renderTarget.texture.name = "Bloom.Target", e.renderTarget.texture.generateMipmaps = !1, e.uniforms.get("texture").value = e.renderTarget.texture, e.blurPass = new Ce({
                        resolutionScale: h,
                        width: g,
                        height: A,
                        kernelSize: b
                    }), e.blurPass.resolution.resizable = Object(de["a"])(e), e.luminancePass = new gn(new Le(!0)), e.luminanceMaterial.threshold = u, e.luminanceMaterial.smoothing = d, e
                }
                return Object(s["a"])(t, [{
                    key: "getResolutionScale",
                    value: function() {
                        return this.resolution.scale
                    }
                }, {
                    key: "setResolutionScale",
                    value: function(e) {
                        this.resolution.scale = e, this.setSize(this.resolution.base.x, this.resolution.base.y)
                    }
                }, {
                    key: "update",
                    value: function(e, n, t) {
                        var a = this.renderTarget;
                        this.luminancePass.enabled ? (this.luminancePass.render(e, n, a), this.blurPass.render(e, a, a)) : this.blurPass.render(e, n, a)
                    }
                }, {
                    key: "setSize",
                    value: function(e, n) {
                        this.blurPass.setSize(e, n), this.renderTarget.setSize(this.resolution.width, this.resolution.height)
                    }
                }, {
                    key: "initialize",
                    value: function(e, n, t) {
                        this.blurPass.initialize(e, n, t), n || t !== l["UnsignedByteType"] || (this.renderTarget.texture.format = l["RGBFormat"]), void 0 !== t && (this.renderTarget.texture.type = t)
                    }
                }, {
                    key: "texture",
                    get: function() {
                        return this.renderTarget.texture
                    }
                }, {
                    key: "luminanceMaterial",
                    get: function() {
                        return this.luminancePass.getFullscreenMaterial()
                    }
                }, {
                    key: "resolution",
                    get: function() {
                        return this.blurPass.resolution
                    }
                }, {
                    key: "width",
                    get: function() {
                        return this.resolution.width
                    },
                    set: function(e) {
                        this.resolution.width = e
                    }
                }, {
                    key: "height",
                    get: function() {
                        return this.resolution.height
                    },
                    set: function(e) {
                        this.resolution.height = e
                    }
                }, {
                    key: "dithering",
                    get: function() {
                        return this.blurPass.dithering
                    },
                    set: function(e) {
                        this.blurPass.dithering = e
                    }
                }, {
                    key: "kernelSize",
                    get: function() {
                        return this.blurPass.kernelSize
                    },
                    set: function(e) {
                        this.blurPass.kernelSize = e
                    }
                }, {
                    key: "distinction",
                    get: function() {
                        return console.warn(this.name, "The distinction field has been removed, use luminanceMaterial.threshold and luminanceMaterial.smoothing instead."), 1
                    },
                    set: function(e) {
                        console.warn(this.name, "The distinction field has been removed, use luminanceMaterial.threshold and luminanceMaterial.smoothing instead.")
                    }
                }, {
                    key: "intensity",
                    get: function() {
                        return this.uniforms.get("intensity").value
                    },
                    set: function(e) {
                        this.uniforms.get("intensity").value = e
                    }
                }]), t
            }(un),
            bn = "void mainImage(const in vec4 inputColor, const in vec2 uv, const in float depth, out vec4 outputColor) {\n\n\t#ifdef INVERTED\n\n\t\tvec3 color = vec3(1.0 - depth);\n\n\t#else\n\n\t\tvec3 color = vec3(depth);\n\n\t#endif\n\n\toutputColor = vec4(color, inputColor.a);\n\n}\n",
            yn = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t() {
                    var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = a.blendFunction,
                        o = void 0 === i ? Ge.NORMAL : i,
                        s = a.inverted,
                        l = void 0 !== s && s;
                    return Object(r["a"])(this, t), e = n.call(this, "DepthEffect", bn, {
                        blendFunction: o,
                        attributes: cn.DEPTH
                    }), e.inverted = l, e
                }
                return Object(s["a"])(t, [{
                    key: "inverted",
                    get: function() {
                        return this.defines.has("INVERTED")
                    },
                    set: function(e) {
                        e ? this.defines.set("INVERTED", "1") : this.defines["delete"]("INVERTED")
                    }
                }]), t
            }(un),
            En = "uniform sampler2D normalBuffer;\n\nuniform mat4 cameraProjectionMatrix;\nuniform mat4 cameraInverseProjectionMatrix;\n\nuniform vec2 radiusStep;\nuniform vec2 distanceCutoff;\nuniform vec2 proximityCutoff;\nuniform float seed;\nuniform float luminanceInfluence;\nuniform float scale;\nuniform float bias;\n\nvec3 getViewPosition(const in vec2 screenPosition, const in float depth, const in float viewZ) {\n\n\tfloat clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];\n\tvec4 clipPosition = vec4((vec3(screenPosition, depth) - 0.5) * 2.0, 1.0);\n\tclipPosition *= clipW; // Unproject.\n\n\treturn (cameraInverseProjectionMatrix * clipPosition).xyz;\n\n}\n\nfloat getOcclusion(const in vec3 p, const in vec3 n, const in vec3 sampleViewPosition) {\n\n\tvec3 viewDelta = sampleViewPosition - p;\n\tfloat d = length(viewDelta) * scale;\n\n\treturn max(0.0, dot(n, viewDelta) / d - bias) / (1.0 + pow2(d));\n\n}\n\nfloat getAmbientOcclusion(const in vec3 p, const in vec3 n, const in float depth, const in vec2 uv) {\n\n\tvec2 radius = radiusStep;\n\tfloat angle = rand(uv + seed) * PI2;\n\tfloat occlusionSum = 0.0;\n\n\tfor(int i = 0; i < SAMPLES_INT; ++i) {\n\n\t\tvec2 coord = uv + vec2(cos(angle), sin(angle)) * radius;\n\t\tradius += radiusStep;\n\t\tangle += ANGLE_STEP;\n\n\t\tfloat sampleDepth = readDepth(coord);\n\t\tfloat viewZ = getViewZ(sampleDepth);\n\n\t\t#ifdef PERSPECTIVE_CAMERA\n\n\t\t\tfloat linearSampleDepth = viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);\n\n\t\t#else\n\n\t\t\tfloat linearSampleDepth = sampleDepth;\n\n\t\t#endif\n\n\t\tfloat proximity = abs(depth - linearSampleDepth);\n\n\t\tif(linearSampleDepth < distanceCutoff.y && proximity < proximityCutoff.y) {\n\n\t\t\tfloat falloff = 1.0 - smoothstep(proximityCutoff.x, proximityCutoff.y, proximity);\n\t\t\tvec3 sampleViewPosition = getViewPosition(coord, sampleDepth, viewZ);\n\t\t\tocclusionSum += getOcclusion(p, n, sampleViewPosition) * falloff;\n\n\t\t}\n\n\t}\n\n\treturn occlusionSum / SAMPLES_FLOAT;\n\n}\n\nvoid mainImage(const in vec4 inputColor, const in vec2 uv, const in float depth, out vec4 outputColor) {\n\n\tfloat ao = 1.0;\n\tfloat viewZ = getViewZ(depth);\n\n\t#ifdef PERSPECTIVE_CAMERA\n\n\t\tfloat linearDepth = viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);\n\n\t#else\n\n\t\tfloat linearDepth = depth;\n\n\t#endif\n\n\t// Skip fragments of objects that are too far away.\n\tif(linearDepth < distanceCutoff.y) {\n\n\t\tvec3 viewPosition = getViewPosition(uv, depth, viewZ);\n\t\tvec3 viewNormal = unpackRGBToNormal(texture2D(normalBuffer, uv).xyz);\n\t\tao -= getAmbientOcclusion(viewPosition, viewNormal, linearDepth, uv);\n\n\t\t// Fade AO based on luminance and depth.\n\t\tfloat l = linearToRelativeLuminance(inputColor.rgb);\n\t\tfloat d = smoothstep(distanceCutoff.x, distanceCutoff.y, linearDepth);\n\t\tfloat f = max(l * luminanceInfluence, d);\n\t\tao = mix(ao, 1.0, f);\n\t}\n\n\toutputColor = vec4(vec3(ao), inputColor.a);\n\n}\n",
            Sn = function(e) {
                Object(b["a"])(t, e);
                var n = Object(y["a"])(t);

                function t(e, a) {
                    var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        s = o.blendFunction,
                        u = void 0 === s ? Ge.MULTIPLY : s,
                        c = o.samples,
                        d = void 0 === c ? 11 : c,
                        f = o.rings,
                        h = void 0 === f ? 4 : f,
                        p = o.distanceThreshold,
                        m = void 0 === p ? .97 : p,
                        v = o.distanceFalloff,
                        g = void 0 === v ? .03 : v,
                        _ = o.rangeThreshold,
                        A = void 0 === _ ? 5e-4 : _,
                        x = o.rangeFalloff,
                        b = void 0 === x ? .001 : x,
                        y = o.luminanceInfluence,
                        E = void 0 === y ? .7 : y,
                        S = o.radius,
                        T = void 0 === S ? 18.25 : S,
                        F = o.scale,
                        L = void 0 === F ? 1 : F,
                        N = o.bias,
                        P = void 0 === N ? 0 : N;
                    return Object(r["a"])(this, t), i = n.call(this, "SSAOEffect", En, {
                        blendFunction: u,
                        attributes: cn.DEPTH,
                        defines: new Map([
                            ["RINGS_INT", "0"],
                            ["SAMPLES_INT", "0"],
                            ["SAMPLES_FLOAT", "0.0"]
                        ]),
                        uniforms: new Map([
                            ["normalBuffer", new l["Uniform"](a)],
                            ["cameraInverseProjectionMatrix", new l["Uniform"](new l["Matrix4"])],
                            ["cameraProjectionMatrix", new l["Uniform"](new l["Matrix4"])],
                            ["radiusStep", new l["Uniform"](new l["Vector2"])],
                            ["distanceCutoff", new l["Uniform"](new l["Vector2"])],
                            ["proximityCutoff", new l["Uniform"](new l["Vector2"])],
                            ["seed", new l["Uniform"](Math.random())],
                            ["luminanceInfluence", new l["Uniform"](E)],
                            ["scale", new l["Uniform"](L)],
                            ["bias", new l["Uniform"](P)]
                        ])
                    }), i.r = 0, i.resolution = new l["Vector2"](1, 1), i.camera = e, i.samples = d, i.rings = h, i.radius = T, i.setDistanceCutoff(m, g), i.setProximityCutoff(A, b), i
                }
                return Object(s["a"])(t, [{
                    key: "updateAngleStep",
                    value: function() {
                        this.defines.set("ANGLE_STEP", (2 * Math.PI * this.rings / this.samples).toFixed(11))
                    }
                }, {
                    key: "updateRadiusStep",
                    value: function() {
                        var e = this.r / this.samples;
                        this.uniforms.get("radiusStep").value.set(e, e).divide(this.resolution)
                    }
                }, {
                    key: "setDistanceCutoff",
                    value: function(e, n) {
                        this.uniforms.get("distanceCutoff").value.set(Math.min(Math.max(e, 0), 1), Math.min(Math.max(e + n, 0), 1))
                    }
                }, {
                    key: "setProximityCutoff",
                    value: function(e, n) {
                        this.uniforms.get("proximityCutoff").value.set(Math.min(Math.max(e, 0), 1), Math.min(Math.max(e + n, 0), 1))
                    }
                }, {
                    key: "setSize",
                    value: function(e, n) {
                        this.resolution.set(e, n), this.updateRadiusStep(), this.uniforms.get("cameraInverseProjectionMatrix").value.getInverse(this.camera.projectionMatrix), this.uniforms.get("cameraProjectionMatrix").value.copy(this.camera.projectionMatrix)
                    }
                }, {
                    key: "samples",
                    get: function() {
                        return Number(this.defines.get("SAMPLES_INT"))
                    },
                    set: function(e) {
                        e = Math.floor(e), this.defines.set("SAMPLES_INT", e.toFixed(0)), this.defines.set("SAMPLES_FLOAT", e.toFixed(1)), this.updateAngleStep(), this.updateRadiusStep()
                    }
                }, {
                    key: "rings",
                    get: function() {
                        return Number(this.defines.get("RINGS_INT"))
                    },
                    set: function(e) {
                        e = Math.floor(e), this.defines.set("RINGS_INT", e.toFixed(0)), this.updateAngleStep()
                    }
                }, {
                    key: "radius",
                    get: function() {
                        return this.r
                    },
                    set: function(e) {
                        this.r = e, this.updateRadiusStep()
                    }
                }]), t
            }(un),
            Tn = (t("a4d3"), t("e01a"), t("d28b"), t("277d"), t("a15b"), t("0d03"), t("1d1c"), t("7a82"), t("e439"), t("3410"), t("131a"), t("acd8"), t("e25e"), t("466d"), t("1276"), t("53ca"));

        function Fn(e) {
            if (e && "undefined" !== typeof window) {
                var n = document.createElement("style");
                return n.setAttribute("type", "text/css"), n.innerHTML = e, document.head.appendChild(n), e
            }
        }

        function Ln(e, n) {
            var t = e.__state.conversionName.toString(),
                a = Math.round(e.r),
                i = Math.round(e.g),
                o = Math.round(e.b),
                r = e.a,
                s = Math.round(e.h),
                l = e.s.toFixed(1),
                u = e.v.toFixed(1);
            if (n || "THREE_CHAR_HEX" === t || "SIX_CHAR_HEX" === t) {
                var c = e.hex.toString(16);
                while (c.length < 6) c = "0" + c;
                return "#" + c
            }
            return "CSS_RGB" === t ? "rgb(" + a + "," + i + "," + o + ")" : "CSS_RGBA" === t ? "rgba(" + a + "," + i + "," + o + "," + r + ")" : "HEX" === t ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === t ? "[" + a + "," + i + "," + o + "]" : "RGBA_ARRAY" === t ? "[" + a + "," + i + "," + o + "," + r + "]" : "RGB_OBJ" === t ? "{r:" + a + ",g:" + i + ",b:" + o + "}" : "RGBA_OBJ" === t ? "{r:" + a + ",g:" + i + ",b:" + o + ",a:" + r + "}" : "HSV_OBJ" === t ? "{h:" + s + ",s:" + l + ",v:" + u + "}" : "HSVA_OBJ" === t ? "{h:" + s + ",s:" + l + ",v:" + u + ",a:" + r + "}" : "unknown format"
        }
        var Nn = Array.prototype.forEach,
            Pn = Array.prototype.slice,
            wn = {
                BREAK: {},
                extend: function(e) {
                    return this.each(Pn.call(arguments, 1), (function(n) {
                        var t = this.isObject(n) ? Object.keys(n) : [];
                        t.forEach(function(t) {
                            this.isUndefined(n[t]) || (e[t] = n[t])
                        }.bind(this))
                    }), this), e
                },
                defaults: function(e) {
                    return this.each(Pn.call(arguments, 1), (function(n) {
                        var t = this.isObject(n) ? Object.keys(n) : [];
                        t.forEach(function(t) {
                            this.isUndefined(e[t]) && (e[t] = n[t])
                        }.bind(this))
                    }), this), e
                },
                compose: function() {
                    var e = Pn.call(arguments);
                    return function() {
                        for (var n = Pn.call(arguments), t = e.length - 1; t >= 0; t--) n = [e[t].apply(this, n)];
                        return n[0]
                    }
                },
                each: function(e, n, t) {
                    if (e)
                        if (Nn && e.forEach && e.forEach === Nn) e.forEach(n, t);
                        else if (e.length === e.length + 0) {
                        var a = void 0,
                            i = void 0;
                        for (a = 0, i = e.length; a < i; a++)
                            if (a in e && n.call(t, e[a], a) === this.BREAK) return
                    } else
                        for (var o in e)
                            if (n.call(t, e[o], o) === this.BREAK) return
                },
                defer: function(e) {
                    setTimeout(e, 0)
                },
                debounce: function(e, n, t) {
                    var a = void 0;
                    return function() {
                        var i = this,
                            o = arguments;

                        function r() {
                            a = null, t || e.apply(i, o)
                        }
                        var s = t || !a;
                        clearTimeout(a), a = setTimeout(r, n), s && e.apply(i, o)
                    }
                },
                toArray: function(e) {
                    return e.toArray ? e.toArray() : Pn.call(e)
                },
                isUndefined: function(e) {
                    return void 0 === e
                },
                isNull: function(e) {
                    return null === e
                },
                isNaN: function(e) {
                    function n() {
                        return e.apply(this, arguments)
                    }
                    return n.toString = function() {
                        return e.toString()
                    }, n
                }((function(e) {
                    return isNaN(e)
                })),
                isArray: Array.isArray || function(e) {
                    return e.constructor === Array
                },
                isObject: function(e) {
                    return e === Object(e)
                },
                isNumber: function(e) {
                    return e === e + 0
                },
                isString: function(e) {
                    return e === e + ""
                },
                isBoolean: function(e) {
                    return !1 === e || !0 === e
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            },
            On = [{
                litmus: wn.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(e) {
                            var n = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== n && {
                                space: "HEX",
                                hex: parseInt("0x" + n[1].toString() + n[1].toString() + n[2].toString() + n[2].toString() + n[3].toString() + n[3].toString(), 0)
                            }
                        },
                        write: Ln
                    },
                    SIX_CHAR_HEX: {
                        read: function(e) {
                            var n = e.match(/^#([A-F0-9]{6})$/i);
                            return null !== n && {
                                space: "HEX",
                                hex: parseInt("0x" + n[1].toString(), 0)
                            }
                        },
                        write: Ln
                    },
                    CSS_RGB: {
                        read: function(e) {
                            var n = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== n && {
                                space: "RGB",
                                r: parseFloat(n[1]),
                                g: parseFloat(n[2]),
                                b: parseFloat(n[3])
                            }
                        },
                        write: Ln
                    },
                    CSS_RGBA: {
                        read: function(e) {
                            var n = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== n && {
                                space: "RGB",
                                r: parseFloat(n[1]),
                                g: parseFloat(n[2]),
                                b: parseFloat(n[3]),
                                a: parseFloat(n[4])
                            }
                        },
                        write: Ln
                    }
                }
            }, {
                litmus: wn.isNumber,
                conversions: {
                    HEX: {
                        read: function(e) {
                            return {
                                space: "HEX",
                                hex: e,
                                conversionName: "HEX"
                            }
                        },
                        write: function(e) {
                            return e.hex
                        }
                    }
                }
            }, {
                litmus: wn.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(e) {
                            return 3 === e.length && {
                                space: "RGB",
                                r: e[0],
                                g: e[1],
                                b: e[2]
                            }
                        },
                        write: function(e) {
                            return [e.r, e.g, e.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(e) {
                            return 4 === e.length && {
                                space: "RGB",
                                r: e[0],
                                g: e[1],
                                b: e[2],
                                a: e[3]
                            }
                        },
                        write: function(e) {
                            return [e.r, e.g, e.b, e.a]
                        }
                    }
                }
            }, {
                litmus: wn.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(e) {
                            return !!(wn.isNumber(e.r) && wn.isNumber(e.g) && wn.isNumber(e.b) && wn.isNumber(e.a)) && {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            }
                        },
                        write: function(e) {
                            return {
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(e) {
                            return !!(wn.isNumber(e.r) && wn.isNumber(e.g) && wn.isNumber(e.b)) && {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b
                            }
                        },
                        write: function(e) {
                            return {
                                r: e.r,
                                g: e.g,
                                b: e.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(e) {
                            return !!(wn.isNumber(e.h) && wn.isNumber(e.s) && wn.isNumber(e.v) && wn.isNumber(e.a)) && {
                                space: "HSV",
                                h: e.h,
                                s: e.s,
                                v: e.v,
                                a: e.a
                            }
                        },
                        write: function(e) {
                            return {
                                h: e.h,
                                s: e.s,
                                v: e.v,
                                a: e.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(e) {
                            return !!(wn.isNumber(e.h) && wn.isNumber(e.s) && wn.isNumber(e.v)) && {
                                space: "HSV",
                                h: e.h,
                                s: e.s,
                                v: e.v
                            }
                        },
                        write: function(e) {
                            return {
                                h: e.h,
                                s: e.s,
                                v: e.v
                            }
                        }
                    }
                }
            }],
            Rn = void 0,
            Mn = void 0,
            Cn = function() {
                Mn = !1;
                var e = arguments.length > 1 ? wn.toArray(arguments) : arguments[0];
                return wn.each(On, (function(n) {
                    if (n.litmus(e)) return wn.each(n.conversions, (function(n, t) {
                        if (Rn = n.read(e), !1 === Mn && !1 !== Rn) return Mn = Rn, Rn.conversionName = t, Rn.conversion = n, wn.BREAK
                    })), wn.BREAK
                })), Mn
            },
            In = void 0,
            Un = {
                hsv_to_rgb: function(e, n, t) {
                    var a = Math.floor(e / 60) % 6,
                        i = e / 60 - Math.floor(e / 60),
                        o = t * (1 - n),
                        r = t * (1 - i * n),
                        s = t * (1 - (1 - i) * n),
                        l = [
                            [t, s, o],
                            [r, t, o],
                            [o, t, s],
                            [o, r, t],
                            [s, o, t],
                            [t, o, r]
                        ][a];
                    return {
                        r: 255 * l[0],
                        g: 255 * l[1],
                        b: 255 * l[2]
                    }
                },
                rgb_to_hsv: function(e, n, t) {
                    var a = Math.min(e, n, t),
                        i = Math.max(e, n, t),
                        o = i - a,
                        r = void 0,
                        s = void 0;
                    return 0 === i ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (s = o / i, r = e === i ? (n - t) / o : n === i ? 2 + (t - e) / o : 4 + (e - n) / o, r /= 6, r < 0 && (r += 1), {
                        h: 360 * r,
                        s: s,
                        v: i / 255
                    })
                },
                rgb_to_hex: function(e, n, t) {
                    var a = this.hex_with_component(0, 2, e);
                    return a = this.hex_with_component(a, 1, n), a = this.hex_with_component(a, 0, t), a
                },
                component_from_hex: function(e, n) {
                    return e >> 8 * n & 255
                },
                hex_with_component: function(e, n, t) {
                    return t << (In = 8 * n) | e & ~(255 << In)
                }
            },
            Dn = "function" === typeof Symbol && "symbol" === Object(Tn["a"])(Symbol.iterator) ? function(e) {
                return Object(Tn["a"])(e)
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : Object(Tn["a"])(e)
            },
            kn = function(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            },
            Bn = function() {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var a = n[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(n, t, a) {
                    return t && e(n.prototype, t), a && e(n, a), n
                }
            }(),
            Hn = function e(n, t, a) {
                null === n && (n = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(n, t);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(n);
                    return null === o ? void 0 : e(o, t, a)
                }
                if ("value" in i) return i.value;
                var r = i.get;
                return void 0 !== r ? r.call(a) : void 0
            },
            Gn = function(e, n) {
                if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + Object(Tn["a"])(n));
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
            },
            Xn = function(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" !== Object(Tn["a"])(n) && "function" !== typeof n ? e : n
            },
            Vn = function() {
                function e() {
                    if (kn(this, e), this.__state = Cn.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
                    this.__state.a = this.__state.a || 1
                }
                return Bn(e, [{
                    key: "toString",
                    value: function() {
                        return Ln(this)
                    }
                }, {
                    key: "toHexString",
                    value: function() {
                        return Ln(this, !0)
                    }
                }, {
                    key: "toOriginal",
                    value: function() {
                        return this.__state.conversion.write(this)
                    }
                }]), e
            }();

        function zn(e, n, t) {
            Object.defineProperty(e, n, {
                get: function() {
                    return "RGB" === this.__state.space || Vn.recalculateRGB(this, n, t), this.__state[n]
                },
                set: function(e) {
                    "RGB" !== this.__state.space && (Vn.recalculateRGB(this, n, t), this.__state.space = "RGB"), this.__state[n] = e
                }
            })
        }

        function jn(e, n) {
            Object.defineProperty(e, n, {
                get: function() {
                    return "HSV" === this.__state.space || Vn.recalculateHSV(this), this.__state[n]
                },
                set: function(e) {
                    "HSV" !== this.__state.space && (Vn.recalculateHSV(this), this.__state.space = "HSV"), this.__state[n] = e
                }
            })
        }
        Vn.recalculateRGB = function(e, n, t) {
            if ("HEX" === e.__state.space) e.__state[n] = Un.component_from_hex(e.__state.hex, t);
            else {
                if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
                wn.extend(e.__state, Un.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
            }
        }, Vn.recalculateHSV = function(e) {
            var n = Un.rgb_to_hsv(e.r, e.g, e.b);
            wn.extend(e.__state, {
                s: n.s,
                v: n.v
            }), wn.isNaN(n.h) ? wn.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h
        }, Vn.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], zn(Vn.prototype, "r", 2), zn(Vn.prototype, "g", 1), zn(Vn.prototype, "b", 0), jn(Vn.prototype, "h"), jn(Vn.prototype, "s"), jn(Vn.prototype, "v"), Object.defineProperty(Vn.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(e) {
                this.__state.a = e
            }
        }), Object.defineProperty(Vn.prototype, "hex", {
            get: function() {
                return "HEX" !== !this.__state.space && (this.__state.hex = Un.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
            },
            set: function(e) {
                this.__state.space = "HEX", this.__state.hex = e
            }
        });
        var Yn = function() {
                function e(n, t) {
                    kn(this, e), this.initialValue = n[t], this.domElement = document.createElement("div"), this.object = n, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0
                }
                return Bn(e, [{
                    key: "onChange",
                    value: function(e) {
                        return this.__onChange = e, this
                    }
                }, {
                    key: "onFinishChange",
                    value: function(e) {
                        return this.__onFinishChange = e, this
                    }
                }, {
                    key: "setValue",
                    value: function(e) {
                        return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
                    }
                }, {
                    key: "getValue",
                    value: function() {
                        return this.object[this.property]
                    }
                }, {
                    key: "updateDisplay",
                    value: function() {
                        return this
                    }
                }, {
                    key: "isModified",
                    value: function() {
                        return this.initialValue !== this.getValue()
                    }
                }]), e
            }(),
            Qn = {
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            },
            Wn = {};
        wn.each(Qn, (function(e, n) {
            wn.each(e, (function(e) {
                Wn[e] = n
            }))
        }));
        var Kn = /(\d+(\.\d+)?)px/;

        function qn(e) {
            if ("0" === e || wn.isUndefined(e)) return 0;
            var n = e.match(Kn);
            return wn.isNull(n) ? 0 : parseFloat(n[1])
        }
        var Zn = {
                makeSelectable: function(e, n) {
                    void 0 !== e && void 0 !== e.style && (e.onselectstart = n ? function() {
                        return !1
                    } : function() {}, e.style.MozUserSelect = n ? "auto" : "none", e.style.KhtmlUserSelect = n ? "auto" : "none", e.unselectable = n ? "on" : "off")
                },
                makeFullscreen: function(e, n, t) {
                    var a = t,
                        i = n;
                    wn.isUndefined(i) && (i = !0), wn.isUndefined(a) && (a = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), a && (e.style.top = 0, e.style.bottom = 0)
                },
                fakeEvent: function(e, n, t, a) {
                    var i = t || {},
                        o = Wn[n];
                    if (!o) throw new Error("Event type " + n + " not supported.");
                    var r = document.createEvent(o);
                    switch (o) {
                        case "MouseEvents":
                            var s = i.x || i.clientX || 0,
                                l = i.y || i.clientY || 0;
                            r.initMouseEvent(n, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, s, l, !1, !1, !1, !1, 0, null);
                            break;
                        case "KeyboardEvents":
                            var u = r.initKeyboardEvent || r.initKeyEvent;
                            wn.defaults(i, {
                                cancelable: !0,
                                ctrlKey: !1,
                                altKey: !1,
                                shiftKey: !1,
                                metaKey: !1,
                                keyCode: void 0,
                                charCode: void 0
                            }), u(n, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                            break;
                        default:
                            r.initEvent(n, i.bubbles || !1, i.cancelable || !0);
                            break
                    }
                    wn.defaults(r, a), e.dispatchEvent(r)
                },
                bind: function(e, n, t, a) {
                    var i = a || !1;
                    return e.addEventListener ? e.addEventListener(n, t, i) : e.attachEvent && e.attachEvent("on" + n, t), Zn
                },
                unbind: function(e, n, t, a) {
                    var i = a || !1;
                    return e.removeEventListener ? e.removeEventListener(n, t, i) : e.detachEvent && e.detachEvent("on" + n, t), Zn
                },
                addClass: function(e, n) {
                    if (void 0 === e.className) e.className = n;
                    else if (e.className !== n) {
                        var t = e.className.split(/ +/); - 1 === t.indexOf(n) && (t.push(n), e.className = t.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                    }
                    return Zn
                },
                removeClass: function(e, n) {
                    if (n)
                        if (e.className === n) e.removeAttribute("class");
                        else {
                            var t = e.className.split(/ +/),
                                a = t.indexOf(n); - 1 !== a && (t.splice(a, 1), e.className = t.join(" "))
                        }
                    else e.className = void 0;
                    return Zn
                },
                hasClass: function(e, n) {
                    return new RegExp("(?:^|\\s+)" + n + "(?:\\s+|$)").test(e.className) || !1
                },
                getWidth: function(e) {
                    var n = getComputedStyle(e);
                    return qn(n["border-left-width"]) + qn(n["border-right-width"]) + qn(n["padding-left"]) + qn(n["padding-right"]) + qn(n.width)
                },
                getHeight: function(e) {
                    var n = getComputedStyle(e);
                    return qn(n["border-top-width"]) + qn(n["border-bottom-width"]) + qn(n["padding-top"]) + qn(n["padding-bottom"]) + qn(n.height)
                },
                getOffset: function(e) {
                    var n = e,
                        t = {
                            left: 0,
                            top: 0
                        };
                    if (n.offsetParent)
                        do {
                            t.left += n.offsetLeft, t.top += n.offsetTop, n = n.offsetParent
                        } while (n);
                    return t
                },
                isActive: function(e) {
                    return e === document.activeElement && (e.type || e.href)
                }
            },
            Jn = function(e) {
                function n(e, t) {
                    kn(this, n);
                    var a = Xn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t)),
                        i = a;

                    function o() {
                        i.setValue(!i.__prev)
                    }
                    return a.__prev = a.getValue(), a.__checkbox = document.createElement("input"), a.__checkbox.setAttribute("type", "checkbox"), Zn.bind(a.__checkbox, "change", o, !1), a.domElement.appendChild(a.__checkbox), a.updateDisplay(), a
                }
                return Gn(n, e), Bn(n, [{
                    key: "setValue",
                    value: function(e) {
                        var t = Hn(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setValue", this).call(this, e);
                        return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t
                    }
                }, {
                    key: "updateDisplay",
                    value: function() {
                        return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), Hn(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "updateDisplay", this).call(this)
                    }
                }]), n
            }(Yn),
            $n = function(e) {
                function n(e, t, a) {
                    kn(this, n);
                    var i = Xn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t)),
                        o = a,
                        r = i;
                    if (i.__select = document.createElement("select"), wn.isArray(o)) {
                        var s = {};
                        wn.each(o, (function(e) {
                            s[e] = e
                        })), o = s
                    }
                    return wn.each(o, (function(e, n) {
                        var t = document.createElement("option");
                        t.innerHTML = n, t.setAttribute("value", e), r.__select.appendChild(t)
                    })), i.updateDisplay(), Zn.bind(i.__select, "change", (function() {
                        var e = this.options[this.selectedIndex].value;
                        r.setValue(e)
                    })), i.domElement.appendChild(i.__select), i
                }
                return Gn(n, e), Bn(n, [{
                    key: "setValue",
                    value: function(e) {
                        var t = Hn(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setValue", this).call(this, e);
                        return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t
                    }
                }, {
                    key: "updateDisplay",
                    value: function() {
                        return Zn.isActive(this.__select) ? this : (this.__select.value = this.getValue(), Hn(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "updateDisplay", this).call(this))
                    }
                }]), n
            }(Yn),
            et = function(e) {
                function n(e, t) {
                    kn(this, n);
                    var a = Xn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t)),
                        i = a;

                    function o() {
                        i.setValue(i.__input.value)
                    }

                    function r() {
                        i.__onFinishChange && i.__onFinishChange.call(i, i.getValue())
                    }
                    return a.__input = document.createElement("input"), a.__input.setAttribute("type", "text"), Zn.bind(a.__input, "keyup", o), Zn.bind(a.__input, "change", o), Zn.bind(a.__input, "blur", r), Zn.bind(a.__input, "keydown", (function(e) {
                        13 === e.keyCode && this.blur()
                    })), a.updateDisplay(), a.domElement.appendChild(a.__input), a
                }
                return Gn(n, e), Bn(n, [{
                    key: "updateDisplay",
                    value: function() {
                        return Zn.isActive(this.__input) || (this.__input.value = this.getValue()), Hn(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "updateDisplay", this).call(this)
                    }
                }]), n
            }(Yn);

        function nt(e) {
            var n = e.toString();
            return n.indexOf(".") > -1 ? n.length - n.indexOf(".") - 1 : 0
        }
        var tt = function(e) {
            function n(e, t, a) {
                kn(this, n);
                var i = Xn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t)),
                    o = a || {};
                return i.__min = o.min, i.__max = o.max, i.__step = o.step, wn.isUndefined(i.__step) ? 0 === i.initialValue ? i.__impliedStep = 1 : i.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(i.initialValue)) / Math.LN10)) / 10 : i.__impliedStep = i.__step, i.__precision = nt(i.__impliedStep), i
            }
            return Gn(n, e), Bn(n, [{
                key: "setValue",
                value: function(e) {
                    var t = e;
                    return void 0 !== this.__min && t < this.__min ? t = this.__min : void 0 !== this.__max && t > this.__max && (t = this.__max), void 0 !== this.__step && t % this.__step !== 0 && (t = Math.round(t / this.__step) * this.__step), Hn(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setValue", this).call(this, t)
                }
            }, {
                key: "min",
                value: function(e) {
                    return this.__min = e, this
                }
            }, {
                key: "max",
                value: function(e) {
                    return this.__max = e, this
                }
            }, {
                key: "step",
                value: function(e) {
                    return this.__step = e, this.__impliedStep = e, this.__precision = nt(e), this
                }
            }]), n
        }(Yn);

        function at(e, n) {
            var t = Math.pow(10, n);
            return Math.round(e * t) / t
        }
        var it = function(e) {
            function n(e, t, a) {
                kn(this, n);
                var i = Xn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t, a));
                i.__truncationSuspended = !1;
                var o = i,
                    r = void 0;

                function s() {
                    var e = parseFloat(o.__input.value);
                    wn.isNaN(e) || o.setValue(e)
                }

                function l() {
                    o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
                }

                function u() {
                    l()
                }

                function c(e) {
                    var n = r - e.clientY;
                    o.setValue(o.getValue() + n * o.__impliedStep), r = e.clientY
                }

                function d() {
                    Zn.unbind(window, "mousemove", c), Zn.unbind(window, "mouseup", d), l()
                }

                function f(e) {
                    Zn.bind(window, "mousemove", c), Zn.bind(window, "mouseup", d), r = e.clientY
                }
                return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), Zn.bind(i.__input, "change", s), Zn.bind(i.__input, "blur", u), Zn.bind(i.__input, "mousedown", f), Zn.bind(i.__input, "keydown", (function(e) {
                    13 === e.keyCode && (o.__truncationSuspended = !0, this.blur(), o.__truncationSuspended = !1, l())
                })), i.updateDisplay(), i.domElement.appendChild(i.__input), i
            }
            return Gn(n, e), Bn(n, [{
                key: "updateDisplay",
                value: function() {
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : at(this.getValue(), this.__precision), Hn(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "updateDisplay", this).call(this)
                }
            }]), n
        }(tt);

        function ot(e, n, t, a, i) {
            return a + (e - n) / (t - n) * (i - a)
        }
        var rt = function(e) {
                function n(e, t, a, i, o) {
                    kn(this, n);
                    var r = Xn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t, {
                            min: a,
                            max: i,
                            step: o
                        })),
                        s = r;

                    function l(e) {
                        document.activeElement.blur(), Zn.bind(window, "mousemove", u), Zn.bind(window, "mouseup", c), u(e)
                    }

                    function u(e) {
                        e.preventDefault();
                        var n = s.__background.getBoundingClientRect();
                        return s.setValue(ot(e.clientX, n.left, n.right, s.__min, s.__max)), !1
                    }

                    function c() {
                        Zn.unbind(window, "mousemove", u), Zn.unbind(window, "mouseup", c), s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
                    }

                    function d(e) {
                        1 === e.touches.length && (Zn.bind(window, "touchmove", f), Zn.bind(window, "touchend", h), f(e))
                    }

                    function f(e) {
                        var n = e.touches[0].clientX,
                            t = s.__background.getBoundingClientRect();
                        s.setValue(ot(n, t.left, t.right, s.__min, s.__max))
                    }

                    function h() {
                        Zn.unbind(window, "touchmove", f), Zn.unbind(window, "touchend", h), s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
                    }
                    return r.__background = document.createElement("div"), r.__foreground = document.createElement("div"), Zn.bind(r.__background, "mousedown", l), Zn.bind(r.__background, "touchstart", d), Zn.addClass(r.__background, "slider"), Zn.addClass(r.__foreground, "slider-fg"), r.updateDisplay(), r.__background.appendChild(r.__foreground), r.domElement.appendChild(r.__background), r
                }
                return Gn(n, e), Bn(n, [{
                    key: "updateDisplay",
                    value: function() {
                        var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                        return this.__foreground.style.width = 100 * e + "%", Hn(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "updateDisplay", this).call(this)
                    }
                }]), n
            }(tt),
            st = function(e) {
                function n(e, t, a) {
                    kn(this, n);
                    var i = Xn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t)),
                        o = i;
                    return i.__button = document.createElement("div"), i.__button.innerHTML = void 0 === a ? "Fire" : a, Zn.bind(i.__button, "click", (function(e) {
                        return e.preventDefault(), o.fire(), !1
                    })), Zn.addClass(i.__button, "button"), i.domElement.appendChild(i.__button), i
                }
                return Gn(n, e), Bn(n, [{
                    key: "fire",
                    value: function() {
                        this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                    }
                }]), n
            }(Yn),
            lt = function(e) {
                function n(e, t) {
                    kn(this, n);
                    var a = Xn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
                    a.__color = new Vn(a.getValue()), a.__temp = new Vn(0);
                    var i = a;
                    a.domElement = document.createElement("div"), Zn.makeSelectable(a.domElement, !1), a.__selector = document.createElement("div"), a.__selector.className = "selector", a.__saturation_field = document.createElement("div"), a.__saturation_field.className = "saturation-field", a.__field_knob = document.createElement("div"), a.__field_knob.className = "field-knob", a.__field_knob_border = "2px solid ", a.__hue_knob = document.createElement("div"), a.__hue_knob.className = "hue-knob", a.__hue_field = document.createElement("div"), a.__hue_field.className = "hue-field", a.__input = document.createElement("input"), a.__input.type = "text", a.__input_textShadow = "0 1px 1px ", Zn.bind(a.__input, "keydown", (function(e) {
                        13 === e.keyCode && c.call(this)
                    })), Zn.bind(a.__input, "blur", c), Zn.bind(a.__selector, "mousedown", (function() {
                        Zn.addClass(this, "drag").bind(window, "mouseup", (function() {
                            Zn.removeClass(i.__selector, "drag")
                        }))
                    })), Zn.bind(a.__selector, "touchstart", (function() {
                        Zn.addClass(this, "drag").bind(window, "touchend", (function() {
                            Zn.removeClass(i.__selector, "drag")
                        }))
                    }));
                    var o = document.createElement("div");

                    function r(e) {
                        f(e), Zn.bind(window, "mousemove", f), Zn.bind(window, "touchmove", f), Zn.bind(window, "mouseup", l), Zn.bind(window, "touchend", l)
                    }

                    function s(e) {
                        h(e), Zn.bind(window, "mousemove", h), Zn.bind(window, "touchmove", h), Zn.bind(window, "mouseup", u), Zn.bind(window, "touchend", u)
                    }

                    function l() {
                        Zn.unbind(window, "mousemove", f), Zn.unbind(window, "touchmove", f), Zn.unbind(window, "mouseup", l), Zn.unbind(window, "touchend", l), d()
                    }

                    function u() {
                        Zn.unbind(window, "mousemove", h), Zn.unbind(window, "touchmove", h), Zn.unbind(window, "mouseup", u), Zn.unbind(window, "touchend", u), d()
                    }

                    function c() {
                        var e = Cn(this.value);
                        !1 !== e ? (i.__color.__state = e, i.setValue(i.__color.toOriginal())) : this.value = i.__color.toString()
                    }

                    function d() {
                        i.__onFinishChange && i.__onFinishChange.call(i, i.__color.toOriginal())
                    }

                    function f(e) {
                        -1 === e.type.indexOf("touch") && e.preventDefault();
                        var n = i.__saturation_field.getBoundingClientRect(),
                            t = e.touches && e.touches[0] || e,
                            a = t.clientX,
                            o = t.clientY,
                            r = (a - n.left) / (n.right - n.left),
                            s = 1 - (o - n.top) / (n.bottom - n.top);
                        return s > 1 ? s = 1 : s < 0 && (s = 0), r > 1 ? r = 1 : r < 0 && (r = 0), i.__color.v = s, i.__color.s = r, i.setValue(i.__color.toOriginal()), !1
                    }

                    function h(e) {
                        -1 === e.type.indexOf("touch") && e.preventDefault();
                        var n = i.__hue_field.getBoundingClientRect(),
                            t = e.touches && e.touches[0] || e,
                            a = t.clientY,
                            o = 1 - (a - n.top) / (n.bottom - n.top);
                        return o > 1 ? o = 1 : o < 0 && (o = 0), i.__color.h = 360 * o, i.setValue(i.__color.toOriginal()), !1
                    }
                    return wn.extend(a.__selector.style, {
                        width: "122px",
                        height: "102px",
                        padding: "3px",
                        backgroundColor: "#222",
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                    }), wn.extend(a.__field_knob.style, {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        border: a.__field_knob_border + (a.__color.v < .5 ? "#fff" : "#000"),
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                        borderRadius: "12px",
                        zIndex: 1
                    }), wn.extend(a.__hue_knob.style, {
                        position: "absolute",
                        width: "15px",
                        height: "2px",
                        borderRight: "4px solid #fff",
                        zIndex: 1
                    }), wn.extend(a.__saturation_field.style, {
                        width: "100px",
                        height: "100px",
                        border: "1px solid #555",
                        marginRight: "3px",
                        display: "inline-block",
                        cursor: "pointer"
                    }), wn.extend(o.style, {
                        width: "100%",
                        height: "100%",
                        background: "none"
                    }), ct(o, "top", "rgba(0,0,0,0)", "#000"), wn.extend(a.__hue_field.style, {
                        width: "15px",
                        height: "100px",
                        border: "1px solid #555",
                        cursor: "ns-resize",
                        position: "absolute",
                        top: "3px",
                        right: "3px"
                    }), dt(a.__hue_field), wn.extend(a.__input.style, {
                        outline: "none",
                        textAlign: "center",
                        color: "#fff",
                        border: 0,
                        fontWeight: "bold",
                        textShadow: a.__input_textShadow + "rgba(0,0,0,0.7)"
                    }), Zn.bind(a.__saturation_field, "mousedown", r), Zn.bind(a.__saturation_field, "touchstart", r), Zn.bind(a.__field_knob, "mousedown", r), Zn.bind(a.__field_knob, "touchstart", r), Zn.bind(a.__hue_field, "mousedown", s), Zn.bind(a.__hue_field, "touchstart", s), a.__saturation_field.appendChild(o), a.__selector.appendChild(a.__field_knob), a.__selector.appendChild(a.__saturation_field), a.__selector.appendChild(a.__hue_field), a.__hue_field.appendChild(a.__hue_knob), a.domElement.appendChild(a.__input), a.domElement.appendChild(a.__selector), a.updateDisplay(), a
                }
                return Gn(n, e), Bn(n, [{
                    key: "updateDisplay",
                    value: function() {
                        var e = Cn(this.getValue());
                        if (!1 !== e) {
                            var n = !1;
                            wn.each(Vn.COMPONENTS, (function(t) {
                                if (!wn.isUndefined(e[t]) && !wn.isUndefined(this.__color.__state[t]) && e[t] !== this.__color.__state[t]) return n = !0, {}
                            }), this), n && wn.extend(this.__color.__state, e)
                        }
                        wn.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                        var t = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                            a = 255 - t;
                        wn.extend(this.__field_knob.style, {
                            marginLeft: 100 * this.__color.s - 7 + "px",
                            marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                            backgroundColor: this.__temp.toHexString(),
                            border: this.__field_knob_border + "rgb(" + t + "," + t + "," + t + ")"
                        }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, ct(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), wn.extend(this.__input.style, {
                            backgroundColor: this.__color.toHexString(),
                            color: "rgb(" + t + "," + t + "," + t + ")",
                            textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)"
                        })
                    }
                }]), n
            }(Yn),
            ut = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

        function ct(e, n, t, a) {
            e.style.background = "", wn.each(ut, (function(i) {
                e.style.cssText += "background: " + i + "linear-gradient(" + n + ", " + t + " 0%, " + a + " 100%); "
            }))
        }

        function dt(e) {
            e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
        }
        var ft = {
                load: function(e, n) {
                    var t = n || document,
                        a = t.createElement("link");
                    a.type = "text/css", a.rel = "stylesheet", a.href = e, t.getElementsByTagName("head")[0].appendChild(a)
                },
                inject: function(e, n) {
                    var t = n || document,
                        a = document.createElement("style");
                    a.type = "text/css", a.innerHTML = e;
                    var i = t.getElementsByTagName("head")[0];
                    try {
                        i.appendChild(a)
                    } catch (o) {}
                }
            },
            ht = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>',
            pt = function(e, n) {
                var t = e[n];
                return wn.isArray(arguments[2]) || wn.isObject(arguments[2]) ? new $n(e, n, arguments[2]) : wn.isNumber(t) ? wn.isNumber(arguments[2]) && wn.isNumber(arguments[3]) ? wn.isNumber(arguments[4]) ? new rt(e, n, arguments[2], arguments[3], arguments[4]) : new rt(e, n, arguments[2], arguments[3]) : wn.isNumber(arguments[4]) ? new it(e, n, {
                    min: arguments[2],
                    max: arguments[3],
                    step: arguments[4]
                }) : new it(e, n, {
                    min: arguments[2],
                    max: arguments[3]
                }) : wn.isString(t) ? new et(e, n) : wn.isFunction(t) ? new st(e, n, "") : wn.isBoolean(t) ? new Jn(e, n) : null
            };

        function mt(e) {
            setTimeout(e, 1e3 / 60)
        }
        var vt = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || mt,
            gt = function() {
                function e() {
                    kn(this, e), this.backgroundElement = document.createElement("div"), wn.extend(this.backgroundElement.style, {
                        backgroundColor: "rgba(0,0,0,0.8)",
                        top: 0,
                        left: 0,
                        display: "none",
                        zIndex: "1000",
                        opacity: 0,
                        WebkitTransition: "opacity 0.2s linear",
                        transition: "opacity 0.2s linear"
                    }), Zn.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), wn.extend(this.domElement.style, {
                        position: "fixed",
                        display: "none",
                        zIndex: "1001",
                        opacity: 0,
                        WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                        transition: "transform 0.2s ease-out, opacity 0.2s linear"
                    }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
                    var n = this;
                    Zn.bind(this.backgroundElement, "click", (function() {
                        n.hide()
                    }))
                }
                return Bn(e, [{
                    key: "show",
                    value: function() {
                        var e = this;
                        this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), wn.defer((function() {
                            e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
                        }))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var e = this,
                            n = function n() {
                                e.domElement.style.display = "none", e.backgroundElement.style.display = "none", Zn.unbind(e.domElement, "webkitTransitionEnd", n), Zn.unbind(e.domElement, "transitionend", n), Zn.unbind(e.domElement, "oTransitionEnd", n)
                            };
                        Zn.bind(this.domElement, "webkitTransitionEnd", n), Zn.bind(this.domElement, "transitionend", n), Zn.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
                    }
                }, {
                    key: "layout",
                    value: function() {
                        this.domElement.style.left = window.innerWidth / 2 - Zn.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - Zn.getHeight(this.domElement) / 2 + "px"
                    }
                }]), e
            }(),
            _t = Fn(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");
        ft.inject(_t);
        var At = "dg",
            xt = 72,
            bt = 20,
            yt = "Default",
            Et = function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !1
                }
            }(),
            St = void 0,
            Tt = !0,
            Ft = void 0,
            Lt = !1,
            Nt = [],
            Pt = function e(n) {
                var t = this,
                    a = n || {};
                this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), Zn.addClass(this.domElement, At), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], a = wn.defaults(a, {
                    closeOnTop: !1,
                    autoPlace: !0,
                    width: e.DEFAULT_WIDTH
                }), a = wn.defaults(a, {
                    resizable: a.autoPlace,
                    hideable: a.autoPlace
                }), wn.isUndefined(a.load) ? a.load = {
                    preset: yt
                } : a.preset && (a.load.preset = a.preset), wn.isUndefined(a.parent) && a.hideable && Nt.push(this), a.resizable = wn.isUndefined(a.parent) && a.resizable, a.autoPlace && wn.isUndefined(a.scrollable) && (a.scrollable = !0);
                var i = Et && "true" === localStorage.getItem(Ut(this, "isLocal")),
                    o = void 0,
                    r = void 0;
                if (Object.defineProperties(this, {
                        parent: {
                            get: function() {
                                return a.parent
                            }
                        },
                        scrollable: {
                            get: function() {
                                return a.scrollable
                            }
                        },
                        autoPlace: {
                            get: function() {
                                return a.autoPlace
                            }
                        },
                        closeOnTop: {
                            get: function() {
                                return a.closeOnTop
                            }
                        },
                        preset: {
                            get: function() {
                                return t.parent ? t.getRoot().preset : a.load.preset
                            },
                            set: function(e) {
                                t.parent ? t.getRoot().preset = e : a.load.preset = e, Vt(this), t.revert()
                            }
                        },
                        width: {
                            get: function() {
                                return a.width
                            },
                            set: function(e) {
                                a.width = e, Gt(t, e)
                            }
                        },
                        name: {
                            get: function() {
                                return a.name
                            },
                            set: function(e) {
                                a.name = e, r && (r.innerHTML = a.name)
                            }
                        },
                        closed: {
                            get: function() {
                                return a.closed
                            },
                            set: function(n) {
                                a.closed = n, a.closed ? Zn.addClass(t.__ul, e.CLASS_CLOSED) : Zn.removeClass(t.__ul, e.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = n ? e.TEXT_OPEN : e.TEXT_CLOSED)
                            }
                        },
                        load: {
                            get: function() {
                                return a.load
                            }
                        },
                        useLocalStorage: {
                            get: function() {
                                return i
                            },
                            set: function(e) {
                                Et && (i = e, e ? Zn.bind(window, "unload", o) : Zn.unbind(window, "unload", o), localStorage.setItem(Ut(t, "isLocal"), e))
                            }
                        }
                    }), wn.isUndefined(a.parent)) {
                    if (this.closed = a.closed || !1, Zn.addClass(this.domElement, e.CLASS_MAIN), Zn.makeSelectable(this.domElement, !1), Et && i) {
                        t.useLocalStorage = !0;
                        var s = localStorage.getItem(Ut(this, "gui"));
                        s && (a.load = JSON.parse(s))
                    }
                    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, Zn.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), a.closeOnTop ? (Zn.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (Zn.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), Zn.bind(this.__closeButton, "click", (function() {
                        t.closed = !t.closed
                    }))
                } else {
                    void 0 === a.closed && (a.closed = !0);
                    var l = document.createTextNode(a.name);
                    Zn.addClass(l, "controller-name"), r = wt(t, l);
                    var u = function(e) {
                        return e.preventDefault(), t.closed = !t.closed, !1
                    };
                    Zn.addClass(this.__ul, e.CLASS_CLOSED), Zn.addClass(r, "title"), Zn.bind(r, "click", u), a.closed || (this.closed = !1)
                }

                function c() {
                    var e = t.getRoot();
                    e.width += 1, wn.defer((function() {
                        e.width -= 1
                    }))
                }
                a.autoPlace && (wn.isUndefined(a.parent) && (Tt && (Ft = document.createElement("div"), Zn.addClass(Ft, At), Zn.addClass(Ft, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Ft), Tt = !1), Ft.appendChild(this.domElement), Zn.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || Gt(t, a.width)), this.__resizeHandler = function() {
                    t.onResizeDebounced()
                }, Zn.bind(window, "resize", this.__resizeHandler), Zn.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), Zn.bind(this.__ul, "transitionend", this.__resizeHandler), Zn.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), a.resizable && Ht(this), o = function() {
                    Et && "true" === localStorage.getItem(Ut(t, "isLocal")) && localStorage.setItem(Ut(t, "gui"), JSON.stringify(t.getSaveObject()))
                }, this.saveToLocalStorageIfPossible = o, a.parent || c()
            };

        function wt(e, n, t) {
            var a = document.createElement("li");
            return n && a.appendChild(n), t ? e.__ul.insertBefore(a, t) : e.__ul.appendChild(a), e.onResize(), a
        }

        function Ot(e) {
            Zn.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && Zn.unbind(window, "unload", e.saveToLocalStorageIfPossible)
        }

        function Rt(e, n) {
            var t = e.__preset_select[e.__preset_select.selectedIndex];
            t.innerHTML = n ? t.value + "*" : t.value
        }

        function Mt(e, n, t) {
            if (t.__li = n, t.__gui = e, wn.extend(t, {
                    options: function(n) {
                        if (arguments.length > 1) {
                            var a = t.__li.nextElementSibling;
                            return t.remove(), It(e, t.object, t.property, {
                                before: a,
                                factoryArgs: [wn.toArray(arguments)]
                            })
                        }
                        if (wn.isArray(n) || wn.isObject(n)) {
                            var i = t.__li.nextElementSibling;
                            return t.remove(), It(e, t.object, t.property, {
                                before: i,
                                factoryArgs: [n]
                            })
                        }
                    },
                    name: function(e) {
                        return t.__li.firstElementChild.firstElementChild.innerHTML = e, t
                    },
                    listen: function() {
                        return t.__gui.listen(t), t
                    },
                    remove: function() {
                        return t.__gui.remove(t), t
                    }
                }), t instanceof rt) {
                var a = new it(t.object, t.property, {
                    min: t.__min,
                    max: t.__max,
                    step: t.__step
                });
                wn.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], (function(e) {
                    var n = t[e],
                        i = a[e];
                    t[e] = a[e] = function() {
                        var e = Array.prototype.slice.call(arguments);
                        return i.apply(a, e), n.apply(t, e)
                    }
                })), Zn.addClass(n, "has-slider"), t.domElement.insertBefore(a.domElement, t.domElement.firstElementChild)
            } else if (t instanceof it) {
                var i = function(n) {
                    if (wn.isNumber(t.__min) && wn.isNumber(t.__max)) {
                        var a = t.__li.firstElementChild.firstElementChild.innerHTML,
                            i = t.__gui.__listening.indexOf(t) > -1;
                        t.remove();
                        var o = It(e, t.object, t.property, {
                            before: t.__li.nextElementSibling,
                            factoryArgs: [t.__min, t.__max, t.__step]
                        });
                        return o.name(a), i && o.listen(), o
                    }
                    return n
                };
                t.min = wn.compose(i, t.min), t.max = wn.compose(i, t.max)
            } else t instanceof Jn ? (Zn.bind(n, "click", (function() {
                Zn.fakeEvent(t.__checkbox, "click")
            })), Zn.bind(t.__checkbox, "click", (function(e) {
                e.stopPropagation()
            }))) : t instanceof st ? (Zn.bind(n, "click", (function() {
                Zn.fakeEvent(t.__button, "click")
            })), Zn.bind(n, "mouseover", (function() {
                Zn.addClass(t.__button, "hover")
            })), Zn.bind(n, "mouseout", (function() {
                Zn.removeClass(t.__button, "hover")
            }))) : t instanceof lt && (Zn.addClass(n, "color"), t.updateDisplay = wn.compose((function(e) {
                return n.style.borderLeftColor = t.__color.toString(), e
            }), t.updateDisplay), t.updateDisplay());
            t.setValue = wn.compose((function(n) {
                return e.getRoot().__preset_select && t.isModified() && Rt(e.getRoot(), !0), n
            }), t.setValue)
        }

        function Ct(e, n) {
            var t = e.getRoot(),
                a = t.__rememberedObjects.indexOf(n.object);
            if (-1 !== a) {
                var i = t.__rememberedObjectIndecesToControllers[a];
                if (void 0 === i && (i = {}, t.__rememberedObjectIndecesToControllers[a] = i), i[n.property] = n, t.load && t.load.remembered) {
                    var o = t.load.remembered,
                        r = void 0;
                    if (o[e.preset]) r = o[e.preset];
                    else {
                        if (!o[yt]) return;
                        r = o[yt]
                    }
                    if (r[a] && void 0 !== r[a][n.property]) {
                        var s = r[a][n.property];
                        n.initialValue = s, n.setValue(s)
                    }
                }
            }
        }

        function It(e, n, t, a) {
            if (void 0 === n[t]) throw new Error('Object "' + n + '" has no property "' + t + '"');
            var i = void 0;
            if (a.color) i = new lt(n, t);
            else {
                var o = [n, t].concat(a.factoryArgs);
                i = pt.apply(e, o)
            }
            a.before instanceof Yn && (a.before = a.before.__li), Ct(e, i), Zn.addClass(i.domElement, "c");
            var r = document.createElement("span");
            Zn.addClass(r, "property-name"), r.innerHTML = i.property;
            var s = document.createElement("div");
            s.appendChild(r), s.appendChild(i.domElement);
            var l = wt(e, s, a.before);
            return Zn.addClass(l, Pt.CLASS_CONTROLLER_ROW), i instanceof lt ? Zn.addClass(l, "color") : Zn.addClass(l, Dn(i.getValue())), Mt(e, l, i), e.__controllers.push(i), i
        }

        function Ut(e, n) {
            return document.location.href + "." + n
        }

        function Dt(e, n, t) {
            var a = document.createElement("option");
            a.innerHTML = n, a.value = n, e.__preset_select.appendChild(a), t && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
        }

        function kt(e, n) {
            n.style.display = e.useLocalStorage ? "block" : "none"
        }

        function Bt(e) {
            var n = e.__save_row = document.createElement("li");
            Zn.addClass(e.domElement, "has-save"), e.__ul.insertBefore(n, e.__ul.firstChild), Zn.addClass(n, "save-row");
            var t = document.createElement("span");
            t.innerHTML = "&nbsp;", Zn.addClass(t, "button gears");
            var a = document.createElement("span");
            a.innerHTML = "Save", Zn.addClass(a, "button"), Zn.addClass(a, "save");
            var i = document.createElement("span");
            i.innerHTML = "New", Zn.addClass(i, "button"), Zn.addClass(i, "save-as");
            var o = document.createElement("span");
            o.innerHTML = "Revert", Zn.addClass(o, "button"), Zn.addClass(o, "revert");
            var r = e.__preset_select = document.createElement("select");
            if (e.load && e.load.remembered ? wn.each(e.load.remembered, (function(n, t) {
                    Dt(e, t, t === e.preset)
                })) : Dt(e, yt, !1), Zn.bind(r, "change", (function() {
                    for (var n = 0; n < e.__preset_select.length; n++) e.__preset_select[n].innerHTML = e.__preset_select[n].value;
                    e.preset = this.value
                })), n.appendChild(r), n.appendChild(t), n.appendChild(a), n.appendChild(i), n.appendChild(o), Et) {
                var s = document.getElementById("dg-local-explain"),
                    l = document.getElementById("dg-local-storage"),
                    u = document.getElementById("dg-save-locally");
                u.style.display = "block", "true" === localStorage.getItem(Ut(e, "isLocal")) && l.setAttribute("checked", "checked"), kt(e, s), Zn.bind(l, "change", (function() {
                    e.useLocalStorage = !e.useLocalStorage, kt(e, s)
                }))
            }
            var c = document.getElementById("dg-new-constructor");
            Zn.bind(c, "keydown", (function(e) {
                !e.metaKey || 67 !== e.which && 67 !== e.keyCode || St.hide()
            })), Zn.bind(t, "click", (function() {
                c.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), St.show(), c.focus(), c.select()
            })), Zn.bind(a, "click", (function() {
                e.save()
            })), Zn.bind(i, "click", (function() {
                var n = prompt("Enter a new preset name.");
                n && e.saveAs(n)
            })), Zn.bind(o, "click", (function() {
                e.revert()
            }))
        }

        function Ht(e) {
            var n = void 0;

            function t(t) {
                return t.preventDefault(), e.width += n - t.clientX, e.onResize(), n = t.clientX, !1
            }

            function a() {
                Zn.removeClass(e.__closeButton, Pt.CLASS_DRAG), Zn.unbind(window, "mousemove", t), Zn.unbind(window, "mouseup", a)
            }

            function i(i) {
                return i.preventDefault(), n = i.clientX, Zn.addClass(e.__closeButton, Pt.CLASS_DRAG), Zn.bind(window, "mousemove", t), Zn.bind(window, "mouseup", a), !1
            }
            e.__resize_handle = document.createElement("div"), wn.extend(e.__resize_handle.style, {
                width: "6px",
                marginLeft: "-3px",
                height: "200px",
                cursor: "ew-resize",
                position: "absolute"
            }), Zn.bind(e.__resize_handle, "mousedown", i), Zn.bind(e.__closeButton, "mousedown", i), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
        }

        function Gt(e, n) {
            e.domElement.style.width = n + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = n + "px"), e.__closeButton && (e.__closeButton.style.width = n + "px")
        }

        function Xt(e, n) {
            var t = {};
            return wn.each(e.__rememberedObjects, (function(a, i) {
                var o = {},
                    r = e.__rememberedObjectIndecesToControllers[i];
                wn.each(r, (function(e, t) {
                    o[t] = n ? e.initialValue : e.getValue()
                })), t[i] = o
            })), t
        }

        function Vt(e) {
            for (var n = 0; n < e.__preset_select.length; n++) e.__preset_select[n].value === e.preset && (e.__preset_select.selectedIndex = n)
        }

        function zt(e) {
            0 !== e.length && vt.call(window, (function() {
                zt(e)
            })), wn.each(e, (function(e) {
                e.updateDisplay()
            }))
        }
        Pt.toggleHide = function() {
            Lt = !Lt, wn.each(Nt, (function(e) {
                e.domElement.style.display = Lt ? "none" : ""
            }))
        }, Pt.CLASS_AUTO_PLACE = "a", Pt.CLASS_AUTO_PLACE_CONTAINER = "ac", Pt.CLASS_MAIN = "main", Pt.CLASS_CONTROLLER_ROW = "cr", Pt.CLASS_TOO_TALL = "taller-than-window", Pt.CLASS_CLOSED = "closed", Pt.CLASS_CLOSE_BUTTON = "close-button", Pt.CLASS_CLOSE_TOP = "close-top", Pt.CLASS_CLOSE_BOTTOM = "close-bottom", Pt.CLASS_DRAG = "drag", Pt.DEFAULT_WIDTH = 245, Pt.TEXT_CLOSED = "Close Controls", Pt.TEXT_OPEN = "Open Controls", Pt._keydownHandler = function(e) {
            "text" === document.activeElement.type || e.which !== xt && e.keyCode !== xt || Pt.toggleHide()
        }, Zn.bind(window, "keydown", Pt._keydownHandler, !1), wn.extend(Pt.prototype, {
            add: function(e, n) {
                return It(this, e, n, {
                    factoryArgs: Array.prototype.slice.call(arguments, 2)
                })
            },
            addColor: function(e, n) {
                return It(this, e, n, {
                    color: !0
                })
            },
            remove: function(e) {
                this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
                var n = this;
                wn.defer((function() {
                    n.onResize()
                }))
            },
            destroy: function() {
                if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
                this.autoPlace && Ft.removeChild(this.domElement);
                var e = this;
                wn.each(this.__folders, (function(n) {
                    e.removeFolder(n)
                })), Zn.unbind(window, "keydown", Pt._keydownHandler, !1), Ot(this)
            },
            addFolder: function(e) {
                if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                var n = {
                    name: e,
                    parent: this
                };
                n.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (n.closed = this.load.folders[e].closed, n.load = this.load.folders[e]);
                var t = new Pt(n);
                this.__folders[e] = t;
                var a = wt(this, t.domElement);
                return Zn.addClass(a, "folder"), t
            },
            removeFolder: function(e) {
                this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Ot(e);
                var n = this;
                wn.each(e.__folders, (function(n) {
                    e.removeFolder(n)
                })), wn.defer((function() {
                    n.onResize()
                }))
            },
            open: function() {
                this.closed = !1
            },
            close: function() {
                this.closed = !0
            },
            hide: function() {
                this.domElement.style.display = "none"
            },
            show: function() {
                this.domElement.style.display = ""
            },
            onResize: function() {
                var e = this.getRoot();
                if (e.scrollable) {
                    var n = Zn.getOffset(e.__ul).top,
                        t = 0;
                    wn.each(e.__ul.childNodes, (function(n) {
                        e.autoPlace && n === e.__save_row || (t += Zn.getHeight(n))
                    })), window.innerHeight - n - bt < t ? (Zn.addClass(e.domElement, Pt.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - n - bt + "px") : (Zn.removeClass(e.domElement, Pt.CLASS_TOO_TALL), e.__ul.style.height = "auto")
                }
                e.__resize_handle && wn.defer((function() {
                    e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                })), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
            },
            onResizeDebounced: wn.debounce((function() {
                this.onResize()
            }), 50),
            remember: function() {
                if (wn.isUndefined(St) && (St = new gt, St.domElement.innerHTML = ht), this.parent) throw new Error("You can only call remember on a top level GUI.");
                var e = this;
                wn.each(Array.prototype.slice.call(arguments), (function(n) {
                    0 === e.__rememberedObjects.length && Bt(e), -1 === e.__rememberedObjects.indexOf(n) && e.__rememberedObjects.push(n)
                })), this.autoPlace && Gt(this, this.width)
            },
            getRoot: function() {
                var e = this;
                while (e.parent) e = e.parent;
                return e
            },
            getSaveObject: function() {
                var e = this.load;
                return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = Xt(this)), e.folders = {}, wn.each(this.__folders, (function(n, t) {
                    e.folders[t] = n.getSaveObject()
                })), e
            },
            save: function() {
                this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = Xt(this), Rt(this, !1), this.saveToLocalStorageIfPossible()
            },
            saveAs: function(e) {
                this.load.remembered || (this.load.remembered = {}, this.load.remembered[yt] = Xt(this, !0)), this.load.remembered[e] = Xt(this), this.preset = e, Dt(this, e, !0), this.saveToLocalStorageIfPossible()
            },
            revert: function(e) {
                wn.each(this.__controllers, (function(n) {
                    this.getRoot().load.remembered ? Ct(e || this.getRoot(), n) : n.setValue(n.initialValue), n.__onFinishChange && n.__onFinishChange.call(n, n.getValue())
                }), this), wn.each(this.__folders, (function(e) {
                    e.revert(e)
                })), e || Rt(this.getRoot(), !1)
            },
            listen: function(e) {
                var n = 0 === this.__listening.length;
                this.__listening.push(e), n && zt(this.__listening)
            },
            updateDisplay: function() {
                wn.each(this.__controllers, (function(e) {
                    e.updateDisplay()
                })), wn.each(this.__folders, (function(e) {
                    e.updateDisplay()
                }))
            }
        });
        var jt = Pt,
            Yt = function() {
                function e(n, t, a) {
                    Object(r["a"])(this, e), this.gltf = t, this.gltfScene = t.scene, this.clock = new l["Clock"], this.animationMixer = null, this.debug = !1, this.program = new K, this.isMobile = ue(), this.envRotation = 0, this.envRotationFromPanel = (new l["Matrix4"]).makeRotationY(this.envRotation), this.envRotationMat4 = (new l["Matrix4"]).copy(this.envRotationFromPanel), this.envRotationMat = {
                        value: (new l["Matrix3"]).setFromMatrix4(this.envRotationMat4)
                    }, this.envRotationMatBG = {
                        value: (new l["Matrix3"]).copy(this.envRotationMat.value)
                    }, this.envBrightness = {
                        value: 1
                    }, this.cameraRotationMatrix = new l["Matrix4"], this.sunLightPanelRotateMat = new l["Matrix4"], this.renderer = n.renderer, this.renderer.toneMapping = l["".concat(te[0], "ToneMapping")], this.scene = n.scene, this.camera = n.camera, this.container = n.container, this.width = n.width, this.height = n.height, this.callBack = a, this.initBloomPass = !1, this.initSSAOPass = !1, this.initFXAAPass = !0, this.control = new c(this.camera, this.container), this.initScene(), this.initPostProcessing()
                }
                return Object(s["a"])(e, [{
                    key: "loadEnvMap",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z[0],
                            n = "".concat(q).concat(e, "/");
                        return new x(this).loadPackage(n)
                    }
                }, {
                    key: "loadSunLight",
                    value: function(e) {
                        this.sunLight || (this.sunLight = new l["DirectionalLight"](16777215, 1)), this.sunLight.position.copy(e.position), this.sunLight.castShadow = !0, this.scene.add(this.sunLight)
                    }
                }, {
                    key: "loadBackground",
                    value: function(e, n) {
                        this.background ? (this.background.material.uniforms.envMap.value = e.texture, this.background.material.uniforms.uEnvironmentSize.value = n) : (this.background = new R({
                            envMap: e.texture,
                            uBGEnvironmentSize: n,
                            uEnvBrightness: this.envBrightness,
                            debug: this.debug
                        }, 500), this.background.material.uniforms.uEnvironmentTransform = this.envRotationMatBG)
                    }
                }, {
                    key: "updateEnvMap",
                    value: function() {
                        var e = Object(u["a"])(regeneratorRuntime.mark((function e(n, t) {
                            var a, i, o, r, s, l, u, c;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.loadEnvMap(n);
                                    case 2:
                                        a = e.sent, i = a.mapEnv, o = a.backgroundEnv, r = a.uEnvironmentSphericalHarmonics, s = a.uEnvironmentLodRange, l = a.uEnvironmentSize, u = a.uBGEnvironmentSize, c = a.sunlightInfo, this.loadSunLight(c), this.sunLightStartPos = this.sunLight.position.clone(), this.loadBackground(o, u), this.gltfScene.traverse((function(e) {
                                            e.isMesh && (e.material.uniforms.envMap.value = i.texture, e.material.uniforms["uEnvironmentSphericalHarmonics"] = {
                                                value: r
                                            }, e.material.uniforms["uEnvironmentLodRange"] = {
                                                value: s
                                            }, e.material.uniforms["uEnvironmentSize"] = {
                                                value: l
                                            }, e.material.needsUpdate = !0)
                                        })), "function" == typeof t && t();
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function n(n, t) {
                            return e.apply(this, arguments)
                        }
                        return n
                    }()
                }, {
                    key: "initScene",
                    value: function() {
                        var e = Object(u["a"])(regeneratorRuntime.mark((function e() {
                            var n, t, a, i, o, r, s, u, c, d, f, h, p, m, v = this;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.loadEnvMap();
                                    case 2:
                                        if (n = e.sent, t = n.backgroundEnv, a = n.uBGEnvironmentSize, i = n.sunlightInfo, o = this.scene, this.loadSunLight(i), this.loadBackground(t, a), o.add(this.background), r = this.gltfScene, s = this.gltf.animations, s && s.length)
                                            for (this.animationMixer = new l["AnimationMixer"](r), u = 0; u < s.length; u++) c = s[u], d = this.animationMixer.clipAction(c), d.play();
                                        o.add(r), this.adjustFactorFromBox(r), f = this.program.getPBRShader(), h = f.pbrVS, p = f.pbrFS, m = this.shadowDepthRange = new l["Vector2"](this.sunLight.shadow.camera.near, this.sunLight.shadow.camera.far), r.traverse((function(e) {
                                            e.isMesh && (e.material = new N(e, n, {
                                                pbrVS: h,
                                                pbrFS: p,
                                                shadowDepthRange: m
                                            }), e.material.uniforms.uEnvironmentTransform = v.envRotationMat, e.material.uniforms.uEnvBrightness = v.envBrightness, e.castShadow = !0, e.receiveShadow = !0)
                                        })), this.initEvent(), this.initGUI(), "function" === typeof this.callBack && this.callBack();
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function n() {
                            return e.apply(this, arguments)
                        }
                        return n
                    }()
                }, {
                    key: "adjustFactorFromBox",
                    value: function(e) {
                        var n = this.box = (new l["Box3"]).setFromObject(e),
                            t = n.getSize(new l["Vector3"]),
                            a = Math.max(t.x, t.y, t.z);
                        if (a < 100) {
                            var i = 100 / a;
                            e.scale.setScalar(i)
                        }
                        n = this.box = (new l["Box3"]).setFromObject(e);
                        var o = n.getCenter(new l["Vector3"]);
                        if (e.position.sub(o), this.debug) {
                            var r = new l["BoxHelper"](e, 16776960);
                            this.scene.add(r)
                        }
                        oe(this.camera, e, this.control, 2), this.background.setSize(this.camera.far), re(this.sunLight, this.scene, e, this.debug), this.sunLightStartPos = this.sunLight.position.clone()
                    }
                }, {
                    key: "initEvent",
                    value: function() {
                        var e = this,
                            n = {
                                x: 0
                            };
                        window.addEventListener("mousemove", (function(t) {
                            var a = t.which || t.button;
                            if (t.altKey && a) {
                                t.stopPropagation();
                                var i = t.clientX - n.x;
                                e.envRotation += .01 * i
                            }
                            n.x = t.clientX
                        }), !0)
                    }
                }, {
                    key: "initPostProcessing",
                    value: function() {
                        var e = this.scene,
                            n = this.camera,
                            t = this.renderer,
                            a = this.renderPass = new ke(e, n),
                            i = this.normalPass = new vn(e, n),
                            o = new yn({
                                blendFunction: Ge.SKIP
                            }),
                            r = this.ssaoEffect = new Sn(n, i.renderTarget.texture, {
                                blendFunction: Ge.MULTIPLY,
                                samples: 11,
                                rings: 4,
                                distanceThreshold: .02,
                                distanceFalloff: .0025,
                                rangeThreshold: 3e-4,
                                rangeFalloff: 1e-4,
                                luminanceInfluence: .7,
                                radius: 30,
                                scale: 1,
                                bias: .05
                            }),
                            s = this.ssaoEffectPass = new pn(n, r, o);
                        s.enabled = this.initSSAOPass;
                        var u = new xn,
                            c = this.bloomEffectPass = new pn(n, u);
                        c.enabled = this.initBloomPass;
                        var d = new Te,
                            f = t.getPixelRatio();
                        d.uniforms["resolution"].value.x = 1 / (this.width * f), d.uniforms["resolution"].value.y = 1 / (this.height * f);
                        var h = this.fxaaPass = new gn(d);
                        h.enabled = this.initFXAAPass;
                        var p = new gn(new Ae),
                            m = this.composer = new _n(t, {
                                frameBufferType: l["HalfFloatType"]
                            });
                        m.addPass(a), m.addPass(i), m.addPass(s), m.addPass(c), m.addPass(h), m.addPass(p)
                    }
                }, {
                    key: "toggleBloomEffect",
                    value: function(e) {
                        this.bloomEffectPass.enabled = e
                    }
                }, {
                    key: "toggleSSAOEffect",
                    value: function(e) {
                        this.ssaoEffectPass.enabled = e
                    }
                }, {
                    key: "toggleAAEffect",
                    value: function(e) {
                        this.fxaaPass.enabled = e
                    }
                }, {
                    key: "initGUI",
                    value: function() {
                        var e = this,
                            n = new jt;
                        this.isMobile && n.close();
                        var t = this.gltfScene,
                            a = this.guiParams = {
                                enableIBL: !!L.ENABLE_IBL,
                                enableLight: !!L.ENABLE_LIGHT,
                                envRotation: this.envRotation,
                                envBrightness: this.envBrightness.value,
                                envMap: Z[0],
                                metalness: F.metalness.value,
                                roughness: F.roughness.value,
                                diffuseEquation: J[0],
                                specularFresnelEquation: $[0],
                                specularNDFEquation: ee[0],
                                specularVisEquation: ne[0],
                                enableAnisotropy: !!L.ENABLE_ANISOTROPY,
                                anisotropyFactor: F.uAnisotropyFactor.value,
                                anisotropyRotation: F.uAnisotropyRotation.value,
                                enableClearCoat: !!L.ENABLE_CLEARCOAT,
                                clearCoatRoughness: F.uClearCoatRoughness.value,
                                clearCoat: F.uClearCoat.value,
                                enableCompensation: !!L.ENERGY_COMPENSATION,
                                enableSpecularAA: !!L.GEOMETRIC_SPECULAR_AA,
                                specularAAVariance: F.uSpecularAAVariance.value,
                                specularAAThreshold: F.uSpecularAAThreshold.value,
                                specularAO: ae[0],
                                enableMSSpecularAO: !!L.MS_SPECULAR_AO,
                                enableMSDiffuseAO: !!L.MS_DIFFUSE_AO,
                                toneMapping: te[0],
                                enableSSAO: this.initSSAOPass,
                                enableFXAA: this.initFXAAPass,
                                enableBloom: this.initBloomPass
                            },
                            i = n.addFolder("PBR");
                        i.add(a, "enableIBL").onChange((function(n) {
                            e.guiParams.enableIBL = n, e.reCompileShader()
                        })), i.add(a, "enableLight").name("enableSunLight").onChange((function(n) {
                            e.guiParams.enableLight = n, e.reCompileShader()
                        })), i.add(a, "envMap", Z).onChange((function(n) {
                            document.querySelector("#wrapper").classList.add("isLoading"), e.updateEnvMap(n, (function() {
                                document.querySelector("#wrapper").classList.remove("isLoading")
                            }))
                        })), i.add(a, "envRotation", -Math.PI, Math.PI).step(.1).onChange((function(n) {
                            e.envRotation = n
                        })), i.add(a, "envBrightness", 0, 2).step(.1).onChange((function(n) {
                            e.envBrightness.value = n
                        })), i.add(a, "metalness", 0, 1).step(.01).onChange((function(e) {
                            t.traverse((function(n) {
                                n.isMesh && (n.material.uniforms.metalness.value = e)
                            }))
                        })), i.add(a, "roughness", 0, 1).step(.01).onChange((function(e) {
                            t.traverse((function(n) {
                                n.isMesh && (n.material.uniforms.roughness.value = e)
                            }))
                        })), i.open();
                        var o = n.addFolder("Equations");
                        o.add(a, "diffuseEquation", J).name("diffuse").onChange((function(n) {
                            e.guiParams.diffuseEquation = n, e.reCompileShader()
                        })), o.add(a, "specularFresnelEquation", $).name("fresnel").onChange((function(n) {
                            e.guiParams.specularFresnelEquation = n, e.reCompileShader()
                        })), o.add(a, "specularNDFEquation", ee).name("NDF").onChange((function(n) {
                            e.guiParams.specularNDFEquation = n, e.reCompileShader()
                        })), o.add(a, "specularVisEquation", ne).name("geometry").onChange((function(n) {
                            e.guiParams.specularVisEquation = n, e.reCompileShader()
                        })), o.open();
                        var r = n.addFolder("Anisotropy");
                        r.add(a, "enableAnisotropy").name("enable").onChange((function(n) {
                            e.guiParams.enableAnisotropy = n, e.reCompileShader()
                        })), r.add(a, "anisotropyRotation", -3.14, 3.14).step(.01).name("rotation").onChange((function(e) {
                            t.traverse((function(n) {
                                n.isMesh && (n.material.uniforms.uAnisotropyRotation.value = e)
                            }))
                        })), r.add(a, "anisotropyFactor", 0, 1).name("factor").step(.01).onChange((function(e) {
                            t.traverse((function(n) {
                                n.isMesh && (n.material.uniforms.uAnisotropyFactor.value = e)
                            }))
                        }));
                        var s = n.addFolder("ClearCoat");
                        s.add(a, "enableClearCoat").name("enable").onChange((function(n) {
                            e.guiParams.enableClearCoat = n, e.reCompileShader()
                        })), s.add(a, "clearCoat", 0, 1).step(.01).name("clearCoat").onChange((function(e) {
                            t.traverse((function(n) {
                                n.isMesh && (n.material.uniforms.uClearCoat.value = e)
                            }))
                        })), s.add(a, "clearCoatRoughness", 0, 1).step(.01).name("roughness").onChange((function(e) {
                            t.traverse((function(n) {
                                n.isMesh && (n.material.uniforms.uClearCoatRoughness.value = e)
                            }))
                        }));
                        var u = n.addFolder("Advance");
                        u.add(a, "enableCompensation").name("compensation").onChange((function(n) {
                            e.guiParams.enableCompensation = n, e.reCompileShader()
                        })), u.add(a, "enableSpecularAA").name("specularAA").onChange((function(n) {
                            e.guiParams.enableSpecularAA = n, e.reCompileShader()
                        })), u.add(a, "specularAAVariance", 0, 1).name("sAAVariance").step(.01).onChange((function(e) {
                            t.traverse((function(n) {
                                n.isMesh && (n.material.uniforms.uSpecularAAVariance.value = e)
                            }))
                        })), u.add(a, "enableMSSpecularAO").name("msSpecularAO").onChange((function(n) {
                            e.guiParams.enableMSSpecularAO = n, e.reCompileShader()
                        })), u.add(a, "enableMSDiffuseAO").name("msDiffuseAO").onChange((function(n) {
                            e.guiParams.enableMSDiffuseAO = n, e.reCompileShader()
                        })), u.add(a, "specularAO", ae).onChange((function(n) {
                            e.guiParams.specularAO = n, e.reCompileShader()
                        }));
                        var c = n.addFolder("Post-Processing");
                        c.add(a, "toneMapping", te).onChange((function(n) {
                            e.renderer.toneMapping = l["".concat(n, "ToneMapping")], e.reCompileShader(!0)
                        })), c.add(a, "enableSSAO").name("SSAO").onChange((function(n) {
                            e.toggleSSAOEffect(n)
                        })), c.add(a, "enableBloom").name("Bloom").onChange((function(n) {
                            e.toggleBloomEffect(n)
                        })), c.add(a, "enableFXAA").name("FXAA").onChange((function(n) {
                            e.toggleAAEffect(n)
                        }))
                    }
                }, {
                    key: "setDefinesFromGUI",
                    value: function(e) {
                        var n = this.guiParams,
                            t = ie;
                        return Object.keys(e).map((function(n) {
                            t.test(n) && delete e[n]
                        })), n.enableIBL && (e.ENABLE_IBL = 1), n.enableLight && (e.ENABLE_LIGHT = 1), n.enableAnisotropy && (e.ENABLE_ANISOTROPY = 1), n.enableClearCoat && (e.ENABLE_CLEARCOAT = 1), n.enableCompensation && (e.ENERGY_COMPENSATION = 1), n.enableSpecularAA && (e.GEOMETRIC_SPECULAR_AA = 1), n.enableMSSpecularAO && (e.MS_SPECULAR_AO = 1), n.enableMSDiffuseAO && (e.MS_DIFFUSE_AO = 1), e["DIFFUSE_".concat(n.diffuseEquation.toUpperCase())] = 1, e["F_".concat(n.specularFresnelEquation.toUpperCase())] = 1, e["NDF_".concat(n.specularNDFEquation.toUpperCase())] = 1, e["V_".concat(n.specularVisEquation.toUpperCase())] = 1, e["SPECULAR_AO_".concat(n.specularAO.toUpperCase())] = 1, e
                    }
                }, {
                    key: "reCompileShader",
                    value: function(e) {
                        var n = this;
                        this.gltfScene.traverse((function(e) {
                            e.isMesh && e.material && (n.setDefinesFromGUI(e.material.defines), e.material.needsUpdate = !0)
                        })), e && (this.background.material.needsUpdate = !0)
                    }
                }, {
                    key: "updateEnvironmentRotation",
                    value: function(e) {
                        this.envRotationFromPanel.makeRotationY(e), this.cameraRotationMatrix.makeRotationFromQuaternion(this.camera.quaternion), this.envRotationMat4.multiplyMatrices(this.envRotationFromPanel, this.cameraRotationMatrix), this.envRotationMat.value.setFromMatrix4(this.envRotationMat4), this.envRotationMatBG.value.setFromMatrix4(this.envRotationFromPanel);
                        var n = this.sunLightStartPos.clone();
                        this.sunLightPanelRotateMat.getInverse(this.envRotationFromPanel), n.applyMatrix4(this.sunLightPanelRotateMat), this.sunLight.position.copy(n)
                    }
                }, {
                    key: "resize",
                    value: function(e, n) {
                        this.width = e, this.height = n, this.camera.aspect = this.width / this.height, this.camera.updateProjectionMatrix(), this.composer.setSize(e, n)
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this.clock.getDelta();
                        this.updateEnvironmentRotation(this.envRotation), this.animationMixer && this.animationMixer.update(e), this.composer.render(e)
                    }
                }]), e
            }(),
            Qt = function() {
                function e(n, t, a) {
                    Object(r["a"])(this, e), this.container = n, this.time = 0, this.width = se(n), this.height = le(n);
                    var i = this.camera = new l["PerspectiveCamera"](45, this.width / this.height, .1, 1e3);
                    i.position.set(0, 0, 10);
                    var o = this.renderer = new l["WebGLRenderer"]({
                        antialias: !1
                    });
                    o.domElement.id = "canvasWebGL", o.setPixelRatio(window.devicePixelRatio), o.setSize(this.width, this.height), o.setClearColor(16777215, 1), o.shadowMap.enabled = !0, o.gammaFactor = 2.2, o.outputEncoding = l["sRGBEncoding"], n.appendChild(o.domElement), this.initScene(t, a), this.initEvents()
                }
                return Object(s["a"])(e, [{
                    key: "initScene",
                    value: function(e, n) {
                        var t = this;
                        this.scene = new l["Scene"], this.modelViewer = new Yt(this, e, (function() {
                            t.loaded = !0, t.onWindowResize(), "function" === typeof n && n()
                        })), this.animete()
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        window.addEventListener("resize", this.onWindowResize.bind(this), !1)
                    }
                }, {
                    key: "onWindowResize",
                    value: function() {
                        this.loaded && (this.width = se(this.container), this.height = le(this.container), this.modelViewer.resize(this.width, this.height))
                    }
                }, {
                    key: "animete",
                    value: function(e) {
                        this.loaded && this.modelViewer.update(e), requestAnimationFrame(this.animete.bind(this))
                    }
                }]), e
            }(),
            Wt = (t("2b3d"), t("3835")),
            Kt = (t("b420"), t("38cf"), t("fd87"), t("8b09"), t("84c3"), t("fb2c"), function() {
                function e(e) {
                    l["Loader"].call(this, e), this.dracoLoader = null, this.ddsLoader = null
                }

                function n() {
                    var e = {};
                    return {
                        get: function(n) {
                            return e[n]
                        },
                        add: function(n, t) {
                            e[n] = t
                        },
                        remove: function(n) {
                            delete e[n]
                        },
                        removeAll: function() {
                            e = {}
                        }
                    }
                }
                e.prototype = Object.assign(Object.create(l["Loader"].prototype), {
                    constructor: e,
                    load: function(e, n, t, a) {
                        var i, o = this;
                        i = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : l["LoaderUtils"].extractUrlBase(e), o.manager.itemStart(e);
                        var r = function(n) {
                                a ? a(n) : console.error(n), o.manager.itemError(e), o.manager.itemEnd(e)
                            },
                            s = new l["FileLoader"](o.manager);
                        s.setPath(this.path), s.setResponseType("arraybuffer"), "use-credentials" === o.crossOrigin && s.setWithCredentials(!0), s.load(e, (function(t) {
                            try {
                                o.parse(t, i, (function(t) {
                                    n(t), o.manager.itemEnd(e)
                                }), r)
                            } catch (a) {
                                r(a)
                            }
                        }), t, r)
                    },
                    setDRACOLoader: function(e) {
                        return this.dracoLoader = e, this
                    },
                    setDDSLoader: function(e) {
                        return this.ddsLoader = e, this
                    },
                    parse: function(e, n, u, c) {
                        var p, g = {};
                        if ("string" === typeof e) p = e;
                        else {
                            var _ = l["LoaderUtils"].decodeText(new Uint8Array(e, 0, 4));
                            if (_ === s) {
                                try {
                                    g[t.KHR_BINARY_GLTF] = new d(e)
                                } catch (S) {
                                    return void(c && c(S))
                                }
                                p = g[t.KHR_BINARY_GLTF].content
                            } else p = l["LoaderUtils"].decodeText(new Uint8Array(e))
                        }
                        var A = JSON.parse(p);
                        if (void 0 === A.asset || A.asset.version[0] < 2) c && c(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                        else {
                            if (A.extensionsUsed)
                                for (var x = 0; x < A.extensionsUsed.length; ++x) {
                                    var b = A.extensionsUsed[x],
                                        y = A.extensionsRequired || [];
                                    switch (b) {
                                        case t.KHR_LIGHTS_PUNCTUAL:
                                            g[b] = new i(A);
                                            break;
                                        case t.KHR_MATERIALS_CLEARCOAT:
                                            g[b] = new r;
                                            break;
                                        case t.KHR_MATERIALS_UNLIT:
                                            g[b] = new o;
                                            break;
                                        case t.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                            g[b] = new m;
                                            break;
                                        case t.KHR_DRACO_MESH_COMPRESSION:
                                            g[b] = new f(A, this.dracoLoader);
                                            break;
                                        case t.MSFT_TEXTURE_DDS:
                                            g[b] = new a(this.ddsLoader);
                                            break;
                                        case t.KHR_TEXTURE_TRANSFORM:
                                            g[b] = new h;
                                            break;
                                        case t.KHR_MESH_QUANTIZATION:
                                            g[b] = new v;
                                            break;
                                        default:
                                            y.indexOf(b) >= 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + b + '".')
                                    }
                                }
                            var E = new U(A, g, {
                                path: n || this.resourcePath || "",
                                crossOrigin: this.crossOrigin,
                                manager: this.manager
                            });
                            E.parse(u, c)
                        }
                    }
                });
                var t = {
                    KHR_BINARY_GLTF: "KHR_binary_glTF",
                    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
                    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
                    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                    MSFT_TEXTURE_DDS: "MSFT_texture_dds"
                };

                function a(e) {
                    if (!e) throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");
                    this.name = t.MSFT_TEXTURE_DDS, this.ddsLoader = e
                }

                function i(e) {
                    this.name = t.KHR_LIGHTS_PUNCTUAL;
                    var n = e.extensions && e.extensions[t.KHR_LIGHTS_PUNCTUAL] || {};
                    this.lightDefs = n.lights || []
                }

                function o() {
                    this.name = t.KHR_MATERIALS_UNLIT
                }

                function r() {
                    this.name = t.KHR_MATERIALS_CLEARCOAT
                }
                i.prototype.loadLight = function(e) {
                    var n, t = this.lightDefs[e],
                        a = new l["Color"](16777215);
                    void 0 !== t.color && a.fromArray(t.color);
                    var i = void 0 !== t.range ? t.range : 0;
                    switch (t.type) {
                        case "directional":
                            n = new l["DirectionalLight"](a), n.target.position.set(0, 0, -1), n.add(n.target);
                            break;
                        case "point":
                            n = new l["PointLight"](a), n.distance = i;
                            break;
                        case "spot":
                            n = new l["SpotLight"](a), n.distance = i, t.spot = t.spot || {}, t.spot.innerConeAngle = void 0 !== t.spot.innerConeAngle ? t.spot.innerConeAngle : 0, t.spot.outerConeAngle = void 0 !== t.spot.outerConeAngle ? t.spot.outerConeAngle : Math.PI / 4, n.angle = t.spot.outerConeAngle, n.penumbra = 1 - t.spot.innerConeAngle / t.spot.outerConeAngle, n.target.position.set(0, 0, -1), n.add(n.target);
                            break;
                        default:
                            throw new Error('THREE.GLTFLoader: Unexpected light type, "' + t.type + '".')
                    }
                    return n.position.set(0, 0, 0), n.decay = 2, void 0 !== t.intensity && (n.intensity = t.intensity), n.name = t.name || "light_" + e, Promise.resolve(n)
                }, o.prototype.getMaterialType = function() {
                    return l["MeshBasicMaterial"]
                }, o.prototype.extendParams = function(e, n, t) {
                    var a = [];
                    e.color = new l["Color"](1, 1, 1), e.opacity = 1;
                    var i = n.pbrMetallicRoughness;
                    if (i) {
                        if (Array.isArray(i.baseColorFactor)) {
                            var o = i.baseColorFactor;
                            e.color.fromArray(o), e.opacity = o[3]
                        }
                        void 0 !== i.baseColorTexture && a.push(t.assignTexture(e, "map", i.baseColorTexture))
                    }
                    return Promise.all(a)
                }, r.prototype.getMaterialType = function() {
                    return l["MeshPhysicalMaterial"]
                }, r.prototype.extendParams = function(e, n, t) {
                    var a = [],
                        i = n.extensions[this.name];
                    if (void 0 !== i.clearcoatFactor && (e.clearcoat = i.clearcoatFactor), void 0 !== i.clearcoatTexture && a.push(t.assignTexture(e, "clearcoatMap", i.clearcoatTexture)), void 0 !== i.clearcoatRoughnessFactor && (e.clearcoatRoughness = i.clearcoatRoughnessFactor), void 0 !== i.clearcoatRoughnessTexture && a.push(t.assignTexture(e, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), void 0 !== i.clearcoatNormalTexture && (a.push(t.assignTexture(e, "clearcoatNormalMap", i.clearcoatNormalTexture)), void 0 !== i.clearcoatNormalTexture.scale)) {
                        var o = i.clearcoatNormalTexture.scale;
                        e.clearcoatNormalScale = new l["Vector2"](o, o)
                    }
                    return Promise.all(a)
                };
                var s = "glTF",
                    u = 12,
                    c = {
                        JSON: 1313821514,
                        BIN: 5130562
                    };

                function d(e) {
                    this.name = t.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    var n = new DataView(e, 0, u);
                    if (this.header = {
                            magic: l["LoaderUtils"].decodeText(new Uint8Array(e.slice(0, 4))),
                            version: n.getUint32(4, !0),
                            length: n.getUint32(8, !0)
                        }, this.header.magic !== s) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
                    var a = new DataView(e, u),
                        i = 0;
                    while (i < a.byteLength) {
                        var o = a.getUint32(i, !0);
                        i += 4;
                        var r = a.getUint32(i, !0);
                        if (i += 4, r === c.JSON) {
                            var d = new Uint8Array(e, u + i, o);
                            this.content = l["LoaderUtils"].decodeText(d)
                        } else if (r === c.BIN) {
                            var f = u + i;
                            this.body = e.slice(f, f + o)
                        }
                        i += o
                    }
                    if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
                }

                function f(e, n) {
                    if (!n) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = t.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = n, this.dracoLoader.preload()
                }

                function h() {
                    this.name = t.KHR_TEXTURE_TRANSFORM
                }

                function p(e) {
                    l["MeshStandardMaterial"].call(this), this.isGLTFSpecularGlossinessMaterial = !0;
                    var n = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
                        t = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
                        a = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
                        i = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
                        o = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb;", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.", "material.specularRoughness += geometryRoughness;", "material.specularRoughness = min( material.specularRoughness, 1.0 );", "material.specularColor = specularFactor.rgb;"].join("\n"),
                        r = {
                            specular: {
                                value: (new l["Color"]).setHex(16777215)
                            },
                            glossiness: {
                                value: 1
                            },
                            specularMap: {
                                value: null
                            },
                            glossinessMap: {
                                value: null
                            }
                        };
                    this._extraUniforms = r, this.onBeforeCompile = function(e) {
                        for (var s in r) e.uniforms[s] = r[s];
                        e.fragmentShader = e.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;"), e.fragmentShader = e.fragmentShader.replace("uniform float metalness;", "uniform float glossiness;"), e.fragmentShader = e.fragmentShader.replace("#include <roughnessmap_pars_fragment>", n), e.fragmentShader = e.fragmentShader.replace("#include <metalnessmap_pars_fragment>", t), e.fragmentShader = e.fragmentShader.replace("#include <roughnessmap_fragment>", a), e.fragmentShader = e.fragmentShader.replace("#include <metalnessmap_fragment>", i), e.fragmentShader = e.fragmentShader.replace("#include <lights_physical_fragment>", o)
                    }, Object.defineProperties(this, {
                        specular: {
                            get: function() {
                                return r.specular.value
                            },
                            set: function(e) {
                                r.specular.value = e
                            }
                        },
                        specularMap: {
                            get: function() {
                                return r.specularMap.value
                            },
                            set: function(e) {
                                r.specularMap.value = e
                            }
                        },
                        glossiness: {
                            get: function() {
                                return r.glossiness.value
                            },
                            set: function(e) {
                                r.glossiness.value = e
                            }
                        },
                        glossinessMap: {
                            get: function() {
                                return r.glossinessMap.value
                            },
                            set: function(e) {
                                r.glossinessMap.value = e, e ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_ROUGHNESSMAP = "") : (delete this.defines.USE_ROUGHNESSMAP, delete this.defines.USE_GLOSSINESSMAP)
                            }
                        }
                    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e)
                }

                function m() {
                    return {
                        name: t.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                        specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                        getMaterialType: function() {
                            return p
                        },
                        extendParams: function(e, n, t) {
                            var a = n.extensions[this.name];
                            e.color = new l["Color"](1, 1, 1), e.opacity = 1;
                            var i = [];
                            if (Array.isArray(a.diffuseFactor)) {
                                var o = a.diffuseFactor;
                                e.color.fromArray(o), e.opacity = o[3]
                            }
                            if (void 0 !== a.diffuseTexture && i.push(t.assignTexture(e, "map", a.diffuseTexture)), e.emissive = new l["Color"](0, 0, 0), e.glossiness = void 0 !== a.glossinessFactor ? a.glossinessFactor : 1, e.specular = new l["Color"](1, 1, 1), Array.isArray(a.specularFactor) && e.specular.fromArray(a.specularFactor), void 0 !== a.specularGlossinessTexture) {
                                var r = a.specularGlossinessTexture;
                                i.push(t.assignTexture(e, "glossinessMap", r)), i.push(t.assignTexture(e, "specularMap", r))
                            }
                            return Promise.all(i)
                        },
                        createMaterial: function(e) {
                            var n = new p(e);
                            return n.fog = !0, n.color = e.color, n.map = void 0 === e.map ? null : e.map, n.lightMap = null, n.lightMapIntensity = 1, n.aoMap = void 0 === e.aoMap ? null : e.aoMap, n.aoMapIntensity = 1, n.emissive = e.emissive, n.emissiveIntensity = 1, n.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, n.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, n.bumpScale = 1, n.normalMap = void 0 === e.normalMap ? null : e.normalMap, n.normalMapType = l["TangentSpaceNormalMap"], e.normalScale && (n.normalScale = e.normalScale), n.displacementMap = null, n.displacementScale = 1, n.displacementBias = 0, n.specularMap = void 0 === e.specularMap ? null : e.specularMap, n.specular = e.specular, n.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, n.glossiness = e.glossiness, n.alphaMap = null, n.envMap = void 0 === e.envMap ? null : e.envMap, n.envMapIntensity = 1, n.refractionRatio = .98, n
                        }
                    }
                }

                function v() {
                    this.name = t.KHR_MESH_QUANTIZATION
                }

                function g(e, n, t, a) {
                    l["Interpolant"].call(this, e, n, t, a)
                }
                f.prototype.decodePrimitive = function(e, n) {
                    var t = this.json,
                        a = this.dracoLoader,
                        i = e.extensions[this.name].bufferView,
                        o = e.extensions[this.name].attributes,
                        r = {},
                        s = {},
                        l = {};
                    for (var u in o) {
                        var c = E[u] || u.toLowerCase();
                        r[c] = o[u]
                    }
                    for (u in e.attributes) {
                        c = E[u] || u.toLowerCase();
                        if (void 0 !== o[u]) {
                            var d = t.accessors[e.attributes[u]],
                                f = A[d.componentType];
                            l[c] = f, s[c] = !0 === d.normalized
                        }
                    }
                    return n.getDependency("bufferView", i).then((function(e) {
                        return new Promise((function(n) {
                            a.decodeDracoFile(e, (function(e) {
                                for (var t in e.attributes) {
                                    var a = e.attributes[t],
                                        i = s[t];
                                    void 0 !== i && (a.normalized = i)
                                }
                                n(e)
                            }), r, l)
                        }))
                    }))
                }, h.prototype.extendTexture = function(e, n) {
                    return e = e.clone(), void 0 !== n.offset && e.offset.fromArray(n.offset), void 0 !== n.rotation && (e.rotation = n.rotation), void 0 !== n.scale && e.repeat.fromArray(n.scale), void 0 !== n.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.needsUpdate = !0, e
                }, p.prototype = Object.create(l["MeshStandardMaterial"].prototype), p.prototype.constructor = p, p.prototype.copy = function(e) {
                    return l["MeshStandardMaterial"].prototype.copy.call(this, e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
                }, g.prototype = Object.create(l["Interpolant"].prototype), g.prototype.constructor = g, g.prototype.copySampleValue_ = function(e) {
                    for (var n = this.resultBuffer, t = this.sampleValues, a = this.valueSize, i = e * a * 3 + a, o = 0; o !== a; o++) n[o] = t[i + o];
                    return n
                }, g.prototype.beforeStart_ = g.prototype.copySampleValue_, g.prototype.afterEnd_ = g.prototype.copySampleValue_, g.prototype.interpolate_ = function(e, n, t, a) {
                    for (var i = this.resultBuffer, o = this.sampleValues, r = this.valueSize, s = 2 * r, l = 3 * r, u = a - n, c = (t - n) / u, d = c * c, f = d * c, h = e * l, p = h - l, m = -2 * f + 3 * d, v = f - d, g = 1 - m, _ = v - d + c, A = 0; A !== r; A++) {
                        var x = o[p + A + r],
                            b = o[p + A + s] * u,
                            y = o[h + A + r],
                            E = o[h + A] * u;
                        i[A] = g * x + _ * b + m * y + v * E
                    }
                    return i
                };
                var _ = {
                        FLOAT: 5126,
                        FLOAT_MAT3: 35675,
                        FLOAT_MAT4: 35676,
                        FLOAT_VEC2: 35664,
                        FLOAT_VEC3: 35665,
                        FLOAT_VEC4: 35666,
                        LINEAR: 9729,
                        REPEAT: 10497,
                        SAMPLER_2D: 35678,
                        POINTS: 0,
                        LINES: 1,
                        LINE_LOOP: 2,
                        LINE_STRIP: 3,
                        TRIANGLES: 4,
                        TRIANGLE_STRIP: 5,
                        TRIANGLE_FAN: 6,
                        UNSIGNED_BYTE: 5121,
                        UNSIGNED_SHORT: 5123
                    },
                    A = {
                        5120: Int8Array,
                        5121: Uint8Array,
                        5122: Int16Array,
                        5123: Uint16Array,
                        5125: Uint32Array,
                        5126: Float32Array
                    },
                    x = {
                        9728: l["NearestFilter"],
                        9729: l["LinearFilter"],
                        9984: l["NearestMipmapNearestFilter"],
                        9985: l["LinearMipmapNearestFilter"],
                        9986: l["NearestMipmapLinearFilter"],
                        9987: l["LinearMipmapLinearFilter"]
                    },
                    b = {
                        33071: l["ClampToEdgeWrapping"],
                        33648: l["MirroredRepeatWrapping"],
                        10497: l["RepeatWrapping"]
                    },
                    y = {
                        SCALAR: 1,
                        VEC2: 2,
                        VEC3: 3,
                        VEC4: 4,
                        MAT2: 4,
                        MAT3: 9,
                        MAT4: 16
                    },
                    E = {
                        POSITION: "position",
                        NORMAL: "normal",
                        TANGENT: "tangent",
                        TEXCOORD_0: "uv",
                        TEXCOORD_1: "uv2",
                        COLOR_0: "color",
                        WEIGHTS_0: "skinWeight",
                        JOINTS_0: "skinIndex"
                    },
                    S = {
                        scale: "scale",
                        translation: "position",
                        rotation: "quaternion",
                        weights: "morphTargetInfluences"
                    },
                    T = {
                        CUBICSPLINE: void 0,
                        LINEAR: l["InterpolateLinear"],
                        STEP: l["InterpolateDiscrete"]
                    },
                    F = {
                        OPAQUE: "OPAQUE",
                        MASK: "MASK",
                        BLEND: "BLEND"
                    },
                    L = {
                        "image/png": l["RGBAFormat"],
                        "image/jpeg": l["RGBFormat"]
                    };

                function N(e, n) {
                    return "string" !== typeof e || "" === e ? "" : (/^https?:\/\//i.test(n) && /^\//.test(e) && (n = n.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : n + e)
                }

                function P(e) {
                    return void 0 === e["DefaultMaterial"] && (e["DefaultMaterial"] = new l["MeshStandardMaterial"]({
                        color: 16777215,
                        emissive: 0,
                        metalness: 1,
                        roughness: 1,
                        transparent: !1,
                        depthTest: !0,
                        side: l["FrontSide"]
                    })), e["DefaultMaterial"]
                }

                function w(e, n, t) {
                    for (var a in t.extensions) void 0 === e[a] && (n.userData.gltfExtensions = n.userData.gltfExtensions || {}, n.userData.gltfExtensions[a] = t.extensions[a])
                }

                function O(e, n) {
                    void 0 !== n.extras && ("object" === Object(Tn["a"])(n.extras) ? Object.assign(e.userData, n.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + n.extras))
                }

                function R(e, n, t) {
                    for (var a = !1, i = !1, o = 0, r = n.length; o < r; o++) {
                        var s = n[o];
                        if (void 0 !== s.POSITION && (a = !0), void 0 !== s.NORMAL && (i = !0), a && i) break
                    }
                    if (!a && !i) return Promise.resolve(e);
                    var l = [],
                        u = [];
                    for (o = 0, r = n.length; o < r; o++) {
                        s = n[o];
                        if (a) {
                            var c = void 0 !== s.POSITION ? t.getDependency("accessor", s.POSITION) : e.attributes.position;
                            l.push(c)
                        }
                        if (i) {
                            c = void 0 !== s.NORMAL ? t.getDependency("accessor", s.NORMAL) : e.attributes.normal;
                            u.push(c)
                        }
                    }
                    return Promise.all([Promise.all(l), Promise.all(u)]).then((function(n) {
                        var t = n[0],
                            o = n[1];
                        return a && (e.morphAttributes.position = t), i && (e.morphAttributes.normal = o), e.morphTargetsRelative = !0, e
                    }))
                }

                function M(e, n) {
                    if (e.updateMorphTargets(), void 0 !== n.weights)
                        for (var t = 0, a = n.weights.length; t < a; t++) e.morphTargetInfluences[t] = n.weights[t];
                    if (n.extras && Array.isArray(n.extras.targetNames)) {
                        var i = n.extras.targetNames;
                        if (e.morphTargetInfluences.length === i.length) {
                            e.morphTargetDictionary = {};
                            for (t = 0, a = i.length; t < a; t++) e.morphTargetDictionary[i[t]] = t
                        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                    }
                }

                function C(e) {
                    var n, a = e.extensions && e.extensions[t.KHR_DRACO_MESH_COMPRESSION];
                    return n = a ? "draco:" + a.bufferView + ":" + a.indices + ":" + I(a.attributes) : e.indices + ":" + I(e.attributes) + ":" + e.mode, n
                }

                function I(e) {
                    for (var n = "", t = Object.keys(e).sort(), a = 0, i = t.length; a < i; a++) n += t[a] + ":" + e[t[a]] + ";";
                    return n
                }

                function U(e, t, a) {
                    this.json = e || {}, this.extensions = t || {}, this.options = a || {}, this.cache = new n, this.primitiveCache = {}, this.textureLoader = new l["TextureLoader"](this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.fileLoader = new l["FileLoader"](this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                }

                function D(e, n, t) {
                    var a = n.attributes,
                        i = new l["Box3"];
                    if (void 0 !== a.POSITION) {
                        var o = t.json.accessors[a.POSITION],
                            r = o.min,
                            s = o.max;
                        if (void 0 !== r && void 0 !== s) {
                            i.set(new l["Vector3"](r[0], r[1], r[2]), new l["Vector3"](s[0], s[1], s[2]));
                            var u = n.targets;
                            if (void 0 !== u) {
                                for (var c = new l["Vector3"], d = new l["Vector3"], f = 0, h = u.length; f < h; f++) {
                                    var p = u[f];
                                    if (void 0 !== p.POSITION) {
                                        o = t.json.accessors[p.POSITION], r = o.min, s = o.max;
                                        void 0 !== r && void 0 !== s ? (d.setX(Math.max(Math.abs(r[0]), Math.abs(s[0]))), d.setY(Math.max(Math.abs(r[1]), Math.abs(s[1]))), d.setZ(Math.max(Math.abs(r[2]), Math.abs(s[2]))), c.max(d)) : console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                                    }
                                }
                                i.expandByVector(c)
                            }
                            e.boundingBox = i;
                            var m = new l["Sphere"];
                            i.getCenter(m.center), m.radius = i.min.distanceTo(i.max) / 2, e.boundingSphere = m
                        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                    }
                }

                function k(e, n, t) {
                    var a = n.attributes,
                        i = [];

                    function o(n, a) {
                        return t.getDependency("accessor", n).then((function(n) {
                            e.setAttribute(a, n)
                        }))
                    }
                    for (var r in a) {
                        var s = E[r] || r.toLowerCase();
                        s in e.attributes || i.push(o(a[r], s))
                    }
                    if (void 0 !== n.indices && !e.index) {
                        var l = t.getDependency("accessor", n.indices).then((function(n) {
                            e.setIndex(n)
                        }));
                        i.push(l)
                    }
                    return O(e, n), D(e, n, t), Promise.all(i).then((function() {
                        return void 0 !== n.targets ? R(e, n.targets, t) : e
                    }))
                }

                function B(e, n) {
                    var t = e.getIndex();
                    if (null === t) {
                        var a = [],
                            i = e.getAttribute("position");
                        if (void 0 === i) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                        for (var o = 0; o < i.count; o++) a.push(o);
                        e.setIndex(a), t = e.getIndex()
                    }
                    var r = t.count - 2,
                        s = [];
                    if (n === l["TriangleFanDrawMode"])
                        for (o = 1; o <= r; o++) s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
                    else
                        for (o = 0; o < r; o++) o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
                    s.length / 3 !== r && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                    var u = e.clone();
                    return u.setIndex(s), u
                }
                return U.prototype.parse = function(e, n) {
                    var t = this,
                        a = this.json,
                        i = this.extensions;
                    this.cache.removeAll(), this.markDefs(), Promise.all([this.getDependencies("scene"), this.getDependencies("animation"), this.getDependencies("camera")]).then((function(n) {
                        var o = {
                            scene: n[0][a.scene || 0],
                            scenes: n[0],
                            animations: n[1],
                            cameras: n[2],
                            asset: a.asset,
                            parser: t,
                            userData: {}
                        };
                        w(i, o, a), O(o, a), e(o)
                    }))["catch"](n)
                }, U.prototype.markDefs = function() {
                    for (var e = this.json.nodes || [], n = this.json.skins || [], t = this.json.meshes || [], a = {}, i = {}, o = 0, r = n.length; o < r; o++)
                        for (var s = n[o].joints, l = 0, u = s.length; l < u; l++) e[s[l]].isBone = !0;
                    for (var c = 0, d = e.length; c < d; c++) {
                        var f = e[c];
                        void 0 !== f.mesh && (void 0 === a[f.mesh] && (a[f.mesh] = i[f.mesh] = 0), a[f.mesh]++, void 0 !== f.skin && (t[f.mesh].isSkinnedMesh = !0))
                    }
                    this.json.meshReferences = a, this.json.meshUses = i
                }, U.prototype.getDependency = function(e, n) {
                    var a = e + ":" + n,
                        i = this.cache.get(a);
                    if (!i) {
                        switch (e) {
                            case "scene":
                                i = this.loadScene(n);
                                break;
                            case "node":
                                i = this.loadNode(n);
                                break;
                            case "mesh":
                                i = this.loadMesh(n);
                                break;
                            case "accessor":
                                i = this.loadAccessor(n);
                                break;
                            case "bufferView":
                                i = this.loadBufferView(n);
                                break;
                            case "buffer":
                                i = this.loadBuffer(n);
                                break;
                            case "material":
                                i = this.loadMaterial(n);
                                break;
                            case "texture":
                                i = this.loadTexture(n);
                                break;
                            case "skin":
                                i = this.loadSkin(n);
                                break;
                            case "animation":
                                i = this.loadAnimation(n);
                                break;
                            case "camera":
                                i = this.loadCamera(n);
                                break;
                            case "light":
                                i = this.extensions[t.KHR_LIGHTS_PUNCTUAL].loadLight(n);
                                break;
                            default:
                                throw new Error("Unknown type: " + e)
                        }
                        this.cache.add(a, i)
                    }
                    return i
                }, U.prototype.getDependencies = function(e) {
                    var n = this.cache.get(e);
                    if (!n) {
                        var t = this,
                            a = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                        n = Promise.all(a.map((function(n, a) {
                            return t.getDependency(e, a)
                        }))), this.cache.add(e, n)
                    }
                    return n
                }, U.prototype.loadBuffer = function(e) {
                    var n = this.json.buffers[e],
                        a = this.fileLoader;
                    if (n.type && "arraybuffer" !== n.type) throw new Error("THREE.GLTFLoader: " + n.type + " buffer type is not supported.");
                    if (void 0 === n.uri && 0 === e) return Promise.resolve(this.extensions[t.KHR_BINARY_GLTF].body);
                    var i = this.options;
                    return new Promise((function(e, t) {
                        a.load(N(n.uri, i.path), e, void 0, (function() {
                            t(new Error('THREE.GLTFLoader: Failed to load buffer "' + n.uri + '".'))
                        }))
                    }))
                }, U.prototype.loadBufferView = function(e) {
                    var n = this.json.bufferViews[e];
                    return this.getDependency("buffer", n.buffer).then((function(e) {
                        var t = n.byteLength || 0,
                            a = n.byteOffset || 0;
                        return e.slice(a, a + t)
                    }))
                }, U.prototype.loadAccessor = function(e) {
                    var n = this,
                        t = this.json,
                        a = this.json.accessors[e];
                    if (void 0 === a.bufferView && void 0 === a.sparse) return Promise.resolve(null);
                    var i = [];
                    return void 0 !== a.bufferView ? i.push(this.getDependency("bufferView", a.bufferView)) : i.push(null), void 0 !== a.sparse && (i.push(this.getDependency("bufferView", a.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", a.sparse.values.bufferView))), Promise.all(i).then((function(e) {
                        var i, o, r = e[0],
                            s = y[a.type],
                            u = A[a.componentType],
                            c = u.BYTES_PER_ELEMENT,
                            d = c * s,
                            f = a.byteOffset || 0,
                            h = void 0 !== a.bufferView ? t.bufferViews[a.bufferView].byteStride : void 0,
                            p = !0 === a.normalized;
                        if (h && h !== d) {
                            var m = Math.floor(f / h),
                                v = "InterleavedBuffer:" + a.bufferView + ":" + a.componentType + ":" + m + ":" + a.count,
                                g = n.cache.get(v);
                            g || (i = new u(r, m * h, a.count * h / c), g = new l["InterleavedBuffer"](i, h / c), n.cache.add(v, g)), o = new l["InterleavedBufferAttribute"](g, s, f % h / c, p)
                        } else i = null === r ? new u(a.count * s) : new u(r, f, a.count * s), o = new l["BufferAttribute"](i, s, p);
                        if (void 0 !== a.sparse) {
                            var _ = y.SCALAR,
                                x = A[a.sparse.indices.componentType],
                                b = a.sparse.indices.byteOffset || 0,
                                E = a.sparse.values.byteOffset || 0,
                                S = new x(e[1], b, a.sparse.count * _),
                                T = new u(e[2], E, a.sparse.count * s);
                            null !== r && (o = new l["BufferAttribute"](o.array.slice(), o.itemSize, o.normalized));
                            for (var F = 0, L = S.length; F < L; F++) {
                                var N = S[F];
                                if (o.setX(N, T[F * s]), s >= 2 && o.setY(N, T[F * s + 1]), s >= 3 && o.setZ(N, T[F * s + 2]), s >= 4 && o.setW(N, T[F * s + 3]), s >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                            }
                        }
                        return o
                    }))
                }, U.prototype.loadTexture = function(e) {
                    var n, a = this,
                        i = this.json,
                        o = this.options,
                        r = this.textureLoader,
                        s = self.URL || self.webkitURL,
                        u = i.textures[e],
                        c = u.extensions || {};
                    n = c[t.MSFT_TEXTURE_DDS] ? i.images[c[t.MSFT_TEXTURE_DDS].source] : i.images[u.source];
                    var d = n.uri,
                        f = !1;
                    return void 0 !== n.bufferView && (d = a.getDependency("bufferView", n.bufferView).then((function(e) {
                        f = !0;
                        var t = new Blob([e], {
                            type: n.mimeType
                        });
                        return d = s.createObjectURL(t), d
                    }))), Promise.resolve(d).then((function(e) {
                        var n = o.manager.getHandler(e);
                        return n || (n = c[t.MSFT_TEXTURE_DDS] ? a.extensions[t.MSFT_TEXTURE_DDS].ddsLoader : r), new Promise((function(t, a) {
                            n.load(N(e, o.path), t, void 0, a)
                        }))
                    })).then((function(e) {
                        !0 === f && s.revokeObjectURL(d), e.flipY = !1, u.name && (e.name = u.name), n.mimeType in L && (e.format = L[n.mimeType]);
                        var t = i.samplers || {},
                            a = t[u.sampler] || {};
                        return e.magFilter = x[a.magFilter] || l["LinearFilter"], e.minFilter = x[a.minFilter] || l["LinearMipmapLinearFilter"], e.wrapS = b[a.wrapS] || l["RepeatWrapping"], e.wrapT = b[a.wrapT] || l["RepeatWrapping"], e
                    }))
                }, U.prototype.assignTexture = function(e, n, a) {
                    var i = this;
                    return this.getDependency("texture", a.index).then((function(o) {
                        if (!o.isCompressedTexture) switch (n) {
                            case "aoMap":
                            case "emissiveMap":
                            case "metalnessMap":
                            case "normalMap":
                            case "roughnessMap":
                                o.format = l["RGBFormat"];
                                break
                        }
                        if (void 0 === a.texCoord || 0 == a.texCoord || "aoMap" === n && 1 == a.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + a.texCoord + " for texture " + n + " not yet supported."), i.extensions[t.KHR_TEXTURE_TRANSFORM]) {
                            var r = void 0 !== a.extensions ? a.extensions[t.KHR_TEXTURE_TRANSFORM] : void 0;
                            r && (o = i.extensions[t.KHR_TEXTURE_TRANSFORM].extendTexture(o, r))
                        }
                        e[n] = o
                    }))
                }, U.prototype.assignFinalMaterial = function(e) {
                    var n = e.geometry,
                        t = e.material,
                        a = void 0 !== n.attributes.tangent,
                        i = void 0 !== n.attributes.color,
                        o = void 0 === n.attributes.normal,
                        r = !0 === e.isSkinnedMesh,
                        s = Object.keys(n.morphAttributes).length > 0,
                        u = s && void 0 !== n.morphAttributes.normal;
                    if (e.isPoints) {
                        var c = "PointsMaterial:" + t.uuid,
                            d = this.cache.get(c);
                        d || (d = new l["PointsMaterial"], l["Material"].prototype.copy.call(d, t), d.color.copy(t.color), d.map = t.map, d.sizeAttenuation = !1, this.cache.add(c, d)), t = d
                    } else if (e.isLine) {
                        c = "LineBasicMaterial:" + t.uuid;
                        var f = this.cache.get(c);
                        f || (f = new l["LineBasicMaterial"], l["Material"].prototype.copy.call(f, t), f.color.copy(t.color), this.cache.add(c, f)), t = f
                    }
                    if (a || i || o || r || s) {
                        c = "ClonedMaterial:" + t.uuid + ":";
                        t.isGLTFSpecularGlossinessMaterial && (c += "specular-glossiness:"), r && (c += "skinning:"), a && (c += "vertex-tangents:"), i && (c += "vertex-colors:"), o && (c += "flat-shading:"), s && (c += "morph-targets:"), u && (c += "morph-normals:");
                        var h = this.cache.get(c);
                        h || (h = t.clone(), r && (h.skinning = !0), a && (h.vertexTangents = !0), i && (h.vertexColors = !0), o && (h.flatShading = !0), s && (h.morphTargets = !0), u && (h.morphNormals = !0), this.cache.add(c, h)), t = h
                    }
                    t.aoMap && void 0 === n.attributes.uv2 && void 0 !== n.attributes.uv && n.setAttribute("uv2", new l["BufferAttribute"](n.attributes.uv.array, 2)), t.normalScale && !a && (t.normalScale.y = -t.normalScale.y), t.clearcoatNormalScale && !a && (t.clearcoatNormalScale.y = -t.clearcoatNormalScale.y), e.material = t
                }, U.prototype.loadMaterial = function(e) {
                    var n, a = this,
                        i = this.json,
                        o = this.extensions,
                        r = i.materials[e],
                        s = {},
                        u = r.extensions || {},
                        c = [];
                    if (u[t.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                        var d = o[t.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                        n = d.getMaterialType(), c.push(d.extendParams(s, r, a))
                    } else if (u[t.KHR_MATERIALS_UNLIT]) {
                        var f = o[t.KHR_MATERIALS_UNLIT];
                        n = f.getMaterialType(), c.push(f.extendParams(s, r, a))
                    } else {
                        n = l["MeshStandardMaterial"];
                        var h = r.pbrMetallicRoughness || {};
                        if (s.color = new l["Color"](1, 1, 1), s.opacity = 1, Array.isArray(h.baseColorFactor)) {
                            var m = h.baseColorFactor;
                            s.color.fromArray(m), s.opacity = m[3]
                        }
                        void 0 !== h.baseColorTexture && c.push(a.assignTexture(s, "map", h.baseColorTexture)), s.metalness = void 0 !== h.metallicFactor ? h.metallicFactor : 1, s.roughness = void 0 !== h.roughnessFactor ? h.roughnessFactor : 1, void 0 !== h.metallicRoughnessTexture && (c.push(a.assignTexture(s, "metalnessMap", h.metallicRoughnessTexture)), c.push(a.assignTexture(s, "roughnessMap", h.metallicRoughnessTexture)))
                    }!0 === r.doubleSided && (s.side = l["DoubleSide"]);
                    var v = r.alphaMode || F.OPAQUE;
                    if (v === F.BLEND ? (s.transparent = !0, s.depthWrite = !1) : (s.transparent = !1, v === F.MASK && (s.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : .5)), void 0 !== r.normalTexture && n !== l["MeshBasicMaterial"] && (c.push(a.assignTexture(s, "normalMap", r.normalTexture)), s.normalScale = new l["Vector2"](1, 1), void 0 !== r.normalTexture.scale && s.normalScale.set(r.normalTexture.scale, r.normalTexture.scale)), void 0 !== r.occlusionTexture && n !== l["MeshBasicMaterial"] && (c.push(a.assignTexture(s, "aoMap", r.occlusionTexture)), void 0 !== r.occlusionTexture.strength && (s.aoMapIntensity = r.occlusionTexture.strength)), void 0 !== r.emissiveFactor && n !== l["MeshBasicMaterial"] && (s.emissive = (new l["Color"]).fromArray(r.emissiveFactor)), void 0 !== r.emissiveTexture && n !== l["MeshBasicMaterial"] && c.push(a.assignTexture(s, "emissiveMap", r.emissiveTexture)), u[t.KHR_MATERIALS_CLEARCOAT]) {
                        var g = o[t.KHR_MATERIALS_CLEARCOAT];
                        n = g.getMaterialType(), c.push(g.extendParams(s, {
                            extensions: u
                        }, a))
                    }
                    return Promise.all(c).then((function() {
                        var e;
                        return e = n === p ? o[t.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(s) : new n(s), r.name && (e.name = r.name), e.map && (e.map.encoding = l["sRGBEncoding"]), e.emissiveMap && (e.emissiveMap.encoding = l["sRGBEncoding"]), O(e, r), r.extensions && w(o, e, r), e
                    }))
                }, U.prototype.loadGeometries = function(e) {
                    var n = this,
                        a = this.extensions,
                        i = this.primitiveCache;

                    function o(e) {
                        return a[t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, n).then((function(t) {
                            return k(t, e, n)
                        }))
                    }
                    for (var r = [], s = 0, u = e.length; s < u; s++) {
                        var c, d = e[s],
                            f = C(d),
                            h = i[f];
                        if (h) r.push(h.promise);
                        else c = d.extensions && d.extensions[t.KHR_DRACO_MESH_COMPRESSION] ? o(d) : k(new l["BufferGeometry"], d, n), i[f] = {
                            primitive: d,
                            promise: c
                        }, r.push(c)
                    }
                    return Promise.all(r)
                }, U.prototype.loadMesh = function(e) {
                    for (var n = this, t = this.json, a = t.meshes[e], i = a.primitives, o = [], r = 0, s = i.length; r < s; r++) {
                        var u = void 0 === i[r].material ? P(this.cache) : this.getDependency("material", i[r].material);
                        o.push(u)
                    }
                    return o.push(n.loadGeometries(i)), Promise.all(o).then((function(t) {
                        for (var o = t.slice(0, t.length - 1), r = t[t.length - 1], s = [], u = 0, c = r.length; u < c; u++) {
                            var d, f = r[u],
                                h = i[u],
                                p = o[u];
                            if (h.mode === _.TRIANGLES || h.mode === _.TRIANGLE_STRIP || h.mode === _.TRIANGLE_FAN || void 0 === h.mode) d = !0 === a.isSkinnedMesh ? new l["SkinnedMesh"](f, p) : new l["Mesh"](f, p), !0 !== d.isSkinnedMesh || d.geometry.attributes.skinWeight.normalized || d.normalizeSkinWeights(), h.mode === _.TRIANGLE_STRIP ? d.geometry = B(d.geometry, l["TriangleStripDrawMode"]) : h.mode === _.TRIANGLE_FAN && (d.geometry = B(d.geometry, l["TriangleFanDrawMode"]));
                            else if (h.mode === _.LINES) d = new l["LineSegments"](f, p);
                            else if (h.mode === _.LINE_STRIP) d = new l["Line"](f, p);
                            else if (h.mode === _.LINE_LOOP) d = new l["LineLoop"](f, p);
                            else {
                                if (h.mode !== _.POINTS) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + h.mode);
                                d = new l["Points"](f, p)
                            }
                            Object.keys(d.geometry.morphAttributes).length > 0 && M(d, a), d.name = a.name || "mesh_" + e, r.length > 1 && (d.name += "_" + u), O(d, a), n.assignFinalMaterial(d), s.push(d)
                        }
                        if (1 === s.length) return s[0];
                        var m = new l["Group"];
                        for (u = 0, c = s.length; u < c; u++) m.add(s[u]);
                        return m
                    }))
                }, U.prototype.loadCamera = function(e) {
                    var n, t = this.json.cameras[e],
                        a = t[t.type];
                    if (a) return "perspective" === t.type ? n = new l["PerspectiveCamera"](l["MathUtils"].radToDeg(a.yfov), a.aspectRatio || 1, a.znear || 1, a.zfar || 2e6) : "orthographic" === t.type && (n = new l["OrthographicCamera"](a.xmag / -2, a.xmag / 2, a.ymag / 2, a.ymag / -2, a.znear, a.zfar)), t.name && (n.name = t.name), O(n, t), Promise.resolve(n);
                    console.warn("THREE.GLTFLoader: Missing camera parameters.")
                }, U.prototype.loadSkin = function(e) {
                    var n = this.json.skins[e],
                        t = {
                            joints: n.joints
                        };
                    return void 0 === n.inverseBindMatrices ? Promise.resolve(t) : this.getDependency("accessor", n.inverseBindMatrices).then((function(e) {
                        return t.inverseBindMatrices = e, t
                    }))
                }, U.prototype.loadAnimation = function(e) {
                    for (var n = this.json, t = n.animations[e], a = [], i = [], o = [], r = [], s = [], u = 0, c = t.channels.length; u < c; u++) {
                        var d = t.channels[u],
                            f = t.samplers[d.sampler],
                            h = d.target,
                            p = void 0 !== h.node ? h.node : h.id,
                            m = void 0 !== t.parameters ? t.parameters[f.input] : f.input,
                            v = void 0 !== t.parameters ? t.parameters[f.output] : f.output;
                        a.push(this.getDependency("node", p)), i.push(this.getDependency("accessor", m)), o.push(this.getDependency("accessor", v)), r.push(f), s.push(h)
                    }
                    return Promise.all([Promise.all(a), Promise.all(i), Promise.all(o), Promise.all(r), Promise.all(s)]).then((function(n) {
                        for (var a = n[0], i = n[1], o = n[2], r = n[3], s = n[4], u = [], c = 0, d = a.length; c < d; c++) {
                            var f = a[c],
                                h = i[c],
                                p = o[c],
                                m = r[c],
                                v = s[c];
                            if (void 0 !== f) {
                                var _;
                                switch (f.updateMatrix(), f.matrixAutoUpdate = !0, S[v.path]) {
                                    case S.weights:
                                        _ = l["NumberKeyframeTrack"];
                                        break;
                                    case S.rotation:
                                        _ = l["QuaternionKeyframeTrack"];
                                        break;
                                    case S.position:
                                    case S.scale:
                                    default:
                                        _ = l["VectorKeyframeTrack"];
                                        break
                                }
                                var A = f.name ? f.name : f.uuid,
                                    x = void 0 !== m.interpolation ? T[m.interpolation] : l["InterpolateLinear"],
                                    b = [];
                                S[v.path] === S.weights ? f.traverse((function(e) {
                                    !0 === e.isMesh && e.morphTargetInfluences && b.push(e.name ? e.name : e.uuid)
                                })) : b.push(A);
                                var y = p.array;
                                if (p.normalized) {
                                    var E;
                                    if (y.constructor === Int8Array) E = 1 / 127;
                                    else if (y.constructor === Uint8Array) E = 1 / 255;
                                    else if (y.constructor == Int16Array) E = 1 / 32767;
                                    else {
                                        if (y.constructor !== Uint16Array) throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");
                                        E = 1 / 65535
                                    }
                                    for (var F = new Float32Array(y.length), L = 0, N = y.length; L < N; L++) F[L] = y[L] * E;
                                    y = F
                                }
                                for (L = 0, N = b.length; L < N; L++) {
                                    var P = new _(b[L] + "." + S[v.path], h.array, y, x);
                                    "CUBICSPLINE" === m.interpolation && (P.createInterpolant = function(e) {
                                        return new g(this.times, this.values, this.getValueSize() / 3, e)
                                    }, P.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), u.push(P)
                                }
                            }
                        }
                        var w = t.name ? t.name : "animation_" + e;
                        return new l["AnimationClip"](w, void 0, u)
                    }))
                }, U.prototype.loadNode = function(e) {
                    var n = this.json,
                        a = this.extensions,
                        i = this,
                        o = n.meshReferences,
                        r = n.meshUses,
                        s = n.nodes[e];
                    return function() {
                        var e = [];
                        return void 0 !== s.mesh && e.push(i.getDependency("mesh", s.mesh).then((function(e) {
                            var n;
                            if (o[s.mesh] > 1) {
                                var t = r[s.mesh]++;
                                n = e.clone(), n.name += "_instance_" + t
                            } else n = e;
                            return void 0 !== s.weights && n.traverse((function(e) {
                                if (e.isMesh)
                                    for (var n = 0, t = s.weights.length; n < t; n++) e.morphTargetInfluences[n] = s.weights[n]
                            })), n
                        }))), void 0 !== s.camera && e.push(i.getDependency("camera", s.camera)), s.extensions && s.extensions[t.KHR_LIGHTS_PUNCTUAL] && void 0 !== s.extensions[t.KHR_LIGHTS_PUNCTUAL].light && e.push(i.getDependency("light", s.extensions[t.KHR_LIGHTS_PUNCTUAL].light)), Promise.all(e)
                    }().then((function(e) {
                        var n;
                        if (n = !0 === s.isBone ? new l["Bone"] : e.length > 1 ? new l["Group"] : 1 === e.length ? e[0] : new l["Object3D"], n !== e[0])
                            for (var t = 0, i = e.length; t < i; t++) n.add(e[t]);
                        if (s.name && (n.userData.name = s.name, n.name = l["PropertyBinding"].sanitizeNodeName(s.name)), O(n, s), s.extensions && w(a, n, s), void 0 !== s.matrix) {
                            var o = new l["Matrix4"];
                            o.fromArray(s.matrix), n.applyMatrix4(o)
                        } else void 0 !== s.translation && n.position.fromArray(s.translation), void 0 !== s.rotation && n.quaternion.fromArray(s.rotation), void 0 !== s.scale && n.scale.fromArray(s.scale);
                        return n
                    }))
                }, U.prototype.loadScene = function() {
                    function e(n, t, a, i) {
                        var o = a.nodes[n];
                        return i.getDependency("node", n).then((function(e) {
                            return void 0 === o.skin ? e : i.getDependency("skin", o.skin).then((function(e) {
                                n = e;
                                for (var t = [], a = 0, o = n.joints.length; a < o; a++) t.push(i.getDependency("node", n.joints[a]));
                                return Promise.all(t)
                            })).then((function(t) {
                                return e.traverse((function(e) {
                                    if (e.isMesh) {
                                        for (var a = [], i = [], o = 0, r = t.length; o < r; o++) {
                                            var s = t[o];
                                            if (s) {
                                                a.push(s);
                                                var u = new l["Matrix4"];
                                                void 0 !== n.inverseBindMatrices && u.fromArray(n.inverseBindMatrices.array, 16 * o), i.push(u)
                                            } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', n.joints[o])
                                        }
                                        e.bind(new l["Skeleton"](a, i), e.matrixWorld)
                                    }
                                })), e
                            }));
                            var n
                        })).then((function(n) {
                            t.add(n);
                            var r = [];
                            if (o.children)
                                for (var s = o.children, l = 0, u = s.length; l < u; l++) {
                                    var c = s[l];
                                    r.push(e(c, n, a, i))
                                }
                            return Promise.all(r)
                        }))
                    }
                    return function(n) {
                        var t = this.json,
                            a = this.extensions,
                            i = this.json.scenes[n],
                            o = this,
                            r = new l["Group"];
                        i.name && (r.name = i.name), O(r, i), i.extensions && w(a, r, i);
                        for (var s = i.nodes || [], u = [], c = 0, d = s.length; c < d; c++) u.push(e(s[c], r, t, o));
                        return Promise.all(u).then((function() {
                            return r
                        }))
                    }
                }(), e
            }()),
            qt = function() {
                function e() {
                    Object(r["a"])(this, e)
                }
                return Object(s["a"])(e, [{
                    key: "loadTexture",
                    value: function(e) {
                        var n = new l["TextureLoader"];
                        return new Promise((function(t) {
                            n.load(e, (function(e) {
                                t(e)
                            }))
                        }))
                    }
                }, {
                    key: "loadGLTF",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "restroom_01_0304.gltf",
                            t = new Kt;
                        return t.setPath(e), new Promise((function(e) {
                            t.load(n, (function(n) {
                                e(n)
                            }))
                        }))
                    }
                }, {
                    key: "importGLTF",
                    value: function(e) {
                        var n, t;
                        Array.from(e).forEach((function(e) {
                            var a = Object(Wt["a"])(e, 2),
                                i = a[0],
                                o = a[1];
                            o.name.match(/\.(gltf|glb)$/) && (n = o, t = i.replace(o.name, ""))
                        })), n || console.error("No .gltf or .glb asset found.");
                        var a = "string" === typeof n ? n : URL.createObjectURL(n);
                        return this.loadLocalGLTF(a, t, e)
                    }
                }, {
                    key: "loadLocalGLTF",
                    value: function(e, n, t) {
                        var a = l["LoaderUtils"].extractUrlBase(e);
                        return new Promise((function(i, o) {
                            var r = new l["LoadingManager"];
                            r.setURLModifier((function(e, i) {
                                var o = n + e.replace(a, "").replace(/^(\.?\/)/, "");
                                if (t.has(o)) {
                                    var r = t.get(o),
                                        s = URL.createObjectURL(r);
                                    return u.push(s), s
                                }
                                return (i || "") + e
                            }));
                            var s = new Kt(r);
                            s.setCrossOrigin("anonymous");
                            var u = [];
                            s.load(e, (function(e) {
                                i(e)
                            }), void 0, o)
                        }))
                    }
                }]), e
            }(),
            Zt = t("8792"),
            Jt = {
                name: "container",
                data: function() {
                    return {
                        openImportPage: !0
                    }
                },
                mounted: function() {
                    this.initEvent()
                },
                methods: {
                    initScene: function(e) {
                        var n = document.querySelector("#canvasContainer");
                        this.scene = new Qt(n, e, (function() {
                            document.querySelector("#wrapper").classList.remove("isLoading")
                        }))
                    },
                    initEvent: function() {
                        var e = this,
                            n = this,
                            t = new qt,
                            a = document.body.querySelector("#file-input"),
                            i = document.body.querySelector(".dropzone"),
                            o = new Zt["a"](i, a);
                        o.on("drop", (function(a) {
                            var i = a.files;
                            return t.importGLTF(i).then((function(t) {
                                e.initScene(t), n.openImportPage = !1
                            }))
                        }))
                    },
                    loadDefaultModel: function() {
                        var e = this,
                            n = new qt;
                        this.openImportPage = !1, n.loadGLTF("./assets/models/restroom/").then((function(n) {
                            e.initScene(n)
                        }))
                    }
                }
            },
            $t = Jt,
            ea = (t("8aaa"), t("2877")),
            na = Object(ea["a"])($t, i, o, !1, null, null, null),
            ta = na.exports;
        new a["a"]({
            render: function(e) {
                return e(ta)
            }
        }).$mount("#container")
    },
    "8aaa": function(e, n, t) {
        "use strict";
        var a = t("3468"),
            i = t.n(a);
        i.a
    }
});
//# sourceMappingURL=app.13dbe6c6.js.map
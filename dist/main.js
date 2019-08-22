/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domReadyAsync.ts":
/*!******************************!*\
  !*** ./src/domReadyAsync.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction domReadyAsync() {\n    return new Promise(function (resolve) {\n        if (/^loaded|^i|^c/.test(document.readyState))\n            return resolve();\n        document.addEventListener('DOMContentLoaded', function () { return resolve(); }, {\n            once: true\n        });\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (domReadyAsync);\n\n\n//# sourceURL=webpack:///./src/domReadyAsync.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domReadyAsync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domReadyAsync */ \"./src/domReadyAsync.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\nvar V2d = /** @class */ (function () {\n    function V2d(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    V2d.prototype.add = function (v) {\n        return new V2d(this.x + v.x, this.y + v.y);\n    };\n    V2d.prototype.sub = function (v) {\n        return new V2d(this.x - v.x, this.y - v.y);\n    };\n    V2d.prototype.mul = function (v) {\n        if (v instanceof V2d) {\n            return new V2d(this.x * v.x, this.y * v.y);\n        }\n        else {\n            return new V2d(this.x * v, this.y * v);\n        }\n    };\n    V2d.prototype.div = function (v) {\n        if (v instanceof V2d) {\n            return new V2d(this.x / v.x, this.y / v.y);\n        }\n        else {\n            return new V2d(this.x / v, this.y / v);\n        }\n    };\n    V2d.prototype.dot = function (v) {\n        if (v instanceof V2d) {\n            return this.x * v.x + this.y * v.y;\n        }\n        else {\n            return new V2d(this.x * v.m00 + this.y * v.m10, this.x * v.m01 + this.y * v.m11);\n        }\n    };\n    V2d.prototype.magnitude = function () {\n        return Math.sqrt(this.x * this.x + this.y * this.y);\n    };\n    V2d.prototype.clone = function () {\n        return new V2d(this.x, this.y);\n    };\n    return V2d;\n}());\nvar Matrix2d = /** @class */ (function () {\n    function Matrix2d(m00, m01, m10, m11) {\n        this.m00 = m00;\n        this.m01 = m01;\n        this.m10 = m10;\n        this.m11 = m11;\n    }\n    Matrix2d.prototype.add = function (m) {\n        return new Matrix2d(this.m00 + m.m00, this.m01 + m.m01, this.m10 + m.m10, this.m11 + m.m11);\n    };\n    Matrix2d.prototype.div = function (a) {\n        return new Matrix2d(this.m00 / a, this.m01 / a, this.m10 / a, this.m11 / a);\n    };\n    Matrix2d.prototype.dot = function (v) {\n        return new V2d(this.m00 * v.x + this.m01 * v.y, this.m10 * v.x + this.m11 * v.y);\n    };\n    Matrix2d.prototype.inverse = function () {\n        var det = this.m00 * this.m11 - this.m01 * this.m10;\n        return new Matrix2d(this.m11, -this.m10, -this.m01, this.m00).div(det);\n    };\n    return Matrix2d;\n}());\nvar Mesh = /** @class */ (function () {\n    function Mesh(ctx, x, y) {\n        this.AffineMLSA = [];\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.vertices = [];\n        for (var i = 0; i < this.x; i++) {\n            for (var j = 0; j < this.y; j++) {\n                this.vertices[i * this.x + j] = new V2d((this.ctx.canvas.width / (this.x - 1)) * i, (this.ctx.canvas.height / (this.y - 1)) * j);\n            }\n        }\n    }\n    Mesh.prototype.draw = function () {\n        this.ctx.fillStyle = 'rgb(255, 120, 120)';\n        this.ctx.strokeStyle = 'rgb(255, 120, 120)';\n        this.ctx.beginPath();\n        for (var i = 0; i < this.x; i++) {\n            for (var j = 0; j < this.y; j++) {\n                if (i < this.x - 1) {\n                    this.ctx.moveTo(this.vertices[i * this.x + j].x, this.vertices[i * this.x + j].y);\n                    this.ctx.lineTo(this.vertices[(i + 1) * this.x + j].x, this.vertices[(i + 1) * this.x + j].y);\n                }\n                if (j < this.y - 1) {\n                    this.ctx.moveTo(this.vertices[i * this.x + j].x, this.vertices[i * this.x + j].y);\n                    this.ctx.lineTo(this.vertices[i * this.x + (j + 1)].x, this.vertices[i * this.x + (j + 1)].y);\n                }\n            }\n        }\n        this.ctx.stroke();\n    };\n    Mesh.prototype.precompAffineMLS = function (dots) {\n        var pa = new V2d(0, 0);\n        for (var _i = 0, dots_1 = dots; _i < dots_1.length; _i++) {\n            var d = dots_1[_i];\n            pa = pa.add(d.initPos);\n        }\n        pa = pa.div(dots.length);\n        var w = [];\n        for (var i = 0; i < this.vertices.length; i++) {\n            w[i] = [];\n            for (var j = 0; j < dots.length; j++) {\n                w[i][j] =\n                    1 /\n                        (0.01 +\n                            Math.pow(dots[j].initPos.sub(this.vertices[i]).magnitude(), 2));\n            }\n            var m = new Matrix2d(0, 0, 0, 0);\n            for (var j = 0; j < dots.length; j++) {\n                var ph = dots[j].initPos.sub(pa);\n                m.m00 += ph.x * w[i][j] * ph.x;\n                m.m01 += ph.x * w[i][j] * ph.y;\n                m.m10 += ph.y * w[i][j] * ph.x;\n                m.m11 += ph.y * w[i][j] * ph.y;\n            }\n            m = m.inverse();\n            var t = this.vertices[i].sub(pa);\n            var d = t.dot(m);\n            this.AffineMLSA[i] = [];\n            for (var j = 0; j < dots.length; j++) {\n                this.AffineMLSA[i][j] =\n                    // (d.dot(dots[j].initPos) as number) * w[i][j]\n                    d.dot(dots[j].initPos.sub(pa)) * w[i][j];\n            }\n        }\n        console.log('finish precompute');\n    };\n    Mesh.prototype.AffineMLS = function (dots) {\n        var qa = new V2d(0, 0);\n        for (var _i = 0, dots_2 = dots; _i < dots_2.length; _i++) {\n            var d = dots_2[_i];\n            qa = qa.add(d.pos);\n        }\n        qa = qa.div(dots.length);\n        for (var i = 0; i < this.vertices.length; i++) {\n            this.vertices[i] = qa;\n            for (var j = 0; j < dots.length; j++) {\n                this.vertices[i] = this.vertices[i].add(dots[j].pos.sub(qa).mul(this.AffineMLSA[i][j]));\n            }\n        }\n    };\n    return Mesh;\n}());\nvar Dot = /** @class */ (function () {\n    function Dot(ctx, pos) {\n        this.ctx = ctx;\n        this.initPos = pos;\n        this.pos = pos.clone();\n    }\n    Dot.prototype.reset = function () {\n        this.pos.x = this.initPos.x;\n        this.pos.y = this.initPos.y;\n    };\n    Dot.prototype.draw = function () {\n        this.ctx.fillStyle = 'rgb(120, 120, 255)';\n        this.ctx.strokeStyle = 'rgb(120, 120, 255)';\n        this.ctx.fillRect(this.pos.x - 5, this.pos.y - 5, 10, 10);\n    };\n    Dot.prototype.hit = function (x, y) {\n        return (this.pos.x - 5 < x &&\n            x < this.pos.x + 5 &&\n            (this.pos.y - 5 < y && y < this.pos.y + 5));\n    };\n    return Dot;\n}());\nfunction createDotsAsync() {\n    return new Promise(function (resolve) {\n        var canvas = document.getElementById('canvas');\n        var ctx = canvas.getContext('2d');\n        var button = document.getElementById('confirm-dots');\n        button.disabled = true;\n        var dots = [];\n        var clickEventListener = function (evt) {\n            var target = evt.target;\n            var rect = target.getBoundingClientRect();\n            var point = new V2d(evt.clientX - rect.left, evt.clientY - rect.top);\n            var dot = new Dot(ctx, point);\n            dot.draw();\n            dots.push(dot);\n            button.disabled = false;\n        };\n        canvas.addEventListener('click', clickEventListener);\n        button.addEventListener('click', function () {\n            canvas.removeEventListener('click', clickEventListener);\n            button.disabled = true;\n            resolve(dots);\n        });\n    });\n}\nfunction main() {\n    return __awaiter(this, void 0, void 0, function () {\n        function draw() {\n            mesh.AffineMLS(dots);\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            mesh.draw();\n            for (var _i = 0, dots_3 = dots; _i < dots_3.length; _i++) {\n                var d = dots_3[_i];\n                d.draw();\n            }\n        }\n        var canvas, ctx, resetButton, mesh, dots, targetDot;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Object(_domReadyAsync__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()];\n                case 1:\n                    _a.sent();\n                    canvas = document.getElementById('canvas');\n                    ctx = canvas.getContext('2d');\n                    resetButton = document.getElementById('reset');\n                    mesh = new Mesh(ctx, 20, 20);\n                    mesh.draw();\n                    return [4 /*yield*/, createDotsAsync()];\n                case 2:\n                    dots = _a.sent();\n                    mesh.precompAffineMLS(dots);\n                    targetDot = null;\n                    canvas.addEventListener('mousedown', function (evt) {\n                        var target = evt.target;\n                        var rect = target.getBoundingClientRect();\n                        var x = evt.clientX - rect.left;\n                        var y = evt.clientY - rect.top;\n                        for (var _i = 0, dots_4 = dots; _i < dots_4.length; _i++) {\n                            var d = dots_4[_i];\n                            if (d.hit(x, y)) {\n                                targetDot = d;\n                                break;\n                            }\n                        }\n                    });\n                    document.addEventListener('mousemove', function (evt) {\n                        if (targetDot === null)\n                            return;\n                        var target = evt.target;\n                        var rect = target.getBoundingClientRect();\n                        var x = evt.clientX - rect.left;\n                        var y = evt.clientY - rect.top;\n                        targetDot.pos.x = x;\n                        targetDot.pos.y = y;\n                        draw();\n                    });\n                    document.addEventListener('mouseup', function () {\n                        targetDot = null;\n                    });\n                    resetButton.addEventListener('click', function () {\n                        for (var _i = 0, dots_5 = dots; _i < dots_5.length; _i++) {\n                            var d = dots_5[_i];\n                            d.reset();\n                        }\n                        draw();\n                    });\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nmain();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });
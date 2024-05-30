/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../mini-framework/index.js":
/*!**********************************!*\
  !*** ../mini-framework/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MiniFramework)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar MiniFramework = /*#__PURE__*/function () {\n  function MiniFramework(dom) {\n    _classCallCheck(this, MiniFramework);\n    _defineProperty(this, \"NewElement\", function (tag, elClass, elText) {\n      var newElement = document.createElement(tag);\n      if (elClass != null) {\n        newElement.classList = elClass;\n      }\n      if (elText != null) {\n        if (tag == 'button') {\n          newElement.textContent = elText;\n        } else {\n          newElement.innerHTML = elText;\n        }\n      }\n      return newElement;\n    });\n    this.dom = dom;\n  }\n  return _createClass(MiniFramework, [{\n    key: \"Point\",\n    value: function Point(item) {\n      var target = document.querySelector(\"#\".concat(item));\n      if (target === null) {\n        target = document.querySelectorAll(\".\".concat(item));\n      }\n      if (target.length === 1) {\n        return target[0];\n      }\n      return target;\n    }\n  }, {\n    key: \"Render\",\n    value: function Render(data) {\n      var element = this.NewElement(data.element, data.styleClass, data.content);\n      if (data.onClick != null) {\n        element.addEventListener('click', data.onClick);\n      }\n      if (data.attri != null) {\n        element.setAttribute(data.attri[0], data.attri[1]);\n      }\n      this.Point(data.parent).appendChild(element);\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://todomvc/../mini-framework/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mini_framework_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mini-framework/index */ \"../mini-framework/index.js\");\n\nconsole.log('New connection!');\nvar root = document.querySelector('#root');\nvar fw = new _mini_framework_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\n// fw.Render('root', fw.NewElement('div', 'Container', 'Some Text'));\n// fw.Render('Container', fw.NewElement('div', 'Menu', 'Random stuff'));\n// fw.Render('Container', fw.NewElement('p', 'Content', 'Text for paragraph'));\n\nfw.Render({\n  parent: 'root',\n  element: 'div',\n  styleClass: 'Container'\n});\nfw.Render({\n  parent: 'Container',\n  element: 'button',\n  styleClass: 'buttom',\n  content: 'Click me!',\n  attri: ['id', '2'],\n  onClick: function onClick(e) {\n    return e.target.textContent == 'I was clicked!!!' ? e.target.textContent = 'Click me!' : e.target.textContent = 'I was clicked!!!';\n  }\n});\n\n//# sourceURL=webpack://todomvc/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
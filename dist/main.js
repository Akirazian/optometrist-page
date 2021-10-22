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

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildHeader = () => {\n\n  const navbar = document.createElement(\"nav\");\n  navbar.classList.add(\"navbar\", \"is-spaced\", \"is-dark\");\n  navbar.ariaLabel = \"main navigation\"\n\n  const buildBrand = () => {\n    const navbarBrand = document.createElement(\"div\");\n    navbarBrand.classList.add(\"navbar-brand\");\n\n    const brand = document.createElement(\"a\");\n    brand.classList.add(\"navbar-item\");\n    brand.href = \"#\";\n\n    const revolution = document.createElement(\"span\");\n    revolution.style = \"color: orange;\";\n    revolution.innerText = \"Revolution\";\n    const eyes = document.createElement(\"span\");\n    eyes.innerText = \"Eyes\";\n\n    const hamburger = document.createElement(\"a\");\n    hamburger.classList.add(\"navbar-burger\");\n    hamburger.ariaLabel = \"menu\";\n\n    for (let i = 0; i < 3; i++) {\n      const burgerSlice = document.createElement(\"span\");\n      burgerSlice.ariaHidden = \"true\";\n      hamburger.appendChild(burgerSlice);\n    } \n\n    brand.append(revolution, eyes);\n    navbarBrand.append(brand, hamburger);\n    navbar.append(navbarBrand);\n  }\n\n  const buildMenu = () => {\n    const navbarMenu = document.createElement(\"div\");\n    navbarMenu.classList.add(\"navbar-menu\");\n\n    const navbarStart = document.createElement(\"div\");\n    navbarStart.classList.add(\"navbar-start\");\n\n    const navbarEnd = document.createElement(\"navbar-end\");\n    navbarEnd.classList.add(\"navbar-end\");\n\n    for (let i = 0; i < 3; i++) {\n      const link = document.createElement(\"a\");\n      link.classList.add(\"navbar-item\", \"is-tab\");\n      link.href = \"#\"\n\n      switch (i) {\n        case 0:\n          link.innerText = \"Our Doctors\";\n          break;\n        case 1:\n          link.innerText = \"Services\";\n          break;\n        case 2:\n          link.innerText = \"Contact\";\n          break;\n      }\n\n      navbarEnd.appendChild(link);\n    }\n\n    navbarMenu.append(navbarStart, navbarEnd);\n    navbar.append(navbarMenu);\n  }\n\n  buildBrand();\n  buildMenu();\n  container.append(navbar);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _navHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navHelper */ \"./src/navHelper.js\");\n\n\n\nconst container = document.getElementById(\"container\");\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_navHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/navHelper.js":
/*!**************************!*\
  !*** ./src/navHelper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navHelper = () => {\n\n  const navBurger = document.querySelector(\".navbar-burger\");\n  const navMenu = document.querySelector(\".navbar-menu\")\n\n  navBurger.addEventListener(\"click\", toggleMenu);\n\n  function toggleMenu() {\n    navBurger.classList.toggle(\"is-active\");\n    navMenu.classList.toggle(\"is-active\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navHelper);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/navHelper.js?");

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
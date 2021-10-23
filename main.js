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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildHeader = () => {\n\n  const navbar = document.createElement(\"nav\");\n  navbar.classList.add(\"navbar\", \"is-spaced\", \"block\", \"is-dark\");\n  navbar.ariaLabel = \"main navigation\"\n\n  const buildBrand = () => {\n    const navbarBrand = document.createElement(\"div\");\n    navbarBrand.classList.add(\"navbar-brand\");\n\n    const brand = document.createElement(\"a\");\n    brand.classList.add(\"navbar-item\");\n    brand.href = \"#\";\n\n    const revolution = document.createElement(\"span\");\n    revolution.style = \"color: orange;\";\n    revolution.innerText = \"Revolution\";\n    const eyes = document.createElement(\"span\");\n    eyes.innerText = \"Eyes\";\n\n    const hamburger = document.createElement(\"a\");\n    hamburger.classList.add(\"navbar-burger\");\n    hamburger.ariaLabel = \"menu\";\n\n    for (let i = 0; i < 3; i++) {\n      const burgerSlice = document.createElement(\"span\");\n      burgerSlice.ariaHidden = \"true\";\n      hamburger.appendChild(burgerSlice);\n    } \n\n    brand.append(revolution, eyes);\n    navbarBrand.append(brand, hamburger);\n    navbar.append(navbarBrand);\n  }\n\n  const buildMenu = () => {\n    const navbarMenu = document.createElement(\"div\");\n    navbarMenu.classList.add(\"navbar-menu\");\n\n    const navbarStart = document.createElement(\"div\");\n    navbarStart.classList.add(\"navbar-start\");\n\n    const navbarEnd = document.createElement(\"navbar-end\");\n    navbarEnd.classList.add(\"navbar-end\");\n\n    for (let i = 0; i < 4; i++) {\n      const link = document.createElement(\"a\");\n      link.classList.add(\"navbar-item\", \"is-tab\");\n      link.href = \"#\"\n\n      switch (i) {\n        case 0:\n          link.innerText = \"Hours & Location\";\n          break;\n        case 1:\n          link.innerText = \"Our Doctors\";\n          break;\n        case 2:\n          link.innerText = \"Services\";\n          break;\n        case 3:\n          link.innerText = \"Contact\";\n          break;\n      }\n\n      navbarEnd.appendChild(link);\n    }\n\n    navbarMenu.append(navbarStart, navbarEnd);\n    navbar.append(navbarMenu);\n  }\n\n  buildBrand();\n  buildMenu();\n  content.prepend(navbar);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildHome = () => {\n  const homepage = document.createElement(\"div\");\n  homepage.classList.add(\"container\", \"home-content\");\n\n  const buildLevel = () => {\n    const level = document.createElement(\"div\");\n    level.classList.add(\"level\", \"block\", \"is-mobile\");\n\n    const addressContainer = document.createElement(\"div\");\n    addressContainer.classList.add(\"level-item\", \"has-text-centered\");\n\n    const address = document.createElement(\"div\");\n    address.classList.add(\"address\");\n\n    for (let i = 0; i < 2; i++) {\n      const line = document.createElement(\"p\");\n      switch (i) {\n        case 0:\n          line.innerText = \"82 West Broadway\";\n          break;\n        case 1:\n          line.innerText = \"New York, NY 10007\";\n          break;       \n      }\n      address.appendChild(line);\n    }\n\n    const phoneContainer = document.createElement(\"div\");\n    phoneContainer.classList.add(\"level-item\", \"has-text-centered\");\n\n    const phoneNumber = document.createElement(\"a\");\n    phoneNumber.classList.add(\"button\", \"is-medium\", \"is-link\", \"is-light\");\n    phoneNumber.href = \"tel:212-609-1111\";\n    phoneNumber.innerText = \"212-608-1111\";\n\n    addressContainer.appendChild(address);\n    phoneContainer.appendChild(phoneNumber);\n    level.append(addressContainer, phoneContainer);\n\n    const hr = document.createElement(\"hr\");\n\n    homepage.append(level, hr);\n  }\n\n  const buildMain = () => {\n    const homepageMain = document.createElement(\"div\");\n    homepageMain.classList.add(\"columns\", \"is-centered\");\n\n    //Build image column\n\n    const imageContainer = document.createElement(\"div\");\n    imageContainer.classList.add(\"column\");\n\n    const figure = document.createElement(\"figure\");\n    figure.classList.add(\"image\");\n\n    const image = document.createElement(\"img\");\n    image.src = \"frontdoor.jpg\";\n    image.alt = \"The front door of our office\";\n\n    //build text column\n    const homepageText = document.createElement(\"div\");\n    homepageText.classList.add(\"column\", \"content\", \"is-medium\", \"has-text-centered\");\n    \n    const h1 = document.createElement(\"h1\");\n    h1.innerText = \"Revolution Eyes\";\n    const p1 = document.createElement(\"p\");\n    p1.innerText = \"We provide best-in-class eye care for children and adults, and offer a wide selection of luxury eyeglass brands.\";\n    const p2 = document.createElement(\"p\");\n    p2.innerText = \"Servicing downtown Manhattan since 2014\";\n    const yelp = document.createElement(\"span\");\n    yelp.innerHTML = `<span class=\"yelp-review\" data-review-id=\"6-7T6IXF-1CDZli7rPcdqQ\" data-hostname=\"www.yelp.com\">Read <a href=\"https://www.yelp.com/user_details?userid=RdX1SalK7ZZQEPmtD1n3Kg\" rel=\"nofollow noopener\">Peter C.</a>'s <a href=\"https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=6-7T6IXF-1CDZli7rPcdqQ\" rel=\"nofollow noopener\">review</a> of <a href=\"https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ\" rel=\"nofollow noopener\">Revolution Eyes</a> on <a href=\"https://www.yelp.com\" rel=\"nofollow noopener\">Yelp</a><script src=\"https://www.yelp.com/embed/widgets.js\" type=\"text/javascript\" async></script></span>`;\n\n    const hr = document.createElement(\"hr\");\n\n    figure.appendChild(image);\n    imageContainer.appendChild(figure);\n    homepageText.append(h1, p1, p2, hr, yelp);\n    homepageMain.append(imageContainer, homepageText);\n    homepage.appendChild(homepageMain);\n  }\n\n  buildLevel();\n  buildMain();\n  content.appendChild(homepage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHome);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _navHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navHelper */ \"./src/navHelper.js\");\n\n\n\n\nconst content = document.getElementById(\"content\");\n\ncontent.innerHTML = \"\";\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_navHelper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
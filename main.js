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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".navbar {\\n  font-family:'Courier New', Courier, monospace;\\n}\\n\\n.navbar-brand {\\n  font-size: 1.5rem;\\n}\\n\\n.home-content {\\n  max-width: 960px !important;\\n  font-size: 17px;\\n}\\n\\n.address {\\n  font-size: 1.2rem;\\n}\\n\\nmain {\\n  background-color: #FFFFFF;\\n  height: 100%;\\n  width: auto;\\n}\\n\\n#map {\\n  width: 100%;\\n  height: 325px;\\n  border: 0;\\n}\\n\\n#window {\\n  max-height: 400px;\\n  max-width: 600px;\\n}\\n\\niframe {\\n  max-width: none !important;\\n}\\n\\nfooter {\\n  background-color: #363636 !important;\\n  color: white;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_pages_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/pages/header */ \"./src/scripts/pages/header.js\");\n/* harmony import */ var _scripts_pages_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/pages/homepage */ \"./src/scripts/pages/homepage.js\");\n/* harmony import */ var _scripts_pages_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/pages/footer */ \"./src/scripts/pages/footer.js\");\n/* harmony import */ var _scripts_pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/pages/about */ \"./src/scripts/pages/about.js\");\n/* harmony import */ var _scripts_helpers_navHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/helpers/navHelper */ \"./src/scripts/helpers/navHelper.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\ncontent.innerText = \"\";\ncontent.classList.add(\"pt-5\");\n\nfunction pageChange(page) {\n  content.innerText = \"\";\n  content.appendChild(page);\n}\n\n(0,_scripts_pages_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_scripts_helpers_navHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_scripts_pages_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\npageChange(_scripts_pages_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/scripts/helpers/makeElement.js":
/*!********************************************!*\
  !*** ./src/scripts/helpers/makeElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst makeElement = (type, id, classes, content) => {\n  const element = document.createElement(type);\n  if (id) element.id = id;\n  if (classes) classes.forEach((myClass) => element.classList.add(myClass));\n  if (content) element.innerText = content;\n\n  return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeElement);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/helpers/makeElement.js?");

/***/ }),

/***/ "./src/scripts/helpers/navHelper.js":
/*!******************************************!*\
  !*** ./src/scripts/helpers/navHelper.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navHelper = () => {\n\n  const navBurger = document.querySelector(\".navbar-burger\");\n  const navMenu = document.querySelector(\".navbar-menu\")\n\n  navBurger.addEventListener(\"click\", toggleMenu);\n\n  function toggleMenu() {\n    navBurger.classList.toggle(\"is-active\");\n    navMenu.classList.toggle(\"is-active\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navHelper);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/helpers/navHelper.js?");

/***/ }),

/***/ "./src/scripts/helpers/yelp.js":
/*!*************************************!*\
  !*** ./src/scripts/helpers/yelp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst yelpContainer = document.createElement(\"div\");\nyelpContainer.classList.add(\"content\", \"has-text-centered\");\n\nconst yelpTitle = document.createElement(\"h2\");\nyelpTitle.innerText = \"Patient Reviews\"\n\nconst yelp1 = document.createElement(\"div\");\nyelp1.innerHTML = `<span class=\"yelp-review\" data-review-id=\"6-7T6IXF-1CDZli7rPcdqQ\" data-hostname=\"www.yelp.com\">Read <a href=\"https://www.yelp.com/user_details?userid=RdX1SalK7ZZQEPmtD1n3Kg\" rel=\"nofollow noopener\">Peter C.</a>'s <a href=\"https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=6-7T6IXF-1CDZli7rPcdqQ\" rel=\"nofollow noopener\">review</a> of <a href=\"https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ\" rel=\"nofollow noopener\">Revolution Eyes</a> on <a href=\"https://www.yelp.com\" rel=\"nofollow noopener\">Yelp</a><script src=\"https://www.yelp.com/embed/widgets.js\" type=\"text/javascript\" async></script></span>`;\n\nconst yelp2 = document.createElement(\"div\");\nyelp2.classList.add(\"mt-3\");\nyelp2.innerHTML = `<span class=\"yelp-review\" data-review-id=\"mKBVCvM9F1KLO_pwCz5anQ\" data-hostname=\"www.yelp.com\">Read <a href=\"https://www.yelp.com/user_details?userid=BJVArJKGsHSWIBpjSMDRgA\" rel=\"nofollow noopener\">Mitchell M.</a>'s <a href=\"https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=mKBVCvM9F1KLO_pwCz5anQ\" rel=\"nofollow noopener\">review</a> of <a href=\"https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ\" rel=\"nofollow noopener\">Revolution Eyes</a> on <a href=\"https://www.yelp.com\" rel=\"nofollow noopener\">Yelp</a><script src=\"https://www.yelp.com/embed/widgets.js\" type=\"text/javascript\" async></script></span>`;\n\nconst yelp3 = document.createElement(\"div\");\nyelp3.classList.add(\"mt-3\");\nyelp3.innerHTML = `<span class=\"yelp-review\" data-review-id=\"AHg_qGSHsAgvlntCBh66rQ\" data-hostname=\"www.yelp.com\">Read <a href=\"https://www.yelp.com/user_details?userid=u0gJTZYTbsAly9wsJ_RxXg\" rel=\"nofollow noopener\">Mia K.</a>'s <a href=\"https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=AHg_qGSHsAgvlntCBh66rQ\" rel=\"nofollow noopener\">review</a> of <a href=\"https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ\" rel=\"nofollow noopener\">Revolution Eyes</a> on <a href=\"https://www.yelp.com\" rel=\"nofollow noopener\">Yelp</a><script src=\"https://www.yelp.com/embed/widgets.js\" type=\"text/javascript\" async></script></span>`;\n\nyelpContainer.append(yelpTitle, yelp1, yelp2, yelp3);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (yelpContainer);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/helpers/yelp.js?");

/***/ }),

/***/ "./src/scripts/pages/about.js":
/*!************************************!*\
  !*** ./src/scripts/pages/about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/makeElement */ \"./src/scripts/helpers/makeElement.js\");\n/* harmony import */ var _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/logo.jpg */ \"./src/assets/logo.jpg\");\n/* harmony import */ var _assets_window_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/window.jpg */ \"./src/assets/window.jpg\");\n\n\n\n\nconst aboutUs = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"about-us\", [\"container\", \"home-content\", \"has-text-centered\", \"mb-5\"]);\n\nconst introSection = (() => {\n  const imageContainer = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"figure\", null, [\"image\"]);\n  const image = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"logo\");\n  image.src = _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  imageContainer.appendChild(image);\n\n  const introSection = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", null, [\"content\"])\n  const heading = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", null, null, \"About Us\");\n  const intro = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", null, null, \"Founded in 2011, Revolution Eyes is owned and operated by the same doctors you see at your appointments. We provide high quality care to each and every patient, tailored to their specific needs.\");\n  const extra = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", null, null, \"We are proud to be a local, independent business.\")\n  introSection.append(imageContainer, heading, intro, extra);\n\n  return introSection\n})();\n\nconst hr = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"hr\");\n\naboutUs.append(introSection, hr);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutUs);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/pages/about.js?");

/***/ }),

/***/ "./src/scripts/pages/footer.js":
/*!*************************************!*\
  !*** ./src/scripts/pages/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildFooter = () => {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const footerContent = document.createElement(\"div\");\n  footerContent.classList.add(\"content\", \"has-text-centered\");\n  footerContent.innerText = \"(c) 2021 • Revolution Eyes • 82 West Broadway, New York, NY 10007 • (212)-608-1111\"\n\n  footer.appendChild(footerContent);\n\n  const body = document.querySelector(\"body\");\n  body.appendChild(footer);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFooter);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/pages/footer.js?");

/***/ }),

/***/ "./src/scripts/pages/header.js":
/*!*************************************!*\
  !*** ./src/scripts/pages/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildHeader = () => {\n\n  const navbar = document.createElement(\"header\");\n  navbar.classList.add(\"navbar\", \"is-spaced\", \"is-dark\");\n  navbar.ariaLabel = \"main navigation\"\n\n  const buildBrand = () => {\n    const navbarBrand = document.createElement(\"div\");\n    navbarBrand.classList.add(\"navbar-brand\");\n\n    const brand = document.createElement(\"a\");\n    brand.classList.add(\"navbar-item\");\n    brand.href = \"#\";\n\n    const revolution = document.createElement(\"span\");\n    revolution.style = \"color: orange;\";\n    revolution.innerText = \"Revolution\";\n    const eyes = document.createElement(\"span\");\n    eyes.innerText = \"Eyes\";\n\n    const hamburger = document.createElement(\"a\");\n    hamburger.classList.add(\"navbar-burger\");\n    hamburger.ariaLabel = \"menu\";\n\n    for (let i = 0; i < 3; i++) {\n      const burgerSlice = document.createElement(\"span\");\n      burgerSlice.ariaHidden = \"true\";\n      hamburger.appendChild(burgerSlice);\n    } \n\n    brand.append(revolution, eyes);\n    navbarBrand.append(brand, hamburger);\n    navbar.append(navbarBrand);\n  }\n\n  const buildMenu = () => {\n    const navbarMenu = document.createElement(\"div\");\n    navbarMenu.classList.add(\"navbar-menu\");\n\n    const navbarStart = document.createElement(\"div\");\n    navbarStart.classList.add(\"navbar-start\");\n\n    const navbarEnd = document.createElement(\"navbar-end\");\n    navbarEnd.classList.add(\"navbar-end\");\n\n    for (let i = 0; i < 3; i++) {\n      const link = document.createElement(\"a\");\n      link.classList.add(\"navbar-item\", \"is-tab\");\n      link.href = \"#\"\n      link.id = i;\n\n      switch (i) {\n        case 0:\n          link.innerText = \"About Us\";\n          break;\n        case 1:\n          link.innerText = \"Services\";\n          break;\n        case 2:\n          link.innerText = \"Contact\";\n          break;\n      }\n\n      navbarEnd.appendChild(link);\n    }\n\n    navbarMenu.append(navbarStart, navbarEnd);\n    navbar.append(navbarMenu);\n  }\n\n  buildBrand();\n  buildMenu();\n\n  const body = document.querySelector(\"body\");\n  body.prepend(navbar);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/pages/header.js?");

/***/ }),

/***/ "./src/scripts/pages/homepage.js":
/*!***************************************!*\
  !*** ./src/scripts/pages/homepage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_frontdoor_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/frontdoor.jpg */ \"./src/assets/frontdoor.jpg\");\n/* harmony import */ var _helpers_yelp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/yelp */ \"./src/scripts/helpers/yelp.js\");\n/* harmony import */ var _helpers_makeElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/makeElement */ \"./src/scripts/helpers/makeElement.js\");\n/* harmony import */ var _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/logo.jpg */ \"./src/assets/logo.jpg\");\n\n\n\n\n\nconst homepage = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", null, [\"container\", \"home-content\", \"mb-5\"]);\n\nconst buildLevel = () => {\n  const level = document.createElement(\"div\");\n  level.classList.add(\"level\", \"is-mobile\");\n\n  const addressContainer = document.createElement(\"div\");\n  addressContainer.classList.add(\"level-item\", \"has-text-centered\");\n\n  const address = document.createElement(\"div\");\n  address.classList.add(\"address\");\n\n  for (let i = 0; i < 2; i++) {\n    const line = document.createElement(\"p\");\n    switch (i) {\n      case 0:\n        line.innerText = \"82 West Broadway\";\n        break;\n      case 1:\n        line.innerText = \"New York, NY 10007\";\n        break;       \n    }\n    address.appendChild(line);\n  }\n\n  const phoneContainer = document.createElement(\"div\");\n  phoneContainer.classList.add(\"level-item\", \"has-text-centered\");\n\n  const phoneNumber = document.createElement(\"a\");\n  phoneNumber.classList.add(\"button\", \"is-medium\", \"is-link\", \"is-light\");\n  phoneNumber.href = \"tel:212-609-1111\";\n  phoneNumber.innerText = \"212-608-1111\";\n\n  addressContainer.appendChild(address);\n  phoneContainer.appendChild(phoneNumber);\n  level.append(addressContainer, phoneContainer);\n\n  const hr = document.createElement(\"hr\");\n\n  homepage.append(level, hr);\n}\n\nconst buildMain = () => {\n  const homepageMain = document.createElement(\"div\");\n  homepageMain.classList.add(\"columns\", \"is-centered\");\n\n  //Build image column\n\n  const imageContainer = document.createElement(\"div\");\n  imageContainer.classList.add(\"column\");\n\n  const figure = document.createElement(\"figure\");\n  figure.classList.add(\"image\");\n\n  const image = document.createElement(\"img\");\n  image.src = _assets_frontdoor_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = \"The front door of our office\";\n\n  //build text column\n  const homepageText = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", null, [\"column\", \"content\", \"is-family-monospace\", \"has-text-centered\"]);\n  \n  const h1 = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"img\");\n  h1.src = _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  const p1 = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", null, null, \"We provide best-in-class eye care for adults and children, and offer a wide selection of luxury eyeglass brands.\");\n  const p2 = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", null, null, \"Open Monday-Friday, 10:30am-6:30pm\");\n  const p3 = (0,_helpers_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", null, null, \"Servicing downtown Manhattan since 2011\");\n  const map = document.createElement(\"iframe\");\n  map.src = \"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.518601525015!2d-74.0097192!3d40.7151623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94d3d09046292216!2sRevolution%20Eyes!5e0!3m2!1sen!2sus!4v1635041500047!5m2!1sen!2sus\";\n  map.id = \"map\";\n  map.allowFullscreen = \"\";\n\n  const hr = document.createElement(\"hr\");\n\n  figure.appendChild(image);\n  imageContainer.appendChild(figure);\n  homepageText.append(h1, p1, p2, p3, hr, map);\n  homepageMain.append(imageContainer, homepageText);\n  homepage.appendChild(homepageMain);\n}\n\nconst hr = document.createElement(\"hr\");\n\nbuildLevel();\nbuildMain();\nhomepage.appendChild(hr);\nhomepage.appendChild(_helpers_yelp__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/pages/homepage.js?");

/***/ }),

/***/ "./src/assets/frontdoor.jpg":
/*!**********************************!*\
  !*** ./src/assets/frontdoor.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd03b8251e39e50fb905.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/frontdoor.jpg?");

/***/ }),

/***/ "./src/assets/logo.jpg":
/*!*****************************!*\
  !*** ./src/assets/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9d9c06412282fa79d82.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/logo.jpg?");

/***/ }),

/***/ "./src/assets/window.jpg":
/*!*******************************!*\
  !*** ./src/assets/window.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49c2718b7eff6ee58219.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/window.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
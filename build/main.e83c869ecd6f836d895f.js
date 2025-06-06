/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ (() => {

eval("const burgerOpen = document.querySelector('.header__burger');\nconst sideBar = document.querySelector('.hidden-sidebar');\nconst burgerClose = sideBar.querySelector('.div__burger');\nburgerOpen.addEventListener('click', function () {\n  sideBar.classList.add('show');\n});\nburgerClose.addEventListener('click', function () {\n  sideBar.classList.remove('show');\n});\ndocument.addEventListener('keydown', function (evt) {\n  if (evt.key === 'Escape') {\n    sideBar.classList.remove('show');\n  }\n});\ndocument.body.addEventListener('click', function (evt) {\n  if (!sideBar.contains(evt.target) && evt.target !== burgerOpen) {\n    sideBar.classList.remove('show');\n  }\n});\nsideBar.addEventListener('click', function (evt) {\n  evt.stopPropagation();\n});\n\n//# sourceURL=webpack://package/./src/js/burger.js?");

/***/ }),

/***/ "./src/js/button-two.js":
/*!******************************!*\
  !*** ./src/js/button-two.js ***!
  \******************************/
/***/ (() => {

eval("const button = document.querySelector('.btn__swiper');\nconst swiperOnes = document.querySelectorAll('.swiper-one-close-button');\nbutton.onclick = function () {\n  for (let swiperOne of swiperOnes) {\n    if (swiperOne.classList.contains('hidden')) {\n      swiperOne.classList.remove('hidden');\n      button.textContent = \"Скрыть\";\n      button.classList.add('icon');\n    } else {\n      swiperOne.classList.add('hidden');\n      button.textContent = \"Показать еще\";\n      button.classList.remove('icon');\n    }\n  }\n};\n\n//# sourceURL=webpack://package/./src/js/button-two.js?");

/***/ }),

/***/ "./src/js/button.js":
/*!**************************!*\
  !*** ./src/js/button.js ***!
  \**************************/
/***/ (() => {

eval("const buttonTwo = document.querySelector('.btn-two__swiper--two');\nconst swiperTwo = document.querySelector('.swiper-two-close-button');\nbuttonTwo.onclick = function () {\n  if (swiperTwo.classList.contains('hidden-two')) {\n    swiperTwo.classList.remove('hidden-two');\n    buttonTwo.classList.add('icon--two');\n    buttonTwo.textContent = \"Скрыть\";\n  } else {\n    swiperTwo.classList.add('hidden-two');\n    buttonTwo.textContent = \"Показать еще\";\n    buttonTwo.classList.remove('icon--two');\n  }\n};\n\n//# sourceURL=webpack://package/./src/js/button.js?");

/***/ }),

/***/ "./src/js/feedback.js":
/*!****************************!*\
  !*** ./src/js/feedback.js ***!
  \****************************/
/***/ (() => {

eval("const feedbackOpen = document.querySelector('.header__chat');\nconst feedback = document.querySelector('.feedback');\nconst feedbackClose = feedback.querySelector('.feedback__btn-item');\nfeedbackOpen.addEventListener('click', function () {\n  feedback.classList.add('shows');\n});\nfeedbackClose.addEventListener('click', function () {\n  feedback.classList.remove('shows');\n});\ndocument.addEventListener('keydown', function (evt) {\n  if (evt.key === 'Escape') {\n    feedback.classList.remove('shows');\n  }\n});\ndocument.body.addEventListener('click', function (evt) {\n  if (!feedback.contains(evt.target) && evt.target !== feedbackOpen) {\n    feedback.classList.remove('shows');\n  }\n});\nfeedback.addEventListener('click', function (evt) {\n  evt.stopPropagation();\n});\n\n//# sourceURL=webpack://package/./src/js/feedback.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  const swiper = new Swiper('.swiper-one', {\n    loop: false,\n    pagination: {\n      el: '.swiper-one-pagination',\n      clickable: true\n    },\n    hashNavigation: true,\n    slidesPerView: 1.5,\n    mousewheel: true,\n    keyboard: true,\n    freeMode: true,\n    width: 330,\n    height: 80,\n    breakpoints: {\n      320: {\n        enabled: true\n      },\n      768: {\n        enabled: false\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://package/./src/js/script.js?");

/***/ }),

/***/ "./src/js/swiper-two.js":
/*!******************************!*\
  !*** ./src/js/swiper-two.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  const swiper = new Swiper('.swiper-two', {\n    loop: false,\n    pagination: {\n      el: '.swiper-two-pagination',\n      clickable: true\n    },\n    hashNavigation: true,\n    slidesPerView: 1.5,\n    mousewheel: true,\n    keyboard: true,\n    freeMode: true,\n    width: 330,\n    height: 80,\n    breakpoints: {\n      320: {\n        enabled: true\n      },\n      768: {\n        enabled: false\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://package/./src/js/swiper-two.js?");

/***/ }),

/***/ "./src/js/swiper3.js":
/*!***************************!*\
  !*** ./src/js/swiper3.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  const swiper = new Swiper('.swiper-three', {\n    loop: false,\n    pagination: {\n      el: '.swiper-three-pagination',\n      clickable: true\n    },\n    hashNavigation: true,\n    slidesPerView: 1.5,\n    mousewheel: true,\n    keyboard: true,\n    freeMode: true,\n    width: 330,\n    height: 80,\n    breakpoints: {\n      320: {\n        enabled: true\n      },\n      768: {\n        enabled: false\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://package/./src/js/swiper3.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/js/script */ \"./src/js/script.js\");\n/* harmony import */ var _src_js_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_js_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_js_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/button */ \"./src/js/button.js\");\n/* harmony import */ var _src_js_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_js_swiper_two__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/swiper-two */ \"./src/js/swiper-two.js\");\n/* harmony import */ var _src_js_swiper_two__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_swiper_two__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_js_button_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/js/button-two */ \"./src/js/button-two.js\");\n/* harmony import */ var _src_js_button_two__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_js_button_two__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_js_swiper3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/js/swiper3 */ \"./src/js/swiper3.js\");\n/* harmony import */ var _src_js_swiper3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_js_swiper3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_js_burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/js/burger */ \"./src/js/burger.js\");\n/* harmony import */ var _src_js_burger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_js_burger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_js_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/js/feedback */ \"./src/js/feedback.js\");\n/* harmony import */ var _src_js_feedback__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_js_feedback__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://package/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
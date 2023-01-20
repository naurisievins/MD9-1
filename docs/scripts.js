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

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"styles.css\");\n\n//# sourceURL=webpack://webpack_ts/./src/styles.scss?");

/***/ }),

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ (() => {

eval("var variables = {\r\n    charImg: \"\",\r\n    charName: \"\",\r\n    charStatus: \"\",\r\n    charSpecies: \"\",\r\n    charOrigin: \"\",\r\n    page: 1,\r\n    allLoaded: false\r\n};\r\nvar fetchCardData = function (data) {\r\n    for (var i = 0; i < data.results.length; i++) {\r\n        if (data.results.length < 20) {\r\n            variables.allLoaded = true;\r\n        }\r\n        variables.charImg = data.results[i].image;\r\n        variables.charName = data.results[i].name;\r\n        variables.charStatus = data.results[i].status;\r\n        variables.charSpecies = data.results[i].species;\r\n        variables.charOrigin = data.results[i].origin.name;\r\n        createCard(variables.charImg, variables.charName, variables.charStatus, variables.charSpecies, variables.charOrigin);\r\n    }\r\n};\r\nvar createCard = function (charImg, charName, charStatus, charSpecies, charOrigin) {\r\n    var cardRow = document.querySelector(\".card_row\");\r\n    var card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n    var cardContent = document.createElement(\"div\");\r\n    cardContent.classList.add(\"card__content\");\r\n    var cardImgContainer = document.createElement(\"div\");\r\n    cardImgContainer.classList.add(\"card__img\");\r\n    var cardImg = document.createElement(\"img\");\r\n    cardImg.src = charImg;\r\n    var cardTextContent = document.createElement(\"div\");\r\n    cardTextContent.classList.add(\"card__text_content\");\r\n    var cardName = document.createElement(\"span\");\r\n    cardName.classList.add(\"card__name\");\r\n    cardName.textContent = charName;\r\n    var cardStatus = document.createElement(\"span\");\r\n    cardStatus.classList.add(\"card__status\");\r\n    cardStatus.textContent = charStatus;\r\n    var circle = document.createElement(\"div\");\r\n    circle.classList.add(\"circle\", deadOrAlive(charStatus));\r\n    var cardSpecies = document.createElement(\"span\");\r\n    cardSpecies.classList.add(\"card__species\");\r\n    cardSpecies.textContent = \"Species: \" + charSpecies;\r\n    var cardOrigin = document.createElement(\"span\");\r\n    cardOrigin.classList.add(\"card__origin\");\r\n    cardOrigin.textContent = \"Origin: \" + charOrigin;\r\n    ;\r\n    cardRow.appendChild(card).appendChild(cardContent).appendChild(cardImgContainer).appendChild(cardImg);\r\n    cardContent.appendChild(cardTextContent).appendChild(cardName);\r\n    cardContent.appendChild(cardTextContent).append(cardStatus);\r\n    cardStatus.appendChild(circle);\r\n    cardContent.appendChild(cardTextContent).append(cardSpecies);\r\n    cardContent.appendChild(cardTextContent).append(cardOrigin);\r\n};\r\nvar deadOrAlive = function (status) {\r\n    if (status === \"Alive\") {\r\n        return \"circle--green\";\r\n    }\r\n    else if (status === \"Dead\") {\r\n        return \"circle--red\";\r\n    }\r\n    else {\r\n        return \"circle--orange\";\r\n    }\r\n};\r\nvar loadMore = function () {\r\n    if (variables.allLoaded) {\r\n        addListener(variables.allLoaded);\r\n    }\r\n    else {\r\n        var apiLink = \"https://rickandmortyapi.com/api/character/?page=\";\r\n        apiLink += variables.page.toString();\r\n        variables.page += 1;\r\n        fetch(apiLink)\r\n            .then(function (response) { return response.json(); })\r\n            .then(fetchCardData);\r\n    }\r\n    addListener(variables.allLoaded);\r\n};\r\nvar addListener = function (load) {\r\n    var loadMoreBtn = document.querySelector(\".load-more--js\");\r\n    if (load) {\r\n        loadMoreBtn.removeEventListener(\"click\", loadMore);\r\n        loadMoreBtn.classList.add(\"btn--disabled\");\r\n        loadMoreBtn.innerText = \"All loaded!\";\r\n    }\r\n    else {\r\n        loadMoreBtn.addEventListener(\"click\", loadMore);\r\n    }\r\n};\r\nloadMore();\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/scripts.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/scripts.ts"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
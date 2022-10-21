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

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./app/style.css\");\n/* harmony import */ var _modules_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/base.js */ \"./app/modules/base.js\");\n\n\n\n(0,_modules_base_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nif (false) {}\n\n\n//# sourceURL=webpack://leaderboard/./app/index.js?");

/***/ }),

/***/ "./app/modules/base.js":
/*!*****************************!*\
  !*** ./app/modules/base.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_add_leader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/add_leader.js */ \"./app/modules/utils/add_leader.js\");\n/* harmony import */ var _utils_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/api.js */ \"./app/modules/utils/api.js\");\n\n\n\nconst base = () => {\n  const submitBtn = document.querySelector('.submit-btn');\n  const refreshBtn = document.querySelector('.refresh-btn');\n  const name = document.querySelector('#name');\n  const score = document.querySelector('#score');\n  const error = document.querySelector('.error-form');\n  const form = document.querySelector('form');\n  const list = document.querySelector('.list');\n  const tHeader = document.querySelector('.table-header');\n  const date = document.querySelector('#date');\n  const regex = /^[0-9]+$/;\n\n  // Prevent form default behavior\n  form.onsubmit = (e) => {\n    e.preventDefault();\n  };\n\n  // return date to footer\n  date.innerHTML = new Date().getFullYear();\n\n  // submit form\n  submitBtn.addEventListener('click', (e) => {\n    if (name.value && score.value) {\n      if (regex.test(score.value)) {\n        const nameTrimed = name.value.trim();\n        const scoreTrimed = score.value.trim();\n\n        (0,_utils_add_leader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nameTrimed, scoreTrimed);\n        name.value = '';\n        score.value = '';\n      } else {\n        error.innerText = 'Score should be a number.';\n        error.style.display = 'block';\n      }\n    } else {\n      error.style.display = 'block';\n      e.preventDefault();\n    }\n\n    setTimeout(() => {\n      error.style.display = 'none';\n    }, 6000);\n  });\n\n  refreshBtn.addEventListener('click', () => {\n    list.innerHTML = `${tHeader.innerHTML}\n    `;\n    document.querySelector('.loading').style.display = 'block';\n    setTimeout(() => {\n      (0,_utils_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }, 350);\n\n    setTimeout(() => {\n      document.querySelector('.loading').style.display = 'none';\n    }, 650);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (base);\n\n\n//# sourceURL=webpack://leaderboard/./app/modules/base.js?");

/***/ }),

/***/ "./app/modules/utils/add_leader.js":
/*!*****************************************!*\
  !*** ./app/modules/utils/add_leader.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _leader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leader.js */ \"./app/modules/utils/leader.js\");\n/* harmony import */ var _save_toAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save_toAPI.js */ \"./app/modules/utils/save_toAPI.js\");\n\n\n\nconst addLeader = (name, score) => {\n  const leader = new _leader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, score);\n  (0,_save_toAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(leader);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLeader);\n\n\n//# sourceURL=webpack://leaderboard/./app/modules/utils/add_leader.js?");

/***/ }),

/***/ "./app/modules/utils/api.js":
/*!**********************************!*\
  !*** ./app/modules/utils/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGame\": () => (/* binding */ createGame),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./app/modules/utils/display.js\");\n\n\nconst displayError = document.querySelector('.error');\n\nconst createGame = async () => {\n  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\n  await fetch(url, {\n    method: 'POST',\n    headers: {\n      'content-Type': 'application/json',\n    },\n    body: JSON.stringify({ name: 'Car Race' }),\n  });\n};\n\nconst getData = async () => {\n  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a7h3NjP2qu53OCSBUBrN/scores/';\n  const response = await fetch(url);\n  const data = await response.json();\n  const resultArr = data.result;\n  if (resultArr.length > 0) {\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayAll)(resultArr);\n  } else {\n    displayError.innerHTML = \"Seems like there isn't any leading competitor...\";\n    displayError.style.display = 'block';\n  }\n};\n\ngetData().catch(() => {\n  displayError.style.display = 'block';\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n\n//# sourceURL=webpack://leaderboard/./app/modules/utils/api.js?");

/***/ }),

/***/ "./app/modules/utils/display.js":
/*!**************************************!*\
  !*** ./app/modules/utils/display.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayAll\": () => (/* binding */ displayAll)\n/* harmony export */ });\nconst table = document.querySelector('.list');\n\nconst display = (leader) => {\n  const tr = document.createElement('tr');\n  tr.classList.add('leader');\n  tr.innerHTML = ` <td>${leader.user} :</td> \n                    <td>${leader.score}</td>`;\n  table.appendChild(tr);\n};\n\nconst displayAll = (leaders) => {\n  leaders.forEach((element) => {\n    display(element);\n  });\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n\n//# sourceURL=webpack://leaderboard/./app/modules/utils/display.js?");

/***/ }),

/***/ "./app/modules/utils/leader.js":
/*!*************************************!*\
  !*** ./app/modules/utils/leader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Leader {\n  constructor(name, score) {\n    this.user = name;\n    this.score = score;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Leader);\n\n\n//# sourceURL=webpack://leaderboard/./app/modules/utils/leader.js?");

/***/ }),

/***/ "./app/modules/utils/save_toAPI.js":
/*!*****************************************!*\
  !*** ./app/modules/utils/save_toAPI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveData = async (score) => {\n  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a7h3NjP2qu53OCSBUBrN/scores/';\n  await fetch(url, {\n    method: 'POST',\n    headers: {\n      'content-Type': 'application/json',\n    },\n    body: JSON.stringify(score),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveData);\n\n\n//# sourceURL=webpack://leaderboard/./app/modules/utils/save_toAPI.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ............. Css Resets ........... */\\r\\n\\r\\n*,\\r\\n*::after,\\r\\n*::before {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody,\\r\\nhtml {\\r\\n  box-sizing: inherit;\\r\\n  width: 100%;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 100%;\\r\\n  height: 100vh;\\r\\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\\r\\n  line-height: 1.5;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 0.45rem;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-track {\\r\\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\r\\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  width: 1rem;\\r\\n  height: 1rem;\\r\\n  background-color: rgb(43, 42, 42);\\r\\n  border-radius: 10px;\\r\\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\\r\\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0.6rem 1rem;\\r\\n  background-color: rgb(248, 180, 62);\\r\\n  color: rgb(2, 2, 2);\\r\\n  text-transform: uppercase;\\r\\n  font-weight: 600;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  border-radius: 7px;\\r\\n  -webkit-border-radius: 7px;\\r\\n  -moz-border-radius: 7px;\\r\\n  -ms-border-radius: 7px;\\r\\n  -o-border-radius: 7px;\\r\\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.51);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: rgb(127, 189, 255);\\r\\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.51);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.51);\\r\\n}\\r\\n\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  text-align: left;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 2.5rem;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 1.9rem;\\r\\n}\\r\\n\\r\\nth,\\r\\ntd {\\r\\n  padding: 0.8rem;\\r\\n}\\r\\n\\r\\n/* Reusable classes ........... */\\r\\n\\r\\n.limit {\\r\\n  padding-inline: 0.9rem;\\r\\n  padding-block: 0.7rem;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.flex-col {\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.flex-center {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.flex-jc-c {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.flex-al-c {\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.flex-jc-sb {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n/* ...... Page Styling ....... */\\r\\n.container {\\r\\n  width: 100%;\\r\\n  max-height: 95%;\\r\\n  gap: 4rem;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.main-header {\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\n.icon-lead {\\r\\n  color: rgb(247, 165, 25);\\r\\n  font-size: 1.4rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  gap: 2rem;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.display {\\r\\n  min-width: 40%;\\r\\n  padding: 0.4rem;\\r\\n}\\r\\n\\r\\n.display-header {\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  display: none;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  color: rgb(205, 98, 98);\\r\\n  padding: 0.4rem 0.4rem;\\r\\n}\\r\\n\\r\\n.loading {\\r\\n  display: none;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n/* .....Table styling */\\r\\n\\r\\n.list-cont {\\r\\n  max-height: 20rem;\\r\\n  overflow-y: scroll;\\r\\n  margin-top: 1rem;\\r\\n  border: 1px solid rgba(0, 0, 0, 0.452);\\r\\n  border-top-right-radius: 5px;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  background-color: rgb(127, 189, 255);\\r\\n  font-size: 1.2rem;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.table-header {\\r\\n  max-height: 3.6rem;\\r\\n}\\r\\n\\r\\n.leader {\\r\\n  background-color: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\ntr.leader:nth-child(2n + 1) {\\r\\n  background-color: rgb(248, 180, 62);\\r\\n}\\r\\n\\r\\n/* .......form styling */\\r\\n\\r\\n.form-cont {\\r\\n  min-width: 35%;\\r\\n  padding: 0.4rem;\\r\\n}\\r\\n\\r\\n.form-cont form {\\r\\n  background-color: rgb(43, 47, 47);\\r\\n  padding: 2rem 1rem;\\r\\n  gap: 0.3rem;\\r\\n  margin: 1rem 0;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 0.5rem;\\r\\n  width: 100%;\\r\\n  font-size: 1.03rem;\\r\\n}\\r\\n\\r\\n.error-form {\\r\\n  display: none;\\r\\n  color: rgb(255, 255, 255);\\r\\n  background-color: rgb(202, 129, 129);\\r\\n  padding: 0.4rem 0.4rem;\\r\\n  margin-top: 0.4rem;\\r\\n}\\r\\n\\r\\n.submit-btn {\\r\\n  margin-top: 1rem;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  height: 5%;\\r\\n  background-color: rgb(248, 180, 62);\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.footer-text {\\r\\n  gap: 0.2rem;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  :root {\\r\\n    --padd: 0 2%;\\r\\n  }\\r\\n\\r\\n  body {\\r\\n    height: 100%;\\r\\n    overflow-y: scroll;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 1.8rem;\\r\\n  }\\r\\n\\r\\n  h2 {\\r\\n    font-size: 1.5rem;\\r\\n  }\\r\\n\\r\\n  .container {\\r\\n    display: block;\\r\\n    height: 100%;\\r\\n    padding: var(--padd);\\r\\n  }\\r\\n\\r\\n  main {\\r\\n    flex-direction: column;\\r\\n    margin-bottom: 2rem;\\r\\n    padding: var(--padd);\\r\\n  }\\r\\n\\r\\n  .main-header {\\r\\n    margin: 3rem auto;\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    height: 4rem;\\r\\n    position: static;\\r\\n    padding: var(--padd);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./app/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/style.css":
/*!***********************!*\
  !*** ./app/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./app/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./app/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;
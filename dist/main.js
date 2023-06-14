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

/***/ "./src/creation.js":
/*!*************************!*\
  !*** ./src/creation.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectsButtons: () => (/* binding */ createProjectsButtons),\n/* harmony export */   createTaskBoxes: () => (/* binding */ createTaskBoxes),\n/* harmony export */   resetProjectsList: () => (/* binding */ resetProjectsList)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\nconst taskDisplay = document.querySelector(\"#task-list\");\nconst projectsDisplay = document.querySelector(\"#projects-list\");\n\nfunction resetProjectsList(taskList, projectList){\n  projectList.length = 0;\n  for (let i = 0; i < taskList.length; i++){\n    let task = taskList[i];\n    if (!projectList.includes(task.projectName) && task.projectName !== \"\"){\n      projectList.push(task.projectName);\n    }\n  }\n  return;\n}\n\nfunction createProjectsButtons(projectsList){\n  while(projectsDisplay.hasChildNodes()){\n    projectsDisplay.removeChild(projectsDisplay.firstChild);\n  }\n\n  for(let i = 0; i < projectsList.length; i++){\n    const projectName = projectsList[i];\n    const buttonDiv = document.createElement(\"div\");\n  \n    const checkbox = document.createElement(\"input\");\n    checkbox.setAttribute(\"type\", \"checkbox\");\n    checkbox.setAttribute(\"id\", projectName);\n    checkbox.setAttribute(\"name\", projectName);\n    buttonDiv.append(checkbox);\n\n    const label = document.createElement(\"label\");\n    label.setAttribute(\"for\", projectName);\n    label.textContent = projectName;\n    buttonDiv.append(label);\n\n    projectsDisplay.append(buttonDiv);\n  }\n\n  return;\n}\n\nfunction createTaskBoxes(taskList){\n  while(taskDisplay.hasChildNodes()){\n    taskDisplay.removeChild(taskDisplay.firstChild);\n  }\n\n  for(let i = 0; i < taskList.length; i++){\n    const task = taskList[i];\n    const taskBox = document.createElement(\"div\");\n    taskBox.id = \"task\";\n  \n    const header = document.createElement(\"h1\");\n    header.textContent = task.name;\n    const description = document.createElement(\"p\");\n    description.textContent = task.description;\n    const finishButton = document.createElement(\"button\");\n    finishButton.className = \"finish-button\";\n\n    taskBox.append(header, description, finishButton);\n\n    taskDisplay.append(taskBox);\n  }\n\n  return;\n}\n\n\n\n//# sourceURL=webpack://todoapp/./src/creation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation.js */ \"./src/creation.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nvar taskList = [];\nvar projectList = [];\n\n// Creates a \"task\" object for our taskList\nfunction newTask(event){\n  event.preventDefault();\n  const task = {};\n  const form = document.querySelector(\"#new-task\");\n  const taskName = form.elements.taskName.value;\n  const description = form.elements.description.value;\n  const projectName = form.elements.projectName.value;\n\n  task.name = taskName;\n  task.description = description;\n  task.projectName = projectName;\n\n  taskList.push(task);\n  if (!projectList.includes(projectName) && projectName !== \"\"){\n    (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.resetProjectsList)(taskList, projectList);\n    (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.createProjectsButtons)(projectList);\n  }\n\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.createTaskBoxes)(taskList);\n  const finishButtons = document.querySelectorAll(\".finish-button\");\n  finishButtons.forEach(function(button){\n    button.addEventListener(\"click\", finishTask);\n  });\n\n  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)(\"localStorage\")){\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.changeStorage)(taskList);\n  }\n\n  form.reset();\n  return;\n\n}\n\nfunction finishTask(event){\n  const element = event.target.parentNode.querySelector(\"h1\");\n  taskList = taskList.filter(task => (task.name !== element.textContent));\n  event.target.parentNode.remove();\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.resetProjectsList)(taskList, projectList);\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.createProjectsButtons)(projectList);\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.changeStorage)(taskList);\n\n  return;\n}\n\nconst form = document.querySelector(\"#new-task\");\nform.addEventListener(\"submit\", newTask);\n\nif ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)(\"localStorage\")){\n  const storedTasks = JSON.parse((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.startFromStorage)());\n  for (let i = 0; i < storedTasks.length; i++){\n    taskList.push(storedTasks[i]);\n  }\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.createTaskBoxes)(taskList);\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.resetProjectsList)(taskList, projectList);\n}\n(0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.createProjectsButtons)(projectList);\n\nconst finishButtons = document.querySelectorAll(\".finish-button\");\nfinishButtons.forEach(function(button){\n  button.addEventListener(\"click\", finishTask);\n});\n\n\n//# sourceURL=webpack://todoapp/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeStorage: () => (/* binding */ changeStorage),\n/* harmony export */   startFromStorage: () => (/* binding */ startFromStorage),\n/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)\n/* harmony export */ });\nfunction storageAvailable(type) {\n  let storage;\n  try {\n    storage = window[type];\n    const x = \"__storage_test__\";\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return (\n      e instanceof DOMException &&\n      // everything except Firefox\n      (e.code === 22 ||\n        // Firefox\n        e.code === 1014 ||\n        // test name field too, because code might not be present\n        // everything except Firefox\n        e.name === \"QuotaExceededError\" ||\n        // Firefox\n        e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") &&\n      // acknowledge QuotaExceededError only if there's something already stored\n      storage &&\n      storage.length !== 0\n    );\n  }\n}\n\nfunction changeStorage(taskList){\n  localStorage.setItem(\"tasks\", JSON.stringify(taskList));\n}\n\nfunction startFromStorage(){\n  if (localStorage.getItem(\"tasks\")){\n    return localStorage.getItem(\"tasks\");\n  }else{\n    return JSON.stringify([]);\n  }\n}\n\n//# sourceURL=webpack://todoapp/./src/storage.js?");

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
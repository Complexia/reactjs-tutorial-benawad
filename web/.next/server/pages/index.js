module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/remi/Desktop/reactlearn/libreddit/web/src/components/Container.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst Container = props => {\n  const {\n    colorMode\n  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"])();\n  const bgColor = {\n    light: 'gray.50',\n    dark: 'gray.900'\n  };\n  const color = {\n    light: 'black',\n    dark: 'white'\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], _objectSpread({\n    direction: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"flex-start\",\n    bg: bgColor[colorMode],\n    color: color[colorMode]\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIuanM/NTU0MCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJwcm9wcyIsImNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZSIsImJnQ29sb3IiLCJsaWdodCIsImRhcmsiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JDLHFFQUFZLEVBQWxDO0FBRUEsUUFBTUMsT0FBTyxHQUFHO0FBQUVDLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FBaEI7QUFFQSxRQUFNQyxLQUFLLEdBQUc7QUFBRUYsU0FBSyxFQUFFLE9BQVQ7QUFBa0JDLFFBQUksRUFBRTtBQUF4QixHQUFkO0FBQ0Esc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxhQUFTLEVBQUMsUUFEWjtBQUVFLGNBQVUsRUFBQyxRQUZiO0FBR0Usa0JBQWMsRUFBQyxZQUhqQjtBQUlFLE1BQUUsRUFBRUYsT0FBTyxDQUFDRixTQUFELENBSmI7QUFLRSxTQUFLLEVBQUVLLEtBQUssQ0FBQ0wsU0FBRDtBQUxkLEtBTU1ELEtBTk47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0FoQk0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCB1c2VDb2xvck1vZGUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuXG4gIGNvbnN0IGJnQ29sb3IgPSB7IGxpZ2h0OiAnZ3JheS41MCcsIGRhcms6ICdncmF5LjkwMCcgfVxuXG4gIGNvbnN0IGNvbG9yID0geyBsaWdodDogJ2JsYWNrJywgZGFyazogJ3doaXRlJyB9XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxuICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Container.js\n");

/***/ }),

/***/ "./src/components/DarkModeSwitch.js":
/*!******************************************!*\
  !*** ./src/components/DarkModeSwitch.js ***!
  \******************************************/
/*! exports provided: DarkModeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkModeSwitch\", function() { return DarkModeSwitch; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/remi/Desktop/reactlearn/libreddit/web/src/components/DarkModeSwitch.js\";\n\nconst DarkModeSwitch = () => {\n  const {\n    colorMode,\n    toggleColorMode\n  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"])();\n  const isDark = colorMode === 'dark';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    position: \"fixed\",\n    top: \"1rem\",\n    right: \"1rem\",\n    color: \"green\",\n    isChecked: isDark,\n    onChange: toggleColorMode\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaC5qcz8xMzNhIl0sIm5hbWVzIjpbIkRhcmtNb2RlU3dpdGNoIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlIiwiaXNEYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDbEMsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBaUNDLHFFQUFZLEVBQW5EO0FBQ0EsUUFBTUMsTUFBTSxHQUFHSCxTQUFTLEtBQUssTUFBN0I7QUFDQSxzQkFDRSxxRUFBQyx1REFBRDtBQUNFLFlBQVEsRUFBQyxPQURYO0FBRUUsT0FBRyxFQUFDLE1BRk47QUFHRSxTQUFLLEVBQUMsTUFIUjtBQUlFLFNBQUssRUFBQyxPQUpSO0FBS0UsYUFBUyxFQUFFRyxNQUxiO0FBTUUsWUFBUSxFQUFFRjtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBYk0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbG9yTW9kZSwgU3dpdGNoIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IERhcmtNb2RlU3dpdGNoID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICBjb25zdCBpc0RhcmsgPSBjb2xvck1vZGUgPT09ICdkYXJrJ1xuICByZXR1cm4gKFxuICAgIDxTd2l0Y2hcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgdG9wPVwiMXJlbVwiXG4gICAgICByaWdodD1cIjFyZW1cIlxuICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICBpc0NoZWNrZWQ9e2lzRGFya31cbiAgICAgIG9uQ2hhbmdlPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgLz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DarkModeSwitch.js\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.js\");\n/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DarkModeSwitch */ \"./src/components/DarkModeSwitch.js\");\n\nvar _jsxFileName = \"/home/remi/Desktop/reactlearn/libreddit/web/src/pages/index.tsx\";\n\n\n\nconst Index = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Hello World\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_2__[\"DarkModeSwitch\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 4\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 15,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTQTtBQUNBOztBQUdBLE1BQU1BLEtBQUssR0FBRyxtQkFDWixxRUFBQywrREFBRDtBQUFBLDBCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFNQyxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBYWVBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExpbmsgYXMgQ2hha3JhTGluayxcbiAgVGV4dCxcbiAgQ29kZSxcbiAgTGlzdCxcbiAgTGlzdEljb24sXG4gIExpc3RJdGVtLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQ2hlY2tDaXJjbGVJY29uLCBMaW5rSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lcidcbmltcG9ydCB7IERhcmtNb2RlU3dpdGNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaCdcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPENvbnRhaW5lcj5cblxuICAgIDxkaXY+XG4gICAgICBIZWxsbyBXb3JsZFxuXG4gICAgPC9kaXY+XG4gICA8RGFya01vZGVTd2l0Y2ggLz4gXG4gIDwvQ29udGFpbmVyPlxuIFxuIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
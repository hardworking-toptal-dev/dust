"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uint8arrays";
exports.ids = ["vendor-chunks/uint8arrays"];
exports.modules = {

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/alloc.js":
/*!****************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/alloc.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alloc: () => (/* binding */ alloc),\n/* harmony export */   allocUnsafe: () => (/* binding */ allocUnsafe)\n/* harmony export */ });\nfunction alloc(size = 0) {\n    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {\n        return globalThis.Buffer.alloc(size);\n    }\n    return new Uint8Array(size);\n}\nfunction allocUnsafe(size = 0) {\n    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {\n        return globalThis.Buffer.allocUnsafe(size);\n    }\n    return new Uint8Array(size);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvYWxsb2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxTQUFTQSxNQUFNQyxPQUFPLENBQUM7SUFDNUIsSUFBSUMsV0FBV0MsTUFBTSxJQUFJLFFBQVFELFdBQVdDLE1BQU0sQ0FBQ0gsS0FBSyxJQUFJLE1BQU07UUFDaEUsT0FBT0UsV0FBV0MsTUFBTSxDQUFDSCxLQUFLLENBQUNDO0lBQ2pDO0lBQ0EsT0FBTyxJQUFJRyxXQUFXSDtBQUN4QjtBQUNPLFNBQVNJLFlBQVlKLE9BQU8sQ0FBQztJQUNsQyxJQUFJQyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDRSxXQUFXLElBQUksTUFBTTtRQUN0RSxPQUFPSCxXQUFXQyxNQUFNLENBQUNFLFdBQVcsQ0FBQ0o7SUFDdkM7SUFDQSxPQUFPLElBQUlHLFdBQVdIO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2FsbG9jLmpzPzMwZDIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFsbG9jKHNpemUgPSAwKSB7XG4gIGlmIChnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsICYmIGdsb2JhbFRoaXMuQnVmZmVyLmFsbG9jICE9IG51bGwpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5CdWZmZXIuYWxsb2Moc2l6ZSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jVW5zYWZlKHNpemUgPSAwKSB7XG4gIGlmIChnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsICYmIGdsb2JhbFRoaXMuQnVmZmVyLmFsbG9jVW5zYWZlICE9IG51bGwpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5CdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpO1xufSJdLCJuYW1lcyI6WyJhbGxvYyIsInNpemUiLCJnbG9iYWxUaGlzIiwiQnVmZmVyIiwiVWludDhBcnJheSIsImFsbG9jVW5zYWZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/alloc.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/compare.js":
/*!******************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/compare.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* binding */ compare)\n/* harmony export */ });\nfunction compare(a, b) {\n    for(let i = 0; i < a.byteLength; i++){\n        if (a[i] < b[i]) {\n            return -1;\n        }\n        if (a[i] > b[i]) {\n            return 1;\n        }\n    }\n    if (a.byteLength > b.byteLength) {\n        return 1;\n    }\n    if (a.byteLength < b.byteLength) {\n        return -1;\n    }\n    return 0;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29tcGFyZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsUUFBUUMsQ0FBQyxFQUFFQyxDQUFDO0lBQzFCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixFQUFFRyxVQUFVLEVBQUVELElBQUs7UUFDckMsSUFBSUYsQ0FBQyxDQUFDRSxFQUFFLEdBQUdELENBQUMsQ0FBQ0MsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDO1FBQ1Y7UUFDQSxJQUFJRixDQUFDLENBQUNFLEVBQUUsR0FBR0QsQ0FBQyxDQUFDQyxFQUFFLEVBQUU7WUFDZixPQUFPO1FBQ1Q7SUFDRjtJQUNBLElBQUlGLEVBQUVHLFVBQVUsR0FBR0YsRUFBRUUsVUFBVSxFQUFFO1FBQy9CLE9BQU87SUFDVDtJQUNBLElBQUlILEVBQUVHLFVBQVUsR0FBR0YsRUFBRUUsVUFBVSxFQUFFO1FBQy9CLE9BQU8sQ0FBQztJQUNWO0lBQ0EsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2NvbXBhcmUuanM/YTI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYVtpXSA8IGJbaV0pIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFbaV0gPiBiW2ldKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgaWYgKGEuYnl0ZUxlbmd0aCA+IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmIChhLmJ5dGVMZW5ndGggPCBiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgcmV0dXJuIDA7XG59Il0sIm5hbWVzIjpbImNvbXBhcmUiLCJhIiwiYiIsImkiLCJieXRlTGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/compare.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/concat.js":
/*!*****************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/concat.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   concat: () => (/* binding */ concat)\n/* harmony export */ });\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/alloc.js\");\n\nfunction concat(arrays, length) {\n    if (!length) {\n        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);\n    }\n    const output = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(length);\n    let offset = 0;\n    for (const arr of arrays){\n        output.set(arr, offset);\n        offset += arr.length;\n    }\n    return output;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29uY2F0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ2xDLFNBQVNDLE9BQU9DLE1BQU0sRUFBRUMsTUFBTTtJQUNuQyxJQUFJLENBQUNBLFFBQVE7UUFDWEEsU0FBU0QsT0FBT0UsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNELE1BQU1DLEtBQUtILE1BQU0sRUFBRTtJQUMzRDtJQUNBLE1BQU1JLFNBQVNQLHNEQUFXQSxDQUFDRztJQUMzQixJQUFJSyxTQUFTO0lBQ2IsS0FBSyxNQUFNQyxPQUFPUCxPQUFRO1FBQ3hCSyxPQUFPRyxHQUFHLENBQUNELEtBQUtEO1FBQ2hCQSxVQUFVQyxJQUFJTixNQUFNO0lBQ3RCO0lBQ0EsT0FBT0k7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9jb25jYXQuanM/N2I0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxvY1Vuc2FmZSB9IGZyb20gJy4vYWxsb2MuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheXMsIGxlbmd0aCkge1xuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IGFycmF5cy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5sZW5ndGgsIDApO1xuICB9XG4gIGNvbnN0IG91dHB1dCA9IGFsbG9jVW5zYWZlKGxlbmd0aCk7XG4gIGxldCBvZmZzZXQgPSAwO1xuICBmb3IgKGNvbnN0IGFyciBvZiBhcnJheXMpIHtcbiAgICBvdXRwdXQuc2V0KGFyciwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gYXJyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufSJdLCJuYW1lcyI6WyJhbGxvY1Vuc2FmZSIsImNvbmNhdCIsImFycmF5cyIsImxlbmd0aCIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJvdXRwdXQiLCJvZmZzZXQiLCJhcnIiLCJzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/concat.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/equals.js":
/*!*****************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/equals.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   equals: () => (/* binding */ equals)\n/* harmony export */ });\nfunction equals(a, b) {\n    if (a === b) {\n        return true;\n    }\n    if (a.byteLength !== b.byteLength) {\n        return false;\n    }\n    for(let i = 0; i < a.byteLength; i++){\n        if (a[i] !== b[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZXF1YWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxPQUFPQyxDQUFDLEVBQUVDLENBQUM7SUFDekIsSUFBSUQsTUFBTUMsR0FBRztRQUNYLE9BQU87SUFDVDtJQUNBLElBQUlELEVBQUVFLFVBQVUsS0FBS0QsRUFBRUMsVUFBVSxFQUFFO1FBQ2pDLE9BQU87SUFDVDtJQUNBLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxFQUFFRSxVQUFVLEVBQUVDLElBQUs7UUFDckMsSUFBSUgsQ0FBQyxDQUFDRyxFQUFFLEtBQUtGLENBQUMsQ0FBQ0UsRUFBRSxFQUFFO1lBQ2pCLE9BQU87UUFDVDtJQUNGO0lBQ0EsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2VxdWFscy5qcz9hYTAzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhLmJ5dGVMZW5ndGggIT09IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59Il0sIm5hbWVzIjpbImVxdWFscyIsImEiLCJiIiwiYnl0ZUxlbmd0aCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/equals.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/from-string.js":
/*!**********************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/from-string.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromString: () => (/* binding */ fromString)\n/* harmony export */ });\n/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/util/bases.js\");\n\nfunction fromString(string, encoding = \"utf8\") {\n    const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][encoding];\n    if (!base) {\n        throw new Error(`Unsupported encoding \"${encoding}\"`);\n    }\n    if ((encoding === \"utf8\" || encoding === \"utf-8\") && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n        return globalThis.Buffer.from(string, \"utf8\");\n    }\n    return base.decoder.decode(`${base.prefix}${string}`);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZnJvbS1zdHJpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFDN0IsU0FBU0MsV0FBV0MsTUFBTSxFQUFFQyxXQUFXLE1BQU07SUFDbEQsTUFBTUMsT0FBT0osc0RBQUssQ0FBQ0csU0FBUztJQUM1QixJQUFJLENBQUNDLE1BQU07UUFDVCxNQUFNLElBQUlDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBR0YsU0FBVSxDQUFDLENBQUM7SUFDeEQ7SUFDQSxJQUFJLENBQUNBLGFBQWEsVUFBVUEsYUFBYSxPQUFNLEtBQU1HLFdBQVdDLE1BQU0sSUFBSSxRQUFRRCxXQUFXQyxNQUFNLENBQUNDLElBQUksSUFBSSxNQUFNO1FBQ2hILE9BQU9GLFdBQVdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTixRQUFRO0lBQ3hDO0lBQ0EsT0FBT0UsS0FBS0ssT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFHTixLQUFLTyxNQUFNLENBQUUsRUFBR1QsT0FBUSxDQUFDO0FBQzFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2Zyb20tc3RyaW5nLmpzPzZjMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VzIGZyb20gJy4vdXRpbC9iYXNlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gZnJvbVN0cmluZyhzdHJpbmcsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlc1tlbmNvZGluZ107XG4gIGlmICghYmFzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZW5jb2RpbmcgXCIkeyBlbmNvZGluZyB9XCJgKTtcbiAgfVxuICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgfHwgZW5jb2RpbmcgPT09ICd1dGYtOCcpICYmIGdsb2JhbFRoaXMuQnVmZmVyICE9IG51bGwgJiYgZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oc3RyaW5nLCAndXRmOCcpO1xuICB9XG4gIHJldHVybiBiYXNlLmRlY29kZXIuZGVjb2RlKGAkeyBiYXNlLnByZWZpeCB9JHsgc3RyaW5nIH1gKTtcbn0iXSwibmFtZXMiOlsiYmFzZXMiLCJmcm9tU3RyaW5nIiwic3RyaW5nIiwiZW5jb2RpbmciLCJiYXNlIiwiRXJyb3IiLCJnbG9iYWxUaGlzIiwiQnVmZmVyIiwiZnJvbSIsImRlY29kZXIiLCJkZWNvZGUiLCJwcmVmaXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/from-string.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/index.js":
/*!****************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* reexport safe */ _compare_js__WEBPACK_IMPORTED_MODULE_0__.compare),\n/* harmony export */   concat: () => (/* reexport safe */ _concat_js__WEBPACK_IMPORTED_MODULE_1__.concat),\n/* harmony export */   equals: () => (/* reexport safe */ _equals_js__WEBPACK_IMPORTED_MODULE_2__.equals),\n/* harmony export */   fromString: () => (/* reexport safe */ _from_string_js__WEBPACK_IMPORTED_MODULE_3__.fromString),\n/* harmony export */   toString: () => (/* reexport safe */ _to_string_js__WEBPACK_IMPORTED_MODULE_4__.toString),\n/* harmony export */   xor: () => (/* reexport safe */ _xor_js__WEBPACK_IMPORTED_MODULE_5__.xor)\n/* harmony export */ });\n/* harmony import */ var _compare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/compare.js\");\n/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/concat.js\");\n/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/equals.js\");\n/* harmony import */ var _from_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-string.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/from-string.js\");\n/* harmony import */ var _to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-string.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/to-string.js\");\n/* harmony import */ var _xor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xor.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/xor.js\");\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0Y7QUFDQTtBQUNTO0FBQ0o7QUFDWDtBQVE3QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9pbmRleC5qcz9mNjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICcuL2NvbXBhcmUuanMnO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSAnLi9jb25jYXQuanMnO1xuaW1wb3J0IHsgZXF1YWxzIH0gZnJvbSAnLi9lcXVhbHMuanMnO1xuaW1wb3J0IHsgZnJvbVN0cmluZyB9IGZyb20gJy4vZnJvbS1zdHJpbmcuanMnO1xuaW1wb3J0IHsgdG9TdHJpbmcgfSBmcm9tICcuL3RvLXN0cmluZy5qcyc7XG5pbXBvcnQgeyB4b3IgfSBmcm9tICcuL3hvci5qcyc7XG5leHBvcnQge1xuICBjb21wYXJlLFxuICBjb25jYXQsXG4gIGVxdWFscyxcbiAgZnJvbVN0cmluZyxcbiAgdG9TdHJpbmcsXG4gIHhvclxufTsiXSwibmFtZXMiOlsiY29tcGFyZSIsImNvbmNhdCIsImVxdWFscyIsImZyb21TdHJpbmciLCJ0b1N0cmluZyIsInhvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/index.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/to-string.js":
/*!********************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/to-string.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toString: () => (/* binding */ toString)\n/* harmony export */ });\n/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/util/bases.js\");\n\nfunction toString(array, encoding = \"utf8\") {\n    const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][encoding];\n    if (!base) {\n        throw new Error(`Unsupported encoding \"${encoding}\"`);\n    }\n    if ((encoding === \"utf8\" || encoding === \"utf-8\") && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString(\"utf8\");\n    }\n    return base.encoder.encode(array).substring(1);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdG8tc3RyaW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBQzdCLFNBQVNDLFNBQVNDLEtBQUssRUFBRUMsV0FBVyxNQUFNO0lBQy9DLE1BQU1DLE9BQU9KLHNEQUFLLENBQUNHLFNBQVM7SUFDNUIsSUFBSSxDQUFDQyxNQUFNO1FBQ1QsTUFBTSxJQUFJQyxNQUFNLENBQUMsc0JBQXNCLEVBQUdGLFNBQVUsQ0FBQyxDQUFDO0lBQ3hEO0lBQ0EsSUFBSSxDQUFDQSxhQUFhLFVBQVVBLGFBQWEsT0FBTSxLQUFNRyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDQyxJQUFJLElBQUksTUFBTTtRQUNoSCxPQUFPRixXQUFXQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sTUFBTU8sTUFBTSxFQUFFUCxNQUFNUSxVQUFVLEVBQUVSLE1BQU1TLFVBQVUsRUFBRVYsUUFBUSxDQUFDO0lBQzNGO0lBQ0EsT0FBT0csS0FBS1EsT0FBTyxDQUFDQyxNQUFNLENBQUNYLE9BQU9ZLFNBQVMsQ0FBQztBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy90by1zdHJpbmcuanM/ZWEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZXMgZnJvbSAnLi91dGlsL2Jhc2VzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyhhcnJheSwgZW5jb2RpbmcgPSAndXRmOCcpIHtcbiAgY29uc3QgYmFzZSA9IGJhc2VzW2VuY29kaW5nXTtcbiAgaWYgKCFiYXNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBlbmNvZGluZyBcIiR7IGVuY29kaW5nIH1cImApO1xuICB9XG4gIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi04JykgJiYgZ2xvYmFsVGhpcy5CdWZmZXIgIT0gbnVsbCAmJiBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tICE9IG51bGwpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbShhcnJheS5idWZmZXIsIGFycmF5LmJ5dGVPZmZzZXQsIGFycmF5LmJ5dGVMZW5ndGgpLnRvU3RyaW5nKCd1dGY4Jyk7XG4gIH1cbiAgcmV0dXJuIGJhc2UuZW5jb2Rlci5lbmNvZGUoYXJyYXkpLnN1YnN0cmluZygxKTtcbn0iXSwibmFtZXMiOlsiYmFzZXMiLCJ0b1N0cmluZyIsImFycmF5IiwiZW5jb2RpbmciLCJiYXNlIiwiRXJyb3IiLCJnbG9iYWxUaGlzIiwiQnVmZmVyIiwiZnJvbSIsImJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJieXRlTGVuZ3RoIiwiZW5jb2RlciIsImVuY29kZSIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/to-string.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/util/bases.js":
/*!*********************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/util/bases.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/basics */ \"(ssr)/../node_modules/multiformats/esm/src/basics.js\");\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alloc.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/alloc.js\");\n\n\nfunction createCodec(name, prefix, encode, decode) {\n    return {\n        name,\n        prefix,\n        encoder: {\n            name,\n            prefix,\n            encode\n        },\n        decoder: {\n            decode\n        }\n    };\n}\nconst string = createCodec(\"utf8\", \"u\", (buf)=>{\n    const decoder = new TextDecoder(\"utf8\");\n    return \"u\" + decoder.decode(buf);\n}, (str)=>{\n    const encoder = new TextEncoder();\n    return encoder.encode(str.substring(1));\n});\nconst ascii = createCodec(\"ascii\", \"a\", (buf)=>{\n    let string = \"a\";\n    for(let i = 0; i < buf.length; i++){\n        string += String.fromCharCode(buf[i]);\n    }\n    return string;\n}, (str)=>{\n    str = str.substring(1);\n    const buf = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_1__.allocUnsafe)(str.length);\n    for(let i = 0; i < str.length; i++){\n        buf[i] = str.charCodeAt(i);\n    }\n    return buf;\n});\nconst BASES = {\n    utf8: string,\n    \"utf-8\": string,\n    hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases.base16,\n    latin1: ascii,\n    ascii: ascii,\n    binary: ascii,\n    ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9iYXNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDRjtBQUMxQyxTQUFTRSxZQUFZQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNO0lBQy9DLE9BQU87UUFDTEg7UUFDQUM7UUFDQUcsU0FBUztZQUNQSjtZQUNBQztZQUNBQztRQUNGO1FBQ0FHLFNBQVM7WUFBRUY7UUFBTztJQUNwQjtBQUNGO0FBQ0EsTUFBTUcsU0FBU1AsWUFBWSxRQUFRLEtBQUtRLENBQUFBO0lBQ3RDLE1BQU1GLFVBQVUsSUFBSUcsWUFBWTtJQUNoQyxPQUFPLE1BQU1ILFFBQVFGLE1BQU0sQ0FBQ0k7QUFDOUIsR0FBR0UsQ0FBQUE7SUFDRCxNQUFNTCxVQUFVLElBQUlNO0lBQ3BCLE9BQU9OLFFBQVFGLE1BQU0sQ0FBQ08sSUFBSUUsU0FBUyxDQUFDO0FBQ3RDO0FBQ0EsTUFBTUMsUUFBUWIsWUFBWSxTQUFTLEtBQUtRLENBQUFBO0lBQ3RDLElBQUlELFNBQVM7SUFDYixJQUFLLElBQUlPLElBQUksR0FBR0EsSUFBSU4sSUFBSU8sTUFBTSxFQUFFRCxJQUFLO1FBQ25DUCxVQUFVUyxPQUFPQyxZQUFZLENBQUNULEdBQUcsQ0FBQ00sRUFBRTtJQUN0QztJQUNBLE9BQU9QO0FBQ1QsR0FBR0csQ0FBQUE7SUFDREEsTUFBTUEsSUFBSUUsU0FBUyxDQUFDO0lBQ3BCLE1BQU1KLE1BQU1ULHNEQUFXQSxDQUFDVyxJQUFJSyxNQUFNO0lBQ2xDLElBQUssSUFBSUQsSUFBSSxHQUFHQSxJQUFJSixJQUFJSyxNQUFNLEVBQUVELElBQUs7UUFDbkNOLEdBQUcsQ0FBQ00sRUFBRSxHQUFHSixJQUFJUSxVQUFVLENBQUNKO0lBQzFCO0lBQ0EsT0FBT047QUFDVDtBQUNBLE1BQU1XLFFBQVE7SUFDWkMsTUFBTWI7SUFDTixTQUFTQTtJQUNUYyxLQUFLdkIsc0RBQUtBLENBQUN3QixNQUFNO0lBQ2pCQyxRQUFRVjtJQUNSQSxPQUFPQTtJQUNQVyxRQUFRWDtJQUNSLEdBQUdmLHNEQUFLO0FBQ1Y7QUFDQSxpRUFBZXFCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9iYXNlcy5qcz9iNzczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2VzIH0gZnJvbSAnbXVsdGlmb3JtYXRzL2Jhc2ljcyc7XG5pbXBvcnQgeyBhbGxvY1Vuc2FmZSB9IGZyb20gJy4uL2FsbG9jLmpzJztcbmZ1bmN0aW9uIGNyZWF0ZUNvZGVjKG5hbWUsIHByZWZpeCwgZW5jb2RlLCBkZWNvZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHByZWZpeCxcbiAgICBlbmNvZGVyOiB7XG4gICAgICBuYW1lLFxuICAgICAgcHJlZml4LFxuICAgICAgZW5jb2RlXG4gICAgfSxcbiAgICBkZWNvZGVyOiB7IGRlY29kZSB9XG4gIH07XG59XG5jb25zdCBzdHJpbmcgPSBjcmVhdGVDb2RlYygndXRmOCcsICd1JywgYnVmID0+IHtcbiAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmOCcpO1xuICByZXR1cm4gJ3UnICsgZGVjb2Rlci5kZWNvZGUoYnVmKTtcbn0sIHN0ciA9PiB7XG4gIGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgcmV0dXJuIGVuY29kZXIuZW5jb2RlKHN0ci5zdWJzdHJpbmcoMSkpO1xufSk7XG5jb25zdCBhc2NpaSA9IGNyZWF0ZUNvZGVjKCdhc2NpaScsICdhJywgYnVmID0+IHtcbiAgbGV0IHN0cmluZyA9ICdhJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59LCBzdHIgPT4ge1xuICBzdHIgPSBzdHIuc3Vic3RyaW5nKDEpO1xuICBjb25zdCBidWYgPSBhbGxvY1Vuc2FmZShzdHIubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBidWZbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnVmO1xufSk7XG5jb25zdCBCQVNFUyA9IHtcbiAgdXRmODogc3RyaW5nLFxuICAndXRmLTgnOiBzdHJpbmcsXG4gIGhleDogYmFzZXMuYmFzZTE2LFxuICBsYXRpbjE6IGFzY2lpLFxuICBhc2NpaTogYXNjaWksXG4gIGJpbmFyeTogYXNjaWksXG4gIC4uLmJhc2VzXG59O1xuZXhwb3J0IGRlZmF1bHQgQkFTRVM7Il0sIm5hbWVzIjpbImJhc2VzIiwiYWxsb2NVbnNhZmUiLCJjcmVhdGVDb2RlYyIsIm5hbWUiLCJwcmVmaXgiLCJlbmNvZGUiLCJkZWNvZGUiLCJlbmNvZGVyIiwiZGVjb2RlciIsInN0cmluZyIsImJ1ZiIsIlRleHREZWNvZGVyIiwic3RyIiwiVGV4dEVuY29kZXIiLCJzdWJzdHJpbmciLCJhc2NpaSIsImkiLCJsZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjaGFyQ29kZUF0IiwiQkFTRVMiLCJ1dGY4IiwiaGV4IiwiYmFzZTE2IiwibGF0aW4xIiwiYmluYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/util/bases.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/xor.js":
/*!**************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/xor.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   xor: () => (/* binding */ xor)\n/* harmony export */ });\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/alloc.js\");\n\nfunction xor(a, b) {\n    if (a.length !== b.length) {\n        throw new Error(\"Inputs should have the same length\");\n    }\n    const result = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(a.length);\n    for(let i = 0; i < a.length; i++){\n        result[i] = a[i] ^ b[i];\n    }\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMveG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ2xDLFNBQVNDLElBQUlDLENBQUMsRUFBRUMsQ0FBQztJQUN0QixJQUFJRCxFQUFFRSxNQUFNLEtBQUtELEVBQUVDLE1BQU0sRUFBRTtRQUN6QixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxNQUFNQyxTQUFTTixzREFBV0EsQ0FBQ0UsRUFBRUUsTUFBTTtJQUNuQyxJQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUwsRUFBRUUsTUFBTSxFQUFFRyxJQUFLO1FBQ2pDRCxNQUFNLENBQUNDLEVBQUUsR0FBR0wsQ0FBQyxDQUFDSyxFQUFFLEdBQUdKLENBQUMsQ0FBQ0ksRUFBRTtJQUN6QjtJQUNBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMveG9yLmpzPzIzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsb2NVbnNhZmUgfSBmcm9tICcuL2FsbG9jLmpzJztcbmV4cG9ydCBmdW5jdGlvbiB4b3IoYSwgYikge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dHMgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbGVuZ3RoJyk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gYWxsb2NVbnNhZmUoYS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBhW2ldIF4gYltpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSJdLCJuYW1lcyI6WyJhbGxvY1Vuc2FmZSIsInhvciIsImEiLCJiIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXN1bHQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/xor.js\n");

/***/ })

};
;
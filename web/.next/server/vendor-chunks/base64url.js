/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/base64url";
exports.ids = ["vendor-chunks/base64url"];
exports.modules = {

/***/ "(ssr)/../node_modules/base64url/dist/base64url.js":
/*!***************************************************!*\
  !*** ../node_modules/base64url/dist/base64url.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar pad_string_1 = __webpack_require__(/*! ./pad-string */ \"(ssr)/../node_modules/base64url/dist/pad-string.js\");\nfunction encode(input, encoding) {\n    if (encoding === void 0) {\n        encoding = \"utf8\";\n    }\n    if (Buffer.isBuffer(input)) {\n        return fromBase64(input.toString(\"base64\"));\n    }\n    return fromBase64(Buffer.from(input, encoding).toString(\"base64\"));\n}\n;\nfunction decode(base64url, encoding) {\n    if (encoding === void 0) {\n        encoding = \"utf8\";\n    }\n    return Buffer.from(toBase64(base64url), \"base64\").toString(encoding);\n}\nfunction toBase64(base64url) {\n    base64url = base64url.toString();\n    return pad_string_1.default(base64url).replace(/\\-/g, \"+\").replace(/_/g, \"/\");\n}\nfunction fromBase64(base64) {\n    return base64.replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n}\nfunction toBuffer(base64url) {\n    return Buffer.from(toBase64(base64url), \"base64\");\n}\nvar base64url = encode;\nbase64url.encode = encode;\nbase64url.decode = decode;\nbase64url.toBase64 = toBase64;\nbase64url.fromBase64 = fromBase64;\nbase64url.toBuffer = toBuffer;\nexports[\"default\"] = base64url;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9kaXN0L2Jhc2U2NHVybC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxJQUFJQyxlQUFlQyxtQkFBT0EsQ0FBQyx3RUFBYztBQUN6QyxTQUFTQyxPQUFPQyxLQUFLLEVBQUVDLFFBQVE7SUFDM0IsSUFBSUEsYUFBYSxLQUFLLEdBQUc7UUFBRUEsV0FBVztJQUFRO0lBQzlDLElBQUlDLE9BQU9DLFFBQVEsQ0FBQ0gsUUFBUTtRQUN4QixPQUFPSSxXQUFXSixNQUFNSyxRQUFRLENBQUM7SUFDckM7SUFDQSxPQUFPRCxXQUFXRixPQUFPSSxJQUFJLENBQUNOLE9BQU9DLFVBQVVJLFFBQVEsQ0FBQztBQUM1RDs7QUFFQSxTQUFTRSxPQUFPQyxTQUFTLEVBQUVQLFFBQVE7SUFDL0IsSUFBSUEsYUFBYSxLQUFLLEdBQUc7UUFBRUEsV0FBVztJQUFRO0lBQzlDLE9BQU9DLE9BQU9JLElBQUksQ0FBQ0csU0FBU0QsWUFBWSxVQUFVSCxRQUFRLENBQUNKO0FBQy9EO0FBQ0EsU0FBU1EsU0FBU0QsU0FBUztJQUN2QkEsWUFBWUEsVUFBVUgsUUFBUTtJQUM5QixPQUFPUixhQUFhYSxPQUFPLENBQUNGLFdBQ3ZCRyxPQUFPLENBQUMsT0FBTyxLQUNmQSxPQUFPLENBQUMsTUFBTTtBQUN2QjtBQUNBLFNBQVNQLFdBQVdRLE1BQU07SUFDdEIsT0FBT0EsT0FDRkQsT0FBTyxDQUFDLE1BQU0sSUFDZEEsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLE9BQU87QUFDeEI7QUFDQSxTQUFTRSxTQUFTTCxTQUFTO0lBQ3ZCLE9BQU9OLE9BQU9JLElBQUksQ0FBQ0csU0FBU0QsWUFBWTtBQUM1QztBQUNBLElBQUlBLFlBQVlUO0FBQ2hCUyxVQUFVVCxNQUFNLEdBQUdBO0FBQ25CUyxVQUFVRCxNQUFNLEdBQUdBO0FBQ25CQyxVQUFVQyxRQUFRLEdBQUdBO0FBQ3JCRCxVQUFVSixVQUFVLEdBQUdBO0FBQ3ZCSSxVQUFVSyxRQUFRLEdBQUdBO0FBQ3JCbEIsa0JBQWUsR0FBR2EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9kaXN0L2Jhc2U2NHVybC5qcz9kYjRiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBhZF9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3BhZC1zdHJpbmdcIik7XG5mdW5jdGlvbiBlbmNvZGUoaW5wdXQsIGVuY29kaW5nKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSB2b2lkIDApIHsgZW5jb2RpbmcgPSBcInV0ZjhcIjsgfVxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBmcm9tQmFzZTY0KGlucHV0LnRvU3RyaW5nKFwiYmFzZTY0XCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21CYXNlNjQoQnVmZmVyLmZyb20oaW5wdXQsIGVuY29kaW5nKS50b1N0cmluZyhcImJhc2U2NFwiKSk7XG59XG47XG5mdW5jdGlvbiBkZWNvZGUoYmFzZTY0dXJsLCBlbmNvZGluZykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gdm9pZCAwKSB7IGVuY29kaW5nID0gXCJ1dGY4XCI7IH1cbiAgICByZXR1cm4gQnVmZmVyLmZyb20odG9CYXNlNjQoYmFzZTY0dXJsKSwgXCJiYXNlNjRcIikudG9TdHJpbmcoZW5jb2RpbmcpO1xufVxuZnVuY3Rpb24gdG9CYXNlNjQoYmFzZTY0dXJsKSB7XG4gICAgYmFzZTY0dXJsID0gYmFzZTY0dXJsLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHBhZF9zdHJpbmdfMS5kZWZhdWx0KGJhc2U2NHVybClcbiAgICAgICAgLnJlcGxhY2UoL1xcLS9nLCBcIitcIilcbiAgICAgICAgLnJlcGxhY2UoL18vZywgXCIvXCIpO1xufVxuZnVuY3Rpb24gZnJvbUJhc2U2NChiYXNlNjQpIHtcbiAgICByZXR1cm4gYmFzZTY0XG4gICAgICAgIC5yZXBsYWNlKC89L2csIFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXCsvZywgXCItXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xufVxuZnVuY3Rpb24gdG9CdWZmZXIoYmFzZTY0dXJsKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRvQmFzZTY0KGJhc2U2NHVybCksIFwiYmFzZTY0XCIpO1xufVxudmFyIGJhc2U2NHVybCA9IGVuY29kZTtcbmJhc2U2NHVybC5lbmNvZGUgPSBlbmNvZGU7XG5iYXNlNjR1cmwuZGVjb2RlID0gZGVjb2RlO1xuYmFzZTY0dXJsLnRvQmFzZTY0ID0gdG9CYXNlNjQ7XG5iYXNlNjR1cmwuZnJvbUJhc2U2NCA9IGZyb21CYXNlNjQ7XG5iYXNlNjR1cmwudG9CdWZmZXIgPSB0b0J1ZmZlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2U2NHVybDtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInBhZF9zdHJpbmdfMSIsInJlcXVpcmUiLCJlbmNvZGUiLCJpbnB1dCIsImVuY29kaW5nIiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJmcm9tQmFzZTY0IiwidG9TdHJpbmciLCJmcm9tIiwiZGVjb2RlIiwiYmFzZTY0dXJsIiwidG9CYXNlNjQiLCJkZWZhdWx0IiwicmVwbGFjZSIsImJhc2U2NCIsInRvQnVmZmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/base64url/dist/base64url.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/base64url/dist/pad-string.js":
/*!****************************************************!*\
  !*** ../node_modules/base64url/dist/pad-string.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nfunction padString(input) {\n    var segmentLength = 4;\n    var stringLength = input.length;\n    var diff = stringLength % segmentLength;\n    if (!diff) {\n        return input;\n    }\n    var position = stringLength;\n    var padLength = segmentLength - diff;\n    var paddedStringLength = stringLength + padLength;\n    var buffer = Buffer.alloc(paddedStringLength);\n    buffer.write(input);\n    while(padLength--){\n        buffer.write(\"=\", position++);\n    }\n    return buffer.toString();\n}\nexports[\"default\"] = padString;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9kaXN0L3BhZC1zdHJpbmcuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0QsU0FBU0MsVUFBVUMsS0FBSztJQUNwQixJQUFJQyxnQkFBZ0I7SUFDcEIsSUFBSUMsZUFBZUYsTUFBTUcsTUFBTTtJQUMvQixJQUFJQyxPQUFPRixlQUFlRDtJQUMxQixJQUFJLENBQUNHLE1BQU07UUFDUCxPQUFPSjtJQUNYO0lBQ0EsSUFBSUssV0FBV0g7SUFDZixJQUFJSSxZQUFZTCxnQkFBZ0JHO0lBQ2hDLElBQUlHLHFCQUFxQkwsZUFBZUk7SUFDeEMsSUFBSUUsU0FBU0MsT0FBT0MsS0FBSyxDQUFDSDtJQUMxQkMsT0FBT0csS0FBSyxDQUFDWDtJQUNiLE1BQU9NLFlBQWE7UUFDaEJFLE9BQU9HLEtBQUssQ0FBQyxLQUFLTjtJQUN0QjtJQUNBLE9BQU9HLE9BQU9JLFFBQVE7QUFDMUI7QUFDQWYsa0JBQWUsR0FBR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9kaXN0L3BhZC1zdHJpbmcuanM/MmE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHBhZFN0cmluZyhpbnB1dCkge1xuICAgIHZhciBzZWdtZW50TGVuZ3RoID0gNDtcbiAgICB2YXIgc3RyaW5nTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHZhciBkaWZmID0gc3RyaW5nTGVuZ3RoICUgc2VnbWVudExlbmd0aDtcbiAgICBpZiAoIWRpZmYpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICB2YXIgcG9zaXRpb24gPSBzdHJpbmdMZW5ndGg7XG4gICAgdmFyIHBhZExlbmd0aCA9IHNlZ21lbnRMZW5ndGggLSBkaWZmO1xuICAgIHZhciBwYWRkZWRTdHJpbmdMZW5ndGggPSBzdHJpbmdMZW5ndGggKyBwYWRMZW5ndGg7XG4gICAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvYyhwYWRkZWRTdHJpbmdMZW5ndGgpO1xuICAgIGJ1ZmZlci53cml0ZShpbnB1dCk7XG4gICAgd2hpbGUgKHBhZExlbmd0aC0tKSB7XG4gICAgICAgIGJ1ZmZlci53cml0ZShcIj1cIiwgcG9zaXRpb24rKyk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHBhZFN0cmluZztcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInBhZFN0cmluZyIsImlucHV0Iiwic2VnbWVudExlbmd0aCIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsImRpZmYiLCJwb3NpdGlvbiIsInBhZExlbmd0aCIsInBhZGRlZFN0cmluZ0xlbmd0aCIsImJ1ZmZlciIsIkJ1ZmZlciIsImFsbG9jIiwid3JpdGUiLCJ0b1N0cmluZyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/base64url/dist/pad-string.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/base64url/index.js":
/*!******************************************!*\
  !*** ../node_modules/base64url/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/base64url */ \"(ssr)/../node_modules/base64url/dist/base64url.js\")[\"default\"];\nmodule.exports[\"default\"] = module.exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NHVybC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQUEsNEhBQW9EO0FBQ3BEQSx5QkFBc0IsR0FBR0EsT0FBT0MsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFzZTY0dXJsL2luZGV4LmpzPzgyYzAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvYmFzZTY0dXJsJykuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/base64url/index.js\n");

/***/ })

};
;
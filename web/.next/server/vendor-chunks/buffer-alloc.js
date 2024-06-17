/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-alloc";
exports.ids = ["vendor-chunks/buffer-alloc"];
exports.modules = {

/***/ "(ssr)/../node_modules/buffer-alloc/index.js":
/*!*********************************************!*\
  !*** ../node_modules/buffer-alloc/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bufferFill = __webpack_require__(/*! buffer-fill */ \"(ssr)/../node_modules/buffer-fill/index.js\");\nvar allocUnsafe = __webpack_require__(/*! buffer-alloc-unsafe */ \"(ssr)/../node_modules/buffer-alloc-unsafe/index.js\");\nmodule.exports = function alloc(size, fill, encoding) {\n    if (typeof size !== \"number\") {\n        throw new TypeError('\"size\" argument must be a number');\n    }\n    if (size < 0) {\n        throw new RangeError('\"size\" argument must not be negative');\n    }\n    if (Buffer.alloc) {\n        return Buffer.alloc(size, fill, encoding);\n    }\n    var buffer = allocUnsafe(size);\n    if (size === 0) {\n        return buffer;\n    }\n    if (fill === undefined) {\n        return bufferFill(buffer, 0);\n    }\n    if (typeof encoding !== \"string\") {\n        encoding = undefined;\n    }\n    return bufferFill(buffer, fill, encoding);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci1hbGxvYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxhQUFhQyxtQkFBT0EsQ0FBQztBQUN6QixJQUFJQyxjQUFjRCxtQkFBT0EsQ0FBQztBQUUxQkUsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLE1BQU9DLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ25ELElBQUksT0FBT0YsU0FBUyxVQUFVO1FBQzVCLE1BQU0sSUFBSUcsVUFBVTtJQUN0QjtJQUVBLElBQUlILE9BQU8sR0FBRztRQUNaLE1BQU0sSUFBSUksV0FBVztJQUN2QjtJQUVBLElBQUlDLE9BQU9OLEtBQUssRUFBRTtRQUNoQixPQUFPTSxPQUFPTixLQUFLLENBQUNDLE1BQU1DLE1BQU1DO0lBQ2xDO0lBRUEsSUFBSUksU0FBU1YsWUFBWUk7SUFFekIsSUFBSUEsU0FBUyxHQUFHO1FBQ2QsT0FBT007SUFDVDtJQUVBLElBQUlMLFNBQVNNLFdBQVc7UUFDdEIsT0FBT2IsV0FBV1ksUUFBUTtJQUM1QjtJQUVBLElBQUksT0FBT0osYUFBYSxVQUFVO1FBQ2hDQSxXQUFXSztJQUNiO0lBRUEsT0FBT2IsV0FBV1ksUUFBUUwsTUFBTUM7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci1hbGxvYy9pbmRleC5qcz84Y2NlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBidWZmZXJGaWxsID0gcmVxdWlyZSgnYnVmZmVyLWZpbGwnKVxudmFyIGFsbG9jVW5zYWZlID0gcmVxdWlyZSgnYnVmZmVyLWFsbG9jLXVuc2FmZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cblxuICBpZiAoQnVmZmVyLmFsbG9jKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYyhzaXplLCBmaWxsLCBlbmNvZGluZylcbiAgfVxuXG4gIHZhciBidWZmZXIgPSBhbGxvY1Vuc2FmZShzaXplKVxuXG4gIGlmIChzaXplID09PSAwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlclxuICB9XG5cbiAgaWYgKGZpbGwgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBidWZmZXJGaWxsKGJ1ZmZlciwgMClcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBidWZmZXJGaWxsKGJ1ZmZlciwgZmlsbCwgZW5jb2RpbmcpXG59XG4iXSwibmFtZXMiOlsiYnVmZmVyRmlsbCIsInJlcXVpcmUiLCJhbGxvY1Vuc2FmZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhbGxvYyIsInNpemUiLCJmaWxsIiwiZW5jb2RpbmciLCJUeXBlRXJyb3IiLCJSYW5nZUVycm9yIiwiQnVmZmVyIiwiYnVmZmVyIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/buffer-alloc/index.js\n");

/***/ })

};
;
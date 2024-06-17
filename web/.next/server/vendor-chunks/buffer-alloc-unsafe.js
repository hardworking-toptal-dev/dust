/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-alloc-unsafe";
exports.ids = ["vendor-chunks/buffer-alloc-unsafe"];
exports.modules = {

/***/ "(ssr)/../node_modules/buffer-alloc-unsafe/index.js":
/*!****************************************************!*\
  !*** ../node_modules/buffer-alloc-unsafe/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("function allocUnsafe(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError('\"size\" argument must be a number');\n    }\n    if (size < 0) {\n        throw new RangeError('\"size\" argument must not be negative');\n    }\n    if (Buffer.allocUnsafe) {\n        return Buffer.allocUnsafe(size);\n    } else {\n        return new Buffer(size);\n    }\n}\nmodule.exports = allocUnsafe;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci1hbGxvYy11bnNhZmUvaW5kZXguanM/ZmRlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhbGxvY1Vuc2FmZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5hbGxvY1Vuc2FmZSkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzaXplKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWxsb2NVbnNhZmVcbiJdLCJuYW1lcyI6WyJhbGxvY1Vuc2FmZSIsInNpemUiLCJUeXBlRXJyb3IiLCJSYW5nZUVycm9yIiwiQnVmZmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsWUFBYUMsSUFBSTtJQUN4QixJQUFJLE9BQU9BLFNBQVMsVUFBVTtRQUM1QixNQUFNLElBQUlDLFVBQVU7SUFDdEI7SUFFQSxJQUFJRCxPQUFPLEdBQUc7UUFDWixNQUFNLElBQUlFLFdBQVc7SUFDdkI7SUFFQSxJQUFJQyxPQUFPSixXQUFXLEVBQUU7UUFDdEIsT0FBT0ksT0FBT0osV0FBVyxDQUFDQztJQUM1QixPQUFPO1FBQ0wsT0FBTyxJQUFJRyxPQUFPSDtJQUNwQjtBQUNGO0FBRUFJLE9BQU9DLE9BQU8sR0FBR04iLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci1hbGxvYy11bnNhZmUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/buffer-alloc-unsafe/index.js\n");

/***/ })

};
;
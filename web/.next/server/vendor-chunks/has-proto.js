"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(ssr)/../node_modules/has-proto/index.js":
/*!******************************************!*\
  !*** ../node_modules/has-proto/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\nvar test = {\n    __proto__: null,\n    foo: {}\n};\nvar $Object = Object;\n/** @type {import('.')} */ module.exports = function hasProto() {\n    // @ts-expect-error: TS errors on an inherited property for some reason\n    return ({\n        __proto__: test\n    }).foo === test.foo && !(test instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2hhcy1wcm90by9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLE9BQU87SUFDVkMsV0FBVztJQUNYQyxLQUFLLENBQUM7QUFDUDtBQUVBLElBQUlDLFVBQVVDO0FBRWQsd0JBQXdCLEdBQ3hCQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0M7SUFDekIsdUVBQXVFO0lBQ3ZFLE9BQU87UUFBRU4sV0FBV0Q7SUFBSyxHQUFFRSxHQUFHLEtBQUtGLEtBQUtFLEdBQUcsSUFDdkMsQ0FBRUYsQ0FBQUEsZ0JBQWdCRyxPQUFNO0FBQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanM/NDY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB0ZXN0ID0ge1xuXHRfX3Byb3RvX186IG51bGwsXG5cdGZvbzoge31cbn07XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNQcm90bygpIHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvcjogVFMgZXJyb3JzIG9uIGFuIGluaGVyaXRlZCBwcm9wZXJ0eSBmb3Igc29tZSByZWFzb25cblx0cmV0dXJuIHsgX19wcm90b19fOiB0ZXN0IH0uZm9vID09PSB0ZXN0LmZvb1xuXHRcdCYmICEodGVzdCBpbnN0YW5jZW9mICRPYmplY3QpO1xufTtcbiJdLCJuYW1lcyI6WyJ0ZXN0IiwiX19wcm90b19fIiwiZm9vIiwiJE9iamVjdCIsIk9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJoYXNQcm90byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/has-proto/index.js\n");

/***/ })

};
;
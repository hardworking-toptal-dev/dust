"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jsonify";
exports.ids = ["vendor-chunks/jsonify"];
exports.modules = {

/***/ "(ssr)/../node_modules/jsonify/index.js":
/*!****************************************!*\
  !*** ../node_modules/jsonify/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.parse = __webpack_require__(/*! ./lib/parse */ \"(ssr)/../node_modules/jsonify/lib/parse.js\");\nexports.stringify = __webpack_require__(/*! ./lib/stringify */ \"(ssr)/../node_modules/jsonify/lib/stringify.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2pzb25pZnkvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsb0dBQXdCO0FBQ3hCQSxnSEFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2pzb25pZnkvaW5kZXguanM/NTcyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2xpYi9wYXJzZScpO1xuZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2xpYi9zdHJpbmdpZnknKTtcbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwicGFyc2UiLCJyZXF1aXJlIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/jsonify/index.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/jsonify/lib/parse.js":
/*!********************************************!*\
  !*** ../node_modules/jsonify/lib/parse.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nvar at; // The index of the current character\nvar ch; // The current character\nvar escapee = {\n    '\"': '\"',\n    \"\\\\\": \"\\\\\",\n    \"/\": \"/\",\n    b: \"\\b\",\n    f: \"\\f\",\n    n: \"\\n\",\n    r: \"\\r\",\n    t: \"\t\"\n};\nvar text;\n// Call error when something is wrong.\nfunction error(m) {\n    throw {\n        name: \"SyntaxError\",\n        message: m,\n        at: at,\n        text: text\n    };\n}\nfunction next(c) {\n    // If a c parameter is provided, verify that it matches the current character.\n    if (c && c !== ch) {\n        error(\"Expected '\" + c + \"' instead of '\" + ch + \"'\");\n    }\n    // Get the next character. When there are no more characters, return the empty string.\n    ch = text.charAt(at);\n    at += 1;\n    return ch;\n}\nfunction number() {\n    // Parse a number value.\n    var num;\n    var str = \"\";\n    if (ch === \"-\") {\n        str = \"-\";\n        next(\"-\");\n    }\n    while(ch >= \"0\" && ch <= \"9\"){\n        str += ch;\n        next();\n    }\n    if (ch === \".\") {\n        str += \".\";\n        while(next() && ch >= \"0\" && ch <= \"9\"){\n            str += ch;\n        }\n    }\n    if (ch === \"e\" || ch === \"E\") {\n        str += ch;\n        next();\n        if (ch === \"-\" || ch === \"+\") {\n            str += ch;\n            next();\n        }\n        while(ch >= \"0\" && ch <= \"9\"){\n            str += ch;\n            next();\n        }\n    }\n    num = Number(str);\n    if (!isFinite(num)) {\n        error(\"Bad number\");\n    }\n    return num;\n}\nfunction string() {\n    // Parse a string value.\n    var hex;\n    var i;\n    var str = \"\";\n    var uffff;\n    // When parsing for string values, we must look for \" and \\ characters.\n    if (ch === '\"') {\n        while(next()){\n            if (ch === '\"') {\n                next();\n                return str;\n            } else if (ch === \"\\\\\") {\n                next();\n                if (ch === \"u\") {\n                    uffff = 0;\n                    for(i = 0; i < 4; i += 1){\n                        hex = parseInt(next(), 16);\n                        if (!isFinite(hex)) {\n                            break;\n                        }\n                        uffff = uffff * 16 + hex;\n                    }\n                    str += String.fromCharCode(uffff);\n                } else if (typeof escapee[ch] === \"string\") {\n                    str += escapee[ch];\n                } else {\n                    break;\n                }\n            } else {\n                str += ch;\n            }\n        }\n    }\n    error(\"Bad string\");\n}\n// Skip whitespace.\nfunction white() {\n    while(ch && ch <= \" \"){\n        next();\n    }\n}\n// true, false, or null.\nfunction word() {\n    switch(ch){\n        case \"t\":\n            next(\"t\");\n            next(\"r\");\n            next(\"u\");\n            next(\"e\");\n            return true;\n        case \"f\":\n            next(\"f\");\n            next(\"a\");\n            next(\"l\");\n            next(\"s\");\n            next(\"e\");\n            return false;\n        case \"n\":\n            next(\"n\");\n            next(\"u\");\n            next(\"l\");\n            next(\"l\");\n            return null;\n        default:\n            error(\"Unexpected '\" + ch + \"'\");\n    }\n}\n// Parse an array value.\nfunction array() {\n    var arr = [];\n    if (ch === \"[\") {\n        next(\"[\");\n        white();\n        if (ch === \"]\") {\n            next(\"]\");\n            return arr; // empty array\n        }\n        while(ch){\n            arr.push(value()); // eslint-disable-line no-use-before-define\n            white();\n            if (ch === \"]\") {\n                next(\"]\");\n                return arr;\n            }\n            next(\",\");\n            white();\n        }\n    }\n    error(\"Bad array\");\n}\n// Parse an object value.\nfunction object() {\n    var key;\n    var obj = {};\n    if (ch === \"{\") {\n        next(\"{\");\n        white();\n        if (ch === \"}\") {\n            next(\"}\");\n            return obj; // empty object\n        }\n        while(ch){\n            key = string();\n            white();\n            next(\":\");\n            if (Object.prototype.hasOwnProperty.call(obj, key)) {\n                error('Duplicate key \"' + key + '\"');\n            }\n            obj[key] = value(); // eslint-disable-line no-use-before-define\n            white();\n            if (ch === \"}\") {\n                next(\"}\");\n                return obj;\n            }\n            next(\",\");\n            white();\n        }\n    }\n    error(\"Bad object\");\n}\n// Parse a JSON value. It could be an object, an array, a string, a number, or a word.\nfunction value() {\n    white();\n    switch(ch){\n        case \"{\":\n            return object();\n        case \"[\":\n            return array();\n        case '\"':\n            return string();\n        case \"-\":\n            return number();\n        default:\n            return ch >= \"0\" && ch <= \"9\" ? number() : word();\n    }\n}\n// Return the json_parse function. It will have access to all of the above functions and variables.\nmodule.exports = function(source, reviver) {\n    var result;\n    text = source;\n    at = 0;\n    ch = \" \";\n    result = value();\n    white();\n    if (ch) {\n        error(\"Syntax error\");\n    }\n    // If there is a reviver function, we recursively walk the new structure,\n    // passing each name/value pair to the reviver function for possible\n    // transformation, starting with a temporary root object that holds the result\n    // in an empty key. If there is not a reviver function, we simply return the\n    // result.\n    return typeof reviver === \"function\" ? function walk(holder, key) {\n        var k;\n        var v;\n        var val = holder[key];\n        if (val && typeof val === \"object\") {\n            for(k in value){\n                if (Object.prototype.hasOwnProperty.call(val, k)) {\n                    v = walk(val, k);\n                    if (typeof v === \"undefined\") {\n                        delete val[k];\n                    } else {\n                        val[k] = v;\n                    }\n                }\n            }\n        }\n        return reviver.call(holder, key, val);\n    }({\n        \"\": result\n    }, \"\") : result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2pzb25pZnkvbGliL3BhcnNlLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsSUFBSSxxQ0FBcUM7QUFDN0MsSUFBSUMsSUFBSSx3QkFBd0I7QUFDaEMsSUFBSUMsVUFBVTtJQUNiLEtBQUs7SUFDTCxNQUFNO0lBQ04sS0FBSztJQUNMQyxHQUFHO0lBQ0hDLEdBQUc7SUFDSEMsR0FBRztJQUNIQyxHQUFHO0lBQ0hDLEdBQUc7QUFDSjtBQUNBLElBQUlDO0FBRUosc0NBQXNDO0FBQ3RDLFNBQVNDLE1BQU1DLENBQUM7SUFDZixNQUFNO1FBQ0xDLE1BQU07UUFDTkMsU0FBU0Y7UUFDVFYsSUFBSUE7UUFDSlEsTUFBTUE7SUFDUDtBQUNEO0FBRUEsU0FBU0ssS0FBS0MsQ0FBQztJQUNkLDhFQUE4RTtJQUM5RSxJQUFJQSxLQUFLQSxNQUFNYixJQUFJO1FBQ2xCUSxNQUFNLGVBQWVLLElBQUksbUJBQW1CYixLQUFLO0lBQ2xEO0lBRUEsc0ZBQXNGO0lBRXRGQSxLQUFLTyxLQUFLTyxNQUFNLENBQUNmO0lBQ2pCQSxNQUFNO0lBQ04sT0FBT0M7QUFDUjtBQUVBLFNBQVNlO0lBQ1Isd0JBQXdCO0lBQ3hCLElBQUlDO0lBQ0osSUFBSUMsTUFBTTtJQUVWLElBQUlqQixPQUFPLEtBQUs7UUFDZmlCLE1BQU07UUFDTkwsS0FBSztJQUNOO0lBQ0EsTUFBT1osTUFBTSxPQUFPQSxNQUFNLElBQUs7UUFDOUJpQixPQUFPakI7UUFDUFk7SUFDRDtJQUNBLElBQUlaLE9BQU8sS0FBSztRQUNmaUIsT0FBTztRQUNQLE1BQU9MLFVBQVVaLE1BQU0sT0FBT0EsTUFBTSxJQUFLO1lBQ3hDaUIsT0FBT2pCO1FBQ1I7SUFDRDtJQUNBLElBQUlBLE9BQU8sT0FBT0EsT0FBTyxLQUFLO1FBQzdCaUIsT0FBT2pCO1FBQ1BZO1FBQ0EsSUFBSVosT0FBTyxPQUFPQSxPQUFPLEtBQUs7WUFDN0JpQixPQUFPakI7WUFDUFk7UUFDRDtRQUNBLE1BQU9aLE1BQU0sT0FBT0EsTUFBTSxJQUFLO1lBQzlCaUIsT0FBT2pCO1lBQ1BZO1FBQ0Q7SUFDRDtJQUNBSSxNQUFNRSxPQUFPRDtJQUNiLElBQUksQ0FBQ0UsU0FBU0gsTUFBTTtRQUNuQlIsTUFBTTtJQUNQO0lBQ0EsT0FBT1E7QUFDUjtBQUVBLFNBQVNJO0lBQ1Isd0JBQXdCO0lBQ3hCLElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJTCxNQUFNO0lBQ1YsSUFBSU07SUFFSix1RUFBdUU7SUFDdkUsSUFBSXZCLE9BQU8sS0FBSztRQUNmLE1BQU9ZLE9BQVE7WUFDZCxJQUFJWixPQUFPLEtBQUs7Z0JBQ2ZZO2dCQUNBLE9BQU9LO1lBQ1IsT0FBTyxJQUFJakIsT0FBTyxNQUFNO2dCQUN2Qlk7Z0JBQ0EsSUFBSVosT0FBTyxLQUFLO29CQUNmdUIsUUFBUTtvQkFDUixJQUFLRCxJQUFJLEdBQUdBLElBQUksR0FBR0EsS0FBSyxFQUFHO3dCQUMxQkQsTUFBTUcsU0FBU1osUUFBUTt3QkFDdkIsSUFBSSxDQUFDTyxTQUFTRSxNQUFNOzRCQUNuQjt3QkFDRDt3QkFDQUUsUUFBUSxRQUFTLEtBQU1GO29CQUN4QjtvQkFDQUosT0FBT1EsT0FBT0MsWUFBWSxDQUFDSDtnQkFDNUIsT0FBTyxJQUFJLE9BQU90QixPQUFPLENBQUNELEdBQUcsS0FBSyxVQUFVO29CQUMzQ2lCLE9BQU9oQixPQUFPLENBQUNELEdBQUc7Z0JBQ25CLE9BQU87b0JBQ047Z0JBQ0Q7WUFDRCxPQUFPO2dCQUNOaUIsT0FBT2pCO1lBQ1I7UUFDRDtJQUNEO0lBQ0FRLE1BQU07QUFDUDtBQUVBLG1CQUFtQjtBQUNuQixTQUFTbUI7SUFDUixNQUFPM0IsTUFBTUEsTUFBTSxJQUFLO1FBQ3ZCWTtJQUNEO0FBQ0Q7QUFFQSx3QkFBd0I7QUFDeEIsU0FBU2dCO0lBQ1IsT0FBUTVCO1FBQ1AsS0FBSztZQUNKWSxLQUFLO1lBQ0xBLEtBQUs7WUFDTEEsS0FBSztZQUNMQSxLQUFLO1lBQ0wsT0FBTztRQUNSLEtBQUs7WUFDSkEsS0FBSztZQUNMQSxLQUFLO1lBQ0xBLEtBQUs7WUFDTEEsS0FBSztZQUNMQSxLQUFLO1lBQ0wsT0FBTztRQUNSLEtBQUs7WUFDSkEsS0FBSztZQUNMQSxLQUFLO1lBQ0xBLEtBQUs7WUFDTEEsS0FBSztZQUNMLE9BQU87UUFDUjtZQUNDSixNQUFNLGlCQUFpQlIsS0FBSztJQUM5QjtBQUNEO0FBRUEsd0JBQXdCO0FBQ3hCLFNBQVM2QjtJQUNSLElBQUlDLE1BQU0sRUFBRTtJQUVaLElBQUk5QixPQUFPLEtBQUs7UUFDZlksS0FBSztRQUNMZTtRQUNBLElBQUkzQixPQUFPLEtBQUs7WUFDZlksS0FBSztZQUNMLE9BQU9rQixLQUFLLGNBQWM7UUFDM0I7UUFDQSxNQUFPOUIsR0FBSTtZQUNWOEIsSUFBSUMsSUFBSSxDQUFDQyxVQUFVLDJDQUEyQztZQUM5REw7WUFDQSxJQUFJM0IsT0FBTyxLQUFLO2dCQUNmWSxLQUFLO2dCQUNMLE9BQU9rQjtZQUNSO1lBQ0FsQixLQUFLO1lBQ0xlO1FBQ0Q7SUFDRDtJQUNBbkIsTUFBTTtBQUNQO0FBRUEseUJBQXlCO0FBQ3pCLFNBQVN5QjtJQUNSLElBQUlDO0lBQ0osSUFBSUMsTUFBTSxDQUFDO0lBRVgsSUFBSW5DLE9BQU8sS0FBSztRQUNmWSxLQUFLO1FBQ0xlO1FBQ0EsSUFBSTNCLE9BQU8sS0FBSztZQUNmWSxLQUFLO1lBQ0wsT0FBT3VCLEtBQUssZUFBZTtRQUM1QjtRQUNBLE1BQU9uQyxHQUFJO1lBQ1ZrQyxNQUFNZDtZQUNOTztZQUNBZixLQUFLO1lBQ0wsSUFBSXdCLE9BQU9DLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNKLEtBQUtELE1BQU07Z0JBQ25EMUIsTUFBTSxvQkFBb0IwQixNQUFNO1lBQ2pDO1lBQ0FDLEdBQUcsQ0FBQ0QsSUFBSSxHQUFHRixTQUFTLDJDQUEyQztZQUMvREw7WUFDQSxJQUFJM0IsT0FBTyxLQUFLO2dCQUNmWSxLQUFLO2dCQUNMLE9BQU91QjtZQUNSO1lBQ0F2QixLQUFLO1lBQ0xlO1FBQ0Q7SUFDRDtJQUNBbkIsTUFBTTtBQUNQO0FBRUEsc0ZBQXNGO0FBQ3RGLFNBQVN3QjtJQUNSTDtJQUNBLE9BQVEzQjtRQUNQLEtBQUs7WUFDSixPQUFPaUM7UUFDUixLQUFLO1lBQ0osT0FBT0o7UUFDUixLQUFLO1lBQ0osT0FBT1Q7UUFDUixLQUFLO1lBQ0osT0FBT0w7UUFDUjtZQUNDLE9BQU9mLE1BQU0sT0FBT0EsTUFBTSxNQUFNZSxXQUFXYTtJQUM3QztBQUNEO0FBRUEsbUdBQW1HO0FBQ25HWSxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsTUFBTSxFQUFFQyxPQUFPO0lBQ3pDLElBQUlDO0lBRUpyQyxPQUFPbUM7SUFDUDNDLEtBQUs7SUFDTEMsS0FBSztJQUNMNEMsU0FBU1o7SUFDVEw7SUFDQSxJQUFJM0IsSUFBSTtRQUNQUSxNQUFNO0lBQ1A7SUFFQSx5RUFBeUU7SUFDekUsb0VBQW9FO0lBQ3BFLDhFQUE4RTtJQUM5RSw0RUFBNEU7SUFDNUUsVUFBVTtJQUVWLE9BQU8sT0FBT21DLFlBQVksYUFBYyxTQUFTRSxLQUFLQyxNQUFNLEVBQUVaLEdBQUc7UUFDaEUsSUFBSWE7UUFDSixJQUFJQztRQUNKLElBQUlDLE1BQU1ILE1BQU0sQ0FBQ1osSUFBSTtRQUNyQixJQUFJZSxPQUFPLE9BQU9BLFFBQVEsVUFBVTtZQUNuQyxJQUFLRixLQUFLZixNQUFPO2dCQUNoQixJQUFJSSxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDVSxLQUFLRixJQUFJO29CQUNqREMsSUFBSUgsS0FBS0ksS0FBS0Y7b0JBQ2QsSUFBSSxPQUFPQyxNQUFNLGFBQWE7d0JBQzdCLE9BQU9DLEdBQUcsQ0FBQ0YsRUFBRTtvQkFDZCxPQUFPO3dCQUNORSxHQUFHLENBQUNGLEVBQUUsR0FBR0M7b0JBQ1Y7Z0JBQ0Q7WUFDRDtRQUNEO1FBQ0EsT0FBT0wsUUFBUUosSUFBSSxDQUFDTyxRQUFRWixLQUFLZTtJQUNsQyxFQUFFO1FBQUUsSUFBSUw7SUFBTyxHQUFHLE1BQU9BO0FBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qc29uaWZ5L2xpYi9wYXJzZS5qcz85NDAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGF0OyAvLyBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgY2hhcmFjdGVyXG52YXIgY2g7IC8vIFRoZSBjdXJyZW50IGNoYXJhY3RlclxudmFyIGVzY2FwZWUgPSB7XG5cdCdcIic6ICdcIicsXG5cdCdcXFxcJzogJ1xcXFwnLFxuXHQnLyc6ICcvJyxcblx0YjogJ1xcYicsXG5cdGY6ICdcXGYnLFxuXHRuOiAnXFxuJyxcblx0cjogJ1xccicsXG5cdHQ6ICdcXHQnXG59O1xudmFyIHRleHQ7XG5cbi8vIENhbGwgZXJyb3Igd2hlbiBzb21ldGhpbmcgaXMgd3JvbmcuXG5mdW5jdGlvbiBlcnJvcihtKSB7XG5cdHRocm93IHtcblx0XHRuYW1lOiAnU3ludGF4RXJyb3InLFxuXHRcdG1lc3NhZ2U6IG0sXG5cdFx0YXQ6IGF0LFxuXHRcdHRleHQ6IHRleHRcblx0fTtcbn1cblxuZnVuY3Rpb24gbmV4dChjKSB7XG5cdC8vIElmIGEgYyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHZlcmlmeSB0aGF0IGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuXHRpZiAoYyAmJiBjICE9PSBjaCkge1xuXHRcdGVycm9yKFwiRXhwZWN0ZWQgJ1wiICsgYyArIFwiJyBpbnN0ZWFkIG9mICdcIiArIGNoICsgXCInXCIpO1xuXHR9XG5cblx0Ly8gR2V0IHRoZSBuZXh0IGNoYXJhY3Rlci4gV2hlbiB0aGVyZSBhcmUgbm8gbW9yZSBjaGFyYWN0ZXJzLCByZXR1cm4gdGhlIGVtcHR5IHN0cmluZy5cblxuXHRjaCA9IHRleHQuY2hhckF0KGF0KTtcblx0YXQgKz0gMTtcblx0cmV0dXJuIGNoO1xufVxuXG5mdW5jdGlvbiBudW1iZXIoKSB7XG5cdC8vIFBhcnNlIGEgbnVtYmVyIHZhbHVlLlxuXHR2YXIgbnVtO1xuXHR2YXIgc3RyID0gJyc7XG5cblx0aWYgKGNoID09PSAnLScpIHtcblx0XHRzdHIgPSAnLSc7XG5cdFx0bmV4dCgnLScpO1xuXHR9XG5cdHdoaWxlIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7XG5cdFx0c3RyICs9IGNoO1xuXHRcdG5leHQoKTtcblx0fVxuXHRpZiAoY2ggPT09ICcuJykge1xuXHRcdHN0ciArPSAnLic7XG5cdFx0d2hpbGUgKG5leHQoKSAmJiBjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7XG5cdFx0XHRzdHIgKz0gY2g7XG5cdFx0fVxuXHR9XG5cdGlmIChjaCA9PT0gJ2UnIHx8IGNoID09PSAnRScpIHtcblx0XHRzdHIgKz0gY2g7XG5cdFx0bmV4dCgpO1xuXHRcdGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcblx0XHRcdHN0ciArPSBjaDtcblx0XHRcdG5leHQoKTtcblx0XHR9XG5cdFx0d2hpbGUgKGNoID49ICcwJyAmJiBjaCA8PSAnOScpIHtcblx0XHRcdHN0ciArPSBjaDtcblx0XHRcdG5leHQoKTtcblx0XHR9XG5cdH1cblx0bnVtID0gTnVtYmVyKHN0cik7XG5cdGlmICghaXNGaW5pdGUobnVtKSkge1xuXHRcdGVycm9yKCdCYWQgbnVtYmVyJyk7XG5cdH1cblx0cmV0dXJuIG51bTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nKCkge1xuXHQvLyBQYXJzZSBhIHN0cmluZyB2YWx1ZS5cblx0dmFyIGhleDtcblx0dmFyIGk7XG5cdHZhciBzdHIgPSAnJztcblx0dmFyIHVmZmZmO1xuXG5cdC8vIFdoZW4gcGFyc2luZyBmb3Igc3RyaW5nIHZhbHVlcywgd2UgbXVzdCBsb29rIGZvciBcIiBhbmQgXFwgY2hhcmFjdGVycy5cblx0aWYgKGNoID09PSAnXCInKSB7XG5cdFx0d2hpbGUgKG5leHQoKSkge1xuXHRcdFx0aWYgKGNoID09PSAnXCInKSB7XG5cdFx0XHRcdG5leHQoKTtcblx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuXHRcdFx0XHRuZXh0KCk7XG5cdFx0XHRcdGlmIChjaCA9PT0gJ3UnKSB7XG5cdFx0XHRcdFx0dWZmZmYgPSAwO1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcblx0XHRcdFx0XHRcdGhleCA9IHBhcnNlSW50KG5leHQoKSwgMTYpO1xuXHRcdFx0XHRcdFx0aWYgKCFpc0Zpbml0ZShoZXgpKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dWZmZmYgPSAodWZmZmYgKiAxNikgKyBoZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVmZmZmKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgZXNjYXBlZVtjaF0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0c3RyICs9IGVzY2FwZWVbY2hdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdHIgKz0gY2g7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGVycm9yKCdCYWQgc3RyaW5nJyk7XG59XG5cbi8vIFNraXAgd2hpdGVzcGFjZS5cbmZ1bmN0aW9uIHdoaXRlKCkge1xuXHR3aGlsZSAoY2ggJiYgY2ggPD0gJyAnKSB7XG5cdFx0bmV4dCgpO1xuXHR9XG59XG5cbi8vIHRydWUsIGZhbHNlLCBvciBudWxsLlxuZnVuY3Rpb24gd29yZCgpIHtcblx0c3dpdGNoIChjaCkge1xuXHRcdGNhc2UgJ3QnOlxuXHRcdFx0bmV4dCgndCcpO1xuXHRcdFx0bmV4dCgncicpO1xuXHRcdFx0bmV4dCgndScpO1xuXHRcdFx0bmV4dCgnZScpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0Y2FzZSAnZic6XG5cdFx0XHRuZXh0KCdmJyk7XG5cdFx0XHRuZXh0KCdhJyk7XG5cdFx0XHRuZXh0KCdsJyk7XG5cdFx0XHRuZXh0KCdzJyk7XG5cdFx0XHRuZXh0KCdlJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0Y2FzZSAnbic6XG5cdFx0XHRuZXh0KCduJyk7XG5cdFx0XHRuZXh0KCd1Jyk7XG5cdFx0XHRuZXh0KCdsJyk7XG5cdFx0XHRuZXh0KCdsJyk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRkZWZhdWx0OlxuXHRcdFx0ZXJyb3IoXCJVbmV4cGVjdGVkICdcIiArIGNoICsgXCInXCIpO1xuXHR9XG59XG5cbi8vIFBhcnNlIGFuIGFycmF5IHZhbHVlLlxuZnVuY3Rpb24gYXJyYXkoKSB7XG5cdHZhciBhcnIgPSBbXTtcblxuXHRpZiAoY2ggPT09ICdbJykge1xuXHRcdG5leHQoJ1snKTtcblx0XHR3aGl0ZSgpO1xuXHRcdGlmIChjaCA9PT0gJ10nKSB7XG5cdFx0XHRuZXh0KCddJyk7XG5cdFx0XHRyZXR1cm4gYXJyOyAvLyBlbXB0eSBhcnJheVxuXHRcdH1cblx0XHR3aGlsZSAoY2gpIHtcblx0XHRcdGFyci5wdXNoKHZhbHVlKCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cdFx0XHR3aGl0ZSgpO1xuXHRcdFx0aWYgKGNoID09PSAnXScpIHtcblx0XHRcdFx0bmV4dCgnXScpO1xuXHRcdFx0XHRyZXR1cm4gYXJyO1xuXHRcdFx0fVxuXHRcdFx0bmV4dCgnLCcpO1xuXHRcdFx0d2hpdGUoKTtcblx0XHR9XG5cdH1cblx0ZXJyb3IoJ0JhZCBhcnJheScpO1xufVxuXG4vLyBQYXJzZSBhbiBvYmplY3QgdmFsdWUuXG5mdW5jdGlvbiBvYmplY3QoKSB7XG5cdHZhciBrZXk7XG5cdHZhciBvYmogPSB7fTtcblxuXHRpZiAoY2ggPT09ICd7Jykge1xuXHRcdG5leHQoJ3snKTtcblx0XHR3aGl0ZSgpO1xuXHRcdGlmIChjaCA9PT0gJ30nKSB7XG5cdFx0XHRuZXh0KCd9Jyk7XG5cdFx0XHRyZXR1cm4gb2JqOyAvLyBlbXB0eSBvYmplY3Rcblx0XHR9XG5cdFx0d2hpbGUgKGNoKSB7XG5cdFx0XHRrZXkgPSBzdHJpbmcoKTtcblx0XHRcdHdoaXRlKCk7XG5cdFx0XHRuZXh0KCc6Jyk7XG5cdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuXHRcdFx0XHRlcnJvcignRHVwbGljYXRlIGtleSBcIicgKyBrZXkgKyAnXCInKTtcblx0XHRcdH1cblx0XHRcdG9ialtrZXldID0gdmFsdWUoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuXHRcdFx0d2hpdGUoKTtcblx0XHRcdGlmIChjaCA9PT0gJ30nKSB7XG5cdFx0XHRcdG5leHQoJ30nKTtcblx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdH1cblx0XHRcdG5leHQoJywnKTtcblx0XHRcdHdoaXRlKCk7XG5cdFx0fVxuXHR9XG5cdGVycm9yKCdCYWQgb2JqZWN0Jyk7XG59XG5cbi8vIFBhcnNlIGEgSlNPTiB2YWx1ZS4gSXQgY291bGQgYmUgYW4gb2JqZWN0LCBhbiBhcnJheSwgYSBzdHJpbmcsIGEgbnVtYmVyLCBvciBhIHdvcmQuXG5mdW5jdGlvbiB2YWx1ZSgpIHtcblx0d2hpdGUoKTtcblx0c3dpdGNoIChjaCkge1xuXHRcdGNhc2UgJ3snOlxuXHRcdFx0cmV0dXJuIG9iamVjdCgpO1xuXHRcdGNhc2UgJ1snOlxuXHRcdFx0cmV0dXJuIGFycmF5KCk7XG5cdFx0Y2FzZSAnXCInOlxuXHRcdFx0cmV0dXJuIHN0cmluZygpO1xuXHRcdGNhc2UgJy0nOlxuXHRcdFx0cmV0dXJuIG51bWJlcigpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gY2ggPj0gJzAnICYmIGNoIDw9ICc5JyA/IG51bWJlcigpIDogd29yZCgpO1xuXHR9XG59XG5cbi8vIFJldHVybiB0aGUganNvbl9wYXJzZSBmdW5jdGlvbi4gSXQgd2lsbCBoYXZlIGFjY2VzcyB0byBhbGwgb2YgdGhlIGFib3ZlIGZ1bmN0aW9ucyBhbmQgdmFyaWFibGVzLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc291cmNlLCByZXZpdmVyKSB7XG5cdHZhciByZXN1bHQ7XG5cblx0dGV4dCA9IHNvdXJjZTtcblx0YXQgPSAwO1xuXHRjaCA9ICcgJztcblx0cmVzdWx0ID0gdmFsdWUoKTtcblx0d2hpdGUoKTtcblx0aWYgKGNoKSB7XG5cdFx0ZXJyb3IoJ1N5bnRheCBlcnJvcicpO1xuXHR9XG5cblx0Ly8gSWYgdGhlcmUgaXMgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLFxuXHQvLyBwYXNzaW5nIGVhY2ggbmFtZS92YWx1ZSBwYWlyIHRvIHRoZSByZXZpdmVyIGZ1bmN0aW9uIGZvciBwb3NzaWJsZVxuXHQvLyB0cmFuc2Zvcm1hdGlvbiwgc3RhcnRpbmcgd2l0aCBhIHRlbXBvcmFyeSByb290IG9iamVjdCB0aGF0IGhvbGRzIHRoZSByZXN1bHRcblx0Ly8gaW4gYW4gZW1wdHkga2V5LiBJZiB0aGVyZSBpcyBub3QgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSBzaW1wbHkgcmV0dXJuIHRoZVxuXHQvLyByZXN1bHQuXG5cblx0cmV0dXJuIHR5cGVvZiByZXZpdmVyID09PSAnZnVuY3Rpb24nID8gKGZ1bmN0aW9uIHdhbGsoaG9sZGVyLCBrZXkpIHtcblx0XHR2YXIgaztcblx0XHR2YXIgdjtcblx0XHR2YXIgdmFsID0gaG9sZGVyW2tleV07XG5cdFx0aWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yIChrIGluIHZhbHVlKSB7XG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsLCBrKSkge1xuXHRcdFx0XHRcdHYgPSB3YWxrKHZhbCwgayk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHZhbFtrXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFsW2tdID0gdjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsKTtcblx0fSh7ICcnOiByZXN1bHQgfSwgJycpKSA6IHJlc3VsdDtcbn07XG4iXSwibmFtZXMiOlsiYXQiLCJjaCIsImVzY2FwZWUiLCJiIiwiZiIsIm4iLCJyIiwidCIsInRleHQiLCJlcnJvciIsIm0iLCJuYW1lIiwibWVzc2FnZSIsIm5leHQiLCJjIiwiY2hhckF0IiwibnVtYmVyIiwibnVtIiwic3RyIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJzdHJpbmciLCJoZXgiLCJpIiwidWZmZmYiLCJwYXJzZUludCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIndoaXRlIiwid29yZCIsImFycmF5IiwiYXJyIiwicHVzaCIsInZhbHVlIiwib2JqZWN0Iiwia2V5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyIsInNvdXJjZSIsInJldml2ZXIiLCJyZXN1bHQiLCJ3YWxrIiwiaG9sZGVyIiwiayIsInYiLCJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/jsonify/lib/parse.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/jsonify/lib/stringify.js":
/*!************************************************!*\
  !*** ../node_modules/jsonify/lib/stringify.js ***!
  \************************************************/
/***/ ((module) => {

eval("\nvar escapable = /[\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g;\nvar gap;\nvar indent;\nvar meta = {\n    \"\\b\": \"\\\\b\",\n    \"\t\": \"\\\\t\",\n    \"\\n\": \"\\\\n\",\n    \"\\f\": \"\\\\f\",\n    \"\\r\": \"\\\\r\",\n    '\"': '\\\\\"',\n    \"\\\\\": \"\\\\\\\\\"\n};\nvar rep;\nfunction quote(string) {\n    // If the string contains no control characters, no quote characters, and no\n    // backslash characters, then we can safely slap some quotes around it.\n    // Otherwise we must also replace the offending characters with safe escape sequences.\n    escapable.lastIndex = 0;\n    return escapable.test(string) ? '\"' + string.replace(escapable, function(a) {\n        var c = meta[a];\n        return typeof c === \"string\" ? c : \"\\\\u\" + (\"0000\" + a.charCodeAt(0).toString(16)).slice(-4);\n    }) + '\"' : '\"' + string + '\"';\n}\nfunction str(key, holder) {\n    // Produce a string from holder[key].\n    var i; // The loop counter.\n    var k; // The member key.\n    var v; // The member value.\n    var length;\n    var mind = gap;\n    var partial;\n    var value = holder[key];\n    // If the value has a toJSON method, call it to obtain a replacement value.\n    if (value && typeof value === \"object\" && typeof value.toJSON === \"function\") {\n        value = value.toJSON(key);\n    }\n    // If we were called with a replacer function, then call the replacer to obtain a replacement value.\n    if (typeof rep === \"function\") {\n        value = rep.call(holder, key, value);\n    }\n    // What happens next depends on the value's type.\n    switch(typeof value){\n        case \"string\":\n            return quote(value);\n        case \"number\":\n            // JSON numbers must be finite. Encode non-finite numbers as null.\n            return isFinite(value) ? String(value) : \"null\";\n        case \"boolean\":\n        case \"null\":\n            // If the value is a boolean or null, convert it to a string. Note:\n            // typeof null does not produce 'null'. The case is included here in\n            // the remote chance that this gets fixed someday.\n            return String(value);\n        case \"object\":\n            if (!value) {\n                return \"null\";\n            }\n            gap += indent;\n            partial = [];\n            // Array.isArray\n            if (Object.prototype.toString.apply(value) === \"[object Array]\") {\n                length = value.length;\n                for(i = 0; i < length; i += 1){\n                    partial[i] = str(i, value) || \"null\";\n                }\n                // Join all of the elements together, separated with commas, and wrap them in brackets.\n                v = partial.length === 0 ? \"[]\" : gap ? \"[\\n\" + gap + partial.join(\",\\n\" + gap) + \"\\n\" + mind + \"]\" : \"[\" + partial.join(\",\") + \"]\";\n                gap = mind;\n                return v;\n            }\n            // If the replacer is an array, use it to select the members to be stringified.\n            if (rep && typeof rep === \"object\") {\n                length = rep.length;\n                for(i = 0; i < length; i += 1){\n                    k = rep[i];\n                    if (typeof k === \"string\") {\n                        v = str(k, value);\n                        if (v) {\n                            partial.push(quote(k) + (gap ? \": \" : \":\") + v);\n                        }\n                    }\n                }\n            } else {\n                // Otherwise, iterate through all of the keys in the object.\n                for(k in value){\n                    if (Object.prototype.hasOwnProperty.call(value, k)) {\n                        v = str(k, value);\n                        if (v) {\n                            partial.push(quote(k) + (gap ? \": \" : \":\") + v);\n                        }\n                    }\n                }\n            }\n            // Join all of the member texts together, separated with commas, and wrap them in braces.\n            v = partial.length === 0 ? \"{}\" : gap ? \"{\\n\" + gap + partial.join(\",\\n\" + gap) + \"\\n\" + mind + \"}\" : \"{\" + partial.join(\",\") + \"}\";\n            gap = mind;\n            return v;\n        default:\n    }\n}\nmodule.exports = function(value, replacer, space) {\n    var i;\n    gap = \"\";\n    indent = \"\";\n    // If the space parameter is a number, make an indent string containing that many spaces.\n    if (typeof space === \"number\") {\n        for(i = 0; i < space; i += 1){\n            indent += \" \";\n        }\n    } else if (typeof space === \"string\") {\n        // If the space parameter is a string, it will be used as the indent string.\n        indent = space;\n    }\n    // If there is a replacer, it must be a function or an array. Otherwise, throw an error.\n    rep = replacer;\n    if (replacer && typeof replacer !== \"function\" && (typeof replacer !== \"object\" || typeof replacer.length !== \"number\")) {\n        throw new Error(\"JSON.stringify\");\n    }\n    // Make a fake root object containing our value under the key of ''.\n    // Return the result of stringifying the value.\n    return str(\"\", {\n        \"\": value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2pzb25pZnkvbGliL3N0cmluZ2lmeS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFlBQVk7QUFDaEIsSUFBSUM7QUFDSixJQUFJQztBQUNKLElBQUlDLE9BQU87SUFDVixNQUFNO0lBQ04sS0FBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0FBQ1A7QUFDQSxJQUFJQztBQUVKLFNBQVNDLE1BQU1DLE1BQU07SUFDcEIsNEVBQTRFO0lBQzVFLHVFQUF1RTtJQUN2RSxzRkFBc0Y7SUFFdEZOLFVBQVVPLFNBQVMsR0FBRztJQUN0QixPQUFPUCxVQUFVUSxJQUFJLENBQUNGLFVBQVUsTUFBTUEsT0FBT0csT0FBTyxDQUFDVCxXQUFXLFNBQVVVLENBQUM7UUFDMUUsSUFBSUMsSUFBSVIsSUFBSSxDQUFDTyxFQUFFO1FBQ2YsT0FBTyxPQUFPQyxNQUFNLFdBQVdBLElBQzVCLFFBQVEsQ0FBQyxTQUFTRCxFQUFFRSxVQUFVLENBQUMsR0FBR0MsUUFBUSxDQUFDLEdBQUUsRUFBR0MsS0FBSyxDQUFDLENBQUM7SUFDM0QsS0FBSyxNQUFNLE1BQU1SLFNBQVM7QUFDM0I7QUFFQSxTQUFTUyxJQUFJQyxHQUFHLEVBQUVDLE1BQU07SUFDdkIscUNBQXFDO0lBQ3JDLElBQUlDLEdBQUcsb0JBQW9CO0lBQzNCLElBQUlDLEdBQUcsa0JBQWtCO0lBQ3pCLElBQUlDLEdBQUcsb0JBQW9CO0lBQzNCLElBQUlDO0lBQ0osSUFBSUMsT0FBT3JCO0lBQ1gsSUFBSXNCO0lBQ0osSUFBSUMsUUFBUVAsTUFBTSxDQUFDRCxJQUFJO0lBRXZCLDJFQUEyRTtJQUMzRSxJQUFJUSxTQUFTLE9BQU9BLFVBQVUsWUFBWSxPQUFPQSxNQUFNQyxNQUFNLEtBQUssWUFBWTtRQUM3RUQsUUFBUUEsTUFBTUMsTUFBTSxDQUFDVDtJQUN0QjtJQUVBLG9HQUFvRztJQUNwRyxJQUFJLE9BQU9aLFFBQVEsWUFBWTtRQUM5Qm9CLFFBQVFwQixJQUFJc0IsSUFBSSxDQUFDVCxRQUFRRCxLQUFLUTtJQUMvQjtJQUVBLGlEQUFpRDtJQUNqRCxPQUFRLE9BQU9BO1FBQ2QsS0FBSztZQUNKLE9BQU9uQixNQUFNbUI7UUFFZCxLQUFLO1lBQ0osa0VBQWtFO1lBQ2xFLE9BQU9HLFNBQVNILFNBQVNJLE9BQU9KLFNBQVM7UUFFMUMsS0FBSztRQUNMLEtBQUs7WUFDSixtRUFBbUU7WUFDbkUsb0VBQW9FO1lBQ3BFLGtEQUFrRDtZQUNsRCxPQUFPSSxPQUFPSjtRQUVmLEtBQUs7WUFDSixJQUFJLENBQUNBLE9BQU87Z0JBQ1gsT0FBTztZQUNSO1lBQ0F2QixPQUFPQztZQUNQcUIsVUFBVSxFQUFFO1lBRVosZ0JBQWdCO1lBQ2hCLElBQUlNLE9BQU9DLFNBQVMsQ0FBQ2pCLFFBQVEsQ0FBQ2tCLEtBQUssQ0FBQ1AsV0FBVyxrQkFBa0I7Z0JBQ2hFSCxTQUFTRyxNQUFNSCxNQUFNO2dCQUNyQixJQUFLSCxJQUFJLEdBQUdBLElBQUlHLFFBQVFILEtBQUssRUFBRztvQkFDL0JLLE9BQU8sQ0FBQ0wsRUFBRSxHQUFHSCxJQUFJRyxHQUFHTSxVQUFVO2dCQUMvQjtnQkFFQSx1RkFBdUY7Z0JBQ3ZGSixJQUFJRyxRQUFRRixNQUFNLEtBQUssSUFBSSxPQUFPcEIsTUFDL0IsUUFBUUEsTUFBTXNCLFFBQVFTLElBQUksQ0FBQyxRQUFRL0IsT0FBTyxPQUFPcUIsT0FBTyxNQUN4RCxNQUFNQyxRQUFRUyxJQUFJLENBQUMsT0FBTztnQkFDN0IvQixNQUFNcUI7Z0JBQ04sT0FBT0Y7WUFDUjtZQUVBLCtFQUErRTtZQUMvRSxJQUFJaEIsT0FBTyxPQUFPQSxRQUFRLFVBQVU7Z0JBQ25DaUIsU0FBU2pCLElBQUlpQixNQUFNO2dCQUNuQixJQUFLSCxJQUFJLEdBQUdBLElBQUlHLFFBQVFILEtBQUssRUFBRztvQkFDL0JDLElBQUlmLEdBQUcsQ0FBQ2MsRUFBRTtvQkFDVixJQUFJLE9BQU9DLE1BQU0sVUFBVTt3QkFDMUJDLElBQUlMLElBQUlJLEdBQUdLO3dCQUNYLElBQUlKLEdBQUc7NEJBQ05HLFFBQVFVLElBQUksQ0FBQzVCLE1BQU1jLEtBQU1sQixDQUFBQSxNQUFNLE9BQU8sR0FBRSxJQUFLbUI7d0JBQzlDO29CQUNEO2dCQUNEO1lBQ0QsT0FBTztnQkFDTiw0REFBNEQ7Z0JBQzVELElBQUtELEtBQUtLLE1BQU87b0JBQ2hCLElBQUlLLE9BQU9DLFNBQVMsQ0FBQ0ksY0FBYyxDQUFDUixJQUFJLENBQUNGLE9BQU9MLElBQUk7d0JBQ25EQyxJQUFJTCxJQUFJSSxHQUFHSzt3QkFDWCxJQUFJSixHQUFHOzRCQUNORyxRQUFRVSxJQUFJLENBQUM1QixNQUFNYyxLQUFNbEIsQ0FBQUEsTUFBTSxPQUFPLEdBQUUsSUFBS21CO3dCQUM5QztvQkFDRDtnQkFDRDtZQUNEO1lBRUEseUZBQXlGO1lBRXpGQSxJQUFJRyxRQUFRRixNQUFNLEtBQUssSUFBSSxPQUFPcEIsTUFDL0IsUUFBUUEsTUFBTXNCLFFBQVFTLElBQUksQ0FBQyxRQUFRL0IsT0FBTyxPQUFPcUIsT0FBTyxNQUN4RCxNQUFNQyxRQUFRUyxJQUFJLENBQUMsT0FBTztZQUM3Qi9CLE1BQU1xQjtZQUNOLE9BQU9GO1FBQ1I7SUFDRDtBQUNEO0FBRUFlLE9BQU9DLE9BQU8sR0FBRyxTQUFVWixLQUFLLEVBQUVhLFFBQVEsRUFBRUMsS0FBSztJQUNoRCxJQUFJcEI7SUFDSmpCLE1BQU07SUFDTkMsU0FBUztJQUVULHlGQUF5RjtJQUN6RixJQUFJLE9BQU9vQyxVQUFVLFVBQVU7UUFDOUIsSUFBS3BCLElBQUksR0FBR0EsSUFBSW9CLE9BQU9wQixLQUFLLEVBQUc7WUFDOUJoQixVQUFVO1FBQ1g7SUFDRCxPQUFPLElBQUksT0FBT29DLFVBQVUsVUFBVTtRQUNyQyw0RUFBNEU7UUFDNUVwQyxTQUFTb0M7SUFDVjtJQUVBLHdGQUF3RjtJQUN4RmxDLE1BQU1pQztJQUNOLElBQ0NBLFlBQ0csT0FBT0EsYUFBYSxjQUNuQixRQUFPQSxhQUFhLFlBQVksT0FBT0EsU0FBU2hCLE1BQU0sS0FBSyxRQUFPLEdBQ3JFO1FBQ0QsTUFBTSxJQUFJa0IsTUFBTTtJQUNqQjtJQUVBLG9FQUFvRTtJQUNwRSwrQ0FBK0M7SUFDL0MsT0FBT3hCLElBQUksSUFBSTtRQUFFLElBQUlTO0lBQU07QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2pzb25pZnkvbGliL3N0cmluZ2lmeS5qcz83MzM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVzY2FwYWJsZSA9IC9bXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nO1xudmFyIGdhcDtcbnZhciBpbmRlbnQ7XG52YXIgbWV0YSA9IHsgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcblx0J1xcYic6ICdcXFxcYicsXG5cdCdcXHQnOiAnXFxcXHQnLFxuXHQnXFxuJzogJ1xcXFxuJyxcblx0J1xcZic6ICdcXFxcZicsXG5cdCdcXHInOiAnXFxcXHInLFxuXHQnXCInOiAnXFxcXFwiJyxcblx0J1xcXFwnOiAnXFxcXFxcXFwnXG59O1xudmFyIHJlcDtcblxuZnVuY3Rpb24gcXVvdGUoc3RyaW5nKSB7XG5cdC8vIElmIHRoZSBzdHJpbmcgY29udGFpbnMgbm8gY29udHJvbCBjaGFyYWN0ZXJzLCBubyBxdW90ZSBjaGFyYWN0ZXJzLCBhbmQgbm9cblx0Ly8gYmFja3NsYXNoIGNoYXJhY3RlcnMsIHRoZW4gd2UgY2FuIHNhZmVseSBzbGFwIHNvbWUgcXVvdGVzIGFyb3VuZCBpdC5cblx0Ly8gT3RoZXJ3aXNlIHdlIG11c3QgYWxzbyByZXBsYWNlIHRoZSBvZmZlbmRpbmcgY2hhcmFjdGVycyB3aXRoIHNhZmUgZXNjYXBlIHNlcXVlbmNlcy5cblxuXHRlc2NhcGFibGUubGFzdEluZGV4ID0gMDtcblx0cmV0dXJuIGVzY2FwYWJsZS50ZXN0KHN0cmluZykgPyAnXCInICsgc3RyaW5nLnJlcGxhY2UoZXNjYXBhYmxlLCBmdW5jdGlvbiAoYSkge1xuXHRcdHZhciBjID0gbWV0YVthXTtcblx0XHRyZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID8gY1xuXHRcdFx0OiAnXFxcXHUnICsgKCcwMDAwJyArIGEuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcblx0fSkgKyAnXCInIDogJ1wiJyArIHN0cmluZyArICdcIic7XG59XG5cbmZ1bmN0aW9uIHN0cihrZXksIGhvbGRlcikge1xuXHQvLyBQcm9kdWNlIGEgc3RyaW5nIGZyb20gaG9sZGVyW2tleV0uXG5cdHZhciBpOyAvLyBUaGUgbG9vcCBjb3VudGVyLlxuXHR2YXIgazsgLy8gVGhlIG1lbWJlciBrZXkuXG5cdHZhciB2OyAvLyBUaGUgbWVtYmVyIHZhbHVlLlxuXHR2YXIgbGVuZ3RoO1xuXHR2YXIgbWluZCA9IGdhcDtcblx0dmFyIHBhcnRpYWw7XG5cdHZhciB2YWx1ZSA9IGhvbGRlcltrZXldO1xuXG5cdC8vIElmIHRoZSB2YWx1ZSBoYXMgYSB0b0pTT04gbWV0aG9kLCBjYWxsIGl0IHRvIG9idGFpbiBhIHJlcGxhY2VtZW50IHZhbHVlLlxuXHRpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZS50b0pTT04oa2V5KTtcblx0fVxuXG5cdC8vIElmIHdlIHdlcmUgY2FsbGVkIHdpdGggYSByZXBsYWNlciBmdW5jdGlvbiwgdGhlbiBjYWxsIHRoZSByZXBsYWNlciB0byBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cblx0aWYgKHR5cGVvZiByZXAgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YWx1ZSA9IHJlcC5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG5cdH1cblxuXHQvLyBXaGF0IGhhcHBlbnMgbmV4dCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSdzIHR5cGUuXG5cdHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG5cdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdHJldHVybiBxdW90ZSh2YWx1ZSk7XG5cblx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0Ly8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBFbmNvZGUgbm9uLWZpbml0ZSBudW1iZXJzIGFzIG51bGwuXG5cdFx0XHRyZXR1cm4gaXNGaW5pdGUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICdudWxsJztcblxuXHRcdGNhc2UgJ2Jvb2xlYW4nOlxuXHRcdGNhc2UgJ251bGwnOlxuXHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLiBOb3RlOlxuXHRcdFx0Ly8gdHlwZW9mIG51bGwgZG9lcyBub3QgcHJvZHVjZSAnbnVsbCcuIFRoZSBjYXNlIGlzIGluY2x1ZGVkIGhlcmUgaW5cblx0XHRcdC8vIHRoZSByZW1vdGUgY2hhbmNlIHRoYXQgdGhpcyBnZXRzIGZpeGVkIHNvbWVkYXkuXG5cdFx0XHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcblxuXHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiAnbnVsbCc7XG5cdFx0XHR9XG5cdFx0XHRnYXAgKz0gaW5kZW50O1xuXHRcdFx0cGFydGlhbCA9IFtdO1xuXG5cdFx0XHQvLyBBcnJheS5pc0FycmF5XG5cdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblx0XHRcdFx0bGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRwYXJ0aWFsW2ldID0gc3RyKGksIHZhbHVlKSB8fCAnbnVsbCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBKb2luIGFsbCBvZiB0aGUgZWxlbWVudHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcywgYW5kIHdyYXAgdGhlbSBpbiBicmFja2V0cy5cblx0XHRcdFx0diA9IHBhcnRpYWwubGVuZ3RoID09PSAwID8gJ1tdJyA6IGdhcFxuXHRcdFx0XHRcdD8gJ1tcXG4nICsgZ2FwICsgcGFydGlhbC5qb2luKCcsXFxuJyArIGdhcCkgKyAnXFxuJyArIG1pbmQgKyAnXSdcblx0XHRcdFx0XHQ6ICdbJyArIHBhcnRpYWwuam9pbignLCcpICsgJ10nO1xuXHRcdFx0XHRnYXAgPSBtaW5kO1xuXHRcdFx0XHRyZXR1cm4gdjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlIHJlcGxhY2VyIGlzIGFuIGFycmF5LCB1c2UgaXQgdG8gc2VsZWN0IHRoZSBtZW1iZXJzIHRvIGJlIHN0cmluZ2lmaWVkLlxuXHRcdFx0aWYgKHJlcCAmJiB0eXBlb2YgcmVwID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRsZW5ndGggPSByZXAubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRrID0gcmVwW2ldO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgayA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHYgPSBzdHIoaywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0aWYgKHYpIHtcblx0XHRcdFx0XHRcdFx0cGFydGlhbC5wdXNoKHF1b3RlKGspICsgKGdhcCA/ICc6ICcgOiAnOicpICsgdik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBPdGhlcndpc2UsIGl0ZXJhdGUgdGhyb3VnaCBhbGwgb2YgdGhlIGtleXMgaW4gdGhlIG9iamVjdC5cblx0XHRcdFx0Zm9yIChrIGluIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcblx0XHRcdFx0XHRcdHYgPSBzdHIoaywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0aWYgKHYpIHtcblx0XHRcdFx0XHRcdFx0cGFydGlhbC5wdXNoKHF1b3RlKGspICsgKGdhcCA/ICc6ICcgOiAnOicpICsgdik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEpvaW4gYWxsIG9mIHRoZSBtZW1iZXIgdGV4dHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcywgYW5kIHdyYXAgdGhlbSBpbiBicmFjZXMuXG5cblx0XHRcdHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICd7fScgOiBnYXBcblx0XHRcdFx0PyAne1xcbicgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oJyxcXG4nICsgZ2FwKSArICdcXG4nICsgbWluZCArICd9J1xuXHRcdFx0XHQ6ICd7JyArIHBhcnRpYWwuam9pbignLCcpICsgJ30nO1xuXHRcdFx0Z2FwID0gbWluZDtcblx0XHRcdHJldHVybiB2O1xuXHRcdGRlZmF1bHQ6XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xuXHR2YXIgaTtcblx0Z2FwID0gJyc7XG5cdGluZGVudCA9ICcnO1xuXG5cdC8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIG1ha2UgYW4gaW5kZW50IHN0cmluZyBjb250YWluaW5nIHRoYXQgbWFueSBzcGFjZXMuXG5cdGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHNwYWNlOyBpICs9IDEpIHtcblx0XHRcdGluZGVudCArPSAnICc7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ3N0cmluZycpIHtcblx0XHQvLyBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGluZGVudCBzdHJpbmcuXG5cdFx0aW5kZW50ID0gc3BhY2U7XG5cdH1cblxuXHQvLyBJZiB0aGVyZSBpcyBhIHJlcGxhY2VyLCBpdCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkuIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3IuXG5cdHJlcCA9IHJlcGxhY2VyO1xuXHRpZiAoXG5cdFx0cmVwbGFjZXJcblx0XHQmJiB0eXBlb2YgcmVwbGFjZXIgIT09ICdmdW5jdGlvbidcblx0XHQmJiAodHlwZW9mIHJlcGxhY2VyICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmVwbGFjZXIubGVuZ3RoICE9PSAnbnVtYmVyJylcblx0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdKU09OLnN0cmluZ2lmeScpO1xuXHR9XG5cblx0Ly8gTWFrZSBhIGZha2Ugcm9vdCBvYmplY3QgY29udGFpbmluZyBvdXIgdmFsdWUgdW5kZXIgdGhlIGtleSBvZiAnJy5cblx0Ly8gUmV0dXJuIHRoZSByZXN1bHQgb2Ygc3RyaW5naWZ5aW5nIHRoZSB2YWx1ZS5cblx0cmV0dXJuIHN0cignJywgeyAnJzogdmFsdWUgfSk7XG59O1xuIl0sIm5hbWVzIjpbImVzY2FwYWJsZSIsImdhcCIsImluZGVudCIsIm1ldGEiLCJyZXAiLCJxdW90ZSIsInN0cmluZyIsImxhc3RJbmRleCIsInRlc3QiLCJyZXBsYWNlIiwiYSIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJzbGljZSIsInN0ciIsImtleSIsImhvbGRlciIsImkiLCJrIiwidiIsImxlbmd0aCIsIm1pbmQiLCJwYXJ0aWFsIiwidmFsdWUiLCJ0b0pTT04iLCJjYWxsIiwiaXNGaW5pdGUiLCJTdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJhcHBseSIsImpvaW4iLCJwdXNoIiwiaGFzT3duUHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVwbGFjZXIiLCJzcGFjZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/jsonify/lib/stringify.js\n");

/***/ })

};
;
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/SpeakersList.js":
/*!*****************************!*\
  !*** ./src/SpeakersList.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Speaker */ "./src/Speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "G:\\PROGRAMMING\\TECH's\\Pluralsight\\NODE  React  Full Stack\\Building Web Application With React Path\\03. Designing React Components\\code-wtih-course\\src\\SpeakersList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var SpeakersList = function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      hasError = _useState3[0],
      setHasError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      error = _useState4[0],
      setError = _useState4[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    (0,G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return delay(2000);

            case 3:
              // throw "Had error!!"
              setIsLoading(false);
              _context.next = 6;
              return setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data);

            case 6:
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setIsLoading(false);
              setHasError(true);
              setError(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }))();
  }, []);

  var _onFavoriteToggle = function onFavoriteToggle(id) {
    var speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });

    var speakerRecUpdate = _objectSpread(_objectSpread({}, speakersRecPrevious), {}, {
      favorite: !speakersRecPrevious.favorite
    });

    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdate : rec;
    });
    setSpeakersData(speakersDataNew);
  };

  if (hasError) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "text-danger",
    children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
      children: ["Loading Speaker Data Failed ", error]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 58
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 22
  }, _this);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 24
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container speakers-list",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_4__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavoriteToggle: function onFavoriteToggle() {
              return _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 8
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(SpeakersList, "IpQ+Us2P4Xt7AGo/hSzSHhmxH+0=");

_c = SpeakersList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersList);

var _c;

$RefreshReg$(_c, "SpeakersList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/react-placeholder/lib/ReactPlaceholder.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/ReactPlaceholder.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var placeholders = __webpack_require__(/*! ./placeholders */ "./node_modules/react-placeholder/lib/placeholders/index.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/react-placeholder/lib/utils.js");
var ReactPlaceholder = function (_a) {
    var _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.type, type = _c === void 0 ? 'text' : _c, _d = _a.color, color = _d === void 0 ? '#CDCDCD' : _d, _e = _a.rows, rows = _e === void 0 ? 3 : _e, readyProp = _a.ready, firstLaunchOnly = _a.firstLaunchOnly, children = _a.children, className = _a.className, showLoadingAnimation = _a.showLoadingAnimation, customPlaceholder = _a.customPlaceholder, rest = __rest(_a, ["delay", "type", "color", "rows", "ready", "firstLaunchOnly", "children", "className", "showLoadingAnimation", "customPlaceholder"]);
    var _f = React.useState(readyProp), ready = _f[0], setReady = _f[1];
    var timeout = React.useRef(null);
    var getFiller = function () {
        var classes = showLoadingAnimation
            ? utils_1.joinClassNames('show-loading-animation', className)
            : className;
        if (customPlaceholder && React.isValidElement(customPlaceholder)) {
            var mergedCustomClasses = utils_1.joinClassNames(customPlaceholder.props.className, classes);
            return React.cloneElement(customPlaceholder, {
                className: mergedCustomClasses
            });
        }
        else if (customPlaceholder) {
            return customPlaceholder;
        }
        var Placeholder = placeholders[type];
        return (React.createElement(Placeholder, __assign({}, rest, { color: color, rows: rows, className: classes })));
    };
    React.useEffect(function () {
        if (!firstLaunchOnly && ready && !readyProp) {
            if (delay && delay > 0) {
                timeout.current = window.setTimeout(function () {
                    setReady(false);
                }, delay);
            }
            else {
                setReady(false);
            }
        }
        else if (readyProp) {
            if (timeout.current) {
                window.clearTimeout(timeout.current);
            }
            if (!ready) {
                setReady(true);
            }
        }
    }, [firstLaunchOnly, ready, readyProp, delay]);
    // clear the timeout when the component unmounts
    React.useEffect(function () { return function () {
        if (timeout.current) {
            window.clearTimeout(timeout.current);
        }
    }; }, []);
    // Casting - workaround for DefinitelyTyped/react issue with
    // FunctionComponents returning ReactElement, where they should be able to
    // return ReactNode. Casting also doesn't introduce another layer in the
    // component tree like another `<>children</>` workaround does.
    //
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33006
    // and https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return ready ? children : getFiller();
};
exports.default = ReactPlaceholder;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-placeholder/lib/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ReactPlaceholder_1 = __webpack_require__(/*! ./ReactPlaceholder */ "./node_modules/react-placeholder/lib/ReactPlaceholder.js");
exports.default = ReactPlaceholder_1["default"];


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/MediaBlock.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/MediaBlock.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var TextBlock_1 = __webpack_require__(/*! ./TextBlock */ "./node_modules/react-placeholder/lib/placeholders/TextBlock.js");
var RoundShape_1 = __webpack_require__(/*! ./RoundShape */ "./node_modules/react-placeholder/lib/placeholders/RoundShape.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var defaultStyles = {
    display: 'flex'
};
var MediaBlock = function (_a) {
    var className = _a.className, style = _a.style, color = _a.color, rows = _a.rows;
    return (React.createElement("div", { className: utils_1.joinClassNames('media-block', className), style: __assign(__assign({}, defaultStyles), style) },
        React.createElement(RoundShape_1["default"], { color: color, style: { minHeight: 55, width: 55, minWidth: 55, marginRight: 10 } }),
        React.createElement(TextBlock_1["default"], { color: color, rows: rows })));
};
exports.default = MediaBlock;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/RectShape.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/RectShape.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var RectShape = function (_a) {
    var className = _a.className, style = _a.style, color = _a.color;
    var defaultStyle = {
        backgroundColor: color,
        width: '100%',
        height: '100%',
        marginRight: 10
    };
    return (React.createElement("div", { className: utils_1.joinClassNames('rect-shape', className), style: __assign(__assign({}, defaultStyle), style) }));
};
exports.default = RectShape;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/RoundShape.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/RoundShape.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var RoundShape = function (_a) {
    var className = _a.className, style = _a.style, color = _a.color;
    var defaultStyles = {
        backgroundColor: color,
        borderRadius: '500rem',
        width: '100%',
        height: '100%'
    };
    return (React.createElement("div", { className: utils_1.joinClassNames('round-shape', className), style: __assign(__assign({}, defaultStyles), style) }));
};
exports.default = RoundShape;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/TextBlock.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/TextBlock.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var TextRow_1 = __webpack_require__(/*! ./TextRow */ "./node_modules/react-placeholder/lib/placeholders/TextRow.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var defaultStyles = {
    width: '100%'
};
var defaultWidths = [97, 100, 94, 90, 98, 95, 98, 40];
var TextBlock = function (_a) {
    var rows = _a.rows, lineSpacing = _a.lineSpacing, color = _a.color, style = _a.style, className = _a.className, _b = _a.widths, widths = _b === void 0 ? defaultWidths : _b;
    var getRowStyle = function (i) {
        return {
            maxHeight: 100 / (rows * 2 - 1) + "%",
            width: widths[(i + widths.length) % widths.length] + "%"
        };
    };
    return (React.createElement("div", { className: utils_1.joinClassNames('text-block', className), style: __assign(__assign({}, defaultStyles), style) }, Array.apply(null, Array(rows)).map(function (_, i) { return (React.createElement(TextRow_1["default"], { color: color, style: getRowStyle(i), lineSpacing: i !== 0 ? lineSpacing : 0, key: i })); })));
};
exports.default = TextBlock;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/TextRow.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/TextRow.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var TextRow = function (_a) {
    var className = _a.className, maxHeight = _a.maxHeight, color = _a.color, _b = _a.lineSpacing, lineSpacing = _b === void 0 ? '0.7em' : _b, style = _a.style;
    var defaultStyles = {
        maxHeight: maxHeight,
        width: '100%',
        height: '1em',
        backgroundColor: color,
        marginTop: lineSpacing
    };
    return (React.createElement("div", { className: utils_1.joinClassNames('text-row', className), style: __assign(__assign({}, defaultStyles), style) }));
};
exports.default = TextRow;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.media = exports.text = exports.rect = exports.round = exports.textRow = exports.MediaBlock = exports.TextBlock = exports.RectShape = exports.RoundShape = exports.TextRow = void 0;
var TextRow_1 = __webpack_require__(/*! ./TextRow */ "./node_modules/react-placeholder/lib/placeholders/TextRow.js");
exports.TextRow = TextRow_1["default"];
var RoundShape_1 = __webpack_require__(/*! ./RoundShape */ "./node_modules/react-placeholder/lib/placeholders/RoundShape.js");
exports.RoundShape = RoundShape_1["default"];
var RectShape_1 = __webpack_require__(/*! ./RectShape */ "./node_modules/react-placeholder/lib/placeholders/RectShape.js");
exports.RectShape = RectShape_1["default"];
var TextBlock_1 = __webpack_require__(/*! ./TextBlock */ "./node_modules/react-placeholder/lib/placeholders/TextBlock.js");
exports.TextBlock = TextBlock_1["default"];
var MediaBlock_1 = __webpack_require__(/*! ./MediaBlock */ "./node_modules/react-placeholder/lib/placeholders/MediaBlock.js");
exports.MediaBlock = MediaBlock_1["default"];
exports.textRow = TextRow_1["default"];
exports.round = RoundShape_1["default"];
exports.rect = RectShape_1["default"];
exports.text = TextBlock_1["default"];
exports.media = MediaBlock_1["default"];


/***/ }),

/***/ "./node_modules/react-placeholder/lib/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-placeholder/lib/utils.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
exports.joinClassNames = void 0;
exports.joinClassNames = function () {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(function (c) { return c; }).join(' ');
};


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYWNlaG9sZGVyL2xpYi9SZWFjdFBsYWNlaG9sZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxhY2Vob2xkZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxhY2Vob2xkZXIvbGliL3BsYWNlaG9sZGVycy9NZWRpYUJsb2NrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxhY2Vob2xkZXIvbGliL3BsYWNlaG9sZGVycy9SZWN0U2hhcGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGFjZWhvbGRlci9saWIvcGxhY2Vob2xkZXJzL1JvdW5kU2hhcGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGFjZWhvbGRlci9saWIvcGxhY2Vob2xkZXJzL1RleHRCbG9jay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYWNlaG9sZGVyL2xpYi9wbGFjZWhvbGRlcnMvVGV4dFJvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYWNlaG9sZGVyL2xpYi9wbGFjZWhvbGRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGFjZWhvbGRlci9saWIvdXRpbHMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwidXNlU3RhdGUiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkYXRhIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzcGVha2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQUEsa0JBRUFDLCtDQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFakNDLFlBRmlDO0FBQUEsTUFFbkJDLGVBRm1COztBQUFBLG1CQUdORiwrQ0FBUSxDQUFDLElBQUQsQ0FIRjtBQUFBLE1BR2pDRyxTQUhpQztBQUFBLE1BR3RCQyxZQUhzQjs7QUFBQSxtQkFJUkosK0NBQVEsQ0FBQyxLQUFELENBSkE7QUFBQSxNQUlqQ0ssUUFKaUM7QUFBQSxNQUl2QkMsV0FKdUI7O0FBQUEsbUJBS2ROLCtDQUFRLENBQUMsRUFBRCxDQUxNO0FBQUEsTUFLakNPLEtBTGlDO0FBQUEsTUFLMUJDLFFBTDBCOztBQU94QyxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxFQUFFO0FBQUEsV0FBSSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFKO0FBQUEsR0FBaEI7O0FBRUFJLGtEQUFTLENBQUMsWUFBTTtBQUVmLG9lQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU9MLEtBQUssQ0FBQyxJQUFELENBRlo7O0FBQUE7QUFHQztBQUNBTCwwQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUpEO0FB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a0JBQWtCO0FBQ2xCLGtCQUFrQixtQkFBTyxDQUFDLG1GQUFhO0FBQ3ZDLGlCQUFpQjtBQUNqQixrQkFBa0IsbUJBQU8sQ0FBQyxtRkFBYTtBQUN2QyxpQkFBaUI7QUFDakIsbUJBQW1CLG1CQUFPLENBQUMscUZBQWM7QUFDekMsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixhQUFhO0FBQ2IsWUFBWTtBQUNaLFlBQVk7QUFDWixhQUFhOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFDYixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QjtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBLDJDQUEyQyxVQUFVLEVBQUU7QUFDdkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjY1Y2RhN2MzNTk1MjgzYzQzNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcclxuaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCJcclxuXHJcbmNvbnN0IFNwZWFrZXJzTGlzdCA9ICh7c2hvd1Nlc3Npb25zfSkgPT4ge1xyXG5cclxuXHRjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblx0Y29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHRjb25zdCBkZWxheSA9IG1zID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGRlbGF5KDIwMDApXHJcblx0XHRcdFx0Ly8gdGhyb3cgXCJIYWQgZXJyb3IhIVwiXHJcblx0XHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxyXG5cdFx0XHRcdGF3YWl0IHNldFNwZWFrZXJzRGF0YShkYXRhKVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzZXRIYXNFcnJvcih0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSkoKVxyXG5cclxuXHR9LCBbXSk7XHJcblxyXG5cclxuXHRjb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0gKGlkKSA9PiB7XHJcblx0XHRjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xyXG5cdFx0XHRyZXR1cm4gcmVjLmlkID09PSBpZFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBzcGVha2VyUmVjVXBkYXRlID0ge1xyXG5cdFx0XHQuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG5cdFx0XHRmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcblx0XHRcdHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZSA6IHJlYztcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpXHJcblx0fVxyXG5cclxuXHRpZihoYXNFcnJvcikgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5FUlJPUjogPGI+TG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+PC9kaXY+XHJcblxyXG5cdGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHR7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdDxTcGVha2VyXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e3NwZWFrZXIuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRzcGVha2VyPXtzcGVha2VyfVxyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0PC8+XHJcblxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIHBsYWNlaG9sZGVycyA9IHJlcXVpcmUoXCIuL3BsYWNlaG9sZGVyc1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgUmVhY3RQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLmRlbGF5LCBkZWxheSA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIF9jID0gX2EudHlwZSwgdHlwZSA9IF9jID09PSB2b2lkIDAgPyAndGV4dCcgOiBfYywgX2QgPSBfYS5jb2xvciwgY29sb3IgPSBfZCA9PT0gdm9pZCAwID8gJyNDRENEQ0QnIDogX2QsIF9lID0gX2Eucm93cywgcm93cyA9IF9lID09PSB2b2lkIDAgPyAzIDogX2UsIHJlYWR5UHJvcCA9IF9hLnJlYWR5LCBmaXJzdExhdW5jaE9ubHkgPSBfYS5maXJzdExhdW5jaE9ubHksIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgc2hvd0xvYWRpbmdBbmltYXRpb24gPSBfYS5zaG93TG9hZGluZ0FuaW1hdGlvbiwgY3VzdG9tUGxhY2Vob2xkZXIgPSBfYS5jdXN0b21QbGFjZWhvbGRlciwgcmVzdCA9IF9fcmVzdChfYSwgW1wiZGVsYXlcIiwgXCJ0eXBlXCIsIFwiY29sb3JcIiwgXCJyb3dzXCIsIFwicmVhZHlcIiwgXCJmaXJzdExhdW5jaE9ubHlcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcInNob3dMb2FkaW5nQW5pbWF0aW9uXCIsIFwiY3VzdG9tUGxhY2Vob2xkZXJcIl0pO1xuICAgIHZhciBfZiA9IFJlYWN0LnVzZVN0YXRlKHJlYWR5UHJvcCksIHJlYWR5ID0gX2ZbMF0sIHNldFJlYWR5ID0gX2ZbMV07XG4gICAgdmFyIHRpbWVvdXQgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgdmFyIGdldEZpbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBzaG93TG9hZGluZ0FuaW1hdGlvblxuICAgICAgICAgICAgPyB1dGlsc18xLmpvaW5DbGFzc05hbWVzKCdzaG93LWxvYWRpbmctYW5pbWF0aW9uJywgY2xhc3NOYW1lKVxuICAgICAgICAgICAgOiBjbGFzc05hbWU7XG4gICAgICAgIGlmIChjdXN0b21QbGFjZWhvbGRlciAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjdXN0b21QbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgIHZhciBtZXJnZWRDdXN0b21DbGFzc2VzID0gdXRpbHNfMS5qb2luQ2xhc3NOYW1lcyhjdXN0b21QbGFjZWhvbGRlci5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjdXN0b21QbGFjZWhvbGRlciwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogbWVyZ2VkQ3VzdG9tQ2xhc3Nlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3VzdG9tUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXN0b21QbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgUGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcnNbdHlwZV07XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQbGFjZWhvbGRlciwgX19hc3NpZ24oe30sIHJlc3QsIHsgY29sb3I6IGNvbG9yLCByb3dzOiByb3dzLCBjbGFzc05hbWU6IGNsYXNzZXMgfSkpKTtcbiAgICB9O1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZmlyc3RMYXVuY2hPbmx5ICYmIHJlYWR5ICYmICFyZWFkeVByb3ApIHtcbiAgICAgICAgICAgIGlmIChkZWxheSAmJiBkZWxheSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJlYWR5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRSZWFkeShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVhZHlQcm9wKSB7XG4gICAgICAgICAgICBpZiAodGltZW91dC5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0LmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICAgICAgICAgIHNldFJlYWR5KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2ZpcnN0TGF1bmNoT25seSwgcmVhZHksIHJlYWR5UHJvcCwgZGVsYXldKTtcbiAgICAvLyBjbGVhciB0aGUgdGltZW91dCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGltZW91dC5jdXJyZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9OyB9LCBbXSk7XG4gICAgLy8gQ2FzdGluZyAtIHdvcmthcm91bmQgZm9yIERlZmluaXRlbHlUeXBlZC9yZWFjdCBpc3N1ZSB3aXRoXG4gICAgLy8gRnVuY3Rpb25Db21wb25lbnRzIHJldHVybmluZyBSZWFjdEVsZW1lbnQsIHdoZXJlIHRoZXkgc2hvdWxkIGJlIGFibGUgdG9cbiAgICAvLyByZXR1cm4gUmVhY3ROb2RlLiBDYXN0aW5nIGFsc28gZG9lc24ndCBpbnRyb2R1Y2UgYW5vdGhlciBsYXllciBpbiB0aGVcbiAgICAvLyBjb21wb25lbnQgdHJlZSBsaWtlIGFub3RoZXIgYDw+Y2hpbGRyZW48Lz5gIHdvcmthcm91bmQgZG9lcy5cbiAgICAvL1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRGVmaW5pdGVseVR5cGVkL0RlZmluaXRlbHlUeXBlZC9pc3N1ZXMvMzMwMDZcbiAgICAvLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL0RlZmluaXRlbHlUeXBlZC9EZWZpbml0ZWx5VHlwZWQvaXNzdWVzLzE4MDUxXG4gICAgcmV0dXJuIHJlYWR5ID8gY2hpbGRyZW4gOiBnZXRGaWxsZXIoKTtcbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJlYWN0UGxhY2Vob2xkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUmVhY3RQbGFjZWhvbGRlcl8xID0gcmVxdWlyZShcIi4vUmVhY3RQbGFjZWhvbGRlclwiKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUmVhY3RQbGFjZWhvbGRlcl8xW1wiZGVmYXVsdFwiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgVGV4dEJsb2NrXzEgPSByZXF1aXJlKFwiLi9UZXh0QmxvY2tcIik7XG52YXIgUm91bmRTaGFwZV8xID0gcmVxdWlyZShcIi4vUm91bmRTaGFwZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG59O1xudmFyIE1lZGlhQmxvY2sgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBzdHlsZSA9IF9hLnN0eWxlLCBjb2xvciA9IF9hLmNvbG9yLCByb3dzID0gX2Eucm93cztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHV0aWxzXzEuam9pbkNsYXNzTmFtZXMoJ21lZGlhLWJsb2NrJywgY2xhc3NOYW1lKSwgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzKSwgc3R5bGUpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91bmRTaGFwZV8xW1wiZGVmYXVsdFwiXSwgeyBjb2xvcjogY29sb3IsIHN0eWxlOiB7IG1pbkhlaWdodDogNTUsIHdpZHRoOiA1NSwgbWluV2lkdGg6IDU1LCBtYXJnaW5SaWdodDogMTAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0QmxvY2tfMVtcImRlZmF1bHRcIl0sIHsgY29sb3I6IGNvbG9yLCByb3dzOiByb3dzIH0pKSk7XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNZWRpYUJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIFJlY3RTaGFwZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHN0eWxlID0gX2Euc3R5bGUsIGNvbG9yID0gX2EuY29sb3I7XG4gICAgdmFyIGRlZmF1bHRTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxMFxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB1dGlsc18xLmpvaW5DbGFzc05hbWVzKCdyZWN0LXNoYXBlJywgY2xhc3NOYW1lKSwgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0U3R5bGUpLCBzdHlsZSkgfSkpO1xufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUmVjdFNoYXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIFJvdW5kU2hhcGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBzdHlsZSA9IF9hLnN0eWxlLCBjb2xvciA9IF9hLmNvbG9yO1xuICAgIHZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MDByZW0nLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB1dGlsc18xLmpvaW5DbGFzc05hbWVzKCdyb3VuZC1zaGFwZScsIGNsYXNzTmFtZSksIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdFN0eWxlcyksIHN0eWxlKSB9KSk7XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSb3VuZFNoYXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBUZXh0Um93XzEgPSByZXF1aXJlKFwiLi9UZXh0Um93XCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICB3aWR0aDogJzEwMCUnXG59O1xudmFyIGRlZmF1bHRXaWR0aHMgPSBbOTcsIDEwMCwgOTQsIDkwLCA5OCwgOTUsIDk4LCA0MF07XG52YXIgVGV4dEJsb2NrID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHJvd3MgPSBfYS5yb3dzLCBsaW5lU3BhY2luZyA9IF9hLmxpbmVTcGFjaW5nLCBjb2xvciA9IF9hLmNvbG9yLCBzdHlsZSA9IF9hLnN0eWxlLCBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIF9iID0gX2Eud2lkdGhzLCB3aWR0aHMgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdFdpZHRocyA6IF9iO1xuICAgIHZhciBnZXRSb3dTdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDEwMCAvIChyb3dzICogMiAtIDEpICsgXCIlXCIsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzWyhpICsgd2lkdGhzLmxlbmd0aCkgJSB3aWR0aHMubGVuZ3RoXSArIFwiJVwiXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHV0aWxzXzEuam9pbkNsYXNzTmFtZXMoJ3RleHQtYmxvY2snLCBjbGFzc05hbWUpLCBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMpLCBzdHlsZSkgfSwgQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcChmdW5jdGlvbiAoXywgaSkgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dFJvd18xW1wiZGVmYXVsdFwiXSwgeyBjb2xvcjogY29sb3IsIHN0eWxlOiBnZXRSb3dTdHlsZShpKSwgbGluZVNwYWNpbmc6IGkgIT09IDAgPyBsaW5lU3BhY2luZyA6IDAsIGtleTogaSB9KSk7IH0pKSk7XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUZXh0QmxvY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgVGV4dFJvdyA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIG1heEhlaWdodCA9IF9hLm1heEhlaWdodCwgY29sb3IgPSBfYS5jb2xvciwgX2IgPSBfYS5saW5lU3BhY2luZywgbGluZVNwYWNpbmcgPSBfYiA9PT0gdm9pZCAwID8gJzAuN2VtJyA6IF9iLCBzdHlsZSA9IF9hLnN0eWxlO1xuICAgIHZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgbWFyZ2luVG9wOiBsaW5lU3BhY2luZ1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB1dGlsc18xLmpvaW5DbGFzc05hbWVzKCd0ZXh0LXJvdycsIGNsYXNzTmFtZSksIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdFN0eWxlcyksIHN0eWxlKSB9KSk7XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUZXh0Um93O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5tZWRpYSA9IGV4cG9ydHMudGV4dCA9IGV4cG9ydHMucmVjdCA9IGV4cG9ydHMucm91bmQgPSBleHBvcnRzLnRleHRSb3cgPSBleHBvcnRzLk1lZGlhQmxvY2sgPSBleHBvcnRzLlRleHRCbG9jayA9IGV4cG9ydHMuUmVjdFNoYXBlID0gZXhwb3J0cy5Sb3VuZFNoYXBlID0gZXhwb3J0cy5UZXh0Um93ID0gdm9pZCAwO1xudmFyIFRleHRSb3dfMSA9IHJlcXVpcmUoXCIuL1RleHRSb3dcIik7XG5leHBvcnRzLlRleHRSb3cgPSBUZXh0Um93XzFbXCJkZWZhdWx0XCJdO1xudmFyIFJvdW5kU2hhcGVfMSA9IHJlcXVpcmUoXCIuL1JvdW5kU2hhcGVcIik7XG5leHBvcnRzLlJvdW5kU2hhcGUgPSBSb3VuZFNoYXBlXzFbXCJkZWZhdWx0XCJdO1xudmFyIFJlY3RTaGFwZV8xID0gcmVxdWlyZShcIi4vUmVjdFNoYXBlXCIpO1xuZXhwb3J0cy5SZWN0U2hhcGUgPSBSZWN0U2hhcGVfMVtcImRlZmF1bHRcIl07XG52YXIgVGV4dEJsb2NrXzEgPSByZXF1aXJlKFwiLi9UZXh0QmxvY2tcIik7XG5leHBvcnRzLlRleHRCbG9jayA9IFRleHRCbG9ja18xW1wiZGVmYXVsdFwiXTtcbnZhciBNZWRpYUJsb2NrXzEgPSByZXF1aXJlKFwiLi9NZWRpYUJsb2NrXCIpO1xuZXhwb3J0cy5NZWRpYUJsb2NrID0gTWVkaWFCbG9ja18xW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMudGV4dFJvdyA9IFRleHRSb3dfMVtcImRlZmF1bHRcIl07XG5leHBvcnRzLnJvdW5kID0gUm91bmRTaGFwZV8xW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMucmVjdCA9IFJlY3RTaGFwZV8xW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMudGV4dCA9IFRleHRCbG9ja18xW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMubWVkaWEgPSBNZWRpYUJsb2NrXzFbXCJkZWZhdWx0XCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5qb2luQ2xhc3NOYW1lcyA9IHZvaWQgMDtcbmV4cG9ydHMuam9pbkNsYXNzTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsYXNzTmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBjbGFzc05hbWVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYzsgfSkuam9pbignICcpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
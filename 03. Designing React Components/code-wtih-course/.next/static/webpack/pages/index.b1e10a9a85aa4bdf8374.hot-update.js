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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_7__.default, {
        type: "media",
        rows: 15,
        className: "speakerslist-placeholder",
        ready: isLoading === false,
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
              lineNumber: 69,
              columnNumber: 9
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzTGlzdC5qcyJdLCJuYW1lcyI6WyJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJ1c2VTdGF0ZSIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0Vycm9yIiwic2V0SGFzRXJyb3IiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGUiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCIsInNwZWFrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQW9CO0FBQUE7O0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFBQSxrQkFFQUMsK0NBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVqQ0MsWUFGaUM7QUFBQSxNQUVuQkMsZUFGbUI7O0FBQUEsbUJBR05GLCtDQUFRLENBQUMsSUFBRCxDQUhGO0FBQUEsTUFHakNHLFNBSGlDO0FBQUEsTUFHdEJDLFlBSHNCOztBQUFBLG1CQUlSSiwrQ0FBUSxDQUFDLEtBQUQsQ0FKQTtBQUFBLE1BSWpDSyxRQUppQztBQUFBLE1BSXZCQyxXQUp1Qjs7QUFBQSxtQkFLZE4sK0NBQVEsQ0FBQyxFQUFELENBTE07QUFBQSxNQUtqQ08sS0FMaUM7QUFBQSxNQUsxQkMsUUFMMEI7O0FBT3hDLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLEVBQUU7QUFBQSxXQUFJLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBdkI7QUFBQSxLQUFaLENBQUo7QUFBQSxHQUFoQjs7QUFFQUksa0RBQVMsQ0FBQyxZQUFNO0FBRWYsb2VBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFT0wsS0FBSyxDQUFDLElBQUQsQ0FGWjs7QUFBQTtBQUdDO0FBQ0FMLDBCQUFZLENBQUMsS0FBRCxDQUFaO0FBSkQ7QUFBQSxxQkFLT0YsZUFBZSxDQUFDYSw4Q0FBRCxDQUx0Qjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT0NYLDBCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FFLHlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FFLHNCQUFRLGFBQVI7O0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQWNBLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7O0FBbUJBLE1BQU1RLGlCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsRUFBRCxFQUFRO0FBQ2hDLFFBQU1DLG1CQUFtQixHQUFHakIsWUFBWSxDQUFDa0IsSUFBYixDQUFrQixVQUFVQyxHQUFWLEVBQWU7QUFDNUQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQWxCO0FBQ0EsS0FGMkIsQ0FBNUI7O0FBR0EsUUFBTUksZ0JBQWdCLG1DQUNsQkgsbUJBRGtCO0FBRXJCSSxjQUFRLEVBQUUsQ0FBQ0osbUJBQW1CLENBQUNJO0FBRlYsTUFBdEI7O0FBS0EsUUFBTUMsZUFBZSxHQUFHdEIsWUFBWSxDQUFDdUIsR0FBYixDQUFpQixVQUFVSixHQUFWLEVBQWU7QUFDdkQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQVgsR0FBZ0JJLGdCQUFoQixHQUFtQ0QsR0FBMUM7QUFDQSxLQUZ1QixDQUF4QjtBQUlBbEIsbUJBQWUsQ0FBQ3FCLGVBQUQsQ0FBZjtBQUNBLEdBZEQ7O0FBZ0JBLE1BQUdsQixRQUFILEVBQWEsb0JBQU87QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLHVDQUFvQztBQUFBLGlEQUFnQ0UsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBRWIsTUFBSUosU0FBSixFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFFZixzQkFFQztBQUFBLDJCQUVDO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUEsNkJBRUMsOERBQUMsc0RBQUQ7QUFDQyxZQUFJLEVBQUMsT0FETjtBQUVDLFlBQUksRUFBRSxFQUZQO0FBR0MsaUJBQVMsRUFBQywwQkFIWDtBQUlDLGFBQUssRUFBRUEsU0FBUyxLQUFHLEtBSnBCO0FBQUEsK0JBTUM7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxvQkFDRUYsWUFBWSxDQUFDdUIsR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ3BDLGdDQUNDLDhEQUFDLDZDQUFEO0FBRUMscUJBQU8sRUFBRUEsT0FGVjtBQUdDLDBCQUFZLEVBQUUxQixZQUhmO0FBSUMsOEJBQWdCLEVBQUU7QUFBQSx1QkFBTWlCLGlCQUFnQixDQUFDUyxPQUFPLENBQUNSLEVBQVQsQ0FBdEI7QUFBQTtBQUpuQixlQUNNUSxPQUFPLENBQUNSLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERDtBQVFBLFdBVEE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRCxtQkFGRDtBQWlDQSxDQWpGRDs7R0FBTW5CLFk7O0tBQUFBLFk7QUFtRk4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjFlMTBhOWE4NWFhNGJkZjgzNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcclxuaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCJcclxuXHJcbmNvbnN0IFNwZWFrZXJzTGlzdCA9ICh7c2hvd1Nlc3Npb25zfSkgPT4ge1xyXG5cclxuXHRjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblx0Y29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHRjb25zdCBkZWxheSA9IG1zID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGF3YWl0IGRlbGF5KDIwMDApXHJcblx0XHRcdFx0Ly8gdGhyb3cgXCJIYWQgZXJyb3IhIVwiXHJcblx0XHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxyXG5cdFx0XHRcdGF3YWl0IHNldFNwZWFrZXJzRGF0YShkYXRhKVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzZXRIYXNFcnJvcih0cnVlKTtcclxuXHRcdFx0XHRzZXRFcnJvcihlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSkoKVxyXG5cclxuXHR9LCBbXSk7XHJcblxyXG5cclxuXHRjb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0gKGlkKSA9PiB7XHJcblx0XHRjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xyXG5cdFx0XHRyZXR1cm4gcmVjLmlkID09PSBpZFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBzcGVha2VyUmVjVXBkYXRlID0ge1xyXG5cdFx0XHQuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG5cdFx0XHRmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcblx0XHRcdHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZSA6IHJlYztcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpXHJcblx0fVxyXG5cclxuXHRpZihoYXNFcnJvcikgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5FUlJPUjogPGI+TG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+PC9kaXY+XHJcblxyXG5cdGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG5cclxuXHRcdFx0XHQ8UmVhY3RQbGFjZUhvbGRlclxyXG5cdFx0XHRcdFx0dHlwZT1cIm1lZGlhXCJcclxuXHRcdFx0XHRcdHJvd3M9ezE1fVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHRcdHJlYWR5PXtpc0xvYWRpbmc9PT1mYWxzZX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHR7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8U3BlYWtlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3NwZWFrZXIuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWFrZXI9e3NwZWFrZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9SZWFjdFBsYWNlSG9sZGVyPlxyXG5cclxuXHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHQ8Lz5cclxuXHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
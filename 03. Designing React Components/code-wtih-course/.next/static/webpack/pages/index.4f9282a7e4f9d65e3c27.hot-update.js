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
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ "./src/Speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "G:\\PROGRAMMING\\TECH's\\Pluralsight\\NODE  React  Full Stack\\Building Web Application With React Path\\03. Designing React Components\\code-wtih-course\\src\\SpeakersList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,G_PROGRAMMING_TECH_s_Pluralsight_NODE_React_Full_Stack_Building_Web_Application_With_React_Path_03_Designing_React_Components_code_wtih_course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SpeakersList = function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      speakersData = _useState[0],
      setSpeakerData = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {}, []);

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
    setSpeakerData(speakersDataNew);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: speakersData.map(function (speaker) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {
          speaker: speaker,
          showSessions: showSessions,
          onFavoriteToggle: function onFavoriteToggle() {
            return _onFavoriteToggle(speaker.id);
          }
        }, speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, _this);
};

_s(SpeakersList, "njksLRiBs8DqzBjCubSj+uNdYV8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzTGlzdC5qcyJdLCJuYW1lcyI6WyJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJ1c2VTdGF0ZSIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJEYXRhIiwidXNlRWZmZWN0Iiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzcGVha2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsa0JBRUFDLCtDQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFaENDLFlBRmdDO0FBQUEsTUFFbEJDLGNBRmtCOztBQUt0Q0Msa0RBQVMsQ0FBQyxZQUFNLENBR2YsQ0FIUSxFQUdOLEVBSE0sQ0FBVDs7QUFNRCxNQUFNQyxpQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEVBQUQsRUFBTTtBQUM5QixRQUFNQyxtQkFBbUIsR0FBRUwsWUFBWSxDQUFDTSxJQUFiLENBQWtCLFVBQVNDLEdBQVQsRUFBYTtBQUN6RCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBVUEsRUFBakI7QUFDQSxLQUYwQixDQUEzQjs7QUFHQSxRQUFNSSxnQkFBZ0IsbUNBQ2xCSCxtQkFEa0I7QUFFckJJLGNBQVEsRUFBQyxDQUFDSixtQkFBbUIsQ0FBQ0k7QUFGVCxNQUF0Qjs7QUFLQSxRQUFNQyxlQUFlLEdBQUdWLFlBQVksQ0FBQ1csR0FBYixDQUFpQixVQUFTSixHQUFULEVBQWE7QUFDckQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVVBLEVBQVYsR0FBY0ksZ0JBQWQsR0FBaUNELEdBQXhDO0FBQ0EsS0FGdUIsQ0FBeEI7QUFJQU4sa0JBQWMsQ0FBQ1MsZUFBRCxDQUFkO0FBQ0EsR0FkRDs7QUFnQkMsc0JBQ0M7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0VWLFlBQVksQ0FBQ1csR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ3BDLDRCQUNDLDhEQUFDLDZDQUFEO0FBRUMsaUJBQU8sRUFBRUEsT0FGVjtBQUdDLHNCQUFZLEVBQUVkLFlBSGY7QUFJQywwQkFBZ0IsRUFBRTtBQUFBLG1CQUFJSyxpQkFBZ0IsQ0FBQ1MsT0FBTyxDQUFDUixFQUFULENBQXBCO0FBQUE7QUFKbkIsV0FDTVEsT0FBTyxDQUFDUixFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFRQSxPQVRBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWdCQSxDQTNDRDs7R0FBTVAsWTs7S0FBQUEsWTtBQTZDTiwrREFBZ0JBLFlBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRmOTI4MmE3ZTRmOWQ2NWUzYzI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XHJcbmltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTcGVha2Vyc0xpc3QgPSAoe3Nob3dTZXNzaW9uc30pPT57XHJcblxyXG5jb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2VyRGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuXHR9LCBbXSk7XHJcblxyXG5cclxuY29uc3Qgb25GYXZvcml0ZVRvZ2dsZSA9IChpZCk9PntcclxuXHRjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbihyZWMpe1xyXG5cdFx0cmV0dXJuIHJlYy5pZCA9PT1pZFxyXG5cdH0pO1xyXG5cdGNvbnN0IHNwZWFrZXJSZWNVcGRhdGUgPSB7XHJcblx0XHQuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG5cdFx0ZmF2b3JpdGU6IXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uKHJlYyl7XHJcblx0XHRyZXR1cm4gcmVjLmlkID09PWlkPyBzcGVha2VyUmVjVXBkYXRlIDogcmVjO1xyXG5cdH0pO1xyXG5cclxuXHRzZXRTcGVha2VyRGF0YShzcGVha2Vyc0RhdGFOZXcpXHJcbn1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8U3BlYWtlclxyXG5cdFx0XHRcdFx0XHRcdGtleT17c3BlYWtlci5pZH1cclxuXHRcdFx0XHRcdFx0XHRzcGVha2VyPXtzcGVha2VyfVxyXG5cdFx0XHRcdFx0XHRcdHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG5cdFx0XHRcdFx0XHRcdG9uRmF2b3JpdGVUb2dnbGU9eygpPT5vbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0ICBkZWZhdWx0IFNwZWFrZXJzTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
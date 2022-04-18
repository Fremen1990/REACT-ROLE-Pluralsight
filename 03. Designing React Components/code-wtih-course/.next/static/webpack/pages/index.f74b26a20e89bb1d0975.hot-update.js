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
          lineNumber: 33,
          columnNumber: 7
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, _this);
};

_s(SpeakersList, "VNjCQgwMIxO89QZHTXFhogZFwTI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzTGlzdC5qcyJdLCJuYW1lcyI6WyJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJ1c2VTdGF0ZSIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJEYXRhIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzcGVha2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsa0JBRUFDLCtDQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFaENDLFlBRmdDO0FBQUEsTUFFbEJDLGNBRmtCOztBQUt2QyxNQUFNQyxpQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEVBQUQsRUFBTTtBQUM5QixRQUFNQyxtQkFBbUIsR0FBRUosWUFBWSxDQUFDSyxJQUFiLENBQWtCLFVBQVNDLEdBQVQsRUFBYTtBQUN6RCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBVUEsRUFBakI7QUFDQSxLQUYwQixDQUEzQjs7QUFHQSxRQUFNSSxnQkFBZ0IsbUNBQ2xCSCxtQkFEa0I7QUFFckJJLGNBQVEsRUFBQyxDQUFDSixtQkFBbUIsQ0FBQ0k7QUFGVCxNQUF0Qjs7QUFLQSxRQUFNQyxlQUFlLEdBQUdULFlBQVksQ0FBQ1UsR0FBYixDQUFpQixVQUFTSixHQUFULEVBQWE7QUFDckQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVVBLEVBQVYsR0FBY0ksZ0JBQWQsR0FBaUNELEdBQXhDO0FBQ0EsS0FGdUIsQ0FBeEI7QUFJQUwsa0JBQWMsQ0FBQ1EsZUFBRCxDQUFkO0FBR0EsR0FoQkQ7O0FBa0JDLHNCQUNDO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLGdCQUNFVCxZQUFZLENBQUNVLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNwQyw0QkFDQyw4REFBQyw2Q0FBRDtBQUVDLGlCQUFPLEVBQUVBLE9BRlY7QUFHQyxzQkFBWSxFQUFFYixZQUhmO0FBSUMsMEJBQWdCLEVBQUU7QUFBQSxtQkFBSUksaUJBQWdCLENBQUNTLE9BQU8sQ0FBQ1IsRUFBVCxDQUFwQjtBQUFBO0FBSm5CLFdBQ01RLE9BQU8sQ0FBQ1IsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBUUEsT0FUQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnQkEsQ0F2Q0Q7O0dBQU1OLFk7O0tBQUFBLFk7QUF5Q04sK0RBQWdCQSxZQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNzRiMjZhMjBlODliYjFkMDk3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnNMaXN0ID0gKHtzaG93U2Vzc2lvbnN9KT0+e1xyXG5cclxuY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlckRhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG5cclxuY29uc3Qgb25GYXZvcml0ZVRvZ2dsZSA9IChpZCk9PntcclxuXHRjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbihyZWMpe1xyXG5cdFx0cmV0dXJuIHJlYy5pZCA9PT1pZFxyXG5cdH0pO1xyXG5cdGNvbnN0IHNwZWFrZXJSZWNVcGRhdGUgPSB7XHJcblx0XHQuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG5cdFx0ZmF2b3JpdGU6IXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uKHJlYyl7XHJcblx0XHRyZXR1cm4gcmVjLmlkID09PWlkPyBzcGVha2VyUmVjVXBkYXRlIDogcmVjO1xyXG5cdH0pO1xyXG5cclxuXHRzZXRTcGVha2VyRGF0YShzcGVha2Vyc0RhdGFOZXcpXHJcblxyXG5cclxufVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0e3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxTcGVha2VyXHJcblx0XHRcdFx0XHRcdFx0a2V5PXtzcGVha2VyLmlkfVxyXG5cdFx0XHRcdFx0XHRcdHNwZWFrZXI9e3NwZWFrZXJ9XHJcblx0XHRcdFx0XHRcdFx0c2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XHJcblx0XHRcdFx0XHRcdFx0b25GYXZvcml0ZVRvZ2dsZT17KCk9Pm9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgIGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
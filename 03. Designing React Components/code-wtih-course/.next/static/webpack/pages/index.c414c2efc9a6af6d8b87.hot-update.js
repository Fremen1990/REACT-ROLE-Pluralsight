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
              _context.next = 2;
              return delay(2000);

            case 2:
              setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          lineNumber: 42,
          columnNumber: 7
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, _this);
};

_s(SpeakersList, "Zlrz+J4Z0zDc4Jcoslr5YWQllw0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzTGlzdC5qcyJdLCJuYW1lcyI6WyJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJ1c2VTdGF0ZSIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJzRGF0YSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkYXRhIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzcGVha2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQW9CO0FBQUE7O0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFBQSxrQkFFQUMsK0NBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVqQ0MsWUFGaUM7QUFBQSxNQUVuQkMsZUFGbUI7O0FBSXhDLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLEVBQUU7QUFBQSxXQUFJLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBWUMsVUFBVSxDQUFDRCxPQUFELEVBQVNGLEVBQVQsQ0FBdEI7QUFBQSxLQUFaLENBQUo7QUFBQSxHQUFoQjs7QUFFQUksa0RBQVMsQ0FBQyxZQUFNO0FBRWYsb2VBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01MLEtBQUssQ0FBQyxJQUFELENBRFg7O0FBQUE7QUFFQUQsNkJBQWUsQ0FBQ08sOENBQUQsQ0FBZjs7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBS0EsR0FQUSxFQU9QLEVBUE8sQ0FBVDs7QUFVQSxNQUFNQyxpQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEVBQUQsRUFBUTtBQUNoQyxRQUFNQyxtQkFBbUIsR0FBR1gsWUFBWSxDQUFDWSxJQUFiLENBQWtCLFVBQVVDLEdBQVYsRUFBZTtBQUM1RCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBbEI7QUFDQSxLQUYyQixDQUE1Qjs7QUFHQSxRQUFNSSxnQkFBZ0IsbUNBQ2xCSCxtQkFEa0I7QUFFckJJLGNBQVEsRUFBRSxDQUFDSixtQkFBbUIsQ0FBQ0k7QUFGVixNQUF0Qjs7QUFLQSxRQUFNQyxlQUFlLEdBQUdoQixZQUFZLENBQUNpQixHQUFiLENBQWlCLFVBQVVKLEdBQVYsRUFBZTtBQUN2RCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBWCxHQUFnQkksZ0JBQWhCLEdBQW1DRCxHQUExQztBQUNBLEtBRnVCLENBQXhCO0FBSUFaLG1CQUFlLENBQUNlLGVBQUQsQ0FBZjtBQUNBLEdBZEQ7O0FBZ0JBLHNCQUNDO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLGdCQUNFaEIsWUFBWSxDQUFDaUIsR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ3BDLDRCQUNDLDhEQUFDLDZDQUFEO0FBRUMsaUJBQU8sRUFBRUEsT0FGVjtBQUdDLHNCQUFZLEVBQUVwQixZQUhmO0FBSUMsMEJBQWdCLEVBQUU7QUFBQSxtQkFBTVcsaUJBQWdCLENBQUNTLE9BQU8sQ0FBQ1IsRUFBVCxDQUF0QjtBQUFBO0FBSm5CLFdBQ01RLE9BQU8sQ0FBQ1IsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBUUEsT0FUQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnQkEsQ0FoREQ7O0dBQU1iLFk7O0tBQUFBLFk7QUFrRE4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzQxNGMyZWZjOWE2YWY2ZDhiODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcclxuaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzTGlzdCA9ICh7c2hvd1Nlc3Npb25zfSkgPT4ge1xyXG5cclxuXHRjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG5cdGNvbnN0IGRlbGF5ID0gbXMgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpPT4gc2V0VGltZW91dChyZXNvbHZlLG1zKSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblx0XHQoYXN5bmMoKT0+e1xyXG5cdFx0XHRhd2FpdCBkZWxheSgyMDAwKVxyXG5cdFx0XHRzZXRTcGVha2Vyc0RhdGEoZGF0YSlcclxuXHRcdH0pKClcclxuXHJcblx0fSxbXSApO1xyXG5cclxuXHJcblx0Y29uc3Qgb25GYXZvcml0ZVRvZ2dsZSA9IChpZCkgPT4ge1xyXG5cdFx0Y29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcclxuXHRcdFx0cmV0dXJuIHJlYy5pZCA9PT0gaWRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3Qgc3BlYWtlclJlY1VwZGF0ZSA9IHtcclxuXHRcdFx0Li4uc3BlYWtlcnNSZWNQcmV2aW91cyxcclxuXHRcdFx0ZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG5cdFx0XHRyZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGUgOiByZWM7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHR7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PFNwZWFrZXJcclxuXHRcdFx0XHRcdFx0XHRrZXk9e3NwZWFrZXIuaWR9XHJcblx0XHRcdFx0XHRcdFx0c3BlYWtlcj17c3BlYWtlcn1cclxuXHRcdFx0XHRcdFx0XHRzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuXHRcdFx0XHRcdFx0XHRvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
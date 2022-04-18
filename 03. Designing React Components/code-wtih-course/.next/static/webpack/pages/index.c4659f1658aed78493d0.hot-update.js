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
              throw "Had error!!";

            case 7:
              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setIsLoading(false);
              setHasError(true);
              setError(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
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
      lineNumber: 49,
      columnNumber: 58
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 22
  }, _this);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
            lineNumber: 61,
            columnNumber: 8
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzTGlzdC5qcyJdLCJuYW1lcyI6WyJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJ1c2VTdGF0ZSIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0Vycm9yIiwic2V0SGFzRXJyb3IiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZSIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwic3BlYWtlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUFBLGtCQUVBQywrQ0FBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWpDQyxZQUZpQztBQUFBLE1BRW5CQyxlQUZtQjs7QUFBQSxtQkFHTkYsK0NBQVEsQ0FBQyxJQUFELENBSEY7QUFBQSxNQUdqQ0csU0FIaUM7QUFBQSxNQUd0QkMsWUFIc0I7O0FBQUEsbUJBSVJKLCtDQUFRLENBQUMsS0FBRCxDQUpBO0FBQUEsTUFJakNLLFFBSmlDO0FBQUEsTUFJdkJDLFdBSnVCOztBQUFBLG1CQUtkTiwrQ0FBUSxDQUFDLEVBQUQsQ0FMTTtBQUFBLE1BS2pDTyxLQUxpQztBQUFBLE1BSzFCQyxRQUwwQjs7QUFPeEMsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUMsRUFBRTtBQUFBLFdBQUksSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBSjtBQUFBLEdBQWhCOztBQUVBSSxrREFBUyxDQUFDLFlBQU07QUFFZixvZUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVPTCxLQUFLLENBQUMsSUFBRCxDQUZaOztBQUFBO0FBQUEsb0JBR08sYUFIUDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT0NMLDBCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FFLHlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FFLHNCQUFRLGFBQVI7O0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQWNBLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7O0FBbUJBLE1BQU1PLGlCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsRUFBRCxFQUFRO0FBQ2hDLFFBQU1DLG1CQUFtQixHQUFHaEIsWUFBWSxDQUFDaUIsSUFBYixDQUFrQixVQUFVQyxHQUFWLEVBQWU7QUFDNUQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQWxCO0FBQ0EsS0FGMkIsQ0FBNUI7O0FBR0EsUUFBTUksZ0JBQWdCLG1DQUNsQkgsbUJBRGtCO0FBRXJCSSxjQUFRLEVBQUUsQ0FBQ0osbUJBQW1CLENBQUNJO0FBRlYsTUFBdEI7O0FBS0EsUUFBTUMsZUFBZSxHQUFHckIsWUFBWSxDQUFDc0IsR0FBYixDQUFpQixVQUFVSixHQUFWLEVBQWU7QUFDdkQsYUFBT0EsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQVgsR0FBZ0JJLGdCQUFoQixHQUFtQ0QsR0FBMUM7QUFDQSxLQUZ1QixDQUF4QjtBQUlBakIsbUJBQWUsQ0FBQ29CLGVBQUQsQ0FBZjtBQUNBLEdBZEQ7O0FBZ0JBLE1BQUdqQixRQUFILEVBQWEsb0JBQU87QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLHVDQUFvQztBQUFBLGlEQUFnQ0UsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBRWIsTUFBSUosU0FBSixFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFFZixzQkFFQztBQUFBLDJCQUVDO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDRUYsWUFBWSxDQUFDc0IsR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ3BDLDhCQUNDLDhEQUFDLDZDQUFEO0FBRUMsbUJBQU8sRUFBRUEsT0FGVjtBQUdDLHdCQUFZLEVBQUV6QixZQUhmO0FBSUMsNEJBQWdCLEVBQUU7QUFBQSxxQkFBTWdCLGlCQUFnQixDQUFDUyxPQUFPLENBQUNSLEVBQVQsQ0FBdEI7QUFBQTtBQUpuQixhQUNNUSxPQUFPLENBQUNSLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERDtBQVFBLFNBVEE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZELG1CQUZEO0FBdUJBLENBdkVEOztHQUFNbEIsWTs7S0FBQUEsWTtBQXlFTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNDY1OWYxNjU4YWVkNzg0OTNkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnNMaXN0ID0gKHtzaG93U2Vzc2lvbnN9KSA9PiB7XHJcblxyXG5cdGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHRjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cdGNvbnN0IGRlbGF5ID0gbXMgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHRcdChhc3luYyAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YXdhaXQgZGVsYXkoMjAwMClcclxuXHRcdFx0XHR0aHJvdyBcIkhhZCBlcnJvciEhXCJcclxuXHRcdFx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpXHJcblx0XHRcdFx0YXdhaXQgc2V0U3BlYWtlcnNEYXRhKGRhdGEpXHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNldEhhc0Vycm9yKHRydWUpO1xyXG5cdFx0XHRcdHNldEVycm9yKGUpXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KSgpXHJcblxyXG5cdH0sIFtdKTtcclxuXHJcblxyXG5cdGNvbnN0IG9uRmF2b3JpdGVUb2dnbGUgPSAoaWQpID0+IHtcclxuXHRcdGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XHJcblx0XHRcdHJldHVybiByZWMuaWQgPT09IGlkXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHNwZWFrZXJSZWNVcGRhdGUgPSB7XHJcblx0XHRcdC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXHJcblx0XHRcdGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcclxuXHRcdFx0cmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlIDogcmVjO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldylcclxuXHR9XHJcblxyXG5cdGlmKGhhc0Vycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkVSUk9SOiA8Yj5Mb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj48L2Rpdj5cclxuXHJcblx0aWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuXHRyZXR1cm4gKFxyXG5cclxuXHRcdDw+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0PFNwZWFrZXJcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17c3BlYWtlci5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdHNwZWFrZXI9e3NwZWFrZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuXHRcdFx0XHRcdFx0XHRcdG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHQ8Lz5cclxuXHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
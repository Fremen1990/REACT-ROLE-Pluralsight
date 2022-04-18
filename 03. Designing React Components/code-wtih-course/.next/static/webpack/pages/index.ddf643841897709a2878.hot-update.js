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
              _context.next = 2;
              return delay(2000);

            case 2:
              setIsLoading(false);
              _context.next = 5;
              return setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data);

            case 5:
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
          lineNumber: 46,
          columnNumber: 7
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzTGlzdC5qcyJdLCJuYW1lcyI6WyJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJ1c2VTdGF0ZSIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0Vycm9yIiwic2V0SGFzRXJyb3IiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGUiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCIsInNwZWFrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUFBLGtCQUVBQywrQ0FBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWpDQyxZQUZpQztBQUFBLE1BRW5CQyxlQUZtQjs7QUFBQSxtQkFHTkYsK0NBQVEsQ0FBQyxJQUFELENBSEY7QUFBQSxNQUdqQ0csU0FIaUM7QUFBQSxNQUd0QkMsWUFIc0I7O0FBQUEsbUJBSVJKLCtDQUFRLENBQUMsS0FBRCxDQUpBO0FBQUEsTUFJakNLLFFBSmlDO0FBQUEsTUFJdkJDLFdBSnVCOztBQUFBLG1CQUtkTiwrQ0FBUSxDQUFDLEVBQUQsQ0FMTTtBQUFBLE1BS2pDTyxLQUxpQztBQUFBLE1BSzFCQyxRQUwwQjs7QUFPeEMsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUMsRUFBRTtBQUFBLFdBQUksSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBSjtBQUFBLEdBQWhCOztBQUVBSSxrREFBUyxDQUFDLFlBQU07QUFFZixvZUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTUwsS0FBSyxDQUFDLElBQUQsQ0FEWDs7QUFBQTtBQUVBTCwwQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUZBO0FBQUEscUJBR01GLGVBQWUsQ0FBQ2EsOENBQUQsQ0FIckI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQU1BLEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBV0EsTUFBTUMsaUJBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQVE7QUFDaEMsUUFBTUMsbUJBQW1CLEdBQUdqQixZQUFZLENBQUNrQixJQUFiLENBQWtCLFVBQVVDLEdBQVYsRUFBZTtBQUM1RCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBbEI7QUFDQSxLQUYyQixDQUE1Qjs7QUFHQSxRQUFNSSxnQkFBZ0IsbUNBQ2xCSCxtQkFEa0I7QUFFckJJLGNBQVEsRUFBRSxDQUFDSixtQkFBbUIsQ0FBQ0k7QUFGVixNQUF0Qjs7QUFLQSxRQUFNQyxlQUFlLEdBQUd0QixZQUFZLENBQUN1QixHQUFiLENBQWlCLFVBQVVKLEdBQVYsRUFBZTtBQUN2RCxhQUFPQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBWCxHQUFnQkksZ0JBQWhCLEdBQW1DRCxHQUExQztBQUNBLEtBRnVCLENBQXhCO0FBSUFsQixtQkFBZSxDQUFDcUIsZUFBRCxDQUFmO0FBQ0EsR0FkRDs7QUFnQkEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0V0QixZQUFZLENBQUN1QixHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDcEMsNEJBQ0MsOERBQUMsNkNBQUQ7QUFFQyxpQkFBTyxFQUFFQSxPQUZWO0FBR0Msc0JBQVksRUFBRTFCLFlBSGY7QUFJQywwQkFBZ0IsRUFBRTtBQUFBLG1CQUFNaUIsaUJBQWdCLENBQUNTLE9BQU8sQ0FBQ1IsRUFBVCxDQUF0QjtBQUFBO0FBSm5CLFdBQ01RLE9BQU8sQ0FBQ1IsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBUUEsT0FUQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnQkEsQ0FwREQ7O0dBQU1uQixZOztLQUFBQSxZO0FBc0ROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkZjY0Mzg0MTg5NzcwOWEyODc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XHJcbmltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTcGVha2Vyc0xpc3QgPSAoe3Nob3dTZXNzaW9uc30pID0+IHtcclxuXHJcblx0Y29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblx0Y29uc3QgZGVsYXkgPSBtcyA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdFx0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0YXdhaXQgZGVsYXkoMjAwMClcclxuXHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxyXG5cdFx0XHRhd2FpdCBzZXRTcGVha2Vyc0RhdGEoZGF0YSlcclxuXHRcdH0pKClcclxuXHJcblx0fSwgW10pO1xyXG5cclxuXHJcblx0Y29uc3Qgb25GYXZvcml0ZVRvZ2dsZSA9IChpZCkgPT4ge1xyXG5cdFx0Y29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcclxuXHRcdFx0cmV0dXJuIHJlYy5pZCA9PT0gaWRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3Qgc3BlYWtlclJlY1VwZGF0ZSA9IHtcclxuXHRcdFx0Li4uc3BlYWtlcnNSZWNQcmV2aW91cyxcclxuXHRcdFx0ZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG5cdFx0XHRyZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGUgOiByZWM7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHR7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PFNwZWFrZXJcclxuXHRcdFx0XHRcdFx0XHRrZXk9e3NwZWFrZXIuaWR9XHJcblx0XHRcdFx0XHRcdFx0c3BlYWtlcj17c3BlYWtlcn1cclxuXHRcdFx0XHRcdFx0XHRzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuXHRcdFx0XHRcdFx0XHRvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
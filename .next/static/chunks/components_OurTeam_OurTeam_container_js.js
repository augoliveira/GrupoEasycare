(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_OurTeam_OurTeam_container_js"],{

/***/ "./components/OurTeam/OurTeam.container.js":
/*!*************************************************!*\
  !*** ./components/OurTeam/OurTeam.container.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OurTeamContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OurTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OurTeam */ "./components/OurTeam/OurTeam.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Grupoeasycare-main\\components\\OurTeam\\OurTeam.container.js",
    _s = $RefreshSig$();




function OurTeamContainer() {
  _s();

  var teamMembers = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.teamMembers;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OurTeam__WEBPACK_IMPORTED_MODULE_3__.default, {
    teamMembers: teamMembers
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

_s(OurTeamContainer, "K4+xmRQvNwwQvX51FdsCxvONTHk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = OurTeamContainer;

var _c;

$RefreshReg$(_c, "OurTeamContainer");

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

/***/ "./components/OurTeam/OurTeam.jsx":
/*!****************************************!*\
  !*** ./components/OurTeam/OurTeam.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OurTeam; }
/* harmony export */ });
/* harmony import */ var D_Grupoeasycare_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TeamMember_TeamMember__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TeamMember/TeamMember */ "./components/OurTeam/components/TeamMember/TeamMember.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Grupoeasycare-main\\components\\OurTeam\\OurTeam.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Grupoeasycare_main_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function OurTeam(_ref) {
  var _this = this;

  var _ref$teamMembers = _ref.teamMembers,
      teamMembers = _ref$teamMembers === void 0 ? [] : _ref$teamMembers;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "row my-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "col-12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "noo-sh-title",
        children: "Time de profissionais"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), teamMembers.map(function (memberDetails, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "col-sm-12 col-lg-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TeamMember_TeamMember__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, memberDetails), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = OurTeam;

var _c;

$RefreshReg$(_c, "OurTeam");

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

/***/ "./components/OurTeam/components/TeamMember/TeamMember.jsx":
/*!*****************************************************************!*\
  !*** ./components/OurTeam/components/TeamMember/TeamMember.jsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TeamMember; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Grupoeasycare-main\\components\\OurTeam\\components\\TeamMember\\TeamMember.jsx";

function TeamMember(_ref) {
  var name = _ref.name,
      designation = _ref.designation,
      image = _ref.image,
      about = _ref.about;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "hover-team",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "our-team",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: image,
        alt: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "title",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "post",
          children: designation
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "social",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "fab fa-facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "fab fa-twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "fab fa-google-plus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "fab fa-youtube"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "icon",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-plus",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "team-description",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: about
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
      className: "my-0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = TeamMember;

var _c;

$RefreshReg$(_c, "TeamMember");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PdXJUZWFtL091clRlYW0uY29udGFpbmVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL091clRlYW0vT3VyVGVhbS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3VyVGVhbS9jb21wb25lbnRzL1RlYW1NZW1iZXIvVGVhbU1lbWJlci5qc3giXSwibmFtZXMiOlsiT3VyVGVhbUNvbnRhaW5lciIsInRlYW1NZW1iZXJzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIk91clRlYW0iLCJtYXAiLCJtZW1iZXJEZXRhaWxzIiwiaW5kZXgiLCJUZWFtTWVtYmVyIiwibmFtZSIsImRlc2lnbmF0aW9uIiwiaW1hZ2UiLCJhYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQ3pDLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixXQUFqQjtBQUFBLEdBQUQsQ0FBL0I7QUFDQSxzQkFBTyw4REFBQyw2Q0FBRDtBQUFTLGVBQVcsRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBSHVCRCxnQjtVQUNGRSxvRDs7O0tBREVGLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeEI7QUFDQTtBQUVlLFNBQVNJLE9BQVQsT0FBdUM7QUFBQTs7QUFBQSw4QkFBcEJILFdBQW9CO0FBQUEsTUFBcEJBLFdBQW9CLGlDQUFOLEVBQU07QUFDcEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFT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dXJUZWFtX2NvbnRhaW5lcl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgT3VyVGVhbSBmcm9tIFwiLi9PdXJUZWFtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91clRlYW1Db250YWluZXIoKSB7XG4gIGNvbnN0IHRlYW1NZW1iZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50ZWFtTWVtYmVycyk7XG4gIHJldHVybiA8T3VyVGVhbSB0ZWFtTWVtYmVycz17dGVhbU1lbWJlcnN9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRlYW1NZW1iZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UZWFtTWVtYmVyL1RlYW1NZW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3VyVGVhbSh7IHRlYW1NZW1iZXJzID0gW10gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibm9vLXNoLXRpdGxlXCI+VGltZSBkZSBwcm9maXNzaW9uYWlzPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAge3RlYW1NZW1iZXJzLm1hcCgobWVtYmVyRGV0YWlscywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLWxnLTZcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8VGVhbU1lbWJlciB7Li4ubWVtYmVyRGV0YWlsc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbU1lbWJlcih7IG5hbWUsIGRlc2lnbmF0aW9uLCBpbWFnZSwgYWJvdXQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXItdGVhbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXItdGVhbVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17bmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57bmFtZX08L2gzPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RcIj57ZGVzaWduYXRpb259PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbFwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rXCI+PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmFiIGZhLWdvb2dsZS1wbHVzXCI+PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmYWIgZmEteW91dHViZVwiPjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxwPnthYm91dH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzc05hbWU9XCJteS0wXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
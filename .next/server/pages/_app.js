(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./actions/cart.js":
/*!*************************!*\
  !*** ./actions/cart.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TO_CART": function() { return /* binding */ ADD_TO_CART; },
/* harmony export */   "UPDATE_PRODUCT_QUANTITY": function() { return /* binding */ UPDATE_PRODUCT_QUANTITY; },
/* harmony export */   "REMOVE_PRODUCT_FROM_CART": function() { return /* binding */ REMOVE_PRODUCT_FROM_CART; },
/* harmony export */   "addToCart": function() { return /* binding */ addToCart; },
/* harmony export */   "updateProductQuantity": function() { return /* binding */ updateProductQuantity; },
/* harmony export */   "deleteProduct": function() { return /* binding */ deleteProduct; }
/* harmony export */ });
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY";
const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
const addToCart = (product, quantity = 1) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity
    }
  };
};
const updateProductQuantity = (productId, quantity = 1) => {
  return {
    type: UPDATE_PRODUCT_QUANTITY,
    payload: {
      productId,
      quantity
    }
  };
};
const deleteProduct = productId => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: productId
});

/***/ }),

/***/ "./components/Layout/Layout.jsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TopBar/TopBar */ "./components/Layout/components/TopBar/TopBar.jsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header/Header */ "./components/Layout/components/Header/Header.jsx");
/* harmony import */ var _components_InstagramFeed_InstagramFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/InstagramFeed/InstagramFeed */ "./components/Layout/components/InstagramFeed/InstagramFeed.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer/Footer */ "./components/Layout/components/Footer/Footer.jsx");


var _jsxFileName = "D:\\Grupoeasycare-main\\components\\Layout\\Layout.jsx";





function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      id: "back-to-top",
      title: "Back to top",
      style: {
        display: "none"
      },
      children: "\u2191"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Layout/components/FooterCopyright/FooterCopyright.jsx":
/*!**************************************************************************!*\
  !*** ./components/Layout/components/FooterCopyright/FooterCopyright.jsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FooterCopyright; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Grupoeasycare-main\\components\\Layout\\components\\FooterCopyright\\FooterCopyright.jsx";

function FooterCopyright() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "footer-copyright",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "footer-company",
      children: ["Todos Direitos Reservados. \xA9 2021 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Grupo Easy care"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 48
      }, this), " WebDesign Por :", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://balaiodacriacao.com.br/",
        children: "Balaio da cria\xE7\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Layout/components/Footer/Footer.jsx":
/*!********************************************************!*\
  !*** ./components/Layout/components/Footer/Footer.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InstagramFeed_InstagramFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InstagramFeed/InstagramFeed */ "./components/Layout/components/InstagramFeed/InstagramFeed.jsx");
/* harmony import */ var _FooterCopyright_FooterCopyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FooterCopyright/FooterCopyright */ "./components/Layout/components/FooterCopyright/FooterCopyright.jsx");


var _jsxFileName = "D:\\Grupoeasycare-main\\components\\Layout\\components\\Footer\\Footer.jsx";



function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InstagramFeed_InstagramFeed__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "footer-main",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-4 col-md-12 col-sm-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Sobre Grupo Easy care"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "Estamos h\xE1 5 anos no mercado empenhados na presta\xE7\xE3o de servi\xE7os de m\xF3veis planejados, pedras esculpidas e, atualmente, trabalhamos com engenharia, automa\xE7\xE3o residencial, energia fotovoltaica e servi\xE7os financeiros."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "https://www.facebook.com/grupoeasycare/",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "fab fa-facebook",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 25,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "https://www.instagram.com/grupoeasycare/",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "fab fa-instagram",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "https://br.pinterest.com/easycareservicos",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "fab fa-pinterest-p",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "https://api.whatsapp.com/send?phone=5561998581779",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "fab fa-whatsapp",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-3 col-md-12 col-sm-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-link",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Links"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      children: "Sobre-n\xF3s"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      children: "Servi\xE7os"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      children: "Projetos"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      children: "Politica de privacidade"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-5 col-md-12 col-sm-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-link-contact",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Nossos contato"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "fas fa-map-marker-alt"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 25
                      }, this), "Endere\xE7o: Lote 230 - Guar\xE1 Bras\xEDlia - DF,", " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "fas fa-phone-square"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 25
                      }, this), "Televenda:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: "tel: 61 3975-1779",
                        children: " 61 3975-1779"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "fas fa-envelope"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 25
                      }, this), "Email:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: "mailto:contactinfo@gmail.com",
                        children: "comercial@grupoeasycare.com.br"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterCopyright_FooterCopyright__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Layout/components/Header/Header.jsx":
/*!********************************************************!*\
  !*** ./components/Layout/components/Header/Header.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TopBar_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TopBar/TopBar */ "./components/Layout/components/TopBar/TopBar.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Grupoeasycare-main\\components\\Layout\\components\\Header\\Header.jsx";




function Header() {
  const cartItemsCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.cart.length);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "main-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "navbar-header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "navbar-toggler",
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navbar-menu",
              "aria-controls": "navbars-rs-food",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fa fa-bars"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "navbar-brand",
              href: "index.html",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/logo.png",
                className: "logo",
                alt: "logo",
                class: "img-fluid",
                title: "Logo grupo easy care - m\xF3veis planejados"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "collapse navbar-collapse",
            id: "navbar-menu",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "nav navbar-nav ml-auto",
              "data-in": "fadeInDown",
              "data-out": "fadeOutUp",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item active",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    children: "Inicio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/about",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    children: "Sobre-N\xF3s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/projetos",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    children: "Projetos"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/servicos",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    children: "Servi\xE7os"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/Blog",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    children: "Blog"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/contato",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "nav-link",
                    children: "Fale conosco"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Layout/components/InstagramFeed/InstagramFeed.jsx":
/*!**********************************************************************!*\
  !*** ./components/Layout/components/InstagramFeed/InstagramFeed.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InstagramFeed; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Grupoeasycare-main\\components\\Layout\\components\\InstagramFeed\\InstagramFeed.jsx";

function InstagramFeed() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "instagram-box",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "main-instagram owl-carousel owl-theme",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-01.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-02.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-03.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-04.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-05.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-06.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-07.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-08.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-09.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ins-inner-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/instagram-img-05.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hov-in",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Layout/components/TopBar/TopBar.jsx":
/*!********************************************************!*\
  !*** ./components/Layout/components/TopBar/TopBar.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TopBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Grupoeasycare-main\\components\\Layout\\components\\TopBar\\TopBar.jsx";

function TopBar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "main-top",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-6 col-md-6 col-sm-12 col-xs-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-slid-box",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "offer-box",
              className: "carouselTicker",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "offer-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-opencart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 21
                  }, this), " M\xF3veis planejados com pre\xE7o especiais"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-opencart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 21
                  }, this), " Planejados para espa\xE7os reduzido"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-opencart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 21
                  }, this), " Nosso Show room tem as melhores op\xE7\xF5es"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-opencart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 21
                  }, this), " Atendemos Bras\xEDlia e regioes"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-opencart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 21
                  }, this), " Solicite um vendedor"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-opencart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 21
                  }, this), " Somos projetores de sonhos"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-opencart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 21
                  }, this), " Podemos tornar em relidade seus sonhos!"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-opencart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, this), " Fa\xE7a seu projeto e venha para Grupo Easy care"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-6 col-md-6 col-sm-12 col-xs-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "custom-select-box"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "right-phone-box",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["VENDA:- ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "tel:613975-1779",
                children: " 61 3975-1779"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "our-link",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "https://api.whatsapp.com/send?phone=5561998581779",
                  children: "WhatSapp"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "tel:5561998581779",
                  children: "Nossos contatos"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/OurTeam/OurTeam.reducers.js":
/*!************************************************!*\
  !*** ./components/OurTeam/OurTeam.reducers.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = [{
  name: "Lilian Figueiredo",
  designation: "Gerente Geral.",
  image: "images/img-1.jpg",
  about: "Responsável por liderar o time Easy Care, promover a integração, a qualidade e o cuidado com os clientes na construção e realização dos seus sonhos."
}, {
  name: "Fábio Silva:",
  designation: "Diretor de comunicação",
  image: "images/img-2.jpg",
  about: "Responsável pelos relacionamentos, gestão de negócios, parcerias, comunicação do grupo e negociação."
}];

const ourTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ourTeamReducer);

/***/ }),

/***/ "./components/ShopCategories/ShopCategories.initialstate.js":
/*!******************************************************************!*\
  !*** ./components/ShopCategories/ShopCategories.initialstate.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shopCategoriesInitialState = [{
  name: "Cozinha",
  image: "women-shoes-img.jpg"
}, {
  name: "Armario",
  image: "instagram-img-03.jpg"
}, {
  name: "Home",
  image: "shoes-img.jpg"
}, {
  name: "Quanto planejado",
  image: "instagram-img-01.jpg"
}, {
  name: "Bancada",
  image: "Planejados-img.jpg"
}, {
  name: "Women Shows",
  image: "Bancada-para-cozinha-img.jpg"
}, {
  name: "Bancada de marmore",
  image: "bancada-de-marmore-img.jpg"
}, {
  name: "Cozinha",
  image: "planejados-de-cozinha-img.jpg"
}, {
  name: "Painel planejados",
  image: "painel-img.jpg"
}, {
  name: "Armario",
  image: "armario-img.jpg"
}, {
  name: "Armario de cozinha",
  image: "Armario-de-cozinha-img.jpg"
}, {
  name: "Quarto",
  image: "Quarto-img.jpg"
}];
/* harmony default export */ __webpack_exports__["default"] = (shopCategoriesInitialState);

/***/ }),

/***/ "./components/ShopCategories/ShopCatergories.reducer.js":
/*!**************************************************************!*\
  !*** ./components/ShopCategories/ShopCatergories.reducer.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopCategories_initialstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopCategories.initialstate */ "./components/ShopCategories/ShopCategories.initialstate.js");


function ShopCategoriesReducer(state = _ShopCategories_initialstate__WEBPACK_IMPORTED_MODULE_0__.default, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ShopCategoriesReducer);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store.js");

var _jsxFileName = "D:\\Grupoeasycare-main\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_4__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./reducers/cart.js":
/*!**************************!*\
  !*** ./reducers/cart.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cart */ "./actions/cart.js");


function cartReducer(state = [], action) {
  switch (action.type) {
    case _actions_cart__WEBPACK_IMPORTED_MODULE_0__.ADD_TO_CART:
      {
        const {
          product: productToAdd,
          quantity = 1
        } = action.payload;
        const productsInCart = [...state];
        let isProductInCart = false;

        for (let i = 0; i < productsInCart.length; i++) {
          const product = productsInCart[i];

          if (product.id === productToAdd.id) {
            product.quantity = product.quantity + parseInt(quantity);
            isProductInCart = true;
            break;
          }
        }

        if (!isProductInCart) {
          productToAdd.quantity = parseInt(quantity);
          productsInCart.push(productToAdd);
        }

        return productsInCart;
      }

    case _actions_cart__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PRODUCT_QUANTITY:
      {
        const {
          productId,
          quantity: quantityToSet = 1
        } = action.payload;
        const productsInCart = [...state];

        for (let i = 0; i < productsInCart.length; i++) {
          const product = productsInCart[i];

          if (product.id === productId) {
            product.quantity = parseInt(quantityToSet);
            break;
          }
        }

        return productsInCart;
      }

    case _actions_cart__WEBPACK_IMPORTED_MODULE_0__.REMOVE_PRODUCT_FROM_CART:
      {
        return state.filter(product => product.id !== action.payload);
      }

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./reducers/products.reducer.js":
/*!**************************************!*\
  !*** ./reducers/products.reducer.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productsInitialState": function() { return /* binding */ productsInitialState; }
/* harmony export */ });
const productsInitialState = {
  100: {
    id: 100,
    name: "Energia Fotovoltaica",
    mrp: 999,
    selling_price: 799,
    currency: "₹",
    description: "Soluções em energia fotovoltaica para reduzir os seus gastos, e preservação, e conservação ambiental.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "img-pro-01.jpg",
    images: [{
      big: "big-img-01.jpg",
      small: "smp-img-01.jpg"
    }, {
      big: "big-img-02.jpg",
      small: "smp-img-02.jpg"
    }, {
      big: "big-img-03.jpg",
      small: "smp-img-03.jpg"
    }],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    tags: ["top-featured", "Energia-Fotovoltaica"]
  },
  101: {
    id: 101,
    name: "Pedra esculpida",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description: "Entregamos desde o projeto até a instalação com total segurança. Para levar solidez, sofisticação e bom gosto ao seu sonho.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "img-pro-02.jpg",
    images: [{
      big: "big-img-01.jpg",
      small: "smp-img-01.jpg"
    }, {
      big: "big-img-02.jpg",
      small: "smp-img-02.jpg"
    }, {
      big: "big-img-03.jpg",
      small: "smp-img-03.jpg"
    }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Pedra-esculpida"]
  },
  102: {
    id: 101,
    name: "Móveis Planejados",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description: "Somos especialistas no trabalho com MDF, um material versátil e maleável para a confecção de ambientes planejados e com requinte.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "móveis-02.jpg",
    images: [{
      big: "big-img-01.jpg",
      small: "smp-img-01.jpg"
    }, {
      big: "big-img-02.jpg",
      small: "smp-img-02.jpg"
    }, {
      big: "big-img-03.jpg",
      small: "smp-img-03.jpg"
    }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Móveis-planejados"]
  },
  103: {
    id: 101,
    name: "Móveis Planejados",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description: "Somos especialistas no trabalho com MDF, um material versátil e maleável para a confecção de ambientes planejados e com requinte.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "móveis-02.jpg",
    images: [{
      big: "big-img-01.jpg",
      small: "smp-img-01.jpg"
    }, {
      big: "big-img-02.jpg",
      small: "smp-img-02.jpg"
    }, {
      big: "big-img-03.jpg",
      small: "smp-img-03.jpg"
    }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Móveis-planejados"]
  },
  104: {
    id: 101,
    name: "Móveis Planejados",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description: "Somos especialistas no trabalho com MDF, um material versátil e maleável para a confecção de ambientes planejados e com requinte.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "móveis-02.jpg",
    images: [{
      big: "big-img-01.jpg",
      small: "smp-img-01.jpg"
    }, {
      big: "big-img-02.jpg",
      small: "smp-img-02.jpg"
    }, {
      big: "big-img-03.jpg",
      small: "smp-img-03.jpg"
    }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Móveis-planejados"]
  }
};

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (productsReducer);

/***/ }),

/***/ "./root-reducer.js":
/*!*************************!*\
  !*** ./root-reducer.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": function() { return /* binding */ rootReducer; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_OurTeam_OurTeam_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/OurTeam/OurTeam.reducers */ "./components/OurTeam/OurTeam.reducers.js");
/* harmony import */ var _components_ShopCategories_ShopCatergories_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ShopCategories/ShopCatergories.reducer */ "./components/ShopCategories/ShopCatergories.reducer.js");
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/cart */ "./reducers/cart.js");
/* harmony import */ var _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/products.reducer */ "./reducers/products.reducer.js");





const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  teamMembers: _components_OurTeam_OurTeam_reducers__WEBPACK_IMPORTED_MODULE_1__.default,
  shopCategories: _components_ShopCategories_ShopCatergories_reducer__WEBPACK_IMPORTED_MODULE_2__.default,
  cart: _reducers_cart__WEBPACK_IMPORTED_MODULE_3__.default,
  products: _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_4__.default
});

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root-reducer */ "./root-reducer.js");


const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_root_reducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer,  false && 0);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9hY3Rpb25zL2NhcnQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL0Zvb3RlckNvcHlyaWdodC9Gb290ZXJDb3B5cmlnaHQuanN4Iiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvTGF5b3V0L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL0luc3RhZ3JhbUZlZWQvSW5zdGFncmFtRmVlZC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9Ub3BCYXIvVG9wQmFyLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL091clRlYW0vT3VyVGVhbS5yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL1Nob3BDYXRlZ29yaWVzL1Nob3BDYXRlZ29yaWVzLmluaXRpYWxzdGF0ZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL1Nob3BDYXRlZ29yaWVzL1Nob3BDYXRlcmdvcmllcy5yZWR1Y2VyLmpzIiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcmVkdWNlcnMvY2FydC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9yZWR1Y2Vycy9wcm9kdWN0cy5yZWR1Y2VyLmpzIiwid2VicGFjazovL25leHRqcy8uL3Jvb3QtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2lnbm9yZWR8RDpcXEdydXBvZWFzeWNhcmUtbWFpblxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkFERF9UT19DQVJUIiwiVVBEQVRFX1BST0RVQ1RfUVVBTlRJVFkiLCJSRU1PVkVfUFJPRFVDVF9GUk9NX0NBUlQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJ0eXBlIiwicGF5bG9hZCIsInVwZGF0ZVByb2R1Y3RRdWFudGl0eSIsInByb2R1Y3RJZCIsImRlbGV0ZVByb2R1Y3QiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJGb290ZXJDb3B5cmlnaHQiLCJGb290ZXIiLCJIZWFkZXIiLCJjYXJ0SXRlbXNDb3VudCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXJ0IiwibGVuZ3RoIiwiSW5zdGFncmFtRmVlZCIsIlRvcEJhciIsImluaXRpYWxTdGF0ZSIsIm5hbWUiLCJkZXNpZ25hdGlvbiIsImltYWdlIiwiYWJvdXQiLCJvdXJUZWFtUmVkdWNlciIsImFjdGlvbiIsInNob3BDYXRlZ29yaWVzSW5pdGlhbFN0YXRlIiwiU2hvcENhdGVnb3JpZXNSZWR1Y2VyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdFRvQWRkIiwicHJvZHVjdHNJbkNhcnQiLCJpc1Byb2R1Y3RJbkNhcnQiLCJpIiwiaWQiLCJwYXJzZUludCIsInB1c2giLCJxdWFudGl0eVRvU2V0IiwiZmlsdGVyIiwicHJvZHVjdHNJbml0aWFsU3RhdGUiLCJtcnAiLCJzZWxsaW5nX3ByaWNlIiwiY3VycmVuY3kiLCJkZXNjcmlwdGlvbiIsInN0b2NrX3F0eSIsInNvbGRfcXR5IiwiZmVhdHVyZWRfaW1hZ2UiLCJpbWFnZXMiLCJiaWciLCJzbWFsbCIsInNpemVzIiwidGFncyIsInByb2R1Y3RzUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidGVhbU1lbWJlcnMiLCJzaG9wQ2F0ZWdvcmllcyIsInNob3BDYXRlZ29yaWVzUmVkdWNlciIsInByb2R1Y3RzIiwiY3JlYXRlU3RvcmUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFFQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsT0FBRCxFQUFVQyxRQUFRLEdBQUcsQ0FBckIsS0FBMkI7QUFDbEQsU0FBTztBQUNMQyxRQUFJLEVBQUVOLFdBREQ7QUFFTE8sV0FBTyxFQUFFO0FBQUVILGFBQUY7QUFBV0M7QUFBWDtBQUZKLEdBQVA7QUFJRCxDQUxNO0FBT0EsTUFBTUcscUJBQXFCLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZSixRQUFRLEdBQUcsQ0FBdkIsS0FBNkI7QUFDaEUsU0FBTztBQUNMQyxRQUFJLEVBQUVMLHVCQUREO0FBRUxNLFdBQU8sRUFBRTtBQUFFRSxlQUFGO0FB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Qyx5RUFENEI7QUFFekNtQyxnQkFBYyxFQUFFQyx1RkFGeUI7QUFHekM3QyxNQUFJLEVBQUVpQixtREFIbUM7QUFJekM2QixVQUFRLEVBQUVOLCtEQUFlQTtBQUpnQixDQUFELENBQW5DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BQO0FBQ0E7QUFFTyxNQUFNeEIsS0FBSyxHQUFHK0Isa0RBQVcsQ0FDOUJOLHNEQUQ4QixFQUU5QixVQUVFTyxDQUo0QixDQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUCx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVCA9IFwiQUREX1RPX0NBUlRcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRFVDVF9RVUFOVElUWSA9IFwiVVBEQVRFX1BST0RVQ1RfUVVBTlRJVFlcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUFJPRFVDVF9GUk9NX0NBUlQgPSBcIlJFTU9WRV9QUk9EVUNUX0ZST01fQ0FSVFwiO1xuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5ID0gMSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERF9UT19DQVJULFxuICAgIHBheWxvYWQ6IHsgcHJvZHVjdCwgcXVhbnRpdHkgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9kdWN0UXVhbnRpdHkgPSAocHJvZHVjdElkLCBxdWFudGl0eSA9IDEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfUFJPRFVDVF9RVUFOVElUWSxcbiAgICBwYXlsb2FkOiB7IHByb2R1Y3RJZCwgcXVhbnRpdHkgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9kdWN0ID0gKHByb2R1Y3RJZCkgPT4gKHtcbiAgdHlwZTogUkVNT1ZFX1BST0RVQ1RfRlJPTV9DQVJULFxuICBwYXlsb2FkOiBwcm9kdWN0SWQsXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9Ub3BCYXIvVG9wQmFyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IEluc3RhZ3JhbUZlZWQgZnJvbSBcIi4vY29tcG9uZW50cy9JbnN0YWdyYW1GZWVkL0luc3RhZ3JhbUZlZWRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICBpZD1cImJhY2stdG8tdG9wXCJcbiAgICAgICAgdGl0bGU9XCJCYWNrIHRvIHRvcFwiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICA+XG4gICAgICAgICZ1YXJyO1xuICAgICAgPC9hPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJDb3B5cmlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXItY29tcGFueVwiPlxuICAgICAgICBUb2RvcyBEaXJlaXRvcyBSZXNlcnZhZG9zLiAmY29weTsgMjAyMSA8YSBocmVmPVwiI1wiPkdydXBvIEVhc3kgY2FyZTwvYT4gV2ViRGVzaWduIFBvciA6XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2JhbGFpb2RhY3JpYWNhby5jb20uYnIvXCI+QmFsYWlvIGRhIGNyaWHDp8OjbzwvYT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnN0YWdyYW1GZWVkIGZyb20gXCIuLi9JbnN0YWdyYW1GZWVkL0luc3RhZ3JhbUZlZWRcIjtcbmltcG9ydCBGb290ZXJDb3B5cmlnaHQgZnJvbSBcIi4uL0Zvb3RlckNvcHlyaWdodC9Gb290ZXJDb3B5cmlnaHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5zdGFncmFtRmVlZCAvPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbWFpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgIDxoND5Tb2JyZSBHcnVwbyBFYXN5IGNhcmU8L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEVzdGFtb3MgaMOhIDUgYW5vcyBubyBtZXJjYWRvIGVtcGVuaGFkb3MgbmEgcHJlc3Rhw6fDo28gZGVcbiAgICAgICAgICAgICAgICAgICAgc2VydmnDp29zIGRlIG3Ds3ZlaXMgcGxhbmVqYWRvcywgcGVkcmFzIGVzY3VscGlkYXMgZSxcbiAgICAgICAgICAgICAgICAgICAgYXR1YWxtZW50ZSwgdHJhYmFsaGFtb3MgY29tIGVuZ2VuaGFyaWEsIGF1dG9tYcOnw6NvXG4gICAgICAgICAgICAgICAgICAgIHJlc2lkZW5jaWFsLCBlbmVyZ2lhIGZvdG92b2x0YWljYSBlIHNlcnZpw6dvcyBmaW5hbmNlaXJvcy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3J1cG9lYXN5Y2FyZS9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ncnVwb2Vhc3ljYXJlL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2JyLnBpbnRlcmVzdC5jb20vZWFzeWNhcmVzZXJ2aWNvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFiIGZhLXBpbnRlcmVzdC1wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1NjE5OTg1ODE3NzlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua1wiPlxuICAgICAgICAgICAgICAgICAgPGg0PkxpbmtzPC9oND5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U29icmUtbsOzczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2VydmnDp29zPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Qcm9qZXRvczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UG9saXRpY2EgZGUgcHJpdmFjaWRhZGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGluay1jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICA8aDQ+Tm9zc29zIGNvbnRhdG88L2g0PlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+RW5kZXJlw6dvOiBMb3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAyMzAgLSBHdWFyw6EgQnJhc8OtbGlhIC0gREYse1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lLXNxdWFyZVwiPjwvaT5UZWxldmVuZGE6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDogNjEgMzk3NS0xNzc5XCI+IDYxIDM5NzUtMTc3OTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT5FbWFpbDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RpbmZvQGdtYWlsLmNvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21lcmNpYWxAZ3J1cG9lYXN5Y2FyZS5jb20uYnJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPEZvb3RlckNvcHlyaWdodCAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi9Ub3BCYXIvVG9wQmFyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IGNhcnRJdGVtc0NvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0Lmxlbmd0aCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb3BCYXIgLz5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHQgbmF2YmFyLWRlZmF1bHQgYm9vdHNuYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyLW1lbnVcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJzLXJzLWZvb2RcIlxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiaW5kZXguaHRtbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiIGFsdD1cImxvZ29cIiBjbGFzcz1cImltZy1mbHVpZFwiIHRpdGxlPVwiTG9nbyBncnVwbyBlYXN5IGNhcmUgLSBtw7N2ZWlzIHBsYW5lamFkb3NcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG1sLWF1dG9cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW49XCJmYWRlSW5Eb3duXCJcbiAgICAgICAgICAgICAgICBkYXRhLW91dD1cImZhZGVPdXRVcFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkluaWNpbzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNvYnJlLU7Ds3M8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamV0b3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qcm9qZXRvczwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY29zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2VydmnDp29zPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Jsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5CbG9nPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5GYWxlIGNvbm9zY288L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5zdGFncmFtRmVlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbnN0YWdyYW0gb3dsLWNhcm91c2VsIG93bC10aGVtZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1pbm5lci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1nLTAxLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdi1pblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtaW5uZXItYm94XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltZy0wMi5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3YtaW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWlubmVyLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS1pbWctMDMucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92LWluXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1pbm5lci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1nLTA0LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdi1pblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtaW5uZXItYm94XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltZy0wNS5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3YtaW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWlubmVyLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS1pbWctMDYucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92LWluXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1pbm5lci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1nLTA3LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdi1pblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtaW5uZXItYm94XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltZy0wOC5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3YtaW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWlubmVyLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS1pbWctMDkucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92LWluXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1pbm5lci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1nLTA1LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdi1pblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRvcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGlkLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwib2ZmZXItYm94XCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWxUaWNrZXJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib2ZmZXItYm94XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1vcGVuY2FydFwiPjwvaT4gTcOzdmVpcyBwbGFuZWphZG9zIGNvbVxuICAgICAgICAgICAgICAgICAgICBwcmXDp28gZXNwZWNpYWlzXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtb3BlbmNhcnRcIj48L2k+IFBsYW5lamFkb3MgcGFyYSBlc3Bhw6dvc1xuICAgICAgICAgICAgICAgICAgICByZWR1emlkb1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLW9wZW5jYXJ0XCI+PC9pPiBOb3NzbyBTaG93IHJvb20gdGVtIGFzXG4gICAgICAgICAgICAgICAgICAgIG1lbGhvcmVzIG9ww6fDtWVzXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtb3BlbmNhcnRcIj48L2k+IEF0ZW5kZW1vcyBCcmFzw61saWEgZVxuICAgICAgICAgICAgICAgICAgICByZWdpb2VzXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtb3BlbmNhcnRcIj48L2k+IFNvbGljaXRlIHVtIHZlbmRlZG9yXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtb3BlbmNhcnRcIj48L2k+IFNvbW9zIHByb2pldG9yZXMgZGVcbiAgICAgICAgICAgICAgICAgICAgc29uaG9zXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtb3BlbmNhcnRcIj48L2k+IFBvZGVtb3MgdG9ybmFyIGVtXG4gICAgICAgICAgICAgICAgICAgIHJlbGlkYWRlIHNldXMgc29uaG9zIVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLW9wZW5jYXJ0XCI+PC9pPiBGYcOnYSBzZXUgcHJvamV0byBlIHZlbmhhXG4gICAgICAgICAgICAgICAgICAgIHBhcmEgR3J1cG8gRWFzeSBjYXJlXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3QtYm94XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXBob25lLWJveFwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBWRU5EQTotIDxhIGhyZWY9XCJ0ZWw6NjEzOTc1LTE3NzlcIj4gNjEgMzk3NS0xNzc5PC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3VyLWxpbmtcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTYxOTk4NTgxNzc5XCI+XG4gICAgICAgICAgICAgICAgICAgIFdoYXRTYXBwXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjU1NjE5OTg1ODE3NzlcIj5Ob3Nzb3MgY29udGF0b3M8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICB7XG4gICAgbmFtZTogXCJMaWxpYW4gRmlndWVpcmVkb1wiLFxuICAgIGRlc2lnbmF0aW9uOiBcIkdlcmVudGUgR2VyYWwuXCIsXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL2ltZy0xLmpwZ1wiLFxuICAgIGFib3V0OlxuICAgICAgXCJSZXNwb25zw6F2ZWwgcG9yIGxpZGVyYXIgbyB0aW1lIEVhc3kgQ2FyZSwgcHJvbW92ZXIgYSBpbnRlZ3Jhw6fDo28sIGEgcXVhbGlkYWRlIGUgbyBjdWlkYWRvIGNvbSBvcyBjbGllbnRlcyBuYSBjb25zdHJ1w6fDo28gZSByZWFsaXphw6fDo28gZG9zIHNldXMgc29uaG9zLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGw6FiaW8gU2lsdmE6XCIsXG4gICAgZGVzaWduYXRpb246IFwiRGlyZXRvciBkZSBjb211bmljYcOnw6NvXCIsXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL2ltZy0yLmpwZ1wiLFxuICAgIGFib3V0OlxuICAgICAgXCJSZXNwb25zw6F2ZWwgcGVsb3MgcmVsYWNpb25hbWVudG9zLCBnZXN0w6NvIGRlIG5lZ8OzY2lvcywgcGFyY2VyaWFzLCBjb211bmljYcOnw6NvIGRvIGdydXBvIGUgbmVnb2NpYcOnw6NvLlwiLFxuICB9LFxuICBcbiAgXG5dO1xuXG5jb25zdCBvdXJUZWFtUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvdXJUZWFtUmVkdWNlcjtcbiIsImNvbnN0IHNob3BDYXRlZ29yaWVzSW5pdGlhbFN0YXRlID0gW1xuICB7XG4gICAgbmFtZTogXCJDb3ppbmhhXCIsXG4gICAgaW1hZ2U6IFwid29tZW4tc2hvZXMtaW1nLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBcm1hcmlvXCIsXG4gICAgaW1hZ2U6IFwiaW5zdGFncmFtLWltZy0wMy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIGltYWdlOiBcInNob2VzLWltZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUXVhbnRvIHBsYW5lamFkb1wiLFxuICAgIGltYWdlOiBcImluc3RhZ3JhbS1pbWctMDEuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbmNhZGFcIixcbiAgICBpbWFnZTogXCJQbGFuZWphZG9zLWltZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV29tZW4gU2hvd3NcIixcbiAgICBpbWFnZTogXCJCYW5jYWRhLXBhcmEtY296aW5oYS1pbWcuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbmNhZGEgZGUgbWFybW9yZVwiLFxuICAgIGltYWdlOiBcImJhbmNhZGEtZGUtbWFybW9yZS1pbWcuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNvemluaGFcIixcbiAgICBpbWFnZTogXCJwbGFuZWphZG9zLWRlLWNvemluaGEtaW1nLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQYWluZWwgcGxhbmVqYWRvc1wiLFxuICAgIGltYWdlOiBcInBhaW5lbC1pbWcuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFybWFyaW9cIixcbiAgICBpbWFnZTogXCJhcm1hcmlvLWltZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQXJtYXJpbyBkZSBjb3ppbmhhXCIsXG4gICAgaW1hZ2U6IFwiQXJtYXJpby1kZS1jb3ppbmhhLWltZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUXVhcnRvXCIsXG4gICAgaW1hZ2U6IFwiUXVhcnRvLWltZy5qcGdcIixcbiAgfSxcbiAgXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBzaG9wQ2F0ZWdvcmllc0luaXRpYWxTdGF0ZTtcbiIsImltcG9ydCBzaG9wQ2F0ZWdvcmllc0luaXRpYWxTdGF0ZSBmcm9tIFwiLi9TaG9wQ2F0ZWdvcmllcy5pbml0aWFsc3RhdGVcIjtcblxuZnVuY3Rpb24gU2hvcENhdGVnb3JpZXNSZWR1Y2VyKFxuICBzdGF0ZSA9IHNob3BDYXRlZ29yaWVzSW5pdGlhbFN0YXRlLFxuICBhY3Rpb24gPSB7fVxuKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BDYXRlZ29yaWVzUmVkdWNlcjtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IHtcbiAgQUREX1RPX0NBUlQsXG4gIFVQREFURV9QUk9EVUNUX1FVQU5USVRZLFxuICBSRU1PVkVfUFJPRFVDVF9GUk9NX0NBUlQsXG59IGZyb20gXCIuLi9hY3Rpb25zL2NhcnRcIjtcblxuZnVuY3Rpb24gY2FydFJlZHVjZXIoc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9UT19DQVJUOiB7XG4gICAgICBjb25zdCB7IHByb2R1Y3Q6IHByb2R1Y3RUb0FkZCwgcXVhbnRpdHkgPSAxIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IHByb2R1Y3RzSW5DYXJ0ID0gWy4uLnN0YXRlXTtcblxuICAgICAgbGV0IGlzUHJvZHVjdEluQ2FydCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0c0luQ2FydC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHNJbkNhcnRbaV07XG5cbiAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IHByb2R1Y3RUb0FkZC5pZCkge1xuICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5ICsgcGFyc2VJbnQocXVhbnRpdHkpO1xuICAgICAgICAgIGlzUHJvZHVjdEluQ2FydCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1Byb2R1Y3RJbkNhcnQpIHtcbiAgICAgICAgcHJvZHVjdFRvQWRkLnF1YW50aXR5ID0gcGFyc2VJbnQocXVhbnRpdHkpO1xuICAgICAgICBwcm9kdWN0c0luQ2FydC5wdXNoKHByb2R1Y3RUb0FkZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZHVjdHNJbkNhcnQ7XG4gICAgfVxuICAgIGNhc2UgVVBEQVRFX1BST0RVQ1RfUVVBTlRJVFk6IHtcbiAgICAgIGNvbnN0IHsgcHJvZHVjdElkLCBxdWFudGl0eTogcXVhbnRpdHlUb1NldCA9IDEgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgcHJvZHVjdHNJbkNhcnQgPSBbLi4uc3RhdGVdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzSW5DYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c0luQ2FydFtpXTtcblxuICAgICAgICBpZiAocHJvZHVjdC5pZCA9PT0gcHJvZHVjdElkKSB7XG4gICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHBhcnNlSW50KHF1YW50aXR5VG9TZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9kdWN0c0luQ2FydDtcbiAgICB9XG4gICAgY2FzZSBSRU1PVkVfUFJPRFVDVF9GUk9NX0NBUlQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYXJ0UmVkdWNlcjtcbiIsImV4cG9ydCBjb25zdCBwcm9kdWN0c0luaXRpYWxTdGF0ZSA9IHtcbiAgMTAwOiB7XG4gICAgaWQ6IDEwMCxcbiAgICBuYW1lOiBcIkVuZXJnaWEgRm90b3ZvbHRhaWNhXCIsXG4gICAgbXJwOiA5OTksXG4gICAgc2VsbGluZ19wcmljZTogNzk5LFxuICAgIGN1cnJlbmN5OiBcIuKCuVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTb2x1w6fDtWVzIGVtIGVuZXJnaWEgZm90b3ZvbHRhaWNhIHBhcmEgcmVkdXppciBvcyBzZXVzIGdhc3RvcywgZSBwcmVzZXJ2YcOnw6NvLCBlIGNvbnNlcnZhw6fDo28gYW1iaWVudGFsLlwiLFxuICAgIHN0b2NrX3F0eTogMTAwLFxuICAgIHNvbGRfcXR5OiA1MCxcbiAgICBmZWF0dXJlZF9pbWFnZTogXCJpbWctcHJvLTAxLmpwZ1wiLFxuICAgIGltYWdlczogW1xuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMS5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMS5qcGdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAyLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAyLmpwZ1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDMuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDMuanBnXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc2l6ZXM6IFtcIlNcIiwgXCJNXCIsIFwiTFwiLCBcIlhMXCIsIFwiWFhMXCIsIFwiWFhYTFwiXSxcbiAgICB0YWdzOiBbXCJ0b3AtZmVhdHVyZWRcIiwgXCJFbmVyZ2lhLUZvdG92b2x0YWljYVwiXSxcbiAgfSxcbiAgMTAxOiB7XG4gICAgaWQ6IDEwMSxcbiAgICBuYW1lOiBcIlBlZHJhIGVzY3VscGlkYVwiLFxuICAgIG1ycDogNTk5LFxuICAgIHNlbGxpbmdfcHJpY2U6IDQ5OSxcbiAgICBjdXJyZW5jeTogXCLigrlcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRW50cmVnYW1vcyBkZXNkZSBvIHByb2pldG8gYXTDqSBhIGluc3RhbGHDp8OjbyBjb20gdG90YWwgc2VndXJhbsOnYS4gUGFyYSBsZXZhciBzb2xpZGV6LCBzb2Zpc3RpY2HDp8OjbyBlIGJvbSBnb3N0byBhbyBzZXUgc29uaG8uXCIsXG4gICAgc3RvY2tfcXR5OiAxMDAsXG4gICAgc29sZF9xdHk6IDUwLFxuICAgIGZlYXR1cmVkX2ltYWdlOiBcImltZy1wcm8tMDIuanBnXCIsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAxLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAxLmpwZ1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDIuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDIuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMy5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMy5qcGdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaXplczogW1wiU1wiLCBcIk1cIiwgXCJMXCIsIFwiWExcIiwgXCJYWExcIl0sXG4gICAgdGFnczogW1wiUGVkcmEtZXNjdWxwaWRhXCJdLFxuICB9LFxuICAxMDI6IHtcbiAgICBpZDogMTAxLFxuICAgIG5hbWU6IFwiTcOzdmVpcyBQbGFuZWphZG9zXCIsXG4gICAgbXJwOiA1OTksXG4gICAgc2VsbGluZ19wcmljZTogNDk5LFxuICAgIGN1cnJlbmN5OiBcIuKCuVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTb21vcyBlc3BlY2lhbGlzdGFzIG5vIHRyYWJhbGhvIGNvbSBNREYsIHVtIG1hdGVyaWFsIHZlcnPDoXRpbCBlIG1hbGXDoXZlbCBwYXJhIGEgY29uZmVjw6fDo28gZGUgYW1iaWVudGVzIHBsYW5lamFkb3MgZSBjb20gcmVxdWludGUuXCIsXG4gICAgc3RvY2tfcXR5OiAxMDAsXG4gICAgc29sZF9xdHk6IDUwLFxuICAgIGZlYXR1cmVkX2ltYWdlOiBcIm3Ds3ZlaXMtMDIuanBnXCIsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAxLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAxLmpwZ1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDIuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDIuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMy5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMy5qcGdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaXplczogW1wiU1wiLCBcIk1cIiwgXCJMXCIsIFwiWExcIiwgXCJYWExcIl0sXG4gICAgdGFnczogW1wiTcOzdmVpcy1wbGFuZWphZG9zXCJdLFxuICB9LFxuICAxMDM6IHtcbiAgICBpZDogMTAxLFxuICAgIG5hbWU6IFwiTcOzdmVpcyBQbGFuZWphZG9zXCIsXG4gICAgbXJwOiA1OTksXG4gICAgc2VsbGluZ19wcmljZTogNDk5LFxuICAgIGN1cnJlbmN5OiBcIuKCuVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTb21vcyBlc3BlY2lhbGlzdGFzIG5vIHRyYWJhbGhvIGNvbSBNREYsIHVtIG1hdGVyaWFsIHZlcnPDoXRpbCBlIG1hbGXDoXZlbCBwYXJhIGEgY29uZmVjw6fDo28gZGUgYW1iaWVudGVzIHBsYW5lamFkb3MgZSBjb20gcmVxdWludGUuXCIsXG4gICAgc3RvY2tfcXR5OiAxMDAsXG4gICAgc29sZF9xdHk6IDUwLFxuICAgIGZlYXR1cmVkX2ltYWdlOiBcIm3Ds3ZlaXMtMDIuanBnXCIsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAxLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAxLmpwZ1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDIuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDIuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMy5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMy5qcGdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaXplczogW1wiU1wiLCBcIk1cIiwgXCJMXCIsIFwiWExcIiwgXCJYWExcIl0sXG4gICAgdGFnczogW1wiTcOzdmVpcy1wbGFuZWphZG9zXCJdLFxuICB9LFxuICAxMDQ6IHtcbiAgICBpZDogMTAxLFxuICAgIG5hbWU6IFwiTcOzdmVpcyBQbGFuZWphZG9zXCIsXG4gICAgbXJwOiA1OTksXG4gICAgc2VsbGluZ19wcmljZTogNDk5LFxuICAgIGN1cnJlbmN5OiBcIuKCuVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTb21vcyBlc3BlY2lhbGlzdGFzIG5vIHRyYWJhbGhvIGNvbSBNREYsIHVtIG1hdGVyaWFsIHZlcnPDoXRpbCBlIG1hbGXDoXZlbCBwYXJhIGEgY29uZmVjw6fDo28gZGUgYW1iaWVudGVzIHBsYW5lamFkb3MgZSBjb20gcmVxdWludGUuXCIsXG4gICAgc3RvY2tfcXR5OiAxMDAsXG4gICAgc29sZF9xdHk6IDUwLFxuICAgIGZlYXR1cmVkX2ltYWdlOiBcIm3Ds3ZlaXMtMDIuanBnXCIsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAxLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAxLmpwZ1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDIuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDIuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMy5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMy5qcGdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaXplczogW1wiU1wiLCBcIk1cIiwgXCJMXCIsIFwiWExcIiwgXCJYWExcIl0sXG4gICAgdGFnczogW1wiTcOzdmVpcy1wbGFuZWphZG9zXCJdLFxuICB9LFxufTtcblxuY29uc3QgcHJvZHVjdHNSZWR1Y2VyID0gKHN0YXRlID0gcHJvZHVjdHNJbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCBvdXJUZWFtUmVkdWNlciBmcm9tIFwiLi9jb21wb25lbnRzL091clRlYW0vT3VyVGVhbS5yZWR1Y2Vyc1wiO1xuaW1wb3J0IHNob3BDYXRlZ29yaWVzUmVkdWNlciBmcm9tIFwiLi9jb21wb25lbnRzL1Nob3BDYXRlZ29yaWVzL1Nob3BDYXRlcmdvcmllcy5yZWR1Y2VyXCI7XG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvY2FydFwiO1xuaW1wb3J0IHByb2R1Y3RzUmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vycy9wcm9kdWN0cy5yZWR1Y2VyXCI7XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRlYW1NZW1iZXJzOiBvdXJUZWFtUmVkdWNlcixcbiAgc2hvcENhdGVnb3JpZXM6IHNob3BDYXRlZ29yaWVzUmVkdWNlcixcbiAgY2FydDogY2FydFJlZHVjZXIsXG4gIHByb2R1Y3RzOiBwcm9kdWN0c1JlZHVjZXIsXG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gXCIuL3Jvb3QtcmVkdWNlclwiO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXIsXG4gIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJlxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
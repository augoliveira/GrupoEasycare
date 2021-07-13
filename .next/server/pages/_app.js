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

/***/ "./components/FacebookPixel.js":
/*!*************************************!*\
  !*** ./components/FacebookPixel.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fpixel */ "./lib/fpixel.js");




const handleRouteChange = () => {
  _lib_fpixel__WEBPACK_IMPORTED_MODULE_2__.pageview();
};

const FacebookPixel = ({
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // This pageview only trigger first time (it is important for Pixel to have real information)
    _lib_fpixel__WEBPACK_IMPORTED_MODULE_2__.pageview();
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return children;
};

/* harmony default export */ __webpack_exports__["default"] = (FacebookPixel);

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

/***/ "./lib/fpixel.js":
/*!***********************!*\
  !*** ./lib/fpixel.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FB_PIXEL_ID": function() { return /* binding */ FB_PIXEL_ID; },
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "event": function() { return /* binding */ event; }
/* harmony export */ });
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const pageview = () => {
  window.fbq('track', 'PageView');
}; // https://developers.facebook.com/docs/facebook-pixel/advanced/

const event = (name, options = {}) => {
  window.fbq('track', name, options);
};

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
/* harmony import */ var _components_FacebookPixel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FacebookPixel */ "./components/FacebookPixel.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store.js");

var _jsxFileName = "D:\\Grupoeasycare-main\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_5__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9hY3Rpb25zL2NhcnQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9GYWNlYm9va1BpeGVsLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9Gb290ZXJDb3B5cmlnaHQvRm9vdGVyQ29weXJpZ2h0LmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvTGF5b3V0L2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9JbnN0YWdyYW1GZWVkL0luc3RhZ3JhbUZlZWQuanN4Iiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvTGF5b3V0L2NvbXBvbmVudHMvVG9wQmFyL1RvcEJhci5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9PdXJUZWFtL091clRlYW0ucmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9TaG9wQ2F0ZWdvcmllcy9TaG9wQ2F0ZWdvcmllcy5pbml0aWFsc3RhdGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vY29tcG9uZW50cy9TaG9wQ2F0ZWdvcmllcy9TaG9wQ2F0ZXJnb3JpZXMucmVkdWNlci5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9saWIvZnBpeGVsLmpzIiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcmVkdWNlcnMvY2FydC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9yZWR1Y2Vycy9wcm9kdWN0cy5yZWR1Y2VyLmpzIiwid2VicGFjazovL25leHRqcy8uL3Jvb3QtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9uZXh0anMvaWdub3JlZHxEOlxcR3J1cG9lYXN5Y2FyZS1tYWluXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQUREX1RPX0NBUlQiLCJVUERBVEVfUFJPRFVDVF9RVUFOVElUWSIsIlJFTU9WRV9QUk9EVUNUX0ZST01fQ0FSVCIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsInR5cGUiLCJwYXlsb2FkIiwidXBkYXRlUHJvZHVjdFF1YW50aXR5IiwicHJvZHVjdElkIiwiZGVsZXRlUHJvZHVjdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwiZmJxIiwiRmFjZWJvb2tQaXhlbCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZXZlbnRzIiwib24iLCJvZmYiLCJMYXlvdXQiLCJkaXNwbGF5IiwiRm9vdGVyQ29weXJpZ2h0IiwiRm9vdGVyIiwiSGVhZGVyIiwiY2FydEl0ZW1zQ291bnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydCIsImxlbmd0aCIsIkluc3RhZ3JhbUZlZWQiLCJUb3BCYXIiLCJpbml0aWFsU3RhdGUiLCJuYW1lIiwiZGVzaWduYXRpb24iLCJpbWFnZSIsImFib3V0Iiwib3VyVGVhbVJlZHVjZXIiLCJhY3Rpb24iLCJzaG9wQ2F0ZWdvcmllc0luaXRpYWxTdGF0ZSIsIlNob3BDYXRlZ29yaWVzUmVkdWNlciIsIkZCX1BJWEVMX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZBQ0VCT09LX1BJWEVMX0lEIiwicGFnZXZpZXciLCJ3aW5kb3ciLCJldmVudCIsIm9wdGlvbnMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiY2FydFJlZHVjZXIiLCJwcm9kdWN0VG9BZGQiLCJwcm9kdWN0c0luQ2FydCIsImlzUHJvZHVjdEluQ2FydCIsImkiLCJpZCIsInBhcnNlSW50IiwicHVzaCIsInF1YW50aXR5VG9TZXQiLCJmaWx0ZXIiLCJwcm9kdWN0c0luaXRpYWxTdGF0ZSIsIm1ycCIsInNlbGxpbmdfcHJpY2UiLCJjdXJyZW5jeSIsImRlc2NyaXB0aW9uIiwic3RvY2tfcXR5Iiwic29sZF9xdHkiLCJmZWF0dXJlZF9pbWFnZSIsImltYWdlcyIsImJpZyIsInNtYWxsIiwic2l6ZXMiLCJ0YWdzIiwicHJvZHVjdHNSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ0ZWFtTWVtYmVycyIsInNob3BDYXRlZ29yaWVzIiwic2hvcENhdGVnb3JpZXNSZWR1Y2VyIiwicHJvZHVjdHMiLCJjcmVhdGVTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLHVCQUF1QixHQUFH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Q2pDLElBQWY7QUFDRTtBQUNFLGFBQU9zQixLQUFQO0FBRko7QUFJRCxDQUxEOztBQU9BLCtEQUFlaUQsZUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1DLFdBQVcsR0FBR0Msc0RBQWUsQ0FBQztBQUN6Q0MsYUFBVyxFQUFFMUMseUVBRDRCO0FBRXpDMkMsZ0JBQWMsRUFBRUMsdUZBRnlCO0FBR3pDckQsTUFBSSxFQUFFeUIsbURBSG1DO0FBSXpDNkIsVUFBUSxFQUFFTiwrREFBZUE7QUFKZ0IsQ0FBRCxDQUFuQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0FBRU8sTUFBTXhCLEtBQUssR0FBRytCLGtEQUFXLENBQzlCTixzREFEOEIsRUFFOUIsVUFFRS9CLENBSjRCLENBQXpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gXCJBRERfVE9fQ0FSVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9EVUNUX1FVQU5USVRZID0gXCJVUERBVEVfUFJPRFVDVF9RVUFOVElUWVwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QUk9EVUNUX0ZST01fQ0FSVCA9IFwiUkVNT1ZFX1BST0RVQ1RfRlJPTV9DQVJUXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHkgPSAxKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUREX1RPX0NBUlQsXG4gICAgcGF5bG9hZDogeyBwcm9kdWN0LCBxdWFudGl0eSB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2R1Y3RRdWFudGl0eSA9IChwcm9kdWN0SWQsIHF1YW50aXR5ID0gMSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9QUk9EVUNUX1FVQU5USVRZLFxuICAgIHBheWxvYWQ6IHsgcHJvZHVjdElkLCBxdWFudGl0eSB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSAocHJvZHVjdElkKSA9PiAoe1xuICB0eXBlOiBSRU1PVkVfUFJPRFVDVF9GUk9NX0NBUlQsXG4gIHBheWxvYWQ6IHByb2R1Y3RJZCxcbn0pO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgKiBhcyBmYnEgZnJvbSAnLi4vbGliL2ZwaXhlbCdcclxuXHJcbmNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xyXG4gIGZicS5wYWdldmlldygpXHJcbn1cclxuXHJcbmNvbnN0IEZhY2Vib29rUGl4ZWwgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFRoaXMgcGFnZXZpZXcgb25seSB0cmlnZ2VyIGZpcnN0IHRpbWUgKGl0IGlzIGltcG9ydGFudCBmb3IgUGl4ZWwgdG8gaGF2ZSByZWFsIGluZm9ybWF0aW9uKVxyXG4gICAgZmJxLnBhZ2V2aWV3KClcclxuXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rUGl4ZWwiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvVG9wQmFyL1RvcEJhclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBJbnN0YWdyYW1GZWVkIGZyb20gXCIuL2NvbXBvbmVudHMvSW5zdGFncmFtRmVlZC9JbnN0YWdyYW1GZWVkXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgaWQ9XCJiYWNrLXRvLXRvcFwiXG4gICAgICAgIHRpdGxlPVwiQmFjayB0byB0b3BcIlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgPlxuICAgICAgICAmdWFycjtcbiAgICAgIDwvYT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyQ29weXJpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvcHlyaWdodFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbXBhbnlcIj5cbiAgICAgICAgVG9kb3MgRGlyZWl0b3MgUmVzZXJ2YWRvcy4gJmNvcHk7IDIwMjEgPGEgaHJlZj1cIiNcIj5HcnVwbyBFYXN5IGNhcmU8L2E+IFdlYkRlc2lnbiBQb3IgOlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9iYWxhaW9kYWNyaWFjYW8uY29tLmJyL1wiPkJhbGFpbyBkYSBjcmlhw6fDo288L2E+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5zdGFncmFtRmVlZCBmcm9tIFwiLi4vSW5zdGFncmFtRmVlZC9JbnN0YWdyYW1GZWVkXCI7XG5pbXBvcnQgRm9vdGVyQ29weXJpZ2h0IGZyb20gXCIuLi9Gb290ZXJDb3B5cmlnaHQvRm9vdGVyQ29weXJpZ2h0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEluc3RhZ3JhbUZlZWQgLz5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW1haW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICA8aDQ+U29icmUgR3J1cG8gRWFzeSBjYXJlPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBFc3RhbW9zIGjDoSA1IGFub3Mgbm8gbWVyY2FkbyBlbXBlbmhhZG9zIG5hIHByZXN0YcOnw6NvIGRlXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpw6dvcyBkZSBtw7N2ZWlzIHBsYW5lamFkb3MsIHBlZHJhcyBlc2N1bHBpZGFzIGUsXG4gICAgICAgICAgICAgICAgICAgIGF0dWFsbWVudGUsIHRyYWJhbGhhbW9zIGNvbSBlbmdlbmhhcmlhLCBhdXRvbWHDp8Ojb1xuICAgICAgICAgICAgICAgICAgICByZXNpZGVuY2lhbCwgZW5lcmdpYSBmb3Rvdm9sdGFpY2EgZSBzZXJ2acOnb3MgZmluYW5jZWlyb3MuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dydXBvZWFzeWNhcmUvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ3J1cG9lYXN5Y2FyZS9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ici5waW50ZXJlc3QuY29tL2Vhc3ljYXJlc2Vydmljb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhYiBmYS1waW50ZXJlc3QtcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTYxOTk4NTgxNzc5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxoND5MaW5rczwvaDQ+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlNvYnJlLW7Ds3M8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlNlcnZpw6dvczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UHJvamV0b3M8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlBvbGl0aWNhIGRlIHByaXZhY2lkYWRlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmstY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgPGg0Pk5vc3NvcyBjb250YXRvPC9oND5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCI+PC9pPkVuZGVyZcOnbzogTG90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgMjMwIC0gR3VhcsOhIEJyYXPDrWxpYSAtIERGLHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1waG9uZS1zcXVhcmVcIj48L2k+VGVsZXZlbmRhOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6IDYxIDM5NzUtMTc3OVwiPiA2MSAzOTc1LTE3Nzk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGVcIj48L2k+RW1haWw6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0aW5mb0BnbWFpbC5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tZXJjaWFsQGdydXBvZWFzeWNhcmUuY29tLmJyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxGb290ZXJDb3B5cmlnaHQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi4vVG9wQmFyL1RvcEJhclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBjYXJ0SXRlbXNDb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydC5sZW5ndGgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VG9wQmFyIC8+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0IG5hdmJhci1kZWZhdWx0IGJvb3RzbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhci1tZW51XCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFycy1ycy1mb29kXCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cImluZGV4Lmh0bWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29cIiBhbHQ9XCJsb2dvXCIgY2xhc3M9XCJpbWctZmx1aWRcIiB0aXRsZT1cIkxvZ28gZ3J1cG8gZWFzeSBjYXJlIC0gbcOzdmVpcyBwbGFuZWphZG9zXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXItbWVudVwiPlxuICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICBkYXRhLWluPVwiZmFkZUluRG93blwiXG4gICAgICAgICAgICAgICAgZGF0YS1vdXQ9XCJmYWRlT3V0VXBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5JbmljaW88L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Tb2JyZS1Ow7NzPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2pldG9zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UHJvamV0b3M8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNvc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNlcnZpw6dvczwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9CbG9nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QmxvZzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RmFsZSBjb25vc2NvPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3RhZ3JhbUZlZWQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0tYm94XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5zdGFncmFtIG93bC1jYXJvdXNlbCBvd2wtdGhlbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtaW5uZXItYm94XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltZy0wMS5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3YtaW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWlubmVyLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS1pbWctMDIucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92LWluXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1pbm5lci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1nLTAzLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdi1pblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtaW5uZXItYm94XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltZy0wNC5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3YtaW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWlubmVyLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS1pbWctMDUucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92LWluXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1pbm5lci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1nLTA2LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdi1pblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtaW5uZXItYm94XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltZy0wNy5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3YtaW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWlubmVyLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS1pbWctMDgucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92LWluXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1pbm5lci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1nLTA5LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdi1pblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtaW5uZXItYm94XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltZy0wNS5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3YtaW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wQmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi10b3BcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xpZC1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm9mZmVyLWJveFwiIGNsYXNzTmFtZT1cImNhcm91c2VsVGlja2VyXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9mZmVyLWJveFwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtb3BlbmNhcnRcIj48L2k+IE3Ds3ZlaXMgcGxhbmVqYWRvcyBjb21cbiAgICAgICAgICAgICAgICAgICAgcHJlw6dvIGVzcGVjaWFpc1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLW9wZW5jYXJ0XCI+PC9pPiBQbGFuZWphZG9zIHBhcmEgZXNwYcOnb3NcbiAgICAgICAgICAgICAgICAgICAgcmVkdXppZG9cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1vcGVuY2FydFwiPjwvaT4gTm9zc28gU2hvdyByb29tIHRlbSBhc1xuICAgICAgICAgICAgICAgICAgICBtZWxob3JlcyBvcMOnw7Vlc1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLW9wZW5jYXJ0XCI+PC9pPiBBdGVuZGVtb3MgQnJhc8OtbGlhIGVcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9lc1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLW9wZW5jYXJ0XCI+PC9pPiBTb2xpY2l0ZSB1bSB2ZW5kZWRvclxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLW9wZW5jYXJ0XCI+PC9pPiBTb21vcyBwcm9qZXRvcmVzIGRlXG4gICAgICAgICAgICAgICAgICAgIHNvbmhvc1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLW9wZW5jYXJ0XCI+PC9pPiBQb2RlbW9zIHRvcm5hciBlbVxuICAgICAgICAgICAgICAgICAgICByZWxpZGFkZSBzZXVzIHNvbmhvcyFcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1vcGVuY2FydFwiPjwvaT4gRmHDp2Egc2V1IHByb2pldG8gZSB2ZW5oYVxuICAgICAgICAgICAgICAgICAgICBwYXJhIEdydXBvIEVhc3kgY2FyZVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0LWJveFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1waG9uZS1ib3hcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVkVOREE6LSA8YSBocmVmPVwidGVsOjYxMzk3NS0xNzc5XCI+IDYxIDM5NzUtMTc3OTwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91ci1saW5rXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTU2MTk5ODU4MTc3OVwiPlxuICAgICAgICAgICAgICAgICAgICBXaGF0U2FwcFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDo1NTYxOTk4NTgxNzc5XCI+Tm9zc29zIGNvbnRhdG9zPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAge1xuICAgIG5hbWU6IFwiTGlsaWFuIEZpZ3VlaXJlZG9cIixcbiAgICBkZXNpZ25hdGlvbjogXCJHZXJlbnRlIEdlcmFsLlwiLFxuICAgIGltYWdlOiBcImltYWdlcy9pbWctMS5qcGdcIixcbiAgICBhYm91dDpcbiAgICAgIFwiUmVzcG9uc8OhdmVsIHBvciBsaWRlcmFyIG8gdGltZSBFYXN5IENhcmUsIHByb21vdmVyIGEgaW50ZWdyYcOnw6NvLCBhIHF1YWxpZGFkZSBlIG8gY3VpZGFkbyBjb20gb3MgY2xpZW50ZXMgbmEgY29uc3RydcOnw6NvIGUgcmVhbGl6YcOnw6NvIGRvcyBzZXVzIHNvbmhvcy5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRsOhYmlvIFNpbHZhOlwiLFxuICAgIGRlc2lnbmF0aW9uOiBcIkRpcmV0b3IgZGUgY29tdW5pY2HDp8Ojb1wiLFxuICAgIGltYWdlOiBcImltYWdlcy9pbWctMi5qcGdcIixcbiAgICBhYm91dDpcbiAgICAgIFwiUmVzcG9uc8OhdmVsIHBlbG9zIHJlbGFjaW9uYW1lbnRvcywgZ2VzdMOjbyBkZSBuZWfDs2Npb3MsIHBhcmNlcmlhcywgY29tdW5pY2HDp8OjbyBkbyBncnVwbyBlIG5lZ29jaWHDp8Ojby5cIixcbiAgfSxcbiAgXG4gIFxuXTtcblxuY29uc3Qgb3VyVGVhbVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3VyVGVhbVJlZHVjZXI7XG4iLCJjb25zdCBzaG9wQ2F0ZWdvcmllc0luaXRpYWxTdGF0ZSA9IFtcbiAge1xuICAgIG5hbWU6IFwiQ296aW5oYVwiLFxuICAgIGltYWdlOiBcIndvbWVuLXNob2VzLWltZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQXJtYXJpb1wiLFxuICAgIGltYWdlOiBcImluc3RhZ3JhbS1pbWctMDMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgICBpbWFnZTogXCJzaG9lcy1pbWcuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlF1YW50byBwbGFuZWphZG9cIixcbiAgICBpbWFnZTogXCJpbnN0YWdyYW0taW1nLTAxLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCYW5jYWRhXCIsXG4gICAgaW1hZ2U6IFwiUGxhbmVqYWRvcy1pbWcuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIldvbWVuIFNob3dzXCIsXG4gICAgaW1hZ2U6IFwiQmFuY2FkYS1wYXJhLWNvemluaGEtaW1nLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCYW5jYWRhIGRlIG1hcm1vcmVcIixcbiAgICBpbWFnZTogXCJiYW5jYWRhLWRlLW1hcm1vcmUtaW1nLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb3ppbmhhXCIsXG4gICAgaW1hZ2U6IFwicGxhbmVqYWRvcy1kZS1jb3ppbmhhLWltZy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGFpbmVsIHBsYW5lamFkb3NcIixcbiAgICBpbWFnZTogXCJwYWluZWwtaW1nLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBcm1hcmlvXCIsXG4gICAgaW1hZ2U6IFwiYXJtYXJpby1pbWcuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFybWFyaW8gZGUgY296aW5oYVwiLFxuICAgIGltYWdlOiBcIkFybWFyaW8tZGUtY296aW5oYS1pbWcuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlF1YXJ0b1wiLFxuICAgIGltYWdlOiBcIlF1YXJ0by1pbWcuanBnXCIsXG4gIH0sXG4gIFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvcENhdGVnb3JpZXNJbml0aWFsU3RhdGU7XG4iLCJpbXBvcnQgc2hvcENhdGVnb3JpZXNJbml0aWFsU3RhdGUgZnJvbSBcIi4vU2hvcENhdGVnb3JpZXMuaW5pdGlhbHN0YXRlXCI7XG5cbmZ1bmN0aW9uIFNob3BDYXRlZ29yaWVzUmVkdWNlcihcbiAgc3RhdGUgPSBzaG9wQ2F0ZWdvcmllc0luaXRpYWxTdGF0ZSxcbiAgYWN0aW9uID0ge31cbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wQ2F0ZWdvcmllc1JlZHVjZXI7XG4iLCJleHBvcnQgY29uc3QgRkJfUElYRUxfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GQUNFQk9PS19QSVhFTF9JRFxyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKCkgPT4ge1xyXG4gIHdpbmRvdy5mYnEoJ3RyYWNrJywgJ1BhZ2VWaWV3JylcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2ZhY2Vib29rLXBpeGVsL2FkdmFuY2VkL1xyXG5leHBvcnQgY29uc3QgZXZlbnQgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgd2luZG93LmZicSgndHJhY2snLCBuYW1lLCBvcHRpb25zKVxyXG59IiwiaW1wb3J0IEZhY2Vib29rUGl4ZWwgZnJvbSAnLi4vY29tcG9uZW50cy9GYWNlYm9va1BpeGVsJ1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Qcm92aWRlcj5cbiAgICBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQge1xuICBBRERfVE9fQ0FSVCxcbiAgVVBEQVRFX1BST0RVQ1RfUVVBTlRJVFksXG4gIFJFTU9WRV9QUk9EVUNUX0ZST01fQ0FSVCxcbn0gZnJvbSBcIi4uL2FjdGlvbnMvY2FydFwiO1xuXG5mdW5jdGlvbiBjYXJ0UmVkdWNlcihzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1RPX0NBUlQ6IHtcbiAgICAgIGNvbnN0IHsgcHJvZHVjdDogcHJvZHVjdFRvQWRkLCBxdWFudGl0eSA9IDEgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgcHJvZHVjdHNJbkNhcnQgPSBbLi4uc3RhdGVdO1xuXG4gICAgICBsZXQgaXNQcm9kdWN0SW5DYXJ0ID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzSW5DYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c0luQ2FydFtpXTtcblxuICAgICAgICBpZiAocHJvZHVjdC5pZCA9PT0gcHJvZHVjdFRvQWRkLmlkKSB7XG4gICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHkgKyBwYXJzZUludChxdWFudGl0eSk7XG4gICAgICAgICAgaXNQcm9kdWN0SW5DYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzUHJvZHVjdEluQ2FydCkge1xuICAgICAgICBwcm9kdWN0VG9BZGQucXVhbnRpdHkgPSBwYXJzZUludChxdWFudGl0eSk7XG4gICAgICAgIHByb2R1Y3RzSW5DYXJ0LnB1c2gocHJvZHVjdFRvQWRkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9kdWN0c0luQ2FydDtcbiAgICB9XG4gICAgY2FzZSBVUERBVEVfUFJPRFVDVF9RVUFOVElUWToge1xuICAgICAgY29uc3QgeyBwcm9kdWN0SWQsIHF1YW50aXR5OiBxdWFudGl0eVRvU2V0ID0gMSB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBwcm9kdWN0c0luQ2FydCA9IFsuLi5zdGF0ZV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNJbkNhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzSW5DYXJ0W2ldO1xuXG4gICAgICAgIGlmIChwcm9kdWN0LmlkID09PSBwcm9kdWN0SWQpIHtcbiAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5ID0gcGFyc2VJbnQocXVhbnRpdHlUb1NldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb2R1Y3RzSW5DYXJ0O1xuICAgIH1cbiAgICBjYXNlIFJFTU9WRV9QUk9EVUNUX0ZST01fQ0FSVDoge1xuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQpO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhcnRSZWR1Y2VyO1xuIiwiZXhwb3J0IGNvbnN0IHByb2R1Y3RzSW5pdGlhbFN0YXRlID0ge1xuICAxMDA6IHtcbiAgICBpZDogMTAwLFxuICAgIG5hbWU6IFwiRW5lcmdpYSBGb3Rvdm9sdGFpY2FcIixcbiAgICBtcnA6IDk5OSxcbiAgICBzZWxsaW5nX3ByaWNlOiA3OTksXG4gICAgY3VycmVuY3k6IFwi4oK5XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNvbHXDp8O1ZXMgZW0gZW5lcmdpYSBmb3Rvdm9sdGFpY2EgcGFyYSByZWR1emlyIG9zIHNldXMgZ2FzdG9zLCBlIHByZXNlcnZhw6fDo28sIGUgY29uc2VydmHDp8OjbyBhbWJpZW50YWwuXCIsXG4gICAgc3RvY2tfcXR5OiAxMDAsXG4gICAgc29sZF9xdHk6IDUwLFxuICAgIGZlYXR1cmVkX2ltYWdlOiBcImltZy1wcm8tMDEuanBnXCIsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAxLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAxLmpwZ1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDIuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDIuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMy5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMy5qcGdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaXplczogW1wiU1wiLCBcIk1cIiwgXCJMXCIsIFwiWExcIiwgXCJYWExcIiwgXCJYWFhMXCJdLFxuICAgIHRhZ3M6IFtcInRvcC1mZWF0dXJlZFwiLCBcIkVuZXJnaWEtRm90b3ZvbHRhaWNhXCJdLFxuICB9LFxuICAxMDE6IHtcbiAgICBpZDogMTAxLFxuICAgIG5hbWU6IFwiUGVkcmEgZXNjdWxwaWRhXCIsXG4gICAgbXJwOiA1OTksXG4gICAgc2VsbGluZ19wcmljZTogNDk5LFxuICAgIGN1cnJlbmN5OiBcIuKCuVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJFbnRyZWdhbW9zIGRlc2RlIG8gcHJvamV0byBhdMOpIGEgaW5zdGFsYcOnw6NvIGNvbSB0b3RhbCBzZWd1cmFuw6dhLiBQYXJhIGxldmFyIHNvbGlkZXosIHNvZmlzdGljYcOnw6NvIGUgYm9tIGdvc3RvIGFvIHNldSBzb25oby5cIixcbiAgICBzdG9ja19xdHk6IDEwMCxcbiAgICBzb2xkX3F0eTogNTAsXG4gICAgZmVhdHVyZWRfaW1hZ2U6IFwiaW1nLXByby0wMi5qcGdcIixcbiAgICBpbWFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDEuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDEuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMi5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMi5qcGdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAzLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAzLmpwZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNpemVzOiBbXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiLCBcIlhYTFwiXSxcbiAgICB0YWdzOiBbXCJQZWRyYS1lc2N1bHBpZGFcIl0sXG4gIH0sXG4gIDEwMjoge1xuICAgIGlkOiAxMDEsXG4gICAgbmFtZTogXCJNw7N2ZWlzIFBsYW5lamFkb3NcIixcbiAgICBtcnA6IDU5OSxcbiAgICBzZWxsaW5nX3ByaWNlOiA0OTksXG4gICAgY3VycmVuY3k6IFwi4oK5XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNvbW9zIGVzcGVjaWFsaXN0YXMgbm8gdHJhYmFsaG8gY29tIE1ERiwgdW0gbWF0ZXJpYWwgdmVyc8OhdGlsIGUgbWFsZcOhdmVsIHBhcmEgYSBjb25mZWPDp8OjbyBkZSBhbWJpZW50ZXMgcGxhbmVqYWRvcyBlIGNvbSByZXF1aW50ZS5cIixcbiAgICBzdG9ja19xdHk6IDEwMCxcbiAgICBzb2xkX3F0eTogNTAsXG4gICAgZmVhdHVyZWRfaW1hZ2U6IFwibcOzdmVpcy0wMi5qcGdcIixcbiAgICBpbWFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDEuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDEuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMi5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMi5qcGdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAzLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAzLmpwZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNpemVzOiBbXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiLCBcIlhYTFwiXSxcbiAgICB0YWdzOiBbXCJNw7N2ZWlzLXBsYW5lamFkb3NcIl0sXG4gIH0sXG4gIDEwMzoge1xuICAgIGlkOiAxMDEsXG4gICAgbmFtZTogXCJNw7N2ZWlzIFBsYW5lamFkb3NcIixcbiAgICBtcnA6IDU5OSxcbiAgICBzZWxsaW5nX3ByaWNlOiA0OTksXG4gICAgY3VycmVuY3k6IFwi4oK5XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNvbW9zIGVzcGVjaWFsaXN0YXMgbm8gdHJhYmFsaG8gY29tIE1ERiwgdW0gbWF0ZXJpYWwgdmVyc8OhdGlsIGUgbWFsZcOhdmVsIHBhcmEgYSBjb25mZWPDp8OjbyBkZSBhbWJpZW50ZXMgcGxhbmVqYWRvcyBlIGNvbSByZXF1aW50ZS5cIixcbiAgICBzdG9ja19xdHk6IDEwMCxcbiAgICBzb2xkX3F0eTogNTAsXG4gICAgZmVhdHVyZWRfaW1hZ2U6IFwibcOzdmVpcy0wMi5qcGdcIixcbiAgICBpbWFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDEuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDEuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMi5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMi5qcGdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAzLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAzLmpwZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNpemVzOiBbXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiLCBcIlhYTFwiXSxcbiAgICB0YWdzOiBbXCJNw7N2ZWlzLXBsYW5lamFkb3NcIl0sXG4gIH0sXG4gIDEwNDoge1xuICAgIGlkOiAxMDEsXG4gICAgbmFtZTogXCJNw7N2ZWlzIFBsYW5lamFkb3NcIixcbiAgICBtcnA6IDU5OSxcbiAgICBzZWxsaW5nX3ByaWNlOiA0OTksXG4gICAgY3VycmVuY3k6IFwi4oK5XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNvbW9zIGVzcGVjaWFsaXN0YXMgbm8gdHJhYmFsaG8gY29tIE1ERiwgdW0gbWF0ZXJpYWwgdmVyc8OhdGlsIGUgbWFsZcOhdmVsIHBhcmEgYSBjb25mZWPDp8OjbyBkZSBhbWJpZW50ZXMgcGxhbmVqYWRvcyBlIGNvbSByZXF1aW50ZS5cIixcbiAgICBzdG9ja19xdHk6IDEwMCxcbiAgICBzb2xkX3F0eTogNTAsXG4gICAgZmVhdHVyZWRfaW1hZ2U6IFwibcOzdmVpcy0wMi5qcGdcIixcbiAgICBpbWFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgYmlnOiBcImJpZy1pbWctMDEuanBnXCIsXG4gICAgICAgIHNtYWxsOiBcInNtcC1pbWctMDEuanBnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiaWc6IFwiYmlnLWltZy0wMi5qcGdcIixcbiAgICAgICAgc21hbGw6IFwic21wLWltZy0wMi5qcGdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJpZzogXCJiaWctaW1nLTAzLmpwZ1wiLFxuICAgICAgICBzbWFsbDogXCJzbXAtaW1nLTAzLmpwZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNpemVzOiBbXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiLCBcIlhYTFwiXSxcbiAgICB0YWdzOiBbXCJNw7N2ZWlzLXBsYW5lamFkb3NcIl0sXG4gIH0sXG59O1xuXG5jb25zdCBwcm9kdWN0c1JlZHVjZXIgPSAoc3RhdGUgPSBwcm9kdWN0c0luaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1JlZHVjZXI7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IG91clRlYW1SZWR1Y2VyIGZyb20gXCIuL2NvbXBvbmVudHMvT3VyVGVhbS9PdXJUZWFtLnJlZHVjZXJzXCI7XG5pbXBvcnQgc2hvcENhdGVnb3JpZXNSZWR1Y2VyIGZyb20gXCIuL2NvbXBvbmVudHMvU2hvcENhdGVnb3JpZXMvU2hvcENhdGVyZ29yaWVzLnJlZHVjZXJcIjtcbmltcG9ydCBjYXJ0UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vycy9jYXJ0XCI7XG5pbXBvcnQgcHJvZHVjdHNSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL3Byb2R1Y3RzLnJlZHVjZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdGVhbU1lbWJlcnM6IG91clRlYW1SZWR1Y2VyLFxuICBzaG9wQ2F0ZWdvcmllczogc2hvcENhdGVnb3JpZXNSZWR1Y2VyLFxuICBjYXJ0OiBjYXJ0UmVkdWNlcixcbiAgcHJvZHVjdHM6IHByb2R1Y3RzUmVkdWNlcixcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHJvb3RSZWR1Y2VyIH0gZnJvbSBcIi4vcm9vdC1yZWR1Y2VyXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByb290UmVkdWNlcixcbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmXG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
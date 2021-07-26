(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

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

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GA_TRACKING_ID": function() { return /* binding */ GA_TRACKING_ID; },
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "event": function() { return /* binding */ event; }
/* harmony export */ });
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fpixel */ "./lib/fpixel.js");
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/gtag */ "./lib/gtag.js");

var _jsxFileName = "D:\\Grupoeasycare-main\\pages\\_document.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Use dummy ga id if not in production. Not sure if this is best way but works for now.

const GA_TRACKING_ID =  false ? 0 : "G-0000000001";

class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "Pt-br",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${'UA-175989423-1'}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          dangerouslySetInnerHTML: {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${'UA-175989423-1'}', {
                page_path: window.location.pathname,
              });
          `
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          dangerouslySetInnerHTML: {
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${_lib_fpixel__WEBPACK_IMPORTED_MODULE_2__.FB_PIXEL_ID});
              `
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("noscript", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            height: "1",
            width: "1",
            style: {
              display: 'none'
            },
            src: `https://www.facebook.com/tr?id=${_lib_fpixel__WEBPACK_IMPORTED_MODULE_2__.FB_PIXEL_ID}&ev=PageView&noscript=1`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          charSet: "utf-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          httpEquiv: "X-UA-Compatible",
          content: "IE=edge"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "Grupo Easy care | M\xF3veis Planejados"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "keywords",
          content: "m\xF3veis planejados para todos os estados fins. M\xF3veis Para Sala. M\xF3veis Para Banheiro. M\xF3veis Para Cozinha. M\xF3veis Para Quarto. Planejados De Qualidade. Modelos: Cozinha Planejada, Sala Planejada, Quarto Planejado, Banheiro Planejado."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "description",
          content: "m\xF3veis planejados para todos os estados do Brasil. M\xF3veis Para Sala. M\xF3veis Para Banheiro. M\xF3veis Para Cozinha. M\xF3veis Para Quarto. Planejados De Qualidade. Modelos: Cozinha Planejada, Sala Planejada, Quarto Planejado, Banheiro Planejado."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "author",
          content: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "shortcut icon",
          href: "images/favicon.png",
          type: "image/x-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "apple-touch-icon",
          href: "/images/icon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "path/to/font-awesome/css/font-awesome.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/css/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/css/style.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/css/style.scss"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/css/responsive.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/css/custom.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "css/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "css/magnific-popup.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 2
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "css/slicknav.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 2
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "css/owl.carousel.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 2
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "style.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "vendor/icofont/icofont.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "vendor/boxicons/css/boxicons.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "vendor/remixicon/remixicon.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "vendor/animate.css/animate.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "vendor/venobox/venobox.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "vendor/owl.carousel/assets/owl.carousel.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/jquery-3.2.1.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/popper.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/bootstrap.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/jquery.superslides.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/bootstrap-select.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/inewsticker.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/bootsnav.js."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/images-loded.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/isotope.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/owl.carousel.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/baguetteBox.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/form-validator.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/contact-form-script.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/js/custom.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/jquery/jquery.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/bootstrap/js/bootstrap.bundle.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/jquery.easing/jquery.easing.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/php-email-form/validate.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/venobox/venobox.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/waypoints/jquery.waypoints.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/counterup/counterup.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "/isotope-layout/isotope.pkgd.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 3
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 1
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./pages/_document.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9saWIvZnBpeGVsLmpzIiwid2VicGFjazovL25leHRqcy8uL2xpYi9ndGFnLmpzIiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbIkZCX1BJWEVMX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZBQ0VCT09LX1BJWEVMX0lEIiwicGFnZXZpZXciLCJ3aW5kb3ciLCJmYnEiLCJldmVudCIsIm5hbWUiLCJvcHRpb25zIiwiR0FfVFJBQ0tJTkdfSUQiLCJORVhUX1BVQkxJQ19HQV9JRCIsInVybCIsImd0YWciLCJwYWdlX3BhdGgiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIiwiUFJPRF9HQV9UUkFDS0lOR19JRCIsIk15RG9jdW1lbnQiLCJEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImluaXRpYWxQcm9wcyIsInJlbmRlciIsIl9faHRtbCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw2QkFBaEM7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUM1QkMsUUFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxFQUFvQixVQUFwQjtBQUNELENBRk0sQyxDQUlQOztBQUNPLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxJQUFELEVBQU9DLE9BQU8sR0FBRyxFQUFqQixLQUF3QjtBQUMzQ0osUUFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxFQUFvQkUsSUFBcEIsRUFBMEJDLE9BQTFCO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLE1BQU1DLGNBQWMsR0FBR1QsT0FBTyxDQUFDQyxHQUFSLENBQVlTLGlCQUFuQyxDLENBRVA7O0FBQ08sTUFBTVAsUUFBUSxHQUFJUSxHQUFELElBQVM7QUFDL0JQLFFBQU0sQ0FBQ1EsSUFBUCxDQUFZLFFBQVosRUFBc0JILGNBQXRCLEVBQXNDO0FBQ3BDSSxhQUFTLEVBQUVGO0FBRHlCLEdBQXRDO0FBR0QsQ0FKTSxDLENBTVA7O0FBQ08sTUFBTUwsS0FBSyxHQUFHLENBQUM7QUFBRVEsUUFBRjtBQUFVQyxVQUFWO0FBQW9CQyxPQUFwQjtBQUEyQkM7QUFBM0IsQ0FBRCxLQUF3QztBQUMzRGIsUUFBTSxDQUFDUSxJQUFQLENBQVksT0FBWixFQUFxQkUsTUFBckIsRUFBNkI7QUFDM0JJLGtCQUFjLEVBQUVILFFBRFc7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Q0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBGQl9QSVhFTF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZBQ0VCT09LX1BJWEVMX0lEXHJcblxyXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAoKSA9PiB7XHJcbiAgd2luZG93LmZicSgndHJhY2snLCAnUGFnZVZpZXcnKVxyXG59XHJcblxyXG4vLyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stcGl4ZWwvYWR2YW5jZWQvXHJcbmV4cG9ydCBjb25zdCBldmVudCA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICB3aW5kb3cuZmJxKCd0cmFjaycsIG5hbWUsIG9wdGlvbnMpXHJcbn0iLCJleHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9JRFxuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3BhZ2VzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdjb25maWcnLCBHQV9UUkFDS0lOR19JRCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KVxufVxuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XG4gICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gIH0pXG59XG4iLCJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgeyBGQl9QSVhFTF9JRCB9IGZyb20gJy4uL2xpYi9mcGl4ZWwnXG5pbXBvcnQgeyBHQV9UUkFDS0lOR19JRCBhcyBQUk9EX0dBX1RSQUNLSU5HX0lEIH0gZnJvbSBcIi4uL2xpYi9ndGFnXCI7XG5cblxuICAgIC8vIFVzZSBkdW1teSBnYSBpZCBpZiBub3QgaW4gcHJvZHVjdGlvbi4gTm90IHN1cmUgaWYgdGhpcyBpcyBiZXN0IHdheSBidXQgd29ya3MgZm9yIG5vdy5cbiAgICBjb25zdCBHQV9UUkFDS0lOR19JRCA9XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgPyBQUk9EX0dBX1RSQUNLSU5HX0lEXG4gICAgICAgIDogXCJHLTAwMDAwMDAwMDFcIjsgICBcbiAgXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIHJldHVybiB7IC4uLmluaXRpYWxQcm9wcyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiUHQtYnJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgey8qIEdsb2JhbCBTaXRlIFRhZyAoZ3RhZy5qcykgLSBHb29nbGUgQW5hbHl0aWNzICovfVxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7J1VBLTE3NTk4OTQyMy0xJ31gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICckeydVQS0xNzU5ODk0MjMtMSd9Jywge1xuICAgICAgICAgICAgICAgIHBhZ2VfcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICBgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBHbG9iYWwgU2l0ZSBDb2RlIFBpeGVsIC0gRmFjZWJvb2sgUGl4ZWwgKi99XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpXG4gICAgICAgICAgICAgICAge2lmKGYuZmJxKXJldHVybjtuPWYuZmJxPWZ1bmN0aW9uKCl7bi5jYWxsTWV0aG9kP1xuICAgICAgICAgICAgICAgIG4uY2FsbE1ldGhvZC5hcHBseShuLGFyZ3VtZW50cyk6bi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyl9O1xuICAgICAgICAgICAgICAgIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnO1xuICAgICAgICAgICAgICAgIG4ucXVldWU9W107dD1iLmNyZWF0ZUVsZW1lbnQoZSk7dC5hc3luYz0hMDtcbiAgICAgICAgICAgICAgICB0LnNyYz12O3M9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKVswXTtcbiAgICAgICAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanMnKTtcbiAgICAgICAgICAgICAgICBmYnEoJ2luaXQnLCAke0ZCX1BJWEVMX0lEfSk7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBoZWlnaHQ9XCIxXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90cj9pZD0ke0ZCX1BJWEVMX0lEfSZldj1QYWdlVmlldyZub3NjcmlwdD0xYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cblxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cbiAgICAgICAgICA8dGl0bGU+R3J1cG8gRWFzeSBjYXJlIHwgTcOzdmVpcyBQbGFuZWphZG9zPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwibcOzdmVpcyBwbGFuZWphZG9zIHBhcmEgdG9kb3Mgb3MgZXN0YWRvcyBmaW5zLiBNw7N2ZWlzIFBhcmEgU2FsYS4gTcOzdmVpcyBQYXJhIEJhbmhlaXJvLlxuICAgICAgICAgICBNw7N2ZWlzIFBhcmEgQ296aW5oYS4gTcOzdmVpcyBQYXJhIFF1YXJ0by4gUGxhbmVqYWRvcyBEZSBRdWFsaWRhZGUuIE1vZGVsb3M6IENvemluaGEgUGxhbmVqYWRhLCBTYWxhIFBsYW5lamFkYSwgUXVhcnRvIFBsYW5lamFkbywgQmFuaGVpcm8gUGxhbmVqYWRvLlwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIm3Ds3ZlaXMgcGxhbmVqYWRvcyBwYXJhIHRvZG9zIG9zIGVzdGFkb3MgZG8gQnJhc2lsLiBNw7N2ZWlzIFBhcmEgU2FsYS4gTcOzdmVpcyBQYXJhIEJhbmhlaXJvLiBNw7N2ZWlzIFBhcmEgQ296aW5oYS4gTcOzdmVpcyBQYXJhIFF1YXJ0by4gUGxhbmVqYWRvcyBEZSBRdWFsaWRhZGUuIE1vZGVsb3M6XG4gICAgICAgICAgIENvemluaGEgUGxhbmVqYWRhLCBTYWxhIFBsYW5lamFkYSwgUXVhcnRvIFBsYW5lamFkbywgQmFuaGVpcm8gUGxhbmVqYWRvLlwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJcIiAvPlxuXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgICAgaHJlZj1cImltYWdlcy9mYXZpY29uLnBuZ1wiXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2ltYWdlcy9pY29uLmljb1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJwYXRoL3RvL2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3N0eWxlLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3N0eWxlLnNjc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9yZXNwb25zaXZlLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2N1c3RvbS5jc3NcIiAvPlxuXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XG5cblx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWFnbmlmaWMtcG9wdXAuY3NzXCIvPlxuXHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9zbGlja25hdi5taW4uY3NzXCIvPlxuXHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9vd2wuY2Fyb3VzZWwubWluLmNzc1wiLz5cbiAgICAgICAgICA8bGluayBocmVmPVwic3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cblxuICA8bGluayBocmVmPVwidmVuZG9yL2ljb2ZvbnQvaWNvZm9udC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgPGxpbmsgaHJlZj1cInZlbmRvci9ib3hpY29ucy9jc3MvYm94aWNvbnMubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gIDxsaW5rIGhyZWY9XCJ2ZW5kb3IvcmVtaXhpY29uL3JlbWl4aWNvbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICA8bGluayBocmVmPVwidmVuZG9yL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gIDxsaW5rIGhyZWY9XCJ2ZW5kb3IvdmVub2JveC92ZW5vYm94LmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gIDxsaW5rIGhyZWY9XCJ2ZW5kb3Ivb3dsLmNhcm91c2VsL2Fzc2V0cy9vd2wuY2Fyb3VzZWwubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+ICAgICAgICBcbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvanF1ZXJ5LTMuMi4xLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvanF1ZXJ5LnN1cGVyc2xpZGVzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2Jvb3RzdHJhcC1zZWxlY3QuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9pbmV3c3RpY2tlci5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2Jvb3RzbmF2LmpzLlwiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2ltYWdlcy1sb2RlZC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9pc290b3BlLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL293bC5jYXJvdXNlbC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9iYWd1ZXR0ZUJveC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9mb3JtLXZhbGlkYXRvci5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9jb250YWN0LWZvcm0tc2NyaXB0LmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvY3VzdG9tLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcXVlcnkvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHNyYz1cIi9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvanF1ZXJ5LmVhc2luZy9qcXVlcnkuZWFzaW5nLm1pbi5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHNyYz1cIi9waHAtZW1haWwtZm9ybS92YWxpZGF0ZS5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHNyYz1cIi92ZW5vYm94L3Zlbm9ib3gubWluLmpzXCI+PC9zY3JpcHQ+XG4gIDxzY3JpcHQgc3JjPVwiL3dheXBvaW50cy9qcXVlcnkud2F5cG9pbnRzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHNyYz1cIi9jb3VudGVydXAvY291bnRlcnVwLm1pbi5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHNyYz1cIi9pc290b3BlLWxheW91dC9pc290b3BlLnBrZ2QubWluLmpzXCI+PC9zY3JpcHQ+XG4gIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZW1haWxqcy1jb21AMi9kaXN0L2VtYWlsLm1pbi5qc1wiPlxuPC9zY3JpcHQ+XG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2VtYWlsanMtY29tQDIvZGlzdC9lbWFpbC5taW4uanNcIj5cbjwvc2NyaXB0PlxuICBcbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
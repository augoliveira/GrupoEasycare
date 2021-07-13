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
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/gtag */ "./utils/gtag.ts");

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

/***/ "./utils/gtag.ts":
/*!***********************!*\
  !*** ./utils/gtag.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GA_TRACKING_ID": function() { return /* binding */ GA_TRACKING_ID; },
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "event": function() { return /* binding */ event; }
/* harmony export */ });
const GA_TRACKING_ID = "G-RDLTQJWV20"; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9saWIvZnBpeGVsLmpzIiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi91dGlscy9ndGFnLnRzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOlsiRkJfUElYRUxfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRkFDRUJPT0tfUElYRUxfSUQiLCJwYWdldmlldyIsIndpbmRvdyIsImZicSIsImV2ZW50IiwibmFtZSIsIm9wdGlvbnMiLCJHQV9UUkFDS0lOR19JRCIsIlBST0RfR0FfVFJBQ0tJTkdfSUQiLCJNeURvY3VtZW50IiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJpbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJfX2h0bWwiLCJkaXNwbGF5IiwidXJsIiwiZ3RhZyIsInBhZ2VfcGF0aCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50X2NhdGVnb3J5IiwiZXZlbnRfbGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw2QkFBaEM7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUM1QkMsUUFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxFQUFvQixVQUFwQjtBQUNELENBRk0sQyxDQUlQOztBQUNPLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxJQUFELEVBQU9DLE9BQU8sR0FBRyxFQUFqQixLQUF3QjtBQUMzQ0osUUFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxFQUFvQkUsSUFBcEIsRUFBMEJDLE9BQTFCO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0NBSUk7O0FBQ0EsTUFBTUMsY0FBYyxHQUNsQixTQUNJQyxDQURKLEdBRUksY0FITjs7QUFLSixNQUFNQyxVQUFOLFNBQXlCQyxzREFBekIsQ0FBa0M7QUFDaEMsZUFBYUMsZUFBYixDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsVUFBTUMsWUFBWSxHQUFHLE1BQU1ILG9FQUFBLENBQXlCRSxHQUF6QixDQUEzQjtBQUNBLDZCQUFZQyxZQUFaO0FBQ0Q7O0FBRURDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLCtDQUFEO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUFBLGdDQUVFO0FBQ0UsZUFBSyxNQURQO0FBRUUsYUFBRyxFQUFHLCtDQUE4QyxnQkFBaUI7QUFGdkU7QUFBQTtBQUFB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bUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZCX1BJWEVMX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRkFDRUJPT0tfUElYRUxfSURcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICgpID0+IHtcclxuICB3aW5kb3cuZmJxKCd0cmFjaycsICdQYWdlVmlldycpXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1waXhlbC9hZHZhbmNlZC9cclxuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKG5hbWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gIHdpbmRvdy5mYnEoJ3RyYWNrJywgbmFtZSwgb3B0aW9ucylcclxufSIsImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcbmltcG9ydCB7IEZCX1BJWEVMX0lEIH0gZnJvbSAnLi4vbGliL2ZwaXhlbCdcbmltcG9ydCB7IEdBX1RSQUNLSU5HX0lEIGFzIFBST0RfR0FfVFJBQ0tJTkdfSUQgfSBmcm9tIFwiLi4vdXRpbHMvZ3RhZ1wiO1xuXG5cbiAgICAvLyBVc2UgZHVtbXkgZ2EgaWQgaWYgbm90IGluIHByb2R1Y3Rpb24uIE5vdCBzdXJlIGlmIHRoaXMgaXMgYmVzdCB3YXkgYnV0IHdvcmtzIGZvciBub3cuXG4gICAgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgID8gUFJPRF9HQV9UUkFDS0lOR19JRFxuICAgICAgICA6IFwiRy0wMDAwMDAwMDAxXCI7ICAgXG4gIFxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICByZXR1cm4geyAuLi5pbml0aWFsUHJvcHMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgbGFuZz1cIlB0LWJyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHsvKiBHbG9iYWwgU2l0ZSBUYWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAqL31cbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBhc3luY1xuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0keydVQS0xNzU5ODk0MjMtMSd9YH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHsnVUEtMTc1OTg5NDIzLTEnfScsIHtcbiAgICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogR2xvYmFsIFNpdGUgQ29kZSBQaXhlbCAtIEZhY2Vib29rIFBpeGVsICovfVxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICAgICFmdW5jdGlvbihmLGIsZSx2LG4sdCxzKVxuICAgICAgICAgICAgICAgIHtpZihmLmZicSlyZXR1cm47bj1mLmZicT1mdW5jdGlvbigpe24uY2FsbE1ldGhvZD9cbiAgICAgICAgICAgICAgICBuLmNhbGxNZXRob2QuYXBwbHkobixhcmd1bWVudHMpOm4ucXVldWUucHVzaChhcmd1bWVudHMpfTtcbiAgICAgICAgICAgICAgICBpZighZi5fZmJxKWYuX2ZicT1uO24ucHVzaD1uO24ubG9hZGVkPSEwO24udmVyc2lvbj0nMi4wJztcbiAgICAgICAgICAgICAgICBuLnF1ZXVlPVtdO3Q9Yi5jcmVhdGVFbGVtZW50KGUpO3QuYXN5bmM9ITA7XG4gICAgICAgICAgICAgICAgdC5zcmM9djtzPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSlbMF07XG4gICAgICAgICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHMpfSh3aW5kb3csIGRvY3VtZW50LCdzY3JpcHQnLFxuICAgICAgICAgICAgICAgICdodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL2ZiZXZlbnRzLmpzJyk7XG4gICAgICAgICAgICAgICAgZmJxKCdpbml0JywgJHtGQl9QSVhFTF9JRH0pO1xuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vdHI/aWQ9JHtGQl9QSVhFTF9JRH0mZXY9UGFnZVZpZXcmbm9zY3JpcHQ9MWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXG4gICAgICAgICAgPHRpdGxlPkdydXBvIEVhc3kgY2FyZSB8IE3Ds3ZlaXMgUGxhbmVqYWRvczwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIm3Ds3ZlaXMgcGxhbmVqYWRvcyBwYXJhIHRvZG9zIG9zIGVzdGFkb3MgZmlucy4gTcOzdmVpcyBQYXJhIFNhbGEuIE3Ds3ZlaXMgUGFyYSBCYW5oZWlyby5cbiAgICAgICAgICAgTcOzdmVpcyBQYXJhIENvemluaGEuIE3Ds3ZlaXMgUGFyYSBRdWFydG8uIFBsYW5lamFkb3MgRGUgUXVhbGlkYWRlLiBNb2RlbG9zOiBDb3ppbmhhIFBsYW5lamFkYSwgU2FsYSBQbGFuZWphZGEsIFF1YXJ0byBQbGFuZWphZG8sIEJhbmhlaXJvIFBsYW5lamFkby5cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJtw7N2ZWlzIHBsYW5lamFkb3MgcGFyYSB0b2RvcyBvcyBlc3RhZG9zIGRvIEJyYXNpbC4gTcOzdmVpcyBQYXJhIFNhbGEuIE3Ds3ZlaXMgUGFyYSBCYW5oZWlyby4gTcOzdmVpcyBQYXJhIENvemluaGEuIE3Ds3ZlaXMgUGFyYSBRdWFydG8uIFBsYW5lamFkb3MgRGUgUXVhbGlkYWRlLiBNb2RlbG9zOlxuICAgICAgICAgICBDb3ppbmhhIFBsYW5lamFkYSwgU2FsYSBQbGFuZWphZGEsIFF1YXJ0byBQbGFuZWphZG8sIEJhbmhlaXJvIFBsYW5lamFkby5cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiXCIgLz5cblxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICAgIGhyZWY9XCJpbWFnZXMvZmF2aWNvbi5wbmdcIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9pbWFnZXMvaWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwicGF0aC90by9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9zdHlsZS5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9zdHlsZS5zY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvcmVzcG9uc2l2ZS5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9jdXN0b20uY3NzXCIgLz5cblxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxuXG5cdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21hZ25pZmljLXBvcHVwLmNzc1wiLz5cblx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3Mvc2xpY2tuYXYubWluLmNzc1wiLz5cblx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3Mvb3dsLmNhcm91c2VsLm1pbi5jc3NcIi8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cInN0eWxlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG5cbiAgPGxpbmsgaHJlZj1cInZlbmRvci9pY29mb250L2ljb2ZvbnQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gIDxsaW5rIGhyZWY9XCJ2ZW5kb3IvYm94aWNvbnMvY3NzL2JveGljb25zLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICA8bGluayBocmVmPVwidmVuZG9yL3JlbWl4aWNvbi9yZW1peGljb24uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgPGxpbmsgaHJlZj1cInZlbmRvci9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICA8bGluayBocmVmPVwidmVuZG9yL3Zlbm9ib3gvdmVub2JveC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICA8bGluayBocmVmPVwidmVuZG9yL293bC5jYXJvdXNlbC9hc3NldHMvb3dsLmNhcm91c2VsLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPiAgICAgICAgXG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2pxdWVyeS0zLjIuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9wb3BwZXIubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2pxdWVyeS5zdXBlcnNsaWRlcy5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9ib290c3RyYXAtc2VsZWN0LmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvaW5ld3N0aWNrZXIuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9ib290c25hdi5qcy5cIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9pbWFnZXMtbG9kZWQubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvaXNvdG9wZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9vd2wuY2Fyb3VzZWwubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvYmFndWV0dGVCb3gubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvZm9ybS12YWxpZGF0b3IubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvY29udGFjdC1mb3JtLXNjcmlwdC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2N1c3RvbS5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanF1ZXJ5L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XG4gIDxzY3JpcHQgc3JjPVwiL2pxdWVyeS5lYXNpbmcvanF1ZXJ5LmVhc2luZy5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvcGhwLWVtYWlsLWZvcm0vdmFsaWRhdGUuanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvdmVub2JveC92ZW5vYm94Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHNyYz1cIi93YXlwb2ludHMvanF1ZXJ5LndheXBvaW50cy5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvY291bnRlcnVwL2NvdW50ZXJ1cC5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvaXNvdG9wZS1sYXlvdXQvaXNvdG9wZS5wa2dkLm1pbi5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2VtYWlsanMtY29tQDIvZGlzdC9lbWFpbC5taW4uanNcIj5cbjwvc2NyaXB0PlxuPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbWFpbGpzLWNvbUAyL2Rpc3QvZW1haWwubWluLmpzXCI+XG48L3NjcmlwdD5cbiAgXG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XG4iLCJleHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBcIkctUkRMVFFKV1YyMFwiO1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3BhZ2VzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsOiBVUkwpID0+IHtcbiAgd2luZG93Lmd0YWcoXCJjb25maWdcIiwgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSk7XG59O1xuXG50eXBlIEdUYWdFdmVudCA9IHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG59O1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH06IEdUYWdFdmVudCkgPT4ge1xuICB3aW5kb3cuZ3RhZyhcImV2ZW50XCIsIGFjdGlvbiwge1xuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/contato"],{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ (function(module) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__.default(stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheProvider": function() { return /* reexport safe */ _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.C; },
/* harmony export */   "ThemeContext": function() { return /* reexport safe */ _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.T; },
/* harmony export */   "withEmotionCache": function() { return /* reexport safe */ _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.w; },
/* harmony export */   "css": function() { return /* reexport safe */ _emotion_css__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "ClassNames": function() { return /* binding */ ClassNames; },
/* harmony export */   "Global": function() { return /* binding */ Global; },
/* harmony export */   "createElement": function() { return /* binding */ jsx; },
/* harmony export */   "jsx": function() { return /* binding */ jsx; },
/* harmony export */   "keyframes": function() { return /* binding */ keyframes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emotion-element-57a3a7a3.browser.esm.js */ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");











var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.E;
  createElementArgArray[1] = (0,_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */(0,_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.w)(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.T.Consumer, null, function (theme) {
      var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([styles(theme)]);
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([styles]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__.StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_7__.default.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = (0,_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.w)(function (props, context) {
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.T.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(args, context.registered);

      {
        (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ CacheProvider; },
/* harmony export */   "E": function() { return /* binding */ Emotion; },
/* harmony export */   "T": function() { return /* binding */ ThemeContext; },
/* harmony export */   "c": function() { return /* binding */ createEmotionProps; },
/* harmony export */   "h": function() { return /* binding */ hasOwnProperty; },
/* harmony export */   "w": function() { return /* binding */ withEmotionCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");






var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_2__.default)() : null);
var ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.insertStyles)(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(type, newProps);

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__.serializeStyles)(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeStyles": function() { return /* binding */ serializeStyles; }
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__.default)(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__.default[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__.default)(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleSheet": function() { return /* binding */ StyleSheet; }
/* harmony export */ });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegisteredStyles": function() { return /* binding */ getRegisteredStyles; },
/* harmony export */   "insertStyles": function() { return /* binding */ insertStyles; }
/* harmony export */ });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./components/OurTeam/OurTeamLoader.jsx":
/*!**********************************************!*\
  !*** ./components/OurTeam/OurTeamLoader.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OurTeamLoader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Grupoeasycare-main\\components\\OurTeam\\OurTeamLoader.jsx";


function OurTeamLoader() {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row my-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__.default, {
        width: 200,
        height: 30
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), [1, 2, 3, 4].map(function () {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-6 col-lg-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__.default, {
          height: 300
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
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
_c = OurTeamLoader;

var _c;

$RefreshReg$(_c, "OurTeamLoader");

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

/***/ "./components/PageTitleBox contato/PageTitleBox.jsx":
/*!**********************************************************!*\
  !*** ./components/PageTitleBox contato/PageTitleBox.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageTitleBox; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Grupoeasycare-main\\components\\PageTitleBox contato\\PageTitleBox.jsx";

function PageTitleBox() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "all-title-box",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "FALE-CONOSCO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "breadcrumb",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "breadcrumb-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "breadcrumb-item active",
              children: "FALE-CONOSCO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
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
_c = PageTitleBox;

var _c;

$RefreshReg$(_c, "PageTitleBox");

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

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://nextjs.org/docs/messages/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = _loadable["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

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

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

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

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return /*#__PURE__*/_react["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

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

/***/ "./pages/contato.js":
/*!**************************!*\
  !*** ./pages/contato.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Contato; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageTitleBox_contato_PageTitleBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageTitleBox contato/PageTitleBox */ "./components/PageTitleBox contato/PageTitleBox.jsx");
/* harmony import */ var _components_OurTeam_OurTeamLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/OurTeam/OurTeamLoader */ "./components/OurTeam/OurTeamLoader.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Grupoeasycare-main\\pages\\contato.js",
    _this = undefined;






 //import OurTeam from "";

var OurTeam = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_react-redux_es_-11f860"), __webpack_require__.e("components_OurTeam_OurTeam_container_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/OurTeam/OurTeam.container */ "./components/OurTeam/OurTeam.container.js"));
}, {
  loading: function loading() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OurTeam_OurTeamLoader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 20
    }, _this);
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/OurTeam/OurTeam.container */ "./components/OurTeam/OurTeam.container.js")];
    },
    modules: ["contato.js -> " + "../components/OurTeam/OurTeam.container"]
  }
});
_c2 = OurTeam;
function Contato() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_1__.default.sendForm('gmail', 'template_p39ar0s ', e.target, 'user_6NBZ49aog0wFyD1O1NJJI').then(function (result) {
      console.log(result.text);
    }, function (error) {
      console.log(error.text);
    });
    e.target.reset();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitleBox_contato_PageTitleBox__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "contato-box-main",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "contato-title",
              children: ["Grupo ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: " Easy Care"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "contato",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-12 col-md-12 col-sm-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "service-block-inner",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                children: ["D\xEA in\xEDcio a casa", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  "class": "badge bg-warning text-secondar",
                  children: "dos seus sonhos"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "contato-container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "contact-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: "Contato"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "Fale conosco"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-text",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  "class": "fa fa-phone",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "61 3975-1779"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-text",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fa fa-envelope",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "comercial@gmail.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-text",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fa fa-map-marker",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Endere\xE7o: Lote 230 - Guar\xE1 Bras\xEDlia - DF,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "add-to-btn",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "share-bar",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "btn hvr-hover",
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fab fa-facebook",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "btn hvr-hover",
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fab fa-pinterest-p",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "btn hvr-hover",
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fab fa-whatsapp",
                      "aria-hidden": "true"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              action: "https://formspree.io/f/xayabyqo",
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                "class": "form-group",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  "for": "formGroupExampleInput",
                  children: "Nome"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  "class": "form-control",
                  id: "formGroupExampleInput",
                  placeholder: "Escreva seu nome"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "form-group col-lg-6 col-md-6 col-sm-6",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    "for": "inputEmail4",
                    children: "Email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "email",
                    "class": "form-control",
                    id: "inputEmail4",
                    placeholder: "Email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  "class": "form-group col-lg-6 col-md-6 col-sm-6",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    "for": "inputphonel4",
                    children: "Tel."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "phone",
                    "class": "form-control",
                    id: "inputphonel4",
                    placeholder: "Tel."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-lg-12 col-md-12 col-sm-12",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group-center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    "class": "form-check form-check-inline",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      "class": "form-check-input",
                      type: "checkbox",
                      id: "flexSwitchCheckDefault"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      "class": "form-check-label",
                      "for": "flexSwitchCheckDefault",
                      children: "M\xF3veis Planejados"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      "class": "form-check form-check-inline",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "checkbox",
                        "class": "form-check-input",
                        id: "flexSwitchCheckDefault"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                        "class": "form-check-label",
                        "for": "flexSwitchCheckDefault",
                        children: "Pedra Esculpidas"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        "class": "form-check form-check-inline",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                          "class": "form-check-input",
                          type: "checkbox",
                          id: "flexSwitchCheckDefault"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                          "class": "form-check-label",
                          "for": "flexSwitchCheckDefault",
                          children: "Energia Fotovoltaica"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 157,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-lg-12 col-md-12 col-sm-12",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group-cemter",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    "class": "form-check form-check-inline",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      "class": "form-check-input",
                      type: "checkbox",
                      id: "flexSwitchCheckDefault"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      "class": "form-check-label",
                      "for": "flexSwitchCheckDefault",
                      children: "Engenharia"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      "class": "form-check form-check-inline",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "checkbox",
                        "class": "form-check-input",
                        id: "flexSwitchCheckDefault"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                        "class": "form-check-label",
                        "for": "flexSwitchCheckDefault",
                        children: "Manuten\xE7\xE3o Predial"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        "class": "form-check form-check-inline",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                          "class": "form-check-input",
                          type: "checkbox",
                          id: "flexSwitchCheckDefault"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                          "class": "form-check-label",
                          "for": "flexSwitchCheckDefault",
                          children: "Automa\xE7\xE3o Residencial"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 202,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-lg-12 col-md-12 col-sm-12",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group solo",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    children: "mensagem"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col-lg-12 col-md-12 col-sm-12",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "form-group solo",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                      type: "submit",
                      "class": "btn btn-primary",
                      children: "ENVIAR"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c3 = Contato;

var _c, _c2, _c3;

$RefreshReg$(_c, "OurTeam$dynamic");
$RefreshReg$(_c2, "OurTeam");
$RefreshReg$(_c3, "Contato");

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

/***/ "./node_modules/emailjs-com/source/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emailjs-com/source/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;
var EmailJSResponseStatus_1 = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js");
Object.defineProperty(exports, "EmailJSResponseStatus", ({ enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } }));
var UI_1 = __webpack_require__(/*! ./services/ui/UI */ "./node_modules/emailjs-com/source/services/ui/UI.js");
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document && document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
function fixIdSelector(selector) {
    if (selector[0] !== '#' && selector[0] !== '.') {
        return '#' + selector;
    }
    return selector;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.6.4',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(fixIdSelector(form));
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.6.4');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;
exports.default = {
    init: init,
    send: send,
    sendForm: sendForm
};


/***/ }),

/***/ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":
/*!*************************************************************************!*\
  !*** ./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailJSResponseStatus = void 0;
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ "./node_modules/emailjs-com/source/services/ui/UI.js":
/*!***********************************************************!*\
  !*** ./node_modules/emailjs-com/source/services/ui/UI.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontato&absolutePagePath=D%3A%5CGrupoeasycare-main%5Cpages%5Ccontato.js!":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontato&absolutePagePath=D%3A%5CGrupoeasycare-main%5Cpages%5Ccontato.js! ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/contato",
      function () {
        return __webpack_require__(/*! ./pages/contato.js */ "./pages/contato.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/react-loading-skeleton/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-loading-skeleton/lib/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _skeleton.default;
  }
}));
Object.defineProperty(exports, "SkeletonTheme", ({
  enumerable: true,
  get: function get() {
    return _skeletonTheme.default;
  }
}));

var _skeleton = _interopRequireDefault(__webpack_require__(/*! ./skeleton */ "./node_modules/react-loading-skeleton/lib/skeleton.js"));

var _skeletonTheme = _interopRequireDefault(__webpack_require__(/*! ./skeleton-theme */ "./node_modules/react-loading-skeleton/lib/skeleton-theme.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-loading-skeleton/lib/skeleton-theme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/lib/skeleton-theme.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _skeleton = __webpack_require__(/*! ./skeleton */ "./node_modules/react-loading-skeleton/lib/skeleton.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SkeletonTheme =
/*#__PURE__*/
function (_Component) {
  _inherits(SkeletonTheme, _Component);

  function SkeletonTheme() {
    _classCallCheck(this, SkeletonTheme);

    return _possibleConstructorReturn(this, _getPrototypeOf(SkeletonTheme).apply(this, arguments));
  }

  _createClass(SkeletonTheme, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          highlightColor = _this$props.highlightColor,
          children = _this$props.children;
      var themeStyles =
      /*#__PURE__*/
      (0, _core.css)(".react-loading-skeleton{background-color:", color, ";background-image:linear-gradient( 90deg,", color, ",", highlightColor, ",", color, " );};label:SkeletonTheme;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi10aGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZMkIiLCJmaWxlIjoiLi4vc3JjL3NrZWxldG9uLXRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHRCYXNlQ29sb3IsIGRlZmF1bHRIaWdobGlnaHRDb2xvciB9IGZyb20gXCIuL3NrZWxldG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNrZWxldG9uVGhlbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiBkZWZhdWx0QmFzZUNvbG9yLFxuICAgIGhpZ2hsaWdodENvbG9yOiBkZWZhdWx0SGlnaGxpZ2h0Q29sb3JcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvciwgaGlnaGxpZ2h0Q29sb3IsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRoZW1lU3R5bGVzID0gY3NzYFxuICAgICAgLnJlYWN0LWxvYWRpbmctc2tlbGV0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgICR7Y29sb3J9LFxuICAgICAgICAgICR7aGlnaGxpZ2h0Q29sb3J9LFxuICAgICAgICAgICR7Y29sb3J9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgYDtcbiAgICByZXR1cm4gPGRpdiBjc3M9e3RoZW1lU3R5bGVzfT57Y2hpbGRyZW59PC9kaXY+O1xuICB9XG59XG4iXX0= */"));
      return (0, _core.jsx)("div", {
        css: themeStyles
      }, children);
    }
  }]);

  return SkeletonTheme;
}(_react.Component);

exports.default = SkeletonTheme;

_defineProperty(SkeletonTheme, "defaultProps", {
  color: _skeleton.defaultBaseColor,
  highlightColor: _skeleton.defaultHighlightColor
});

/***/ }),

/***/ "./node_modules/react-loading-skeleton/lib/skeleton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/lib/skeleton.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Skeleton;
exports.skeletonStyles = exports.skeletonKeyframes = exports.defaultHighlightColor = exports.defaultBaseColor = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    background-position: -200px 0;\n  }\n  ", "\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultBaseColor = "#eee";
exports.defaultBaseColor = defaultBaseColor;
var defaultHighlightColor = "#f5f5f5";
exports.defaultHighlightColor = defaultHighlightColor;

var skeletonKeyframes = function skeletonKeyframes(duration, delay) {
  return (0, _core.keyframes)(_templateObject(), delay > 0 ? "".concat(Math.floor(1 / (duration + delay) * duration * 100), "% {\n    background-position: calc(200px + 100%) 0;\n  }") : undefined);
};

exports.skeletonKeyframes = skeletonKeyframes;
var skeletonStyles =
/*#__PURE__*/
(0, _core.css)("background-color:", defaultBaseColor, ";background-image:linear-gradient( 90deg,", defaultBaseColor, ",", defaultHighlightColor, ",", defaultBaseColor, " );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmlDIiwiZmlsZSI6Ii4uL3NyYy9za2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlQ29sb3IgPSBcIiNlZWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIaWdobGlnaHRDb2xvciA9IFwiI2Y1ZjVmNVwiO1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25LZXlmcmFtZXMgPSAoZHVyYXRpb24sIGRlbGF5KSA9PiBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAke1xuICAgIGRlbGF5ID4gMFxuICAgICAgPyBgJHtNYXRoLmZsb29yKCgxIC8gKGR1cmF0aW9uICsgZGVsYXkpKSAqIGR1cmF0aW9uICogMTAwKX0lIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDIwMHB4ICsgMTAwJSkgMDtcbiAgfWBcbiAgICAgIDogdW5kZWZpbmVkXG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygyMDBweCArIDEwMCUpIDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblN0eWxlcyA9IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkZWZhdWx0QmFzZUNvbG9yfTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn0sXG4gICAgJHtkZWZhdWx0SGlnaGxpZ2h0Q29sb3J9LFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn1cbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tlbGV0b24oe1xuICBjb3VudCxcbiAgZHVyYXRpb24sXG4gIHdpZHRoLFxuICB3cmFwcGVyOiBXcmFwcGVyLFxuICBoZWlnaHQsXG4gIGNpcmNsZSxcbiAgZGVsYXksXG4gIHN0eWxlOiBjdXN0b21TdHlsZSxcbiAgY2xhc3NOYW1lOiBjdXN0b21DbGFzc05hbWVcbn0pIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBsZXQgc3R5bGUgPSB7fTtcblxuICAgIGlmICh3aWR0aCAhPT0gbnVsbCkge1xuICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCAmJiBjaXJjbGUpIHtcbiAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xuICAgIGlmIChjdXN0b21DbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGN1c3RvbUNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgPHNwYW5cbiAgICAgICAga2V5PXtpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgJHtza2VsZXRvblN0eWxlc31cbiAgICAgICAgICBhbmltYXRpb246ICR7c2tlbGV0b25LZXlmcmFtZXMoZHVyYXRpb24sIGRlbGF5KX0gJHtkdXJhdGlvbiArXG4gICAgICAgICAgZGVsYXl9cyBlYXNlLWluLW91dCBpbmZpbml0ZVxuICAgICAgICBgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmN1c3RvbVN0eWxlLFxuICAgICAgICAgIC4uLnN0eWxlXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgICZ6d25qO1xuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAge1dyYXBwZXJcbiAgICAgICAgPyBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICAgIDxXcmFwcGVyIGtleT17aX0+XG4gICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICAmenduajtcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICA6IGVsZW1lbnRzfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuU2tlbGV0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb3VudDogMSxcbiAgZHVyYXRpb246IDEuMixcbiAgd2lkdGg6IG51bGwsXG4gIHdyYXBwZXI6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgY2lyY2xlOiBmYWxzZSxcbiAgZGVsYXk6IDBcbn07XG4iXX0= */"));
exports.skeletonStyles = skeletonStyles;

function Skeleton(_ref) {
  var count = _ref.count,
      duration = _ref.duration,
      width = _ref.width,
      Wrapper = _ref.wrapper,
      height = _ref.height,
      circle = _ref.circle,
      delay = _ref.delay,
      customStyle = _ref.style,
      customClassName = _ref.className;
  var elements = [];

  for (var i = 0; i < count; i++) {
    var style = {};

    if (width !== null) {
      style.width = width;
    }

    if (height !== null) {
      style.height = height;
    }

    if (width !== null && height !== null && circle) {
      style.borderRadius = "50%";
    }

    var className = "react-loading-skeleton";

    if (customClassName) {
      className += " " + customClassName;
    }

    elements.push((0, _core.jsx)("span", {
      key: i,
      className: className,
      css:
      /*#__PURE__*/
      (0, _core.css)(skeletonStyles, " animation:", skeletonKeyframes(duration, delay), " ", duration + delay, "s ease-in-out infinite;label:Skeleton;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWdCIiwiZmlsZSI6Ii4uL3NyYy9za2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlQ29sb3IgPSBcIiNlZWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIaWdobGlnaHRDb2xvciA9IFwiI2Y1ZjVmNVwiO1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25LZXlmcmFtZXMgPSAoZHVyYXRpb24sIGRlbGF5KSA9PiBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAke1xuICAgIGRlbGF5ID4gMFxuICAgICAgPyBgJHtNYXRoLmZsb29yKCgxIC8gKGR1cmF0aW9uICsgZGVsYXkpKSAqIGR1cmF0aW9uICogMTAwKX0lIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDIwMHB4ICsgMTAwJSkgMDtcbiAgfWBcbiAgICAgIDogdW5kZWZpbmVkXG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygyMDBweCArIDEwMCUpIDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblN0eWxlcyA9IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkZWZhdWx0QmFzZUNvbG9yfTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn0sXG4gICAgJHtkZWZhdWx0SGlnaGxpZ2h0Q29sb3J9LFxuICAgICR7ZGVmYXVsdEJhc2VDb2xvcn1cbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tlbGV0b24oe1xuICBjb3VudCxcbiAgZHVyYXRpb24sXG4gIHdpZHRoLFxuICB3cmFwcGVyOiBXcmFwcGVyLFxuICBoZWlnaHQsXG4gIGNpcmNsZSxcbiAgZGVsYXksXG4gIHN0eWxlOiBjdXN0b21TdHlsZSxcbiAgY2xhc3NOYW1lOiBjdXN0b21DbGFzc05hbWVcbn0pIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBsZXQgc3R5bGUgPSB7fTtcblxuICAgIGlmICh3aWR0aCAhPT0gbnVsbCkge1xuICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCAmJiBjaXJjbGUpIHtcbiAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xuICAgIGlmIChjdXN0b21DbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGN1c3RvbUNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgPHNwYW5cbiAgICAgICAga2V5PXtpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgJHtza2VsZXRvblN0eWxlc31cbiAgICAgICAgICBhbmltYXRpb246ICR7c2tlbGV0b25LZXlmcmFtZXMoZHVyYXRpb24sIGRlbGF5KX0gJHtkdXJhdGlvbiArXG4gICAgICAgICAgZGVsYXl9cyBlYXNlLWluLW91dCBpbmZpbml0ZVxuICAgICAgICBgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmN1c3RvbVN0eWxlLFxuICAgICAgICAgIC4uLnN0eWxlXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgICZ6d25qO1xuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAge1dyYXBwZXJcbiAgICAgICAgPyBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICAgIDxXcmFwcGVyIGtleT17aX0+XG4gICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICAmenduajtcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICA6IGVsZW1lbnRzfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuU2tlbGV0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb3VudDogMSxcbiAgZHVyYXRpb246IDEuMixcbiAgd2lkdGg6IG51bGwsXG4gIHdyYXBwZXI6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgY2lyY2xlOiBmYWxzZSxcbiAgZGVsYXk6IDBcbn07XG4iXX0= */")),
      style: _objectSpread({}, customStyle, {}, style)
    }, "\u200C"));
  }

  return (0, _core.jsx)("span", null, Wrapper ? elements.map(function (element, i) {
    return (0, _core.jsx)(Wrapper, {
      key: i
    }, element, "\u200C");
  }) : elements);
}

Skeleton.defaultProps = {
  count: 1,
  duration: 1.2,
  width: null,
  wrapper: null,
  height: null,
  circle: false,
  delay: 0
};

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontato&absolutePagePath=D%3A%5CGrupoeasycare-main%5Cpages%5Ccontato.js!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2NhY2hlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY29yZS9kaXN0L2NvcmUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jb3JlL2Rpc3QvZW1vdGlvbi1lbGVtZW50LTU3YTNhN2EzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY3NzL2Rpc3QvY3NzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaGFzaC9kaXN0L2hhc2guYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L3NlcmlhbGl6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NoZWV0L2Rpc3Qvc2hlZXQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC91dGlscy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3dlYWstbWVtb2l6ZS9kaXN0L3dlYWstbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PdXJUZWFtL091clRlYW1Mb2FkZXIuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VUaXRsZUJveCBjb250YXRvL1BhZ2VUaXRsZUJveC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvZHluYW1pYy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvbG9hZGFibGUtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGF0by5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL3NvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL3NvdXJjZS9tb2RlbHMvRW1haWxKU1Jlc3BvbnNlU3RhdHVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vc291cmNlL3NlcnZpY2VzL3VpL1VJLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1za2VsZXRvbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkaW5nLXNrZWxldG9uL2xpYi9za2VsZXRvbi10aGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctc2tlbGV0b24vbGliL3NrZWxldG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiT3VyVGVhbUxvYWRlciIsIm1hcCIsIlBhZ2VUaXRsZUJveCIsImlzU2VydmVyU2lkZSIsImxvYWRhYmxlT3B0aW9ucyIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJMb2FkaW5nIiwibG9hZGFibGVGbiIsIkxvYWRhYmxlIiwibG9hZGluZyIsImVycm9yIiwiZHluYW1pY09wdGlvbnMiLCJjb25zb2xlIiwibG9hZE1vZHVsZXMiLCJtb2R1bGVzIiwiT2JqZWN0Iiwia2V5IiwidmFsdWUiLCJtb2QiLCJub1NTUiIsIkxvYWRhYmxlQ29udGV4dCIsIlJlYWN0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwicHJvbWlzZSIsImxvYWRlciIsInN0YXRlIiwibG9hZGVkIiwiZXJyIiwicHJvbWlzZXMiLCJyZXN1bHQiLCJsb2FkIiwib2JqIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcHRzIiwiZGVsYXkiLCJ0aW1lb3V0IiwicmVuZGVyIiwid2VicGFjayIsInN1YnNjcmlwdGlvbiIsInN1YiIsImdldEN1cnJlbnRWYWx1ZSIsInN1YnNjcmliZSIsInJldHJ5IiwibW9kdWxlSWRzIiwiaWRzIiwiaW5pdCIsIkxvYWRhYmxlQ29tcG9uZW50IiwiY29udGV4dCIsIkFycmF5IiwibW9kdWxlTmFtZSIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiTG9hZGFibGVTdWJzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIl9yZXMiLCJfb3B0cyIsInNldFRpbWVvdXQiLCJfZXJyIiwiX3VwZGF0ZSIsImNhbGxiYWNrIiwiX2NsZWFyVGltZW91dHMiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVMb2FkYWJsZUNvbXBvbmVudCIsImluaXRpYWxpemVycyIsImZsdXNoSW5pdGlhbGl6ZXJzIiwicmVzb2x2ZVByZWxvYWQiLCJ3aW5kb3ciLCJPdXJUZWFtIiwiZHluYW1pYyIsInNzciIsIkNvbnRhdG8iLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbGpzIiwidGFyZ2V0IiwidGhlbiIsImxvZyIsInRleHQiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7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MUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFD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QUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQiwyREFBMkQsU0FBUztBQUNwRSx5QkFBeUIsU0FBUztBQUNsQztBQUNBLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQ0FBMkM7O0FBRTNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbHJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0JBQWdCO0FBQ2xCLEVBQUUsa0JBQWtCO0FBQ3BCLEVBQUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOE1BQThNOztBQUU5TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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dGVudCI6WyJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59IiwiZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0c0xvb3NlOyIsImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCc7XG5pbXBvcnQgU3R5bGlzIGZyb20gJ0BlbW90aW9uL3N0eWxpcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aHlzdWx0YW4vc3R5bGlzLmpzL3RyZWUvbWFzdGVyL3BsdWdpbnMvcnVsZS1zaGVldFxuLy8gaW5saW5lZCB0byBhdm9pZCB1bWQgd3JhcHBlciBhbmQgcGVlckRlcCB3YXJuaW5ncy9pbnN0YWxsaW5nIHN0eWxpc1xuLy8gc2luY2Ugd2UgdXNlIHN0eWxpcyBhZnRlciBjbG9zdXJlIGNvbXBpbGVyXG52YXIgZGVsaW1pdGVyID0gJy8qfCovJztcbnZhciBuZWVkbGUgPSBkZWxpbWl0ZXIgKyAnfSc7XG5cbmZ1bmN0aW9uIHRvU2hlZXQoYmxvY2spIHtcbiAgaWYgKGJsb2NrKSB7XG4gICAgU2hlZXQuY3VycmVudC5pbnNlcnQoYmxvY2sgKyAnfScpO1xuICB9XG59XG5cbnZhciBTaGVldCA9IHtcbiAgY3VycmVudDogbnVsbFxufTtcbnZhciBydWxlU2hlZXQgPSBmdW5jdGlvbiBydWxlU2hlZXQoY29udGV4dCwgY29udGVudCwgc2VsZWN0b3JzLCBwYXJlbnRzLCBsaW5lLCBjb2x1bW4sIGxlbmd0aCwgbnMsIGRlcHRoLCBhdCkge1xuICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAvLyBwcm9wZXJ0eVxuICAgIGNhc2UgMTpcbiAgICAgIHtcbiAgICAgICAgc3dpdGNoIChjb250ZW50LmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBAaW1wb3J0XG4gICAgICAgICAgICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KGNvbnRlbnQgKyAnOycpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gY2hhcmNvZGUgZm9yIGxcblxuICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBjaGFyY29kZSBmb3IgYlxuICAgICAgICAgICAgICAvLyB0aGlzIGlnbm9yZXMgbGFiZWxcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgyKSA9PT0gOTgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIC8vIHNlbGVjdG9yXG5cbiAgICBjYXNlIDI6XG4gICAgICB7XG4gICAgICAgIGlmIChucyA9PT0gMCkgcmV0dXJuIGNvbnRlbnQgKyBkZWxpbWl0ZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIC8vIGF0LXJ1bGVcblxuICAgIGNhc2UgMzpcbiAgICAgIHtcbiAgICAgICAgc3dpdGNoIChucykge1xuICAgICAgICAgIC8vIEBmb250LWZhY2UsIEBwYWdlXG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KHNlbGVjdG9yc1swXSArIGNvbnRlbnQpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gY29udGVudCArIChhdCA9PT0gMCA/IGRlbGltaXRlciA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgY2FzZSAtMjpcbiAgICAgIHtcbiAgICAgICAgY29udGVudC5zcGxpdChuZWVkbGUpLmZvckVhY2godG9TaGVldCk7XG4gICAgICB9XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5ID0gb3B0aW9ucy5rZXkgfHwgJ2Nzcyc7XG4gIHZhciBzdHlsaXNPcHRpb25zO1xuXG4gIGlmIChvcHRpb25zLnByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3R5bGlzT3B0aW9ucyA9IHtcbiAgICAgIHByZWZpeDogb3B0aW9ucy5wcmVmaXhcbiAgICB9O1xuICB9XG5cbiAgdmFyIHN0eWxpcyA9IG5ldyBTdHlsaXMoc3R5bGlzT3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKC9bXmEtei1dLy50ZXN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRlZCA9IHt9OyAvLyAkRmxvd0ZpeE1lXG5cbiAgdmFyIGNvbnRhaW5lcjtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uLVwiICsga2V5ICsgXCJdXCIpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb24tXCIgKyBrZXkpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGF0dHJpYi5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGluc2VydGVkW2lkXSA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBfaW5zZXJ0O1xuXG4gIHtcbiAgICBzdHlsaXMudXNlKG9wdGlvbnMuc3R5bGlzUGx1Z2lucykocnVsZVNoZWV0KTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoc2VsZWN0b3IsIHNlcmlhbGl6ZWQsIHNoZWV0LCBzaG91bGRDYWNoZSkge1xuICAgICAgdmFyIG5hbWUgPSBzZXJpYWxpemVkLm5hbWU7XG4gICAgICBTaGVldC5jdXJyZW50ID0gc2hlZXQ7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1hcCA9IHNlcmlhbGl6ZWQubWFwO1xuICAgICAgICBTaGVldC5jdXJyZW50ID0ge1xuICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydChydWxlICsgbWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN0eWxpcyhzZWxlY3Rvciwgc2VyaWFsaXplZC5zdHlsZXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbbmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmNzM3MWE0Y2Q3ZTYwMDllZjYxZDBhXG4gICAgdmFyIGNvbW1lbnRTdGFydCA9IC9cXC9cXCovZztcbiAgICB2YXIgY29tbWVudEVuZCA9IC9cXCpcXC8vZztcbiAgICBzdHlsaXMudXNlKGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50KSB7XG4gICAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aGlsZSAoY29tbWVudFN0YXJ0LnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgY29tbWVudEVuZC5sYXN0SW5kZXggPSBjb21tZW50U3RhcnQubGFzdEluZGV4O1xuXG4gICAgICAgICAgICAgIGlmIChjb21tZW50RW5kLnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBjb21tZW50U3RhcnQubGFzdEluZGV4ID0gY29tbWVudEVuZC5sYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgc3R5bGVzIGhhdmUgYW4gdW50ZXJtaW5hdGVkIGNvbW1lbnQgKFwiLypcIiB3aXRob3V0IGNvcnJlc3BvbmRpbmcgXCIqL1wiKS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tbWVudFN0YXJ0Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3R5bGlzLnVzZShmdW5jdGlvbiAoY29udGV4dCwgY29udGVudCwgc2VsZWN0b3JzKSB7XG4gICAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZmxhZyA9ICdlbW90aW9uLWRpc2FibGUtc2VydmVyLXJlbmRlcmluZy11bnNhZmUtc2VsZWN0b3Itd2FybmluZy1wbGVhc2UtZG8tbm90LXVzZS10aGlzLXRoZS13YXJuaW5nLWV4aXN0cy1mb3ItYS1yZWFzb24nO1xuICAgICAgICAgICAgdmFyIHVuc2FmZVBzZXVkb0NsYXNzZXMgPSBjb250ZW50Lm1hdGNoKC8oOmZpcnN0fDpudGh8Om50aC1sYXN0KS1jaGlsZC9nKTtcblxuICAgICAgICAgICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMgJiYgY2FjaGUuY29tcGF0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHVuc2FmZVBzZXVkb0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAodW5zYWZlUHNldWRvQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlUmVnRXhwID0gbmV3IFJlZ0V4cCh1bnNhZmVQc2V1ZG9DbGFzcyArIFwiLipcXFxcL1xcXFwqIFwiICsgZmxhZyArIFwiIFxcXFwqXFxcXC9cIik7XG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZSA9IGlnbm9yZVJlZ0V4cC50ZXN0KGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzICYmICFpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcHNldWRvIGNsYXNzIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzICsgXCJcXFwiIGlzIHBvdGVudGlhbGx5IHVuc2FmZSB3aGVuIGRvaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gVHJ5IGNoYW5naW5nIGl0IHRvIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzLnNwbGl0KCctY2hpbGQnKVswXSArIFwiLW9mLXR5cGVcXFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgY2FjaGUgPSB7XG4gICAga2V5OiBrZXksXG4gICAgc2hlZXQ6IG5ldyBTdHlsZVNoZWV0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgIHNwZWVkeTogb3B0aW9ucy5zcGVlZHlcbiAgICB9KSxcbiAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICBpbnNlcnRlZDogaW5zZXJ0ZWQsXG4gICAgcmVnaXN0ZXJlZDoge30sXG4gICAgaW5zZXJ0OiBfaW5zZXJ0XG4gIH07XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhY2hlO1xuIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgeyBoIGFzIGhhc093blByb3BlcnR5LCBFIGFzIEVtb3Rpb24sIGMgYXMgY3JlYXRlRW1vdGlvblByb3BzLCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUsIFQgYXMgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtNTdhM2E3YTMuYnJvd3Nlci5lc20uanMnO1xuZXhwb3J0IHsgQyBhcyBDYWNoZVByb3ZpZGVyLCBUIGFzIFRoZW1lQ29udGV4dCwgdyBhcyB3aXRoRW1vdGlvbkNhY2hlIH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtNTdhM2E3YTMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgaW5zZXJ0U3R5bGVzLCBnZXRSZWdpc3RlcmVkU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCc7XG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbnZhciBqc3ggPSBmdW5jdGlvbiBqc3godHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgaWYgKHByb3BzID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9XG5cbiAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gRW1vdGlvbjtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbn07XG5cbnZhciB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSBmYWxzZTtcbnZhciBHbG9iYWwgPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCAmJiAoIC8vIGNoZWNrIGZvciBjbGFzc05hbWUgYXMgd2VsbCBzaW5jZSB0aGUgdXNlciBpc1xuICAvLyBwcm9iYWJseSB1c2luZyB0aGUgY3VzdG9tIGNyZWF0ZUVsZW1lbnQgd2hpY2hcbiAgLy8gbWVhbnMgaXQgd2lsbCBiZSB0dXJuZWQgaW50byBhIGNsYXNzTmFtZSBwcm9wXG4gIC8vICRGbG93Rml4TWUgSSBkb24ndCByZWFsbHkgd2FudCB0byBhZGQgaXQgdG8gdGhlIHR5cGUgc2luY2UgaXQgc2hvdWxkbid0IGJlIHVzZWRcbiAgcHJvcHMuY2xhc3NOYW1lIHx8IHByb3BzLmNzcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGNzcyBwcm9wIG9uIEdsb2JhbCwgZGlkIHlvdSBtZWFuIHRvIHVzZSB0aGUgc3R5bGVzIHByb3AgaW5zdGVhZD9cIik7XG4gICAgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG5cbiAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXModGhlbWUpXSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoSW5uZXJHbG9iYWwsIHtcbiAgICAgICAgc2VyaWFsaXplZDogc2VyaWFsaXplZCxcbiAgICAgICAgY2FjaGU6IGNhY2hlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXNdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KElubmVyR2xvYmFsLCB7XG4gICAgc2VyaWFsaXplZDogc2VyaWFsaXplZCxcbiAgICBjYWNoZTogY2FjaGVcbiAgfSk7XG59KTtcblxuLy8gbWFpbnRhaW4gcGxhY2Ugb3ZlciByZXJlbmRlcnMuXG4vLyBpbml0aWFsIHJlbmRlciBmcm9tIGJyb3dzZXIsIGluc2VydEJlZm9yZSBjb250ZXh0LnNoZWV0LnRhZ3NbMF0gb3IgaWYgYSBzdHlsZSBoYXNuJ3QgYmVlbiBpbnNlcnRlZCB0aGVyZSB5ZXQsIGFwcGVuZENoaWxkXG4vLyBpbml0aWFsIGNsaWVudC1zaWRlIHJlbmRlciBmcm9tIFNTUiwgdXNlIHBsYWNlIG9mIGh5ZHJhdGluZyB0YWdcbnZhciBJbm5lckdsb2JhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShJbm5lckdsb2JhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5uZXJHbG9iYWwocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IElubmVyR2xvYmFsLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiB0aGlzLnByb3BzLmNhY2hlLmtleSArIFwiLWdsb2JhbFwiLFxuICAgICAgbm9uY2U6IHRoaXMucHJvcHMuY2FjaGUuc2hlZXQubm9uY2UsXG4gICAgICBjb250YWluZXI6IHRoaXMucHJvcHMuY2FjaGUuc2hlZXQuY29udGFpbmVyXG4gICAgfSk7IC8vICRGbG93Rml4TWVcblxuICAgIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtZW1vdGlvbi1cIiArIHRoaXMucHJvcHMuY2FjaGUua2V5ICsgXCI9XFxcIlwiICsgdGhpcy5wcm9wcy5zZXJpYWxpemVkLm5hbWUgKyBcIlxcXCJdXCIpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2hlZXQudGFncy5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNhY2hlLnNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNoZWV0LmJlZm9yZSA9IHRoaXMucHJvcHMuY2FjaGUuc2hlZXQudGFnc1swXTtcbiAgICB9XG5cbiAgICB0aGlzLmluc2VydFN0eWxlcygpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5zZXJpYWxpemVkLm5hbWUgIT09IHRoaXMucHJvcHMuc2VyaWFsaXplZC5uYW1lKSB7XG4gICAgICB0aGlzLmluc2VydFN0eWxlcygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzJDEoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VyaWFsaXplZC5uZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGluc2VydCBrZXlmcmFtZXNcbiAgICAgIGluc2VydFN0eWxlcyh0aGlzLnByb3BzLmNhY2hlLCB0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmV4dCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHRoaXMgZG9lc24ndCBleGlzdCB0aGVuIGl0IHdpbGwgYmUgbnVsbCBzbyB0aGUgc3R5bGUgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkXG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuc2hlZXQudGFnc1t0aGlzLnNoZWV0LnRhZ3MubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgdGhpcy5zaGVldC5iZWZvcmUgPSBlbGVtZW50O1xuICAgICAgdGhpcy5zaGVldC5mbHVzaCgpO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMuY2FjaGUuaW5zZXJ0KFwiXCIsIHRoaXMucHJvcHMuc2VyaWFsaXplZCwgdGhpcy5zaGVldCwgZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc2hlZXQuZmx1c2goKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIElubmVyR2xvYmFsO1xufShDb21wb25lbnQpO1xuXG52YXIga2V5ZnJhbWVzID0gZnVuY3Rpb24ga2V5ZnJhbWVzKCkge1xuICB2YXIgaW5zZXJ0YWJsZSA9IGNzcy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIHZhciBuYW1lID0gXCJhbmltYXRpb24tXCIgKyBpbnNlcnRhYmxlLm5hbWU7IC8vICRGbG93Rml4TWVcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBcIkBrZXlmcmFtZXMgXCIgKyBuYW1lICsgXCJ7XCIgKyBpbnNlcnRhYmxlLnN0eWxlcyArIFwifVwiLFxuICAgIGFuaW06IDEsXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiX0VNT19cIiArIHRoaXMubmFtZSArIFwiX1wiICsgdGhpcy5zdHlsZXMgKyBcIl9FTU9fXCI7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiBjbGFzc25hbWVzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjbHMgPSAnJztcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKGFyZyA9PSBudWxsKSBjb250aW51ZTtcbiAgICB2YXIgdG9BZGQgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0FkZCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xuICAgICAgICAgICAgICBpZiAoYXJnW2tdICYmIGspIHtcbiAgICAgICAgICAgICAgICB0b0FkZCAmJiAodG9BZGQgKz0gJyAnKTtcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRvQWRkID0gYXJnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQWRkKSB7XG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xuICAgICAgY2xzICs9IHRvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbHM7XG59O1xuXG5mdW5jdGlvbiBtZXJnZShyZWdpc3RlcmVkLCBjc3MsIGNsYXNzTmFtZSkge1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtdO1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWUpO1xuXG4gIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIHJhd0NsYXNzTmFtZSArIGNzcyhyZWdpc3RlcmVkU3R5bGVzKTtcbn1cblxudmFyIENsYXNzTmFtZXMgPSB3aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY29udGV4dCkge1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcblxuICAgIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNvbnRleHQucmVnaXN0ZXJlZCk7XG5cbiAgICAgIHtcbiAgICAgICAgaW5zZXJ0U3R5bGVzKGNvbnRleHQsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRleHQua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gICAgfTtcblxuICAgIHZhciBjeCA9IGZ1bmN0aW9uIGN4KCkge1xuICAgICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjeCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlKGNvbnRleHQucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnRlbnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIGN4OiBjeCxcbiAgICAgIHRoZW1lOiB0aGVtZVxuICAgIH07XG4gICAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICAgIGhhc1JlbmRlcmVkID0gdHJ1ZTtcblxuICAgIHJldHVybiBlbGU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCB7IENsYXNzTmFtZXMsIEdsb2JhbCwganN4IGFzIGNyZWF0ZUVsZW1lbnQsIGpzeCwga2V5ZnJhbWVzIH07XG4iLCJpbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBmb3J3YXJkUmVmLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoIC8vIHdlJ3JlIGRvaW5nIHRoaXMgdG8gYXZvaWQgcHJlY29uc3RydWN0J3MgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGluIHRoaXMgb25lIGNhc2Vcbi8vIGJlY2F1c2UgdGhpcyBtb2R1bGUgaXMgcHJpbWFyaWx5IGludGVuZGVkIGZvciB0aGUgYnJvd3NlciBhbmQgbm9kZVxuLy8gYnV0IGl0J3MgYWxzbyByZXF1aXJlZCBpbiByZWFjdCBuYXRpdmUgYW5kIHNpbWlsYXIgZW52aXJvbm1lbnRzIHNvbWV0aW1lc1xuLy8gYW5kIHdlIGNvdWxkIGhhdmUgYSBzcGVjaWFsIGJ1aWxkIGp1c3QgZm9yIHRoYXRcbi8vIGJ1dCB0aGlzIGlzIG11Y2ggZWFzaWVyIGFuZCB0aGUgbmF0aXZlIHBhY2thZ2VzXG4vLyBtaWdodCB1c2UgYSBkaWZmZXJlbnQgdGhlbWUgY29udGV4dCBpbiB0aGUgZnV0dXJlIGFueXdheVxudHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IGNyZWF0ZUNhY2hlKCkgOiBudWxsKTtcbnZhciBUaGVtZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgQ2FjaGVQcm92aWRlciA9IEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXI7XG5cbnZhciB3aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZShmdW5jKSB7XG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChFbW90aW9uQ2FjaGVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSwgcmVmKTtcbiAgICB9KTtcbiAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKHJlbmRlcik7XG59O1xuXG4vLyB0aHVzIHdlIG9ubHkgbmVlZCB0byByZXBsYWNlIHdoYXQgaXMgYSB2YWxpZCBjaGFyYWN0ZXIgZm9yIEpTLCBidXQgbm90IGZvciBDU1NcblxudmFyIHNhbml0aXplSWRlbnRpZmllciA9IGZ1bmN0aW9uIHNhbml0aXplSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnJlcGxhY2UoL1xcJC9nLCAnLScpO1xufTtcblxudmFyIHR5cGVQcm9wTmFtZSA9ICdfX0VNT1RJT05fVFlQRV9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBsYWJlbFByb3BOYW1lID0gJ19fRU1PVElPTl9MQUJFTF9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBjcmVhdGVFbW90aW9uUHJvcHMgPSBmdW5jdGlvbiBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHByb3BzLmNzcyA9PT0gJ3N0cmluZycgJiYgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBjc3MgZGVjbGFyYXRpb25cbiAgcHJvcHMuY3NzLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmdzIGFyZSBub3QgYWxsb3dlZCBhcyBjc3MgcHJvcCB2YWx1ZXMsIHBsZWFzZSB3cmFwIGl0IGluIGEgY3NzIHRlbXBsYXRlIGxpdGVyYWwgZnJvbSAnQGVtb3Rpb24vY3NzJyBsaWtlIHRoaXM6IGNzc2BcIiArIHByb3BzLmNzcyArIFwiYFwiKTtcbiAgfVxuXG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wc1t0eXBlUHJvcE5hbWVdID0gdHlwZTsgLy8gVE9ETzogY2hlY2sgaWYgdGhpcyBzdGlsbCB3b3JrcyB3aXRoIGFsbCBvZiB0aG9zZSBkaWZmZXJlbnQgSlNYIGZ1bmN0aW9uc1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cbiAgICBpZiAoZXJyb3Iuc3RhY2spIHtcbiAgICAgIC8vIGNocm9tZVxuICAgICAgdmFyIG1hdGNoID0gZXJyb3Iuc3RhY2subWF0Y2goL2F0ICg/Ok9iamVjdFxcLnxNb2R1bGVcXC58KSg/OmpzeHxjcmVhdGVFbW90aW9uUHJvcHMpLipcXG5cXHMrYXQgKD86T2JqZWN0XFwufCkoW0EtWl1bQS1aYS16JF0rKSAvKTtcblxuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAvLyBzYWZhcmkgYW5kIGZpcmVmb3hcbiAgICAgICAgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvLipcXG4oW0EtWl1bQS1aYS16JF0rKUAvKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG5ld1Byb3BzW2xhYmVsUHJvcE5hbWVdID0gc2FuaXRpemVJZGVudGlmaWVyKG1hdGNoWzFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGNhY2hlLCBwcm9wcywgdGhlbWUsIHJlZikge1xuICB2YXIgY3NzUHJvcCA9IHRoZW1lID09PSBudWxsID8gcHJvcHMuY3NzIDogcHJvcHMuY3NzKHRoZW1lKTsgLy8gc28gdGhhdCB1c2luZyBgY3NzYCBmcm9tIGBlbW90aW9uYCBhbmQgcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBjc3MgcHJvcCB3b3Jrc1xuICAvLyBub3QgcGFzc2luZyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBzZXJpYWxpemVTdHlsZXMgYmVjYXVzZSBpdCB3b3VsZFxuICAvLyBtYWtlIGNlcnRhaW4gYmFiZWwgb3B0aW1pc2F0aW9ucyBub3QgcG9zc2libGVcblxuICBpZiAodHlwZW9mIGNzc1Byb3AgPT09ICdzdHJpbmcnICYmIGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGNzc1Byb3AgPSBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBwcm9wc1t0eXBlUHJvcE5hbWVdO1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtjc3NQcm9wXTtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMoY2FjaGUucmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgcHJvcHMuY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkge1xuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSArIFwiIFwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMocmVnaXN0ZXJlZFN0eWxlcyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5uYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICB2YXIgbGFiZWxGcm9tU3RhY2sgPSBwcm9wc1tsYWJlbFByb3BOYW1lXTtcblxuICAgIGlmIChsYWJlbEZyb21TdGFjaykge1xuICAgICAgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc2VyaWFsaXplZCwgJ2xhYmVsOicgKyBsYWJlbEZyb21TdGFjayArICc7J10pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBydWxlcyA9IGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKTtcbiAgY2xhc3NOYW1lICs9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSAmJiBrZXkgIT09ICdjc3MnICYmIGtleSAhPT0gdHlwZVByb3BOYW1lICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IGtleSAhPT0gbGFiZWxQcm9wTmFtZSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB2YXIgZWxlID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQodHlwZSwgbmV3UHJvcHMpO1xuXG4gIHJldHVybiBlbGU7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblxuXG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIGlmICh0eXBlb2YgcHJvcHMuY3NzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICByZXR1cm4gcmVuZGVyKGNhY2hlLCBwcm9wcywgdGhlbWUsIHJlZik7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyKGNhY2hlLCBwcm9wcywgbnVsbCwgcmVmKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBFbW90aW9uLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25Dc3NQcm9wSW50ZXJuYWwnO1xufVxuXG5leHBvcnQgeyBDYWNoZVByb3ZpZGVyIGFzIEMsIEVtb3Rpb24gYXMgRSwgVGhlbWVDb250ZXh0IGFzIFQsIGNyZWF0ZUVtb3Rpb25Qcm9wcyBhcyBjLCBoYXNPd25Qcm9wZXJ0eSBhcyBoLCB3aXRoRW1vdGlvbkNhY2hlIGFzIHcgfTtcbiIsImltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbmZ1bmN0aW9uIGNzcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVTdHlsZXMoYXJncyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hYXBwbGVieS9zbWhhc2hlci9ibG9iLzYxYTA1MzBmMjgyNzdmMmU4NTBiZmMzOTYwMGNlNjFkMDJiNTE4ZGUvc3JjL011cm11ckhhc2gyLmNwcCNMMzctTDg2XG5mdW5jdGlvbiBtdXJtdXIyKHN0cikge1xuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cbiAgLy8gVGhleSdyZSBub3QgcmVhbGx5ICdtYWdpYycsIHRoZXkganVzdCBoYXBwZW4gdG8gd29yayB3ZWxsLlxuICAvLyBjb25zdCBtID0gMHg1YmQxZTk5NTtcbiAgLy8gY29uc3QgciA9IDI0O1xuICAvLyBJbml0aWFsaXplIHRoZSBoYXNoXG4gIHZhciBoID0gMDsgLy8gTWl4IDQgYnl0ZXMgYXQgYSB0aW1lIGludG8gdGhlIGhhc2hcblxuICB2YXIgayxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgbGVuID49IDQ7ICsraSwgbGVuIC09IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gICAgayBePVxuICAgIC8qIGsgPj4+IHI6ICovXG4gICAgayA+Pj4gMjQ7XG4gICAgaCA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxuICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XG5cblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9XG4gICAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcbiAgLy8gYnl0ZXMgYXJlIHdlbGwtaW5jb3Jwb3JhdGVkLlxuXG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9XG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgcmV0dXJuICgoaCBeIGggPj4+IDE1KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtdXJtdXIyO1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IgPSBcIllvdSBoYXZlIGlsbGVnYWwgZXNjYXBlIHNlcXVlbmNlIGluIHlvdXIgdGVtcGxhdGUgbGl0ZXJhbCwgbW9zdCBsaWtlbHkgaW5zaWRlIGNvbnRlbnQncyBwcm9wZXJ0eSB2YWx1ZS5cXG5CZWNhdXNlIHlvdSB3cml0ZSB5b3VyIENTUyBpbnNpZGUgYSBKYXZhU2NyaXB0IHN0cmluZyB5b3UgYWN0dWFsbHkgaGF2ZSB0byBkbyBkb3VibGUgZXNjYXBpbmcsIHNvIGZvciBleGFtcGxlIFxcXCJjb250ZW50OiAnXFxcXDAwZDcnO1xcXCIgc2hvdWxkIGJlY29tZSBcXFwiY29udGVudDogJ1xcXFxcXFxcMDBkNyc7XFxcIi5cXG5Zb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGlzIGhlcmU6XFxuaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvVGVtcGxhdGVfbGl0ZXJhbHMjRVMyMDE4X3JldmlzaW9uX29mX2lsbGVnYWxfZXNjYXBlX3NlcXVlbmNlc1wiO1xudmFyIFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SID0gXCJZb3UgaGF2ZSBwYXNzZWQgaW4gZmFsc3kgdmFsdWUgYXMgc3R5bGUgb2JqZWN0J3Mga2V5IChjYW4gaGFwcGVuIHdoZW4gaW4gZXhhbXBsZSB5b3UgcGFzcyB1bmV4cG9ydGVkIGNvbXBvbmVudCBhcyBjb21wdXRlZCBrZXkpLlwiO1xudmFyIGh5cGhlbmF0ZVJlZ2V4ID0gL1tBLVpdfF5tcy9nO1xudmFyIGFuaW1hdGlvblJlZ2V4ID0gL19FTU9fKFteX10rPylfKFteXSo/KV9FTU9fL2c7XG5cbnZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xuICByZXR1cm4gcHJvcGVydHkuY2hhckNvZGVBdCgxKSA9PT0gNDU7XG59O1xuXG52YXIgaXNQcm9jZXNzYWJsZVZhbHVlID0gZnVuY3Rpb24gaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nO1xufTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSBtZW1vaXplKGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgcmV0dXJuIGlzQ3VzdG9tUHJvcGVydHkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IHN0eWxlTmFtZS5yZXBsYWNlKGh5cGhlbmF0ZVJlZ2V4LCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgbmFtZTogcDEsXG4gICAgICAgICAgICAgIHN0eWxlczogcDIsXG4gICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBwMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgaWYgKHVuaXRsZXNzW2tleV0gIT09IDEgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBjb250ZW50VmFsdWVQYXR0ZXJuID0gLyhhdHRyfGNhbGN8Y291bnRlcnM/fHVybClcXCgvO1xuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnY291bnRlcicsICdvcGVuLXF1b3RlJywgJ2Nsb3NlLXF1b3RlJywgJ25vLW9wZW4tcXVvdGUnLCAnbm8tY2xvc2UtcXVvdGUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XG4gIHZhciBvbGRQcm9jZXNzU3R5bGVWYWx1ZSA9IHByb2Nlc3NTdHlsZVZhbHVlO1xuICB2YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuICB2YXIgaHlwaGVuYXRlZENhY2hlID0ge307XG5cbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjb250ZW50VmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJiAhY29udGVudFZhbHVlUGF0dGVybi50ZXN0KHZhbHVlKSAmJiAodmFsdWUuY2hhckF0KDApICE9PSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgfHwgdmFsdWUuY2hhckF0KDApICE9PSAnXCInICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gXCInXCIpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3Ugc2VlbSB0byBiZSB1c2luZyBhIHZhbHVlIGZvciAnY29udGVudCcgd2l0aG91dCBxdW90ZXMsIHRyeSByZXBsYWNpbmcgaXQgd2l0aCBgY29udGVudDogJ1xcXCJcIiArIHZhbHVlICsgXCJcXFwiJ2BcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2Nlc3NlZCA9IG9sZFByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpO1xuXG4gICAgaWYgKHByb2Nlc3NlZCAhPT0gJycgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiBrZXkuaW5kZXhPZignLScpICE9PSAtMSAmJiBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVXNpbmcga2ViYWItY2FzZSBmb3IgY3NzIHByb3BlcnRpZXMgaW4gb2JqZWN0cyBpcyBub3Qgc3VwcG9ydGVkLiBEaWQgeW91IG1lYW4gXCIgKyBrZXkucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKS5yZXBsYWNlKGh5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChzdHIsIF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSkgKyBcIj9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgfTtcbn1cblxudmFyIHNob3VsZFdhcm5BYm91dEludGVycG9sYXRpbmdDbGFzc05hbWVGcm9tQ3NzID0gdHJ1ZTtcblxuZnVuY3Rpb24gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbiwgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbikge1xuICBpZiAoaW50ZXJwb2xhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKGludGVycG9sYXRpb24uX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi50b1N0cmluZygpID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBiYWJlbC1wbHVnaW4tZW1vdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZW9mIGludGVycG9sYXRpb24pIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHtcbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uYW5pbSA9PT0gMSkge1xuICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgIG5hbWU6IGludGVycG9sYXRpb24ubmFtZSxcbiAgICAgICAgICAgIHN0eWxlczogaW50ZXJwb2xhdGlvbi5zdHlsZXMsXG4gICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBpbnRlcnBvbGF0aW9uLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBuZXh0ID0gaW50ZXJwb2xhdGlvbi5uZXh0O1xuXG4gICAgICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm90IHRoZSBtb3N0IGVmZmljaWVudCB0aGluZyBldmVyIGJ1dCB0aGlzIGlzIGEgcHJldHR5IHJhcmUgY2FzZVxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlIHdpbGwgYmUgdmVyeSBmZXcgaXRlcmF0aW9ucyBvZiB0aGlzIGdlbmVyYWxseVxuICAgICAgICAgICAgd2hpbGUgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV4dC5uYW1lLFxuICAgICAgICAgICAgICAgIHN0eWxlczogbmV4dC5zdHlsZXMsXG4gICAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIG5leHQgPSBuZXh0Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlcyA9IGludGVycG9sYXRpb24uc3R5bGVzICsgXCI7XCI7XG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZXMgKz0gaW50ZXJwb2xhdGlvbi5tYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKG1lcmdlZFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xuICAgICAgICAgIGN1cnNvciA9IHByZXZpb3VzQ3Vyc29yO1xuICAgICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCByZXN1bHQsIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGdW5jdGlvbnMgdGhhdCBhcmUgaW50ZXJwb2xhdGVkIGluIGNzcyBjYWxscyB3aWxsIGJlIHN0cmluZ2lmaWVkLlxcbicgKyAnSWYgeW91IHdhbnQgdG8gaGF2ZSBhIGNzcyBjYWxsIGJhc2VkIG9uIHByb3BzLCBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBjc3MgY2FsbCBsaWtlIHRoaXNcXG4nICsgJ2xldCBkeW5hbWljU3R5bGUgPSAocHJvcHMpID0+IGNzc2Bjb2xvcjogJHtwcm9wcy5jb2xvcn1gXFxuJyArICdJdCBjYW4gYmUgY2FsbGVkIGRpcmVjdGx5IHdpdGggcHJvcHMgb3IgaW50ZXJwb2xhdGVkIGluIGEgc3R5bGVkIGNhbGwgbGlrZSB0aGlzXFxuJyArIFwibGV0IFNvbWVDb21wb25lbnQgPSBzdHlsZWQoJ2RpdicpYCR7ZHluYW1pY1N0eWxlfWBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuICAgICAgICB2YXIgcmVwbGFjZWQgPSBpbnRlcnBvbGF0aW9uLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgdmFyIGZha2VWYXJOYW1lID0gXCJhbmltYXRpb25cIiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICAgIG1hdGNoZWQucHVzaChcImNvbnN0IFwiICsgZmFrZVZhck5hbWUgKyBcIiA9IGtleWZyYW1lc2BcIiArIHAyLnJlcGxhY2UoL15Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1cXHcrLywgJycpICsgXCJgXCIpO1xuICAgICAgICAgIHJldHVybiBcIiR7XCIgKyBmYWtlVmFyTmFtZSArIFwifVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlZC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdga2V5ZnJhbWVzYCBvdXRwdXQgZ290IGludGVycG9sYXRlZCBpbnRvIHBsYWluIHN0cmluZywgcGxlYXNlIHdyYXAgaXQgd2l0aCBgY3NzYC5cXG5cXG4nICsgJ0luc3RlYWQgb2YgZG9pbmcgdGhpczpcXG5cXG4nICsgW10uY29uY2F0KG1hdGNoZWQsIFtcImBcIiArIHJlcGxhY2VkICsgXCJgXCJdKS5qb2luKCdcXG4nKSArICdcXG5cXG5Zb3Ugc2hvdWxkIHdyYXAgaXQgd2l0aCBgY3NzYCBsaWtlIHRoaXM6XFxuXFxuJyArIChcImNzc2BcIiArIHJlcGxhY2VkICsgXCJgXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgfSAvLyBmaW5hbGl6ZSBzdHJpbmcgdmFsdWVzIChyZWd1bGFyIHN0cmluZ3MgYW5kIGZ1bmN0aW9ucyBpbnRlcnBvbGF0ZWQgaW50byBjc3MgY2FsbHMpXG5cblxuICBpZiAocmVnaXN0ZXJlZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICB2YXIgY2FjaGVkID0gcmVnaXN0ZXJlZFtpbnRlcnBvbGF0aW9uXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uICYmIHNob3VsZFdhcm5BYm91dEludGVycG9sYXRpbmdDbGFzc05hbWVGcm9tQ3NzICYmIGNhY2hlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5lcnJvcignSW50ZXJwb2xhdGluZyBhIGNsYXNzTmFtZSBmcm9tIGNzc2BgIGlzIG5vdCByZWNvbW1lbmRlZCBhbmQgd2lsbCBjYXVzZSBwcm9ibGVtcyB3aXRoIGNvbXBvc2l0aW9uLlxcbicgKyAnSW50ZXJwb2xhdGluZyBhIGNsYXNzTmFtZSBmcm9tIGNzc2BgIHdpbGwgYmUgY29tcGxldGVseSB1bnN1cHBvcnRlZCBpbiBhIGZ1dHVyZSBtYWpvciB2ZXJzaW9uIG9mIEVtb3Rpb24nKTtcbiAgICBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkICYmICFjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uID8gY2FjaGVkIDogaW50ZXJwb2xhdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqKSB7XG4gIHZhciBzdHJpbmcgPSAnJztcblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0cmluZyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmpbaV0sIGZhbHNlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtfa2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIHJlZ2lzdGVyZWRbdmFsdWVdICsgXCJ9XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZSkgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9rZXkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGJhYmVsLXBsdWdpbi1lbW90aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gJ3N0cmluZycgJiYgKHJlZ2lzdGVyZWQgPT0gbnVsbCB8fCByZWdpc3RlcmVkW3ZhbHVlWzBdXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB2YWx1ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWVbX2ldKSkge1xuICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUsIGZhbHNlKTtcblxuICAgICAgICAgIHN3aXRjaCAoX2tleSkge1xuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIGludGVycG9sYXRlZCArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfa2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIGludGVycG9sYXRlZCArIFwifVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIGxhYmVsUGF0dGVybiA9IC9sYWJlbDpcXHMqKFteXFxzO1xcbntdKylcXHMqOy9nO1xudmFyIHNvdXJjZU1hcFBhdHRlcm47XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHNvdXJjZU1hcFBhdHRlcm4gPSAvXFwvXFwqI1xcc3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvblxcL2pzb247XFxTK1xccytcXCpcXC8vO1xufSAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xudmFyIHNlcmlhbGl6ZVN0eWxlcyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgJiYgYXJnc1swXS5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgdmFyIHN0cmluZ01vZGUgPSB0cnVlO1xuICB2YXIgc3R5bGVzID0gJyc7XG4gIGN1cnNvciA9IHVuZGVmaW5lZDtcbiAgdmFyIHN0cmluZ3MgPSBhcmdzWzBdO1xuXG4gIGlmIChzdHJpbmdzID09IG51bGwgfHwgc3RyaW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncywgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgfVxuXG4gICAgc3R5bGVzICs9IHN0cmluZ3NbMF07XG4gIH0gLy8gd2Ugc3RhcnQgYXQgMSBzaW5jZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIGZpcnN0IGFyZ1xuXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGFyZ3NbaV0sIHN0eWxlcy5jaGFyQ29kZUF0KHN0eWxlcy5sZW5ndGggLSAxKSA9PT0gNDYpO1xuXG4gICAgaWYgKHN0cmluZ01vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHN0cmluZ3NbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzICs9IHN0cmluZ3NbaV07XG4gICAgfVxuICB9XG5cbiAgdmFyIHNvdXJjZU1hcDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHN0eWxlcyA9IHN0eWxlcy5yZXBsYWNlKHNvdXJjZU1hcFBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgc291cmNlTWFwID0gbWF0Y2g7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH0gLy8gdXNpbmcgYSBnbG9iYWwgcmVnZXggd2l0aCAuZXhlYyBpcyBzdGF0ZWZ1bCBzbyBsYXN0SW5kZXggaGFzIHRvIGJlIHJlc2V0IGVhY2ggdGltZVxuXG5cbiAgbGFiZWxQYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gIHZhciBpZGVudGlmaWVyTmFtZSA9ICcnO1xuICB2YXIgbWF0Y2g7IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWI4MDljMmNmMjk0OTgwMGEwZjYxZmI1XG5cbiAgd2hpbGUgKChtYXRjaCA9IGxhYmVsUGF0dGVybi5leGVjKHN0eWxlcykpICE9PSBudWxsKSB7XG4gICAgaWRlbnRpZmllck5hbWUgKz0gJy0nICsgLy8gJEZsb3dGaXhNZSB3ZSBrbm93IGl0J3Mgbm90IG51bGxcbiAgICBtYXRjaFsxXTtcbiAgfVxuXG4gIHZhciBuYW1lID0gaGFzaFN0cmluZyhzdHlsZXMpICsgaWRlbnRpZmllck5hbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFNlcmlhbGl6ZWRTdHlsZXMgdHlwZSBkb2Vzbid0IGhhdmUgdG9TdHJpbmcgcHJvcGVydHkgKGFuZCB3ZSBkb24ndCB3YW50IHRvIGFkZCBpdClcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgbWFwOiBzb3VyY2VNYXAsXG4gICAgICBuZXh0OiBjdXJzb3IsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIG5leHQ6IGN1cnNvclxuICB9O1xufTtcblxuZXhwb3J0IHsgc2VyaWFsaXplU3R5bGVzIH07XG4iLCIvKlxuXG5CYXNlZCBvZmYgZ2xhbW9yJ3MgU3R5bGVTaGVldCwgdGhhbmtzIFN1bmlsIOKdpO+4j1xuXG5oaWdoIHBlcmZvcm1hbmNlIFN0eWxlU2hlZXQgZm9yIGNzcy1pbi1qcyBzeXN0ZW1zXG5cbi0gdXNlcyBtdWx0aXBsZSBzdHlsZSB0YWdzIGJlaGluZCB0aGUgc2NlbmVzIGZvciBtaWxsaW9ucyBvZiBydWxlc1xuLSB1c2VzIGBpbnNlcnRSdWxlYCBmb3IgYXBwZW5kaW5nIGluIHByb2R1Y3Rpb24gZm9yICptdWNoKiBmYXN0ZXIgcGVyZm9ybWFuY2VcblxuLy8gdXNhZ2VcblxuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0J1xuXG5sZXQgc3R5bGVTaGVldCA9IG5ldyBTdHlsZVNoZWV0KHsga2V5OiAnJywgY29udGFpbmVyOiBkb2N1bWVudC5oZWFkIH0pXG5cbnN0eWxlU2hlZXQuaW5zZXJ0KCcjYm94IHsgYm9yZGVyOiAxcHggc29saWQgcmVkOyB9Jylcbi0gYXBwZW5kcyBhIGNzcyBydWxlIGludG8gdGhlIHN0eWxlc2hlZXRcblxuc3R5bGVTaGVldC5mbHVzaCgpXG4tIGVtcHRpZXMgdGhlIHN0eWxlc2hlZXQgb2YgYWxsIGl0cyBjb250ZW50c1xuXG4qL1xuLy8gJEZsb3dGaXhNZVxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIGlmICh0YWcuc2hlZXQpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfSAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIG9wdGlvbnMua2V5KTtcblxuICBpZiAob3B0aW9ucy5ub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBvcHRpb25zLm5vbmNlKTtcbiAgfVxuXG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICByZXR1cm4gdGFnO1xufVxuXG52YXIgU3R5bGVTaGVldCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucykge1xuICAgIHRoaXMuaXNTcGVlZHkgPSBvcHRpb25zLnNwZWVkeSA9PT0gdW5kZWZpbmVkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA6IG9wdGlvbnMuc3BlZWR5O1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgICB0aGlzLm5vbmNlID0gb3B0aW9ucy5ub25jZTsgLy8ga2V5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSwgaXQncyB1c2VkIHRvIGlkZW50aWZ5IGRpZmZlcmVudCBzaGVldHNcblxuICAgIHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICB0aGlzLmJlZm9yZSA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdmFyIF90YWcgPSBjcmVhdGVTdHlsZUVsZW1lbnQodGhpcyk7XG5cbiAgICAgIHZhciBiZWZvcmU7XG5cbiAgICAgIGlmICh0aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJlZm9yZSA9IHRoaXMuYmVmb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVmb3JlID0gdGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKF90YWcsIGJlZm9yZSk7XG4gICAgICB0aGlzLnRhZ3MucHVzaChfdGFnKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gdGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGggLSAxXTtcblxuICAgIGlmICh0aGlzLmlzU3BlZWR5KSB7XG4gICAgICB2YXIgc2hlZXQgPSBzaGVldEZvclRhZyh0YWcpO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyB0aGlzIGlzIGEgcmVhbGx5IGhvdCBwYXRoXG4gICAgICAgIC8vIHdlIGNoZWNrIHRoZSBzZWNvbmQgY2hhcmFjdGVyIGZpcnN0IGJlY2F1c2UgaGF2aW5nIFwiaVwiXG4gICAgICAgIC8vIGFzIHRoZSBzZWNvbmQgY2hhcmFjdGVyIHdpbGwgaGFwcGVuIGxlc3Mgb2Z0ZW4gdGhhblxuICAgICAgICAvLyBoYXZpbmcgXCJAXCIgYXMgdGhlIGZpcnN0IGNoYXJhY3RlclxuICAgICAgICB2YXIgaXNJbXBvcnRSdWxlID0gcnVsZS5jaGFyQ29kZUF0KDEpID09PSAxMDUgJiYgcnVsZS5jaGFyQ29kZUF0KDApID09PSA2NDsgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuXG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgLy8gd2UgbmVlZCB0byBpbnNlcnQgQGltcG9ydCBydWxlcyBiZWZvcmUgYW55dGhpbmcgZWxzZVxuICAgICAgICAvLyBvdGhlcndpc2UgdGhlcmUgd2lsbCBiZSBhbiBlcnJvclxuICAgICAgICAvLyB0ZWNobmljYWxseSB0aGlzIG1lYW5zIHRoYXQgdGhlIEBpbXBvcnQgcnVsZXMgd2lsbFxuICAgICAgICAvLyBfdXN1YWxseV8obm90IGFsd2F5cyBzaW5jZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBzdHlsZSB0YWdzKVxuICAgICAgICAvLyBiZSB0aGUgZmlyc3Qgb25lcyBpbiBwcm9kIGFuZCBnZW5lcmFsbHkgbGF0ZXIgaW4gZGV2XG4gICAgICAgIC8vIHRoaXMgc2hvdWxkbid0IHJlYWxseSBtYXR0ZXIgaW4gdGhlIHJlYWwgd29ybGQgdGhvdWdoXG4gICAgICAgIC8vIEBpbXBvcnQgaXMgZ2VuZXJhbGx5IG9ubHkgdXNlZCBmb3IgZm9udCBmYWNlcyBmcm9tIGdvb2dsZSBmb250cyBhbmQgZXRjLlxuICAgICAgICAvLyBzbyB3aGlsZSB0aGlzIGNvdWxkIGJlIHRlY2huaWNhbGx5IGNvcnJlY3QgdGhlbiBpdCB3b3VsZCBiZSBzbG93ZXIgYW5kIGxhcmdlclxuICAgICAgICAvLyBmb3IgYSB0aW55IGJpdCBvZiBjb3JyZWN0bmVzcyB0aGF0IHdvbid0IG1hdHRlciBpbiB0aGUgcmVhbCB3b3JsZFxuICAgICAgICBpc0ltcG9ydFJ1bGUgPyAwIDogc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluc2VydGluZyB0aGUgZm9sbG93aW5nIHJ1bGU6IFxcXCJcIiArIHJ1bGUgKyBcIlxcXCJcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICB9KTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbmV4cG9ydCB7IFN0eWxlU2hlZXQgfTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJ2YXIgaXNCcm93c2VyID0gXCJvYmplY3RcIiAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZXMpIHtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9ICcnO1xuICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZWdpc3RlcmVkU3R5bGVzLnB1c2gocmVnaXN0ZXJlZFtjbGFzc05hbWVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmF3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZSArIFwiIFwiO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByYXdDbGFzc05hbWU7XG59XG52YXIgaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xuICB2YXIgY2xhc3NOYW1lID0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgaWYgKCAvLyB3ZSBvbmx5IG5lZWQgdG8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgaWYgdGhlXG4gIC8vIGNsYXNzIG5hbWUgY291bGQgYmUgdXNlZCBmdXJ0aGVyIGRvd25cbiAgLy8gdGhlIHRyZWUgYnV0IGlmIGl0J3MgYSBzdHJpbmcgdGFnLCB3ZSBrbm93IGl0IHdvbid0XG4gIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gYWRkIGl0IHRvIHJlZ2lzdGVyZWQgY2FjaGUuXG4gIC8vIHRoaXMgaW1wcm92ZXMgbWVtb3J5IHVzYWdlIHNpbmNlIHdlIGNhbiBhdm9pZCBzdG9yaW5nIHRoZSB3aG9sZSBzdHlsZSBzdHJpbmdcbiAgKGlzU3RyaW5nVGFnID09PSBmYWxzZSB8fCAvLyB3ZSBuZWVkIHRvIGFsd2F5cyBzdG9yZSBpdCBpZiB3ZSdyZSBpbiBjb21wYXQgbW9kZSBhbmRcbiAgLy8gaW4gbm9kZSBzaW5jZSBlbW90aW9uLXNlcnZlciByZWxpZXMgb24gd2hldGhlciBhIHN0eWxlIGlzIGluXG4gIC8vIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIGtub3cgd2hldGhlciBhIHN0eWxlIGlzIGdsb2JhbCBvciBub3RcbiAgLy8gYWxzbywgbm90ZSB0aGF0IHRoaXMgY2hlY2sgd2lsbCBiZSBkZWFkIGNvZGUgZWxpbWluYXRlZCBpbiB0aGUgYnJvd3NlclxuICBpc0Jyb3dzZXIgPT09IGZhbHNlICYmIGNhY2hlLmNvbXBhdCAhPT0gdW5kZWZpbmVkKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG5cbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXJyZW50ID0gc2VyaWFsaXplZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBtYXliZVN0eWxlcyA9IGNhY2hlLmluc2VydChcIi5cIiArIGNsYXNzTmFtZSwgY3VycmVudCwgY2FjaGUuc2hlZXQsIHRydWUpO1xuXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH0gd2hpbGUgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9O1xuIiwidmFyIHdlYWtNZW1vaXplID0gZnVuY3Rpb24gd2Vha01lbW9pemUoZnVuYykge1xuICAvLyAkRmxvd0ZpeE1lIGZsb3cgZG9lc24ndCBpbmNsdWRlIGFsbCBub24tcHJpbWl0aXZlIHR5cGVzIGFzIGFsbG93ZWQgZm9yIHdlYWttYXBzXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlLmhhcyhhcmcpKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGFyZyk7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IGZ1bmMoYXJnKTtcbiAgICBjYWNoZS5zZXQoYXJnLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWFrTWVtb2l6ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXJUZWFtTG9hZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgIDxTa2VsZXRvbiB3aWR0aD17MjAwfSBoZWlnaHQ9ezMwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7WzEsIDIsIDMsIDRdLm1hcCgoKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cbiAgICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PXszMDB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VUaXRsZUJveCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbC10aXRsZS1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgIDxoMj5GQUxFLUNPTk9TQ088L2gyPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIj5GQUxFLUNPTk9TQ088L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuL2xvYWRhYmxlJ1xuXG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgdHlwZSBMb2FkZXJDb21wb25lbnQ8UCA9IHt9PiA9IFByb21pc2U8XG4gIFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfCB7IGRlZmF1bHQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfVxuPlxuXG5leHBvcnQgdHlwZSBMb2FkZXI8UCA9IHt9PiA9ICgoKSA9PiBMb2FkZXJDb21wb25lbnQ8UD4pIHwgTG9hZGVyQ29tcG9uZW50PFA+XG5cbmV4cG9ydCB0eXBlIExvYWRlck1hcCA9IHsgW21kdWxlOiBzdHJpbmddOiAoKSA9PiBMb2FkZXI8YW55PiB9XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyA9IHtcbiAgd2VicGFjaz8oKTogYW55XG4gIG1vZHVsZXM/KCk6IExvYWRlck1hcFxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUJhc2VPcHRpb25zPFAgPSB7fT4gPSBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnMgJiB7XG4gIGxvYWRpbmc/OiAoe1xuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBwYXN0RGVsYXksXG4gIH06IHtcbiAgICBlcnJvcj86IEVycm9yIHwgbnVsbFxuICAgIGlzTG9hZGluZz86IGJvb2xlYW5cbiAgICBwYXN0RGVsYXk/OiBib29sZWFuXG4gICAgcmV0cnk/OiAoKSA9PiB2b2lkXG4gICAgdGltZWRPdXQ/OiBib29sZWFuXG4gIH0pID0+IEpTWC5FbGVtZW50IHwgbnVsbFxuICBsb2FkZXI/OiBMb2FkZXI8UD4gfCBMb2FkZXJNYXBcbiAgbG9hZGFibGVHZW5lcmF0ZWQ/OiBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnNcbiAgc3NyPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZU9wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlQmFzZU9wdGlvbnM8UD4gJiB7XG4gIHJlbmRlcj8obG9hZGVyOiBhbnksIHByb3BzOiBhbnkpOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBEeW5hbWljT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVCYXNlT3B0aW9uczxQPiAmIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHRoZSBtb2R1bGVzIG9wdGlvbiBoYXMgYmVlbiBwbGFubmVkIGZvciByZW1vdmFsXG4gICAqL1xuICByZW5kZXI/KHByb3BzOiBQLCBsb2FkZWQ6IGFueSk6IEpTWC5FbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlRm48UCA9IHt9PiA9IChcbiAgb3B0czogTG9hZGFibGVPcHRpb25zPFA+XG4pID0+IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVDb21wb25lbnQ8UCA9IHt9PiA9IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vU1NSPFAgPSB7fT4oXG4gIExvYWRhYmxlSW5pdGlhbGl6ZXI6IExvYWRhYmxlRm48UD4sXG4gIGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFA+IHtcbiAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2tcbiAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzXG5cbiAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKVxuICB9XG5cbiAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nIVxuICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgcmV0dXJuICgpID0+IChcbiAgICA8TG9hZGluZyBlcnJvcj17bnVsbH0gaXNMb2FkaW5nIHBhc3REZWxheT17ZmFsc2V9IHRpbWVkT3V0PXtmYWxzZX0gLz5cbiAgKVxufVxuXG4vLyBmdW5jdGlvbiBkeW5hbWljPFAgPSB7fSwgTyBleHRlbmRzIER5bmFtaWNPcHRpb25zPihvcHRpb25zOiBPKTpcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYzxQID0ge30+KFxuICBkeW5hbWljT3B0aW9uczogRHluYW1pY09wdGlvbnM8UD4gfCBMb2FkZXI8UD4sXG4gIG9wdGlvbnM/OiBEeW5hbWljT3B0aW9uczxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB7XG4gIGxldCBsb2FkYWJsZUZuOiBMb2FkYWJsZUZuPFA+ID0gTG9hZGFibGVcbiAgbGV0IGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+ID0ge1xuICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgbG9hZGluZzogKHsgZXJyb3IsIGlzTG9hZGluZywgcGFzdERlbGF5IH0pID0+IHtcbiAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbFxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7ZXJyb3Iuc3RhY2t9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgfVxuXG4gIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpID0+IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5keW5hbWljT3B0aW9ucyB9XG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5vcHRpb25zIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICEoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKVxuICApIHtcbiAgICAvLyBzaG93IGRlcHJlY2F0aW9uIHdhcm5pbmcgZm9yIGBtb2R1bGVzYCBrZXkgaW4gZGV2ZWxvcG1lbnRcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdUaGUgbW9kdWxlcyBvcHRpb24gZm9yIG5leHQvZHluYW1pYyBoYXMgYmVlbiBkZXByZWNhdGVkLiBTZWUgaGVyZSBmb3IgbW9yZSBpbmZvIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtZHluYW1pYy1tb2R1bGVzJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIGByZW5kZXJgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgIGlmIChkeW5hbWljT3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgIGxvYWRhYmxlT3B0aW9ucy5yZW5kZXIgPSAobG9hZGVkLCBwcm9wcykgPT5cbiAgICAgICAgZHluYW1pY09wdGlvbnMucmVuZGVyIShwcm9wcywgbG9hZGVkKVxuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBgbW9kdWxlc2Agd2hlbiB1c2luZyBhIG1hcHBpbmcsIGVnOiBgZHluYW1pYyh7IG1vZHVsZXM6ICgpID0+IHtyZXR1cm4ge0hlbGxvV29ybGQ6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0sIHJlbmRlcihwcm9wcywgbG9hZGVkKSB7fSB9IH0pXG4gICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgIGxvYWRhYmxlRm4gPSBMb2FkYWJsZS5NYXBcbiAgICAgIGNvbnN0IGxvYWRNb2R1bGVzOiBMb2FkZXJNYXAgPSB7fVxuICAgICAgY29uc3QgbW9kdWxlcyA9IGR5bmFtaWNPcHRpb25zLm1vZHVsZXMoKVxuICAgICAgT2JqZWN0LmtleXMobW9kdWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBtb2R1bGVzW2tleV1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9ICgpID0+IHZhbHVlLnRoZW4oKG1vZDogYW55KSA9PiBtb2QuZGVmYXVsdCB8fCBtb2QpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9IHZhbHVlXG4gICAgICB9KVxuICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGxvYWRNb2R1bGVzXG4gICAgfVxuICB9XG5cbiAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCxcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICB9XG5cbiAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzclxuICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucylcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3JcbiAgfVxuXG4gIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucylcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBDYXB0dXJlRm4gPSAobW9kdWxlTmFtZTogc3RyaW5nKSA9PiB2b2lkXG5cbmV4cG9ydCBjb25zdCBMb2FkYWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENhcHR1cmVGbiB8IG51bGw+KG51bGwpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIExvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbnRleHQnXG59XG4iLCIvKipcbkBjb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCBKYW1lcyBLeWxlIDxtZUB0aGVqYW1lc2t5bGUuY29tPlxuIE1JVCBMaWNlbnNlXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkVcbiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamFtaWVidWlsZHMvcmVhY3QtbG9hZGFibGUvYmxvYi92NS41LjAvc3JjL2luZGV4LmpzXG4vLyBNb2RpZmllZCB0byBiZSBjb21wYXRpYmxlIHdpdGggd2VicGFjayA0IC8gTmV4dC5qc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdWJzY3JpcHRpb24gfSBmcm9tICd1c2Utc3Vic2NyaXB0aW9uJ1xuaW1wb3J0IHsgTG9hZGFibGVDb250ZXh0IH0gZnJvbSAnLi9sb2FkYWJsZS1jb250ZXh0J1xuXG5jb25zdCBBTExfSU5JVElBTElaRVJTID0gW11cbmNvbnN0IFJFQURZX0lOSVRJQUxJWkVSUyA9IFtdXG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBsb2FkKGxvYWRlcikge1xuICBsZXQgcHJvbWlzZSA9IGxvYWRlcigpXG5cbiAgbGV0IHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbG9hZGVkOiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICB9XG5cbiAgc3RhdGUucHJvbWlzZSA9IHByb21pc2VcbiAgICAudGhlbigobG9hZGVkKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHN0YXRlLmxvYWRlZCA9IGxvYWRlZFxuICAgICAgcmV0dXJuIGxvYWRlZFxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgICAgIHRocm93IGVyclxuICAgIH0pXG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIGxvYWRNYXAob2JqKSB7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBsb2FkZWQ6IHt9LFxuICAgIGVycm9yOiBudWxsLFxuICB9XG5cbiAgbGV0IHByb21pc2VzID0gW11cblxuICB0cnkge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gbG9hZChvYmpba2V5XSlcblxuICAgICAgaWYgKCFyZXN1bHQubG9hZGluZykge1xuICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc3VsdC5sb2FkZWRcbiAgICAgICAgc3RhdGUuZXJyb3IgPSByZXN1bHQuZXJyb3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0LnByb21pc2UpXG5cbiAgICAgIHJlc3VsdC5wcm9taXNlXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHN0YXRlLmVycm9yID0gZXJyXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgfVxuXG4gIHN0YXRlLnByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHJldHVybiByZXNcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRocm93IGVyclxuICAgIH0pXG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmouZGVmYXVsdCA6IG9ialxufVxuXG5mdW5jdGlvbiByZW5kZXIobG9hZGVkLCBwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChyZXNvbHZlKGxvYWRlZCksIHByb3BzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sIG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGxvYWRlcjogbnVsbCxcbiAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICBkZWxheTogMjAwLFxuICAgICAgdGltZW91dDogbnVsbCxcbiAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgd2VicGFjazogbnVsbCxcbiAgICAgIG1vZHVsZXM6IG51bGwsXG4gICAgfSxcbiAgICBvcHRpb25zXG4gIClcblxuICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbFxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IHN1YiA9IG5ldyBMb2FkYWJsZVN1YnNjcmlwdGlvbihsb2FkRm4sIG9wdHMpXG4gICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgIGdldEN1cnJlbnRWYWx1ZTogc3ViLmdldEN1cnJlbnRWYWx1ZS5iaW5kKHN1YiksXG4gICAgICAgIHN1YnNjcmliZTogc3ViLnN1YnNjcmliZS5iaW5kKHN1YiksXG4gICAgICAgIHJldHJ5OiBzdWIucmV0cnkuYmluZChzdWIpLFxuICAgICAgICBwcm9taXNlOiBzdWIucHJvbWlzZS5iaW5kKHN1YiksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpcHRpb24ucHJvbWlzZSgpXG4gIH1cblxuICAvLyBTZXJ2ZXIgb25seVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBBTExfSU5JVElBTElaRVJTLnB1c2goaW5pdClcbiAgfVxuXG4gIC8vIENsaWVudCBvbmx5XG4gIGlmIChcbiAgICAhaW5pdGlhbGl6ZWQgJiZcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBvcHRzLndlYnBhY2sgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgY29uc3QgbW9kdWxlSWRzID0gb3B0cy53ZWJwYWNrKClcbiAgICBSRUFEWV9JTklUSUFMSVpFUlMucHVzaCgoaWRzKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIG1vZHVsZUlkcykge1xuICAgICAgICBpZiAoaWRzLmluZGV4T2YobW9kdWxlSWQpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpbml0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgaW5pdCgpXG5cbiAgICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChMb2FkYWJsZUNvbnRleHQpXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKVxuXG4gICAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShcbiAgICAgIHJlZixcbiAgICAgICgpID0+ICh7XG4gICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnksXG4gICAgICB9KSxcbiAgICAgIFtdXG4gICAgKVxuXG4gICAgaWYgKGNvbnRleHQgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICBvcHRzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb250ZXh0KG1vZHVsZU5hbWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5sb2FkaW5nIHx8IHN0YXRlLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KG9wdHMubG9hZGluZywge1xuICAgICAgICAgIGlzTG9hZGluZzogc3RhdGUubG9hZGluZyxcbiAgICAgICAgICBwYXN0RGVsYXk6IHN0YXRlLnBhc3REZWxheSxcbiAgICAgICAgICB0aW1lZE91dDogc3RhdGUudGltZWRPdXQsXG4gICAgICAgICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnksXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxvYWRlZCkge1xuICAgICAgICByZXR1cm4gb3B0cy5yZW5kZXIoc3RhdGUubG9hZGVkLCBwcm9wcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSwgW3Byb3BzLCBzdGF0ZV0pXG4gIH1cblxuICBMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkID0gKCkgPT4gaW5pdCgpXG4gIExvYWRhYmxlQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29tcG9uZW50J1xuXG4gIHJldHVybiBSZWFjdC5mb3J3YXJkUmVmKExvYWRhYmxlQ29tcG9uZW50KVxufVxuXG5jbGFzcyBMb2FkYWJsZVN1YnNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGxvYWRGbiwgb3B0cykge1xuICAgIHRoaXMuX2xvYWRGbiA9IGxvYWRGblxuICAgIHRoaXMuX29wdHMgPSBvcHRzXG4gICAgdGhpcy5fY2FsbGJhY2tzID0gbmV3IFNldCgpXG4gICAgdGhpcy5fZGVsYXkgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcblxuICAgIHRoaXMucmV0cnkoKVxuICB9XG5cbiAgcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzLnByb21pc2VcbiAgfVxuXG4gIHJldHJ5KCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKVxuICAgIHRoaXMuX3JlcyA9IHRoaXMuX2xvYWRGbih0aGlzLl9vcHRzLmxvYWRlcilcblxuICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgIHRpbWVkT3V0OiBmYWxzZSxcbiAgICB9XG5cbiAgICBjb25zdCB7IF9yZXM6IHJlcywgX29wdHM6IG9wdHMgfSA9IHRoaXNcblxuICAgIGlmIChyZXMubG9hZGluZykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAob3B0cy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX3N0YXRlLnBhc3REZWxheSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kZWxheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgICAgcGFzdERlbGF5OiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCBvcHRzLmRlbGF5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlKHsgdGltZWRPdXQ6IHRydWUgfSlcbiAgICAgICAgfSwgb3B0cy50aW1lb3V0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3Jlcy5wcm9taXNlXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChfZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgICB9KVxuICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgfVxuXG4gIF91cGRhdGUocGFydGlhbCkge1xuICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgLi4udGhpcy5fc3RhdGUsXG4gICAgICBlcnJvcjogdGhpcy5fcmVzLmVycm9yLFxuICAgICAgbG9hZGVkOiB0aGlzLl9yZXMubG9hZGVkLFxuICAgICAgbG9hZGluZzogdGhpcy5fcmVzLmxvYWRpbmcsXG4gICAgICAuLi5wYXJ0aWFsLFxuICAgIH1cbiAgICB0aGlzLl9jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKCkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0cygpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gIH1cblxuICBnZXRDdXJyZW50VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlXG4gIH1cblxuICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZShvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkLCBvcHRzKVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZU1hcChvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRhYmxlTWFwIHJlcXVpcmVzIGEgYHJlbmRlcihsb2FkZWQsIHByb3BzKWAgZnVuY3Rpb24nKVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWRNYXAsIG9wdHMpXG59XG5cbkxvYWRhYmxlLk1hcCA9IExvYWRhYmxlTWFwXG5cbmZ1bmN0aW9uIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKSB7XG4gIGxldCBwcm9taXNlcyA9IFtdXG5cbiAgd2hpbGUgKGluaXRpYWxpemVycy5sZW5ndGgpIHtcbiAgICBsZXQgaW5pdCA9IGluaXRpYWxpemVycy5wb3AoKVxuICAgIHByb21pc2VzLnB1c2goaW5pdChpZHMpKVxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKVxuICAgIH1cbiAgfSlcbn1cblxuTG9hZGFibGUucHJlbG9hZEFsbCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpID0+IHtcbiAgICBmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmVJbml0aWFsaXplcnMsIHJlamVjdClcbiAgfSlcbn1cblxuTG9hZGFibGUucHJlbG9hZFJlYWR5ID0gKGlkcyA9IFtdKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByZWxvYWQpID0+IHtcbiAgICBjb25zdCByZXMgPSAoKSA9PiB7XG4gICAgICBpbml0aWFsaXplZCA9IHRydWVcbiAgICAgIHJldHVybiByZXNvbHZlUHJlbG9hZCgpXG4gICAgfVxuICAgIC8vIFdlIGFsd2F5cyB3aWxsIHJlc29sdmUsIGVycm9ycyBzaG91bGQgYmUgaGFuZGxlZCB3aXRoaW4gbG9hZGluZyBVSXMuXG4gICAgZmx1c2hJbml0aWFsaXplcnMoUkVBRFlfSU5JVElBTElaRVJTLCBpZHMpLnRoZW4ocmVzLCByZXMpXG4gIH0pXG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWSA9IExvYWRhYmxlLnByZWxvYWRSZWFkeVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkYWJsZVxuIiwiaW1wb3J0IGVtYWlsanMgZnJvbSBcImVtYWlsanMtY29tXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjtcblxuaW1wb3J0IFBhZ2VUaXRsZUJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlVGl0bGVCb3ggY29udGF0by9QYWdlVGl0bGVCb3hcIjtcbmltcG9ydCBPdXJUZWFtTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL091clRlYW0vT3VyVGVhbUxvYWRlclwiO1xuLy9pbXBvcnQgT3VyVGVhbSBmcm9tIFwiXCI7XG5cbmNvbnN0IE91clRlYW0gPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL091clRlYW0vT3VyVGVhbS5jb250YWluZXJcIiksXG4gIHtcbiAgICBsb2FkaW5nOiAoKSA9PiA8T3VyVGVhbUxvYWRlciAvPixcbiAgICBzc3I6IGZhbHNlLFxuICB9XG4pO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGF0bygpIHtcblxuICBmdW5jdGlvbiBzZW5kRW1haWwoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGVtYWlsanMuc2VuZEZvcm0oJ2dtYWlsJywgJ3RlbXBsYXRlX3AzOWFyMHMgJywgZS50YXJnZXQsICd1c2VyXzZOQlo0OWFvZzB3RnlEMU8xTkpKSScpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XG4gICAgICB9KTtcbiAgICAgIGUudGFyZ2V0LnJlc2V0KClcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGFnZVRpdGxlQm94IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhdG8tYm94LW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnRhdG8tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBHcnVwbyA8c3Bhbj4gRWFzeSBDYXJlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGF0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1ibG9jay1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgIETDqiBpbsOtY2lvIGEgY2FzYXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmctd2FybmluZyB0ZXh0LXNlY29uZGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIGRvcyBzZXVzIHNvbmhvc1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhdG8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGg0PkNvbnRhdG88L2g0PlxuICAgICAgICAgICAgICAgIDxwPkZhbGUgY29ub3NjbzwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPjYxIDM5NzUtMTc3OTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5jb21lcmNpYWxAZ21haWwuY29tPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+RW5kZXJlw6dvOiBMb3RlIDIzMCAtIEd1YXLDoSBCcmFzw61saWEgLSBERiw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1idG5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBodnItaG92ZXJcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gaHZyLWhvdmVyXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtcGludGVyZXN0LXBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGh2ci1ob3ZlclwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXdoYXRzYXBwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZi94YXlhYnlxb1wiXG4gIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZvcm1Hcm91cEV4YW1wbGVJbnB1dFwiPk5vbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImZvcm1Hcm91cEV4YW1wbGVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmV2YSBzZXUgbm9tZVwiXG4gICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRFbWFpbDRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRFbWFpbDRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0cGhvbmVsNFwiPlRlbC48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0cGhvbmVsNFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWwuXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmbGV4U3dpdGNoQ2hlY2tEZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJmbGV4U3dpdGNoQ2hlY2tEZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBNw7N2ZWlzIFBsYW5lamFkb3NcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZsZXhTd2l0Y2hDaGVja0RlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiZmxleFN3aXRjaENoZWNrRGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBlZHJhIEVzY3VscGlkYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZsZXhTd2l0Y2hDaGVja0RlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJmbGV4U3dpdGNoQ2hlY2tEZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZXJnaWEgRm90b3ZvbHRhaWNhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAtY2VtdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmxleFN3aXRjaENoZWNrRGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiZmxleFN3aXRjaENoZWNrRGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW5nZW5oYXJpYVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmxleFN3aXRjaENoZWNrRGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJmbGV4U3dpdGNoQ2hlY2tEZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWFudXRlbsOnw6NvIFByZWRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZsZXhTd2l0Y2hDaGVja0RlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJmbGV4U3dpdGNoQ2hlY2tEZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dG9tYcOnw6NvIFJlc2lkZW5jaWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgc29sb1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+bWVuc2FnZW08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWE+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgc29sb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFTlZJQVJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVtYWlsSlNSZXNwb25zZVN0YXR1cyA9IGV4cG9ydHMuc2VuZEZvcm0gPSBleHBvcnRzLnNlbmQgPSBleHBvcnRzLmluaXQgPSB2b2lkIDA7XG52YXIgRW1haWxKU1Jlc3BvbnNlU3RhdHVzXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvRW1haWxKU1Jlc3BvbnNlU3RhdHVzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRW1haWxKU1Jlc3BvbnNlU3RhdHVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBFbWFpbEpTUmVzcG9uc2VTdGF0dXNfMS5FbWFpbEpTUmVzcG9uc2VTdGF0dXM7IH0gfSk7XG52YXIgVUlfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL3VpL1VJXCIpO1xudmFyIF91c2VySUQgPSBudWxsO1xudmFyIF9vcmlnaW4gPSAnaHR0cHM6Ly9hcGkuZW1haWxqcy5jb20nO1xuZnVuY3Rpb24gc2VuZFBvc3QodXJsLCBkYXRhLCBoZWFkZXJzKSB7XG4gICAgaWYgKGhlYWRlcnMgPT09IHZvaWQgMCkgeyBoZWFkZXJzID0ge307IH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VTdGF0dXMgPSBuZXcgRW1haWxKU1Jlc3BvbnNlU3RhdHVzXzEuRW1haWxKU1Jlc3BvbnNlU3RhdHVzKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VTdGF0dXMuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2VTdGF0dXMudGV4dCA9PT0gJ09LJykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VTdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlU3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFbWFpbEpTUmVzcG9uc2VTdGF0dXNfMS5FbWFpbEpTUmVzcG9uc2VTdGF0dXMoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhcHBlbmRHb29nbGVDYXB0Y2hhKHRlbXBsYXRlUHJhbXMpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnLXJlY2FwdGNoYS1yZXNwb25zZScpO1xuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgdGVtcGxhdGVQcmFtc1snZy1yZWNhcHRjaGEtcmVzcG9uc2UnXSA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsZW1lbnQgPSBudWxsO1xuICAgIHJldHVybiB0ZW1wbGF0ZVByYW1zO1xufVxuZnVuY3Rpb24gZml4SWRTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIGlmIChzZWxlY3RvclswXSAhPT0gJyMnICYmIHNlbGVjdG9yWzBdICE9PSAnLicpIHtcbiAgICAgICAgcmV0dXJuICcjJyArIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3I7XG59XG4vKipcbiAqIEluaXRpYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySUQgLSBzZXQgdGhlIEVtYWlsSlMgdXNlciBJRFxuICogQHBhcmFtIHtzdHJpbmd9IG9yaWdpbiAtIHNldCB0aGUgRW1haWxKUyBvcmlnaW5cbiAqL1xuZnVuY3Rpb24gaW5pdCh1c2VySUQsIG9yaWdpbikge1xuICAgIF91c2VySUQgPSB1c2VySUQ7XG4gICAgX29yaWdpbiA9IG9yaWdpbiB8fCAnaHR0cHM6Ly9hcGkuZW1haWxqcy5jb20nO1xufVxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbi8qKlxuICogU2VuZCBhIHRlbXBsYXRlIHRvIHRoZSBzcGVjaWZpYyBFbWFpbEpTIHNlcnZpY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlSUQgLSB0aGUgRW1haWxKUyBzZXJ2aWNlIElEXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVJRCAtIHRoZSBFbWFpbEpTIHRlbXBsYXRlIElEXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGVQcmFtcyAtIHRoZSB0ZW1wbGF0ZSBwYXJhbXMsIHdoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIEVtYWlsSlMgdGVtcGxhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySUQgLSB0aGUgRW1haWxKUyB1c2VyIElEXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxFbWFpbEpTUmVzcG9uc2VTdGF0dXM+fVxuICovXG5mdW5jdGlvbiBzZW5kKHNlcnZpY2VJRCwgdGVtcGxhdGVJRCwgdGVtcGxhdGVQcmFtcywgdXNlcklEKSB7XG4gICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgbGliX3ZlcnNpb246ICcyLjYuNCcsXG4gICAgICAgIHVzZXJfaWQ6IHVzZXJJRCB8fCBfdXNlcklELFxuICAgICAgICBzZXJ2aWNlX2lkOiBzZXJ2aWNlSUQsXG4gICAgICAgIHRlbXBsYXRlX2lkOiB0ZW1wbGF0ZUlELFxuICAgICAgICB0ZW1wbGF0ZV9wYXJhbXM6IGFwcGVuZEdvb2dsZUNhcHRjaGEodGVtcGxhdGVQcmFtcylcbiAgICB9O1xuICAgIHJldHVybiBzZW5kUG9zdChfb3JpZ2luICsgJy9hcGkvdjEuMC9lbWFpbC9zZW5kJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSwge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSk7XG59XG5leHBvcnRzLnNlbmQgPSBzZW5kO1xuLyoqXG4gKiBTZW5kIGEgZm9ybSB0aGUgc3BlY2lmaWMgRW1haWxKUyBzZXJ2aWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZUlEIC0gdGhlIEVtYWlsSlMgc2VydmljZSBJRFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlSUQgLSB0aGUgRW1haWxKUyB0ZW1wbGF0ZSBJRFxuICogQHBhcmFtIHtzdHJpbmcgfCBIVE1MRm9ybUVsZW1lbnR9IGZvcm0gLSB0aGUgZm9ybSBlbGVtZW50IG9yIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcklEIC0gdGhlIEVtYWlsSlMgdXNlciBJRFxuICogQHJldHVybnMge1Byb21pc2U8RW1haWxKU1Jlc3BvbnNlU3RhdHVzPn1cbiAqL1xuZnVuY3Rpb24gc2VuZEZvcm0oc2VydmljZUlELCB0ZW1wbGF0ZUlELCBmb3JtLCB1c2VySUQpIHtcbiAgICBpZiAodHlwZW9mIGZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpeElkU2VsZWN0b3IoZm9ybSkpO1xuICAgIH1cbiAgICBpZiAoIWZvcm0gfHwgZm9ybS5ub2RlTmFtZSAhPT0gJ0ZPUk0nKSB7XG4gICAgICAgIHRocm93ICdFeHBlY3RlZCB0aGUgSFRNTCBmb3JtIGVsZW1lbnQgb3IgdGhlIHN0eWxlIHNlbGVjdG9yIG9mIGZvcm0nO1xuICAgIH1cbiAgICBVSV8xLlVJLnByb2dyZXNzU3RhdGUoZm9ybSk7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnbGliX3ZlcnNpb24nLCAnMi42LjQnKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlcnZpY2VfaWQnLCBzZXJ2aWNlSUQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndGVtcGxhdGVfaWQnLCB0ZW1wbGF0ZUlEKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJfaWQnLCB1c2VySUQgfHwgX3VzZXJJRCk7XG4gICAgcmV0dXJuIHNlbmRQb3N0KF9vcmlnaW4gKyAnL2FwaS92MS4wL2VtYWlsL3NlbmQtZm9ybScsIGZvcm1EYXRhKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgVUlfMS5VSS5zdWNjZXNzU3RhdGUoZm9ybSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgVUlfMS5VSS5lcnJvclN0YXRlKGZvcm0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zZW5kRm9ybSA9IHNlbmRGb3JtO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGluaXQ6IGluaXQsXG4gICAgc2VuZDogc2VuZCxcbiAgICBzZW5kRm9ybTogc2VuZEZvcm1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRW1haWxKU1Jlc3BvbnNlU3RhdHVzID0gdm9pZCAwO1xudmFyIEVtYWlsSlNSZXNwb25zZVN0YXR1cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbWFpbEpTUmVzcG9uc2VTdGF0dXMoaHR0cFJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gaHR0cFJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgdGhpcy50ZXh0ID0gaHR0cFJlc3BvbnNlLnJlc3BvbnNlVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIEVtYWlsSlNSZXNwb25zZVN0YXR1cztcbn0oKSk7XG5leHBvcnRzLkVtYWlsSlNSZXNwb25zZVN0YXR1cyA9IEVtYWlsSlNSZXNwb25zZVN0YXR1cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VSSA9IHZvaWQgMDtcbnZhciBVSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVSSgpIHtcbiAgICB9XG4gICAgVUkuY2xlYXJBbGwgPSBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5QUk9HUkVTUyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkRPTkUpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5FUlJPUik7XG4gICAgfTtcbiAgICBVSS5wcm9ncmVzc1N0YXRlID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgdGhpcy5jbGVhckFsbChmb3JtKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKHRoaXMuUFJPR1JFU1MpO1xuICAgIH07XG4gICAgVUkuc3VjY2Vzc1N0YXRlID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuUFJPR1JFU1MpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQodGhpcy5ET05FKTtcbiAgICB9O1xuICAgIFVJLmVycm9yU3RhdGUgPSBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5QUk9HUkVTUyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCh0aGlzLkVSUk9SKTtcbiAgICB9O1xuICAgIFVJLlBST0dSRVNTID0gJ2VtYWlsanMtc2VuZGluZyc7XG4gICAgVUkuRE9ORSA9ICdlbWFpbGpzLXN1Y2Nlc3MnO1xuICAgIFVJLkVSUk9SID0gJ2VtYWlsanMtZXJyb3InO1xuICAgIHJldHVybiBVSTtcbn0oKSk7XG5leHBvcnRzLlVJID0gVUk7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2NvbnRhdG9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJEOlxcXFxHcnVwb2Vhc3ljYXJlLW1haW5cXFxccGFnZXNcXFxcY29udGF0by5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9za2VsZXRvbi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNrZWxldG9uVGhlbWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3NrZWxldG9uVGhlbWUuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc2tlbGV0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NrZWxldG9uXCIpKTtcblxudmFyIF9za2VsZXRvblRoZW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9za2VsZXRvbi10aGVtZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvcmUgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTtcblxudmFyIF9za2VsZXRvbiA9IHJlcXVpcmUoXCIuL3NrZWxldG9uXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFNrZWxldG9uVGhlbWUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNrZWxldG9uVGhlbWUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNrZWxldG9uVGhlbWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNrZWxldG9uVGhlbWUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTa2VsZXRvblRoZW1lKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTa2VsZXRvblRoZW1lLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2xvciA9IF90aGlzJHByb3BzLmNvbG9yLFxuICAgICAgICAgIGhpZ2hsaWdodENvbG9yID0gX3RoaXMkcHJvcHMuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciB0aGVtZVN0eWxlcyA9XG4gICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAoMCwgX2NvcmUuY3NzKShcIi5yZWFjdC1sb2FkaW5nLXNrZWxldG9ue2JhY2tncm91bmQtY29sb3I6XCIsIGNvbG9yLCBcIjtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCggOTBkZWcsXCIsIGNvbG9yLCBcIixcIiwgaGlnaGxpZ2h0Q29sb3IsIFwiLFwiLCBjb2xvciwgXCIgKTt9O2xhYmVsOlNrZWxldG9uVGhlbWU7XCIgKyAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTl6YTJWc1pYUnZiaTEwYUdWdFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZaTWtJaUxDSm1hV3hsSWpvaUxpNHZjM0pqTDNOclpXeGxkRzl1TFhSb1pXMWxMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZKbFlXTjBMQ0I3SUVOdmJYQnZibVZ1ZENCOUlHWnliMjBnWENKeVpXRmpkRndpTzF4dWFXMXdiM0owSUhzZ1kzTnpJSDBnWm5KdmJTQmNJa0JsYlc5MGFXOXVMMk52Y21WY0lqdGNibWx0Y0c5eWRDQjdJR1JsWm1GMWJIUkNZWE5sUTI5c2IzSXNJR1JsWm1GMWJIUklhV2RvYkdsbmFIUkRiMnh2Y2lCOUlHWnliMjBnWENJdUwzTnJaV3hsZEc5dVhDSTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGTnJaV3hsZEc5dVZHaGxiV1VnWlhoMFpXNWtjeUJEYjIxd2IyNWxiblFnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR052Ykc5eU9pQmtaV1poZFd4MFFtRnpaVU52Ykc5eUxGeHVJQ0FnSUdocFoyaHNhV2RvZEVOdmJHOXlPaUJrWldaaGRXeDBTR2xuYUd4cFoyaDBRMjlzYjNKY2JpQWdmVHRjYmx4dUlDQnlaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCamIyeHZjaXdnYUdsbmFHeHBaMmgwUTI5c2IzSXNJR05vYVd4a2NtVnVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJSFJvWlcxbFUzUjViR1Z6SUQwZ1kzTnpZRnh1SUNBZ0lDQWdMbkpsWVdOMExXeHZZV1JwYm1jdGMydGxiR1YwYjI0Z2UxeHVJQ0FnSUNBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWtlMk52Ykc5eWZUdGNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFwYldGblpUb2diR2x1WldGeUxXZHlZV1JwWlc1MEtGeHVJQ0FnSUNBZ0lDQWdJRGt3WkdWbkxGeHVJQ0FnSUNBZ0lDQWdJQ1I3WTI5c2IzSjlMRnh1SUNBZ0lDQWdJQ0FnSUNSN2FHbG5hR3hwWjJoMFEyOXNiM0o5TEZ4dUlDQWdJQ0FnSUNBZ0lDUjdZMjlzYjNKOVhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ1lEdGNiaUFnSUNCeVpYUjFjbTRnUEdScGRpQmpjM005ZTNSb1pXMWxVM1I1YkdWemZUNTdZMmhwYkdSeVpXNTlQQzlrYVhZK08xeHVJQ0I5WEc1OVhHNGlYWDA9ICovXCIpKTtcbiAgICAgIHJldHVybiAoMCwgX2NvcmUuanN4KShcImRpdlwiLCB7XG4gICAgICAgIGNzczogdGhlbWVTdHlsZXNcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2tlbGV0b25UaGVtZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNrZWxldG9uVGhlbWU7XG5cbl9kZWZpbmVQcm9wZXJ0eShTa2VsZXRvblRoZW1lLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGNvbG9yOiBfc2tlbGV0b24uZGVmYXVsdEJhc2VDb2xvcixcbiAgaGlnaGxpZ2h0Q29sb3I6IF9za2VsZXRvbi5kZWZhdWx0SGlnaGxpZ2h0Q29sb3Jcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gU2tlbGV0b247XG5leHBvcnRzLnNrZWxldG9uU3R5bGVzID0gZXhwb3J0cy5za2VsZXRvbktleWZyYW1lcyA9IGV4cG9ydHMuZGVmYXVsdEhpZ2hsaWdodENvbG9yID0gZXhwb3J0cy5kZWZhdWx0QmFzZUNvbG9yID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvcmUgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDBweCAwO1xcbiAgfVxcbiAgXCIsIFwiXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygyMDBweCArIDEwMCUpIDA7XFxuICB9XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IGlmICghcmF3KSB7IHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7IH0gcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTsgfVxuXG52YXIgZGVmYXVsdEJhc2VDb2xvciA9IFwiI2VlZVwiO1xuZXhwb3J0cy5kZWZhdWx0QmFzZUNvbG9yID0gZGVmYXVsdEJhc2VDb2xvcjtcbnZhciBkZWZhdWx0SGlnaGxpZ2h0Q29sb3IgPSBcIiNmNWY1ZjVcIjtcbmV4cG9ydHMuZGVmYXVsdEhpZ2hsaWdodENvbG9yID0gZGVmYXVsdEhpZ2hsaWdodENvbG9yO1xuXG52YXIgc2tlbGV0b25LZXlmcmFtZXMgPSBmdW5jdGlvbiBza2VsZXRvbktleWZyYW1lcyhkdXJhdGlvbiwgZGVsYXkpIHtcbiAgcmV0dXJuICgwLCBfY29yZS5rZXlmcmFtZXMpKF90ZW1wbGF0ZU9iamVjdCgpLCBkZWxheSA+IDAgPyBcIlwiLmNvbmNhdChNYXRoLmZsb29yKDEgLyAoZHVyYXRpb24gKyBkZWxheSkgKiBkdXJhdGlvbiAqIDEwMCksIFwiJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMjAwcHggKyAxMDAlKSAwO1xcbiAgfVwiKSA6IHVuZGVmaW5lZCk7XG59O1xuXG5leHBvcnRzLnNrZWxldG9uS2V5ZnJhbWVzID0gc2tlbGV0b25LZXlmcmFtZXM7XG52YXIgc2tlbGV0b25TdHlsZXMgPVxuLyojX19QVVJFX18qL1xuKDAsIF9jb3JlLmNzcykoXCJiYWNrZ3JvdW5kLWNvbG9yOlwiLCBkZWZhdWx0QmFzZUNvbG9yLCBcIjtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCggOTBkZWcsXCIsIGRlZmF1bHRCYXNlQ29sb3IsIFwiLFwiLCBkZWZhdWx0SGlnaGxpZ2h0Q29sb3IsIFwiLFwiLCBkZWZhdWx0QmFzZUNvbG9yLCBcIiApO2JhY2tncm91bmQtc2l6ZToyMDBweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtib3JkZXItcmFkaXVzOjRweDtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoxO3dpZHRoOjEwMCU7O2xhYmVsOnNrZWxldG9uU3R5bGVzO1wiICsgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5emEyVnNaWFJ2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRjFRbWxESWl3aVptbHNaU0k2SWk0dUwzTnlZeTl6YTJWc1pYUnZiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXRmpkQ0JtY205dElGd2ljbVZoWTNSY0lqdGNibWx0Y0c5eWRDQjdJR056Y3l3Z2EyVjVabkpoYldWeklIMGdabkp2YlNCY0lrQmxiVzkwYVc5dUwyTnZjbVZjSWp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSbFptRjFiSFJDWVhObFEyOXNiM0lnUFNCY0lpTmxaV1ZjSWp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSbFptRjFiSFJJYVdkb2JHbG5hSFJEYjJ4dmNpQTlJRndpSTJZMVpqVm1OVndpTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJ0bGJHVjBiMjVMWlhsbWNtRnRaWE1nUFNBb1pIVnlZWFJwYjI0c0lHUmxiR0Y1S1NBOVBpQnJaWGxtY21GdFpYTmdYRzRnSURBbElIdGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNakF3Y0hnZ01EdGNiaUFnZlZ4dUlDQWtlMXh1SUNBZ0lHUmxiR0Y1SUQ0Z01GeHVJQ0FnSUNBZ1B5QmdKSHROWVhSb0xtWnNiMjl5S0NneElDOGdLR1IxY21GMGFXOXVJQ3NnWkdWc1lYa3BLU0FxSUdSMWNtRjBhVzl1SUNvZ01UQXdLWDBsSUh0Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lCallXeGpLREl3TUhCNElDc2dNVEF3SlNrZ01EdGNiaUFnZldCY2JpQWdJQ0FnSURvZ2RXNWtaV1pwYm1Wa1hHNGdJSDFjYmlBZ01UQXdKU0I3WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nWTJGc1l5Z3lNREJ3ZUNBcklERXdNQ1VwSURBN1hHNGdJSDFjYm1BN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCemEyVnNaWFJ2YmxOMGVXeGxjeUE5SUdOemMyQmNiaUFnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSkh0a1pXWmhkV3gwUW1GelpVTnZiRzl5ZlR0Y2JpQWdZbUZqYTJkeWIzVnVaQzFwYldGblpUb2diR2x1WldGeUxXZHlZV1JwWlc1MEtGeHVJQ0FnSURrd1pHVm5MRnh1SUNBZ0lDUjdaR1ZtWVhWc2RFSmhjMlZEYjJ4dmNuMHNYRzRnSUNBZ0pIdGtaV1poZFd4MFNHbG5hR3hwWjJoMFEyOXNiM0o5TEZ4dUlDQWdJQ1I3WkdWbVlYVnNkRUpoYzJWRGIyeHZjbjFjYmlBZ0tUdGNiaUFnWW1GamEyZHliM1Z1WkMxemFYcGxPaUF5TURCd2VDQXhNREFsTzF4dUlDQmlZV05yWjNKdmRXNWtMWEpsY0dWaGREb2dibTh0Y21Wd1pXRjBPMXh1SUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUEwY0hnN1hHNGdJR1JwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXp0Y2JpQWdiR2x1WlMxb1pXbG5hSFE2SURFN1hHNGdJSGRwWkhSb09pQXhNREFsTzF4dVlEdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdVMnRsYkdWMGIyNG9lMXh1SUNCamIzVnVkQ3hjYmlBZ1pIVnlZWFJwYjI0c1hHNGdJSGRwWkhSb0xGeHVJQ0IzY21Gd2NHVnlPaUJYY21Gd2NHVnlMRnh1SUNCb1pXbG5hSFFzWEc0Z0lHTnBjbU5zWlN4Y2JpQWdaR1ZzWVhrc1hHNGdJSE4wZVd4bE9pQmpkWE4wYjIxVGRIbHNaU3hjYmlBZ1kyeGhjM05PWVcxbE9pQmpkWE4wYjIxRGJHRnpjMDVoYldWY2JuMHBJSHRjYmlBZ1kyOXVjM1FnWld4bGJXVnVkSE1nUFNCYlhUdGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHTnZkVzUwT3lCcEt5c3BJSHRjYmlBZ0lDQnNaWFFnYzNSNWJHVWdQU0I3ZlR0Y2JseHVJQ0FnSUdsbUlDaDNhV1IwYUNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ2MzUjViR1V1ZDJsa2RHZ2dQU0IzYVdSMGFEdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hR1ZwWjJoMElDRTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnpkSGxzWlM1b1pXbG5hSFFnUFNCb1pXbG5hSFE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hkcFpIUm9JQ0U5UFNCdWRXeHNJQ1ltSUdobGFXZG9kQ0FoUFQwZ2JuVnNiQ0FtSmlCamFYSmpiR1VwSUh0Y2JpQWdJQ0FnSUhOMGVXeGxMbUp2Y21SbGNsSmhaR2wxY3lBOUlGd2lOVEFsWENJN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdWMElHTnNZWE56VG1GdFpTQTlJRndpY21WaFkzUXRiRzloWkdsdVp5MXphMlZzWlhSdmJsd2lPMXh1SUNBZ0lHbG1JQ2hqZFhOMGIyMURiR0Z6YzA1aGJXVXBJSHRjYmlBZ0lDQWdJR05zWVhOelRtRnRaU0FyUFNCY0lpQmNJaUFySUdOMWMzUnZiVU5zWVhOelRtRnRaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmxiR1Z0Wlc1MGN5NXdkWE5vS0Z4dUlDQWdJQ0FnUEhOd1lXNWNiaUFnSUNBZ0lDQWdhMlY1UFh0cGZWeHVJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk5zWVhOelRtRnRaWDFjYmlBZ0lDQWdJQ0FnWTNOelBYdGpjM05nWEc0Z0lDQWdJQ0FnSUNBZ0pIdHphMlZzWlhSdmJsTjBlV3hsYzMxY2JpQWdJQ0FnSUNBZ0lDQmhibWx0WVhScGIyNDZJQ1I3YzJ0bGJHVjBiMjVMWlhsbWNtRnRaWE1vWkhWeVlYUnBiMjRzSUdSbGJHRjVLWDBnSkh0a2RYSmhkR2x2YmlBclhHNGdJQ0FnSUNBZ0lDQWdaR1ZzWVhsOWN5QmxZWE5sTFdsdUxXOTFkQ0JwYm1acGJtbDBaVnh1SUNBZ0lDQWdJQ0JnZlZ4dUlDQWdJQ0FnSUNCemRIbHNaVDE3ZTF4dUlDQWdJQ0FnSUNBZ0lDNHVMbU4xYzNSdmJWTjBlV3hsTEZ4dUlDQWdJQ0FnSUNBZ0lDNHVMbk4wZVd4bFhHNGdJQ0FnSUNBZ0lIMTlYRzRnSUNBZ0lDQStYRzRnSUNBZ0lDQWdJQ1o2ZDI1cU8xeHVJQ0FnSUNBZ1BDOXpjR0Z1UGx4dUlDQWdJQ2s3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHh6Y0dGdVBseHVJQ0FnSUNBZ2UxZHlZWEJ3WlhKY2JpQWdJQ0FnSUNBZ1B5QmxiR1Z0Wlc1MGN5NXRZWEFvS0dWc1pXMWxiblFzSUdrcElEMCtJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lEeFhjbUZ3Y0dWeUlHdGxlVDE3YVgwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUh0bGJHVnRaVzUwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FtZW5kdWFqdGNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlYzSmhjSEJsY2o1Y2JpQWdJQ0FnSUNBZ0lDQXBLVnh1SUNBZ0lDQWdJQ0E2SUdWc1pXMWxiblJ6ZlZ4dUlDQWdJRHd2YzNCaGJqNWNiaUFnS1R0Y2JuMWNibHh1VTJ0bGJHVjBiMjR1WkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNCamIzVnVkRG9nTVN4Y2JpQWdaSFZ5WVhScGIyNDZJREV1TWl4Y2JpQWdkMmxrZEdnNklHNTFiR3dzWEc0Z0lIZHlZWEJ3WlhJNklHNTFiR3dzWEc0Z0lHaGxhV2RvZERvZ2JuVnNiQ3hjYmlBZ1kybHlZMnhsT2lCbVlXeHpaU3hjYmlBZ1pHVnNZWGs2SURCY2JuMDdYRzRpWFgwPSAqL1wiKSk7XG5leHBvcnRzLnNrZWxldG9uU3R5bGVzID0gc2tlbGV0b25TdHlsZXM7XG5cbmZ1bmN0aW9uIFNrZWxldG9uKF9yZWYpIHtcbiAgdmFyIGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbixcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIFdyYXBwZXIgPSBfcmVmLndyYXBwZXIsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIGNpcmNsZSA9IF9yZWYuY2lyY2xlLFxuICAgICAgZGVsYXkgPSBfcmVmLmRlbGF5LFxuICAgICAgY3VzdG9tU3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgY3VzdG9tQ2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG4gIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGlmIChoZWlnaHQgIT09IG51bGwpIHtcbiAgICAgIHN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAod2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsICYmIGNpcmNsZSkge1xuICAgICAgc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XG5cbiAgICBpZiAoY3VzdG9tQ2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyBjdXN0b21DbGFzc05hbWU7XG4gICAgfVxuXG4gICAgZWxlbWVudHMucHVzaCgoMCwgX2NvcmUuanN4KShcInNwYW5cIiwge1xuICAgICAga2V5OiBpLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBjc3M6XG4gICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAoMCwgX2NvcmUuY3NzKShza2VsZXRvblN0eWxlcywgXCIgYW5pbWF0aW9uOlwiLCBza2VsZXRvbktleWZyYW1lcyhkdXJhdGlvbiwgZGVsYXkpLCBcIiBcIiwgZHVyYXRpb24gKyBkZWxheSwgXCJzIGVhc2UtaW4tb3V0IGluZmluaXRlO2xhYmVsOlNrZWxldG9uO1wiICsgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5emEyVnNaWFJ2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRTBSV2RDSWl3aVptbHNaU0k2SWk0dUwzTnlZeTl6YTJWc1pYUnZiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXRmpkQ0JtY205dElGd2ljbVZoWTNSY0lqdGNibWx0Y0c5eWRDQjdJR056Y3l3Z2EyVjVabkpoYldWeklIMGdabkp2YlNCY0lrQmxiVzkwYVc5dUwyTnZjbVZjSWp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSbFptRjFiSFJDWVhObFEyOXNiM0lnUFNCY0lpTmxaV1ZjSWp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSbFptRjFiSFJJYVdkb2JHbG5hSFJEYjJ4dmNpQTlJRndpSTJZMVpqVm1OVndpTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJ0bGJHVjBiMjVMWlhsbWNtRnRaWE1nUFNBb1pIVnlZWFJwYjI0c0lHUmxiR0Y1S1NBOVBpQnJaWGxtY21GdFpYTmdYRzRnSURBbElIdGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNakF3Y0hnZ01EdGNiaUFnZlZ4dUlDQWtlMXh1SUNBZ0lHUmxiR0Y1SUQ0Z01GeHVJQ0FnSUNBZ1B5QmdKSHROWVhSb0xtWnNiMjl5S0NneElDOGdLR1IxY21GMGFXOXVJQ3NnWkdWc1lYa3BLU0FxSUdSMWNtRjBhVzl1SUNvZ01UQXdLWDBsSUh0Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lCallXeGpLREl3TUhCNElDc2dNVEF3SlNrZ01EdGNiaUFnZldCY2JpQWdJQ0FnSURvZ2RXNWtaV1pwYm1Wa1hHNGdJSDFjYmlBZ01UQXdKU0I3WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nWTJGc1l5Z3lNREJ3ZUNBcklERXdNQ1VwSURBN1hHNGdJSDFjYm1BN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCemEyVnNaWFJ2YmxOMGVXeGxjeUE5SUdOemMyQmNiaUFnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSkh0a1pXWmhkV3gwUW1GelpVTnZiRzl5ZlR0Y2JpQWdZbUZqYTJkeWIzVnVaQzFwYldGblpUb2diR2x1WldGeUxXZHlZV1JwWlc1MEtGeHVJQ0FnSURrd1pHVm5MRnh1SUNBZ0lDUjdaR1ZtWVhWc2RFSmhjMlZEYjJ4dmNuMHNYRzRnSUNBZ0pIdGtaV1poZFd4MFNHbG5hR3hwWjJoMFEyOXNiM0o5TEZ4dUlDQWdJQ1I3WkdWbVlYVnNkRUpoYzJWRGIyeHZjbjFjYmlBZ0tUdGNiaUFnWW1GamEyZHliM1Z1WkMxemFYcGxPaUF5TURCd2VDQXhNREFsTzF4dUlDQmlZV05yWjNKdmRXNWtMWEpsY0dWaGREb2dibTh0Y21Wd1pXRjBPMXh1SUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUEwY0hnN1hHNGdJR1JwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXp0Y2JpQWdiR2x1WlMxb1pXbG5hSFE2SURFN1hHNGdJSGRwWkhSb09pQXhNREFsTzF4dVlEdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdVMnRsYkdWMGIyNG9lMXh1SUNCamIzVnVkQ3hjYmlBZ1pIVnlZWFJwYjI0c1hHNGdJSGRwWkhSb0xGeHVJQ0IzY21Gd2NHVnlPaUJYY21Gd2NHVnlMRnh1SUNCb1pXbG5hSFFzWEc0Z0lHTnBjbU5zWlN4Y2JpQWdaR1ZzWVhrc1hHNGdJSE4wZVd4bE9pQmpkWE4wYjIxVGRIbHNaU3hjYmlBZ1kyeGhjM05PWVcxbE9pQmpkWE4wYjIxRGJHRnpjMDVoYldWY2JuMHBJSHRjYmlBZ1kyOXVjM1FnWld4bGJXVnVkSE1nUFNCYlhUdGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHTnZkVzUwT3lCcEt5c3BJSHRjYmlBZ0lDQnNaWFFnYzNSNWJHVWdQU0I3ZlR0Y2JseHVJQ0FnSUdsbUlDaDNhV1IwYUNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ2MzUjViR1V1ZDJsa2RHZ2dQU0IzYVdSMGFEdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hR1ZwWjJoMElDRTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnpkSGxzWlM1b1pXbG5hSFFnUFNCb1pXbG5hSFE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hkcFpIUm9JQ0U5UFNCdWRXeHNJQ1ltSUdobGFXZG9kQ0FoUFQwZ2JuVnNiQ0FtSmlCamFYSmpiR1VwSUh0Y2JpQWdJQ0FnSUhOMGVXeGxMbUp2Y21SbGNsSmhaR2wxY3lBOUlGd2lOVEFsWENJN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdWMElHTnNZWE56VG1GdFpTQTlJRndpY21WaFkzUXRiRzloWkdsdVp5MXphMlZzWlhSdmJsd2lPMXh1SUNBZ0lHbG1JQ2hqZFhOMGIyMURiR0Z6YzA1aGJXVXBJSHRjYmlBZ0lDQWdJR05zWVhOelRtRnRaU0FyUFNCY0lpQmNJaUFySUdOMWMzUnZiVU5zWVhOelRtRnRaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmxiR1Z0Wlc1MGN5NXdkWE5vS0Z4dUlDQWdJQ0FnUEhOd1lXNWNiaUFnSUNBZ0lDQWdhMlY1UFh0cGZWeHVJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk5zWVhOelRtRnRaWDFjYmlBZ0lDQWdJQ0FnWTNOelBYdGpjM05nWEc0Z0lDQWdJQ0FnSUNBZ0pIdHphMlZzWlhSdmJsTjBlV3hsYzMxY2JpQWdJQ0FnSUNBZ0lDQmhibWx0WVhScGIyNDZJQ1I3YzJ0bGJHVjBiMjVMWlhsbWNtRnRaWE1vWkhWeVlYUnBiMjRzSUdSbGJHRjVLWDBnSkh0a2RYSmhkR2x2YmlBclhHNGdJQ0FnSUNBZ0lDQWdaR1ZzWVhsOWN5QmxZWE5sTFdsdUxXOTFkQ0JwYm1acGJtbDBaVnh1SUNBZ0lDQWdJQ0JnZlZ4dUlDQWdJQ0FnSUNCemRIbHNaVDE3ZTF4dUlDQWdJQ0FnSUNBZ0lDNHVMbU4xYzNSdmJWTjBlV3hsTEZ4dUlDQWdJQ0FnSUNBZ0lDNHVMbk4wZVd4bFhHNGdJQ0FnSUNBZ0lIMTlYRzRnSUNBZ0lDQStYRzRnSUNBZ0lDQWdJQ1o2ZDI1cU8xeHVJQ0FnSUNBZ1BDOXpjR0Z1UGx4dUlDQWdJQ2s3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHh6Y0dGdVBseHVJQ0FnSUNBZ2UxZHlZWEJ3WlhKY2JpQWdJQ0FnSUNBZ1B5QmxiR1Z0Wlc1MGN5NXRZWEFvS0dWc1pXMWxiblFzSUdrcElEMCtJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lEeFhjbUZ3Y0dWeUlHdGxlVDE3YVgwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUh0bGJHVnRaVzUwZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FtZW5kdWFqdGNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlYzSmhjSEJsY2o1Y2JpQWdJQ0FnSUNBZ0lDQXBLVnh1SUNBZ0lDQWdJQ0E2SUdWc1pXMWxiblJ6ZlZ4dUlDQWdJRHd2YzNCaGJqNWNiaUFnS1R0Y2JuMWNibHh1VTJ0bGJHVjBiMjR1WkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNCamIzVnVkRG9nTVN4Y2JpQWdaSFZ5WVhScGIyNDZJREV1TWl4Y2JpQWdkMmxrZEdnNklHNTFiR3dzWEc0Z0lIZHlZWEJ3WlhJNklHNTFiR3dzWEc0Z0lHaGxhV2RvZERvZ2JuVnNiQ3hjYmlBZ1kybHlZMnhsT2lCbVlXeHpaU3hjYmlBZ1pHVnNZWGs2SURCY2JuMDdYRzRpWFgwPSAqL1wiKSksXG4gICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7fSwgY3VzdG9tU3R5bGUsIHt9LCBzdHlsZSlcbiAgICB9LCBcIlxcdTIwMENcIikpO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29yZS5qc3gpKFwic3BhblwiLCBudWxsLCBXcmFwcGVyID8gZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50LCBpKSB7XG4gICAgcmV0dXJuICgwLCBfY29yZS5qc3gpKFdyYXBwZXIsIHtcbiAgICAgIGtleTogaVxuICAgIH0sIGVsZW1lbnQsIFwiXFx1MjAwQ1wiKTtcbiAgfSkgOiBlbGVtZW50cyk7XG59XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY291bnQ6IDEsXG4gIGR1cmF0aW9uOiAxLjIsXG4gIHdpZHRoOiBudWxsLFxuICB3cmFwcGVyOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG4gIGNpcmNsZTogZmFsc2UsXG4gIGRlbGF5OiAwXG59OyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4yJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2dW5kZWZpbmVkXG4gKiB1c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vL1xuLy8gSW4gb3JkZXIgdG8gYXZvaWQgcmVtb3ZpbmcgYW5kIHJlLWFkZGluZyBzdWJzY3JpcHRpb25zIGVhY2ggdGltZSB0aGlzIGhvb2sgaXMgY2FsbGVkLFxuLy8gdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgaG9vayBzaG91bGQgYmUgbWVtb2l6ZWQgaW4gc29tZSB3YXnigJNcbi8vIGVpdGhlciBieSB3cmFwcGluZyB0aGUgZW50aXJlIHBhcmFtcyBvYmplY3Qgd2l0aCB1c2VNZW1vKClcbi8vIG9yIGJ5IHdyYXBwaW5nIHRoZSBpbmRpdmlkdWFsIGNhbGxiYWNrcyB3aXRoIHVzZUNhbGxiYWNrKCkuXG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihfcmVmKSB7XG4gIHZhciBnZXRDdXJyZW50VmFsdWUgPSBfcmVmLmdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZSA9IF9yZWYuc3Vic2NyaWJlO1xuXG4gIC8vIFJlYWQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBvdXIgc3Vic2NyaXB0aW9uLlxuICAvLyBXaGVuIHRoaXMgdmFsdWUgY2hhbmdlcywgd2UnbGwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggUmVhY3QuXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGFsc28gc3RvcmUgdGhlIGhvb2sgcGFyYW1zIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGZvciBzdGFsZW5lc3MuXG4gIC8vIChTZWUgdGhlIGNvbW1lbnQgaW4gY2hlY2tGb3JVcGRhdGVzKCkgYmVsb3cgZm9yIG1vcmUgaW5mby4pXG4gIHZhciBfdXNlU3RhdGUgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogZ2V0Q3VycmVudFZhbHVlKClcbiAgICB9O1xuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHZhbHVlVG9SZXR1cm4gPSBzdGF0ZS52YWx1ZTsgLy8gSWYgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQgc2luY2Ugb3VyIGxhc3QgcmVuZGVyLCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBpdHMgY3VycmVudCB2YWx1ZS5cblxuICBpZiAoc3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgc3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAvLyBJZiB0aGUgc3Vic2NyaXB0aW9uIGhhcyBiZWVuIHVwZGF0ZWQsIHdlJ2xsIHNjaGVkdWxlIGFub3RoZXIgdXBkYXRlIHdpdGggUmVhY3QuXG4gICAgLy8gUmVhY3Qgd2lsbCBwcm9jZXNzIHRoaXMgdXBkYXRlIGltbWVkaWF0ZWx5LCBzbyB0aGUgb2xkIHN1YnNjcmlwdGlvbiB2YWx1ZSB3b24ndCBiZSBjb21taXR0ZWQuXG4gICAgLy8gSXQgaXMgc3RpbGwgbmljZSB0byBhdm9pZCByZXR1cm5pbmcgYSBtaXNtYXRjaGVkIHZhbHVlIHRob3VnaCwgc28gbGV0J3Mgb3ZlcnJpZGUgdGhlIHJldHVybiB2YWx1ZS5cbiAgICB2YWx1ZVRvUmV0dXJuID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVRvUmV0dXJuXG4gICAgfSk7XG4gIH0gLy8gRGlzcGxheSB0aGUgY3VycmVudCB2YWx1ZSBmb3IgdGhpcyBob29rIGluIFJlYWN0IERldlRvb2xzLlxuXG5cbiAgcmVhY3QudXNlRGVidWdWYWx1ZSh2YWx1ZVRvUmV0dXJuKTsgLy8gSXQgaXMgaW1wb3J0YW50IG5vdCB0byBzdWJzY3JpYmUgd2hpbGUgcmVuZGVyaW5nIGJlY2F1c2UgdGhpcyBjYW4gbGVhZCB0byBtZW1vcnkgbGVha3MuXG4gIC8vIChMZWFybiBtb3JlIGF0IHJlYWN0anMub3JnL2RvY3Mvc3RyaWN0LW1vZGUuaHRtbCNkZXRlY3RpbmctdW5leHBlY3RlZC1zaWRlLWVmZmVjdHMpXG4gIC8vIEluc3RlYWQsIHdlIHdhaXQgdW50aWwgdGhlIGNvbW1pdCBwaGFzZSB0byBhdHRhY2ggb3VyIGhhbmRsZXIuXG4gIC8vXG4gIC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGEgcGFzc2l2ZSBlZmZlY3QgKHVzZUVmZmVjdCkgcmF0aGVyIHRoYW4gYSBzeW5jaHJvbm91cyBvbmUgKHVzZUxheW91dEVmZmVjdClcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBzdHJldGNoIHRoZSBjb21taXQgcGhhc2UuXG4gIC8vIFRoaXMgYWxzbyBoYXMgYW4gYWRkZWQgYmVuZWZpdCB3aGVuIG11bHRpcGxlIGNvbXBvbmVudHMgYXJlIHN1YnNjcmliZWQgdG8gdGhlIHNhbWUgc291cmNlOlxuICAvLyBJdCBhbGxvd3MgZWFjaCBvZiB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gc2FmZWx5IHNjaGVkdWxlIHdvcmsgd2l0aG91dCBwb3RlbnRpYWxseSByZW1vdmluZyBhbiBhbm90aGVyIGhhbmRsZXIuXG4gIC8vIChMZWFybiBtb3JlIGF0IGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9rMHl2cjU5NzBvKVxuXG4gIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGV2ZW4gYWZ0ZXIgYmVpbmcgdW5zdWJzY3JpYmVkLFxuICAgICAgLy8gaWYgaXQncyByZW1vdmVkIGFzIGEgcmVzdWx0IG9mIGEgc3Vic2NyaXB0aW9uIGV2ZW50L3VwZGF0ZS5cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgUmVhY3Qgd2lsbCBsb2cgYSBERVYgd2FybmluZyBhYm91dCBhbiB1cGRhdGUgZnJvbSBhbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgY2FuIGF2b2lkIHRyaWdnZXJpbmcgdGhhdCB3YXJuaW5nIHdpdGggdGhpcyBjaGVjay5cbiAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdlIHVzZSBhIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb24gdG8gYXZvaWQgc2NoZWR1bGluZyB3b3JrIGZvciBhIHN0YWxlIHNvdXJjZS5cbiAgICAgIC8vIEhvd2V2ZXIgaXQncyBpbXBvcnRhbnQgdG8gZWFnZXJseSByZWFkIHRoZSBjdXJyZW50bHkgdmFsdWUsXG4gICAgICAvLyBzbyB0aGF0IGFsbCBzY2hlZHVsZWQgd29yayBzaGFyZXMgdGhlIHNhbWUgdmFsdWUgKGluIHRoZSBldmVudCBvZiBtdWx0aXBsZSBzdWJzY3JpcHRpb25zKS5cbiAgICAgIC8vIFRoaXMgYXZvaWRzIHZpc3VhbCBcInRlYXJpbmdcIiB3aGVuIGEgbXV0YXRpb24gaGFwcGVucyBkdXJpbmcgYSAoY29uY3VycmVudCkgcmVuZGVyLlxuXG5cbiAgICAgIHZhciB2YWx1ZSA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAvLyBJZ25vcmUgdmFsdWVzIGZyb20gc3RhbGUgc291cmNlcyFcbiAgICAgICAgLy8gU2luY2Ugd2Ugc3Vic2NyaWJlIGFuIHVuc3Vic2NyaWJlIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBmb3IgYSBzdGFsZSAocHJldmlvdXMpIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBhdm9pZHMgc2NoZWR1bGluZyBhbiB1cGRhdGUgZm9yIHRoYXQgc3RhbGUgc3Vic2NyaXB0aW9uLlxuICAgICAgICBpZiAocHJldlN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHByZXZTdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH0gLy8gU29tZSBzdWJzY3JpcHRpb25zIHdpbGwgYXV0by1pbnZva2UgdGhlIGhhbmRsZXIsIGV2ZW4gaWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLlxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIG5vIHVwZGF0ZSBpcyBuZWVkZWQuXG4gICAgICAgIC8vIFJldHVybiBzdGF0ZSBhcy1pcyBzbyBSZWFjdCBjYW4gYmFpbCBvdXQgYW5kIGF2b2lkIGFuIHVubmVjZXNzYXJ5IHJlbmRlci5cblxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGNoZWNrRm9yVXBkYXRlcyk7IC8vIEJlY2F1c2Ugd2UncmUgc3Vic2NyaWJpbmcgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgYW4gdXBkYXRlIGhhcyBvY2N1cnJlZCBiZXR3ZWVuIHJlbmRlciBhbmQgb3VyIGVmZmVjdCBoYW5kbGVyLlxuICAgIC8vIENoZWNrIGZvciB0aGlzIGFuZCBzY2hlZHVsZSBhbiB1cGRhdGUgaWYgd29yayBoYXMgb2NjdXJyZWQuXG5cbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZ2V0Q3VycmVudFZhbHVlLCBzdWJzY3JpYmVdKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGZvciBvdXIgY2FsbGVyIHRvIHVzZSB3aGlsZSByZW5kZXJpbmcuXG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59XG5cbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
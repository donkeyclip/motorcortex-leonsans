import MC from '@donkeyclip/motorcortex';

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$y = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$h = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$g = fails$h; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var call$9 = Function.prototype.call;
var functionCall = call$9.bind ? call$9.bind(call$9) : function () {
  return call$9.apply(call$9, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var FunctionPrototype$2 = Function.prototype;
var bind$3 = FunctionPrototype$2.bind;
var call$8 = FunctionPrototype$2.call;
var callBind = bind$3 && bind$3.bind(call$8);
var functionUncurryThis = bind$3 ? function (fn) {
  return fn && callBind(call$8, fn);
} : function (fn) {
  return fn && function () {
    return call$8.apply(fn, arguments);
  };
};

var uncurryThis$l = functionUncurryThis;
var toString$6 = uncurryThis$l({}.toString);
var stringSlice$3 = uncurryThis$l(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$3(toString$6(it), 8, -1);
};

var global$x = global$y;
var uncurryThis$k = functionUncurryThis;
var fails$f = fails$h;
var classof$7 = classofRaw$1;
var Object$4 = global$x.Object;
var split = uncurryThis$k(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$f(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$w = global$y;
var TypeError$a = global$w.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$4 = function (it) {
  if (it == undefined) throw TypeError$a("Can't call method on " + it);
  return it;
};

var IndexedObject$3 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;

var toIndexedObject$6 = function (it) {
  return IndexedObject$3(requireObjectCoercible$3(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$c = function (argument) {
  return typeof argument == 'function';
};

var isCallable$b = isCallable$c;

var isObject$9 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it);
};

var global$v = global$y;
var isCallable$a = isCallable$c;

var aFunction = function (argument) {
  return isCallable$a(argument) ? argument : undefined;
};

var getBuiltIn$6 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$v[namespace]) : global$v[namespace] && global$v[namespace][method];
};

var uncurryThis$j = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$j({}.isPrototypeOf);

var getBuiltIn$5 = getBuiltIn$6;
var engineUserAgent = getBuiltIn$5('navigator', 'userAgent') || '';

var global$u = global$y;
var userAgent = engineUserAgent;
var process = global$u.process;
var Deno = global$u.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$e = fails$h; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$e(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$t = global$y;
var getBuiltIn$4 = getBuiltIn$6;
var isCallable$9 = isCallable$c;
var isPrototypeOf$1 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$t.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$4('Symbol');
  return isCallable$9($Symbol) && isPrototypeOf$1($Symbol.prototype, Object$3(it));
};

var global$s = global$y;
var String$3 = global$s.String;

var tryToString$2 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$r = global$y;
var isCallable$8 = isCallable$c;
var tryToString$1 = tryToString$2;
var TypeError$9 = global$r.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$2 = function (argument) {
  if (isCallable$8(argument)) return argument;
  throw TypeError$9(tryToString$1(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$2 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$1(func);
};

var global$q = global$y;
var call$7 = functionCall;
var isCallable$7 = isCallable$c;
var isObject$8 = isObject$9;
var TypeError$8 = global$q.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$8(val = call$7(fn, input))) return val;
  if (isCallable$7(fn = input.valueOf) && !isObject$8(val = call$7(fn, input))) return val;
  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$8(val = call$7(fn, input))) return val;
  throw TypeError$8("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$p = global$y; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty$1 = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty$1(global$p, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$p[key] = value;
  }

  return value;
};

var global$o = global$y;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$o[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.0',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var global$n = global$y;
var requireObjectCoercible$2 = requireObjectCoercible$4;
var Object$2 = global$n.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$5 = function (argument) {
  return Object$2(requireObjectCoercible$2(argument));
};

var uncurryThis$i = functionUncurryThis;
var toObject$4 = toObject$5;
var hasOwnProperty = uncurryThis$i({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$4(it), key);
};

var uncurryThis$h = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$h(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
};

var global$m = global$y;
var shared$3 = shared$4.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$m.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$b = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$l = global$y;
var call$6 = functionCall;
var isObject$7 = isObject$9;
var isSymbol$1 = isSymbol$2;
var getMethod$1 = getMethod$2;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$a = wellKnownSymbol$b;
var TypeError$7 = global$l.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$a('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$7(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$7(result) || isSymbol$1(result)) return result;
    throw TypeError$7("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$k = global$y;
var isObject$6 = isObject$9;
var document$1 = global$k.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$6 = descriptors;
var fails$d = fails$h;
var createElement = documentCreateElement$2; // Thank's IE8 for his funny defineProperty

var ie8DomDefine = !DESCRIPTORS$6 && !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$5 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$5 = toIndexedObject$6;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$5(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$5(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var global$j = global$y;
var isObject$5 = isObject$9;
var String$2 = global$j.String;
var TypeError$6 = global$j.TypeError; // `Assert: Type(argument) is Object`

var anObject$9 = function (argument) {
  if (isObject$5(argument)) return argument;
  throw TypeError$6(String$2(argument) + ' is not an object');
};

var global$i = global$y;
var DESCRIPTORS$4 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$8 = anObject$9;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$5 = global$i.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$4 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey$1(P);
  anObject$8(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$5('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$3 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$5 = DESCRIPTORS$3 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$4 = {exports: {}};

var uncurryThis$g = functionUncurryThis;
var isCallable$6 = isCallable$c;
var store$1 = sharedStore;
var functionToString = uncurryThis$g(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$h = global$y;
var isCallable$5 = isCallable$c;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$h.WeakMap;
var nativeWeakMap = isCallable$5(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;
var keys = shared$2('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$g = global$y;
var uncurryThis$f = functionUncurryThis;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$4 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = global$g.TypeError;
var WeakMap = global$g.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$f(store.get);
  var wmhas = uncurryThis$f(store.has);
  var wmset = uncurryThis$f(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$2 = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || DESCRIPTORS$2 && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$f = global$y;
var isCallable$4 = isCallable$c;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$1 = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$4.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$4(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$3(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$f) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$3(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$4(this) && getInternalState$1(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max$2 = Math.max;
var min$2 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$4 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min$1 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$6 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$4 = toIndexedObject$6;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$5 = lengthOfArrayLike$6; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$5(O);
    var index = toAbsoluteIndex$3(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var uncurryThis$e = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$6;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$2 = uncurryThis$e([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$2(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }

  return result;
};

var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$3 = getBuiltIn$6;
var uncurryThis$d = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$7 = anObject$9;
var concat$1 = uncurryThis$d([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$c = fails$h;
var isCallable$3 = isCallable$c;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$3(detection) ? fails$c(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$e = global$y;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var redefine$3 = redefine$4.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$e;
  } else if (STATIC) {
    target = global$e[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$e[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
    } // extend global


    redefine$3(target, key, sourceProperty, options);
  }
};

var uncurryThis$c = functionUncurryThis;
var aCallable = aCallable$2;
var bind$2 = uncurryThis$c(uncurryThis$c.bind); // optional / simple context binding

var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind$2 ? bind$2(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var classof$6 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$6(argument) == 'Array';
};

var wellKnownSymbol$9 = wellKnownSymbol$b;
var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$d = global$y;
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$2 = isCallable$c;
var classofRaw = classofRaw$1;
var wellKnownSymbol$8 = wellKnownSymbol$b;
var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');
var Object$1 = global$d.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
};

var uncurryThis$b = functionUncurryThis;
var fails$b = fails$h;
var isCallable$1 = isCallable$c;
var classof$4 = classof$5;
var getBuiltIn$2 = getBuiltIn$6;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$3 = uncurryThis$b(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;

  switch (classof$4(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$3(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$3 = !construct || fails$b(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$c = global$y;
var isArray$2 = isArray$3;
var isConstructor$2 = isConstructor$3;
var isObject$3 = isObject$9;
var wellKnownSymbol$7 = wellKnownSymbol$b;
var SPECIES$4 = wellKnownSymbol$7('species');
var Array$4 = global$c.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$2(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$2(C) && (C === Array$4 || isArray$2(C.prototype))) C = undefined;else if (isObject$3(C)) {
      C = C[SPECIES$4];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$4 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$1 = functionBindContext;
var uncurryThis$a = functionUncurryThis;
var IndexedObject$2 = indexedObject;
var toObject$3 = toObject$5;
var lengthOfArrayLike$4 = lengthOfArrayLike$6;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var push$1 = uncurryThis$a([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$3($this);
    var self = IndexedObject$2(O);
    var boundFunction = bind$1(callbackfn, that);
    var length = lengthOfArrayLike$4(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$1;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            push$1(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            push$1(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$1(7)
};

var fails$a = fails$h;
var wellKnownSymbol$6 = wellKnownSymbol$b;
var V8_VERSION$1 = engineV8Version;
var SPECIES$3 = wellKnownSymbol$6('species');

var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$a(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$3] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$8 = _export;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('filter'); // `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species

$$8({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$3 = classof$5; // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring

var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$3(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var redefine$2 = redefine$4.exports;
var toString$4 = objectToString; // `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring

if (!TO_STRING_TAG_SUPPORT) {
  redefine$2(Object.prototype, 'toString', toString$4, {
    unsafe: true
  });
}

var global$b = global$y;
var classof$2 = classof$5;
var String$1 = global$b.String;

var toString$3 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var anObject$6 = anObject$9; // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

var regexpFlags$1 = function () {
  var that = anObject$6(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var uncurryThis$9 = functionUncurryThis;
var PROPER_FUNCTION_NAME = functionName.PROPER;
var redefine$1 = redefine$4.exports;
var anObject$5 = anObject$9;
var isPrototypeOf = objectIsPrototypeOf;
var $toString = toString$3;
var fails$9 = fails$h;
var regExpFlags = regexpFlags$1;
var TO_STRING = 'toString';
var RegExpPrototype$1 = RegExp.prototype;
var n$ToString = RegExpPrototype$1[TO_STRING];
var getFlags = uncurryThis$9(regExpFlags);
var NOT_GENERIC = fails$9(function () {
  return n$ToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
}); // FF44- RegExp#toString has a wrong name

var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING; // `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring

if (NOT_GENERIC || INCORRECT_NAME) {
  redefine$1(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$5(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype$1, R) && !('flags' in RegExpPrototype$1) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, {
    unsafe: true
  });
}

// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var documentCreateElement$1 = documentCreateElement$2;
var classList = documentCreateElement$1('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var fails$8 = fails$h;

var arrayMethodIsStrict$3 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$8(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;
var STRICT_METHOD$2 = arrayMethodIsStrict$2('forEach'); // `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach

var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn
/* , thisArg */
) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

var global$a = global$y;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var forEach = arrayForEach;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty$1(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global$a[COLLECTION_NAME] && global$a[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);

var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this.handlers_ = {
      update: {
        listeners: []
      }
    };
  }

  _createClass(Dispatcher, [{
    key: "on",
    value: function on(event, callback) {
      if (typeof callback !== "function") {
        console.error("The listener callback must be a function, the given type is ".concat(_typeof(callback)));
        return false;
      }

      if (typeof event !== "string") {
        console.error("The event name must be a string, the given type is ".concat(_typeof(event)));
        return false;
      }

      if (this.handlers_[event] === undefined) {
        this.handlers_[event] = {
          listeners: []
        };
      }

      this.handlers_[event].listeners.push(callback);
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.handlers_[event] === undefined) {
        console.error("This event: ".concat(event, " does not exist"));
        return false;
      }

      this.handlers_[event].listeners = this.handlers_[event].listeners.filter(function (listener) {
        return listener.toString() !== callback.toString();
      });
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, data) {
      this.handlers_[event].listeners.forEach(function (listener) {
        listener(data);
      });
    }
  }]);

  return Dispatcher;
}();

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$3 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var uncurryThis$8 = functionUncurryThis;
var arraySlice$1 = uncurryThis$8([].slice);

var $$7 = _export;
var global$9 = global$y;
var isArray$1 = isArray$3;
var isConstructor$1 = isConstructor$3;
var isObject$2 = isObject$9;
var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$3 = lengthOfArrayLike$6;
var toIndexedObject$2 = toIndexedObject$6;
var createProperty$2 = createProperty$3;
var wellKnownSymbol$5 = wellKnownSymbol$b;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;
var un$Slice = arraySlice$1;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('slice');
var SPECIES$2 = wellKnownSymbol$5('species');
var Array$3 = global$9.Array;
var max$1 = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$$7({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject$2(this);
    var length = lengthOfArrayLike$3(O);
    var k = toAbsoluteIndex$2(start, length);
    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray$1(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (isConstructor$1(Constructor) && (Constructor === Array$3 || isArray$1(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$2(Constructor)) {
        Constructor = Constructor[SPECIES$2];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array$3 || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array$3 : Constructor)(max$1(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var DEFAULT_FONT_SIZE = 500;
var MIN_FONT_WEIGHT = 1;
var MAX_FONT_WEIGHT = 900;
var MAX_LINE_WIDTH = 70;
var FONT_WEIGHT_LIMIT = 80;
var FR_1 = 1;
var FR_2 = 0.78;
var RECT_RATIO = 0.49;
var MAX_SHAKE = 120;
var PI2$1 = 2 * Math.PI;
function getAmplitude(amplitude, scale) {
  return MAX_SHAKE * amplitude * scale;
}
function getFontW(weight) {
  return (MAX_LINE_WIDTH - MIN_FONT_WEIGHT) / (MAX_FONT_WEIGHT - MIN_FONT_WEIGHT) * (weight - MIN_FONT_WEIGHT) + MIN_FONT_WEIGHT;
}
function getWeightRatio(fontW) {
  return 1 / (FONT_WEIGHT_LIMIT - MIN_FONT_WEIGHT) * (fontW - MIN_FONT_WEIGHT);
}
function getCircleRound(fontW) {
  return (58 - 4) / (FONT_WEIGHT_LIMIT - MIN_FONT_WEIGHT) * (fontW - MIN_FONT_WEIGHT) + 4;
}
function getScale(size) {
  return size / DEFAULT_FONT_SIZE;
}
function getLineW(fontW, scale) {
  var lw = fontW * scale;
  if (lw < 1) lw = 1; //if (weight == 1) lw = 1

  return lw;
}
function getTracking(tracking, scale) {
  return tracking * 50 * scale;
}
function getLeading(leading, scale) {
  return leading * 50 * scale;
}
function getFontRatio(weightRatio) {
  return (FR_2 - FR_1) * weightRatio + FR_1;
}
function getRect(d, scale) {
  var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var w = d.rect.w * RECT_RATIO * scale;
  var h = (d.rect.h + 220) * RECT_RATIO * scale;
  return {
    x: x,
    y: y,
    w: w,
    h: h
  };
}
/**
 * @name getGap
 * @property {Object} - typo data object from 'font/index.js'
 * @property {Number} - weightRatio
 * @returns {Object} the gap x and y
 * @description get a typo gap from thin to bold weight
 */

/*
export function getGap(d, weightRatio) {
    const gx1 = d.ratio.x1
    const gx2 = d.ratio.x2
    const gy1 = d.ratio.y1
    const gy2 = d.ratio.y2
    const x = (gx2 - gx1) * weightRatio + gx1
    const y = (gy2 - gy1) * weightRatio + gy1
    return {
        x: x,
        y: y
    }
}
*/

/**
 * @name getCenter
 * @property {Number} - typo rect width
 * @property {Number} - typo rect height
 * @property {Number} - typo scale
 * @returns {Object} center position x and y
 * @description get a center position of a typo
 */

function getCenter(w, h, scale) {
  var x = w / 2;
  var y = (h - (220 - 90) * RECT_RATIO * scale) / 2;
  return {
    x: x,
    y: y
  };
}
/**
 * @name getRange
 * @property {Object} - typo data object from 'font/index.js'
 * @property {Number} - weightRatio
 * @property {Number} - circleRound
 * @returns {Object} ratio range
 * @description save ratio range to control each line's coordinate
 */

function getRange(d, weightRatio, circleRound) {
  var gx1 = d.ratio.x1;
  var gx2 = d.ratio.x2;
  var gy1 = d.ratio.y1;
  var gy2 = d.ratio.y2;
  return {
    r: weightRatio,
    cr: circleRound,
    fr1: FR_1,
    fr2: FR_2,
    gx1: gx1,
    gx2: gx2,
    gy1: gy1,
    gy2: gy2
  };
}
function getCurrent(v, vmax, vmin, max, min) {
  var value = (max - min) / (vmax - vmin) * (v - vmin) + min;
  if (value < min) value = min;else if (value > max) value = max;
  return value;
}
function getLines(data) {
  var total = data.typo.p.length;
  var lines = [];
  var i, j, k, j_total;
  var d2, d3, cp, dir, lt, ltRatio, prevRatio;

  for (i = 0; i < total; i++) {
    d2 = data.typo.p[i];
    j_total = d2.cv.length;

    for (j = 0; j < j_total; j++) {
      d3 = d2.cv[j]; // add current position to all points

      cp = d3.addRect(data.rect);
      dir = d2.d;
      lt = data.pointsLength.lengths[i];
      ltRatio = lt / data.pointsLength.max;
      prevRatio = 0;

      if (i > 0) {
        for (k = 0; k < i; k++) {
          prevRatio += data.pointsLength.lengths[k] / data.pointsLength.max;
        }
      }

      ltRatio += prevRatio;
      lines.push({
        pos: cp,
        drawing: data.drawing,
        direction: dir,
        lengths: lt,
        maxDrawing: ltRatio,
        minDrawing: prevRatio,
        closePath: d3.ratio.c,
        stroke: function stroke(ctx, d) {
          var dv = getCurrent(d.drawing.value, d.maxDrawing, d.minDrawing, 1, 0); //if (d.direction == 1) {
          //    dv = getCurrent(1 - d.drawing.value, d.minDrawing, d.maxDrawing, 1, 0);
          //}

          if (dv > 0 && d.pos.type != "a") {
            var frac = d.lengths * dv;
            ctx.setLineDash([d.lengths]);
            ctx.lineDashOffset = d.direction * (frac + d.lengths);
            ctx.stroke();
          }
        }
      });
    }
  }

  return lines;
}
function addRectToPaths(path, data) {
  var total = path.length;
  var arr = [];
  var i, cp, p;

  for (i = 0; i < total; i++) {
    p = path[i];
    cp = p.addRect(data.rect);
    arr.push(cp);
  }

  return arr;
}
function shuffle(oldArray) {
  var newArray = oldArray.slice(),
      len = newArray.length;
  var i = len,
      p,
      t;

  while (i--) {
    p = Math.random() * len | 0;
    t = newArray[i];
    newArray[i] = newArray[p];
    newArray[p] = t;
  }

  return newArray;
}

var toObject$2 = toObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$2 = lengthOfArrayLike$6; // `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill

var arrayFill = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject$2(this);
  var length = lengthOfArrayLike$2(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$1(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$1(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$1 = descriptors;
var definePropertyModule$1 = objectDefineProperty;
var anObject$4 = anObject$9;
var toIndexedObject$1 = toIndexedObject$6;
var objectKeys$1 = objectKeys$2; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

var objectDefineProperties = DESCRIPTORS$1 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn$1 = getBuiltIn$6;
var html$1 = getBuiltIn$1('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$3 = anObject$9;
var defineProperties = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$2;
var sharedKey = sharedKey$2;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

var wellKnownSymbol$4 = wellKnownSymbol$b;
var create$1 = objectCreate;
var definePropertyModule = objectDefineProperty;
var UNSCOPABLES = wellKnownSymbol$4('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
} // add a key to Array.prototype[@@unscopables]


var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $$6 = _export;
var fill = arrayFill;
var addToUnscopables = addToUnscopables$1; // `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill

$$6({
  target: 'Array',
  proto: true
}, {
  fill: fill
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('fill');

function Lines(ctx, data) {
  var total = data.lines.length;
  var i, d, pos;

  for (i = 0; i < total; i++) {
    d = data.lines[i];
    pos = d.pos;

    if (pos.type == "a") {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, pos.radius * d.drawing.value, 0, PI2$1);
      ctx.fill();
      ctx.closePath();
    } else if (pos.type == "m") {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    } else if (pos.type == "l") {
      ctx.lineTo(pos.x, pos.y);
    } else if (pos.type == "b") {
      ctx.bezierCurveTo(pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);
    }

    d.stroke(ctx, d);
  }
}

function Points(ctx, data) {
  ctx.save();
  ctx.lineWidth = 1;
  var total = data.lines.length;
  var i;

  for (i = 0; i < total; i++) {
    eachLine_$1(ctx, data.lines[i]);
  }

  ctx.restore();
  ctx.save();
  ctx.lineWidth = 1;
  total = data.typo.p.length;

  for (i = 0; i < total; i++) {
    eachPoint_(ctx, data.typo.p[i], data);
  }

  ctx.restore();
}

function eachPoint_(ctx, p, data) {
  var total = p.v.length;
  var i, mp, cp;

  for (i = 0; i < total; i++) {
    mp = p.cv[i];
    cp = mp.addRect(data.rect);

    if (mp.type == "b") {
      ctx.fillStyle = "#ff2a00";
      ctx.beginPath();
      ctx.arc(cp.x3 + (cp.x3 - cp.x2), cp.y3 + (cp.y3 - cp.y2), 1.5, 0, PI2$1);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cp.x2, cp.y2, 1.5, 0, PI2$1);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cp.x2, cp.y2);
      ctx.lineTo(cp.x3, cp.y3);
      ctx.lineTo(cp.x3 + (cp.x3 - cp.x2), cp.y3 + (cp.y3 - cp.y2));
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.arc(cp.x3, cp.y3, 2.5, 0, PI2$1);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#ff2a00";
      ctx.arc(cp.x, cp.y, 2.5, 0, PI2$1);
      ctx.fill();
      ctx.stroke();
    }
  }
}

function eachLine_$1(ctx, d) {
  var pos = d.pos;

  if (pos.type != "a") {
    if (pos.type == "m") {
      ctx.strokeStyle = "#ff2a00";
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    } else if (pos.type == "l") {
      ctx.lineTo(pos.x, pos.y);
    } else if (pos.type == "b") {
      ctx.bezierCurveTo(pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);
    }

    ctx.stroke();
  }
}

function Grids(ctx, data) {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#aaaaaa";
  var total = data.guide.length;
  var i, grid;

  for (i = 0; i < total; i++) {
    grid = data.rect.y + data.grid[i];
    ctx.moveTo(data.rect.x, grid);
    ctx.lineTo(data.rect.x + data.rect.w, grid);
  }

  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.strokeStyle = "#aaaaaa";
  ctx.rect(data.rect.x, data.rect.y, data.rect.w, data.rect.h);
  ctx.stroke();
  ctx.restore();
}

var THIN_LIMIT = 110;
var COS = Math.cos;
var SIN = Math.sin;
function Wave(ctx, data, scale, amplitude, weight, fps) {
  var total = data.wavePaths.length;
  var m_amplitude = getAmplitude(amplitude, scale);
  var i, p, prev, qx, qy;
  var saveDot = [];
  ctx.beginPath();

  for (i = 0; i < total; i++) {
    p = data.wavePaths[i];

    if (fps) {
      var ranx = Math.random() * m_amplitude - m_amplitude / 2;
      var rany = Math.random() * m_amplitude - m_amplitude / 2;
      p.rx = p.x + ranx * COS(p.rotation);
      p.ry = p.y + ranx * SIN(p.rotation);
      p.sx = p.x + ranx;
      p.sy = p.y + rany;
    }

    if (p.type == "a") {
      saveDot.push(p);
    } else if (p.start == 1) {
      ctx.moveTo(p.x, p.y);
    } else if (p.fix) {
      ctx.lineTo(p.x, p.y);
    } else {
      if (weight < THIN_LIMIT) {
        prev = data.wavePaths[i - 1];

        if (prev) {
          qx = prev.x + (p.x - prev.x) * 0.5;
          qy = prev.y + (p.y - prev.y) * 0.5;
          ctx.quadraticCurveTo(qx, qy, p.rx, p.ry);
        }
      } else {
        ctx.lineTo(p.rx, p.ry);
      }
    }
  }

  ctx.stroke();

  for (i = 0; i < saveDot.length; i++) {
    p = saveDot[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, PI2$1);
    ctx.fill();
  }
}

function Pattern(ctx, data, w, h) {
  var total = Math.round(data.paths.length * data.drawing.value);
  var w2 = w / 2;
  var w3 = w / 3;
  var h2 = h / 2;
  var i, p;

  for (i = 0; i < total; i++) {
    p = data.paths[i];

    if (p.num == 1) {
      ctx.fillStyle = "#ff00c5";
    } else {
      ctx.fillStyle = "#ff95f8";
    }

    if (p.type == "a") {
      ctx.beginPath();
      ctx.arc(p.x, p.y, w3, 0, PI2$1);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillRect(-w2, -h2, w, h);
      ctx.restore();
    }
  }
}

function Color(ctx, no, data, color) {
  var c_total = color.length;
  var cur = (no + c_total * (Math.abs(no / 10 | 0) + 1)) % c_total;

  if (Array.isArray(color[cur])) {
    c_total = color[cur].length;
    var vv = 1 / (c_total + 1);
    var g = ctx.createLinearGradient(data.rect.x, data.rect.y, data.rect.x, data.rect.y + data.rect.h);
    var i;
    g.addColorStop(vv, color[cur][0]);

    for (i = 0; i < c_total; i++) {
      g.addColorStop(vv * (i + 1), color[cur][i]);
    }

    g.addColorStop(vv * (c_total + 1), color[cur][c_total - 1]);
    ctx.strokeStyle = g;
    ctx.fillStyle = g;
  } else {
    ctx.strokeStyle = color[cur];
    ctx.fillStyle = color[cur];
  }
}

function getLengths(item, model) {
  var total = item.typo.p.length;
  var c,
      p,
      max = 0,
      i;
  var arr = [],
      lt = [];

  for (i = 0; i < total; i++) {
    p = item.typo.p[i];
    c = getEachPath(item, p.v, model);
    max += c.l;
    arr.push(c.v);
    lt.push(c.l);
  }

  return {
    max: max,
    lines: arr,
    lengths: lt
  };
}

function getEachPath(item, points, model) {
  var total = points.length;
  var i,
      p,
      line,
      cp1,
      cp2,
      prev,
      length = 0;
  var lines = [];

  for (i = 0; i < total; i++) {
    p = points[i];
    line = {};
    cp2 = p.convert(item, model);

    if (i == 0 || p.type == "a") {
      line.x1 = cp2.x;
      line.y1 = cp2.y;
      line.distance = 0;
      line.radius = cp2.radius;
    } else {
      cp1 = prev.convert(item, model);

      if (prev.type == "b") {
        line.x1 = cp1.x3;
        line.y1 = cp1.y3;
      } else {
        line.x1 = cp1.x;
        line.y1 = cp1.y;
      }

      line.x2 = cp2.x;
      line.y2 = cp2.y;

      if (p.type == "b") {
        line.x3 = cp2.x2;
        line.y3 = cp2.y2;
        line.x4 = cp2.x3;
        line.y4 = cp2.y3;
        line.distance = cubicBezierLength(line.x1, line.y1, line.x2, line.y2, line.x3, line.y3, line.x4, line.y4);
      } else {
        line.distance = distance(line.x1, line.y1, line.x2, line.y2);
      }
    }

    line.type = p.type;
    line.rotation = p.ratio.r;
    line.pat = p.ratio.p;
    line.fix = p.ratio.f;
    line.vt = p.ratio.v;
    lines.push(line);
    length += line.distance;
    prev = p;
  }

  return {
    v: lines,
    l: length
  };
}

function cubicBezierLength(x1, y1, x2, y2, x3, y3, x4, y4, sampleCount) {
  var ptCount = sampleCount || 40;
  var totDist = 0;
  var lastX = x1;
  var lastY = y1;
  var dx, dy, i, pt;

  for (i = 1; i < ptCount; i++) {
    pt = cubicQxy(i / ptCount, x1, y1, x2, y2, x3, y3, x4, y4);
    dx = pt.x - lastX;
    dy = pt.y - lastY;
    totDist += Math.sqrt(dx * dx + dy * dy);
    lastX = pt.x;
    lastY = pt.y;
  }

  dx = x4 - lastX;
  dy = y4 - lastY;
  totDist += Math.sqrt(dx * dx + dy * dy);
  return totDist;
}

function cubicQxy(t, x1, y1, x2, y2, x3, y3, x4, y4) {
  x1 += (x2 - x1) * t;
  x2 += (x3 - x2) * t;
  x3 += (x4 - x3) * t;
  x1 += (x2 - x1) * t;
  x2 += (x3 - x2) * t;
  y1 += (y2 - y1) * t;
  y2 += (y3 - y2) * t;
  y3 += (y4 - y3) * t;
  y1 += (y2 - y1) * t;
  y2 += (y3 - y2) * t;
  return {
    x: x1 + (x2 - x1) * t,
    y: y1 + (y2 - y1) * t
  };
}

function distance(x1, y1, x2, y2) {
  var a = x2 - x1,
      b = y2 - y1;
  return Math.sqrt(a * a + b * b);
}

var colorArr;
var curColor = -1;
var colorTotal;
var MIN_DISTANCE = 10;
function Colorful(ctx, model, colors) {
  curColor = -1;
  colorArr = colors;
  colorTotal = colorArr.length;
  var total = model.data.length;
  var i, d, j, j_total, line, pos, prev;
  var max, length, prevRatio;

  for (i = 0; i < total; i++) {
    d = model.data[i];
    max = d.pointsLength.max;
    prevRatio = 0;
    j_total = d.lines.length;
    prev = null;

    for (j = 0; j < j_total; j++) {
      line = d.lines[j];
      pos = line.pos;

      if (pos.type == "a") {
        setColor(ctx);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pos.radius * d.drawing.value, 0, PI2$1);
        ctx.fill();
        ctx.closePath();
      } else if (pos.type == "m") {
        prev = pos;
      } else if (pos.type == "l") {
        length = distance(prev.x, prev.y, pos.x, pos.y);

        if (length / model.scale > MIN_DISTANCE) {
          // ignore short distance paths
          setColor(ctx);
          ctx.beginPath();
          if (prev) ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(pos.x, pos.y);
          prevRatio += draw(ctx, line, length, max, d, prevRatio);
        }

        prev = pos;
      } else if (pos.type == "b") {
        length = cubicBezierLength(prev.x, prev.y, pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);

        if (length / model.scale > MIN_DISTANCE) {
          setColor(ctx);
          ctx.beginPath();
          if (prev) ctx.moveTo(prev.x, prev.y);
          ctx.bezierCurveTo(pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);
          prevRatio += draw(ctx, line, length, max, d, prevRatio);
        }

        prev = {
          x: pos.x3,
          y: pos.y3
        };
      }
    }
  }
}

function setColor(ctx) {
  var color = getColor();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
}

function getColor() {
  curColor++;
  if (curColor == colorTotal) curColor = 0;
  return colorArr[curColor];
}

function draw(ctx, line, length, max, d, prevRatio) {
  var ltRatio = length / max;
  var dv = getCurrent(d.drawing.value, prevRatio + ltRatio, prevRatio, 1, 0);

  if (line.direction == 1) {
    dv = getCurrent(1 - d.drawing.value, prevRatio, prevRatio + ltRatio, 1, 0);
  }

  if (dv > 0) {
    var frac = length * dv;
    ctx.setLineDash([length]);
    ctx.lineDashOffset = line.direction * (frac + length);
    ctx.stroke();
  }

  return ltRatio;
}

function PixiLines(graphics, data, lineW, color) {
  var total, i;

  if (data.drawing.value == 1) {
    total = data.lines.length;

    for (i = 0; i < total; i++) {
      eachLine_(graphics, data.lines[i], lineW, color);
    }
  } else {
    total = data.drawingPaths.length * data.drawing.value;

    for (i = 0; i < total; i++) {
      eachPath_(graphics, data.drawingPaths[i], lineW, color, data.drawing.value);
    }
  }
}

function eachLine_(graphics, data, lineW, color) {
  var pos = data.pos;

  if (pos.type == "a") {
    graphics.lineStyle(0, color, 0);
    graphics.beginFill(color);
    graphics.drawCircle(pos.x, pos.y, pos.radius);
    graphics.endFill();
  } else if (pos.type == "m") {
    graphics.lineStyle(lineW, color, 1);
    graphics.moveTo(pos.x, pos.y);
  } else if (pos.type == "l") {
    graphics.lineTo(pos.x, pos.y);
  } else if (pos.type == "b") {
    graphics.bezierCurveTo(pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);
  }

  if (data.closePath) {
    graphics.closePath();
  }
}

function eachPath_(graphics, pos, lineW, color, dValue) {
  if (pos.type == "a") {
    graphics.lineStyle(0, color, 0);
    graphics.beginFill(color);
    graphics.drawCircle(pos.x, pos.y, pos.radius * dValue);
    graphics.endFill();
  } else {
    if (pos.start == 1) {
      graphics.lineStyle(lineW, color, 1);
      graphics.moveTo(pos.x, pos.y);
    } else {
      graphics.lineTo(pos.x, pos.y, 1);
    }
  }
}

function PixiColor(no, data, color) {
  var c_total = color.length;
  var cur = (no + c_total * (Math.abs(no / 10 | 0) + 1)) % c_total;

  if (Array.isArray(color[cur])) ; else {
    return color[cur];
  }
}

/**
 * @name getGuide
 * @property {Object} - typo data object from 'font/index.js'
 * @property {Number} - scale
 * @returns {Object} the guide pos array
 * @description get a guide pos
 */

function getGuide(d, scale) {
  var guide = [],
      ggap = 10;
  var i, gvx, gvy;

  for (i = 0; i < 6; i++) {
    gvx = ggap * i + 20;
    gvy = ggap * i + 90;
    guide[i] = {
      x1: gvx * RECT_RATIO * scale,
      x2: (d.rect.w - gvx * 2) * RECT_RATIO * scale,
      y1: gvy * RECT_RATIO * scale,
      y2: (d.rect.h - gvy) * RECT_RATIO * scale - i * ggap * RECT_RATIO * scale
    };
  }

  return guide;
}
/**
 * @name getGuide
 * @property {Object} - typo data object from 'font/index.js'
 * @property {Number} - scale
 * @returns {Object} the guide pos array
 * @description get a guide pos
 */

function getGrid(d, scale) {
  var grid = [],
      gvy = [98, 340, 815];
  var i;

  for (i = 0; i < 3; i++) {
    grid[i] = gvy[i] * RECT_RATIO * scale;
  }

  return grid;
}

/* eslint-disable es/no-array-prototype-indexof -- required for testing */


var $$5 = _export;
var uncurryThis$7 = functionUncurryThis;
var $IndexOf = arrayIncludes.indexOf;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$3;
var un$IndexOf = uncurryThis$7([].indexOf);
var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD$1 = arrayMethodIsStrict$1('indexOf'); // `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof

$$5({
  target: 'Array',
  proto: true,
  forced: NEGATIVE_ZERO || !STRICT_METHOD$1
}, {
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO // convert -0 to +0
    ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
  }
});

var fails$7 = fails$h;
var global$8 = global$y; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

var $RegExp$2 = global$8.RegExp;
var UNSUPPORTED_Y$2 = fails$7(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
}); // UC Browser bug
// https://github.com/zloirock/core-js/issues/1008

var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$7(function () {
  return !$RegExp$2('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$7(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});
var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var fails$6 = fails$h;
var global$7 = global$y; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

var $RegExp$1 = global$7.RegExp;
var regexpUnsupportedDotAll = fails$6(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$5 = fails$h;
var global$6 = global$y; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

var $RegExp = global$6.RegExp;
var regexpUnsupportedNcg = fails$5(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var call$4 = functionCall;
var uncurryThis$6 = functionUncurryThis;
var toString$2 = toString$3;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$6(''.charAt);
var indexOf = uncurryThis$6(''.indexOf);
var replace$1 = uncurryThis$6(''.replace);
var stringSlice$2 = uncurryThis$6(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$4(nativeExec, re1, 'a');
  call$4(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$2(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$4(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$4(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');

      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call$4(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$4(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$4 = _export;
var exec$2 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec

$$4({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$2
}, {
  exec: exec$2
});

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call$3 = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind ? call$3.bind(apply$2) : function () {
  return call$3.apply(apply$2, arguments);
});

var uncurryThis$5 = functionUncurryThis;
var redefine = redefine$4.exports;
var regexpExec$2 = regexpExec$3;
var fails$4 = fails$h;
var wellKnownSymbol$3 = wellKnownSymbol$b;
var createNonEnumerableProperty = createNonEnumerableProperty$5;
var SPECIES$1 = wellKnownSymbol$3('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$3(KEY);
  var DELEGATES_TO_SYMBOL = !fails$4(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$1] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = uncurryThis$5(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$5(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var isObject$1 = isObject$9;
var classof$1 = classofRaw$1;
var wellKnownSymbol$2 = wellKnownSymbol$b;
var MATCH = wellKnownSymbol$2('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject$1(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var global$5 = global$y;
var isConstructor = isConstructor$3;
var tryToString = tryToString$2;
var TypeError$3 = global$5.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$3(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$9;
var aConstructor = aConstructor$1;
var wellKnownSymbol$1 = wellKnownSymbol$b;
var SPECIES = wellKnownSymbol$1('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$4 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$3;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var charAt$2 = uncurryThis$4(''.charAt);
var charCodeAt$1 = uncurryThis$4(''.charCodeAt);
var stringSlice$1 = uncurryThis$4(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible$1($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$2(S, position) : first : CONVERT_TO_STRING ? stringSlice$1(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt$1 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var global$4 = global$y;
var toAbsoluteIndex = toAbsoluteIndex$4;
var lengthOfArrayLike$1 = lengthOfArrayLike$6;
var createProperty$1 = createProperty$3;
var Array$2 = global$4.Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array$2(max(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);

  result.length = n;
  return result;
};

var global$3 = global$y;
var call$2 = functionCall;
var anObject$1 = anObject$9;
var isCallable = isCallable$c;
var classof = classofRaw$1;
var regexpExec$1 = regexpExec$3;
var TypeError$2 = global$3.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable(exec)) {
    var result = call$2(exec, R, S);
    if (result !== null) anObject$1(result);
    return result;
  }

  if (classof(R) === 'RegExp') return call$2(regexpExec$1, R, S);
  throw TypeError$2('RegExp#exec called on incompatible receiver');
};

var apply$1 = functionApply;
var call$1 = functionCall;
var uncurryThis$3 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject = anObject$9;
var requireObjectCoercible = requireObjectCoercible$4;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength = toLength$2;
var toString = toString$3;
var getMethod = getMethod$2;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$3 = fails$h;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec$1 = uncurryThis$3(/./.exec);
var push = uncurryThis$3($push);
var stringSlice = uncurryThis$3(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$3(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return call$1(nativeSplit, string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = call$1(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply$1($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !exec$1(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));

      return output.length > lim ? arraySlice(output, 0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call$1(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
    return splitter ? call$1(splitter, separator, O, limit) : call$1(internalSplit, toString(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject(this);
    var S = toString(string);
    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push(A, stringSlice(S, p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          push(A, z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    push(A, stringSlice(S, p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var $$3 = _export;
var uncurryThis$2 = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toIndexedObject = toIndexedObject$6;
var arrayMethodIsStrict = arrayMethodIsStrict$3;
var un$Join = uncurryThis$2([].join);
var ES3_STRINGS = IndexedObject$1 != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join

$$3({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD
}, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var DESCRIPTORS = descriptors;
var uncurryThis$1 = functionUncurryThis;
var call = functionCall;
var fails$2 = fails$h;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$1 = toObject$5;
var IndexedObject = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe

var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

var defineProperty = Object.defineProperty;
var concat = uncurryThis$1([].concat); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

var objectAssign = !$assign || fails$2(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({
    b: 1
  }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$1(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

var $$2 = _export;
var assign = objectAssign; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing

$$2({
  target: 'Object',
  stat: true,
  forced: Object.assign !== assign
}, {
  assign: assign
});

var $$1 = _export;
var global$2 = global$y;
var getBuiltIn = getBuiltIn$6;
var apply = functionApply;
var uncurryThis = functionUncurryThis;
var fails$1 = fails$h;
var Array$1 = global$2.Array;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);

  if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  }

  return match;
};

var FORCED$1 = fails$1(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  $$1({
    target: 'JSON',
    stat: true,
    forced: FORCED$1
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      for (var i = 0, l = arguments.length, args = Array$1(l); i < l; i++) args[i] = arguments[i];

      var result = apply($stringify, null, args);
      return typeof result == 'string' ? replace(result, tester, fix) : result;
    }
  });
}

function Point(mp) {
  Object.assign(this, mp);
}
Object.assign(Point.prototype, {
  addRect: function addRect(rect) {
    var vv = new Point(this);
    vv.x = this.x + rect.x;
    vv.y = this.y + rect.y;
    vv.x2 = this.x2 + rect.x;
    vv.y2 = this.y2 + rect.y;
    vv.x3 = this.x3 + rect.x;
    vv.y3 = this.y3 + rect.y;
    vv.rx = this.rx + rect.x;
    vv.ry = this.ry + rect.y;
    vv.sx = this.sx + rect.x;
    vv.sy = this.sy + rect.y;
    if (vv.radius < 0.5) vv.radius = 0.5;
    return vv;
  }
});

function Vector(mp) {
  this.type = mp[0];
  this.x = mp[1] || 0;
  this.y = mp[2] || 0;

  if (this.type == "b") {
    this.x2 = mp[3] || 0;
    this.y2 = mp[4] || 0;
    this.x3 = mp[5] || 0;
    this.y3 = mp[6] || 0;

    if (mp[7] == null) {
      this.ratio = {
        x: 1,
        y: 1,
        r: 0,
        // rotation : if the rotation is ROTATE_NONE, it will hide in the 'pattern' and 'paths'
        p: 0,
        // 1 is hide the point in the pattern paths
        f: 0,
        // 1 is fixed position for wave paths
        c: 0,
        // 1 is close path for PIXI bug - graphics.closePath()
        v: 0 // 1 is vertex, it's only for the vertex shape like V, W, A

      };
    } else {
      this.ratio = {};
      this.ratio.x = mp[7].x == null ? 1 : mp[7].x;
      this.ratio.y = mp[7].y == null ? 1 : mp[7].y;
      this.ratio.r = mp[7].r || 0;
      this.ratio.p = mp[7].p || 0;
      this.ratio.f = mp[7].f || 0;
      this.ratio.c = mp[7].c || 0;
      this.ratio.v = mp[7].v || 0;
    }
  } else {
    if (mp[3] == null) {
      this.ratio = {
        x: 1,
        y: 1,
        r: 0,
        p: 0,
        f: 0,
        c: 0,
        v: 0
      };
    } else {
      this.ratio = {};
      this.ratio.x = mp[3].x == null ? 1 : mp[3].x;
      this.ratio.y = mp[3].y == null ? 1 : mp[3].y;
      this.ratio.r = mp[3].r || 0;
      this.ratio.p = mp[3].p || 0;
      this.ratio.f = mp[3].f || 0;
      this.ratio.c = mp[3].c || 0;
      this.ratio.v = mp[3].v || 0;
    }
  }
}
Object.assign(Vector.prototype, {
  convert: function convert(pos, model) {
    var x = convertX(this.x, pos, this.ratio, model);
    var y = convertY(this.y, pos, this.ratio, model);
    var x2 = convertX(this.x2, pos, this.ratio, model);
    var y2 = convertY(this.y2, pos, this.ratio, model);
    var x3 = convertX(this.x3, pos, this.ratio, model);
    var y3 = convertY(this.y3, pos, this.ratio, model);
    var rd = convertR(this.type, pos, model);
    var vv = new Point(this);
    vv.x = x;
    vv.y = y;
    vv.x2 = x2;
    vv.y2 = y2;
    vv.x3 = x3;
    vv.y3 = y3;
    vv.radius = rd;
    return vv;
  }
});

function convertR(type, pos, model) {
  var rd = 0;
  if (type == "a") rd = pos.range.cr * model.scale * model.fontRatio;
  return rd;
}

function convertX(x, pos, ratio, model) {
  var rr = pos.range.r * ratio.x;
  var gx = (pos.range.gx2 - pos.range.gx1) * rr + pos.range.gx1;
  var fr = (pos.range.fr2 - pos.range.fr1) * rr + pos.range.fr1;
  return pos.center.x + (x - gx) * model.scale * fr; // + pos.rect.x
}

function convertY(y, pos, ratio, model) {
  var rr = pos.range.r * ratio.y;
  var gy = (pos.range.gy2 - pos.range.gy1) * rr + pos.range.gy1;
  var fr = (pos.range.fr2 - pos.range.fr1) * rr + pos.range.fr1;
  return pos.center.y + (y - gy) * model.scale * fr; // + pos.rect.y
}

var prevPoint = null;
/**
 * @name getPaths
 * @property {Model} model - mode.js
 * @property {Object} data - data object
 * @property {Number} pathGap
 * @returns {Array} Returns paths array
 * @description get a guide pos
 */

function getPaths(model, data, pathGap, isPattern) {
  var lines = data.pointsLength.lines;
  var scale = model.scale;
  var total = lines.length,
      i,
      j_total,
      j,
      line,
      lg,
      direction,
      paths2 = [];
  var arr = [],
      paths = [];

  for (i = 0; i < total; i++) {
    line = lines[i];
    prevPoint = null;
    arr.push(getDotPos(line, pathGap, scale));
  }

  total = arr.length;

  for (i = 0; i < total; i++) {
    lg = arr[i];
    j_total = lg.length;
    paths2 = [];

    for (j = 0; j < j_total; j++) {
      line = lg[j];

      if (line.rotation != ROTATE_NONE) {
        if (isPattern) {
          // If the 'p' value of the font data is 1, it's not included in the pattern paths.
          if (!line.pat) {
            paths2.push(line);
          }
        } else {
          paths2.push(line);
        }
      }
    }

    direction = data.typo.p[i].d;

    if (direction == 1) {
      paths2.reverse();
    }

    if (paths2.length > 0) {
      paths2[0].start = 1;
      Array.prototype.push.apply(paths, paths2);
    }
  }

  return paths;
}

function getDotPos(lines, pathGap, scale) {
  var total = lines.length;
  var i, j, j_total;
  var line;
  var curPoint;
  var num, pp;
  var arr = [];
  var isFirst = 1;
  var pgap = 1;
  if (pathGap > -1) pgap = getCurrent(pathGap, 1, 0, 80, 10) * scale;

  for (i = 0; i < total; i++) {
    line = lines[i];

    if (line.type == "a") {
      arr.push(new Point({
        x: line.x1,
        y: line.y1,
        rotation: 0,
        type: "a",
        pat: line.pat,
        fix: line.fix,
        radius: line.radius
      }));
    } else if (line.distance == 0) {
      // it should be type m
      curPoint = new Point({
        x: line.x1,
        y: line.y1,
        rotation: line.rotation,
        type: line.type,
        pat: line.pat,
        fix: line.fix
      });
      pp = setPointValues(curPoint, prevPoint, line, 1);

      if (pp != null) {
        if (isFirst) {
          pp.type = "m";
          isFirst = 0;
        }

        arr.push(pp);
      }

      prevPoint = new Point(curPoint); //Object.assign({}, curPoint)
    } else {
      j_total = Math.ceil(line.distance / pgap);
      if (j_total < 3) j_total = 3;
      if (line.vt) j_total = 2;

      for (j = 1; j < j_total; j++) {
        num = j / (j_total - 1);

        if (line.type == "b") {
          curPoint = getCubicBezierXYatT(line, num);
        } else {
          curPoint = new Point({
            x: line.x1 + (line.x2 - line.x1) * num,
            y: line.y1 + (line.y2 - line.y1) * num,
            type: line.type
          });
        }

        if (line.rotation != 0 && num == 1) curPoint.rotation = line.rotation;
        if (line.pat && num == 1) curPoint.pat = line.pat;
        if (line.fix && num == 1) curPoint.fix = line.fix;

        if (j_total > 0) {
          pp = setPointValues(curPoint, prevPoint, line, num);

          if (pp != null) {
            if (isFirst) {
              pp.type = "m";
              isFirst = 0;
            }

            arr.push(pp);
          }
        }

        prevPoint = new Point(curPoint); //Object.assign({}, curPoint)
      }
    }
  }

  return arr;
}

function setPointValues(cur, prev, line, num) {
  cur.type = line.type;
  cur.distance = line.distance;
  cur.num = num;

  if (!(!prev || cur.rotation != null)) {
    var dx = cur.x - prev.x;
    var dy = cur.y - prev.y;
    var rad = Math.atan2(dx, dy);
    cur.rotation = -rad;
  }

  if (cur.rotation == ROTATE_NONE) {
    return null;
  } else {
    return cur;
  }
}

function getCubicBezierXYatT(line, t) {
  var x = CubicN(line.x1, line.x2, line.x3, line.x4, t);
  var y = CubicN(line.y1, line.y2, line.y3, line.y4, t);
  var tx = bezierTangent(line.x1, line.x2, line.x3, line.x4, t);
  var ty = bezierTangent(line.y1, line.y2, line.y3, line.y4, t);
  var rotation = -Math.atan2(tx, ty);
  return new Point({
    x: x,
    y: y,
    rotation: rotation
  });
}

function CubicN(a, b, c, d, t) {
  var t2 = t * t;
  var t3 = t2 * t;
  return a + (-a * 3 + t * (3 * a - a * t)) * t + (3 * b + t * (-6 * b + b * 3 * t)) * t + (c * 3 - c * 3 * t) * t2 + d * t3;
} //http://qaru.site/questions/10657973/quadratic-curve-with-rope-pattern
//https://stackoverflow.com/questions/32322966/quadratic-curve-with-rope-pattern


function bezierTangent(a, b, c, d, t) {
  return 3 * t * t * (-a + 3 * b - 3 * c + d) + 6 * t * (a - 2 * b + c) + 3 * (-a + b);
}

var ROTATE_HORIZONTAL = 180 * (Math.PI / 180);
var ROTATE_VERTICAL = 90 * (Math.PI / 180);
var ROTATE_NONE = -100;
var VERTEX_GAP = 3;
var VERTEX_GAP2 = VERTEX_GAP / 2;
var TOFU = "tofu";
var FONT_HEIGHT = 824;
function generateFontData(w, fw, fh, x1, x2, y1, y2, path) {
  var arr = [];
  var total = path.length;
  var i;

  for (i = 0; i < total; i++) {
    arr.push({
      d: path[i].d,
      v: setCenter(path[i].v, fw, fh)
    });
  }

  return {
    rect: {
      w: w,
      h: FONT_HEIGHT,
      fw: fw,
      fh: fh
    },
    ratio: {
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2
    },
    p: arr
  };
}

function setCenter(arr, fw, fh) {
  var total = arr.length;
  var cx = fw / 2;
  var cy = fh / 2;
  var mp, i;
  var ct = [];

  for (i = 0; i < total; i++) {
    mp = arr[i];
    mp[1] -= cx;
    mp[2] -= cy;

    if (mp[0] == "b") {
      mp[3] -= cx;
      mp[4] -= cy;
      mp[5] -= cx;
      mp[6] -= cy;
    }

    ct.push(new Vector(mp));
  }

  return ct;
}

function getR(x1, y1, x2, y2) {
  var x = x1 - x2;
  var y = y1 - y2;
  return -Math.atan2(x, y);
}
function getCurveR(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  var x = bezierTangent(x1, x2, x3, x4, t);
  var y = bezierTangent(y1, y2, y3, y4, t);
  return -Math.atan2(x, y);
}

var DATA_UA = [{
  d: -1,
  v: [["m", 0, 352, {
    x: 0.55,
    y: 0.3,
    r: getR(0, 352, 145 - VERTEX_GAP2, 0)
  }], ["l", 145 - VERTEX_GAP2, 0, {
    r: getR(0, 352, 145 - VERTEX_GAP2, 0),
    f: 1
  }], ["l", 145 + VERTEX_GAP2, 0, {
    r: getR(290, 352, 145 + VERTEX_GAP2, 0),
    f: 1,
    v: 1
  }], ["l", 290, 352, {
    x: 0.55,
    y: 0.3,
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 47, 237, {
    r: ROTATE_VERTICAL,
    p: 1
  }], ["l", 243, 237, {
    r: ROTATE_VERTICAL,
    p: 1,
    f: 1
  }]]
}];
var DATA_UC = [{
  d: 1,
  v: [["m", 293.1, 320.1, {
    r: getCurveR(293.1, 320.1, 262.2, 345, 222.8, 360, 180, 360, 0),
    f: 1
  }], ["b", 262.2, 345, 222.8, 360, 180, 360], ["b", 80.6, 360, 0, 279.4, 0, 180], ["b", 0, 80.6, 80.6, 0, 180, 0], ["b", 222.8, 0, 262.2, 15, 293.1, 39.9]]
}];
var DATA_UD = [{
  d: -1,
  v: [["m", 95, 352, {
    r: ROTATE_VERTICAL,
    f: 1
  }], ["b", 191.6, 352, 270, 271.6, 270, 175, {
    r: ROTATE_HORIZONTAL
  }], ["b", 270, 78.4, 191.6, 0, 95, 0, {
    r: ROTATE_VERTICAL
  }], ["l", 0, 0, {
    r: ROTATE_HORIZONTAL,
    f: 1
  }], ["l", 0, 352, {
    r: ROTATE_HORIZONTAL,
    f: 1
  }], ["l", 95, 352, {
    r: ROTATE_VERTICAL,
    f: 1
  }]]
}];
var DATA_UE = [{
  d: -1,
  v: [["m", 192, 0, {
    x: 0,
    r: ROTATE_VERTICAL
  }], ["l", 0, 0, {
    r: ROTATE_HORIZONTAL,
    f: 1,
    x: 0.5
  }], ["l", 0, 352, {
    f: 1,
    x: 0.5
  }], ["l", 192, 352, {
    x: 0,
    r: ROTATE_VERTICAL,
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 0, 164, {
    r: ROTATE_VERTICAL,
    p: 1,
    x: 0.5
  }], ["l", 180, 164, {
    x: 0,
    r: ROTATE_VERTICAL,
    f: 1
  }]]
}];
var DATA_UG = [{
  d: 1,
  v: [["m", 202, 180, {
    r: ROTATE_VERTICAL,
    f: 1
  }], ["l", 352, 180, {
    f: 1
  }], ["b", 352, 279.4, 279.4, 360, 180, 360, {
    r: ROTATE_VERTICAL
  }], ["b", 80.6, 360, 0, 279.4, 0, 180, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0, 80.6, 80.6, 0, 180, 0, {
    r: ROTATE_VERTICAL
  }], ["b", 222.8, 0, 262.1, 14.9, 293, 39.9]]
}];
var DATA_UH = [{
  d: -1,
  v: [["m", 0, 0, {
    y: 0,
    r: ROTATE_HORIZONTAL
  }], ["l", 0, 352, {
    y: 0,
    r: ROTATE_HORIZONTAL,
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 232, 0, {
    y: 0,
    r: ROTATE_HORIZONTAL
  }], ["l", 232, 352, {
    y: 0,
    r: ROTATE_HORIZONTAL,
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 0, 164, {
    r: ROTATE_VERTICAL,
    p: 1
  }], ["l", 232, 164, {
    r: ROTATE_VERTICAL,
    f: 1,
    p: 1
  }]]
}];
var DATA_UI = [{
  d: 1,
  v: [["m", 0, 352, {
    y: 0,
    r: ROTATE_HORIZONTAL,
    f: 1
  }], ["l", 0, 0, {
    y: 0,
    r: ROTATE_HORIZONTAL
  }]]
}];
var DATA_UJ = [{
  d: 1,
  v: [["m", 0, 310.5 + 0.5, {
    r: getCurveR(0, 310.5 + 0.5, 16.2, 341.1 + 0.5, 49.3, 355.5 + 0.5, 86, 355.5 + 0.5, 0),
    f: 1
  }], ["b", 16.2, 341.1 + 0.5, 49.3, 355.5 + 0.5, 86, 355.5 + 0.5, {
    r: ROTATE_VERTICAL
  }], ["b", 133.5, 355.5 + 0.5, 172, 317 + 0.5, 172, 269.5 + 0.5], ["l", 172.5, 0, {
    y: 0,
    r: ROTATE_HORIZONTAL
  }]]
}];
var DATA_UN = [{
  d: -1,
  v: [["m", 0, 352, {
    y: 0,
    r: ROTATE_HORIZONTAL
  }], ["l", 0, 0, {
    r: ROTATE_HORIZONTAL,
    f: 1
  }], ["l", 0 + VERTEX_GAP, 0, {
    r: ROTATE_HORIZONTAL,
    p: 1,
    f: 1,
    v: 1
  }], ["l", 250 - VERTEX_GAP, 351, {
    r: ROTATE_HORIZONTAL,
    p: 1,
    f: 1
  }], ["l", 250, 351, {
    r: ROTATE_HORIZONTAL,
    f: 1,
    v: 1
  }], ["l", 250, 0, {
    y: 0,
    r: ROTATE_HORIZONTAL,
    f: 1
  }]]
}];
var DATA_UO = [{
  d: 1,
  v: [["m", 360, 180, {
    r: ROTATE_HORIZONTAL,
    p: 1,
    f: 1
  }], ["b", 360, 279.4, 279.4, 360, 180, 360, {
    r: ROTATE_VERTICAL
  }], ["b", 80.6, 360, 0, 279.4, 0, 180, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0, 80.6, 80.6, 0, 180, 0, {
    r: ROTATE_VERTICAL
  }], ["b", 279.4, 0, 360, 80.6, 360, 180, {
    r: ROTATE_HORIZONTAL,
    c: 1
  }]]
}];
var DATA_US = [{
  d: 1,
  v: [["m", 0, 295.4, {
    r: getCurveR(0, 295.4, 17.6, 332.1, 58.3, 360, 110.3, 360, 0),
    f: 1
  }], ["b", 17.6, 332.1, 58.3, 360, 110.3, 360], ["b", 173.9, 360, 223.8, 329.6, 224, 271], ["b", 224.2, 214.7, 180.7, 189.6, 112.4, 173.3], ["b", 47.3, 157.7, 10.9, 130.6, 12, 84.4], ["b", 13.3, 29.8, 57.3, 0, 114.8, 0], ["b", 158.4, 0, 196.5, 20.5, 212, 51.3]]
}];
var DATA_UU = [{
  d: 1,
  v: [["m", 250, 0, {
    y: 0,
    r: ROTATE_HORIZONTAL
  }], ["l", 250, 230 + 1, {
    r: ROTATE_HORIZONTAL
  }], ["b", 250, 299 + 1, 194, 355 + 1, 125, 355 + 1, {
    r: ROTATE_VERTICAL
  }], ["b", 56, 355 + 1, 0, 299 + 1, 0, 230 + 1, {
    r: ROTATE_HORIZONTAL
  }], ["l", 0, 0, {
    y: 0,
    r: ROTATE_HORIZONTAL
  }]]
}];
var DATA_UY = [{
  d: -1,
  v: [["m", 0, 0, {
    x: 0.6,
    y: 0.3,
    r: getR(0, 0, 135, 186)
  }], ["l", 135, 186, {
    r: ROTATE_HORIZONTAL,
    f: 1
  }], ["l", 270, 0, {
    x: 0.6,
    y: 0.3,
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 135, 186, {
    r: ROTATE_HORIZONTAL,
    p: 1
  }], ["l", 135, 352, {
    y: 0,
    f: 1
  }]]
}];
var UPPER = {
  A: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA))),
  B: generateFontData(596, 209, 352, -10, -10, 0, 0, [{
    d: 1,
    v: [["m", 0, 164, {
      r: ROTATE_VERTICAL,
      p: 1
    }], ["l", 116, 164, {
      r: ROTATE_VERTICAL,
      p: 1,
      f: 1
    }], ["b", 167.4, 164, 209, 205.6, 209, 257, {
      r: ROTATE_HORIZONTAL
    }], ["b", 209, 308.4, 167.4, 352, 116, 352, {
      r: ROTATE_VERTICAL
    }], ["l", 0, 352, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 0, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 116, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 161.3, 0, 198, 36.7, 198, 82, {
      r: ROTATE_HORIZONTAL
    }], ["b", 198, 127.3, 161.3, 164, 116, 164, {
      r: ROTATE_VERTICAL
    }]]
  }]),
  C: generateFontData(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UC))),
  D: generateFontData(721, 270, 352, -10, -10, 0, 0, JSON.parse(JSON.stringify(DATA_UD))),
  E: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE))),
  F: generateFontData(510, 192, 352, -5, -80, 0, 0, [{
    d: -1,
    v: [["m", 192, 0, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 0, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1,
      x: 0.5
    }], ["l", 0, 352, {
      y: 0,
      f: 1,
      x: 0.5
    }]]
  }, {
    d: -1,
    v: [["m", 0, 164, {
      r: ROTATE_VERTICAL,
      p: 1,
      x: 0.5
    }], ["l", 180, 164, {
      x: 0,
      r: ROTATE_VERTICAL,
      f: 1
    }]]
  }]),
  G: generateFontData(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UG))),
  H: generateFontData(684, 232, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UH))),
  I: generateFontData(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UI))),
  J: generateFontData(472, 172.5, 355.5, 10, 20, -2, -2, JSON.parse(JSON.stringify(DATA_UJ))),
  K: generateFontData(616, 232, 352, -10, -20, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      y: 0,
      r: ROTATE_HORIZONTAL
    }], ["l", 0, 352, {
      y: 0,
      r: ROTATE_HORIZONTAL,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 212, 0, {
      x: 0.7,
      y: 0.7,
      r: getR(212, 0, 0, 164 - VERTEX_GAP2)
    }], ["l", 0, 164 - VERTEX_GAP2, {
      r: ROTATE_VERTICAL,
      p: 1
    }], ["l", 0, 164 + VERTEX_GAP2, {
      r: ROTATE_VERTICAL,
      p: 1,
      v: 1
    }], ["l", 232, 352, {
      x: 0.7,
      y: 0.7,
      f: 1
    }]]
  }]),
  L: generateFontData(529, 192, 352, -10, -20, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      y: 0
    }], ["l", 0, 352, {
      f: 1
    }], ["l", 192, 352, {
      x: 0,
      f: 1
    }]]
  }]),
  M: generateFontData(885, 330, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 352, {
      y: 0,
      r: ROTATE_HORIZONTAL
    }], ["l", 0, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 0 + VERTEX_GAP, 0, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1,
      v: 1
    }], ["l", 165 - VERTEX_GAP2, 330, {
      r: getR(165 - VERTEX_GAP2, 330, 165 - VERTEX_GAP2, 330),
      f: 1
    }], ["l", 165 + VERTEX_GAP2, 330, {
      r: getR(165 + VERTEX_GAP2, 330, 330 - VERTEX_GAP, 0),
      f: 1,
      v: 1
    }], ["l", 330 - VERTEX_GAP, 0, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }], ["l", 330, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1,
      v: 1
    }], ["l", 330, 352, {
      y: 0,
      r: ROTATE_HORIZONTAL,
      f: 1
    }]]
  }]),
  N: generateFontData(721, 250, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UN))),
  O: generateFontData(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UO))),
  P: generateFontData(568, 210, 352, -10, -10, -0.5, -0.5, [{
    d: 1,
    v: [["m", 0, 352, {
      y: 0,
      f: 1
    }], ["l", 0, 0, {
      f: 1
    }], ["l", 117, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 168.4, 0, 210, 41.6, 210, 93, {
      r: ROTATE_HORIZONTAL
    }], ["b", 210, 144.4, 168.4, 186, 117, 186, {
      r: ROTATE_VERTICAL
    }], ["l", 0, 186, {
      r: ROTATE_VERTICAL,
      p: 1
    }]]
  }]),
  Q: generateFontData(850, 360, 360, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 360, 180, {
      r: ROTATE_VERTICAL,
      p: 1,
      f: 1
    }], ["b", 360, 80.6, 279.4, 0, 180, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 80.6, 0, 0, 80.6, 0, 180, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0, 279.4, 80.6, 360, 180, 360, {
      r: ROTATE_VERTICAL
    }], ["b", 279.4, 360, 360, 279.4, 360, 180, {
      r: ROTATE_HORIZONTAL,
      c: 1,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 222, 222, {
      x: 0.5,
      y: 0.5,
      r: getR(222, 222, 360, 360)
    }], ["l", 360, 360, {
      x: 0.5,
      y: 0.5,
      f: 1
    }]]
  }]),
  R: generateFontData(634, 232, 352, -10, -10, -0.5, -0.5, [{
    d: -1,
    v: [["m", 0, 186, {
      r: ROTATE_VERTICAL,
      p: 1
    }], ["l", 139, 186, {
      r: ROTATE_VERTICAL
    }], ["b", 190.4, 186, 232, 144.4, 232, 93, {
      r: ROTATE_HORIZONTAL
    }], ["b", 232, 41.6, 190.4, 0, 139, 0, {
      r: ROTATE_VERTICAL
    }], ["l", 0, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 0, 352, {
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 139, 186, {
      p: 1,
      r: getR(139, 186, 232, 352)
    }], ["l", 232, 352, {
      x: 0.5,
      y: 0.39,
      f: 1
    }]]
  }]),
  S: generateFontData(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_US))),
  T: generateFontData(568, 232, 352, 0, 0, -0.5, -0.5, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 232, 0, {
      x: 0,
      r: ROTATE_VERTICAL,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 116, 0, {
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["l", 116, 352, {
      y: 0,
      r: ROTATE_HORIZONTAL,
      f: 1
    }]]
  }]),
  U: generateFontData(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(DATA_UU))),
  V: generateFontData(650, 270, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0.6,
      y: 0.1,
      r: getR(0, 0, 135 - VERTEX_GAP2, 352)
    }], ["l", 135 - VERTEX_GAP2, 352, {
      r: getR(0, 0, 135 - VERTEX_GAP2, 352),
      f: 1
    }], ["l", 135 + VERTEX_GAP2, 352, {
      r: getR(135 + VERTEX_GAP2, 352, 270, 0),
      f: 1,
      v: 1
    }], ["l", 270, 0, {
      x: 0.6,
      y: 0.1,
      f: 1
    }]]
  }]),
  W: generateFontData(894, 390, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0.6,
      y: 0.05,
      r: getR(0, 0, 86 - VERTEX_GAP2, 352)
    }], ["l", 86 - VERTEX_GAP2, 352, {
      r: getR(0, 0, 86 - VERTEX_GAP2, 352),
      f: 1
    }], ["l", 86 + VERTEX_GAP2, 352, {
      r: getR(86 + VERTEX_GAP2, 352, 195 - VERTEX_GAP2, 0),
      f: 1,
      v: 1
    }], ["l", 195 - VERTEX_GAP2, 0, {
      r: getR(86 + VERTEX_GAP2, 352, 195 - VERTEX_GAP2, 0),
      f: 1
    }], ["l", 195 + VERTEX_GAP2, 0, {
      r: getR(195 + VERTEX_GAP2, 0, 304 - VERTEX_GAP2, 352),
      f: 1,
      v: 1
    }], ["l", 304 - VERTEX_GAP2, 352, {
      r: getR(195 + VERTEX_GAP2, 0, 304 - VERTEX_GAP2, 352),
      f: 1
    }], ["l", 304 + VERTEX_GAP2, 352, {
      r: getR(304 + VERTEX_GAP2, 352, 390, 0),
      f: 1,
      v: 1
    }], ["l", 390, 0, {
      x: 0.6,
      y: 0.05,
      f: 1
    }]]
  }]),
  X: generateFontData(660, 270, 352, 0, 0, 0, -7, [{
    d: -1,
    v: [["m", 10, 0, {
      x: 0.5,
      y: 0.3,
      r: getR(10, 0, 270, 352)
    }], ["l", 270, 352, {
      x: 0.5,
      y: 0.5,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 260, 0, {
      x: 0.5,
      y: 0.3,
      r: getR(260, 0, 0, 352)
    }], ["l", 0, 352, {
      x: 0.5,
      y: 0.5,
      f: 1
    }]]
  }]),
  Y: generateFontData(673, 270, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UY))),
  Z: generateFontData(558, 232, 352, 0, -5, 0, 0, [{
    d: -1,
    v: [["m", 8, 0, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 224, 0, {
      r: ROTATE_VERTICAL,
      f: 1
    }], ["l", 224, 0 + VERTEX_GAP, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      v: 1
    }], ["l", 0, 352 - VERTEX_GAP, {
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["l", 0, 352, {
      r: ROTATE_VERTICAL,
      f: 1,
      v: 1
    }], ["l", 232, 352, {
      x: 0,
      r: ROTATE_VERTICAL,
      f: 1
    }]]
  }])
};

var DATA_LA = [{
  d: -1,
  v: [["m", 232, 8, {
    y: -3.4,
    r: ROTATE_HORIZONTAL
  }], ["l", 232, 116, {
    r: ROTATE_NONE
  }], ["b", 232, 180.1, 180.1, 232, 116, 232, {
    r: ROTATE_VERTICAL
  }], ["b", 51.9, 232, 0, 180.1, 0, 116, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0, 51.9, 51.9, 0, 116, 0, {
    r: ROTATE_VERTICAL
  }], ["b", 180.1, 0, 232, 51.9, 232, 116, {
    r: ROTATE_HORIZONTAL
  }], ["l", 232, 224, {
    y: -0.1,
    r: ROTATE_HORIZONTAL,
    f: 1
  }]]
}];
var DATA_LC = [{
  d: 1,
  v: [["m", 212.1, 182.9, {
    r: getCurveR(212.1, 182.9, 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, 0),
    f: 1
  }], ["b", 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, {
    r: ROTATE_VERTICAL
  }], ["b", 52.4, 233.1, 0.5, 181.2, 0.5, 117.1, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0.5, 53, 52.4, 1.1, 116.5, 1.1, {
    r: ROTATE_VERTICAL
  }], ["b", 156.1, 1.1, 191.1, 21, 212.1, 51.3]]
}];
var DATA_LD = [{
  d: -1,
  v: [["m", 232, 0, {
    y: 0
  }], ["l", 232, 116 + 123, {
    r: ROTATE_NONE
  }], ["b", 232, 180.1 + 123, 180.1, 232 + 123, 116, 232 + 123, {
    r: ROTATE_VERTICAL
  }], ["b", 51.9, 232 + 123, 0, 180.1 + 123, 0, 116 + 123, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0, 51.9 + 123, 51.9, 0 + 123, 116, 0 + 123, {
    r: ROTATE_VERTICAL
  }], ["b", 180.1, 0 + 123, 232, 51.9 + 123, 232, 116 + 123, {
    r: ROTATE_HORIZONTAL
  }], ["l", 232, 352, {
    y: 0,
    f: 1
  }]]
}];
var DATA_LE = [{
  d: 1,
  v: [["m", 211.6, 182.9, {
    r: getCurveR(211.6, 182.9, 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, 0),
    f: 1
  }], ["b", 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, {
    r: ROTATE_VERTICAL
  }], ["b", 52.4, 233.1, 0.5, 181.2, 0.5, 117.1, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0.5, 53, 52.4, 1.1, 116.5, 1.1, {
    r: ROTATE_VERTICAL
  }], ["b", 176.4, 1.1, 224.9, 47.2, 225.5, 106.1, {
    r: ROTATE_HORIZONTAL
  }], ["l", 0.5, 106.1, {
    r: ROTATE_HORIZONTAL,
    p: 1
  }]]
}];
var DATA_LG = [{
  d: -1,
  v: [["m", 232, 5, {
    y: -2.8
  }], ["l", 232, 116, {
    r: ROTATE_NONE
  }], ["b", 232, 180.1, 180.1, 232, 116, 232, {
    r: ROTATE_VERTICAL
  }], ["b", 51.9, 232, 0, 180.1, 0, 116, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0, 51.9, 51.9, 0, 116, 0, {
    r: ROTATE_VERTICAL
  }], ["b", 180.1, 0, 232, 51.9, 232, 116, {
    r: ROTATE_HORIZONTAL
  }], ["l", 232, 222], ["b", 234.5, 300.3, 180.2, 338.5, 116, 338, {
    y: 0.64,
    r: ROTATE_VERTICAL
  }], ["b", 76.2, 337.7, 36.6, 320.7, 15.7, 290.1, {
    y: 0.64,
    f: 1
  }]]
}];
var DATA_LH = [{
  d: -1,
  v: [["m", 0, 0, {
    y: 0,
    r: ROTATE_HORIZONTAL
  }], ["l", 0, 352, {
    y: 0,
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 0, 91 + 123, {
    r: ROTATE_NONE
  }], ["b", 0, 40.7 + 123, 40.7, 0 + 123, 91, 0 + 123, {
    r: ROTATE_VERTICAL
  }], ["b", 141.3, 0 + 123, 182, 40.7 + 123, 182, 91 + 123, {
    r: ROTATE_HORIZONTAL
  }], ["l", 182, 352, {
    y: 0,
    f: 1
  }]]
}];
var DATA_LN = [{
  d: -1,
  v: [["m", 0, 130, {
    y: -3.3
  }], ["l", 0, 352, {
    y: 0,
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 0, 91 + 123, {
    y: 0,
    r: ROTATE_HORIZONTAL,
    p: 1
  }], ["b", 0, 40.7 + 123, 40.7, 0 + 123, 91, 0 + 123, {
    r: ROTATE_VERTICAL
  }], ["b", 141.3, 0 + 123, 182, 40.7 + 123, 182, 91 + 123, {
    r: ROTATE_HORIZONTAL
  }], ["l", 182, 352, {
    y: 0,
    f: 1
  }]]
}];
var DATA_LO = [{
  d: 1,
  v: [["m", 232, 116, {
    r: ROTATE_HORIZONTAL,
    p: 1,
    f: 1
  }], ["b", 232, 180.1, 180.1, 232, 116, 232, {
    r: ROTATE_VERTICAL
  }], ["b", 51.9, 232, 0, 180.1, 0, 116, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0, 51.9, 51.9, 0, 116, 0, {
    r: ROTATE_VERTICAL
  }], ["b", 180.1, 0, 232, 51.9, 232, 116, {
    r: ROTATE_HORIZONTAL,
    c: 1
  }]]
}];
var DATA_LS = [{
  d: 1,
  v: [["m", 0 * 0.642, 295.4 * 0.642, {
    r: getCurveR(0 * 0.642, 295.4 * 0.642, 17.6 * 0.642, 332.1 * 0.642, 58.3 * 0.642, 360 * 0.642, 110.3 * 0.642, 360 * 0.642, 0),
    f: 1
  }], ["b", 17.6 * 0.642, 332.1 * 0.642, 58.3 * 0.642, 360 * 0.642, 110.3 * 0.642, 360 * 0.642], ["b", 173.9 * 0.642, 360 * 0.642, 223.8 * 0.642, 329.6 * 0.642, 224 * 0.642, 271 * 0.642], ["b", 224.2 * 0.642, 214.7 * 0.642, 180.7 * 0.642, 189.6 * 0.642, 112.4 * 0.642, 173.3 * 0.642], ["b", 47.3 * 0.642, 157.7 * 0.642, 10.9 * 0.642, 130.6 * 0.642, 12 * 0.642, 84.4 * 0.642], ["b", 13.3 * 0.642, 29.8 * 0.642, 57.3 * 0.642, 0 * 0.642, 114.8 * 0.642, 0 * 0.642], ["b", 158.4 * 0.642, 0 * 0.642, 196.5 * 0.642, 20.5 * 0.642, 212 * 0.642, 51.3 * 0.642]]
}];
var DATA_LU = [{
  d: -1,
  v: [["m", 0, 130, {
    y: -3
  }], ["l", 0, 0 + 265, {
    r: ROTATE_HORIZONTAL
  }], ["b", 0, 50.3 + 265, 40.7, 91 + 265, 91, 91 + 265, {
    r: ROTATE_VERTICAL
  }], ["b", 141.3, 91 + 265, 182, 50.3 + 265, 182, 0 + 265, {
    r: ROTATE_HORIZONTAL,
    p: 1,
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 182, 130, {
    y: -3
  }], ["l", 182, 352, {
    y: 0,
    f: 1
  }]]
}];
var DATA_LY = [{
  d: -1,
  v: [["m", 225.5, 0, {
    y: -3,
    r: getR(225.5, 0, 116.3, 248.8)
  }], ["l", 116.3, 248.8, {
    x: 0.5,
    y: 0.64
  }], ["b", 71.8, 349.6, 0, 331.5, 0, 331.5, {
    x: 0.5,
    y: 0.64,
    r: getCurveR(0, 331.5, 71.8, 349.6, 116.3, 248.8, 0, 331.5, 0),
    f: 1
  }]]
}, {
  d: -1,
  v: [["m", 3.2, 0, {
    y: -3,
    r: getR(3.2, 0, 125.7, 226.6)
  }], ["l", 125.7, 226.6, {
    p: 1,
    f: 1
  }]]
}];
var LOWER = {
  a: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA))),
  b: generateFontData(600, 232, 352, -10, -2, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      y: 0,
      r: ROTATE_HORIZONTAL
    }], ["l", 0, 116 + 123, {
      r: ROTATE_NONE
    }], ["b", 0, 180.1 + 123, 51.9, 232 + 123, 116, 232 + 123, {
      r: ROTATE_VERTICAL
    }], ["b", 180.1, 232 + 123, 232, 180.1 + 123, 232, 116 + 123, {
      r: ROTATE_HORIZONTAL
    }], ["b", 232, 51.9 + 123, 180.1, 0 + 123, 116, 0 + 123, {
      r: ROTATE_VERTICAL
    }], ["b", 51.9, 0 + 123, 0, 51.9 + 123, 0, 116 + 123, {
      r: ROTATE_HORIZONTAL
    }], ["l", 0, 352, {
      y: 0,
      r: ROTATE_HORIZONTAL,
      f: 1
    }]]
  }]),
  c: generateFontData(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(DATA_LC))),
  d: generateFontData(600, 232, 352, 10, 2, 0, 0, JSON.parse(JSON.stringify(DATA_LD))),
  e: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE))),
  f: generateFontData(356, 232, 352, -40, -40, 0, 0, [{
    d: -1,
    v: [["m", 166.6, 33, {
      x: 0.5,
      r: getCurveR(166.6, 33, 159.3, 13.1, 139.2, 0, 116.9, 0, 0)
    }], ["b", 159.3, 13.1, 139.2, 0, 116.9, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 88.2, 0, 65, 23.2, 65, 51.9, {
      r: ROTATE_HORIZONTAL
    }], ["l", 65, 352, {
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 130, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 154, 130, {
      x: 0,
      f: 1
    }]]
  }]),
  g: generateFontData(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(DATA_LG))),
  h: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LH))),
  i: generateFontData(200, 0, 352, 0, 0, 0, 0, [{
    d: 1,
    v: [["a", 0, 90, {
      y: -3
    }]]
  }, {
    d: 1,
    v: [["m", 0, 352, {
      y: 0,
      f: 1
    }], ["l", 0, 130, {
      y: -3
    }]]
  }]),
  j: generateFontData(220, 115.9, 352, -60, -60, 0, 0, [{
    d: 1,
    v: [["a", 0, 90, {
      y: -3
    }]]
  }, {
    d: 1,
    v: [["m", 0 - 115.9, 317 + 127, {
      x: 0.4,
      y: 0.63,
      r: getCurveR(0 - 115.9, 317 + 127, 12.6 - 115.9, 327.4 + 127, 29.6 - 115.9, 333.2 + 127, 45.9 - 115.9, 334.2 + 127, 0),
      f: 1
    }], ["b", 12.6 - 115.9, 327.4 + 127, 29.6 - 115.9, 333.2 + 127, 45.9 - 115.9, 334.2 + 127, {
      x: 0.4,
      y: 0.63,
      r: ROTATE_VERTICAL
    }], ["b", 84.5 - 115.9, 336.5 + 127, 115.9 - 115.9, 308.1 + 127, 115.9 - 115.9, 269.4 + 127, {
      x: 0.4,
      y: 0.63,
      r: ROTATE_HORIZONTAL
    }], ["l", 115.9 - 115.9, 0 + 127 + 3, {
      y: -3
    }]]
  }]),
  k: generateFontData(450, 164, 352, -10, -10, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      y: 0,
      r: ROTATE_HORIZONTAL
    }], ["l", 0, 352, {
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 160, 130, {
      x: 0.7,
      y: 0,
      r: getR(164, 130, 0, 106 + 130 - VERTEX_GAP2),
      f: 1
    }], ["l", 0, 106 + 130 - VERTEX_GAP2, {
      r: ROTATE_VERTICAL,
      p: 1
    }], ["l", 0, 106 + 130 + VERTEX_GAP2, {
      r: ROTATE_VERTICAL,
      p: 1,
      v: 1
    }], ["l", 164, 352, {
      x: 0.7,
      y: 0.7,
      f: 1
    }]]
  }]),
  l: generateFontData(200, 0, 352, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 0, 352, {
      y: 0,
      f: 1
    }], ["l", 0, 0, {
      y: 0
    }]]
  }]),
  m: generateFontData(740, 150 + 150, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 130, {
      y: -3.6
    }], ["l", 0, 352, {
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 75 + 123, {
      y: 0,
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["b", 0, 33.6 + 123, 33.6, 0 + 123, 75, 0 + 123, {
      r: ROTATE_VERTICAL
    }], ["b", 116.4, 0 + 123, 150, 33.6 + 123, 150, 75 + 123, {
      r: ROTATE_HORIZONTAL
    }], ["l", 150, 352, {
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0 + 150, 75 + 123, {
      y: 0,
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["b", 0 + 150, 33.6 + 123, 33.6 + 150, 0 + 123, 75 + 150, 0 + 123, {
      r: ROTATE_VERTICAL
    }], ["b", 116.4 + 150, 0 + 123, 150 + 150, 33.6 + 123, 150 + 150, 75 + 123, {
      r: ROTATE_HORIZONTAL
    }], ["l", 150 + 150, 352, {
      y: 0,
      f: 1
    }]]
  }]),
  n: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LN))),
  o: generateFontData(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LO))),
  p: generateFontData(600, 232, 338, -10, -2, -117, -117, [{
    d: -1,
    v: [["m", 0, 5, {
      y: -2.8
    }], ["l", 0, 116, {
      r: ROTATE_NONE
    }], ["b", 0, 180.1, 51.9, 232, 116, 232, {
      r: ROTATE_VERTICAL
    }], ["b", 180.1, 232, 232, 180.1, 232, 116, {
      r: ROTATE_HORIZONTAL
    }], ["b", 232, 51.9, 180.1, 0, 116, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 51.9, 0, 0, 51.9, 0, 116, {
      r: ROTATE_HORIZONTAL
    }], ["l", 0, 338, {
      y: 0,
      f: 1
    }]]
  }]),
  q: generateFontData(600, 232, 338, 10, 2, -117, -117, [{
    d: -1,
    v: [["m", 232, 5, {
      y: -2.8
    }], ["l", 232, 116, {
      r: ROTATE_NONE
    }], ["b", 232, 180.1, 180.1, 232, 116, 232, {
      r: ROTATE_VERTICAL
    }], ["b", 51.9, 232, 0, 180.1, 0, 116, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0, 51.9, 51.9, 0, 116, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 180.1, 0, 232, 51.9, 232, 116, {
      r: ROTATE_HORIZONTAL
    }], ["l", 232, 338, {
      y: 0,
      f: 1
    }]]
  }]),
  r: generateFontData(340, 119.2, 352, -20, -20, 0, 0, [{
    d: -1,
    v: [["m", 0, 130, {
      y: -3.3
    }], ["l", 0, 352, {
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 57 + 124, {
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["b", 0, 57 + 124, 41.9, -22.8 + 124, 119.2, 4.5 + 124, {
      x: 0,
      y: 2,
      r: getCurveR(119.2, 4.5 + 124, 41.9, -22.8 + 124, 0, 57 + 124, 119.2, 4.5 + 124, 0),
      f: 1
    }]]
  }]),
  s: generateFontData(400, 224 * 0.642, 360 * 0.642, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LS))),
  t: generateFontData(356, 232, 352, -30, -30, 0, 0, [{
    d: -1,
    v: [["m", 65, 0, {
      y: 0
    }], ["l", 65, 298.2 + 6], ["b", 65, 326.9 + 6, 88.2, 350.1 + 6, 116.9, 350.1 + 6, {
      r: ROTATE_VERTICAL
    }], ["b", 139.2, 350.1 + 6, 159.3, 337 + 6, 166.6, 317.1, {
      x: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 130, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 154, 130, {
      x: 0,
      f: 1
    }]]
  }]),
  u: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LU))),
  v: generateFontData(500, 200, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 130, {
      x: 0.6,
      y: -3,
      r: getR(0, 130, 100 - VERTEX_GAP2, 352)
    }], ["l", 100 - VERTEX_GAP2, 352, {
      r: getR(0, 130, 100 - VERTEX_GAP2, 352),
      f: 1
    }], ["l", 100 + VERTEX_GAP2, 352, {
      r: getR(100 + VERTEX_GAP2, 352, 200, 130),
      f: 1,
      v: 1
    }], ["l", 200, 130, {
      x: 0.6,
      y: -3,
      f: 1
    }]]
  }]),
  w: generateFontData(700, 310, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 130, {
      x: 0.6,
      y: -3,
      r: getR(0, 130, 78 - VERTEX_GAP2, 352)
    }], ["l", 78 - VERTEX_GAP2, 352, {
      r: getR(0, 130, 78 - VERTEX_GAP2, 352),
      f: 1
    }], ["l", 78 + VERTEX_GAP2, 352, {
      r: getR(78 + VERTEX_GAP2, 352, 155 - VERTEX_GAP2, 130),
      f: 1,
      v: 1
    }], ["l", 155 - VERTEX_GAP2, 130, {
      y: 1,
      r: getR(78 + VERTEX_GAP2, 352, 155 - VERTEX_GAP2, 130),
      f: 1
    }], ["l", 155 + VERTEX_GAP2, 130, {
      y: 1,
      r: getR(155 + VERTEX_GAP2, 130, 233 - VERTEX_GAP2, 352),
      f: 1,
      v: 1
    }], ["l", 233 - VERTEX_GAP2, 352, {
      r: getR(155 + VERTEX_GAP2, 130, 233 - VERTEX_GAP2, 352),
      f: 1
    }], ["l", 233 + VERTEX_GAP2, 352, {
      r: getR(233 + VERTEX_GAP2, 352, 310, 130),
      f: 1,
      v: 1
    }], ["l", 310, 130, {
      x: 0.6,
      y: -3,
      f: 1
    }]]
  }]),
  x: generateFontData(490, 210, 352, 0, 0, 0, -7, [{
    d: -1,
    v: [["m", 10, 130, {
      x: 0.5,
      y: -1,
      r: getR(10, 130, 210, 352)
    }], ["l", 210, 352, {
      x: 0.5,
      y: 0.5,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 200, 130, {
      x: 0.5,
      y: -1,
      r: getR(200, 130, 0, 352)
    }], ["l", 0, 352, {
      x: 0.5,
      y: 0.5,
      f: 1
    }]]
  }]),
  y: generateFontData(500, 225.5, 331.5, 10, 10, -119, -119, JSON.parse(JSON.stringify(DATA_LY))),
  z: generateFontData( // 232, 224
  420, 172, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 6, 130, {
      x: -0.5,
      y: 1,
      r: ROTATE_VERTICAL
    }], ["l", 166, 130, {
      x: 1.8,
      y: 1,
      r: ROTATE_VERTICAL,
      f: 1
    }], ["l", 166, 130 + VERTEX_GAP, {
      x: 1.8,
      y: 1,
      r: ROTATE_HORIZONTAL,
      p: 1,
      v: 1
    }], ["l", 0, 352 - VERTEX_GAP, {
      x: 1.7,
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["l", 0, 352, {
      x: 1.7,
      r: ROTATE_VERTICAL,
      f: 1,
      v: 1
    }], ["l", 172, 352, {
      x: -0.4,
      r: ROTATE_VERTICAL,
      f: 1
    }]]
  }])
};

var NUMBER = {
  "0": generateFontData(660, 270, 360, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 270, 180, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }], ["b", 270, 279.4, 209.6, 360, 135, 360, {
      r: ROTATE_VERTICAL
    }], ["b", 60.4, 360, 0, 279.4, 0, 180, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0, 80.6, 60.4, 0, 135, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 209.6, 0, 270, 80.6, 270, 180, {
      r: ROTATE_HORIZONTAL,
      c: 1
    }]]
  }]),
  "1": generateFontData(380, 76, 352, 15, 15, 0, 0, [{
    d: -1,
    v: [["m", 0, 51, {
      x: -2,
      y: 2,
      r: getR(0, 51, 76 - VERTEX_GAP, 0)
    }], ["l", 76 - VERTEX_GAP, 0, {
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["l", 76, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1,
      v: 1
    }], ["l", 76, 352, {
      y: 0,
      f: 1
    }]]
  }]),
  "2": generateFontData(580, 210, 356, 0, 0, 2, 2, [{
    d: -1,
    v: [["m", 3.9, 68.8, {
      x: 1.2,
      y: 1.2,
      r: getCurveR(3.9, 68.8, 16.7, 29, 54.2, 3.1, 98.2, 0.2, 0)
    }], ["b", 16.7, 29, 54.2, 3.1, 98.2, 0.2], ["b", 151.8, -3.3, 208.5, 38.3, 198.9, 100.1], ["b", 197.1, 111.8, 196.4, 142.4, 101.5, 235.2], ["b", 11.4, 323.2, 0, 356 - VERTEX_GAP, 0, 356 - VERTEX_GAP, {
      r: ROTATE_NONE
    }], ["l", 0, 356 - VERTEX_GAP, {
      r: ROTATE_VERTICAL,
      p: 1
    }], ["l", 0, 356, {
      r: ROTATE_VERTICAL,
      f: 1,
      v: 1
    }], ["l", 210, 356, {
      x: -0.5,
      f: 1
    }]]
  }]),
  "3": generateFontData(580, 222.1, 360, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 10.7, 66.3, {
      r: getCurveR(10.7, 66.3, 11.2, 64.8, 11.7, 63.3, 12.3, 61.8, 0)
    }], ["b", 11.2, 64.8, 11.7, 63.3, 12.3, 61.8, {
      r: ROTATE_NONE
    }], ["b", 25.8, 25.9, 64.5, 0, 110.1, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 167, 0, 213.1, 40.3, 213.1, 90, {
      r: ROTATE_HORIZONTAL
    }], ["b", 213.1, 139.7, 167, 180, 110.1, 179.9, {
      r: ROTATE_VERTICAL,
      f: 1
    }], ["l", 100.1, 179.9, {
      x: -5,
      y: 1,
      r: ROTATE_VERTICAL,
      f: 1
    }], ["l", 110.1, 180, {
      r: ROTATE_VERTICAL,
      p: 1
    }], ["b", 172, 180, 222.1, 220.3, 222.1, 270, {
      r: ROTATE_HORIZONTAL
    }], ["b", 222.1, 319.7, 172, 360, 110.1, 360, {
      r: ROTATE_VERTICAL
    }], ["b", 56.9, 360, 12.4, 330.2, 1, 290.3, {
      f: 1
    }]]
  }]),
  "4": generateFontData(596, 236, 352, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 175, 352, {
      y: 0,
      f: 1
    }], ["l", 175, 0, {
      f: 1
    }], ["l", 175 - VERTEX_GAP, 0, {
      r: ROTATE_VERTICAL,
      p: 1,
      v: 1
    }], ["l", 0, 276 - VERTEX_GAP, {
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["l", 0, 276, {
      r: ROTATE_VERTICAL,
      f: 1,
      v: 1
    }], ["l", 236, 276, {
      x: -0.5
    }]]
  }]),
  "5": generateFontData(596, 208.5, 356, 0, -5, -2, -2, [{
    d: 1,
    v: [["m", 0, 295.7, {
      r: getCurveR(0, 295.7, 15.3, 333.8, 52.2, 356.2, 97.5, 356, 0),
      f: 1
    }], ["b", 15.3, 333.8, 52.2, 356.2, 97.5, 356, {
      r: ROTATE_VERTICAL
    }], ["b", 159.1, 355.7, 206.1, 306.9, 208.5, 240.8, {
      r: ROTATE_HORIZONTAL
    }], ["b", 210.9, 173.9, 162.7, 120.8, 97.5, 125.6, {
      r: ROTATE_VERTICAL
    }], ["b", 59.4, 128.4, 25.5, 145.8, 5.6, 176.4, {
      f: 1
    }], ["l", 5.6, 176.4, {
      r: ROTATE_NONE
    }], ["l", 5.6 - VERTEX_GAP, 176.4, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      v: 1
    }], ["l", 11.5, 0, {
      r: ROTATE_VERTICAL,
      f: 1
    }], ["l", 193.5, 0, {
      x: -0.5
    }]]
  }]),
  "6": generateFontData(596, 215.8, 360, 0, -2, 0, 0, [{
    d: 1,
    v: [["m", 7.6, 272.3, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }], ["b", 6.4, 265.8, 5.8, 259.1, 5.8, 252.2, {
      r: ROTATE_HORIZONTAL
    }], ["b", 5.8, 192.6, 52.8, 144.2, 110.8, 144.2, {
      r: ROTATE_VERTICAL
    }], ["b", 168.7, 144.2, 215.8, 192.6, 215.8, 252.2, {
      r: ROTATE_HORIZONTAL
    }], ["b", 215.8, 311.9, 168.7, 360, 110.8, 360, {
      r: ROTATE_VERTICAL
    }], ["b", 59.5, 360, 16.8, 322.4, 7.6, 272.4, {
      r: ROTATE_NONE
    }], ["b", 7.6, 272.4, -44.1, 8.8, 122.2, 0.2], ["b", 165.5, -2.1, 193.8, 21, 212.1, 56.4]]
  }]),
  "7": generateFontData(540, 213, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 213, 0, {
      r: ROTATE_VERTICAL,
      f: 1
    }], ["l", 213, 0.1, {
      r: ROTATE_NONE
    }], ["l", 72.7, 352, {
      y: 0.1,
      f: 1
    }]]
  }]),
  "8": generateFontData(596, 224, 360, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 112, 180, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }], ["b", 50.1, 180, 0, 220.3, 0, 270, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0, 319.7, 50.1, 360, 112, 360, {
      r: ROTATE_VERTICAL
    }], ["b", 173.9, 360, 224, 319.7, 224, 270, {
      r: ROTATE_HORIZONTAL
    }], ["b", 224, 220.3, 173.9, 180, 112, 180, {
      r: ROTATE_VERTICAL
    }], ["b", 55.1, 180, 9, 139.7, 9, 90, {
      r: ROTATE_HORIZONTAL
    }], ["b", 9, 40.3, 55.1, 0, 112, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 168.9, 0, 215, 40.3, 215, 90, {
      r: ROTATE_HORIZONTAL
    }], ["b", 215, 139.7, 168.9, 180, 112, 180, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }]]
  }]),
  "9": generateFontData(596, 215.8, 360, 0, -2, 0, 0, [{
    d: -1,
    v: [["m", 208.2, 88, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }], ["b", 209.4, 94.5, 210, 101.2, 210, 108, {
      r: ROTATE_HORIZONTAL
    }], ["b", 210, 167.6, 163, 216, 105, 216, {
      r: ROTATE_VERTICAL
    }], ["b", 47, 216, -0, 167.6, 0, 108, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0, 48.4, 47, -0, 105, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 156.3, 0, 199, 37.8, 208.2, 87.8, {
      r: ROTATE_NONE
    }], ["b", 208.2, 87.8, 259.8, 351.4, 93.5, 360], ["b", 50.3, 362.3, 21.9, 339.2, 3.6, 303.8, {
      f: 1
    }]]
  }])
};

var SPECIAL = {
  " ": generateFontData(336, 0, 0, 0, 0, 0, 0, [{
    d: 1,
    v: []
  }]),
  tofu: generateFontData(672, 232, 352, 0, 0, 0, 0, [{
    //c: 'square',
    d: -1,
    v: [["m", 0, 0, {
      r: ROTATE_HORIZONTAL
    }], ["l", 232, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 232, 352, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 0, 352, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 0, 0, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1,
      c: 1
    }]]
  }, {
    d: 1,
    v: [["m", 0, 0, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }], ["l", 232, 352, {
      r: ROTATE_NONE
    }]]
  }]),
  "?": generateFontData(520, 190.348, 360, 0, -5, 0, 0, [{
    d: 1,
    v: [["a", 190.348 / 2 - 6, 356]]
  }, {
    d: -1,
    v: [["m", 0, 87.8, {
      r: getCurveR(0, 87.8, 12, -2.3, 99.1, 0, 0, 87.8, 0)
    }], ["b", 0, 87.8, 12, -2.3, 99.1, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 186.2, 2.4, 204.5, 75.2, 180.9, 121.4], ["b", 157.3, 167.6, 119.7, 178.3, 97.4, 223.2], ["b", 90.5, 237.1, 88.1, 249.8, 88, 260.8, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }]]
  }]),
  "¿": generateFontData(520, 190.348, 360, 0, -5, 0, 0, [{
    d: 1,
    v: [["a", 190.348 / 2 + 6, 356 - 451 + 188]]
  }, {
    d: -1,
    v: [["m", 190.3, 173.0 + 188, {
      r: getCurveR(190.3, 173.0 + 188, 178.3, 263.1 + 188, 91.2, 260.8 + 188, 190.3, 173.0 + 188, 0)
    }], ["b", 190.3, 173.0 + 188, 178.3, 263.1 + 188, 91.2, 260.8 + 188, {
      r: ROTATE_VERTICAL
    }], ["b", 4.1, 258.4 + 188, -14.2, 185.6 + 188, 9.4, 139.4 + 188], ["b", 33.0, 93.2 + 188, 70.6, 82.5 + 188, 92.9, 37.6 + 188], ["b", 99.8, 23.7 + 188, 102.2, 11.0 + 188, 102.3, 0.0 + 188, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }]]
  }]),
  "!": generateFontData(465, 8, 355, 0, -5, 0, 0, [{
    d: 1,
    v: [["a", 8 / 2, 356]]
  }, {
    d: -1,
    v: [["m", 4, 0, {
      y: 0
    }], ["l", 4, 260.8, {
      f: 1
    }]]
  }]),
  "¡": generateFontData(465, 8, 355, 0, -5, 0, 0, [{
    d: 1,
    v: [["a", 8 / 2, 356 - 451 + 188]]
  }, {
    d: -1,
    v: [["m", 4, 0 + 188], ["l", 4, 260.8 + 188, {
      f: 1,
      y: 0.3
    }]]
  }]),
  $: generateFontData(568, 224, 360, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 212, 51.3, {
      r: getCurveR(0, 295.4, 17.6, 332.1, 58.3, 360, 110.3, 360, 0),
      f: 1
    }], ["b", 196.5, 20.5, 158.4, 0, 114.8, 0], ["b", 57.3, 0, 13.3, 29.8, 12, 84.4], ["b", 10.9, 130.6, 47.3, 157.7, 112.4, 173.3], ["b", 180.7, 189.6, 224.2, 214.7, 224, 271], ["b", 223.8, 329.6, 173.9, 360, 110.3, 360], ["b", 58.3, 360, 17.6, 332.1, 0, 295.4, {
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 112, 0 - 30, {
      y: 0
    }], ["l", 112, 360 + 30, {
      y: 0,
      f: 1
    }]]
  }]),
  "@": generateFontData(820, 343.425, 360, 0, 0, -30, -30, [{
    d: -1,
    v: [["m", 251.9, 92.9, {
      r: getR(251.9, 92.9, 238.5, 181.7)
    }], ["l", 238.5, 181.7, {
      r: ROTATE_NONE
    }], ["b", 227.8, 236, 194.7, 267.2, 143.7, 259.2], ["b", 99.1, 252.2, 87.7, 208.5, 90.1, 177.5], ["b", 92.5, 148.4, 118.1, 91, 183.3, 99.1], ["b", 251, 107.5, 238.5, 181.7, 238.5, 181.7, {
      r: ROTATE_NONE
    }], ["l", 232.5, 221.5], ["b", 232.5, 221.5, 227.2, 257.6, 256, 263.6], ["b", 284.9, 269.7, 309, 241.3, 309, 241.3, {
      r: ROTATE_NONE
    }], ["b", 309, 241.3, 343.4, 209, 343.4, 146.7], ["b", 343.4, 84.3, 297.4, 3.5, 178.6, 0.1], ["b", 59.7, -3.4, -5.3, 105.2, 0.3, 203.4], ["b", 6.1, 303.7, 93.2, 354.5, 175.5, 359.5], ["b", 175.5, 359.5, 246.5, 364.9, 302.7, 339.8, {
      f: 1
    }]]
  }]),
  "#": generateFontData(760, 290 + 24, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 70 + 47, 0, {
      y: 0,
      r: getR(70 + 47, 0, 0 + 47, 352)
    }], ["l", 0 + 47, 352, {
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 70 + 150 + 47, 0, {
      y: 0,
      r: getR(70 + 150 + 47, 0, 0 + 150 + 47, 352)
    }], ["l", 0 + 150 + 47, 352, {
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0 + 24, 117, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 290 + 24, 117, {
      x: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 352 - 117, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 290, 352 - 117, {
      x: 0,
      f: 1
    }]]
  }]),
  "%": generateFontData(920, 352 + 36, 360, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 289.1 + 18, 5.1, {
      x: 0,
      y: 0,
      r: getR(289.1 + 18, 5.1, 62.9 + 18, 354.9)
    }], ["l", 62.9 + 18, 354.9, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 146, 73, {
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["b", 146, 113.3, 113.3, 146, 73, 146, {
      r: ROTATE_VERTICAL
    }], ["b", 32.7, 146, 0, 113.3, 0, 73, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0, 32.7, 32.7, 0, 73, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 113.3, 0, 146, 32.7, 146, 73, {
      r: ROTATE_HORIZONTAL,
      c: 1,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 352 + 36, 287, {
      r: ROTATE_HORIZONTAL,
      p: 1
    }], ["b", 352 + 36, 327.3, 319.3 + 36, 360, 279 + 36, 360, {
      r: ROTATE_VERTICAL
    }], ["b", 238.7 + 36, 360, 206 + 36, 327.3, 206 + 36, 287, {
      r: ROTATE_HORIZONTAL
    }], ["b", 206 + 36, 246.7, 238.7 + 36, 214, 279 + 36, 214, {
      r: ROTATE_VERTICAL
    }], ["b", 319.3 + 36, 214, 352 + 36, 246.7, 352 + 36, 287, {
      r: ROTATE_HORIZONTAL,
      c: 1,
      f: 1
    }]]
  }]),
  "^": generateFontData(596, 88 + 88, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 150, {
      r: getR(0, 150, 88 - VERTEX_GAP2, 0)
    }], ["l", 88 - VERTEX_GAP2, 0, {
      r: getR(0, 150, 88 - VERTEX_GAP2, 0),
      f: 1
    }], ["l", 88 + VERTEX_GAP2, 0, {
      r: getR(88 + VERTEX_GAP2, 0, 88 + 88, 150),
      f: 1,
      v: 1
    }], ["l", 88 + 88, 150, {
      f: 1
    }]]
  }]),
  "·": generateFontData(231, 8, 355, 0, 0, 0, 0, [{
    d: 1,
    v: [["a", 8 / 2, 355 - 1.5 - 170]]
  }]),
  "×": generateFontData(712, 176.8, 176.8, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0,
      y: 0,
      r: getR(0, 0, 176.8, 176.8)
    }], ["l", 176.8, 176.8, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 176.8, 0, {
      x: 0,
      y: 0,
      r: getR(176.8, 0, 0, 176.88)
    }], ["l", 0, 176.8, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }]),
  "÷": generateFontData(712, 188, 0, 0, 0, 0, 0, [{
    d: 1,
    v: [["a", 188 / 2, 110]]
  }, {
    d: 1,
    v: [["a", 188 / 2, -110]]
  }, {
    d: -1,
    v: [["m", 0, 0, {
      x: 0,
      y: 0,
      r: ROTATE_VERTICAL
    }], ["l", 188, 0, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }]),
  "«": generateFontData(896, 310, 236, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 150, 236, {
      r: getR(150, 236, 0, 118 + VERTEX_GAP2),
      f: 1
    }], ["l", 0, 118 + VERTEX_GAP2, {
      r: getR(150, 236, 0, 118 + VERTEX_GAP2),
      f: 1
    }], ["l", 0, 118 - VERTEX_GAP2, {
      r: getR(0, 118 - VERTEX_GAP2, 150, 0),
      f: 1,
      v: 1
    }], ["l", 150, 0]]
  }, {
    d: 1,
    v: [["m", 150 + 160, 236, {
      r: getR(150 + 160, 236, 0 + 160, 118 + VERTEX_GAP2),
      f: 1
    }], ["l", 0 + 160, 118 + VERTEX_GAP2, {
      r: getR(150 + 160, 236, 0 + 160, 118 + VERTEX_GAP2),
      f: 1
    }], ["l", 0 + 160, 118 - VERTEX_GAP2, {
      r: getR(0 + 160, 118 - VERTEX_GAP2, 150 + 160, 0),
      f: 1,
      v: 1
    }], ["l", 150 + 160, 0]]
  }]),
  "»": generateFontData(896, 310, 236, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 0, 236, {
      r: getR(0, 236, 150, 118 + VERTEX_GAP2),
      f: 1
    }], ["l", 150, 118 + VERTEX_GAP2, {
      r: getR(0, 236, 0, 118 + VERTEX_GAP2),
      f: 1
    }], ["l", 150, 118 - VERTEX_GAP2, {
      r: getR(150, 118 - VERTEX_GAP2, 0, 0),
      f: 1,
      v: 1
    }], ["l", 0, 0]]
  }, {
    d: 1,
    v: [["m", 0 + 160, 236, {
      r: getR(0 + 160, 236, 150 + 160, 118 + VERTEX_GAP2),
      f: 1
    }], ["l", 150 + 160, 118 + VERTEX_GAP2, {
      r: getR(0, 236, 0, 118 + VERTEX_GAP2),
      f: 1
    }], ["l", 150 + 160, 118 - VERTEX_GAP2, {
      r: getR(150 + 160, 118 - VERTEX_GAP2, 0 + 160, 0),
      f: 1,
      v: 1
    }], ["l", 0 + 160, 0]]
  }]),
  "&": generateFontData(660, 259.191, 360, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 257.9, 355, {
      x: 0.5,
      y: 0.5,
      r: getR(257.9, 355, 52.8, 135.3),
      f: 1
    }], ["l", 52.8, 135.3], ["b", 52.8, 135.3, -2.2, 79.5, 46.6, 26.7], ["b", 46.6, 26.7, 68.1, 0, 101.8, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 137.2, 0, 174.1, 21.1, 181.2, 65.3], ["b", 188.6, 111.7, 142.6, 142.9, 108.9, 162.9], ["b", 75.2, 182.8, 40.8, 211.4, 40.8, 211.4, {
      r: ROTATE_NONE
    }], ["b", 35, 217.1, -34.7, 273.7, 22.2, 330.5], ["b", 22.2, 330.5, 48.1, 360, 93.4, 360, {
      r: ROTATE_VERTICAL
    }], ["b", 138.6, 360, 212.2, 322, 259.2, 200.5]]
  }]),
  "*": generateFontData(558, 183.597, 212, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 91.8, 0, {
      x: 0,
      y: 0
    }], ["l", 91.8, 212, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 53, {
      x: 0,
      y: 0,
      r: getR(0, 53, 183.6, 159)
    }], ["l", 183.6, 159, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 159, {
      x: 0,
      y: 0,
      r: getR(0, 159, 183.6, 53)
    }], ["l", 183.6, 53, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }]),
  "+": generateFontData(712, 250, 250, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 125, 0, {
      x: 0,
      y: 0
    }], ["l", 125, 250, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 125, {
      x: 0,
      y: 0,
      r: ROTATE_VERTICAL
    }], ["l", 250, 125, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }]),
  "=": generateFontData(712, 216, 86, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0,
      y: 0,
      r: ROTATE_VERTICAL
    }], ["l", 216, 0, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 0, 86, {
      x: 0,
      y: 0,
      r: ROTATE_VERTICAL
    }], ["l", 216, 86, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }]),
  "-": generateFontData(712, 188, 0, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0,
      y: 0,
      r: ROTATE_VERTICAL
    }], ["l", 188, 0, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }]),
  _: generateFontData(481, 235, 400, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 400, {
      x: 0,
      y: 0,
      r: ROTATE_VERTICAL
    }], ["l", 235, 400, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }]),
  ":": generateFontData(231, 8, 355, 0, 0, 0, 0, [{
    d: 1,
    v: [["a", 8 / 2, 355 - 1.5 - 170]]
  }, {
    d: 1,
    v: [["a", 8 / 2, 355 - 1.5]]
  }]),
  ";": generateFontData(231, 8, 355, 0, 0, 0, 0, [{
    d: 1,
    v: [["a", 8 / 2, 355 - 1.5 - 170]]
  }, {
    d: -1,
    v: [["m", 8 / 2, 350, {
      x: 0,
      y: 2,
      r: getR(8 / 2, 350, 8 / 2 - 10, 80 + 350)
    }], ["l", 8 / 2 - 10, 80 + 350, {
      x: 0,
      y: 0.5,
      f: 1
    }]]
  }]),
  ".": generateFontData(231, 8, 355, 0, 0, 0, 0, [{
    d: 1,
    v: [["a", 8 / 2, 355 - 1.5]]
  }]),
  ",": generateFontData(231, 10, 355, 10, 10, 0, 0, [{
    d: -1,
    v: [["m", 10, 350, {
      x: 0,
      y: 2,
      r: getR(10, 350, 0, 80 + 350)
    }], ["l", 0, 80 + 350, {
      x: 0,
      y: 0.5,
      f: 1
    }]]
  }]),
  "'": generateFontData(173, 0, 360, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0,
      y: 0
    }], ["l", 0, 80, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }]),
  '"': generateFontData(297, 60, 360, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: -1.5,
      y: 0
    }], ["l", 0, 80, {
      x: -1.5,
      y: 0,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 60, 0, {
      x: -1.5,
      y: 0
    }], ["l", 60, 80, {
      x: -1.5,
      y: 0,
      f: 1
    }]]
  }]),
  "~": generateFontData(731, 199.391, 47.063, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 199.4, 20.7, {
      x: 0,
      y: 0,
      r: getCurveR(199.4, 20.7, 187.6, 36.6, 168.2, 47.1, 148.2, 47.1, 0),
      f: 1
    }], ["b", 187.6, 36.6, 168.2, 47.1, 148.2, 47.1, {
      x: 0,
      y: 0,
      r: ROTATE_VERTICAL
    }], ["b", 129.1, 47.1, 112.1, 36.6, 95.3, 25.5, {
      x: 0,
      y: 0
    }], ["b", 76.8, 13.2, 59.1, 0, 39.6, 0, {
      x: 0,
      y: 0,
      r: ROTATE_VERTICAL
    }], ["b", 22.3, 0, 10.9, 8.9, 0, 20, {
      x: 0,
      y: 0
    }]]
  }]),
  "(": generateFontData(365, 107.865, 360, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 107.9, 360, {
      y: 0.8,
      r: getCurveR(107.9, 360, 39.7, 321.1, 0, 259.8, 0, 182.9, 0),
      f: 1
    }], ["b", 39.7, 321.1, 0, 259.8, 0, 182.9, {
      y: 0.8,
      r: ROTATE_HORIZONTAL
    }], ["b", 0, 100.2, 39.7, 38.9, 107.9, 0, {
      y: 0.8
    }]]
  }]),
  ")": generateFontData(365, 107.865, 360, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      y: 0.8,
      r: getCurveR(0, 0, 68.2, 38.9, 107.9, 100.2, 107.9, 177, 0)
    }], ["b", 68.2, 38.9, 107.9, 100.2, 107.9, 177, {
      y: 0.8,
      r: ROTATE_HORIZONTAL
    }], ["b", 107.9, 259.8, 68.2, 321.1, 0, 360, {
      y: 0.8,
      f: 1
    }]]
  }]),
  "{": generateFontData(385, 107.865, 360, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 94.5, 360, {
      x: -0.5,
      r: ROTATE_VERTICAL
    }], ["l", 77.9, 360, {
      x: -0.5
    }], ["b", 57.4, 360, 37, 343, 37, 310.7, {
      x: -0.5
    }], ["l", 37, 233.4, {
      x: -0.5
    }], ["b", 37, 207.9, 24.3, 183.7, 3.8, 180.7, {
      x: -0.5,
      r: ROTATE_VERTICAL
    }], ["l", 3.8, 179.8, {
      x: -0.5,
      r: ROTATE_VERTICAL,
      p: 1
    }], ["b", 24.3, 176.8, 37, 153.1, 37, 126.7, {
      x: -0.5
    }], ["l", 37, 49.4, {
      x: -0.5
    }], ["b", 37, 17.1, 57.4, 0.1, 77.9, 0.1, {
      x: -0.5
    }], ["l", 94.5, 0.1, {
      x: -0.5
    }]]
  }]),
  "}": generateFontData(385, 107.865, 360, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 13.4, 0.1, {
      x: -0.5,
      r: ROTATE_VERTICAL
    }], ["l", 30, 0.1, {
      x: -0.5
    }], ["b", 50.4, 0.1, 70.8, 17.1, 70.8, 49.4, {
      x: -0.5
    }], ["l", 70.8, 126.7, {
      x: -0.5
    }], ["b", 70.8, 153.1, 83.6, 176.8, 104, 179.8, {
      x: -0.5,
      r: ROTATE_VERTICAL
    }], ["l", 104, 180.7, {
      x: -0.5,
      r: ROTATE_VERTICAL,
      p: 1
    }], ["b", 83.6, 183.7, 70.8, 207.9, 70.8, 233.4, {
      x: -0.5
    }], ["l", 70.8, 310.7, {
      x: -0.5
    }], ["b", 70.8, 343, 50.4, 360, 30, 360, {
      x: -0.5
    }], ["l", 13.4, 360, {
      x: -0.5
    }]]
  }]),
  "[": generateFontData(365, 66, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 66, 0, {
      x: -1,
      r: ROTATE_VERTICAL
    }], ["l", 0, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 0, 352, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 66, 352, {
      x: -1,
      f: 1
    }]]
  }]),
  "]": generateFontData(365, 66, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: -1,
      r: ROTATE_VERTICAL
    }], ["l", 66, 0, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 66, 352, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 0, 352, {
      x: -1,
      f: 1
    }]]
  }]),
  "<": generateFontData(423, 90, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 90, 0, {
      x: -1,
      y: 0.3,
      r: getR(90, 0, 0, 176)
    }], ["l", 0, 176, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 90, 352, {
      x: -1,
      y: 0.3,
      f: 1
    }]]
  }]),
  ">": generateFontData(423, 90, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: -1,
      y: 0.3,
      r: getR(0, 0, 90, 176)
    }], ["l", 90, 176, {
      r: ROTATE_HORIZONTAL,
      f: 1
    }], ["l", 0, 352, {
      x: -1,
      y: 0.3,
      f: 1
    }]]
  }]),
  "/": generateFontData(433, 130, 352, 0, 0, 0, 0, [{
    d: 1,
    v: [["m", 0, 352, {
      r: getR(0, 352, 130, 0),
      f: 1,
      y: 0
    }], ["l", 130, 0, {
      y: 0
    }]]
  }]),
  þ: generateFontData(600, 232, 338, -10, -2, -117, -117, [{
    d: -1,
    v: [["m", 0, -106, {
      y: 0
    }], ["l", 0, 116, {
      r: ROTATE_NONE
    }], ["b", 0, 180.1, 51.9, 232, 116, 232, {
      r: ROTATE_VERTICAL
    }], ["b", 180.1, 232, 232, 180.1, 232, 116, {
      r: ROTATE_HORIZONTAL
    }], ["b", 232, 51.9, 180.1, 0, 116, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 51.9, 0, 0, 51.9, 0, 116, {
      r: ROTATE_HORIZONTAL
    }], ["l", 0, 338, {
      y: 0,
      f: 1
    }]]
  }]),
  Þ: generateFontData(520, 162, 352, -5, -70, 0, 0, [{
    d: -1,
    v: [["m", 0, 0, {
      x: 0,
      y: 0,
      r: ROTATE_HORIZONTAL
    }], ["l", 0, 352, {
      x: 0,
      y: 0,
      r: ROTATE_HORIZONTAL,
      f: 1
    }]]
  }, {
    d: 1,
    v: [["m", 0, 281.6, {
      x: 0,
      r: ROTATE_VERTICAL,
      f: 1,
      p: 1
    }], ["l", 57, 281.6, {
      x: -0.5,
      r: ROTATE_VERTICAL,
      f: 1
    }], ["b", 115.0, 281.6, 162.0, 233.4, 162.0, 175.4, {
      x: -0.5,
      r: ROTATE_HORIZONTAL
    }], ["b", 162.0, 117.4, 115.0, 70.4, 57.0, 70.4, {
      x: -0.5,
      r: ROTATE_VERTICAL
    }], ["l", 0, 70.4, {
      x: 0,
      r: ROTATE_VERTICAL,
      f: 1,
      p: 1
    }]]
  }]),
  ß: generateFontData(596, 209, 352, -10, -10, 0, 0, [{
    d: 1,
    v: [["m", 0.0, 348.3, {
      r: ROTATE_HORIZONTAL,
      f: 1,
      x: 0,
      y: 0
    }], ["l", 0.0, 104.3, {
      x: 0
    }], ["b", 0.0, 46.0, 36.0, 0.0, 98.9, 0.0, {
      x: 0
    }], ["b", 145.2, 0.0, 191.0, 27.9, 191.0, 81.0, {
      x: 1
    }], ["b", 191.0, 110.7, 165.6, 131.8, 151.8, 140.9], ["l", 140.0, 148.8], ["b", 120.6, 161.7, 110.8, 172.8, 110.8, 185.5], ["b", 110.8, 206.7, 131.6, 213.8, 140.0, 217.5], //['l', 163.7, 228.6],
    ["b", 190.6, 241.1, 211.0, 262.7, 211.0, 289.6], ["b", 211.0, 329.5, 174.8, 352.0, 142.5, 352.0], ["b", 97.3, 352.0, 75.2, 319.7, 72.3, 289.3]]
  }])
};

var $ = _export;
var global$1 = global$y;
var fails = fails$h;
var isArray = isArray$3;
var isObject = isObject$9;
var toObject = toObject$5;
var lengthOfArrayLike = lengthOfArrayLike$6;
var createProperty = createProperty$3;
var arraySpeciesCreate = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;
var wellKnownSymbol = wellKnownSymbol$b;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$1 = global$1.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

function getLatin1(x, y) {
  var tx = x;
  var ty = -60 + y;
  return [{
    d: -1,
    v: [["m", -40 + tx, ty, {
      x: 0,
      y: 0,
      r: getR(-40 + tx, ty, 0 + tx, 60 + ty)
    }], ["l", 0 + tx, 60 + ty, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }];
} //Á

function getLatin2(x, y) {
  var tx = x;
  var ty = -60 + y;
  return [{
    d: -1,
    v: [["m", 40 + tx, ty, {
      x: 0,
      y: 0,
      r: getR(40 + tx, ty, 0 + tx, 60 + ty)
    }], ["l", 0 + tx, 60 + ty, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }];
} //Â

function getLatin3(x, y) {
  var tx = -68 + x;
  var ty = 0 + y;
  return [{
    d: -1,
    v: [["m", 0 + tx, 50 + ty, {
      r: getR(0 + tx, 50 + ty, 68 - VERTEX_GAP2 + tx, 0 + ty),
      y: 0,
      x: 0
    }], ["l", 68 - VERTEX_GAP2 + tx, 0 + ty, {
      r: getR(0 + tx, 50 + ty, 68 - VERTEX_GAP2 + tx, 0 + ty),
      y: 0,
      x: 0,
      f: 1
    }], ["l", 68 + VERTEX_GAP2 + tx, 0 + ty, {
      r: getR(68 + VERTEX_GAP2 + tx, 0 + ty, 68 + 68 + tx, 50 + ty),
      y: 0,
      x: 0,
      f: 1,
      v: 1
    }], ["l", 68 + 68 + tx, 50 + ty, {
      y: 0,
      x: 0,
      f: 1
    }]]
  }];
} //Ã

function getLatin4(x, y) {
  var tx = x - 76.24;
  var ty = y;
  return [{
    d: 1,
    v: [["m", 159.52 + tx, 16.56 + ty, {
      x: -1,
      y: -0.2,
      r: getCurveR(159.52 + tx, 16.56 + ty, 150.08 + tx, 29.28 + ty, 134.56 + tx, 37.68 + ty, 118.56 + tx, 37.68 + ty, 0),
      f: 1
    }], ["b", 150.08 + tx, 29.28 + ty, 134.56 + tx, 37.68 + ty, 118.56 + tx, 37.68 + ty, {
      x: -1,
      y: -0.2,
      r: ROTATE_VERTICAL
    }], ["b", 103.28 + tx, 37.68 + ty, 89.68 + tx, 29.28 + ty, 76.24 + tx, 20.4 + ty, {
      x: -1,
      y: -0.2
    }], ["b", 61.44 + tx, 10.56 + ty, 47.28 + tx, 0 + ty, 31.68 + tx, 0 + ty, {
      x: -1,
      y: -0.2,
      r: ROTATE_VERTICAL
    }], ["b", 17.84 + tx, 0 + ty, 8.72 + tx, 7.12 + ty, 0 + tx, 16 + ty, {
      x: -1,
      y: -0.2
    }]]
  }];
} //Ä

function getLatin5(x, y) {
  return [{
    d: 1,
    v: [["a", -50 + x, y, {
      x: 0,
      y: 0
    }]]
  }, {
    d: 1,
    v: [["a", 50 + x, y, {
      x: 0,
      y: 0
    }]]
  }];
} //Ŭ

function getLatin6(x, y) {
  var tx = x - 57;
  var ty = y;
  return [{
    d: 1,
    v: [["m", 112.7 + tx, 0.0 + ty, {
      r: getCurveR(112.7 + tx, 0.0 + ty + tx, 10.1 + ty, 110.1 + tx, 19.3 + ty, 105.0 + tx, 27.7 + ty, 0),
      x: 0,
      y: 0,
      f: 1
    }], ["b", 112.7 + tx, 10.1 + ty, 110.1 + tx, 19.3 + ty, 105.0 + tx, 27.7 + ty, {
      x: 0,
      y: 0
    }], ["b", 99.8 + tx, 36.1 + ty, 92.9 + tx, 42.8 + ty, 84.3 + tx, 47.7 + ty, {
      x: 0,
      y: 0
    }], ["b", 75.7 + tx, 52.6 + ty, 66.7 + tx, 55.0 + ty, 57.3 + tx, 55.0 + ty, {
      x: 0,
      y: 0
    }], ["b", 47.5 + tx, 55.0 + ty, 38.3 + tx, 52.6 + ty, 29.6 + tx, 47.7 + ty, {
      x: 0,
      y: 0
    }], ["b", 20.8 + tx, 42.8 + ty, 13.8 + tx, 36.1 + ty, 8.5 + tx, 27.7 + ty, {
      x: 0,
      y: 0
    }], ["b", 3.2 + tx, 19.3 + ty, 0.5 + tx, 10.1 + ty, 0.5 + tx, 0.0 + ty, {
      x: 0,
      y: 0
    }]]
  }];
} //Å

function getLatin7(x, y) {
  var tx = 88 + x;
  var ty = -116 + y;
  var scale = 0.5;
  return [{
    d: 1,
    v: [["m", 232 * scale + tx, 116 * scale + ty, {
      r: ROTATE_HORIZONTAL,
      p: 1,
      f: 1
    }], ["b", 232 * scale + tx, 180.1 * scale + ty, 180.1 * scale + tx, 232 * scale + ty, 116 * scale + tx, 232 * scale + ty, {
      r: ROTATE_VERTICAL
    }], ["b", 51.9 * scale + tx, 232 * scale + ty, 0 * scale + tx, 180.1 * scale + ty, 0 * scale + tx, 116 * scale + ty, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0 * scale + tx, 51.9 * scale + ty, 51.9 * scale + tx, 0 * scale + ty, 116 * scale + tx, 0 * scale + ty, {
      r: ROTATE_VERTICAL
    }], ["b", 180.1 * scale + tx, 0 * scale + ty, 232 * scale + tx, 51.9 * scale + ty, 232 * scale + tx, 116 * scale + ty, {
      r: ROTATE_HORIZONTAL,
      c: 1
    }]]
  }];
} //Ð

function getLatin8(x, y) {
  return [{
    d: 1,
    v: [["m", x - 40, y, {
      x: 0,
      y: 1,
      r: ROTATE_VERTICAL
    }], ["l", 100 + x, y, {
      x: 0,
      y: 1,
      f: 1
    }]]
  }];
} //Ç

function getLatin9(x, y) {
  return [{
    d: -1,
    v: [["m", x, y, {
      p: 1
    }], ["b", 9.3 + x, 11.6 + y, 15.6 + x, 27.1 + y, 15.6 + x, 40.9 + y], ["b", 15.6 + x, 83.3 + y, -18.2 + x, 107.8 + y, -59.5 + x, 107.8 + y], ["b", -70.9 + x, 107.8 + y, -82.9 + x, 106.2 + y, -93.7 + x, 102.7 + y, {
      x: 0.5,
      f: 1
    }]]
  }];
} //Ą

function getLatin10(x, y) {
  return [{
    d: -1,
    v: [["m", x, y, {
      p: 1
    }], ["b", 22.6 - 42.2 + x, 14.8 + y, -42.2 + x, 37.9 + y, -42.2 + x, 64.1 + y], ["b", -42.2 + x, 100.3 + y, 30.2 - 42.2 + x, 118.8 + y, 63.6 - 42.2 + x, 118.8 + y], ["b", 68.3 - 42.2 + x, 118.8 + y, 72.9 - 42.2 + x, 118.4 + y, 77.4 - 42.2 + x, 117.6 + y, {
      x: 0.5,
      f: 1
    }]]
  }];
} //Ċ

function getLatin11(x, y) {
  return [{
    d: 1,
    v: [["a", x, y, {
      x: 0,
      y: 0
    }]]
  }];
} //Č

function getLatin12(x, y) {
  var tx = -68 + x;
  var ty = y;
  return [{
    d: -1,
    v: [["m", 0 + tx, ty, {
      r: getR(0 + tx, ty, 68 - VERTEX_GAP2 + tx, 50 + ty),
      y: 0,
      x: 0
    }], ["l", 68 - VERTEX_GAP2 + tx, 50 + ty, {
      r: getR(0 + tx, ty, 68 - VERTEX_GAP2 + tx, 50 + ty),
      y: 0,
      x: 0,
      f: 1
    }], ["l", 68 + VERTEX_GAP2 + tx, 50 + ty, {
      r: getR(68 + VERTEX_GAP2 + tx, 50 + ty, 68 + 68 + tx, ty),
      y: 0,
      x: 0,
      f: 1,
      v: 1
    }], ["l", 68 + 68 + tx, ty, {
      y: 0,
      x: 0,
      f: 1
    }]]
  }];
} //ď

function getLatin13(x, y) {
  return [{
    d: -1,
    v: [["m", x, y, {
      x: 0,
      y: 0
    }], ["l", x, 80 + y, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }];
} //Ē

function getLatin14(x, y) {
  return [{
    d: 1,
    v: [["m", x - 50, y, {
      x: 0,
      y: 0
    }], ["l", x + 50, y, {
      x: 0,
      y: 0,
      f: 1
    }]]
  }];
}

var DATA_LI = [{
  d: 1,
  v: [["m", 0, 352, {
    y: 0,
    f: 1
  }], ["l", 0, 130, {
    y: -3
  }]]
}];
var DATA_LJ = [{
  d: 1,
  v: [["m", 0 - 115.9, 317 + 127, {
    x: 0.4,
    y: 0.63,
    r: getCurveR(0 - 115.9, 317 + 127, 12.6 - 115.9, 327.4 + 127, 29.6 - 115.9, 333.2 + 127, 45.9 - 115.9, 334.2 + 127, 0),
    f: 1
  }], ["b", 12.6 - 115.9, 327.4 + 127, 29.6 - 115.9, 333.2 + 127, 45.9 - 115.9, 334.2 + 127, {
    x: 0.4,
    y: 0.63,
    r: ROTATE_VERTICAL
  }], ["b", 84.5 - 115.9, 336.5 + 127, 0, 308.1 + 127, 0, 269.4 + 127, {
    x: 0.4,
    y: 0.63,
    r: ROTATE_HORIZONTAL
  }], ["l", 0, 0 + 127 + 3, {
    y: -3
  }]]
}];
var LATIN = {
  Æ: generateFontData(996, 426, 352, 0, 0, 0, 0, [{
    d: -1,
    v: [["m", 426.0, 0.0, {
      x: 0,
      r: ROTATE_VERTICAL
    }], ["l", 234.0, 0.0, {
      x: 0.5,
      f: 1,
      r: getR(234.0, 0.0, 0.0, 352.0)
    }], ["l", 0.0, 352.0, {
      x: 0.5,
      y: 0.5,
      f: 1
    }]]
  }, {
    d: -1,
    v: [["m", 234.0, 0.0, {
      x: 0.5,
      p: 1
    }], ["l", 234.0, 352.0, {
      f: 1,
      x: 0.5
    }], ["l", 426.0, 352.0, {
      f: 1,
      x: 0
    }]]
  }, {
    d: -1,
    v: [["m", 76.4, 237.0, {
      r: ROTATE_VERTICAL,
      p: 1
    }], ["l", 234.0, 237.0, {
      f: 1,
      r: ROTATE_VERTICAL,
      p: 1
    }]]
  }, {
    d: -1,
    v: [["m", 234.0, 164.0, {
      r: ROTATE_VERTICAL,
      p: 1,
      x: 0.5
    }], ["l", 414.0, 164.0, {
      f: 1,
      x: 0
    }]]
  }]),
  æ: generateFontData(1000, 232 + 225.5, 232, 0, 0, -64, -64, [{
    d: -1,
    v: [["m", 232, 8, {
      y: -3.4,
      r: ROTATE_HORIZONTAL
    }], ["l", 232, 116, {
      r: ROTATE_NONE
    }], ["b", 232, 180.1, 180.1, 232, 116, 232, {
      r: ROTATE_VERTICAL
    }], ["b", 51.9, 232, 0, 180.1, 0, 116, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0, 51.9, 51.9, 0, 116, 0, {
      r: ROTATE_VERTICAL
    }], ["b", 180.1, 0, 232, 51.9, 232, 116, {
      r: ROTATE_HORIZONTAL
    }], ["l", 232, 224, {
      y: -0.1,
      r: ROTATE_HORIZONTAL,
      f: 1
    }]]
  }, {
    d: 1,
    v: [["m", 211.6 + 232, 182.9, {
      r: getCurveR(211.6 + 232, 182.9, 191.1 + 232, 213.2, 156.1 + 232, 233.1, 116.5 + 232, 233.1, 0),
      f: 1
    }], ["b", 191.1 + 232, 213.2, 156.1 + 232, 233.1, 116.5 + 232, 233.1, {
      r: ROTATE_VERTICAL
    }], ["b", 52.4 + 232, 233.1, 0.5 + 232, 181.2, 0.5 + 232, 117.1, {
      r: ROTATE_HORIZONTAL
    }], ["b", 0.5 + 232, 53, 52.4 + 232, 1.1, 116.5 + 232, 1.1, {
      r: ROTATE_VERTICAL
    }], ["b", 176.4 + 232, 1.1, 224.9 + 232, 47.2, 225.5 + 232, 106.1, {
      r: ROTATE_HORIZONTAL
    }], ["l", 0.5 + 232, 106.1, {
      r: ROTATE_HORIZONTAL,
      p: 1
    }]]
  }]),
  À: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin1(145, -50))),
  Á: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin2(145, -50))),
  Â: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin3(145, -100))),
  Ã: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin4(145, -90))),
  Ä: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin5(145, -70))),
  Å: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin7(0, 0))),
  Ă: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin6(145, -110))),
  Ą: generateFontData(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin10(290, 352))),
  à: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin1(116, -60))),
  á: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin2(116, -60))),
  â: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin3(116, -110))),
  ã: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin4(116, -100))),
  ä: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin5(116, -80))),
  å: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin7(-30, 0))),
  ă: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin6(116, -120))),
  ą: generateFontData(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin10(232, 224))),
  Ć: generateFontData(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin1(180, -60))),
  Ĉ: generateFontData(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin3(180, -110))),
  Ċ: generateFontData(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin11(180, -80))),
  Č: generateFontData(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin12(180, -110))),
  Ç: generateFontData(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin9(180, 360))),
  ć: generateFontData(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin1(116.5, 1.1 - 70))),
  ĉ: generateFontData(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin3(116.5, 1.1 - 120))),
  ċ: generateFontData(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin11(116.5, 1.1 - 90))),
  č: generateFontData(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin12(116.5, 1.1 - 120))),
  ç: generateFontData(520, 212.1, 233.1, 2, -10, -64, -64, JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin9(116.5, 233.1))),
  Đ: generateFontData(721, 270, 352, -10, -10, 0, 0, JSON.parse(JSON.stringify(DATA_UD)).concat(getLatin8(0, 352 / 2))),
  Ď: generateFontData(721, 270, 352, -10, -10, 0, 0, JSON.parse(JSON.stringify(DATA_UD)).concat(getLatin12(100, -110))),
  ď: generateFontData(600, 232, 352, 10, 2, 0, 0, JSON.parse(JSON.stringify(DATA_LD)).concat(getLatin13(300, 0))),
  đ: generateFontData(600, 232, 352, 10, 2, 0, 0, JSON.parse(JSON.stringify(DATA_LD)).concat(getLatin8(180, 40))),
  È: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin1(96, -60))),
  É: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin2(96, -60))),
  Ê: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin3(96, -110))),
  Ë: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin5(96, -80))),
  Ē: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin14(96, -80))),
  Ĕ: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin6(96, -120))),
  Ė: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin11(96, -80))),
  Ě: generateFontData(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin12(96, -110))),
  è: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin1(112, -60))),
  é: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin2(112, -60))),
  ê: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin3(112, -110))),
  ë: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin5(112, -80))),
  ē: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin14(112, -80))),
  ĕ: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin6(112, -120))),
  ė: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin11(112, -90))),
  ě: generateFontData(570, 225.5, 233.1, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin12(112, -120))),
  Ĝ: generateFontData(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin3(180, -110))),
  Ğ: generateFontData(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin6(180, -120))),
  Ġ: generateFontData(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin11(180, -80))),
  Ģ: generateFontData(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin9(180, 360))),
  ĝ: generateFontData(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin3(116, 1.1 - 120))),
  ğ: generateFontData(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin6(116, -120))),
  ġ: generateFontData(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin11(116, -90))),
  ģ: generateFontData(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin2(116, -70))),
  Ĥ: generateFontData(684, 232, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UH)).concat(getLatin3(232 / 2, -110))),
  ĥ: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LH)).concat(getLatin3(182 / 2, -110))),
  Ì: generateFontData(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin1(0, -60))),
  Í: generateFontData(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin2(0, -60))),
  Î: generateFontData(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin3(0, -110))),
  Ï: generateFontData(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin5(0, -80))),
  ì: generateFontData(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin1(0, -60 + 130))),
  í: generateFontData(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin2(0, -60 + 130))),
  î: generateFontData(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin3(0, -120 + 130))),
  ï: generateFontData(200, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin5(0, -80 + 130))),
  Ĵ: generateFontData(472, 172.5, 355.5, 10, 20, -2, -2, JSON.parse(JSON.stringify(DATA_UJ)).concat(getLatin3(172.5, -110))),
  ĵ: generateFontData(220, 115.9, 352, -60, -60, 0, 0, JSON.parse(JSON.stringify(DATA_LJ)).concat(getLatin3(0, -110 + 130))),
  Ñ: generateFontData(721, 250, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UN)).concat(getLatin4(250 / 2, -100))),
  ñ: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LN)).concat(getLatin4(182 / 2, -100 + 130))),
  Ò: generateFontData(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin1(180, -60))),
  Ó: generateFontData(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin2(180, -60))),
  Ô: generateFontData(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin3(180, -110))),
  Õ: generateFontData(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin4(180, -100))),
  Ö: generateFontData(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin5(180, -80))),
  Ø: generateFontData(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UO)).concat([{
    d: 1,
    v: [["m", 0, 360, {
      r: getR(0, 360, 360, 0),
      f: 1,
      x: 0,
      y: 1
    }], ["l", 360, 0, {
      x: 0,
      y: 1
    }]]
  }])),
  ò: generateFontData(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin1(116, -60))),
  ó: generateFontData(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin2(116, -60))),
  ô: generateFontData(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin3(116, -110))),
  õ: generateFontData(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin4(116, -100))),
  ö: generateFontData(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin5(116, -80))),
  ø: generateFontData(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LO)).concat([{
    d: 1,
    v: [["m", 0, 232, {
      r: getR(0, 232, 232, 0),
      f: 1,
      x: 0,
      y: 1
    }], ["l", 232, 0, {
      x: 0,
      y: 1
    }]]
  }])),
  Ŝ: generateFontData(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_US)).concat(getLatin3(112.4, -110))),
  ŝ: generateFontData(400, 224 * 0.642, 360 * 0.642, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LS)).concat(getLatin3(112.4 * 0.642, -110))),
  Ş: generateFontData(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_US)).concat(getLatin9(110.3, 360))),
  ş: generateFontData(400, 224 * 0.642, 360 * 0.642, 0, 0, -64, -64, JSON.parse(JSON.stringify(DATA_LS)).concat(getLatin9(110.3 * 0.642, 360 * 0.642))),
  Ù: generateFontData(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin1(125, -50))),
  Ú: generateFontData(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin2(125, -50))),
  Û: generateFontData(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin3(125, -100))),
  Ŭ: generateFontData(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin6(125, -110))),
  Ü: generateFontData(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin5(125, -70))),
  ù: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin1(91, -60 + 130))),
  ú: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin2(91, -60 + 130))),
  û: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin3(91, -110 + 130))),
  ŭ: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin6(91, -120 + 130))),
  ü: generateFontData(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin5(91, -80 + 130))),
  Ý: generateFontData(673, 270, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(DATA_UY)).concat(getLatin2(135, -60))),
  ý: generateFontData(500, 225.5, 331.5, 10, 10, -119, -119, JSON.parse(JSON.stringify(DATA_LY)).concat(getLatin2(116.3, -60))),
  ÿ: generateFontData(500, 225.5, 331.5, 10, 10, -119, -119, JSON.parse(JSON.stringify(DATA_LY)).concat(getLatin5(116.3, -90)))
};

var DATA = Object.assign({}, UPPER, LOWER, NUMBER, SPECIAL, LATIN);
function typo(v) {
  var t = DATA[v] || DATA[TOFU];
  t.v = v;
  return t;
}

function getTextGroup(text, scale, width, isBreakAll) {
  var group;

  if (text.indexOf("\n") > 0) {
    group = text.split("\n");
  } else if (text.indexOf("\\n") > 0) {
    group = text.split("\\n");
  } else {
    group = [text];
  }

  if (width == 0) return keepAll(group);else if (isBreakAll) return breakAll(group, scale, width);else return breakWord(group, scale, width);
}

function keepAll(group) {
  var textGroup = [];
  var total = group.length;
  var i;

  for (i = 0; i < total; i++) {
    textGroup[i] = group[i].split("");
  }

  return textGroup;
}

function breakWord(group, scale, width) {
  var g2,
      g3,
      t,
      m_rect,
      tw = 0,
      tw2 = 0,
      i,
      j,
      k,
      total,
      j_total,
      k_total,
      index = 0;
  var tg = [];
  total = group.length;

  for (i = 0; i < total; i++) {
    g2 = group[i].split(" ");
    tg[index] = [];
    j_total = g2.length;

    for (j = 0; j < j_total; j++) {
      tw2 = 0;
      g3 = g2[j];
      k_total = g3.length;

      for (k = 0; k < k_total; k++) {
        t = typo(g3[k]);
        m_rect = getRect(t, scale);
        tw2 += m_rect.w;
      }

      t = typo(" ");
      m_rect = getRect(t, scale);
      tw2 += m_rect.w;
      tw += tw2;

      if (tw > width) {
        index += 1;
        tw = tw2;
        tg[index] = [];
      }

      tg[index].push(g3);
    }

    index += 1;
    tw = 0;
  }

  total = tg.length;
  var textGroup = [];

  for (i = 0; i < total; i++) {
    t = tg[i].join(" ").split("");

    if (t.length > 0) {
      textGroup.push(t);
    }
  }

  return textGroup;
}

function breakAll(group, scale, width) {
  var t,
      i,
      total,
      j,
      j_total,
      m_rect,
      g2,
      g3,
      tw = 0,
      index = 0;
  var tg = [];
  total = group.length;

  for (i = 0; i < total; i++) {
    g2 = group[i];
    tw = 0;
    tg[index] = [];
    j_total = g2.length;

    for (j = 0; j < j_total; j++) {
      g3 = g2[j];
      t = typo(g3);
      m_rect = getRect(t, scale);
      tw += m_rect.w;
      tg[index].push(g3);

      if (tw >= width) {
        index += 1;
        tw = m_rect.w;
        tg[index] = [];
      }
    }

    index += 1;
  }

  var textGroup = [];
  total = tg.length;

  for (i = 0; i < total; i++) {
    t = tg[i];

    if (t.length > 0) {
      if (t[0] == " ") t.shift();
      if (t[t.length - 1] == " ") t.pop();
      if (t.length > 0) textGroup.push(t);
    }
  }

  return textGroup;
}

function setAlignGapX(sw, tw) {
  return {
    c: (sw - tw) / 2,
    r: sw - tw,
    l: 0
  };
}
function getAlignGapX(align, alignGapX) {
  if (align == "center") {
    return alignGapX.c;
  } else if (align == "right") {
    return alignGapX.r;
  } else {
    return alignGapX.l;
  }
}

var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    this.lineWidth_ = 1;
    this.drawing_ = [];
    this.data_ = null;
    this.paths_ = null;
    this.lines_ = null;
    this.rect_ = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
    this.align_ = "left";
    this.scale_ = 1;
    this.fontRatio_ = 1;
  }

  _createClass(Model, [{
    key: "data",
    get: function get() {
      return this.data_;
    }
  }, {
    key: "paths",
    get: function get() {
      return this.paths_;
    }
  }, {
    key: "lines",
    get: function get() {
      return this.lines_;
    },
    set: function set(v) {
      this.lines_ = v;
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return this.lineWidth_;
    }
  }, {
    key: "fontRatio",
    get: function get() {
      return this.fontRatio_;
    }
  }, {
    key: "scale",
    get: function get() {
      return this.scale_;
    }
  }, {
    key: "rect",
    get: function get() {
      return this.rect_;
    }
  }, {
    key: "drawing",
    get: function get() {
      return this.drawing_;
    }
  }, {
    key: "align",
    get: function get() {
      return this.align_;
    },
    set: function set(v) {
      if (this.align_ != v) {
        this.align_ = v;
        this.setPosition();
      }
    }
  }, {
    key: "position",
    value: function position(x, y) {
      if (this.rect_.x != x || this.rect_.y != y) {
        this.rect_.x = x;
        this.rect_.y = y;
        this.setPosition();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.rect.x = d.originPos.x + this.rect_.x + getAlignGapX(this.align_, d.alignGapX);
        d.rect.y = d.originPos.y + this.rect_.y;
      }
    }
  }, {
    key: "updateDrawingPaths",
    value: function updateDrawingPaths() {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.drawingPaths = addRectToPaths(getPaths(this, d, -1, false), d);
      }
    }
  }, {
    key: "updatePatternPaths",
    value: function updatePatternPaths(pathGap) {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.rawPaths = getPaths(this, d, pathGap, true);
      }
    }
  }, {
    key: "updateWavePaths",
    value: function updateWavePaths(pathGap) {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.rawWavePaths = getPaths(this, d, pathGap, false);
      }
    }
  }, {
    key: "updateGuide",
    value: function updateGuide() {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.guide = getGuide(d.typo, this.scale);
        d.grid = getGrid(d.typo, this.scale);
      }
    }
  }, {
    key: "update",
    value: function update(text, width, breakWord, weight, size, tracking, leading) {
      var fontW = getFontW(weight);
      var weightRatio = getWeightRatio(fontW);
      var circleRound = getCircleRound(fontW);
      var scale = getScale(size);
      var m_tracking = getTracking(tracking, scale);
      var m_leading = getLeading(leading, scale);
      var fontRatio = getFontRatio(weightRatio);
      this.fontRatio_ = fontRatio;
      this.scale_ = scale;
      this.lineWidth_ = getLineW(fontW, scale);
      var textGroup = getTextGroup(text, scale, width, breakWord);
      var total = textGroup.length;
      var total2 = total - 1;
      var i,
          j,
          j_total,
          j_total2,
          gt,
          t,
          str,
          m_rect,
          s_pos,
          tw = 0,
          th = 0,
          tx = 0,
          ty = 0,
          maxW = 0,
          maxH = 0;
      var tmp = [];

      for (i = 0; i < total; i++) {
        gt = textGroup[i];
        j_total = gt.length;
        j_total2 = j_total - 1;
        tw = 0;
        tx = 0;
        tmp[i] = {
          tw: 0,
          arr: []
        };

        for (j = 0; j < j_total; j++) {
          str = gt[j];
          t = typo(str);
          m_rect = getRect(t, scale);
          tw += m_rect.w;
          th = m_rect.h;

          if (j < j_total2) {
            tw += m_tracking;
          }

          if (i < total2) {
            th += m_leading;
          }

          m_rect.x = tx;
          m_rect.y = ty;
          s_pos = {
            x: tx,
            y: ty
          };
          tmp[i].arr[j] = {
            str: str,
            typo: t,
            rect: m_rect,
            originPos: s_pos,
            center: getCenter(m_rect.w, m_rect.h, scale),
            range: getRange(t, weightRatio, circleRound)
          };
          tx = tw;
        }

        ty += th;
        tmp[i].tw = tw;
        maxW = Math.max(maxW, tw);
        maxH += th;
      }

      this.rect_.w = maxW;
      this.rect_.h = maxH;
      this.drawing_ = [];
      var arr = [];
      var aGapX, drawing;

      for (var _i = 0, _tmp = tmp; _i < _tmp.length; _i++) {
        var a = _tmp[_i];
        aGapX = setAlignGapX(maxW, a.tw);

        var _iterator = _createForOfIteratorHelper(a.arr),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var b = _step.value;
            b.alignGapX = aGapX;
            b.pointsLength = getLengths(b, this);
            arr.push(b);
            drawing = {
              value: 1
            };
            this.drawing_.push(drawing);
            b.drawing = drawing; // add converted Vector

            var _iterator2 = _createForOfIteratorHelper(b.typo.p),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var c = _step2.value;
                c.cv = [];

                var _iterator3 = _createForOfIteratorHelper(c.v),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var d = _step3.value;
                    c.cv.push(d.convert(b, this));
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.data_ = arr;
      this.setPosition();
    }
  }, {
    key: "updatePathsForRect",
    value: function updatePathsForRect() {
      var total = this.data_.length;
      var paths = [];
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];

        if (d.rawWavePaths) {
          d.wavePaths = addRectToPaths(d.rawWavePaths, d);
        }

        if (d.rawPaths) {
          d.paths = addRectToPaths(d.rawPaths, d);
          Array.prototype.push.apply(paths, d.paths);
        }
      }

      this.paths_ = paths;
    }
  }, {
    key: "updateLinesForRect",
    value: function updateLinesForRect() {
      var total = this.data_.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.data_[i];
        d.lines = getLines(d);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.lineWidth_ = 1;
      this.drawing_ = [];
      this.data_ = null;
      this.paths_ = null;
      this.lines_ = null;
      this.rect_ = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      };
      this.align_ = "left";
      this.scale_ = 1;
      this.fontRatio_ = 1;
    }
  }]);

  return Model;
}();

var LeonSans$1 = /*#__PURE__*/function (_Dispatcher) {
  _inherits(LeonSans, _Dispatcher);

  var _super = _createSuper(LeonSans);

  function LeonSans() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? "" : _ref$text,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? 500 : _ref$size,
        _ref$weight = _ref.weight,
        weight = _ref$weight === void 0 ? MIN_FONT_WEIGHT : _ref$weight,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? ["#000000"] : _ref$color,
        _ref$colorful = _ref.colorful,
        colorful = _ref$colorful === void 0 ? ["#c5d73f", "#9d529c", "#49a9db", "#fec330", "#5eb96e", "#fc5356", "#f38f31"] : _ref$colorful,
        _ref$tracking = _ref.tracking,
        tracking = _ref$tracking === void 0 ? 0 : _ref$tracking,
        _ref$leading = _ref.leading,
        leading = _ref$leading === void 0 ? 0 : _ref$leading,
        _ref$align = _ref.align,
        align = _ref$align === void 0 ? "left" : _ref$align,
        _ref$pathGap = _ref.pathGap,
        pathGap = _ref$pathGap === void 0 ? 0.5 : _ref$pathGap,
        _ref$amplitude = _ref.amplitude,
        amplitude = _ref$amplitude === void 0 ? 0.5 : _ref$amplitude,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 0 : _ref$width,
        _ref$breakWord = _ref.breakWord,
        breakWord = _ref$breakWord === void 0 ? false : _ref$breakWord,
        _ref$fps = _ref.fps,
        fps = _ref$fps === void 0 ? 30 : _ref$fps,
        _ref$isPath = _ref.isPath,
        isPath = _ref$isPath === void 0 ? false : _ref$isPath,
        _ref$isWave = _ref.isWave,
        isWave = _ref$isWave === void 0 ? false : _ref$isWave;

    _classCallCheck(this, LeonSans);

    _this = _super.call(this);
    _this.size_ = size;
    _this.weight_ = weight;
    _this.color_ = color;
    _this.colorful_ = shuffle(colorful);
    _this.tracking_ = tracking;
    _this.leading_ = leading;
    _this.pathGap_ = pathGap;
    _this.amplitude_ = amplitude;
    _this.width_ = width;
    _this.breakWord_ = breakWord;
    _this.fps_ = fps;
    _this.fpsTime_ = 1000 / _this.fps_;
    _this.isPath_ = isPath;
    _this.isWave_ = isWave;
    _this.model = new Model();
    _this.str_ = null;
    _this.time_ = null;
    _this.isFps_ = false;
    _this.isForceRander_ = false;
    _this.updateID_ = 0;
    _this.dPathsID_ = null;
    _this.pPathsID_ = null;
    _this.wPathsID_ = null;
    _this.guideID_ = null;
    _this.text = text;
    _this.model.align = align;
    return _this;
  }

  _createClass(LeonSans, [{
    key: "on",
    value: function on(event, callback) {
      _get(_getPrototypeOf(LeonSans.prototype), "on", this).call(this, event, callback);

      this.update();
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      _get(_getPrototypeOf(LeonSans.prototype), "off", this).call(this, event, callback);
    }
  }, {
    key: "text",
    get: function get() {
      return this.str_;
    },
    set: function set(str) {
      if (this.str_ == str) return;
      this.str_ = str;
      this.update();
    }
  }, {
    key: "size",
    get: function get() {
      return this.size_;
    },
    set: function set(v) {
      if (this.size_ == v) return;
      this.size_ = v;
      this.update();
      this.isForceRander_ = true;
    }
  }, {
    key: "weight",
    get: function get() {
      return this.weight_;
    },
    set: function set(v) {
      if (v < MIN_FONT_WEIGHT) {
        v = MIN_FONT_WEIGHT;
      } else if (v > MAX_FONT_WEIGHT) {
        v = MAX_FONT_WEIGHT;
      }

      if (this.weight_ == v) return;
      this.weight_ = v;
      this.update();
      this.isForceRander_ = true;
    }
  }, {
    key: "color",
    get: function get() {
      return this.color_;
    },
    set: function set(v) {
      if (this.color_ == v) return;
      this.color_ = v;
    }
  }, {
    key: "tracking",
    get: function get() {
      return this.tracking_;
    },
    set: function set(v) {
      if (this.tracking_ == v) return;
      this.tracking_ = v;
      this.update();
      this.isForceRander_ = true;
    }
  }, {
    key: "leading",
    get: function get() {
      return this.leading_;
    },
    set: function set(v) {
      if (this.leading_ == v) return;
      this.leading_ = v;
      this.update();
      this.isForceRander_ = true;
    }
  }, {
    key: "align",
    get: function get() {
      return this.model.align;
    },
    set: function set(v) {
      if (this.model.align != v) {
        this.model.align = v;
        this.updateID_++;
        this.updateSignal();
      }
    }
  }, {
    key: "pathGap",
    get: function get() {
      return this.pathGap_;
    },
    set: function set(v) {
      if (this.pathGap_ != v) {
        this.pathGap_ = v;
        this.updatePatternPaths(true);
        this.updateWavePaths(true);
        this.isForceRander_ = true;
      }
    }
  }, {
    key: "amplitude",
    get: function get() {
      return this.amplitude_;
    },
    set: function set(v) {
      this.amplitude_ = v;
    }
  }, {
    key: "rect",
    get: function get() {
      return this.model.rect;
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return this.width_;
    },
    set: function set(v) {
      if (this.width_ == v) return;
      this.width_ = v;
      this.update();
    }
  }, {
    key: "breakWord",
    get: function get() {
      return this.breakWord_;
    },
    set: function set(v) {
      if (this.breakWord_ == v) return;
      this.breakWord_ = v;
      this.update();
    }
  }, {
    key: "isPath",
    get: function get() {
      return this.isPath_;
    },
    set: function set(v) {
      this.isPath_ = v;
      this.updatePatternPaths(true);
    }
  }, {
    key: "isWave",
    get: function get() {
      return this.isWave_;
    },
    set: function set(v) {
      this.isWave_ = v;
      this.updateWavePaths(true);
    }
  }, {
    key: "fps",
    get: function get() {
      return this.fps_;
    },
    set: function set(v) {
      this.fps_ = v;
      this.fpsTime_ = 1000 / this.fps_;
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return this.model.lineWidth;
    }
  }, {
    key: "scale",
    get: function get() {
      return this.model.scale;
    }
  }, {
    key: "drawing",
    get: function get() {
      return this.model.drawing;
    }
  }, {
    key: "data",
    get: function get() {
      return this.model.data;
    }
  }, {
    key: "paths",
    get: function get() {
      return this.model.paths;
    }
  }, {
    key: "drawingPaths",
    get: function get() {
      return this.model.drawingPaths;
    }
  }, {
    key: "wavePaths",
    get: function get() {
      return this.model.wavePaths;
    }
  }, {
    key: "position",
    value: function position() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.model.position(x, y)) {
        this.updateID_++;
        this.updateSignal();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.updateID_++;
      this.model.update(this.str_, this.width_, this.breakWord_, this.weight_, this.size_, this.tracking_, this.leading_);

      if (this.isPath_ || this.isWave_) {
        this.updatePatternPaths();
        this.updateWavePaths();
      } else {
        this.updateSignal();
      }
    }
  }, {
    key: "updateGuide",
    value: function updateGuide() {
      if (this.guideID_ != this.updateID_) {
        this.guideID_ = this.updateID_;
        this.model.updateGuide();
      }
    }
    /**
     * Update paths for drawing in WebGL (PIXI.js). It's very expensive, only call when it needs.
     */

  }, {
    key: "updateDrawingPaths",
    value: function updateDrawingPaths() {
      if (this.dPathsID_ != this.updateID_) {
        this.dPathsID_ = this.updateID_;
        this.model.updateDrawingPaths();
      }
    }
    /**
     * Update paths for pattern
     * @param {boolean} force - Force execution
     */

  }, {
    key: "updatePatternPaths",
    value: function updatePatternPaths(force) {
      if (this.isPath_ && (force || this.pPathsID_ != this.updateID_)) {
        this.pPathsID_ = this.updateID_;
        this.model.updatePatternPaths(this.pathGap_);
        this.isForceRander_ = true;
        this.updateSignal();
      }
    }
    /**
     * Update paths for wave effect
     * @param {boolean} force - Force execution
     */

  }, {
    key: "updateWavePaths",
    value: function updateWavePaths(force) {
      if (this.isWave_ && (force || this.wPathsID_ != this.updateID_)) {
        this.wPathsID_ = this.updateID_;
        this.model.updateWavePaths(this.pathGap_);
        this.isForceRander_ = true;
        this.updateSignal();
      }
    }
  }, {
    key: "updateSignal",
    value: function updateSignal() {
      this.model.updateLinesForRect();
      this.model.updatePathsForRect();
      this.dispatch("update", this.model);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.size_ = 500;
      this.weight_ = MIN_FONT_WEIGHT;
      this.color_ = ["#000000"];
      this.tracking_ = 0;
      this.leading_ = 0;
      this.pathGap_ = 0.5;
      this.amplitude_ = 0.5;
      this.width_ = 0;
      this.breakWord_ = false;
      this.fps_ = 30;
      this.fpsTime_ = 1000 / this.fps_;
      this.isPath_ = false;
      this.isWave_ = false;
      this.str_ = null;
      this.time_ = null;
      this.isFps_ = false;
      this.isForceRander_ = false;
      this.updateID_ = 0;
      this.dPathsID_ = null;
      this.pPathsID_ = null;
      this.wPathsID_ = null;
      this.guideID_ = null;
      this.model.reset();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.reset();
      this.model = null;
    }
    /**
     * Draw text in WebGL with PIXI.js
     * @param {PIXI.Graphics} graphics
     */

  }, {
    key: "drawPixi",
    value: function drawPixi(graphics) {
      var total = this.model.data.length;
      var i, d, color;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        color = PixiColor(i, d, this.color_);
        PixiLines(graphics, d, this.lineWidth, color);
      }
    }
    /**
     * Draw text in the Canvas element.
     * @param {CanvasRenderingContext2D} ctx
     */

  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.lineWidth = this.lineWidth;
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        Color(ctx, i, d, this.color_);
        Lines(ctx, d);
      }
    }
    /**
     * Draw the colorful effect.
     * @param {CanvasRenderingContext2D} ctx
     */

  }, {
    key: "drawColorful",
    value: function drawColorful(ctx) {
      ctx.lineWidth = this.lineWidth;
      Colorful(ctx, this.model, this.colorful_);
    }
    /**
     * Draw the wave effect.
     * @param {CanvasRenderingContext2D} ctx
     * @param {DOMHighResTimeStamp} t time stemp from requestAnimationFrame()
     */

  }, {
    key: "wave",
    value: function wave(ctx, t) {
      ctx.lineWidth = this.lineWidth;

      if (t) {
        if (!this.time_) this.time_ = t;
        var p = t - this.time_;

        if (p > this.fpsTime_ || this.isForceRander_) {
          this.time_ = t;
          this.isFps_ = true;
        } else {
          this.isFps_ = false;
        }
      }

      this.isForceRander_ = false;
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        Color(ctx, i, d, this.color_);
        Wave(ctx, d, this.model.scale, this.amplitude_, this.weight_, this.isFps_);
      }
    }
    /**
     * Draw rectangle shapes at each path point.
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} w pattern width
     * @param {number} h pattern height
     */

  }, {
    key: "pattern",
    value: function pattern(ctx, w, h) {
      var tw = w * this.model.scale;
      var th = h * this.model.scale;
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        Pattern(ctx, d, tw, th);
      }
    }
    /**
     * Draw grid for each type.
     * @param {CanvasRenderingContext2D} ctx
     */

  }, {
    key: "grid",
    value: function grid(ctx) {
      this.updateGuide();
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        Grids(ctx, d);
      }
    }
    /**
     * Draw circles at each drawing point and lines for each type.
     * @param {CanvasRenderingContext2D} ctx
     */

  }, {
    key: "point",
    value: function point(ctx) {
      var total = this.model.data.length;
      var i, d;

      for (i = 0; i < total; i++) {
        d = this.model.data[i];
        Points(ctx, d);
      }
    }
    /**
     * Draw outline box for the text.
     * @param {CanvasRenderingContext2D} ctx
     * @private
     */

  }, {
    key: "box",
    value: function box(ctx) {
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.strokeStyle = "#0b90dc";
      ctx.rect(this.model.rect.x, this.model.rect.y, this.model.rect.w, this.model.rect.h);
      ctx.stroke();
    }
  }]);

  return LeonSans;
}(Dispatcher);

var cValue = 0;
var PI2 = 2 * Math.PI;

var LeonSans = /*#__PURE__*/function (_MC$BrowserClip) {
  _inherits(LeonSans, _MC$BrowserClip);

  var _super = _createSuper(LeonSans);

  function LeonSans() {
    _classCallCheck(this, LeonSans);

    return _super.apply(this, arguments);
  }

  _createClass(LeonSans, [{
    key: "html",
    get: function get() {
      return " <canvas> </canvas>";
    }
  }, {
    key: "onAfterRender",
    value: function onAfterRender() {
      this.cValue = 0;
      var canvas = this.context.getElements("canvas")[0];
      this.sw = this.attrs.sw;
      this.sh = this.attrs.sh;
      var pixelRatio = 2;
      this.ctx = canvas.getContext("2d");
      canvas.width = this.sw * pixelRatio;
      canvas.height = this.sh * pixelRatio;
      canvas.style.width = this.sw + "px";
      canvas.style.height = this.sh + "px";
      this.ctx.scale(pixelRatio, pixelRatio);
      var leon = new LeonSans$1({
        text: this.attrs.text,
        color: this.attrs.color,
        weight: this.attrs.weight,
        isPath: true,
        pathGap: this.attrs.pathGap || this.attrs.drawing === "colorPattern" ? -1 : 0,
        isWave: this.attrs.drawing === "wave" ? true : false,
        tracking: this.attrs.tracking,
        leading: this.attrs.leading,
        size: this.attrs.size || 80,
        patternWidth: 10,
        patternHeight: 90,
        colorful: this.attrs.colorful
      }); // leon.grid(this.ctx);

      this.attrs.round ? this.ctx.lineCap = "round" : this.ctx.lineCap = "butt";
      this.attrs.multiply ? this.ctx.globalCompositeOperation = "multiply" : this.ctx.globalCompositeOperation = "source-over";
      this.setCustomEntity(this.attrs.canvasId, {
        leon: leon,
        ctx: this.ctx,
        sw: this.sw,
        sh: this.sh,
        drawing: this.attrs.drawing,
        pathGap: this.attrs.pathGap,
        patternWidth: this.attrs.patternWidth,
        patternHeight: this.attrs.patternHeight
      }); // switch (this.attrs.drawing) {
      //   case "colorful":
      //     leon.drawColorful(this.ctx);
      //     break;
      //   case "pattern":
      //     leon.pattern(
      //       this.ctx,
      //       this.attrs.patternWidth,
      //       this.attrs.patternHeight
      //     );
      //     break;
      //   case "wave":
      //     break;
      //   default:
      //     leon.draw(this.ctx);
      // }

      this.leon = leon;
    }
  }, {
    key: "onAfterProgress",
    value: function onAfterProgress() {
      if (this.attrs.drawing === "colorPattern") {
        this.ctx.clearRect(0, 0, this.sw, this.sh);
        this.ctx.lineWidth = 0.2;
        var w = this.attrs.patternWidth;
        var total = this.leon.data.length;
        var i,
            pos,
            no = 0;
        var d, j, j_total;

        for (i = 0; i < total; i++) {
          d = this.leon.data[i].paths;
          j_total = Math.round(d.length * this.leon.drawing[i].value);

          for (j = 0; j < j_total; j++) {
            pos = d[j];
            this.ctx.fillStyle = this.randomColor(no);
            this.ctx.strokeStyle = this.randomColor(no);
            this.ctx.beginPath();
            this.ctx.arc(pos.x, pos.y, w, 0, PI2);
            this.ctx.stroke();
            no += 1;
          }
        }

        cValue -= this.attrs.speed;
      }
    }
  }, {
    key: "randomColor",
    value: function randomColor(no) {
      return "hsl(" + (no + cValue) + "," + "70%," + "50%)";
    }
  }]);

  return LeonSans;
}(MC.BrowserClip);

var compositeAttributes = {
  LeonAttrs: ["completion_rate", "weight", "tracking", "leading", "size", "pathGap", "patternWidth", "patternHeight"]
};

var dont = false;

var testIn = /*#__PURE__*/function (_MC$Effect) {
  _inherits(testIn, _MC$Effect);

  var _super = _createSuper(testIn);

  function testIn() {
    _classCallCheck(this, testIn);

    return _super.apply(this, arguments);
  }

  _createClass(testIn, [{
    key: "getScratchValue",
    value: function getScratchValue() {
      if (this.attributeKey === "LeonAttrs") {
        var obj = {};
        var LeonAttrs = compositeAttributes[this.attributeKey];
        var currentLeonAttrs = this.element.entity.leon;

        for (var i = 0; i < LeonAttrs.length; i++) {
          obj[LeonAttrs[i]] = currentLeonAttrs[LeonAttrs[i]];
        }

        return obj;
      }
    }
  }, {
    key: "onProgress",
    value: function onProgress(f) {
      var _this = this;

      var drawning = function drawning() {
        switch (_this.element.entity.drawing) {
          case "colorful":
            _this.element.entity.leon.drawColorful(_this.element.entity.ctx);

            break;

          case "pattern":
            //this.element.entity.ctx.fillStyle = "#32a852";
            // console.log(this.element.entity.ctx.fillStyle);
            _this.element.entity.leon.pattern(_this.element.entity.ctx, _this.element.entity.leon.patternWidth ? _this.element.entity.leon.patternWidth : _this.element.entity.patternWidth, _this.element.entity.leon.patternHeight ? _this.element.entity.leon.patternHeight : _this.element.entity.patternHeight);

            break;

          case "wave":
            break;

          case "colorPattern":
            break;

          default:
            if (!dont) {
              _this.element.entity.leon.draw(_this.element.entity.ctx);
            }

        }
      };

      var clearRect = function clearRect() {
        _this.element.entity.ctx.clearRect(0, 0, _this.element.entity.sw, _this.element.entity.sh);
      };

      var animate = function animate() {
        for (var j = 0; j < compositeAttributes.LeonAttrs.length; j++) {
          var t = compositeAttributes.LeonAttrs[j];

          if (_this.targetValue.hasOwnProperty("completion_rate")) {
            dont = false;
          }

          _this.element.entity.leon[t] = f * (_this.targetValue[t] - _this.initialValue[t]) + _this.initialValue[t];

          if (t === "completion_rate") {
            var i = void 0;
            var total = _this.element.entity.leon.drawing.length;

            for (i = 0; i < total; i++) {
              _this.element.entity.leon.drawing[i].value = f * (_this.targetValue[t] - _this.initialValue[t]) + _this.initialValue[t];
            }

            dont = true;
          }
        }
      };

      for (var j = 0; j < compositeAttributes.LeonAttrs.length; j++) {
        var t = compositeAttributes.LeonAttrs[j];

        if (this.initialValue[t] !== this.targetValue[t]) {
          if (this.targetValue.hasOwnProperty("completion_rate")) {
            dont = false;
          } else {
            dont = true;
          }

          this.element.entity.leon[t] = f * (this.targetValue[t] - this.initialValue[t]) + this.initialValue[t];
        }
      }

      clearRect(); // console.log("initial", this.initialValue, "target", this.targetValue);

      if (!dont) {
        animate();
        drawning();
      }
    }
  }]);

  return testIn;
}(MC.Effect);

var _COLOR = "color";
var animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    LeonAttrs: {
      optional: false,
      type: "object",
      props: {
        completion_rate: {
          type: "number",
          integer: false,
          optional: true,
          max: 1,
          min: 0
        },
        weight: {
          type: "number",
          optional: true,
          min: 0
        },
        pathGap: {
          type: "number",
          optional: true
        },
        patternWidth: {
          type: "number",
          optional: true
        },
        patternHeight: {
          type: "number",
          optional: true
        },
        tracking: {
          type: "number",
          optional: true
        },
        leading: {
          type: "number",
          optional: true
        },
        size: {
          type: "number",
          optional: true
        },
        selector: {
          type: "number",
          optional: true
        }
      }
    }
  }
};
var clipValidationRules = {
  canvasId: {
    type: "string",
    optional: false
  },
  sw: {
    type: "number",
    optional: true,
    min: 0
  },
  sh: {
    type: "number",
    optional: true,
    min: 0
  },
  text: {
    type: "string",
    optional: false
  },
  weight: {
    type: "number",
    optional: true,
    min: 0
  },
  round: {
    type: "boolean",
    optional: true
  },
  multiply: {
    type: "boolean",
    optional: true
  },
  drawing: {
    type: "enum",
    values: ["drawing", "pattern", "colorful", "colorPattern"],
    optional: true
  },
  color: {
    optional: true,
    type: "array",
    items: {
      optional: true,
      type: "array",
      items: {
        type: _COLOR,
        optional: true
      }
    }
  },
  colorful: {
    optional: true,
    type: "array",
    items: {
      type: _COLOR,
      optional: true
    }
  },
  pathGap: {
    type: "number",
    optional: true
  },
  patternWidth: {
    type: "number",
    optional: true
  },
  patternHeight: {
    type: "number",
    optional: true
  },
  speed: {
    type: "number",
    optional: true
  },
  tracking: {
    type: "number",
    optional: true
  },
  leading: {
    type: "number",
    optional: true
  },
  size: {
    type: "number",
    optional: true
  }
};

var name = "@donkeyclip/motorcortex-leonsans";
var version = "1.0.14";

var index = {
  npm_name: name,
  version: version,
  Clip: {
    exportable: LeonSans,
    attributesValidationRules: _objectSpread2({}, clipValidationRules)
  },
  incidents: [{
    exportable: testIn,
    name: "LeonIncident",
    attributesValidationRules: {
      animatedAttrs: animatedAttrs
    }
  }],
  compositeAttributes: compositeAttributes
};

export { index as default };

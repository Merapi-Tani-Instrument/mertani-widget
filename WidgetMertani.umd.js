(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WidgetMertani"] = factory(require("vue"));
	else
		root["WidgetMertani"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__9274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9624:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 9274:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9274__;

/***/ }),

/***/ 9306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 3506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isPossiblePrototype = __webpack_require__(3925);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 8551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 7811:
/***/ (function(module) {


// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ 7394:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThisAccessor = __webpack_require__(6706);
var classof = __webpack_require__(4576);

var $TypeError = TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new $TypeError('ArrayBuffer expected');
  return O.byteLength;
};


/***/ }),

/***/ 3238:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var arrayBufferByteLength = __webpack_require__(7394);

var slice = uncurryThis(ArrayBuffer.prototype.slice);

module.exports = function (O) {
  if (arrayBufferByteLength(O) !== 0) return false;
  try {
    slice(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 5636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var uncurryThis = __webpack_require__(9504);
var uncurryThisAccessor = __webpack_require__(6706);
var toIndex = __webpack_require__(7696);
var isDetached = __webpack_require__(3238);
var arrayBufferByteLength = __webpack_require__(7394);
var detachTransferable = __webpack_require__(4483);
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(1548);

var structuredClone = global.structuredClone;
var ArrayBuffer = global.ArrayBuffer;
var DataView = global.DataView;
var TypeError = global.TypeError;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataViewPrototype = DataView.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);

module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  if (isDetached(arrayBuffer)) throw new TypeError('ArrayBuffer is detached');
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
    newBuffer = new ArrayBuffer(newByteLength, options);
    var a = new DataView(arrayBuffer);
    var b = new DataView(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};


/***/ }),

/***/ 4644:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_ARRAY_BUFFER = __webpack_require__(7811);
var DESCRIPTORS = __webpack_require__(3724);
var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var hasOwn = __webpack_require__(9297);
var classof = __webpack_require__(6955);
var tryToString = __webpack_require__(6823);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineBuiltInAccessor = __webpack_require__(2106);
var isPrototypeOf = __webpack_require__(1625);
var getPrototypeOf = __webpack_require__(2787);
var setPrototypeOf = __webpack_require__(2967);
var wellKnownSymbol = __webpack_require__(8227);
var uid = __webpack_require__(3392);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ 5370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var lengthOfArrayLike = __webpack_require__(6198);

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ 9617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(5397);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var isArray = __webpack_require__(4376);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 7628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var lengthOfArrayLike = __webpack_require__(6198);

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ 9928:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var lengthOfArrayLike = __webpack_require__(6198);
var toIntegerOrInfinity = __webpack_require__(1291);

var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


/***/ }),

/***/ 4576:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 6955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var isCallable = __webpack_require__(4901);
var classofRaw = __webpack_require__(4576);
var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(9297);
var ownKeys = __webpack_require__(5031);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 2211:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 6699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 6980:
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 2106:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var makeBuiltIn = __webpack_require__(283);
var defineProperty = __webpack_require__(4913);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 6840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);
var definePropertyModule = __webpack_require__(4913);
var makeBuiltIn = __webpack_require__(283);
var defineGlobalProperty = __webpack_require__(9433);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 9433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 3724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 4483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var tryNodeRequire = __webpack_require__(9714);
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(1548);

var structuredClone = global.structuredClone;
var $ArrayBuffer = global.ArrayBuffer;
var $MessageChannel = global.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER) {
  detach = function (transferable) {
    structuredClone(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = tryNodeRequire('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

module.exports = detach;


/***/ }),

/***/ 4055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 6837:
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 7290:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_DENO = __webpack_require__(516);
var IS_NODE = __webpack_require__(9088);

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ 516:
/***/ (function(module) {


/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ 9088:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var classof = __webpack_require__(4576);

module.exports = classof(global.process) === 'process';


/***/ }),

/***/ 9392:
/***/ (function(module) {


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7388:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var userAgent = __webpack_require__(9392);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 8727:
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 6518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineGlobalProperty = __webpack_require__(9433);
var copyConstructorProperties = __webpack_require__(7740);
var isForced = __webpack_require__(2796);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 9039:
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 616:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 9565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(616);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var hasOwn = __webpack_require__(9297);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 6706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 9504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 5966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 4475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 9297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 421:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 5917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);
var createElement = __webpack_require__(4055);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 7055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var classof = __webpack_require__(4576);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 3706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var isCallable = __webpack_require__(4901);
var store = __webpack_require__(7629);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 1181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(8622);
var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);
var hasOwn = __webpack_require__(9297);
var shared = __webpack_require__(7629);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 4376:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(4576);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 1108:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6955);

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};


/***/ }),

/***/ 4901:
/***/ (function(module) {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 2796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 4117:
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 34:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(4901);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 3925:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(34);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 6395:
/***/ (function(module) {


module.exports = false;


/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(8014);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 283:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var DESCRIPTORS = __webpack_require__(3724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(350).CONFIGURABLE);
var inspectSource = __webpack_require__(3706);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 741:
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var IE8_DOM_DEFINE = __webpack_require__(5917);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var anObject = __webpack_require__(8551);
var toPropertyKey = __webpack_require__(6969);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var call = __webpack_require__(9565);
var propertyIsEnumerableModule = __webpack_require__(8773);
var createPropertyDescriptor = __webpack_require__(6980);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var hasOwn = __webpack_require__(9297);
var IE8_DOM_DEFINE = __webpack_require__(5917);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 2787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(9297);
var isCallable = __webpack_require__(4901);
var toObject = __webpack_require__(8981);
var sharedKey = __webpack_require__(6119);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(2211);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 1625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var toIndexedObject = __webpack_require__(5397);
var indexOf = (__webpack_require__(9617).indexOf);
var hiddenKeys = __webpack_require__(421);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 8773:
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2967:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(6706);
var isObject = __webpack_require__(34);
var requireObjectCoercible = __webpack_require__(7750);
var aPossiblePrototype = __webpack_require__(3506);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 4270:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5031:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var anObject = __webpack_require__(8551);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 7750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(4117);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(5745);
var uid = __webpack_require__(3392);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 7629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(6395);
var globalThis = __webpack_require__(4475);
var defineGlobalProperty = __webpack_require__(9433);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.36.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 5745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(7629);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 1548:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var fails = __webpack_require__(9039);
var V8 = __webpack_require__(7388);
var IS_BROWSER = __webpack_require__(7290);
var IS_DENO = __webpack_require__(516);
var IS_NODE = __webpack_require__(9088);

var structuredClone = global.structuredClone;

module.exports = !!structuredClone && !fails(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((IS_DENO && V8 > 92) || (IS_NODE && V8 > 94) || (IS_BROWSER && V8 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});


/***/ }),

/***/ 4495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7388);
var fails = __webpack_require__(9039);
var global = __webpack_require__(4475);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 5610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(1291);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(2777);

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ 7696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(1291);
var toLength = __webpack_require__(8014);

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ 5397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7055);
var requireObjectCoercible = __webpack_require__(7750);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 1291:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(741);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 8014:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(1291);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 8981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(7750);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(9565);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var getMethod = __webpack_require__(5966);
var ordinaryToPrimitive = __webpack_require__(4270);
var wellKnownSymbol = __webpack_require__(8227);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 6969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(2777);
var isSymbol = __webpack_require__(757);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 655:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6955);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 9714:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_NODE = __webpack_require__(9088);

module.exports = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE) return Function('return require("' + name + '")')();
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 6823:
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(9504);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7040:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4495);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8686:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 2812:
/***/ (function(module) {


var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 8622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 8227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(4475);
var shared = __webpack_require__(5745);
var hasOwn = __webpack_require__(9297);
var uid = __webpack_require__(3392);
var NATIVE_SYMBOL = __webpack_require__(4495);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6573:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var defineBuiltInAccessor = __webpack_require__(2106);
var isDetached = __webpack_require__(3238);

var ArrayBufferPrototype = ArrayBuffer.prototype;

if (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {
  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}


/***/ }),

/***/ 7936:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var $transfer = __webpack_require__(5636);

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});


/***/ }),

/***/ 8100:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var $transfer = __webpack_require__(5636);

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, true);
  }
});


/***/ }),

/***/ 4114:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6518);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var setArrayLength = __webpack_require__(4527);
var doesNotExceedSafeInteger = __webpack_require__(6837);
var fails = __webpack_require__(9039);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 7467:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var arrayToReversed = __webpack_require__(7628);
var ArrayBufferViewCore = __webpack_require__(4644);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


/***/ }),

/***/ 4732:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var ArrayBufferViewCore = __webpack_require__(4644);
var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);
var arrayFromConstructorAndList = __webpack_require__(5370);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
  return sort(A, compareFn);
});


/***/ }),

/***/ 9577:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var arrayWith = __webpack_require__(9928);
var ArrayBufferViewCore = __webpack_require__(4644);
var isBigIntArray = __webpack_require__(1108);
var toIntegerOrInfinity = __webpack_require__(1291);
var toBigInt = __webpack_require__(5854);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER);


/***/ }),

/***/ 4603:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(6840);
var uncurryThis = __webpack_require__(9504);
var toString = __webpack_require__(655);
var validateArgumentsLength = __webpack_require__(2812);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 7566:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var defineBuiltIn = __webpack_require__(6840);
var uncurryThis = __webpack_require__(9504);
var toString = __webpack_require__(655);
var validateArgumentsLength = __webpack_require__(2812);

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ 8721:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(3724);
var uncurryThis = __webpack_require__(9504);
var defineBuiltInAccessor = __webpack_require__(2106);

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(9274);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainLayout.vue?vue&type=template&id=4491bed8&scoped=true&ts=true

const _withScopeId = n => (_pushScopeId("data-v-4491bed8"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  class: "wg-main-layout"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_WidgetSelector = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("WidgetSelector");
  const _component_gridItem = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("gridItem");
  const _component_gridster = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("gridster");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_WidgetSelector, {
    onChange: $setup.widgetSelectorEvent,
    onCancelEdit: $setup.onCancel,
    layoutName: $props.layoutName
  }, null, 8, ["onChange", "onCancelEdit", "layoutName"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)([{
      "height": "100%"
    }, {
      paddingTop: !$setup.data.widgetSelectorEvent.showSelector ? '50px' : '0'
    }])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_gridster, {
    options: $setup.data.options
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(slotProps => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($setup.data.widgets, widget => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_gridItem, {
        key: widget,
        gridster: slotProps.gridster,
        item: widget,
        event: $setup.data.event
      }, null, 8, ["gridster", "item", "event"]);
    }), 128))]),
    _: 1
  }, 8, ["options"])], 4)]);
}
;// CONCATENATED MODULE: ./src/components/MainLayout.vue?vue&type=template&id=4491bed8&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/gridster.vue?vue&type=template&id=271798fe&ts=true

const gridstervue_type_template_id_271798fe_ts_true_hoisted_1 = {
  class: "gridster",
  ref: "root"
};
function gridstervue_type_template_id_271798fe_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GridPreview = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("GridPreview");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", gridstervue_type_template_id_271798fe_ts_true_hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($setup.dataReactive.gridsterComponent.gridColumns, (item, idx) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      class: "gridster-column",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($setup.getGridColumnStyle(idx)),
      key: idx
    }, null, 4);
  }), 128)), ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($setup.dataReactive.gridsterComponent.gridRows, (item, idx) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      class: "gridster-row",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($setup.getGridRowStyle(idx)),
      key: idx
    }, null, 4);
  }), 128)), $setup.dataReactive.ready ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default", {
    key: 0,
    gridster: $setup.dataReactive.gridsterComponent
  }) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_GridPreview, {
    previewStyle: $setup.dataReactive.gridsterComponent.previewStyle$,
    render: $setup.dataReactive.gridsterComponent.renderer,
    renderer: $setup.dataReactive.gridsterComponent.gridRenderer
  }, null, 8, ["previewStyle", "render", "renderer"])], 512);
}
;// CONCATENATED MODULE: ./src/grid/gridster.vue?vue&type=template&id=271798fe&ts=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({
      value: value,
      dispose: dispose,
      async: async
    });
  } else if (async) {
    env.stack.push({
      async: true
    });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function (e) {
          fail(e);
          return next();
        });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}
/* harmony default export */ var tslib_es6 = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources
});
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === 'function';
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function (instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
  };
});
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js





var Subscription = function () {
  function Subscription(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription.prototype.unsubscribe = function () {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription.prototype.add = function (teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription.prototype._hasParent = function (parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription.prototype._addParent = function (parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription.prototype._removeParent = function (parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription.prototype.remove = function (teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  };
  Subscription.EMPTY = function () {
    var empty = new Subscription();
    empty.closed = true;
    return empty;
  }();
  return Subscription;
}();

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
  setTimeout: function (handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function (handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function () {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function () {
  return createNotification('C', undefined, undefined);
}();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind: kind,
    value: value,
    error: error
  };
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      var _a = context,
        errorThrown = _a.errorThrown,
        error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = function (_super) {
  __extends(Subscriber, _super);
  function Subscriber(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber.create = function (next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber.prototype.next = function (value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber.prototype.error = function (err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber.prototype.complete = function () {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };
  Subscriber.prototype._error = function (err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber;
}(Subscription);

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function () {
  function ConsumerObserver(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver.prototype.next = function (value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver.prototype.error = function (err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver.prototype.complete = function () {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver;
}();
var SafeSubscriber = function (_super) {
  __extends(SafeSubscriber, _super);
  function SafeSubscriber(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function () {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber;
}(Subscriber);

function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function () {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js







var Observable = function () {
  function Observable(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };
  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function () {
      var _a = _this,
        operator = _a.operator,
        source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function (value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable.prototype._subscribe = function (subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable.prototype[observable] = function () {
    return this;
  };
  Observable.prototype.pipe = function () {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;
      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };
  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };
  return Observable;
}();

function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = 'ObjectUnsubscribedError';
    this.message = 'object unsubscribed';
  };
});
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js







var Subject = function (_super) {
  __extends(Subject, _super);
  function Subject() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject.prototype._throwIfClosed = function () {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject.prototype.next = function (value) {
    var _this = this;
    errorContext(function () {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    });
  };
  Subject.prototype.error = function (err) {
    var _this = this;
    errorContext(function () {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject.prototype.complete = function () {
    var _this = this;
    errorContext(function () {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject.prototype.unsubscribe = function () {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject.prototype, "observed", {
    get: function () {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject.prototype._trySubscribe = function (subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject.prototype._subscribe = function (subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject.prototype._innerSubscribe = function (subscriber) {
    var _this = this;
    var _a = this,
      hasError = _a.hasError,
      isStopped = _a.isStopped,
      observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function () {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject.prototype._checkFinalizedStatuses = function (subscriber) {
    var _a = this,
      hasError = _a.hasError,
      thrownError = _a.thrownError,
      isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject.prototype.asObservable = function () {
    var observable = new Observable();
    observable.source = this;
    return observable;
  };
  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject;
}(Observable);

var AnonymousSubject = function (_super) {
  __extends(AnonymousSubject, _super);
  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject.prototype.next = function (value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject.prototype.error = function (err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject.prototype.complete = function () {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject;
}(Subject);

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action = function (_super) {
  __extends(Action, _super);
  function Action(scheduler, work) {
    return _super.call(this) || this;
  }
  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return this;
  };
  return Action;
}(Subscription);

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
  setInterval: function (handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearInterval: function (handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction = function (_super) {
  __extends(AsyncAction, _super);
  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction.prototype.schedule = function (state, delay) {
    var _a;
    if (delay === void 0) {
      delay = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };
  AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  };
  AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return undefined;
  };
  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    var error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction.prototype._execute = function (state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction.prototype.unsubscribe = function () {
    if (!this.closed) {
      var _a = this,
        id = _a.id,
        scheduler = _a.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction;
}(Action);

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now: function () {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Scheduler.js

var Scheduler = function () {
  function Scheduler(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  };
  Scheduler.now = dateTimestampProvider.now;
  return Scheduler;
}();

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js



var AsyncScheduler = function (_super) {
  __extends(AsyncScheduler, _super);
  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler;
}(Scheduler);

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js


var asyncScheduler = new AsyncScheduler(AsyncAction);
var async_async = asyncScheduler;
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function (source) {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function (_super) {
  __extends(OperatorSubscriber, _super);
  function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber.prototype.unsubscribe = function () {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber;
}(Subscriber);

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js



function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = asyncScheduler;
  }
  return operate(function (source, subscriber) {
    var activeTask = null;
    var lastValue = null;
    var lastTime = null;
    var emit = function () {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      var targetTime = lastTime + dueTime;
      var now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe(createOperatorSubscriber(subscriber, function (value) {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, function () {
      emit();
      subscriber.complete();
    }, undefined, function () {
      lastValue = activeTask = null;
    }));
  });
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
  return isFunction(input[observable]);
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js



function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1,, 9, 10]);
          _b.label = 2;
        case 2:
          if (false) {}
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done) return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js













function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function (subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new Observable(function (subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function (subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function (subscriber) {
    process(asyncIterable, subscriber).catch(function (err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function () {
    var value, e_2_1;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = {
            error: e_2_1
          };
          return [3, 11];
        case 6:
          _b.trys.push([6,, 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2) throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js




function takeUntil(notifier) {
  return operate(function (source, subscriber) {
    innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function () {
      return subscriber.complete();
    }, noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js



function switchMap(project, resultSelector) {
  return operate(function (source, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
      return isComplete && !innerSubscriber && subscriber.complete();
    };
    source.subscribe(createOperatorSubscriber(subscriber, function (value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function (innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function () {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function () {
      isComplete = true;
      checkComplete();
    }));
  });
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js

function isScheduler(value) {
  return value && isFunction(value.schedule);
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/timer.js




function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async_async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function (subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
;// CONCATENATED MODULE: ./src/grid/angular.impl.ts

class EventEmitterImpl {
  constructor() {
    _defineProperty(this, "observer", void 0);
  }
  complete() {}
  next(value) {
    if (this.observer) {
      this.observer(value);
    }
  }
  emit(value) {
    throw new Error("Method not implemented.");
  }
  subscribe(observerOrNext, error, complete) {
    this.observer = observerOrNext;
  }
}
class Renderer2Impl {
  listen(d, e, cb) {
    if (typeof d == "string") {
      switch (d) {
        case "window":
          window.addEventListener(e, cb);
          return () => window.removeEventListener(e, cb);
        case "document":
          document.addEventListener(e, cb);
          return () => document.removeEventListener(e, cb);
        default:
          throw new Error(`Method not implemented. ${d}`);
      }
    } else {
      let h = d;
      h.addEventListener(e, cb);
      return () => h.removeEventListener(e, cb);
    }
  }
  removeClass(e, className) {
    e.classList.remove(className);
  }
  addClass(e, className) {
    e.classList.add(className);
  }
  setStyle(e, prop, value) {
    e.style[prop] = value;
  }
}
class NgZoneImpl {
  runOutsideAngular(cb) {
    cb();
  }
  run(cb) {
    cb();
  }
}
class ChangeDetectorRefImpl {
  markForCheck() {}
}
;// CONCATENATED MODULE: ./src/grid/gridsterConfig.interface.ts
var GridType;
(function (GridType) {
  GridType["Fit"] = "fit";
  GridType["ScrollVertical"] = "scrollVertical";
  GridType["ScrollHorizontal"] = "scrollHorizontal";
  GridType["Fixed"] = "fixed";
  GridType["VerticalFixed"] = "verticalFixed";
  GridType["HorizontalFixed"] = "horizontalFixed";
})(GridType || (GridType = {}));
var DisplayGrid;
(function (DisplayGrid) {
  DisplayGrid["Always"] = "always";
  DisplayGrid["OnDragAndResize"] = "onDrag&Resize";
  DisplayGrid["None"] = "none";
})(DisplayGrid || (DisplayGrid = {}));
var CompactType;
(function (CompactType) {
  CompactType["None"] = "none";
  CompactType["CompactUp"] = "compactUp";
  CompactType["CompactLeft"] = "compactLeft";
  CompactType["CompactUpAndLeft"] = "compactUp&Left";
  CompactType["CompactLeftAndUp"] = "compactLeft&Up";
  CompactType["CompactRight"] = "compactRight";
  CompactType["CompactUpAndRight"] = "compactUp&Right";
  CompactType["CompactRightAndUp"] = "compactRight&Up";
  CompactType["CompactDown"] = "compactDown";
  CompactType["CompactDownAndLeft"] = "compactDown&Left";
  CompactType["CompactLeftAndDown"] = "compactLeft&Down";
  CompactType["CompactDownAndRight"] = "compactDown&Right";
  CompactType["CompactRightAndDown"] = "compactRight&Down";
})(CompactType || (CompactType = {}));
var DirTypes;
(function (DirTypes) {
  DirTypes["LTR"] = "ltr";
  DirTypes["RTL"] = "rtl";
})(DirTypes || (DirTypes = {}));
;// CONCATENATED MODULE: ./src/grid/gridsterCompact.service.ts


class GridsterCompact {
  constructor(gridster) {
    _defineProperty(this, "gridster", void 0);
    this.gridster = gridster;
  }
  destroy() {
    this.gridster = null;
  }
  checkCompact() {
    if (this.gridster.$options.compactType !== CompactType.None) {
      if (this.gridster.$options.compactType === CompactType.CompactUp) {
        this.checkCompactMovement('y', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactLeft) {
        this.checkCompactMovement('x', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactUpAndLeft) {
        this.checkCompactMovement('y', -1);
        this.checkCompactMovement('x', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactLeftAndUp) {
        this.checkCompactMovement('x', -1);
        this.checkCompactMovement('y', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactRight) {
        this.checkCompactMovement('x', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactUpAndRight) {
        this.checkCompactMovement('y', -1);
        this.checkCompactMovement('x', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactRightAndUp) {
        this.checkCompactMovement('x', 1);
        this.checkCompactMovement('y', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactDown) {
        this.checkCompactMovement('y', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactDownAndLeft) {
        this.checkCompactMovement('y', 1);
        this.checkCompactMovement('x', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactDownAndRight) {
        this.checkCompactMovement('y', 1);
        this.checkCompactMovement('x', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactLeftAndDown) {
        this.checkCompactMovement('x', -1);
        this.checkCompactMovement('y', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactRightAndDown) {
        this.checkCompactMovement('x', 1);
        this.checkCompactMovement('y', 1);
      }
    }
  }
  checkCompactItem(item) {
    if (this.gridster.$options.compactType !== CompactType.None) {
      if (this.gridster.$options.compactType === CompactType.CompactUp) {
        this.moveTillCollision(item, 'y', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactLeft) {
        this.moveTillCollision(item, 'x', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactUpAndLeft) {
        this.moveTillCollision(item, 'y', -1);
        this.moveTillCollision(item, 'x', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactLeftAndUp) {
        this.moveTillCollision(item, 'x', -1);
        this.moveTillCollision(item, 'y', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactUpAndRight) {
        this.moveTillCollision(item, 'y', -1);
        this.moveTillCollision(item, 'x', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactDown) {
        this.moveTillCollision(item, 'y', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactDownAndLeft) {
        this.moveTillCollision(item, 'y', 1);
        this.moveTillCollision(item, 'x', -1);
      } else if (this.gridster.$options.compactType === CompactType.CompactLeftAndDown) {
        this.moveTillCollision(item, 'x', -1);
        this.moveTillCollision(item, 'y', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactDownAndRight) {
        this.moveTillCollision(item, 'y', 1);
        this.moveTillCollision(item, 'x', 1);
      } else if (this.gridster.$options.compactType === CompactType.CompactRightAndDown) {
        this.moveTillCollision(item, 'x', 1);
        this.moveTillCollision(item, 'y', 1);
      }
    }
  }
  checkCompactMovement(direction, delta) {
    let widgetMoved = false;
    this.gridster.grid.forEach(widget => {
      if (widget.$item.compactEnabled !== false) {
        const moved = this.moveTillCollision(widget.$item, direction, delta);
        if (moved) {
          widgetMoved = true;
          widget.item[direction] = widget.$item[direction];
          widget.itemChanged();
        }
      }
    });
    if (widgetMoved) {
      this.checkCompact();
    }
  }
  moveTillCollision(item, direction, delta) {
    item[direction] += delta;
    if (this.gridster.checkCollision(item)) {
      item[direction] -= delta;
      return false;
    } else {
      this.moveTillCollision(item, direction, delta);
      return true;
    }
  }
}
;// CONCATENATED MODULE: ./src/grid/gridsterConfig.constant.ts

const GridsterConfigService = {
  gridType: GridType.Fit,
  scale: 1,
  // 'scrollVertical' will fit on width and height of the items will be the same as the width
  // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
  // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
  // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
  // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
  fixedColWidth: 250,
  fixedRowHeight: 250,
  keepFixedHeightInMobile: false,
  keepFixedWidthInMobile: false,
  setGridSize: false,
  compactType: CompactType.None,
  mobileBreakpoint: 640,
  useBodyForBreakpoint: false,
  allowMultiLayer: false,
  defaultLayerIndex: 0,
  maxLayerIndex: 2,
  baseLayerIndex: 1,
  minCols: 1,
  maxCols: 100,
  minRows: 1,
  maxRows: 100,
  defaultItemCols: 1,
  defaultItemRows: 1,
  maxItemCols: 50,
  maxItemRows: 50,
  minItemCols: 1,
  minItemRows: 1,
  minItemArea: 1,
  maxItemArea: 2500,
  addEmptyRowsCount: 0,
  rowHeightRatio: 1,
  margin: 10,
  outerMargin: true,
  outerMarginTop: null,
  outerMarginRight: null,
  outerMarginBottom: null,
  outerMarginLeft: null,
  useTransformPositioning: true,
  scrollSensitivity: 10,
  scrollSpeed: 20,
  initCallback: undefined,
  destroyCallback: undefined,
  gridSizeChangedCallback: undefined,
  itemChangeCallback: undefined,
  // Arguments: gridsterItem, gridsterItemComponent
  itemResizeCallback: undefined,
  // Arguments: gridsterItem, gridsterItemComponent
  itemInitCallback: undefined,
  // Arguments: gridsterItem, gridsterItemComponent
  itemRemovedCallback: undefined,
  // Arguments: gridsterItem, gridsterItemComponent
  itemValidateCallback: undefined,
  // Arguments: gridsterItem
  enableEmptyCellClick: false,
  enableEmptyCellContextMenu: false,
  enableEmptyCellDrop: false,
  enableEmptyCellDrag: false,
  enableOccupiedCellDrop: false,
  emptyCellClickCallback: undefined,
  emptyCellContextMenuCallback: undefined,
  emptyCellDropCallback: undefined,
  emptyCellDragCallback: undefined,
  emptyCellDragMaxCols: 50,
  emptyCellDragMaxRows: 50,
  // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
  ignoreMarginInRow: false,
  draggable: {
    delayStart: 0,
    enabled: false,
    ignoreContentClass: 'gridster-item-content',
    ignoreContent: false,
    dragHandleClass: 'drag-handler',
    stop: undefined,
    start: undefined,
    // Arguments: item, gridsterItem, event
    dropOverItems: false,
    dropOverItemsCallback: undefined // callback on drop over another item
    // Arguments: source, target, gridComponent
  },
  resizable: {
    delayStart: 0,
    enabled: false,
    handles: {
      s: true,
      e: true,
      n: true,
      w: true,
      se: true,
      ne: true,
      sw: true,
      nw: true
    },
    stop: undefined,
    start: undefined // callback when resizing an item starts.
    // Arguments: item, gridsterItem, event
  },
  swap: true,
  swapWhileDragging: false,
  pushItems: false,
  disablePushOnDrag: false,
  disablePushOnResize: false,
  pushDirections: {
    north: true,
    east: true,
    south: true,
    west: true
  },
  pushResizeItems: false,
  displayGrid: DisplayGrid.OnDragAndResize,
  disableWindowResize: false,
  disableWarnings: false,
  scrollToNewItems: false,
  disableScrollHorizontal: false,
  disableScrollVertical: false,
  enableBoundaryControl: false,
  disableAutoPositionOnConflict: false,
  dirType: DirTypes.LTR // page direction, rtl=right to left ltr= left to right, if you use rtl language set dirType to rtl
};
;// CONCATENATED MODULE: ./src/grid/gridsterUtils.service.ts
class GridsterUtils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static merge(obj1, obj2, properties) {
    for (const p in obj2) {
      if (obj2[p] !== void 0 && properties.hasOwnProperty(p)) {
        if (typeof obj2[p] === 'object') {
          // create an empty object for the property if obj1 does not already have one.
          if (!(p in obj1)) {
            obj1[p] = {};
          }
          obj1[p] = GridsterUtils.merge(obj1[p], obj2[p], properties[p]);
        } else {
          obj1[p] = obj2[p];
        }
      }
    }
    return obj1;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static checkTouchEvent(e) {
    if (e.clientX === undefined && e.touches) {
      if (e.touches && e.touches.length) {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length) {
        e.clientX = e.changedTouches[0].clientX;
        e.clientY = e.changedTouches[0].clientY;
      }
    }
  }
  static checkContentClassForEvent(gridster, e) {
    if (gridster.$options.draggable.ignoreContent) {
      if (!GridsterUtils.checkDragHandleClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass, gridster.$options.draggable.ignoreContentClass)) {
        return true;
      }
    } else {
      if (GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)) {
        return true;
      }
    }
    return false;
  }
  static checkContentClassForEmptyCellClickEvent(gridster, e) {
    return GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass) || GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass);
  }
  static checkDragHandleClass(target, current, dragHandleClass, ignoreContentClass) {
    if (!target || target === current) {
      return false;
    }
    if (target.hasAttribute('class')) {
      const classnames = target.getAttribute('class').split(' ');
      if (classnames.indexOf(dragHandleClass) > -1) {
        return true;
      }
      if (classnames.indexOf(ignoreContentClass) > -1) {
        return false;
      }
    }
    return GridsterUtils.checkDragHandleClass(target.parentNode, current, dragHandleClass, ignoreContentClass);
  }
  static checkContentClass(target, current, contentClass) {
    if (!target || target === current) {
      return false;
    }
    if (target.hasAttribute('class') && target.getAttribute('class').split(' ').indexOf(contentClass) > -1) {
      return true;
    } else {
      return GridsterUtils.checkContentClass(target.parentNode, current, contentClass);
    }
  }
  static compareItems(a, b) {
    if (a.y > b.y) {
      return -1;
    } else if (a.y < b.y) {
      return 1;
    } else if (a.x > b.x) {
      return -1;
    } else {
      return 1;
    }
  }
}
;// CONCATENATED MODULE: ./src/grid/gridsterEmptyCell.service.ts


class GridsterEmptyCell {
  constructor(gridster) {
    _defineProperty(this, "gridster", void 0);
    _defineProperty(this, "initialItem", void 0);
    _defineProperty(this, "removeEmptyCellClickListenerFn", void 0);
    _defineProperty(this, "removeEmptyCellTouchendListenerFn", void 0);
    _defineProperty(this, "removeEmptyCellContextMenuListenerFn", void 0);
    _defineProperty(this, "removeEmptyCellDropListenerFn", void 0);
    _defineProperty(this, "removeEmptyCellMousedownListenerFn", void 0);
    _defineProperty(this, "removeEmptyCellTouchstartListenerFn", void 0);
    _defineProperty(this, "removeWindowMousemoveListenerFn", void 0);
    _defineProperty(this, "removeWindowTouchmoveListenerFn", void 0);
    _defineProperty(this, "removeWindowMouseupListenerFn", void 0);
    _defineProperty(this, "removeWindowTouchendListenerFn", void 0);
    _defineProperty(this, "removeEmptyCellDragoverListenerFn", void 0);
    _defineProperty(this, "removeDocumentDragendListenerFn", void 0);
    _defineProperty(this, "emptyCellClickCb", e => {
      if (!this.gridster || this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
        return;
      }
      const item = this.getValidItemFromEvent(e);
      if (!item) {
        return;
      }
      if (this.gridster.options.emptyCellClickCallback) {
        this.gridster.options.emptyCellClickCallback(e, item);
      }
      this.gridster.cdRef.markForCheck();
    });
    _defineProperty(this, "emptyCellContextMenuCb", e => {
      if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const item = this.getValidItemFromEvent(e);
      if (!item) {
        return;
      }
      if (this.gridster.options.emptyCellContextMenuCallback) {
        this.gridster.options.emptyCellContextMenuCallback(e, item);
      }
      this.gridster.cdRef.markForCheck();
    });
    _defineProperty(this, "emptyCellDragDrop", e => {
      const item = this.getValidItemFromEvent(e);
      if (!item) {
        return;
      }
      if (this.gridster.options.emptyCellDropCallback) {
        this.gridster.options.emptyCellDropCallback(e, item);
      }
      this.gridster.cdRef.markForCheck();
    });
    _defineProperty(this, "emptyCellDragOver", e => {
      e.preventDefault();
      e.stopPropagation();
      const item = this.getValidItemFromEvent(e);
      if (item) {
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'move';
        }
        this.gridster.movingItem = item;
      } else {
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
        this.gridster.movingItem = null;
      }
      this.gridster.previewStyle();
    });
    _defineProperty(this, "emptyCellMouseDown", e => {
      if (GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const item = this.getValidItemFromEvent(e);
      const leftMouseButtonCode = 1;
      if (!item || e.buttons !== leftMouseButtonCode && !(e instanceof TouchEvent)) {
        return;
      }
      this.initialItem = item;
      this.gridster.movingItem = item;
      this.gridster.previewStyle();
      this.gridster.zone.runOutsideAngular(() => {
        this.removeWindowMousemoveListenerFn = this.gridster.renderer.listen('window', 'mousemove', this.emptyCellMouseMove);
        this.removeWindowTouchmoveListenerFn = this.gridster.renderer.listen('window', 'touchmove', this.emptyCellMouseMove);
      });
      this.removeWindowMouseupListenerFn = this.gridster.renderer.listen('window', 'mouseup', this.emptyCellMouseUp);
      this.removeWindowTouchendListenerFn = this.gridster.renderer.listen('window', 'touchend', this.emptyCellMouseUp);
    });
    _defineProperty(this, "emptyCellMouseMove", e => {
      e.preventDefault();
      e.stopPropagation();
      const item = this.getValidItemFromEvent(e, this.initialItem);
      if (!item) {
        return;
      }
      this.gridster.movingItem = item;
      this.gridster.previewStyle();
    });
    _defineProperty(this, "emptyCellMouseUp", e => {
      this.removeWindowMousemoveListenerFn();
      this.removeWindowTouchmoveListenerFn();
      this.removeWindowMouseupListenerFn();
      this.removeWindowTouchendListenerFn();
      const item = this.getValidItemFromEvent(e, this.initialItem);
      if (item) {
        this.gridster.movingItem = item;
      }
      if (this.gridster.options.emptyCellDragCallback && this.gridster.movingItem) {
        this.gridster.options.emptyCellDragCallback(e, this.gridster.movingItem);
      }
      setTimeout(() => {
        this.initialItem = null;
        if (this.gridster) {
          this.gridster.movingItem = null;
          this.gridster.previewStyle();
        }
      });
      this.gridster.cdRef.markForCheck();
    });
    this.gridster = gridster;
  }
  destroy() {
    if (this.gridster.previewStyle) {
      this.gridster.previewStyle();
    }
    this.gridster.movingItem = null;
    this.initialItem = this.gridster = null;
    if (this.removeDocumentDragendListenerFn) {
      this.removeDocumentDragendListenerFn();
      this.removeDocumentDragendListenerFn = null;
    }
  }
  updateOptions() {
    if (this.gridster.$options.enableEmptyCellClick && !this.removeEmptyCellClickListenerFn && this.gridster.options.emptyCellClickCallback) {
      this.removeEmptyCellClickListenerFn = this.gridster.renderer.listen(this.gridster.el, 'click', this.emptyCellClickCb);
      this.removeEmptyCellTouchendListenerFn = this.gridster.renderer.listen(this.gridster.el, 'touchend', this.emptyCellClickCb);
    } else if (!this.gridster.$options.enableEmptyCellClick && this.removeEmptyCellClickListenerFn && this.removeEmptyCellTouchendListenerFn) {
      this.removeEmptyCellClickListenerFn();
      this.removeEmptyCellTouchendListenerFn();
      this.removeEmptyCellClickListenerFn = null;
      this.removeEmptyCellTouchendListenerFn = null;
    }
    if (this.gridster.$options.enableEmptyCellContextMenu && !this.removeEmptyCellContextMenuListenerFn && this.gridster.options.emptyCellContextMenuCallback) {
      this.removeEmptyCellContextMenuListenerFn = this.gridster.renderer.listen(this.gridster.el, 'contextmenu', this.emptyCellContextMenuCb);
    } else if (!this.gridster.$options.enableEmptyCellContextMenu && this.removeEmptyCellContextMenuListenerFn) {
      this.removeEmptyCellContextMenuListenerFn();
      this.removeEmptyCellContextMenuListenerFn = null;
    }
    if (this.gridster.$options.enableEmptyCellDrop && !this.removeEmptyCellDropListenerFn && this.gridster.options.emptyCellDropCallback) {
      this.removeEmptyCellDropListenerFn = this.gridster.renderer.listen(this.gridster.el, 'drop', this.emptyCellDragDrop);
      this.gridster.zone.runOutsideAngular(() => {
        this.removeEmptyCellDragoverListenerFn = this.gridster.renderer.listen(this.gridster.el, 'dragover', this.emptyCellDragOver);
      });
      this.removeDocumentDragendListenerFn = this.gridster.renderer.listen('document', 'dragend', () => {
        this.gridster.movingItem = null;
        this.gridster.previewStyle();
      });
    } else if (!this.gridster.$options.enableEmptyCellDrop && this.removeEmptyCellDropListenerFn && this.removeEmptyCellDragoverListenerFn && this.removeDocumentDragendListenerFn) {
      this.removeEmptyCellDropListenerFn();
      this.removeEmptyCellDragoverListenerFn();
      this.removeDocumentDragendListenerFn();
      this.removeEmptyCellDragoverListenerFn = null;
      this.removeEmptyCellDropListenerFn = null;
      this.removeDocumentDragendListenerFn = null;
    }
    if (this.gridster.$options.enableEmptyCellDrag && !this.removeEmptyCellMousedownListenerFn && this.gridster.options.emptyCellDragCallback) {
      this.removeEmptyCellMousedownListenerFn = this.gridster.renderer.listen(this.gridster.el, 'mousedown', this.emptyCellMouseDown);
      this.removeEmptyCellTouchstartListenerFn = this.gridster.renderer.listen(this.gridster.el, 'touchstart', this.emptyCellMouseDown);
    } else if (!this.gridster.$options.enableEmptyCellDrag && this.removeEmptyCellMousedownListenerFn && this.removeEmptyCellTouchstartListenerFn) {
      this.removeEmptyCellMousedownListenerFn();
      this.removeEmptyCellTouchstartListenerFn();
      this.removeEmptyCellMousedownListenerFn = null;
      this.removeEmptyCellTouchstartListenerFn = null;
    }
  }
  getPixelsX(e, rect) {
    const scale = this.gridster.options.scale;
    if (scale) {
      return (e.clientX - rect.left) / scale + this.gridster.el.scrollLeft - this.gridster.gridRenderer.getLeftMargin();
    }
    return e.clientX + this.gridster.el.scrollLeft - rect.left - this.gridster.gridRenderer.getLeftMargin();
  }
  getPixelsY(e, rect) {
    const scale = this.gridster.options.scale;
    if (scale) {
      return (e.clientY - rect.top) / scale + this.gridster.el.scrollTop - this.gridster.gridRenderer.getTopMargin();
    }
    return e.clientY + this.gridster.el.scrollTop - rect.top - this.gridster.gridRenderer.getTopMargin();
  }
  getValidItemFromEvent(e, oldItem) {
    e.preventDefault();
    e.stopPropagation();
    GridsterUtils.checkTouchEvent(e);
    const rect = this.gridster.el.getBoundingClientRect();
    const x = this.getPixelsX(e, rect);
    const y = this.getPixelsY(e, rect);
    const item = {
      x: this.gridster.pixelsToPositionX(x, Math.floor, true),
      y: this.gridster.pixelsToPositionY(y, Math.floor, true),
      cols: this.gridster.$options.defaultItemCols,
      rows: this.gridster.$options.defaultItemRows
    };
    if (oldItem) {
      item.cols = Math.min(Math.abs(oldItem.x - item.x) + 1, this.gridster.$options.emptyCellDragMaxCols);
      item.rows = Math.min(Math.abs(oldItem.y - item.y) + 1, this.gridster.$options.emptyCellDragMaxRows);
      if (oldItem.x < item.x) {
        item.x = oldItem.x;
      } else if (oldItem.x - item.x > this.gridster.$options.emptyCellDragMaxCols - 1) {
        item.x = this.gridster.movingItem ? this.gridster.movingItem.x : 0;
      }
      if (oldItem.y < item.y) {
        item.y = oldItem.y;
      } else if (oldItem.y - item.y > this.gridster.$options.emptyCellDragMaxRows - 1) {
        item.y = this.gridster.movingItem ? this.gridster.movingItem.y : 0;
      }
    }
    if (!this.gridster.$options.enableOccupiedCellDrop && this.gridster.checkCollision(item)) {
      return;
    }
    return item;
  }
}
;// CONCATENATED MODULE: ./src/grid/gridsterRenderer.service.ts


class GridsterRenderer {
  constructor(gridster) {
    _defineProperty(this, "gridster", void 0);
    /**
     * Caches the last grid column styles.
     * This improves the grid responsiveness by caching and reusing the last style object instead of creating a new one.
     */
    _defineProperty(this, "lastGridColumnStyles", {});
    /**
     * Caches the last grid column styles.
     * This improves the grid responsiveness by caching and reusing the last style object instead of creating a new one.
     */
    _defineProperty(this, "lastGridRowStyles", {});
    this.gridster = gridster;
  }
  destroy() {
    this.gridster = null;
  }
  updateItem(el, item, renderer) {
    if (this.gridster.mobile) {
      this.clearCellPosition(renderer, el);
      if (this.gridster.$options.keepFixedHeightInMobile) {
        renderer.setStyle(el, 'height', (item.rows - 1) * this.gridster.$options.margin + item.rows * this.gridster.$options.fixedRowHeight + 'px');
      } else {
        renderer.setStyle(el, 'height', item.rows * this.gridster.curWidth / item.cols + 'px');
      }
      if (this.gridster.$options.keepFixedWidthInMobile) {
        renderer.setStyle(el, 'width', this.gridster.$options.fixedColWidth + 'px');
      } else {
        renderer.setStyle(el, 'width', '');
      }
      renderer.setStyle(el, 'margin-bottom', this.gridster.$options.margin + 'px');
      renderer.setStyle(el, DirTypes.LTR ? 'margin-right' : 'margin-left', '');
    } else {
      const x = Math.round(this.gridster.curColWidth * item.x);
      const y = Math.round(this.gridster.curRowHeight * item.y);
      const width = this.gridster.curColWidth * item.cols - this.gridster.$options.margin;
      const height = this.gridster.curRowHeight * item.rows - this.gridster.$options.margin;
      // set the cell style
      this.setCellPosition(renderer, el, x, y);
      renderer.setStyle(el, 'width', width + 'px');
      renderer.setStyle(el, 'height', height + 'px');
      let marginBottom = null;
      let marginRight = null;
      if (this.gridster.$options.outerMargin) {
        if (this.gridster.rows === item.rows + item.y) {
          if (this.gridster.$options.outerMarginBottom !== null) {
            marginBottom = this.gridster.$options.outerMarginBottom + 'px';
          } else {
            marginBottom = this.gridster.$options.margin + 'px';
          }
        }
        if (this.gridster.columns === item.cols + item.x) {
          if (this.gridster.$options.outerMarginBottom !== null) {
            marginRight = this.gridster.$options.outerMarginRight + 'px';
          } else {
            marginRight = this.gridster.$options.margin + 'px';
          }
        }
      }
      renderer.setStyle(el, 'margin-bottom', marginBottom);
      renderer.setStyle(el, DirTypes.LTR ? 'margin-right' : 'margin-left', marginRight);
    }
  }
  updateGridster() {
    let addClass = '';
    let removeClass1 = '';
    let removeClass2 = '';
    let removeClass3 = '';
    if (this.gridster.$options.gridType === GridType.Fit) {
      addClass = GridType.Fit;
      removeClass1 = GridType.ScrollVertical;
      removeClass2 = GridType.ScrollHorizontal;
      removeClass3 = GridType.Fixed;
    } else if (this.gridster.$options.gridType === GridType.ScrollVertical) {
      this.gridster.curRowHeight = this.gridster.curColWidth * this.gridster.$options.rowHeightRatio;
      addClass = GridType.ScrollVertical;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollHorizontal;
      removeClass3 = GridType.Fixed;
    } else if (this.gridster.$options.gridType === GridType.ScrollHorizontal) {
      const widthRatio = this.gridster.$options.rowHeightRatio;
      const calWidthRatio = widthRatio >= 1 ? widthRatio : widthRatio + 1;
      this.gridster.curColWidth = this.gridster.curRowHeight * calWidthRatio;
      addClass = GridType.ScrollHorizontal;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollVertical;
      removeClass3 = GridType.Fixed;
    } else if (this.gridster.$options.gridType === GridType.Fixed) {
      this.gridster.curColWidth = this.gridster.$options.fixedColWidth + (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
      this.gridster.curRowHeight = this.gridster.$options.fixedRowHeight + (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
      addClass = GridType.Fixed;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollVertical;
      removeClass3 = GridType.ScrollHorizontal;
    } else if (this.gridster.$options.gridType === GridType.VerticalFixed) {
      this.gridster.curRowHeight = this.gridster.$options.fixedRowHeight + (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
      addClass = GridType.ScrollVertical;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollHorizontal;
      removeClass3 = GridType.Fixed;
    } else if (this.gridster.$options.gridType === GridType.HorizontalFixed) {
      this.gridster.curColWidth = this.gridster.$options.fixedColWidth + (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
      addClass = GridType.ScrollHorizontal;
      removeClass1 = GridType.Fit;
      removeClass2 = GridType.ScrollVertical;
      removeClass3 = GridType.Fixed;
    }
    if (this.gridster.mobile || this.gridster.$options.setGridSize && this.gridster.$options.gridType !== GridType.Fit) {
      this.gridster.renderer.removeClass(this.gridster.el, addClass);
    } else {
      this.gridster.renderer.addClass(this.gridster.el, addClass);
    }
    this.gridster.renderer.removeClass(this.gridster.el, removeClass1);
    this.gridster.renderer.removeClass(this.gridster.el, removeClass2);
    this.gridster.renderer.removeClass(this.gridster.el, removeClass3);
  }
  getGridColumnStyle(i) {
    // generates the new style
    const newPos = {
      left: this.gridster.curColWidth * i,
      width: this.gridster.curColWidth - this.gridster.$options.margin,
      height: this.gridster.gridRows.length * this.gridster.curRowHeight - this.gridster.$options.margin,
      style: {}
    };
    newPos.style = {
      ...this.getLeftPosition(newPos.left),
      width: newPos.width + 'px',
      height: newPos.height + 'px'
    };
    // use the last cached style if it has same values as the generated one
    const last = this.lastGridColumnStyles[i];
    if (last && last.left === newPos.left && last.width === newPos.width && last.height === newPos.height) {
      return last.style;
    }
    // cache and set new style
    this.lastGridColumnStyles[i] = newPos;
    return newPos.style;
  }
  getGridRowStyle(i) {
    // generates the new style
    const newPos = {
      top: this.gridster.curRowHeight * i,
      width: this.gridster.gridColumns.length * this.gridster.curColWidth + this.gridster.$options.margin,
      height: this.gridster.curRowHeight - this.gridster.$options.margin,
      style: {}
    };
    newPos.style = {
      ...this.getTopPosition(newPos.top),
      width: newPos.width + 'px',
      height: newPos.height + 'px'
    };
    // use the last cached style if it has same values as the generated one
    const last = this.lastGridRowStyles[i];
    if (last && last.top === newPos.top && last.width === newPos.width && last.height === newPos.height) {
      return last.style;
    }
    // cache and set new style
    this.lastGridRowStyles[i] = newPos;
    return newPos.style;
  }
  getLeftPosition(d) {
    const dPosition = this.gridster.$options.dirType === DirTypes.RTL ? -d : d;
    if (this.gridster.$options.useTransformPositioning) {
      return {
        transform: 'translateX(' + dPosition + 'px)'
      };
    } else {
      return {
        left: this.getLeftMargin() + dPosition + 'px'
      };
    }
  }
  getTopPosition(d) {
    if (this.gridster.$options.useTransformPositioning) {
      return {
        transform: 'translateY(' + d + 'px)'
      };
    } else {
      return {
        top: this.getTopMargin() + d + 'px'
      };
    }
  }
  clearCellPosition(renderer, el) {
    if (this.gridster.$options.useTransformPositioning) {
      renderer.setStyle(el, 'transform', '');
    } else {
      renderer.setStyle(el, 'top', '');
      renderer.setStyle(el, 'left', '');
    }
  }
  setCellPosition(renderer, el, x, y) {
    const xPosition = this.gridster.$options.dirType === DirTypes.RTL ? -x : x;
    if (this.gridster.$options.useTransformPositioning) {
      const transform = 'translate3d(' + xPosition + 'px, ' + y + 'px, 0)';
      renderer.setStyle(el, 'transform', transform);
    } else {
      renderer.setStyle(el, 'left', this.getLeftMargin() + xPosition + 'px');
      renderer.setStyle(el, 'top', this.getTopMargin() + y + 'px');
    }
  }
  getLeftMargin() {
    if (this.gridster.$options.outerMargin) {
      if (this.gridster.$options.outerMarginLeft !== null) {
        return this.gridster.$options.outerMarginLeft;
      } else {
        return this.gridster.$options.margin;
      }
    } else {
      return 0;
    }
  }
  getTopMargin() {
    if (this.gridster.$options.outerMargin) {
      if (this.gridster.$options.outerMarginTop !== null) {
        return this.gridster.$options.outerMarginTop;
      } else {
        return this.gridster.$options.margin;
      }
    } else {
      return 0;
    }
  }
}
;// CONCATENATED MODULE: ./src/grid/gridster.component.ts










class GridsterComponent {
  constructor(renderer, el) {
    _defineProperty(this, "$options", void 0);
    _defineProperty(this, "grid", void 0);
    _defineProperty(this, "el", void 0);
    _defineProperty(this, "renderer", void 0);
    _defineProperty(this, "gridRenderer", void 0);
    _defineProperty(this, "cdRef", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "calculateLayout$", void 0);
    _defineProperty(this, "movingItem", void 0);
    _defineProperty(this, "mobile", void 0);
    _defineProperty(this, "curWidth", void 0);
    _defineProperty(this, "curHeight", void 0);
    _defineProperty(this, "columns", void 0);
    _defineProperty(this, "rows", void 0);
    _defineProperty(this, "curColWidth", void 0);
    _defineProperty(this, "curRowHeight", void 0);
    _defineProperty(this, "windowResize", void 0);
    _defineProperty(this, "dragInProgress", void 0);
    _defineProperty(this, "emptyCell", void 0);
    _defineProperty(this, "compact", void 0);
    _defineProperty(this, "zone", void 0);
    _defineProperty(this, "gridRows", void 0);
    _defineProperty(this, "gridColumns", void 0);
    _defineProperty(this, "previewStyle$", new EventEmitterImpl());
    _defineProperty(this, "resize$", void 0);
    _defineProperty(this, "destroy$", void 0);
    _defineProperty(this, "onResize", () => {
      if (this.el.clientWidth) {
        if (this.options.setGridSize) {
          // reset width/height so the size is recalculated afterwards
          this.renderer.setStyle(this.el, 'width', '');
          this.renderer.setStyle(this.el, 'height', '');
        }
        this.setGridSize();
        this.calculateLayout();
      }
    });
    _defineProperty(this, "getNextPossiblePosition", (newItem, startingFrom = {}) => {
      if (newItem.cols === -1) {
        newItem.cols = this.$options.defaultItemCols;
      }
      if (newItem.rows === -1) {
        newItem.rows = this.$options.defaultItemRows;
      }
      this.setGridDimensions();
      let rowsIndex = startingFrom.y || 0;
      let colsIndex;
      for (; rowsIndex < this.rows; rowsIndex++) {
        newItem.y = rowsIndex;
        colsIndex = startingFrom.x || 0;
        for (; colsIndex < this.columns; colsIndex++) {
          newItem.x = colsIndex;
          if (!this.checkCollision(newItem)) {
            return true;
          }
        }
      }
      const canAddToRows = this.$options.maxRows >= this.rows + newItem.rows;
      const canAddToColumns = this.$options.maxCols >= this.columns + newItem.cols;
      const addToRows = this.rows <= this.columns && canAddToRows;
      if (!addToRows && canAddToColumns) {
        newItem.x = this.columns;
        newItem.y = 0;
        return true;
      } else if (canAddToRows) {
        newItem.y = this.rows;
        newItem.x = 0;
        return true;
      }
      return false;
    });
    _defineProperty(this, "getLastPossiblePosition", item => {
      let farthestItem = {
        y: 0,
        x: 0
      };
      farthestItem = this.grid.reduce((prev, curr) => {
        const currCoords = {
          y: curr.$item.y + curr.$item.rows - 1,
          x: curr.$item.x + curr.$item.cols - 1
        };
        if (GridsterUtils.compareItems(prev, currCoords) === 1) {
          return currCoords;
        } else {
          return prev;
        }
      }, farthestItem);
      const tmpItem = Object.assign({}, item);
      this.getNextPossiblePosition(tmpItem, farthestItem);
      return tmpItem;
    });
    _defineProperty(this, "getFirstPossiblePosition", item => {
      const tmpItem = Object.assign({}, item);
      this.getNextPossiblePosition(tmpItem);
      return tmpItem;
    });
    _defineProperty(this, "optionsChanged", () => {
      this.setOptions();
      let widgetsIndex = this.grid.length - 1;
      let widget;
      for (; widgetsIndex >= 0; widgetsIndex--) {
        widget = this.grid[widgetsIndex];
        widget.updateOptions();
      }
      this.calculateLayout();
    });
    this.el = el;
    this.renderer = renderer;
    this.$options = JSON.parse(JSON.stringify(GridsterConfigService));
    this.mobile = false;
    this.curWidth = 0;
    this.curHeight = 0;
    this.grid = [];
    this.curColWidth = 0;
    this.curRowHeight = 0;
    this.dragInProgress = false;
    this.gridColumns = [];
    this.gridRows = [];
    this.emptyCell = new GridsterEmptyCell(this);
    this.compact = new GridsterCompact(this);
    this.gridRenderer = new GridsterRenderer(this);
    this.zone = new NgZoneImpl();
    this.cdRef = new ChangeDetectorRefImpl();
  }
  static checkCollisionTwoItemsForSwaping(item, item2) {
    // if the cols or rows of the items are 1 , doesnt make any sense to set a boundary. Only if the item is bigger we set a boundary
    const horizontalBoundaryItem1 = item.cols === 1 ? 0 : 1;
    const horizontalBoundaryItem2 = item2.cols === 1 ? 0 : 1;
    const verticalBoundaryItem1 = item.rows === 1 ? 0 : 1;
    const verticalBoundaryItem2 = item2.rows === 1 ? 0 : 1;
    return item.x + horizontalBoundaryItem1 < item2.x + item2.cols && item.x + item.cols > item2.x + horizontalBoundaryItem2 && item.y + verticalBoundaryItem1 < item2.y + item2.rows && item.y + item.rows > item2.y + verticalBoundaryItem2;
  }
  resize() {
    let height;
    let width;
    if (this.$options.gridType === 'fit' && !this.mobile) {
      width = this.el.offsetWidth;
      height = this.el.offsetHeight;
    } else {
      width = this.el.clientWidth;
      height = this.el.clientHeight;
    }
    if ((width !== this.curWidth || height !== this.curHeight) && this.checkIfToResize()) {
      this.onResize();
    }
  }
  checkIfToResize() {
    const clientWidth = this.el.clientWidth;
    const offsetWidth = this.el.offsetWidth;
    const scrollWidth = this.el.scrollWidth;
    const clientHeight = this.el.clientHeight;
    const offsetHeight = this.el.offsetHeight;
    const scrollHeight = this.el.scrollHeight;
    const verticalScrollPresent = clientWidth < offsetWidth && scrollHeight > offsetHeight && scrollHeight - offsetHeight < offsetWidth - clientWidth;
    const horizontalScrollPresent = clientHeight < offsetHeight && scrollWidth > offsetWidth && scrollWidth - offsetWidth < offsetHeight - clientHeight;
    if (verticalScrollPresent) {
      return false;
    }
    return !horizontalScrollPresent;
  }
  checkIfMobile() {
    if (this.$options.useBodyForBreakpoint) {
      return this.$options.mobileBreakpoint > document.body.clientWidth;
    } else {
      return this.$options.mobileBreakpoint > this.curWidth;
    }
  }
  checkCollisionTwoItems(item, item2) {
    const collision = item.x < item2.x + item2.cols && item.x + item.cols > item2.x && item.y < item2.y + item2.rows && item.y + item.rows > item2.y;
    if (!collision) {
      return false;
    }
    if (!this.$options.allowMultiLayer) {
      return true;
    }
    const defaultLayerIndex = this.$options.defaultLayerIndex;
    const layerIndex = item.layerIndex === undefined ? defaultLayerIndex : item.layerIndex;
    const layerIndex2 = item2.layerIndex === undefined ? defaultLayerIndex : item2.layerIndex;
    return layerIndex === layerIndex2;
  }
  checkCollision(item) {
    let collision = false;
    if (this.options.itemValidateCallback) {
      collision = !this.options.itemValidateCallback(item);
    }
    if (!collision && this.checkGridCollision(item)) {
      collision = true;
    }
    if (!collision) {
      const c = this.findItemWithItem(item);
      if (c) {
        collision = c;
      }
    }
    return collision;
  }
  checkCollisionForSwaping(item) {
    let collision = false;
    if (this.options.itemValidateCallback) {
      collision = !this.options.itemValidateCallback(item);
    }
    if (!collision && this.checkGridCollision(item)) {
      collision = true;
    }
    if (!collision) {
      const c = this.findItemWithItemForSwapping(item);
      if (c) {
        collision = c;
      }
    }
    return collision;
  }
  positionXToPixels(x) {
    return x * this.curColWidth;
  }
  positionYToPixels(y) {
    return y * this.curRowHeight;
  }
  getItemComponent(item) {
    return this.grid.find(c => c.item === item);
  }
  pixelsToPositionX(x, roundingMethod, noLimit) {
    const position = roundingMethod(x / this.curColWidth);
    if (noLimit) {
      return position;
    } else {
      return Math.max(position, 0);
    }
  }
  pixelsToPositionY(y, roundingMethod, noLimit) {
    const position = roundingMethod(y / this.curRowHeight);
    if (noLimit) {
      return position;
    } else {
      return Math.max(position, 0);
    }
  }
  findItemWithItem(item) {
    let widgetsIndex = 0;
    let widget;
    for (; widgetsIndex < this.grid.length; widgetsIndex++) {
      widget = this.grid[widgetsIndex];
      if ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(widget.$item) !== (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(item) && this.checkCollisionTwoItems(widget.$item, item)) {
        return widget;
      }
    }
    return false;
  }
  findItemsWithItem(item) {
    const a = [];
    let widgetsIndex = 0;
    let widget;
    for (; widgetsIndex < this.grid.length; widgetsIndex++) {
      widget = this.grid[widgetsIndex];
      if ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(widget.$item) !== (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(item) && this.checkCollisionTwoItems(widget.$item, item)) {
        a.push(widget);
      }
    }
    return a;
  }
  autoPositionItem(itemComponent) {
    if (this.getNextPossiblePosition(itemComponent.$item)) {
      itemComponent.notPlaced = false;
      itemComponent.item.x = itemComponent.$item.x;
      itemComponent.item.y = itemComponent.$item.y;
      itemComponent.itemChanged();
    } else {
      itemComponent.notPlaced = true;
      if (!this.$options.disableWarnings) {
        console.warn("Can't be placed in the bounds of the dashboard!/n" + JSON.stringify(itemComponent.item, ["cols", "rows", "x", "y"]));
      }
    }
  }
  checkGridCollision(item) {
    const noNegativePosition = item.y > -1 && item.x > -1;
    const maxGridCols = item.cols + item.x <= this.$options.maxCols;
    const maxGridRows = item.rows + item.y <= this.$options.maxRows;
    const maxItemCols = item.maxItemCols === undefined ? this.$options.maxItemCols : item.maxItemCols;
    const minItemCols = item.minItemCols === undefined ? this.$options.minItemCols : item.minItemCols;
    const maxItemRows = item.maxItemRows === undefined ? this.$options.maxItemRows : item.maxItemRows;
    const minItemRows = item.minItemRows === undefined ? this.$options.minItemRows : item.minItemRows;
    const inColsLimits = item.cols <= maxItemCols && item.cols >= minItemCols;
    const inRowsLimits = item.rows <= maxItemRows && item.rows >= minItemRows;
    const minAreaLimit = item.minItemArea === undefined ? this.$options.minItemArea : item.minItemArea;
    const maxAreaLimit = item.maxItemArea === undefined ? this.$options.maxItemArea : item.maxItemArea;
    const area = item.cols * item.rows;
    const inMinArea = minAreaLimit <= area;
    const inMaxArea = maxAreaLimit >= area;
    return !(noNegativePosition && maxGridCols && maxGridRows && inColsLimits && inRowsLimits && inMinArea && inMaxArea);
  }
  updateGrid() {
    if (this.$options.displayGrid === "always" && !this.mobile) {
      this.renderer.addClass(this.el, "display-grid");
    } else if (this.$options.displayGrid === "onDrag&Resize" && this.dragInProgress) {
      this.renderer.addClass(this.el, "display-grid");
    } else if (this.$options.displayGrid === "none" || !this.dragInProgress || this.mobile) {
      this.renderer.removeClass(this.el, "display-grid");
    }
    this.setGridDimensions();
    this.gridColumns.length = GridsterComponent.getNewArrayLength(this.columns, this.curWidth, this.curColWidth);
    this.gridRows.length = GridsterComponent.getNewArrayLength(this.rows, this.curHeight, this.curRowHeight);
    this.cdRef.markForCheck();
  }
  addItem(itemComponent) {
    if (itemComponent.$item.cols === undefined) {
      itemComponent.$item.cols = this.$options.defaultItemCols;
      itemComponent.item.cols = itemComponent.$item.cols;
      itemComponent.itemChanged();
    }
    if (itemComponent.$item.rows === undefined) {
      itemComponent.$item.rows = this.$options.defaultItemRows;
      itemComponent.item.rows = itemComponent.$item.rows;
      itemComponent.itemChanged();
    }
    if (itemComponent.$item.x === -1 || itemComponent.$item.y === -1) {
      this.autoPositionItem(itemComponent);
    } else if (this.checkCollision(itemComponent.$item)) {
      if (!this.$options.disableWarnings) {
        itemComponent.notPlaced = true;
        console.warn("Can't be placed in the bounds of the dashboard, trying to auto position!/n" + JSON.stringify(itemComponent.item, ["cols", "rows", "x", "y"]));
      }
      if (!this.$options.disableAutoPositionOnConflict) {
        this.autoPositionItem(itemComponent);
      } else {
        itemComponent.notPlaced = true;
      }
    }
    this.grid.push(itemComponent);
    this.calculateLayout$.next();
  }
  findItemWithItemForSwapping(item) {
    let widgetsIndex = this.grid.length - 1;
    let widget;
    for (; widgetsIndex > -1; widgetsIndex--) {
      widget = this.grid[widgetsIndex];
      if (widget.$item !== item && GridsterComponent.checkCollisionTwoItemsForSwaping(widget.$item, item)) {
        return widget;
      }
    }
    return false;
  }
  removeItem(itemComponent) {
    this.grid.splice(this.grid.indexOf(itemComponent), 1);
    this.calculateLayout$.next();
    if (this.options.itemRemovedCallback) {
      this.options.itemRemovedCallback(itemComponent.item, itemComponent);
    }
  }
  previewStyle(drag = false) {
    if (this.movingItem) {
      if (this.compact && drag) {
        this.compact.checkCompactItem(this.movingItem);
      }
      this.previewStyle$.next(this.movingItem);
    } else {
      this.previewStyle$.next(null);
    }
  }
  setGridSize() {
    const el = this.el;
    let width;
    let height;
    if (this.$options.setGridSize || this.$options.gridType === GridType.Fit && !this.mobile) {
      width = el.offsetWidth;
      height = el.offsetHeight;
    } else {
      width = el.clientWidth;
      height = el.clientHeight;
    }
    this.curWidth = width;
    this.curHeight = height;
  }
  setGridDimensions() {
    this.setGridSize();
    if (!this.mobile && this.checkIfMobile()) {
      this.mobile = !this.mobile;
      this.renderer.addClass(this.el, 'mobile');
    } else if (this.mobile && !this.checkIfMobile()) {
      this.mobile = !this.mobile;
      this.renderer.removeClass(this.el, 'mobile');
    }
    let rows = this.$options.minRows;
    let columns = this.$options.minCols;
    let widgetsIndex = this.grid.length - 1;
    let widget;
    for (; widgetsIndex >= 0; widgetsIndex--) {
      widget = this.grid[widgetsIndex];
      if (!widget.notPlaced) {
        rows = Math.max(rows, widget.$item.y + widget.$item.rows);
        columns = Math.max(columns, widget.$item.x + widget.$item.cols);
      }
    }
    rows += this.$options.addEmptyRowsCount;
    if (this.columns !== columns || this.rows !== rows) {
      this.columns = columns;
      this.rows = rows;
      if (this.options.gridSizeChangedCallback) {
        this.options.gridSizeChangedCallback(this);
      }
    }
  }
  static getNewArrayLength(length, overallSize, size) {
    const newLength = Math.max(length, Math.floor(overallSize / size));
    if (newLength < 0) {
      return 0;
    }
    if (Number.isFinite(newLength)) {
      return Math.floor(newLength);
    }
    return 0;
  }
  calculateLayout() {
    if (this.compact) {
      this.compact.checkCompact();
    }
    this.setGridDimensions();
    if (this.$options.outerMargin) {
      let marginWidth = -this.$options.margin;
      if (this.$options.outerMarginLeft !== null) {
        marginWidth += this.$options.outerMarginLeft;
        this.renderer.setStyle(this.el, 'padding-left', this.$options.outerMarginLeft + 'px');
      } else {
        marginWidth += this.$options.margin;
        this.renderer.setStyle(this.el, 'padding-left', this.$options.margin + 'px');
      }
      if (this.$options.outerMarginRight !== null) {
        marginWidth += this.$options.outerMarginRight;
        this.renderer.setStyle(this.el, 'padding-right', this.$options.outerMarginRight + 'px');
      } else {
        marginWidth += this.$options.margin;
        this.renderer.setStyle(this.el, 'padding-right', this.$options.margin + 'px');
      }
      this.curColWidth = (this.curWidth - marginWidth) / this.columns;
      let marginHeight = -this.$options.margin;
      if (this.$options.outerMarginTop !== null) {
        marginHeight += this.$options.outerMarginTop;
        this.renderer.setStyle(this.el, 'padding-top', this.$options.outerMarginTop + 'px');
      } else {
        marginHeight += this.$options.margin;
        this.renderer.setStyle(this.el, 'padding-top', this.$options.margin + 'px');
      }
      if (this.$options.outerMarginBottom !== null) {
        marginHeight += this.$options.outerMarginBottom;
        this.renderer.setStyle(this.el, 'padding-bottom', this.$options.outerMarginBottom + 'px');
      } else {
        marginHeight += this.$options.margin;
        this.renderer.setStyle(this.el, 'padding-bottom', this.$options.margin + 'px');
      }
      this.curRowHeight = (this.curHeight - marginHeight) / this.rows * this.$options.rowHeightRatio;
    } else {
      this.curColWidth = (this.curWidth + this.$options.margin) / this.columns;
      this.curRowHeight = (this.curHeight + this.$options.margin) / this.rows * this.$options.rowHeightRatio;
      this.renderer.setStyle(this.el, 'padding-left', 0 + 'px');
      this.renderer.setStyle(this.el, 'padding-right', 0 + 'px');
      this.renderer.setStyle(this.el, 'padding-top', 0 + 'px');
      this.renderer.setStyle(this.el, 'padding-bottom', 0 + 'px');
    }
    this.gridRenderer.updateGridster();
    if (this.$options.setGridSize) {
      this.renderer.addClass(this.el, 'gridSize');
      if (!this.mobile) {
        this.renderer.setStyle(this.el, 'width', this.columns * this.curColWidth + this.$options.margin + 'px');
        this.renderer.setStyle(this.el, 'height', this.rows * this.curRowHeight + this.$options.margin + 'px');
      }
    } else {
      this.renderer.removeClass(this.el, 'gridSize');
      this.renderer.setStyle(this.el, 'width', '');
      this.renderer.setStyle(this.el, 'height', '');
    }
    this.updateGrid();
    let widgetsIndex = this.grid.length - 1;
    let widget;
    for (; widgetsIndex >= 0; widgetsIndex--) {
      widget = this.grid[widgetsIndex];
      widget.setSize();
      widget.drag.toggle();
      widget.resize.toggle();
    }
    this.resize$.next();
  }
  setOptions() {
    this.$options = GridsterUtils.merge(this.$options, this.options, this.$options);
    if (!this.$options.disableWindowResize && !this.windowResize) {
      this.windowResize = this.renderer.listen('window', 'resize', this.onResize);
    } else if (this.$options.disableWindowResize && this.windowResize) {
      this.windowResize();
      this.windowResize = null;
    }
    this.emptyCell.updateOptions();
  }
  onChanges(changes) {
    this.setOptions();
    this.options.api = {
      optionsChanged: this.optionsChanged,
      resize: this.onResize,
      getNextPossiblePosition: this.getNextPossiblePosition,
      getFirstPossiblePosition: this.getFirstPossiblePosition,
      getLastPossiblePosition: this.getLastPossiblePosition,
      getItemComponent: item => this.getItemComponent(item)
    };
    this.columns = this.$options.minCols;
    this.rows = this.$options.minRows + this.$options.addEmptyRowsCount;
    this.setGridSize();
    this.calculateLayout();
  }
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/grid-preview.vue?vue&type=template&id=54579d49&ts=true

const grid_previewvue_type_template_id_54579d49_ts_true_hoisted_1 = {
  class: "gridster-preview",
  ref: "root"
};
function grid_previewvue_type_template_id_54579d49_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", grid_previewvue_type_template_id_54579d49_ts_true_hoisted_1, null, 512);
}
;// CONCATENATED MODULE: ./src/grid/grid-preview.vue?vue&type=template&id=54579d49&ts=true

;// CONCATENATED MODULE: ./src/grid/gridPreview.component.ts

class GridPreviewComponent {
  constructor(preview, gridRenderer, renderer, el) {
    _defineProperty(this, "previewStyle$", void 0);
    _defineProperty(this, "gridRenderer", void 0);
    _defineProperty(this, "renderer", void 0);
    _defineProperty(this, "el", void 0);
    _defineProperty(this, "sub", void 0);
    this.gridRenderer = gridRenderer;
    this.previewStyle$ = preview;
    this.renderer = renderer;
    this.el = el;
  }
  init() {
    this.sub = this.previewStyle$.subscribe(options => this.previewStyle(options));
  }
  destroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  previewStyle(item) {
    if (item) {
      this.renderer.setStyle(this.el, 'display', 'block');
      this.gridRenderer.updateItem(this.el, item, this.renderer);
    } else {
      this.renderer.setStyle(this.el, 'display', '');
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/grid-preview.vue?vue&type=script&lang=ts


/* harmony default export */ var grid_previewvue_type_script_lang_ts = ({
  setup(props) {
    let component;
    const root = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      component = new GridPreviewComponent(props.previewStyle, props.renderer, props.render, root.value);
      component.init();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      component.destroy();
    });
    return {
      root
    };
  },
  props: {
    previewStyle: {
      type: Object,
      required: true
    },
    renderer: {
      type: Object,
      required: true
    },
    render: {
      type: Object,
      required: true
    }
  }
});
;// CONCATENATED MODULE: ./src/grid/grid-preview.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/grid-preview.vue?vue&type=style&index=0&id=54579d49&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/grid/grid-preview.vue?vue&type=style&index=0&id=54579d49&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(9624);
;// CONCATENATED MODULE: ./src/grid/grid-preview.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(grid_previewvue_type_script_lang_ts, [['render',grid_previewvue_type_template_id_54579d49_ts_true_render]])

/* harmony default export */ var grid_preview = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/gridster.vue?vue&type=script&lang=ts





/* harmony default export */ var gridstervue_type_script_lang_ts = ({
  setup(props) {
    const root = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const dataReactive = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      gridsterComponent: null,
      ready: false
    });
    dataReactive.gridsterComponent = new GridsterComponent(new Renderer2Impl(), root.value);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      dataReactive.gridsterComponent.el = root.value;
      dataReactive.gridsterComponent.calculateLayout$ = new Subject();
      dataReactive.gridsterComponent.resize$ = new Subject();
      dataReactive.gridsterComponent.destroy$ = new Subject();
      dataReactive.gridsterComponent.options = Object.assign({}, props.options);
      dataReactive.gridsterComponent?.onChanges(dataReactive.gridsterComponent.options);
      if (props.options?.initCallback) {
        props.options?.initCallback(dataReactive.gridsterComponent);
      }
      dataReactive.gridsterComponent.calculateLayout$.pipe(debounceTime(0), takeUntil(dataReactive.gridsterComponent.destroy$)).subscribe(() => dataReactive.gridsterComponent.calculateLayout());
      dataReactive.gridsterComponent.resize$.pipe(switchMap(() => timer(100)), takeUntil(dataReactive.gridsterComponent.destroy$)).subscribe(() => dataReactive.gridsterComponent.resize());
      dataReactive.ready = true;
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      dataReactive.gridsterComponent.destroy$.next();
      dataReactive.gridsterComponent.previewStyle$.complete();
      if (dataReactive.gridsterComponent.windowResize) {
        dataReactive.gridsterComponent.windowResize();
      }
      if (dataReactive.gridsterComponent.options && dataReactive.gridsterComponent.options.destroyCallback) {
        dataReactive.gridsterComponent.options.destroyCallback(dataReactive.gridsterComponent);
      }
      if (dataReactive.gridsterComponent.options && dataReactive.gridsterComponent.options.api) {
        dataReactive.gridsterComponent.options.api.resize = undefined;
        dataReactive.gridsterComponent.options.api.optionsChanged = undefined;
        dataReactive.gridsterComponent.options.api.getNextPossiblePosition = undefined;
        dataReactive.gridsterComponent.options.api = undefined;
      }
      dataReactive.gridsterComponent.emptyCell.destroy();
      dataReactive.gridsterComponent.emptyCell = null;
      dataReactive.gridsterComponent.compact.destroy();
      dataReactive.gridsterComponent.compact = null;
      dataReactive.gridsterComponent.calculateLayout$ = null;
      dataReactive.gridsterComponent.resize$ = null;
      dataReactive.gridsterComponent.destroy$ = null;
      dataReactive.gridsterComponent.options = null;
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(props.options, () => {
      dataReactive.gridsterComponent.options = Object.assign({}, props.options);
      dataReactive.gridsterComponent.onChanges(dataReactive.gridsterComponent.options);
    });
    const getGridColumnStyle = idx => dataReactive.gridsterComponent.gridRenderer.getGridColumnStyle(idx);
    const getGridRowStyle = idx => dataReactive.gridsterComponent.gridRenderer.getGridRowStyle(idx);
    return {
      dataReactive,
      root,
      getGridColumnStyle,
      getGridRowStyle
    };
  },
  props: {
    options: {
      type: Object,
      require: true
    }
  },
  components: {
    GridPreview: grid_preview
  }
});
;// CONCATENATED MODULE: ./src/grid/gridster.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/gridster.vue?vue&type=style&index=0&id=271798fe&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/grid/gridster.vue?vue&type=style&index=0&id=271798fe&lang=css

;// CONCATENATED MODULE: ./src/grid/gridster.vue




;


const gridster_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(gridstervue_type_script_lang_ts, [['render',gridstervue_type_template_id_271798fe_ts_true_render]])

/* harmony default export */ var gridster = (gridster_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/grid-item.vue?vue&type=template&id=9f9b075c&ts=true

function grid_itemvue_type_template_id_9f9b075c_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    class: "gridster-item",
    ref: "root",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      zIndex: $setup.zIndexComputed
    })
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default"), $setup.comp.component.resize.resizableHandles?.s && $setup.comp.component.resize.resizeEnabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 0,
    onMousedown: _cache[0] || (_cache[0] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    onTouchstart: _cache[1] || (_cache[1] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    class: "gridster-item-resizable-handler handle-s"
  }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $setup.comp.component.resize.resizableHandles?.e && $setup.comp.component.resize.resizeEnabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 1,
    onMousedown: _cache[2] || (_cache[2] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    onTouchstart: _cache[3] || (_cache[3] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    class: "gridster-item-resizable-handler handle-e"
  }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $setup.comp.component.resize.resizableHandles?.n && $setup.comp.component.resize.resizeEnabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 2,
    onMousedown: _cache[4] || (_cache[4] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    onTouchstart: _cache[5] || (_cache[5] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    class: "gridster-item-resizable-handler handle-n"
  }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $setup.comp.component.resize.resizableHandles?.w && $setup.comp.component.resize.resizeEnabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 3,
    onMousedown: _cache[6] || (_cache[6] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    onTouchstart: _cache[7] || (_cache[7] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    class: "gridster-item-resizable-handler handle-w"
  }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $setup.comp.component.resize.resizableHandles?.se && $setup.comp.component.resize.resizeEnabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 4,
    onMousedown: _cache[8] || (_cache[8] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    onTouchstart: _cache[9] || (_cache[9] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    class: "gridster-item-resizable-handler handle-se"
  }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $setup.comp.component.resize.resizableHandles?.ne && $setup.comp.component.resize.resizeEnabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 5,
    onMousedown: _cache[10] || (_cache[10] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    onTouchstart: _cache[11] || (_cache[11] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    class: "gridster-item-resizable-handler handle-ne"
  }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $setup.comp.component.resize.resizableHandles?.sw && $setup.comp.component.resize.resizeEnabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 6,
    onMousedown: _cache[12] || (_cache[12] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    onTouchstart: _cache[13] || (_cache[13] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    class: "gridster-item-resizable-handler handle-sw"
  }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $setup.comp.component.resize.resizableHandles?.nw && $setup.comp.component.resize.resizeEnabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 7,
    onMousedown: _cache[14] || (_cache[14] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    onTouchstart: _cache[15] || (_cache[15] = $event => $setup.comp.component.resize.dragStartDelay($event)),
    class: "gridster-item-resizable-handler handle-nw"
  }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 4);
}
;// CONCATENATED MODULE: ./src/grid/grid-item.vue?vue&type=template&id=9f9b075c&ts=true

;// CONCATENATED MODULE: ./src/grid/gridsterPush.service.ts


class GridsterPush {
  constructor(gridsterItem) {
    _defineProperty(this, "fromSouth", void 0);
    _defineProperty(this, "fromNorth", void 0);
    _defineProperty(this, "fromEast", void 0);
    _defineProperty(this, "fromWest", void 0);
    _defineProperty(this, "pushedItems", void 0);
    _defineProperty(this, "pushedItemsTemp", void 0);
    _defineProperty(this, "pushedItemsTempPath", void 0);
    _defineProperty(this, "pushedItemsPath", void 0);
    _defineProperty(this, "gridsterItem", void 0);
    _defineProperty(this, "gridster", void 0);
    _defineProperty(this, "pushedItemsOrder", void 0);
    _defineProperty(this, "tryPattern", void 0);
    _defineProperty(this, "iteration", 0);
    this.pushedItems = [];
    this.pushedItemsTemp = [];
    this.pushedItemsTempPath = [];
    this.pushedItemsPath = [];
    this.gridsterItem = gridsterItem;
    this.gridster = gridsterItem.gridster;
    this.tryPattern = {
      fromEast: [this.tryWest, this.trySouth, this.tryNorth, this.tryEast],
      fromWest: [this.tryEast, this.trySouth, this.tryNorth, this.tryWest],
      fromNorth: [this.trySouth, this.tryEast, this.tryWest, this.tryNorth],
      fromSouth: [this.tryNorth, this.tryEast, this.tryWest, this.trySouth]
    };
    this.fromSouth = 'fromSouth';
    this.fromNorth = 'fromNorth';
    this.fromEast = 'fromEast';
    this.fromWest = 'fromWest';
  }
  destroy() {
    this.gridster = this.gridsterItem = null;
  }
  pushItems(direction, disable) {
    if (this.gridster.$options.pushItems && !disable) {
      this.pushedItemsOrder = [];
      this.iteration = 0;
      const pushed = this.push(this.gridsterItem, direction);
      if (!pushed) {
        this.restoreTempItems();
      }
      this.pushedItemsOrder = [];
      this.pushedItemsTemp = [];
      this.pushedItemsTempPath = [];
      return pushed;
    } else {
      return false;
    }
  }
  restoreTempItems() {
    let i = this.pushedItemsTemp.length - 1;
    for (; i > -1; i--) {
      this.removeFromTempPushed(this.pushedItemsTemp[i]);
    }
  }
  restoreItems() {
    let i = 0;
    const l = this.pushedItems.length;
    let pushedItem;
    for (; i < l; i++) {
      pushedItem = this.pushedItems[i];
      pushedItem.$item.x = pushedItem.item.x || 0;
      pushedItem.$item.y = pushedItem.item.y || 0;
      pushedItem.setSize();
    }
    this.pushedItems = [];
    this.pushedItemsPath = [];
  }
  setPushedItems() {
    let i = 0;
    const l = this.pushedItems.length;
    let pushedItem;
    for (; i < l; i++) {
      pushedItem = this.pushedItems[i];
      pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
    }
    this.pushedItems = [];
    this.pushedItemsPath = [];
  }
  checkPushBack() {
    let i = this.pushedItems.length - 1;
    let change = false;
    for (; i > -1; i--) {
      if (this.checkPushedItem(this.pushedItems[i], i)) {
        change = true;
      }
    }
    if (change) {
      this.checkPushBack();
    }
  }
  push(gridsterItem, direction) {
    if (this.iteration > 100) {
      console.warn('max iteration reached');
      return false;
    }
    if (this.gridster.checkGridCollision(gridsterItem.$item)) {
      return false;
    }
    if (direction === '') {
      return false;
    }
    const conflicts = this.gridster.findItemsWithItem(gridsterItem.$item);
    const invert = direction === this.fromNorth || direction === this.fromWest;
    // sort the list of conflicts in order of [y,x]. Invert when the push is from north and west
    // this is done so they don't conflict witch each other and revert positions, keeping the previous order
    conflicts.sort((a, b) => {
      if (invert) {
        return b.$item.y - a.$item.y || b.$item.x - a.$item.x;
      } else {
        return a.$item.y - b.$item.y || a.$item.x - b.$item.x;
      }
    });
    let i = 0;
    let itemCollision;
    let makePush = true;
    const pushedItems = [];
    for (; i < conflicts.length; i++) {
      itemCollision = conflicts[i];
      if (itemCollision === this.gridsterItem) {
        continue;
      }
      if (!itemCollision.canBeDragged()) {
        makePush = false;
        break;
      }
      const p = this.pushedItemsTemp.indexOf(itemCollision);
      if (p > -1 && this.pushedItemsTempPath[p].length > 10) {
        // stop if item is pushed more than 10 times to break infinite loops
        makePush = false;
        break;
      }
      if (this.tryPattern[direction][0].call(this, itemCollision, gridsterItem)) {
        this.pushedItemsOrder.push(itemCollision);
        pushedItems.push(itemCollision);
      } else if (this.tryPattern[direction][1].call(this, itemCollision, gridsterItem)) {
        this.pushedItemsOrder.push(itemCollision);
        pushedItems.push(itemCollision);
      } else if (this.tryPattern[direction][2].call(this, itemCollision, gridsterItem)) {
        this.pushedItemsOrder.push(itemCollision);
        pushedItems.push(itemCollision);
      } else if (this.tryPattern[direction][3].call(this, itemCollision, gridsterItem)) {
        this.pushedItemsOrder.push(itemCollision);
        pushedItems.push(itemCollision);
      } else {
        makePush = false;
        break;
      }
    }
    if (!makePush) {
      i = this.pushedItemsOrder.lastIndexOf(pushedItems[0]);
      if (i > -1) {
        let j = this.pushedItemsOrder.length - 1;
        for (; j >= i; j--) {
          itemCollision = this.pushedItemsOrder[j];
          this.pushedItemsOrder.pop();
          this.removeFromTempPushed(itemCollision);
          this.removeFromPushedItem(itemCollision);
        }
      }
    }
    this.iteration++;
    return makePush;
  }
  trySouth(gridsterItemCollide, gridsterItem) {
    if (!this.gridster.$options.pushDirections.south) {
      return false;
    }
    this.addToTempPushed(gridsterItemCollide);
    gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
    if (this.push(gridsterItemCollide, this.fromNorth)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      return true;
    } else {
      this.removeFromTempPushed(gridsterItemCollide);
    }
    return false;
  }
  tryNorth(gridsterItemCollide, gridsterItem) {
    if (!this.gridster.$options.pushDirections.north) {
      return false;
    }
    this.addToTempPushed(gridsterItemCollide);
    gridsterItemCollide.$item.y = gridsterItem.$item.y - gridsterItemCollide.$item.rows;
    if (this.push(gridsterItemCollide, this.fromSouth)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      return true;
    } else {
      this.removeFromTempPushed(gridsterItemCollide);
    }
    return false;
  }
  tryEast(gridsterItemCollide, gridsterItem) {
    if (!this.gridster.$options.pushDirections.east) {
      return false;
    }
    this.addToTempPushed(gridsterItemCollide);
    gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
    if (this.push(gridsterItemCollide, this.fromWest)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      return true;
    } else {
      this.removeFromTempPushed(gridsterItemCollide);
    }
    return false;
  }
  tryWest(gridsterItemCollide, gridsterItem) {
    if (!this.gridster.$options.pushDirections.west) {
      return false;
    }
    this.addToTempPushed(gridsterItemCollide);
    gridsterItemCollide.$item.x = gridsterItem.$item.x - gridsterItemCollide.$item.cols;
    if (this.push(gridsterItemCollide, this.fromEast)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      return true;
    } else {
      this.removeFromTempPushed(gridsterItemCollide);
    }
    return false;
  }
  addToTempPushed(gridsterItem) {
    let i = this.pushedItemsTemp.indexOf(gridsterItem);
    if (i === -1) {
      i = this.pushedItemsTemp.push(gridsterItem) - 1;
      this.pushedItemsTempPath[i] = [];
    }
    this.pushedItemsTempPath[i].push({
      x: gridsterItem.$item.x,
      y: gridsterItem.$item.y
    });
  }
  removeFromTempPushed(gridsterItem) {
    const i = this.pushedItemsTemp.indexOf(gridsterItem);
    const tempPosition = this.pushedItemsTempPath[i].pop();
    if (!tempPosition) {
      return;
    }
    gridsterItem.$item.x = tempPosition.x;
    gridsterItem.$item.y = tempPosition.y;
    gridsterItem.setSize();
    if (!this.pushedItemsTempPath[i].length) {
      this.pushedItemsTemp.splice(i, 1);
      this.pushedItemsTempPath.splice(i, 1);
    }
  }
  addToPushed(gridsterItem) {
    if (this.pushedItems.indexOf(gridsterItem) < 0) {
      this.pushedItems.push(gridsterItem);
      this.pushedItemsPath.push([{
        x: gridsterItem.item.x || 0,
        y: gridsterItem.item.y || 0
      }, {
        x: gridsterItem.$item.x,
        y: gridsterItem.$item.y
      }]);
    } else {
      const i = this.pushedItems.indexOf(gridsterItem);
      this.pushedItemsPath[i].push({
        x: gridsterItem.$item.x,
        y: gridsterItem.$item.y
      });
    }
  }
  removeFromPushed(i) {
    if (i > -1) {
      this.pushedItems.splice(i, 1);
      this.pushedItemsPath.splice(i, 1);
    }
  }
  removeFromPushedItem(gridsterItem) {
    const i = this.pushedItems.indexOf(gridsterItem);
    if (i > -1) {
      this.pushedItemsPath[i].pop();
      if (!this.pushedItemsPath.length) {
        this.pushedItems.splice(i, 1);
        this.pushedItemsPath.splice(i, 1);
      }
    }
  }
  checkPushedItem(pushedItem, i) {
    const path = this.pushedItemsPath[i];
    let j = path.length - 2;
    let lastPosition;
    let x;
    let y;
    let change = false;
    for (; j > -1; j--) {
      lastPosition = path[j];
      x = pushedItem.$item.x;
      y = pushedItem.$item.y;
      pushedItem.$item.x = lastPosition.x;
      pushedItem.$item.y = lastPosition.y;
      if (!this.gridster.findItemWithItem(pushedItem.$item)) {
        pushedItem.setSize();
        path.splice(j + 1, path.length - j - 1);
        change = true;
      } else {
        pushedItem.$item.x = x;
        pushedItem.$item.y = y;
      }
    }
    if (path.length < 2) {
      this.removeFromPushed(i);
    }
    return change;
  }
}
;// CONCATENATED MODULE: ./src/grid/gridsterScroll.service.ts
let scrollSensitivity;
let scrollSpeed;
const intervalDuration = 50;
let gridsterElement;
let resizeEvent;
let resizeEventType;
let intervalE;
let intervalW;
let intervalN;
let intervalS;
function gridsterScroll_service_scroll(gridster, left, top, width, height, event, lastMouse, calculateItemPosition, resize, resizeEventScrollType) {
  scrollSensitivity = gridster.$options.scrollSensitivity;
  scrollSpeed = gridster.$options.scrollSpeed;
  gridsterElement = gridster.el;
  resizeEvent = resize;
  resizeEventType = resizeEventScrollType;
  const offsetWidth = gridsterElement.offsetWidth;
  const offsetHeight = gridsterElement.offsetHeight;
  const offsetLeft = gridsterElement.scrollLeft;
  const offsetTop = gridsterElement.scrollTop;
  const elemTopOffset = top - offsetTop;
  const elemBottomOffset = offsetHeight + offsetTop - top - height;
  const {
    clientX,
    clientY
  } = event;
  if (!gridster.$options.disableScrollVertical) {
    if (lastMouse.clientY < clientY && elemBottomOffset < scrollSensitivity) {
      cancelN();
      if (resizeEvent && resizeEventType && !resizeEventType.south || intervalS) {
        return;
      }
      intervalS = startVertical(1, calculateItemPosition, lastMouse);
    } else if (lastMouse.clientY > clientY && offsetTop > 0 && elemTopOffset < scrollSensitivity) {
      cancelS();
      if (resizeEvent && resizeEventType && !resizeEventType.north || intervalN) {
        return;
      }
      intervalN = startVertical(-1, calculateItemPosition, lastMouse);
    } else if (lastMouse.clientY !== clientY) {
      cancelVertical();
    }
  }
  const elemRightOffset = offsetLeft + offsetWidth - left - width;
  const elemLeftOffset = left - offsetLeft;
  if (!gridster.$options.disableScrollHorizontal) {
    if (lastMouse.clientX < clientX && elemRightOffset <= scrollSensitivity) {
      cancelW();
      if (resizeEvent && resizeEventType && !resizeEventType.east || intervalE) {
        return;
      }
      intervalE = startHorizontal(1, calculateItemPosition, lastMouse);
    } else if (lastMouse.clientX > clientX && offsetLeft > 0 && elemLeftOffset < scrollSensitivity) {
      cancelE();
      if (resizeEvent && resizeEventType && !resizeEventType.west || intervalW) {
        return;
      }
      intervalW = startHorizontal(-1, calculateItemPosition, lastMouse);
    } else if (lastMouse.clientX !== clientX) {
      cancelHorizontal();
    }
  }
}
function startVertical(sign, calculateItemPosition, lastMouse) {
  let clientY = lastMouse.clientY;
  return window.setInterval(() => {
    if (!gridsterElement || sign === -1 && gridsterElement.scrollTop - scrollSpeed < 0) {
      cancelVertical();
    }
    gridsterElement.scrollTop += sign * scrollSpeed;
    clientY += sign * scrollSpeed;
    calculateItemPosition({
      clientX: lastMouse.clientX,
      clientY
    });
  }, intervalDuration);
}
function startHorizontal(sign, calculateItemPosition, lastMouse) {
  let clientX = lastMouse.clientX;
  return window.setInterval(() => {
    if (!gridsterElement || sign === -1 && gridsterElement.scrollLeft - scrollSpeed < 0) {
      cancelHorizontal();
    }
    gridsterElement.scrollLeft += sign * scrollSpeed;
    clientX += sign * scrollSpeed;
    calculateItemPosition({
      clientX,
      clientY: lastMouse.clientY
    });
  }, intervalDuration);
}
function cancelScroll() {
  cancelHorizontal();
  cancelVertical();
  gridsterElement = null;
}
function cancelHorizontal() {
  cancelE();
  cancelW();
}
function cancelVertical() {
  cancelN();
  cancelS();
}
function cancelE() {
  if (intervalE) {
    clearInterval(intervalE);
    intervalE = 0;
  }
}
function cancelW() {
  if (intervalW) {
    clearInterval(intervalW);
    intervalW = 0;
  }
}
function cancelS() {
  if (intervalS) {
    clearInterval(intervalS);
    intervalS = 0;
  }
}
function cancelN() {
  if (intervalN) {
    clearInterval(intervalN);
    intervalN = 0;
  }
}
;// CONCATENATED MODULE: ./src/grid/gridsterSwap.service.ts

class GridsterSwap {
  constructor(gridsterItem) {
    _defineProperty(this, "swapedItem", void 0);
    _defineProperty(this, "gridsterItem", void 0);
    _defineProperty(this, "gridster", void 0);
    this.gridsterItem = gridsterItem;
    this.gridster = gridsterItem.gridster;
  }
  destroy() {
    this.gridster = this.gridsterItem = this.swapedItem = null;
  }
  swapItems() {
    if (this.gridster.$options.swap) {
      this.checkSwapBack();
      this.checkSwap(this.gridsterItem);
    }
  }
  checkSwapBack() {
    if (this.swapedItem) {
      const x = this.swapedItem.$item.x;
      const y = this.swapedItem.$item.y;
      this.swapedItem.$item.x = this.swapedItem.item.x || 0;
      this.swapedItem.$item.y = this.swapedItem.item.y || 0;
      if (this.gridster.checkCollision(this.swapedItem.$item)) {
        this.swapedItem.$item.x = x;
        this.swapedItem.$item.y = y;
      } else {
        this.swapedItem.setSize();
        this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
        this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
        this.swapedItem = undefined;
      }
    }
  }
  restoreSwapItem() {
    if (this.swapedItem) {
      this.swapedItem.$item.x = this.swapedItem.item.x || 0;
      this.swapedItem.$item.y = this.swapedItem.item.y || 0;
      this.swapedItem.setSize();
      this.swapedItem = undefined;
    }
  }
  setSwapItem() {
    if (this.swapedItem) {
      this.swapedItem.checkItemChanges(this.swapedItem.$item, this.swapedItem.item);
      this.swapedItem = undefined;
    }
  }
  checkSwap(pushedBy) {
    let gridsterItemCollision;
    if (this.gridster.$options.swapWhileDragging) {
      gridsterItemCollision = this.gridster.checkCollisionForSwaping(pushedBy.$item);
    } else {
      gridsterItemCollision = this.gridster.checkCollision(pushedBy.$item);
    }
    if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
      const gridsterItemCollide = gridsterItemCollision;
      const copyCollisionX = gridsterItemCollide.$item.x;
      const copyCollisionY = gridsterItemCollide.$item.y;
      const copyX = pushedBy.$item.x;
      const copyY = pushedBy.$item.y;
      const diffX = copyX - copyCollisionX;
      const diffY = copyY - copyCollisionY;
      gridsterItemCollide.$item.x = pushedBy.item.x - diffX;
      gridsterItemCollide.$item.y = pushedBy.item.y - diffY;
      pushedBy.$item.x = gridsterItemCollide.item.x + diffX;
      pushedBy.$item.y = gridsterItemCollide.item.y + diffY;
      if (this.gridster.checkCollision(gridsterItemCollide.$item) || this.gridster.checkCollision(pushedBy.$item)) {
        pushedBy.$item.x = copyX;
        pushedBy.$item.y = copyY;
        gridsterItemCollide.$item.x = copyCollisionX;
        gridsterItemCollide.$item.y = copyCollisionY;
      } else {
        gridsterItemCollide.setSize();
        this.swapedItem = gridsterItemCollide;
        if (this.gridster.$options.swapWhileDragging) {
          this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
          this.setSwapItem();
        }
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/grid/gridsterDraggable.service.ts







const GRIDSTER_ITEM_RESIZABLE_HANDLER_CLASS = 'gridster-item-resizable-handler';
var Direction;
(function (Direction) {
  Direction["UP"] = "UP";
  Direction["DOWN"] = "DOWN";
  Direction["LEFT"] = "LEFT";
  Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
class GridsterDraggable {
  constructor(gridsterItem, gridster, zone) {
    _defineProperty(this, "zone", void 0);
    _defineProperty(this, "gridsterItem", void 0);
    _defineProperty(this, "gridster", void 0);
    _defineProperty(this, "lastMouse", void 0);
    _defineProperty(this, "offsetLeft", void 0);
    _defineProperty(this, "offsetTop", void 0);
    _defineProperty(this, "margin", void 0);
    _defineProperty(this, "outerMarginTop", void 0);
    _defineProperty(this, "outerMarginRight", void 0);
    _defineProperty(this, "outerMarginBottom", void 0);
    _defineProperty(this, "outerMarginLeft", void 0);
    _defineProperty(this, "diffTop", void 0);
    _defineProperty(this, "diffLeft", void 0);
    _defineProperty(this, "originalClientX", void 0);
    _defineProperty(this, "originalClientY", void 0);
    _defineProperty(this, "top", void 0);
    _defineProperty(this, "left", void 0);
    _defineProperty(this, "height", void 0);
    _defineProperty(this, "width", void 0);
    _defineProperty(this, "positionX", void 0);
    _defineProperty(this, "positionY", void 0);
    _defineProperty(this, "positionXBackup", void 0);
    _defineProperty(this, "positionYBackup", void 0);
    _defineProperty(this, "enabled", void 0);
    _defineProperty(this, "mousemove", void 0);
    _defineProperty(this, "mouseup", void 0);
    _defineProperty(this, "mouseleave", void 0);
    _defineProperty(this, "cancelOnBlur", void 0);
    _defineProperty(this, "touchmove", void 0);
    _defineProperty(this, "touchend", void 0);
    _defineProperty(this, "touchcancel", void 0);
    _defineProperty(this, "mousedown", void 0);
    _defineProperty(this, "touchstart", void 0);
    _defineProperty(this, "push", void 0);
    _defineProperty(this, "swap", void 0);
    _defineProperty(this, "path", void 0);
    _defineProperty(this, "collision", false);
    _defineProperty(this, "dragMove", e => {
      e.stopPropagation();
      e.preventDefault();
      GridsterUtils.checkTouchEvent(e);
      // get the directions of the mouse event
      let directions = this.getDirections(e);
      if (this.gridster.options.enableBoundaryControl) {
        // prevent moving up at the top of gridster
        if (directions.includes(Direction.UP) && this.gridsterItem.el.getBoundingClientRect().top < this.gridster.el.getBoundingClientRect().top + (this.outerMarginTop ?? this.margin)) {
          directions = directions.filter(direction => direction != Direction.UP);
          e = new MouseEvent(e.type, {
            clientX: e.clientX,
            clientY: this.lastMouse.clientY
          });
        }
        // prevent moving left at the leftmost column of gridster
        if (directions.includes(Direction.LEFT) && this.gridsterItem.el.getBoundingClientRect().left < this.gridster.el.getBoundingClientRect().left + (this.outerMarginLeft ?? this.margin)) {
          directions = directions.filter(direction => direction != Direction.LEFT);
          e = new MouseEvent(e.type, {
            clientX: this.lastMouse.clientX,
            clientY: e.clientY
          });
        }
        // prevent moving right at the rightmost column of gridster
        if (directions.includes(Direction.RIGHT) && this.gridsterItem.el.getBoundingClientRect().right > this.gridster.el.getBoundingClientRect().right - (this.outerMarginRight ?? this.margin)) {
          directions = directions.filter(direction => direction != Direction.RIGHT);
          e = new MouseEvent(e.type, {
            clientX: this.lastMouse.clientX,
            clientY: e.clientY
          });
        }
        // prevent moving down at the bottom of gridster
        if (directions.includes(Direction.DOWN) && this.gridsterItem.el.getBoundingClientRect().bottom > this.gridster.el.getBoundingClientRect().bottom - (this.outerMarginBottom ?? this.margin)) {
          directions = directions.filter(direction => direction != Direction.DOWN);
          e = new MouseEvent(e.type, {
            clientX: e.clientX,
            clientY: this.lastMouse.clientY
          });
        }
      }
      // do not change item location when there is no direction to go
      if (directions.length) {
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        gridsterScroll_service_scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.calculateItemPositionFromMousePosition);
        this.calculateItemPositionFromMousePosition(e);
      }
    });
    _defineProperty(this, "calculateItemPositionFromMousePosition", e => {
      if (this.gridster.options.scale) {
        this.calculateItemPositionWithScale(e, this.gridster.options.scale);
      } else {
        this.calculateItemPositionWithoutScale(e);
      }
      this.calculateItemPosition();
      this.lastMouse.clientX = e.clientX;
      this.lastMouse.clientY = e.clientY;
      this.zone.run(() => {
        this.gridster.updateGrid();
      });
    });
    _defineProperty(this, "dragStop", e => {
      e.stopPropagation();
      e.preventDefault();
      cancelScroll();
      this.cancelOnBlur();
      this.mousemove();
      this.mouseup();
      this.mouseleave();
      this.touchmove();
      this.touchend();
      this.touchcancel();
      this.gridsterItem.renderer.removeClass(this.gridsterItem.el, 'gridster-item-moving');
      this.gridster.dragInProgress = false;
      this.gridster.updateGrid();
      this.path = [];
      if (this.gridster.options.draggable && this.gridster.options.draggable.stop) {
        Promise.resolve(this.gridster.options.draggable.stop(this.gridsterItem.item, this.gridsterItem, e)).then(this.makeDrag, this.cancelDrag);
      } else {
        this.makeDrag();
      }
      setTimeout(() => {
        if (this.gridster) {
          this.gridster.movingItem = null;
          this.gridster.previewStyle(true);
        }
      });
    });
    _defineProperty(this, "cancelDrag", () => {
      this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
      this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
      this.gridsterItem.setSize();
      if (this.push) {
        this.push.restoreItems();
      }
      if (this.swap) {
        this.swap.restoreSwapItem();
      }
      if (this.push) {
        this.push.destroy();
        this.push = null;
      }
      if (this.swap) {
        this.swap.destroy();
        this.swap = null;
      }
    });
    _defineProperty(this, "makeDrag", () => {
      if (this.gridster.$options.draggable.dropOverItems && this.gridster.options.draggable && this.gridster.options.draggable.dropOverItemsCallback && this.collision && this.collision !== true && this.collision.$item) {
        this.gridster.options.draggable.dropOverItemsCallback(this.gridsterItem.item, this.collision.item, this.gridster);
      }
      this.collision = false;
      this.gridsterItem.setSize();
      this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
      if (this.push) {
        this.push.setPushedItems();
      }
      if (this.swap) {
        this.swap.setSwapItem();
      }
      if (this.push) {
        this.push.destroy();
        this.push = null;
      }
      if (this.swap) {
        this.swap.destroy();
        this.swap = null;
      }
    });
    _defineProperty(this, "dragStartDelay", e => {
      const target = e.target;
      if (target.classList.contains(GRIDSTER_ITEM_RESIZABLE_HANDLER_CLASS)) {
        return;
      }
      if (GridsterUtils.checkContentClassForEvent(this.gridster, e)) {
        return;
      }
      GridsterUtils.checkTouchEvent(e);
      if (!this.gridster.$options.draggable.delayStart) {
        this.dragStart(e);
        return;
      }
      const timeout = setTimeout(() => {
        this.dragStart(e);
        cancelDrag();
      }, this.gridster.$options.draggable.delayStart);
      const cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
      const cancelMouseLeave = this.gridsterItem.renderer.listen('document', 'mouseleave', cancelDrag);
      const cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
      const cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
      const cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
      const cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
      function cancelMove(eventMove) {
        GridsterUtils.checkTouchEvent(eventMove);
        if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
          cancelDrag();
        }
      }
      function cancelDrag() {
        clearTimeout(timeout);
        cancelOnBlur();
        cancelMouse();
        cancelMouseLeave();
        cancelTouchMove();
        cancelTouchEnd();
        cancelTouchCancel();
      }
    });
    this.zone = zone;
    this.gridsterItem = gridsterItem;
    this.gridster = gridster;
    this.lastMouse = {
      clientX: 0,
      clientY: 0
    };
    this.path = [];
  }
  destroy() {
    this.gridster.movingItem = null;
    if (this.gridster.previewStyle) {
      this.gridster.previewStyle(true);
    }
    this.gridsterItem = this.gridster = this.collision = null;
    if (this.mousedown) {
      this.mousedown();
      this.touchstart();
    }
  }
  dragStart(e) {
    if (e.which && e.which !== 1) {
      return;
    }
    if (this.gridster.options.draggable && this.gridster.options.draggable.start) {
      this.gridster.options.draggable.start(this.gridsterItem.item, this.gridsterItem, e);
    }
    e.stopPropagation();
    e.preventDefault();
    this.zone.runOutsideAngular(() => {
      this.mousemove = this.gridsterItem.renderer.listen('document', 'mousemove', this.dragMove);
      this.touchmove = this.gridster.renderer.listen(this.gridster.el, 'touchmove', this.dragMove);
    });
    this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStop);
    this.mouseleave = this.gridsterItem.renderer.listen('document', 'mouseleave', this.dragStop);
    this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStop);
    this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStop);
    this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStop);
    this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-moving');
    this.margin = this.gridster.$options.margin;
    this.outerMarginTop = this.gridster.$options.outerMarginTop;
    this.outerMarginRight = this.gridster.$options.outerMarginRight;
    this.outerMarginBottom = this.gridster.$options.outerMarginBottom;
    this.outerMarginLeft = this.gridster.$options.outerMarginLeft;
    this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
    this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
    this.left = this.gridsterItem.left - this.margin;
    this.top = this.gridsterItem.top - this.margin;
    this.originalClientX = e.clientX;
    this.originalClientY = e.clientY;
    this.width = this.gridsterItem.width;
    this.height = this.gridsterItem.height;
    if (this.gridster.$options.dirType === DirTypes.RTL) {
      this.diffLeft = e.clientX - this.gridster.el.scrollWidth + this.gridsterItem.left;
    } else {
      this.diffLeft = e.clientX + this.offsetLeft - this.margin - this.left;
    }
    this.diffTop = e.clientY + this.offsetTop - this.margin - this.top;
    this.gridster.movingItem = this.gridsterItem.$item;
    this.gridster.previewStyle(true);
    this.push = new GridsterPush(this.gridsterItem);
    this.swap = new GridsterSwap(this.gridsterItem);
    this.gridster.dragInProgress = true;
    this.gridster.updateGrid();
    this.path.push({
      x: this.gridsterItem.item.x || 0,
      y: this.gridsterItem.item.y || 0
    });
  }
  calculateItemPositionWithScale(e, scale) {
    if (this.gridster.$options.dirType === DirTypes.RTL) {
      this.left = this.gridster.el.scrollWidth - this.originalClientX + (e.clientX - this.originalClientX) / scale + this.diffLeft;
    } else {
      this.left = this.originalClientX + (e.clientX - this.originalClientX) / scale + this.offsetLeft - this.diffLeft;
    }
    this.top = this.originalClientY + (e.clientY - this.originalClientY) / scale + this.offsetTop - this.diffTop;
  }
  calculateItemPositionWithoutScale(e) {
    if (this.gridster.$options.dirType === DirTypes.RTL) {
      this.left = this.gridster.el.scrollWidth - e.clientX + this.diffLeft;
    } else {
      this.left = e.clientX + this.offsetLeft - this.diffLeft;
    }
    this.top = e.clientY + this.offsetTop - this.diffTop;
  }
  calculateItemPosition() {
    this.gridster.movingItem = this.gridsterItem.$item;
    this.positionX = this.gridster.pixelsToPositionX(this.left, Math.round);
    this.positionY = this.gridster.pixelsToPositionY(this.top, Math.round);
    this.positionXBackup = this.gridsterItem.$item.x;
    this.positionYBackup = this.gridsterItem.$item.y;
    this.gridsterItem.$item.x = this.positionX;
    if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
      this.gridsterItem.$item.x = this.positionXBackup;
    }
    this.gridsterItem.$item.y = this.positionY;
    if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
      this.gridsterItem.$item.y = this.positionYBackup;
    }
    this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, this.left, this.top);
    if (this.positionXBackup !== this.gridsterItem.$item.x || this.positionYBackup !== this.gridsterItem.$item.y) {
      const lastPosition = this.path[this.path.length - 1];
      let direction = '';
      if (lastPosition.x < this.gridsterItem.$item.x) {
        direction = this.push.fromWest;
      } else if (lastPosition.x > this.gridsterItem.$item.x) {
        direction = this.push.fromEast;
      } else if (lastPosition.y < this.gridsterItem.$item.y) {
        direction = this.push.fromNorth;
      } else if (lastPosition.y > this.gridsterItem.$item.y) {
        direction = this.push.fromSouth;
      }
      this.push.pushItems(direction, this.gridster.$options.disablePushOnDrag);
      this.swap.swapItems();
      this.collision = this.gridster.checkCollision(this.gridsterItem.$item);
      if (this.collision) {
        this.gridsterItem.$item.x = this.positionXBackup;
        this.gridsterItem.$item.y = this.positionYBackup;
        if (this.gridster.$options.draggable.dropOverItems && this.collision !== true && this.collision.$item) {
          this.gridster.movingItem = null;
        }
      } else {
        this.path.push({
          x: this.gridsterItem.$item.x,
          y: this.gridsterItem.$item.y
        });
      }
      this.push.checkPushBack();
    } else {
      // reset the collision when you drag and drop on an adjacent cell that is not empty
      // and go back to the cell you were in from the beginning,
      // this is to prevent `dropOverItemsCallback'
      this.collision = false;
    }
    this.gridster.previewStyle(true);
  }
  toggle() {
    const enableDrag = this.gridsterItem.canBeDragged();
    if (!this.enabled && enableDrag) {
      this.enabled = !this.enabled;
      this.mousedown = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'mousedown', this.dragStartDelay);
      this.touchstart = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'touchstart', this.dragStartDelay);
    } else if (this.enabled && !enableDrag) {
      this.enabled = !this.enabled;
      this.mousedown();
      this.touchstart();
    }
  }
  /**
   * Returns the list of directions for given mouse event
   * @param e Mouse event
   * */
  getDirections(e) {
    const directions = [];
    if (this.lastMouse.clientX === 0 && this.lastMouse.clientY === 0) {
      this.lastMouse.clientY = e.clientY;
      this.lastMouse.clientX = e.clientX;
    }
    if (this.lastMouse.clientY > e.clientY) {
      directions.push(Direction.UP);
    }
    if (this.lastMouse.clientY < e.clientY) {
      directions.push(Direction.DOWN);
    }
    if (this.lastMouse.clientX < e.clientX) {
      directions.push(Direction.RIGHT);
    }
    if (this.lastMouse.clientX > e.clientX) {
      directions.push(Direction.LEFT);
    }
    return directions;
  }
}
;// CONCATENATED MODULE: ./src/grid/gridsterPushResize.service.ts


class GridsterPushResize {
  constructor(gridsterItem) {
    _defineProperty(this, "fromSouth", void 0);
    _defineProperty(this, "fromNorth", void 0);
    _defineProperty(this, "fromEast", void 0);
    _defineProperty(this, "fromWest", void 0);
    _defineProperty(this, "pushedItems", void 0);
    _defineProperty(this, "pushedItemsPath", void 0);
    _defineProperty(this, "gridsterItem", void 0);
    _defineProperty(this, "gridster", void 0);
    _defineProperty(this, "tryPattern", void 0);
    this.pushedItems = [];
    this.pushedItemsPath = [];
    this.gridsterItem = gridsterItem;
    this.gridster = gridsterItem.gridster;
    this.tryPattern = {
      fromEast: this.tryWest,
      fromWest: this.tryEast,
      fromNorth: this.trySouth,
      fromSouth: this.tryNorth
    };
    this.fromSouth = 'fromSouth';
    this.fromNorth = 'fromNorth';
    this.fromEast = 'fromEast';
    this.fromWest = 'fromWest';
  }
  destroy() {
    this.gridster = this.gridsterItem = null;
  }
  pushItems(direction) {
    if (this.gridster.$options.pushResizeItems) {
      return this.push(this.gridsterItem, direction);
    } else {
      return false;
    }
  }
  restoreItems() {
    let i = 0;
    const l = this.pushedItems.length;
    let pushedItem;
    for (; i < l; i++) {
      pushedItem = this.pushedItems[i];
      pushedItem.$item.x = pushedItem.item.x || 0;
      pushedItem.$item.y = pushedItem.item.y || 0;
      pushedItem.$item.cols = pushedItem.item.cols || 1;
      pushedItem.$item.row = pushedItem.item.row || 1;
      pushedItem.setSize();
    }
    this.pushedItems = [];
    this.pushedItemsPath = [];
  }
  setPushedItems() {
    let i = 0;
    const l = this.pushedItems.length;
    let pushedItem;
    for (; i < l; i++) {
      pushedItem = this.pushedItems[i];
      pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
    }
    this.pushedItems = [];
    this.pushedItemsPath = [];
  }
  checkPushBack() {
    let i = this.pushedItems.length - 1;
    let change = false;
    for (; i > -1; i--) {
      if (this.checkPushedItem(this.pushedItems[i], i)) {
        change = true;
      }
    }
    if (change) {
      this.checkPushBack();
    }
  }
  push(gridsterItem, direction) {
    const gridsterItemCollision = this.gridster.checkCollision(gridsterItem.$item);
    if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision !== this.gridsterItem && gridsterItemCollision.canBeResized()) {
      if (this.tryPattern[direction].call(this, gridsterItemCollision, gridsterItem, direction)) {
        return true;
      }
    } else if (gridsterItemCollision === false) {
      return true;
    }
    return false;
  }
  trySouth(gridsterItemCollide, gridsterItem, direction) {
    const backUpY = gridsterItemCollide.$item.y;
    const backUpRows = gridsterItemCollide.$item.rows;
    gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
    gridsterItemCollide.$item.rows = backUpRows + backUpY - gridsterItemCollide.$item.y;
    if (!this.gridster.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item) && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      this.push(gridsterItem, direction);
      return true;
    } else {
      gridsterItemCollide.$item.y = backUpY;
      gridsterItemCollide.$item.rows = backUpRows;
    }
    return false;
  }
  tryNorth(gridsterItemCollide, gridsterItem, direction) {
    const backUpRows = gridsterItemCollide.$item.rows;
    gridsterItemCollide.$item.rows = gridsterItem.$item.y - gridsterItemCollide.$item.y;
    if (!this.gridster.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item) && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      this.push(gridsterItem, direction);
      return true;
    } else {
      gridsterItemCollide.$item.rows = backUpRows;
    }
    return false;
  }
  tryEast(gridsterItemCollide, gridsterItem, direction) {
    const backUpX = gridsterItemCollide.$item.x;
    const backUpCols = gridsterItemCollide.$item.cols;
    gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
    gridsterItemCollide.$item.cols = backUpCols + backUpX - gridsterItemCollide.$item.x;
    if (!this.gridster.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item) && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      this.push(gridsterItem, direction);
      return true;
    } else {
      gridsterItemCollide.$item.x = backUpX;
      gridsterItemCollide.$item.cols = backUpCols;
    }
    return false;
  }
  tryWest(gridsterItemCollide, gridsterItem, direction) {
    const backUpCols = gridsterItemCollide.$item.cols;
    gridsterItemCollide.$item.cols = gridsterItem.$item.x - gridsterItemCollide.$item.x;
    if (!this.gridster.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item) && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
      gridsterItemCollide.setSize();
      this.addToPushed(gridsterItemCollide);
      this.push(gridsterItem, direction);
      return true;
    } else {
      gridsterItemCollide.$item.cols = backUpCols;
    }
    return false;
  }
  addToPushed(gridsterItem) {
    if (this.pushedItems.indexOf(gridsterItem) < 0) {
      this.pushedItems.push(gridsterItem);
      this.pushedItemsPath.push([{
        x: gridsterItem.item.x || 0,
        y: gridsterItem.item.y || 0,
        cols: gridsterItem.item.cols || 0,
        rows: gridsterItem.item.rows || 0
      }, {
        x: gridsterItem.$item.x,
        y: gridsterItem.$item.y,
        cols: gridsterItem.$item.cols,
        rows: gridsterItem.$item.rows
      }]);
    } else {
      const i = this.pushedItems.indexOf(gridsterItem);
      this.pushedItemsPath[i].push({
        x: gridsterItem.$item.x,
        y: gridsterItem.$item.y,
        cols: gridsterItem.$item.cols,
        rows: gridsterItem.$item.rows
      });
    }
  }
  removeFromPushed(i) {
    if (i > -1) {
      this.pushedItems.splice(i, 1);
      this.pushedItemsPath.splice(i, 1);
    }
  }
  checkPushedItem(pushedItem, i) {
    const path = this.pushedItemsPath[i];
    let j = path.length - 2;
    let lastPosition;
    let x;
    let y;
    let cols;
    let rows;
    for (; j > -1; j--) {
      lastPosition = path[j];
      x = pushedItem.$item.x;
      y = pushedItem.$item.y;
      cols = pushedItem.$item.cols;
      rows = pushedItem.$item.rows;
      pushedItem.$item.x = lastPosition.x;
      pushedItem.$item.y = lastPosition.y;
      pushedItem.$item.cols = lastPosition.cols;
      pushedItem.$item.rows = lastPosition.rows;
      if (!this.gridster.findItemWithItem(pushedItem.$item)) {
        pushedItem.setSize();
        path.splice(j + 1, path.length - 1 - j);
      } else {
        pushedItem.$item.x = x;
        pushedItem.$item.y = y;
        pushedItem.$item.cols = cols;
        pushedItem.$item.rows = rows;
      }
    }
    if (path.length < 2) {
      this.removeFromPushed(i);
      return true;
    }
    return false;
  }
}
;// CONCATENATED MODULE: ./src/grid/gridsterResizable.service.ts







class GridsterResizable {
  constructor(gridsterItem, gridster, zone) {
    _defineProperty(this, "zone", void 0);
    _defineProperty(this, "gridsterItem", void 0);
    _defineProperty(this, "gridster", void 0);
    _defineProperty(this, "lastMouse", void 0);
    _defineProperty(this, "itemBackup", void 0);
    _defineProperty(this, "resizeEventScrollType", void 0);
    /**
     * The direction function may reference any of the `GridsterResizable` class methods, that are
     * responsible for gridster resize when the `dragmove` event is being handled. E.g. it may reference
     * the `handleNorth` method when the north handle is pressed and moved by a mouse.
     */
    _defineProperty(this, "directionFunction", null);
    _defineProperty(this, "resizeEnabled", void 0);
    _defineProperty(this, "resizableHandles", void 0);
    _defineProperty(this, "mousemove", void 0);
    _defineProperty(this, "mouseup", void 0);
    _defineProperty(this, "mouseleave", void 0);
    _defineProperty(this, "cancelOnBlur", void 0);
    _defineProperty(this, "touchmove", void 0);
    _defineProperty(this, "touchend", void 0);
    _defineProperty(this, "touchcancel", void 0);
    _defineProperty(this, "push", void 0);
    _defineProperty(this, "pushResize", void 0);
    _defineProperty(this, "minHeight", void 0);
    _defineProperty(this, "minWidth", void 0);
    _defineProperty(this, "offsetTop", void 0);
    _defineProperty(this, "offsetLeft", void 0);
    _defineProperty(this, "diffTop", void 0);
    _defineProperty(this, "diffLeft", void 0);
    _defineProperty(this, "diffRight", void 0);
    _defineProperty(this, "diffBottom", void 0);
    _defineProperty(this, "margin", void 0);
    _defineProperty(this, "outerMarginTop", void 0);
    _defineProperty(this, "outerMarginRight", void 0);
    _defineProperty(this, "outerMarginBottom", void 0);
    _defineProperty(this, "outerMarginLeft", void 0);
    _defineProperty(this, "originalClientX", void 0);
    _defineProperty(this, "originalClientY", void 0);
    _defineProperty(this, "top", void 0);
    _defineProperty(this, "left", void 0);
    _defineProperty(this, "bottom", void 0);
    _defineProperty(this, "right", void 0);
    _defineProperty(this, "width", void 0);
    _defineProperty(this, "height", void 0);
    _defineProperty(this, "newPosition", void 0);
    _defineProperty(this, "dragMove", e => {
      if (this.directionFunction === null) {
        throw new Error('The `directionFunction` has not been set before calling `dragMove`.');
      }
      e.stopPropagation();
      e.preventDefault();
      GridsterUtils.checkTouchEvent(e);
      this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
      this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
      gridsterScroll_service_scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.directionFunction, true, this.resizeEventScrollType);
      const scale = this.gridster.options.scale || 1;
      this.directionFunction({
        clientX: this.originalClientX + (e.clientX - this.originalClientX) / scale,
        clientY: this.originalClientY + (e.clientY - this.originalClientY) / scale
      });
      this.lastMouse.clientX = e.clientX;
      this.lastMouse.clientY = e.clientY;
      this.zone.run(() => {
        this.gridster.updateGrid();
      });
    });
    _defineProperty(this, "dragStop", e => {
      e.stopPropagation();
      e.preventDefault();
      cancelScroll();
      this.mousemove();
      this.mouseup();
      this.mouseleave();
      this.cancelOnBlur();
      this.touchmove();
      this.touchend();
      this.touchcancel();
      this.gridster.dragInProgress = false;
      this.gridster.updateGrid();
      if (this.gridster.options.resizable && this.gridster.options.resizable.stop) {
        Promise.resolve(this.gridster.options.resizable.stop(this.gridsterItem.item, this.gridsterItem, e)).then(this.makeResize, this.cancelResize);
      } else {
        this.makeResize();
      }
      setTimeout(() => {
        this.gridsterItem.renderer.removeClass(this.gridsterItem.el, 'gridster-item-resizing');
        if (this.gridster) {
          this.gridster.movingItem = null;
          this.gridster.previewStyle();
        }
      });
    });
    _defineProperty(this, "cancelResize", () => {
      this.gridsterItem.$item.cols = this.gridsterItem.item.cols || 1;
      this.gridsterItem.$item.rows = this.gridsterItem.item.rows || 1;
      this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
      this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
      this.gridsterItem.setSize();
      this.push.restoreItems();
      this.pushResize.restoreItems();
      this.push.destroy();
      this.push = null;
      this.pushResize.destroy();
      this.pushResize = null;
    });
    _defineProperty(this, "makeResize", () => {
      this.gridsterItem.setSize();
      this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
      this.push.setPushedItems();
      this.pushResize.setPushedItems();
      this.push.destroy();
      this.push = null;
      this.pushResize.destroy();
      this.pushResize = null;
    });
    _defineProperty(this, "handleNorth", e => {
      this.top = e.clientY + this.offsetTop - this.diffTop;
      this.height = this.bottom - this.top;
      if (this.minHeight > this.height) {
        this.height = this.minHeight;
        this.top = this.bottom - this.minHeight;
      } else if (this.gridster.options.enableBoundaryControl) {
        this.top = Math.max(0, this.top);
        this.height = this.bottom - this.top;
      }
      const marginTop = this.gridster.options.pushItems ? this.margin : 0;
      this.newPosition = this.gridster.pixelsToPositionY(this.top + marginTop, Math.floor);
      if (this.gridsterItem.$item.y !== this.newPosition) {
        this.itemBackup[1] = this.gridsterItem.$item.y;
        this.itemBackup[3] = this.gridsterItem.$item.rows;
        this.gridsterItem.$item.rows += this.gridsterItem.$item.y - this.newPosition;
        this.gridsterItem.$item.y = this.newPosition;
        this.pushResize.pushItems(this.pushResize.fromSouth);
        this.push.pushItems(this.push.fromSouth, this.gridster.$options.disablePushOnResize);
        if (this.gridster.checkCollision(this.gridsterItem.$item)) {
          this.gridsterItem.$item.y = this.itemBackup[1];
          this.gridsterItem.$item.rows = this.itemBackup[3];
          this.top = this.gridster.positionYToPixels(this.gridsterItem.$item.y);
          this.setItemTop(this.gridster.positionYToPixels(this.gridsterItem.$item.y));
          this.setItemHeight(this.gridster.positionYToPixels(this.gridsterItem.$item.rows) - this.margin);
          return;
        } else {
          this.gridster.previewStyle();
        }
        this.pushResize.checkPushBack();
        this.push.checkPushBack();
      }
      this.setItemTop(this.top);
      this.setItemHeight(this.height);
    });
    _defineProperty(this, "handleWest", e => {
      const clientX = this.gridster.$options.dirType === DirTypes.RTL ? this.originalClientX + (this.originalClientX - e.clientX) : e.clientX;
      this.left = clientX + this.offsetLeft - this.diffLeft;
      this.width = this.right - this.left;
      if (this.minWidth > this.width) {
        this.width = this.minWidth;
        this.left = this.right - this.minWidth;
      } else if (this.gridster.options.enableBoundaryControl) {
        this.left = Math.max(0, this.left);
        this.width = this.right - this.left;
      }
      const marginLeft = this.gridster.options.pushItems ? this.margin : 0;
      this.newPosition = this.gridster.pixelsToPositionX(this.left + marginLeft, Math.floor);
      if (this.gridsterItem.$item.x !== this.newPosition) {
        this.itemBackup[0] = this.gridsterItem.$item.x;
        this.itemBackup[2] = this.gridsterItem.$item.cols;
        this.gridsterItem.$item.cols += this.gridsterItem.$item.x - this.newPosition;
        this.gridsterItem.$item.x = this.newPosition;
        this.pushResize.pushItems(this.pushResize.fromEast);
        this.push.pushItems(this.push.fromEast, this.gridster.$options.disablePushOnResize);
        if (this.gridster.checkCollision(this.gridsterItem.$item)) {
          this.gridsterItem.$item.x = this.itemBackup[0];
          this.gridsterItem.$item.cols = this.itemBackup[2];
          this.left = this.gridster.positionXToPixels(this.gridsterItem.$item.x);
          this.setItemLeft(this.gridster.positionXToPixels(this.gridsterItem.$item.x));
          this.setItemWidth(this.gridster.positionXToPixels(this.gridsterItem.$item.cols) - this.margin);
          return;
        } else {
          this.gridster.previewStyle();
        }
        this.pushResize.checkPushBack();
        this.push.checkPushBack();
      }
      this.setItemLeft(this.left);
      this.setItemWidth(this.width);
    });
    _defineProperty(this, "handleSouth", e => {
      this.height = e.clientY + this.offsetTop - this.diffBottom - this.top;
      if (this.minHeight > this.height) {
        this.height = this.minHeight;
      }
      this.bottom = this.top + this.height;
      if (this.gridster.options.enableBoundaryControl) {
        const margin = this.outerMarginBottom ?? this.margin;
        const box = this.gridster.el.getBoundingClientRect();
        this.bottom = Math.min(this.bottom, box.bottom - box.top - 2 * margin);
        this.height = this.bottom - this.top;
      }
      const marginBottom = this.gridster.options.pushItems ? 0 : this.margin;
      this.newPosition = this.gridster.pixelsToPositionY(this.bottom + marginBottom, Math.ceil);
      if (this.gridsterItem.$item.y + this.gridsterItem.$item.rows !== this.newPosition) {
        this.itemBackup[3] = this.gridsterItem.$item.rows;
        this.gridsterItem.$item.rows = this.newPosition - this.gridsterItem.$item.y;
        this.pushResize.pushItems(this.pushResize.fromNorth);
        this.push.pushItems(this.push.fromNorth, this.gridster.$options.disablePushOnResize);
        if (this.gridster.checkCollision(this.gridsterItem.$item)) {
          this.gridsterItem.$item.rows = this.itemBackup[3];
          this.setItemHeight(this.gridster.positionYToPixels(this.gridsterItem.$item.rows) - this.margin);
          return;
        } else {
          this.gridster.previewStyle();
        }
        this.pushResize.checkPushBack();
        this.push.checkPushBack();
      }
      this.setItemHeight(this.height);
    });
    _defineProperty(this, "handleEast", e => {
      const clientX = this.gridster.$options.dirType === DirTypes.RTL ? this.originalClientX + (this.originalClientX - e.clientX) : e.clientX;
      this.width = clientX + this.offsetLeft - this.diffRight - this.left;
      if (this.minWidth > this.width) {
        this.width = this.minWidth;
      }
      this.right = this.left + this.width;
      if (this.gridster.options.enableBoundaryControl) {
        const margin = this.outerMarginRight ?? this.margin;
        const box = this.gridster.el.getBoundingClientRect();
        this.right = Math.min(this.right, box.right - box.left - 2 * margin);
        this.width = this.right - this.left;
      }
      const marginRight = this.gridster.options.pushItems ? 0 : this.margin;
      this.newPosition = this.gridster.pixelsToPositionX(this.right + marginRight, Math.ceil);
      if (this.gridsterItem.$item.x + this.gridsterItem.$item.cols !== this.newPosition) {
        this.itemBackup[2] = this.gridsterItem.$item.cols;
        this.gridsterItem.$item.cols = this.newPosition - this.gridsterItem.$item.x;
        this.pushResize.pushItems(this.pushResize.fromWest);
        this.push.pushItems(this.push.fromWest, this.gridster.$options.disablePushOnResize);
        if (this.gridster.checkCollision(this.gridsterItem.$item)) {
          this.gridsterItem.$item.cols = this.itemBackup[2];
          this.setItemWidth(this.gridster.positionXToPixels(this.gridsterItem.$item.cols) - this.margin);
          return;
        } else {
          this.gridster.previewStyle();
        }
        this.pushResize.checkPushBack();
        this.push.checkPushBack();
      }
      this.setItemWidth(this.width);
    });
    _defineProperty(this, "handleNorthWest", e => {
      this.handleNorth(e);
      this.handleWest(e);
    });
    _defineProperty(this, "handleNorthEast", e => {
      this.handleNorth(e);
      this.handleEast(e);
    });
    _defineProperty(this, "handleSouthWest", e => {
      this.handleSouth(e);
      this.handleWest(e);
    });
    _defineProperty(this, "handleSouthEast", e => {
      this.handleSouth(e);
      this.handleEast(e);
    });
    this.zone = zone;
    this.gridsterItem = gridsterItem;
    this.gridster = gridster;
    this.lastMouse = {
      clientX: 0,
      clientY: 0
    };
    this.itemBackup = [0, 0, 0, 0];
    this.resizeEventScrollType = {
      west: false,
      east: false,
      north: false,
      south: false
    };
  }
  destroy() {
    this.gridster?.previewStyle();
    this.gridster = this.gridsterItem = null;
  }
  dragStart(e) {
    if (e.which && e.which !== 1) {
      return;
    }
    if (this.gridster.options.resizable && this.gridster.options.resizable.start) {
      this.gridster.options.resizable.start(this.gridsterItem.item, this.gridsterItem, e);
    }
    e.stopPropagation();
    e.preventDefault();
    this.zone.runOutsideAngular(() => {
      this.mousemove = this.gridsterItem.renderer.listen('document', 'mousemove', this.dragMove);
      this.touchmove = this.gridster.renderer.listen(this.gridster.el, 'touchmove', this.dragMove);
    });
    this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStop);
    this.mouseleave = this.gridsterItem.renderer.listen('document', 'mouseleave', this.dragStop);
    this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStop);
    this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStop);
    this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStop);
    this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-resizing');
    this.lastMouse.clientX = e.clientX;
    this.lastMouse.clientY = e.clientY;
    this.left = this.gridsterItem.left;
    this.top = this.gridsterItem.top;
    this.originalClientX = e.clientX;
    this.originalClientY = e.clientY;
    this.width = this.gridsterItem.width;
    this.height = this.gridsterItem.height;
    this.bottom = this.gridsterItem.top + this.gridsterItem.height;
    this.right = this.gridsterItem.left + this.gridsterItem.width;
    this.margin = this.gridster.$options.margin;
    this.outerMarginTop = this.gridster.$options.outerMarginTop;
    this.outerMarginRight = this.gridster.$options.outerMarginRight;
    this.outerMarginBottom = this.gridster.$options.outerMarginBottom;
    this.outerMarginLeft = this.gridster.$options.outerMarginLeft;
    this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
    this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
    this.diffLeft = e.clientX + this.offsetLeft - this.left;
    this.diffRight = e.clientX + this.offsetLeft - this.right;
    this.diffTop = e.clientY + this.offsetTop - this.top;
    this.diffBottom = e.clientY + this.offsetTop - this.bottom;
    this.minHeight = this.gridster.positionYToPixels(this.gridsterItem.$item.minItemRows || this.gridster.$options.minItemRows) - this.margin;
    this.minWidth = this.gridster.positionXToPixels(this.gridsterItem.$item.minItemCols || this.gridster.$options.minItemCols) - this.margin;
    this.gridster.movingItem = this.gridsterItem.$item;
    this.gridster.previewStyle();
    this.push = new GridsterPush(this.gridsterItem);
    this.pushResize = new GridsterPushResize(this.gridsterItem);
    this.gridster.dragInProgress = true;
    this.gridster.updateGrid();
    const {
      classList
    } = e.target;
    if (classList.contains('handle-n')) {
      this.resizeEventScrollType.north = true;
      this.directionFunction = this.handleNorth;
    } else if (classList.contains('handle-w')) {
      if (this.gridster.$options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleEast;
      } else {
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleWest;
      }
    } else if (classList.contains('handle-s')) {
      this.resizeEventScrollType.south = true;
      this.directionFunction = this.handleSouth;
    } else if (classList.contains('handle-e')) {
      if (this.gridster.$options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleWest;
      } else {
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleEast;
      }
    } else if (classList.contains('handle-nw')) {
      if (this.gridster.$options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.north = true;
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleNorthEast;
      } else {
        this.resizeEventScrollType.north = true;
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleNorthWest;
      }
    } else if (classList.contains('handle-ne')) {
      if (this.gridster.$options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.north = true;
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleNorthWest;
      } else {
        this.resizeEventScrollType.north = true;
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleNorthEast;
      }
    } else if (classList.contains('handle-sw')) {
      if (this.gridster.$options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.south = true;
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleSouthEast;
      } else {
        this.resizeEventScrollType.south = true;
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleSouthWest;
      }
    } else if (classList.contains('handle-se')) {
      if (this.gridster.$options.dirType === DirTypes.RTL) {
        this.resizeEventScrollType.south = true;
        this.resizeEventScrollType.west = true;
        this.directionFunction = this.handleSouthWest;
      } else {
        this.resizeEventScrollType.south = true;
        this.resizeEventScrollType.east = true;
        this.directionFunction = this.handleSouthEast;
      }
    }
  }
  toggle() {
    this.resizeEnabled = this.gridsterItem.canBeResized();
    this.resizableHandles = this.gridsterItem.getResizableHandles();
  }
  dragStartDelay(e) {
    GridsterUtils.checkTouchEvent(e);
    if (!this.gridster.$options.resizable.delayStart) {
      this.dragStart(e);
      return;
    }
    const timeout = setTimeout(() => {
      this.dragStart(e);
      cancelDrag();
    }, this.gridster.$options.resizable.delayStart);
    const {
      cancelMouse,
      cancelMouseLeave,
      cancelOnBlur,
      cancelTouchMove,
      cancelTouchEnd,
      cancelTouchCancel
    } = this.zone.runOutsideAngular(() => {
      // Note: all of these events are being added within the `<root>` zone since they all
      // don't do any view updates and don't require Angular running change detection.
      // All event listeners call `cancelDrag` once the event is dispatched, the `cancelDrag`
      // is responsible only for removing event listeners.
      const cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
      const cancelMouseLeave = this.gridsterItem.renderer.listen('document', 'mouseleave', cancelDrag);
      const cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
      const cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
      const cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
      const cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
      return {
        cancelMouse,
        cancelMouseLeave,
        cancelOnBlur,
        cancelTouchMove,
        cancelTouchEnd,
        cancelTouchCancel
      };
    });
    function cancelMove(eventMove) {
      GridsterUtils.checkTouchEvent(eventMove);
      if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
        cancelDrag();
      }
    }
    function cancelDrag() {
      clearTimeout(timeout);
      cancelOnBlur();
      cancelMouse();
      cancelMouseLeave();
      cancelTouchMove();
      cancelTouchEnd();
      cancelTouchCancel();
    }
  }
  setItemTop(top) {
    this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, this.left, top);
  }
  setItemLeft(left) {
    this.gridster.gridRenderer.setCellPosition(this.gridsterItem.renderer, this.gridsterItem.el, left, this.top);
  }
  setItemHeight(height) {
    this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'height', height + 'px');
  }
  setItemWidth(width) {
    this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'width', width + 'px');
  }
}
;// CONCATENATED MODULE: ./src/grid/gridItem.component.ts




class GridsterItemComponent {
  constructor(gridster, el, zone) {
    _defineProperty(this, "item", void 0);
    _defineProperty(this, "$item", void 0);
    _defineProperty(this, "top", void 0);
    _defineProperty(this, "left", void 0);
    _defineProperty(this, "width", void 0);
    _defineProperty(this, "height", void 0);
    _defineProperty(this, "drag", void 0);
    _defineProperty(this, "resize", void 0);
    _defineProperty(this, "notPlaced", void 0);
    _defineProperty(this, "el", void 0);
    _defineProperty(this, "gridster", void 0);
    _defineProperty(this, "renderer", void 0);
    _defineProperty(this, "zone", void 0);
    _defineProperty(this, "init", void 0);
    this.el = el;
    this.$item = {
      cols: -1,
      rows: -1,
      x: -1,
      y: -1
    };
    this.zone = zone;
    this.gridster = gridster;
    this.drag = new GridsterDraggable(this, gridster, this.zone);
    this.resize = new GridsterResizable(this, gridster, this.zone);
    this.renderer = gridster.renderer;
  }
  updateOptions() {
    this.$item = GridsterUtils.merge(this.$item, this.item, {
      cols: undefined,
      rows: undefined,
      x: undefined,
      y: undefined,
      layerIndex: undefined,
      dragEnabled: undefined,
      resizeEnabled: undefined,
      compactEnabled: undefined,
      maxItemRows: undefined,
      minItemRows: undefined,
      maxItemCols: undefined,
      minItemCols: undefined,
      maxItemArea: undefined,
      minItemArea: undefined,
      resizableHandles: {
        s: undefined,
        e: undefined,
        n: undefined,
        w: undefined,
        se: undefined,
        ne: undefined,
        sw: undefined,
        nw: undefined
      }
    });
  }
  setSize() {
    this.renderer.setStyle(this.el, 'display', this.notPlaced ? '' : 'block');
    this.gridster.gridRenderer.updateItem(this.el, this.$item, this.renderer);
    this.updateItemSize();
  }
  updateItemSize() {
    const top = this.$item.y * this.gridster.curRowHeight;
    const left = this.$item.x * this.gridster.curColWidth;
    const width = this.$item.cols * this.gridster.curColWidth - this.gridster.$options.margin;
    const height = this.$item.rows * this.gridster.curRowHeight - this.gridster.$options.margin;
    this.top = top;
    this.left = left;
    if (!this.init && width > 0 && height > 0) {
      this.init = true;
      if (this.item.initCallback) {
        this.item.initCallback(this.item, this);
      }
      if (this.gridster.options.itemInitCallback) {
        this.gridster.options.itemInitCallback(this.item, this);
      }
      //   this.itemInit.next({ item: this.item, itemComponent: this });
      if (this.gridster.$options.scrollToNewItems) {
        this.el.scrollIntoView(false);
      }
    }
    if (width !== this.width || height !== this.height) {
      this.width = width;
      this.height = height;
      if (this.gridster.options.itemResizeCallback) {
        this.gridster.options.itemResizeCallback(this.item, this);
      }
      //   this.itemResize.next({ item: this.item, itemComponent: this });
    }
  }
  itemChanged() {
    if (this.gridster.options.itemChangeCallback) {
      this.gridster.options.itemChangeCallback(this.item, this);
    }
    // this.itemChange.next({ item: this.item, itemComponent: this });
  }
  checkItemChanges(newValue, oldValue) {
    if (newValue.rows === oldValue.rows && newValue.cols === oldValue.cols && newValue.x === oldValue.x && newValue.y === oldValue.y) {
      return;
    }
    if (this.gridster.checkCollision(this.$item)) {
      this.$item.x = oldValue.x || 0;
      this.$item.y = oldValue.y || 0;
      this.$item.cols = oldValue.cols || 1;
      this.$item.rows = oldValue.rows || 1;
      this.setSize();
    } else {
      this.item.cols = this.$item.cols;
      this.item.rows = this.$item.rows;
      this.item.x = this.$item.x;
      this.item.y = this.$item.y;
      this.gridster.calculateLayout$.next();
      this.itemChanged();
    }
  }
  canBeDragged() {
    const gridDragEnabled = this.gridster.$options.draggable.enabled;
    const itemDragEnabled = this.$item.dragEnabled === undefined ? gridDragEnabled : this.$item.dragEnabled;
    return !this.gridster.mobile && gridDragEnabled && itemDragEnabled;
  }
  canBeResized() {
    const gridResizable = this.gridster.$options.resizable.enabled;
    const itemResizable = this.$item.resizeEnabled === undefined ? gridResizable : this.$item.resizeEnabled;
    return !this.gridster.mobile && gridResizable && itemResizable;
  }
  getResizableHandles() {
    const gridResizableHandles = this.gridster.$options.resizable.handles;
    const itemResizableHandles = this.$item.resizableHandles;
    // use grid settings if no settings are provided for the item.
    if (itemResizableHandles === undefined) {
      return gridResizableHandles;
    }
    // else merge the settings
    return {
      ...gridResizableHandles,
      ...itemResizableHandles
    };
  }
  bringToFront(offset) {
    if (offset && offset <= 0) {
      return;
    }
    const layerIndex = this.getLayerIndex();
    const topIndex = this.gridster.$options.maxLayerIndex;
    if (layerIndex < topIndex) {
      const targetIndex = offset ? layerIndex + offset : topIndex;
      this.item.layerIndex = this.$item.layerIndex = targetIndex > topIndex ? topIndex : targetIndex;
    }
  }
  sendToBack(offset) {
    if (offset && offset <= 0) {
      return;
    }
    const layerIndex = this.getLayerIndex();
    if (layerIndex > 0) {
      const targetIndex = offset ? layerIndex - offset : 0;
      this.item.layerIndex = this.$item.layerIndex = targetIndex < 0 ? 0 : targetIndex;
    }
  }
  getLayerIndex() {
    if (this.item.layerIndex !== undefined) {
      return this.item.layerIndex;
    }
    if (this.gridster.$options.defaultLayerIndex !== undefined) {
      return this.gridster.$options.defaultLayerIndex;
    }
    return 0;
  }
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/grid-item.vue?vue&type=script&lang=ts


/* harmony default export */ var grid_itemvue_type_script_lang_ts = ({
  props: {
    gridster: {
      type: Object,
      require: true
    },
    item: {
      type: Object
    },
    event: {
      type: Object
    }
  },
  setup(props) {
    const root = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const comp = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      component: new GridsterItemComponent(props.gridster, root.value, props.gridster.zone),
      sub: null
    });
    comp.component.item = Object.assign({}, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(props.item));
    comp.component.updateOptions();
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      comp.component.el = root.value;
      props.gridster?.addItem(comp.component);
      comp.sub = props.event?.subscribe(() => {
        comp.component.item = Object.assign({}, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(props.item));
        comp.component.updateOptions();
        comp.component.setSize();
      });
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(comp.component.item, (n, p) => {
      if (n) {
        comp.component.updateOptions();
        if (!comp.component.init) {
          props.item.cols = comp.component.$item.cols;
          props.item.rows = comp.component.$item.rows;
          props.item.x = comp.component.$item.x;
          props.item.y = comp.component.$item.y;
          comp.component.gridster.calculateLayout$.next();
        }
      }
      if (n && p) {
        comp.component.setSize();
      }
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      comp.sub?.unsubscribe();
      comp.sub = null;
      comp.component.gridster.removeItem(comp.component);
      comp.component.drag.destroy();
      comp.component.resize.destroy();
      comp.component.gridster = comp.component.drag = comp.component.resize = null;
    });
    const zIndexComputed = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => comp.component.getLayerIndex() + comp.component.gridster.$options.baseLayerIndex);
    return {
      root,
      zIndexComputed,
      comp
    };
  }
});
;// CONCATENATED MODULE: ./src/grid/grid-item.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/grid/grid-item.vue?vue&type=style&index=0&id=9f9b075c&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/grid/grid-item.vue?vue&type=style&index=0&id=9f9b075c&lang=css

;// CONCATENATED MODULE: ./src/grid/grid-item.vue




;


const grid_item_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(grid_itemvue_type_script_lang_ts, [['render',grid_itemvue_type_template_id_9f9b075c_ts_true_render]])

/* harmony default export */ var grid_item = (grid_item_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WidgetSelector.vue?vue&type=template&id=2c139a84&scoped=true&ts=true

const WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-2c139a84"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_hoisted_1 = {
  class: "wg-toolbar"
};
const _hoisted_2 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h3", {
  class: "wg-toolbar-t"
}, "Pilih Widget", -1));
const _hoisted_3 = {
  class: "wg-toolbar-r"
};
const _hoisted_4 = {
  style: {
    "display": "flex",
    "align-items": "center"
  }
};
const _hoisted_5 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "wg-icon"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "currentColor"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
})])], -1));
const _hoisted_6 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "wg-btn-icon"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  fill: "currentColor",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
})])], -1));
const _hoisted_7 = [_hoisted_6];
const _hoisted_8 = {
  class: "wg-widgets"
};
const _hoisted_9 = {
  class: "wg-tabbar"
};
const _hoisted_10 = {
  class: "wg-tabbar-l"
};
const _hoisted_11 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "wg-tabbar-icon"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"
})])], -1));
const _hoisted_12 = {
  key: 0,
  class: "wg-tabbar-r"
};
const _hoisted_13 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
})], -1));
const _hoisted_14 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "line"
}, null, -1));
const _hoisted_15 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  fill: "currentColor",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
})], -1));
const _hoisted_16 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
})], -1));
const _hoisted_17 = {
  key: 1,
  class: "wg-tabbar-r tab-preview"
};
const _hoisted_18 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
})], -1));
const _hoisted_19 = /*#__PURE__*/WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
  class: "wg-button-wrapper",
  style: {
    "margin-left": "18px",
    "padding": "0 10px",
    "height": "36px"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  style: {
    "display": "block",
    "width": "24px"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M120-120v-240h80v104l124-124 56 56-124 124h104v80H120Zm480 0v-80h104L580-324l56-56 124 124v-104h80v240H600ZM324-580 200-704v104h-80v-240h240v80H256l124 124-56 56Zm312 0-56-56 124-124H600v-80h240v240h-80v-104L636-580Z"
})])])], -1));
function WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TableWidgetList = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("TableWidgetList");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["wg-selector", {
      show: $setup.dataReactive.showSelector
    }])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_hoisted_1, [_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["wg-input-wapper", $setup.dataReactive.classSearchWrapper])
  }, [_hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("form", {
    onSubmit: _cache[3] || (_cache[3] =
    //@ts-ignore
    (...args) => $setup.onSubmit && $setup.onSubmit(...args))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
    class: "input-text",
    type: "text",
    placeholder: "Cari widget",
    onFocus: _cache[0] || (_cache[0] =
    //@ts-ignore
    (...args) => $setup.onFocus && $setup.onFocus(...args)),
    onBlur: _cache[1] || (_cache[1] =
    //@ts-ignore
    (...args) => $setup.onBlur && $setup.onBlur(...args)),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.dataReactive.searchText = $event)
  }, null, 544), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelText, $setup.dataReactive.searchText]])], 32)], 2), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    class: "wg-button-wrapper circle",
    onClick: _cache[4] || (_cache[4] = $event => $setup.dataReactive.showSelector = false)
  }, _hoisted_7)])])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_8, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_TableWidgetList, {
    tableDataModel: $setup.dataReactive.dataTableListWidget,
    onSelectItem: $setup.onItemSelected
  }, null, 8, ["tableDataModel", "onSelectItem"])])], 2), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["wg-tabbar-wrapper", {
      collapse: $setup.dataReactive.showSelector
    }])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_9, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_10, [_hoisted_11, _cache[5] || ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.setBlockTracking)(-1), _cache[5] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("p", {
    style: {
      "margin": "0"
    }
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.layoutName), 1)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.setBlockTracking)(1), _cache[5])]), $setup.dataReactive.onEdit ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_12, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    class: "wg-button-wrapper custom",
    onClick: _cache[6] || (_cache[6] = $event => {
      $setup.dataReactive.showSelector = true;
      $setup.dataReactive.searchText = '';
    })
  }, [_hoisted_13, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Tambah Widget ")]), _hoisted_14, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("ul", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    class: "wg-button-wrapper",
    onClick: _cache[7] || (_cache[7] =
    //@ts-ignore
    (...args) => $setup.onCancelEdit && $setup.onCancelEdit(...args))
  }, [_hoisted_15, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Batal ")])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    class: "wg-button-wrapper custom",
    onClick: _cache[8] || (_cache[8] =
    //@ts-ignore
    (...args) => $setup.onSave && $setup.onSave(...args))
  }, [_hoisted_16, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Simpan ")])])])])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_17, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    class: "wg-button-wrapper custom",
    onClick: _cache[9] || (_cache[9] = $event => $setup.dataReactive.onEdit = true)
  }, [_hoisted_18, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Edit Widget ")]), _hoisted_19]))])], 2), ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Teleport, {
    to: "body"
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, {
    name: "modal"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [$setup.dataReactive.selectedItem > -1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($setup.components[$setup.dataReactive.selectedItem]), {
      onCancel: _cache[10] || (_cache[10] = $event => {
        $setup.dataReactive.selectedItem = -1;
      }),
      class: "modal-mask",
      key: $setup.dataReactive.selectedItem
    }, null, 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]),
    _: 1
  })]))], 64);
}
;// CONCATENATED MODULE: ./src/components/WidgetSelector.vue?vue&type=template&id=2c139a84&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TableListWidget.vue?vue&type=template&id=0fe6326a&scoped=true&ts=true

const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-0fe6326a"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_1 = {
  class: "wg-tb"
};
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_2 = ["onClick"];
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_3 = {
  key: 0,
  class: "wg-tb-title"
};
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_4 = {
  class: "wg-title"
};
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_5 = {
  class: "wg-info"
};
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_6 = {
  class: "wg-info-wrapper"
};
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_7 = {
  class: "wg-tooltip"
};
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_8 = {
  class: "wg-tooltips-wrapper"
};
const TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_9 = /*#__PURE__*/TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "triangle"
}, null, -1));
function TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($setup.dr.data, (itemRow, idxRow) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      class: "wg-tb-row",
      key: idxRow
    }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(itemRow, (item, idxCol) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["wg-tb-col", {
          hidden: item.hidden
        }]),
        key: idxCol,
        onClick: $event => $setup.onSelectItem(item.ID)
      }, [!item.hidden ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.title), 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_7, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_8, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("p", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.description), 1), TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_9])])])])])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 10, TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_hoisted_2);
    }), 128))]);
  }), 128))]);
}
;// CONCATENATED MODULE: ./src/components/TableListWidget.vue?vue&type=template&id=0fe6326a&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TableListWidget.vue?vue&type=script&lang=ts


/* harmony default export */ var TableListWidgetvue_type_script_lang_ts = ({
  props: {
    tableDataModel: {
      type: Object,
      required: true
    }
  },
  setup(props, ctx) {
    let dr = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      data: []
    });
    const hidenItem = {
      avatarUrl: "",
      description: "",
      ID: -1,
      title: "",
      hidden: true
    };
    let countingItems = () => {
      const wz = window.innerWidth;
      let maxCols = 0;
      if (wz >= 420 && wz < 712) {
        maxCols = 2;
      } else if (wz >= 712 && wz < 960) {
        maxCols = 3;
      } else if (wz >= 960) {
        maxCols = 4;
      }
      dr.data = [];
      if (maxCols > 0) {
        let l = 0;
        while (l < props.tableDataModel.data.length) {
          let detail = [];
          for (let i = 0; i < maxCols; i++) {
            if (l < props.tableDataModel.data.length) {
              detail.push(props.tableDataModel.data[l]);
            } else {
              detail.push(hidenItem);
            }
            l++;
          }
          dr.data.push(detail);
        }
      }
    };
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      countingItems();
      window.addEventListener('resize', countingItems);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      window.removeEventListener('resize', countingItems);
    });
    let onSelectItem = id => {
      ctx.emit("selectItem", id);
    };
    return {
      onSelectItem,
      dr
    };
  }
});
;// CONCATENATED MODULE: ./src/components/TableListWidget.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TableListWidget.vue?vue&type=style&index=0&id=0fe6326a&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/TableListWidget.vue?vue&type=style&index=0&id=0fe6326a&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/TableListWidget.vue




;


const TableListWidget_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(TableListWidgetvue_type_script_lang_ts, [['render',TableListWidgetvue_type_template_id_0fe6326a_scoped_true_ts_true_render],['__scopeId',"data-v-0fe6326a"]])

/* harmony default export */ var TableListWidget = (TableListWidget_exports_);
;// CONCATENATED MODULE: ./src/assets/empty.png
var empty_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASuSURBVHgB7ZyLcdNAEIZ/ZSgAKsCpAFNBTAU4FSSpgFABSgWQCqxUkFABogJMBREV4A7E7mnFZDLR6V56nHzfjOMkOsvW77273ds9AYlEIpFIJKYhw0DUO6zoiR+v5TEFB3lU2RUqDEAwAUmwNU7wETU29Oca04nWBQu5p8/3nZ4fQgnqLSAJt6GzfKFfN4iLksS8IyELeOAsoOqiGXaIT7jnsFWeu1rkCRwg8a5JvF+IXzxmTdfyqK7JAWsB6zvqrhm+Yn5jnB90TerarF9mgXqDGjmWTIY8u8CNeXNDyMQvZcxbPs2Y+GDS1EhAmTB+oPHrjoEDifjeZGIxHQNzHI94zGsZ53vptUCxvkccIzU+kBWWuiYmFpjjWMlw0d9EA1kfm/JfHC88Fp6SFR66GvRZ4BbHDfu6Wg36BNzAH/4Wb3g8ocebjJ0hepa/7zB3MpzpD2uoCxWureFKjVv6meu6QAQuUkVf+mnXwU4Bvcc/sjoSLjduvqNVEYNBexK453QYga4Lr+D+hlbiCRzMV5gnnXH/icuLeqgcxIP6hmtcYZ6sug6EF9BjYlBOa40/mB+rrgNDWGAJP4yC+LngtKCqoy/0MWCPiAgu4LERXEDl/vgR1Ur3EBbo7niHef2ohBfQ1xnuCZ3mxhAWeClVCdZIUmeFiBhmEslwD0uU6BEmrIaahde0EHFvOqGospBmQSE6hnRjtpx8J3E619NYYMkzR5uweoVh4aWqe7LGSop6WieZV3regUWu407QDy1gCwv5CQskRSKeJAE9SQJ6skwBORcjSSwu0VBJLXTnZXwYaxIZi4MUBpVP/scz/15yLuzgB421l2WBmlIMLhSi7FprjcFYjoBNIqt3MVblawKKuBQBrRJZImKQBNYyBKzxGZao6vwAIi5BwMK0mvQ5IUSMXcDKdzwTEW/hSNwCNhNHBX9yOPqJYwrIPtpvhHNoC99dRi1S9+KUTh1HwCYy4ELFNfliHB2cw68OZu8ycWhpltusGVrANjK4flrdxIO+KhlzG7/arVmhQ7MZdmGa4XQzpPhjXHtXwex8txJtmLUfgeFiYepiJu6FiHGqNvJAbeY5e+FcP9EUapYYDt3KeKd16gSs4ApZCl3sN5uXyIRQSEq03W/MH7wcoLu+xEpzbFQBOay6hiNikRXGpsnRdOFUpe/yrVdqHS4yxOo3miZV14FOAaVi1K7Y0WPj8sRsNMf2PvtESphiuJw0SzLtPmHtNYURsJk0ckSIzP6r7gbKA+ikT0B2Q/rGQq9JY0pkj0rfLnWtK6YVUMZBfYjTxLfRIftg+kpKij4XyiQSKbRHM7xFZBjvjjIINXsFFO9fZ8Zrl5s1TIXc54bF68vOFSYehc2Wf943pwt32sXNh5EiByssbxBUmcbcRgLKB9haFE6WMjZWwKRiriTC2MCmeL1ZBClMmhoLqM67I1cli6e7OmG5z89KQHX+JYvosEnSWkD1Ps2tn4zuahEJBxHPagWJcRKQkYkleK3J6DSRxqVrDO8s4P/31y2EzplAi7TeArbIktAWTXE5z3xzq31us4IlDH08E4IJ+JwntwAFpqvAH/wWoIlEIpFIJKbiH39cftU3JzrbAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/WgHeroConfig.vue?vue&type=template&id=45ba43e8&scoped=true&ts=true


const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-45ba43e8"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_1 = {
  class: "wgt-config-list"
};
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_2 = /*#__PURE__*/WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h4", {
  class: "title"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Banner Foto "), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  style: {
    "font-size": "16px",
    "font-weight": "400"
  }
}, "(Opsional)")], -1));
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_3 = {
  class: "list-body ava"
};
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_4 = /*#__PURE__*/WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "photo-box"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
  height: "100%",
  src: empty_namespaceObject,
  alt: "empty"
})], -1));
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_5 = {
  class: "photo-options"
};
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_6 = /*#__PURE__*/WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h5", null, "Pilih atau ubah foto", -1));
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_7 = {
  class: "wgt-config-options"
};
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_8 = /*#__PURE__*/WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "Pilih Gambar", -1));
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_9 = /*#__PURE__*/WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "divider"
}, null, -1));
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_10 = /*#__PURE__*/WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "file-name"
}, "Hello World.png", -1));
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_11 = /*#__PURE__*/WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", null, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h4", {
  class: "title"
}, "Judul Banner"), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "list-body"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "wgt-config-options"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "Judul"), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "divider"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
  type: "text",
  placeholder: "Masukkan judul banner"
})])])], -1));
const WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_12 = /*#__PURE__*/WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", null, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h4", {
  class: "title"
}, "Deskripsi Banner"), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "list-body"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "wgt-config-options"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "Deskripsi"), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "divider"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
  type: "text",
  placeholder: "Masukkan deskripsi banner"
})])])], -1));
function WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ImageResizerButton = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("ImageResizerButton");
  const _component_BaseConfig = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("BaseConfig");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_BaseConfig, {
    onCancel: $setup.cancel,
    widgetName: "Hero Banner"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("ul", WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", null, [WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_3, [WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_5, [WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_6, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_7, [WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_8, WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_9, WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_10, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_ImageResizerButton)])])])]), WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_11, WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_hoisted_12])]),
    _: 1
  }, 8, ["onCancel"]);
}
;// CONCATENATED MODULE: ./src/widgets/config/WgHeroConfig.vue?vue&type=template&id=45ba43e8&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/BaseConfigComp.vue?vue&type=template&id=4e79de0f&ts=true

const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_1 = {
  class: "wgt-config"
};
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_2 = {
  style: {
    "position": "relative",
    "width": "100%",
    "height": "100%"
  }
};
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_3 = {
  class: "wgt-config-header"
};
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_4 = {
  class: "wgt-config-l"
};
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_5 = {
  class: "wgt-config-r"
};
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_6 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  style: {
    "display": "block",
    "height": "24px",
    "width": "24px"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  fill: "currentColor",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
})])], -1);
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_7 = [BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_6];
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_8 = {
  class: "wgt-config-body"
};
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_9 = {
  class: "wgt-config-footer"
};
const BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_10 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
  class: "wg-button-wrapper active"
}, " Tambah ", -1);
function BaseConfigCompvue_type_template_id_4e79de0f_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["wgt-config-wrapper", {
      'full-page': $props.fullPage
    }])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_4, [_cache[0] || ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.setBlockTracking)(-1), _cache[0] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h2", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Tambah widget: " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.widgetName), 1)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.setBlockTracking)(1), _cache[0])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    class: "wg-button-wrapper circle",
    onClick: _cache[1] || (_cache[1] =
    //@ts-ignore
    (...args) => $setup.cancel && $setup.cancel(...args))
  }, BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_7)])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_8, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_9, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    class: "wg-button-wrapper",
    onClick: _cache[2] || (_cache[2] =
    //@ts-ignore
    (...args) => $setup.cancel && $setup.cancel(...args))
  }, " Batal "), BaseConfigCompvue_type_template_id_4e79de0f_ts_true_hoisted_10])], 2)])]);
}
;// CONCATENATED MODULE: ./src/widgets/config/BaseConfigComp.vue?vue&type=template&id=4e79de0f&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/BaseConfigComp.vue?vue&type=script&lang=ts
/* harmony default export */ var BaseConfigCompvue_type_script_lang_ts = ({
  setup(props, ctx) {
    const cancel = () => {
      ctx.emit("cancel");
    };
    return {
      cancel
    };
  },
  props: {
    widgetName: {
      type: String,
      default: ""
    },
    fullPage: {
      type: Boolean,
      default: false
    }
  }
});
;// CONCATENATED MODULE: ./src/widgets/config/BaseConfigComp.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/BaseConfigComp.vue?vue&type=style&index=0&id=4e79de0f&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/widgets/config/BaseConfigComp.vue?vue&type=style&index=0&id=4e79de0f&lang=css

;// CONCATENATED MODULE: ./src/widgets/config/BaseConfigComp.vue




;


const BaseConfigComp_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(BaseConfigCompvue_type_script_lang_ts, [['render',BaseConfigCompvue_type_template_id_4e79de0f_ts_true_render]])

/* harmony default export */ var BaseConfigComp = (BaseConfigComp_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ImageResizerButtonComp.vue?vue&type=template&id=0c347e85&ts=true

const ImageResizerButtonCompvue_type_template_id_0c347e85_ts_true_hoisted_1 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("label", {
  for: "chooseFile",
  class: "cfg-mrt-file-label"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"
})])], -1);
function ImageResizerButtonCompvue_type_template_id_0c347e85_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
    type: "file",
    id: "chooseFile",
    name: "media_file",
    onChange: _cache[0] || (_cache[0] =
    //@ts-ignore
    (...args) => $setup.onChange && $setup.onChange(...args)),
    accept: "image/*",
    capture: "camera",
    class: "cfg-mrt-file"
  }, null, 32), ImageResizerButtonCompvue_type_template_id_0c347e85_ts_true_hoisted_1], 64);
}
;// CONCATENATED MODULE: ./src/components/ImageResizerButtonComp.vue?vue&type=template&id=0c347e85&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ImageResizerButtonComp.vue?vue&type=script&lang=ts

/* harmony default export */ var ImageResizerButtonCompvue_type_script_lang_ts = ({
  setup() {
    const result = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const onChange = e => {
      const file = e.target.files && e.target.files.length ? e.target.files[0] : null;
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          if (e.target.result) {
            // create new image
            let img = document.createElement('img');
            img.id = 'image';
            img.src = e.target.result;
            // clean result before
            result.value.innerHTML = '';
            // append new image
            result.value.appendChild(img);
            // show save btn and options
            // init cropper
            // cropper = new Cropper(img);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    return {
      onChange,
      result
    };
  }
});
;// CONCATENATED MODULE: ./src/components/ImageResizerButtonComp.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ImageResizerButtonComp.vue?vue&type=style&index=0&id=0c347e85&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ImageResizerButtonComp.vue?vue&type=style&index=0&id=0c347e85&lang=css

;// CONCATENATED MODULE: ./src/components/ImageResizerButtonComp.vue




;


const ImageResizerButtonComp_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ImageResizerButtonCompvue_type_script_lang_ts, [['render',ImageResizerButtonCompvue_type_template_id_0c347e85_ts_true_render]])

/* harmony default export */ var ImageResizerButtonComp = (ImageResizerButtonComp_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/WgHeroConfig.vue?vue&type=script&lang=ts


/* harmony default export */ var WgHeroConfigvue_type_script_lang_ts = ({
  setup(prop, ctx) {
    const cancel = () => {
      ctx.emit("cancel");
    };
    return {
      cancel
    };
  },
  components: {
    ImageResizerButton: ImageResizerButtonComp,
    BaseConfig: BaseConfigComp
  }
});
;// CONCATENATED MODULE: ./src/widgets/config/WgHeroConfig.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/WgHeroConfig.vue?vue&type=style&index=0&id=45ba43e8&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/widgets/config/WgHeroConfig.vue?vue&type=style&index=0&id=45ba43e8&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/widgets/config/WgHeroConfig.vue




;


const WgHeroConfig_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(WgHeroConfigvue_type_script_lang_ts, [['render',WgHeroConfigvue_type_template_id_45ba43e8_scoped_true_ts_true_render],['__scopeId',"data-v-45ba43e8"]])

/* harmony default export */ var WgHeroConfig = (WgHeroConfig_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/WgMapConfig.vue?vue&type=template&id=102d5090&scoped=true&ts=true

const WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-102d5090"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_hoisted_1 = {
  class: "wgt-config-list"
};
const WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_hoisted_2 = /*#__PURE__*/WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h4", {
  class: "title"
}, "Map Datasource", -1));
const WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_hoisted_3 = {
  class: "wrap-list"
};
function WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DropdownSelectorComp = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("DropdownSelectorComp");
  const _component_SortableComp = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("SortableComp");
  const _component_BaseConfig = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("BaseConfig");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_BaseConfig, {
    onCancel: $setup.cancel,
    widgetName: "Peta Device"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("ul", WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", null, [WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_SortableComp, {
      modelValue: $setup.data.sortParam,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.data.sortParam = $event),
      onDelete: $setup.onDelete
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(({
        param
      }) => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_DropdownSelectorComp, {
        items: $setup.data.dropdownProp,
        onSelectItem: (id, name) => {
          param.itemID = id;
          param.itemName = name;
        },
        dropdownTitle: "Device",
        defaultValue: param.defaultValue
      }, null, 8, ["items", "onSelectItem", "defaultValue"])]),
      _: 1
    }, 8, ["modelValue", "onDelete"])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
      class: "wg-button-wrapper",
      onClick: _cache[1] || (_cache[1] =
      //@ts-ignore
      (...args) => $setup.addDataSource && $setup.addDataSource(...args))
    }, " Tambah datasource ")])])]),
    _: 1
  }, 8, ["onCancel"]);
}
;// CONCATENATED MODULE: ./src/widgets/config/WgMapConfig.vue?vue&type=template&id=102d5090&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SortableComp.vue?vue&type=template&id=1c125a91&scoped=true&ts=true

const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-1c125a91"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_1 = {
  class: "wg-ordered-config-comp"
};
const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_2 = ["data-index"];
const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_3 = {
  class: "order-body"
};
const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_4 = {
  class: "order-control"
};
const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_5 = ["onClick"];
const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_6 = /*#__PURE__*/SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
})], -1));
const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_7 = [SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_6];
const SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_8 = /*#__PURE__*/SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
  class: "wg-button-wrapper ordering"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M120-280v-80h560v80H120Zm0-160v-80h560v80H120Zm0-160v-80h560v80H120Zm680 320q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280Zm0-160q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440Zm0-160q-17 0-28.5-11.5T760-640q0-17 11.5-28.5T800-680q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600Z"
})])], -1));
function SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("ul", SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($setup.data.items, (item, idx) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("li", {
      key: item,
      onDragenter: _cache[2] || (_cache[2] =
      //@ts-ignore
      (...args) => $setup.dragEnter && $setup.dragEnter(...args)),
      onDragleave: _cache[3] || (_cache[3] =
      //@ts-ignore
      (...args) => $setup.dragLeave && $setup.dragLeave(...args)),
      onDragover: _cache[4] || (_cache[4] =
      //@ts-ignore
      (...args) => $setup.dragOver && $setup.dragOver(...args)),
      onDrop: _cache[5] || (_cache[5] =
      //@ts-ignore
      (...args) => $setup.dragDrop && $setup.dragDrop(...args)),
      "data-index": idx
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "dragable",
      draggable: "true",
      onDragstart: _cache[0] || (_cache[0] =
      //@ts-ignore
      (...args) => $setup.dragStart && $setup.dragStart(...args)),
      onMousedown: _cache[1] || (_cache[1] =
      //@ts-ignore
      (...args) => $setup.dragPush && $setup.dragPush(...args))
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default", {
      key: idx,
      param: item
    }, undefined, true)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
      class: "wg-button-wrapper",
      onClick: $event => $setup.onDelete(item)
    }, SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_7, 8, SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_5), SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_8])], 32)], 40, SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_hoisted_2);
  }), 128))]);
}
;// CONCATENATED MODULE: ./src/components/SortableComp.vue?vue&type=template&id=1c125a91&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SortableComp.vue?vue&type=script&lang=ts

/* harmony default export */ var SortableCompvue_type_script_lang_ts = ({
  setup(props, ctx) {
    let index = -1;
    let eventTarget = null;
    let data = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      items: []
    });
    const dragStart = e => {
      const el = e.currentTarget;
      if (el.getElementsByClassName("ordering")[0].contains(eventTarget)) {
        index = parseInt(el.parentElement.getAttribute("data-index"));
      } else {
        e.preventDefault();
      }
    };
    const dragEnter = e => {
      e.currentTarget.getElementsByClassName("order-body")[0].classList.add("over");
    };
    const dragLeave = e => {
      e.currentTarget.getElementsByClassName("order-body")[0].classList.remove("over");
    };
    const dragOver = e => {
      e.preventDefault();
    };
    const dragDrop = e => {
      e.preventDefault();
      console.log("drag drop");
      e.currentTarget.getElementsByClassName("order-body")[0].classList.remove("over");
      swap(index, parseInt(e.currentTarget.getAttribute("data-index")));
    };
    const dragPush = e => {
      eventTarget = e.target;
    };
    const swap = (fromIdx, toIdx) => {
      console.log("data.items ", data.items);
      let temp = data.items[fromIdx];
      data.items[fromIdx] = data.items[toIdx];
      data.items[toIdx] = temp;
      ctx.emit("update:modelValue", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(data.items));
    };
    const onDelete = item => {
      ctx.emit("delete", (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(item));
    };
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      data.items = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(props.modelValue);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(props.modelValue, () => {
      data.items = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(props.modelValue);
    });
    return {
      dragStart,
      dragEnter,
      dragLeave,
      dragOver,
      dragDrop,
      dragPush,
      onDelete,
      data
    };
  },
  props: {
    modelValue: {
      type: Object
    }
  }
});
;// CONCATENATED MODULE: ./src/components/SortableComp.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SortableComp.vue?vue&type=style&index=0&id=1c125a91&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SortableComp.vue?vue&type=style&index=0&id=1c125a91&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/SortableComp.vue




;


const SortableComp_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(SortableCompvue_type_script_lang_ts, [['render',SortableCompvue_type_template_id_1c125a91_scoped_true_ts_true_render],['__scopeId',"data-v-1c125a91"]])

/* harmony default export */ var SortableComp = (SortableComp_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DropdownSelectorComp.vue?vue&type=template&id=0509e810&scoped=true&ts=true

const DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-0509e810"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_1 = {
  class: "wgt-drpc-container"
};
const DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_2 = {
  class: "wgt-drpc-input-wrap"
};
const DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_3 = {
  key: 0,
  for: "wgt-drpc-id",
  class: "wgt-drpc-label"
};
const DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_4 = ["value"];
const DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_5 = /*#__PURE__*/DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "icon-input"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M480-360 280-560h400L480-360Z"
})])], -1));
const DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_6 = {
  class: "wgt-drpc-search-wrap",
  ref: "searchEl"
};
const DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_7 = ["onClick"];
function DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_2, [_ctx.dropdownTitle != '' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("label", DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(_ctx.dropdownTitle), 1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
    type: "text",
    readonly: "",
    id: "wgt-drpc-id",
    class: "wgt-drpc-input",
    placeholder: "Pilih Device",
    value: _ctx.data.selectItem
  }, null, 8, DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_4), DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: "clickable",
    onClick: _cache[0] || (_cache[0] =
    //@ts-ignore
    (...args) => _ctx.onShow && _ctx.onShow(...args)),
    ref: "inputEl"
  }, null, 512)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_6, [_ctx.data.onLoad ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("ul", {
    key: 0,
    class: "wgt-drpc-search",
    onScroll: _cache[1] || (_cache[1] =
    //@ts-ignore
    (...args) => _ctx.onScroll && _ctx.onScroll(...args))
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(_ctx.items.value, (item, idx) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("li", {
      key: idx,
      onClick: $event => _ctx.onClick(item.id)
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item.name), 9, DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_hoisted_7);
  }), 128))], 32)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 512)]);
}
;// CONCATENATED MODULE: ./src/components/DropdownSelectorComp.vue?vue&type=template&id=0509e810&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DropdownSelectorComp.vue?vue&type=script&lang=ts

/* harmony default export */ var DropdownSelectorCompvue_type_script_lang_ts = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  setup(props, {
    emit
  }) {
    const searchEl = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const inputEl = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const data = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      onLoad: false,
      selectItem: ""
    });
    const onScroll = e => {
      if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight) {
        emit("nextBatch");
      }
    };
    const resetLoadState = e => {
      if (!inputEl.value?.contains(e.target)) {
        data.onLoad = false;
      }
    };
    const onShow = e => {
      data.onLoad = !data.onLoad;
    };
    const onClick = id => {
      const df = props.items?.value.filter(v => v.id == id);
      if (df && df?.length > 0) {
        data.selectItem = df[0].name;
      } else {
        data.selectItem = "";
      }
      emit("selectItem", id, data.selectItem);
    };
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      if (props.defaultValue) {
        data.selectItem = props.defaultValue;
      }
      window.addEventListener("click", resetLoadState);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => window.removeEventListener("click", resetLoadState));
    return {
      onScroll,
      onShow,
      onClick,
      data,
      searchEl,
      inputEl
    };
  },
  props: {
    items: {
      type: Object
    },
    defaultValue: {
      type: Object
    },
    dropdownTitle: {
      type: Object,
      default: ""
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/DropdownSelectorComp.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DropdownSelectorComp.vue?vue&type=style&index=0&id=0509e810&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DropdownSelectorComp.vue?vue&type=style&index=0&id=0509e810&lang=css

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DropdownSelectorComp.vue?vue&type=style&index=1&id=0509e810&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DropdownSelectorComp.vue?vue&type=style&index=1&id=0509e810&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/DropdownSelectorComp.vue




;



const DropdownSelectorComp_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(DropdownSelectorCompvue_type_script_lang_ts, [['render',DropdownSelectorCompvue_type_template_id_0509e810_scoped_true_ts_true_render],['__scopeId',"data-v-0509e810"]])

/* harmony default export */ var DropdownSelectorComp = (DropdownSelectorComp_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/WgMapConfig.vue?vue&type=script&lang=ts





/* harmony default export */ var WgMapConfigvue_type_script_lang_ts = ({
  setup(props, ctx) {
    const data = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      sortParam: [{
        itemID: null,
        itemName: "Device Z"
      }],
      dropdownProp: {
        value: [{
          id: 0,
          name: "Device A"
        }, {
          id: 1,
          name: "Device B"
        }, {
          id: 2,
          name: "Device C"
        }]
      }
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(data.sortParam, () => {
      data.sortParam;
    });
    const onDelete = item => {
      console.log("delete ", item);
    };
    const cancel = () => {
      ctx.emit("cancel");
    };
    const addDataSource = () => {
      data.sortParam.push({
        itemID: null,
        itemName: ""
      });
    };
    return {
      data,
      onDelete,
      addDataSource,
      cancel
    };
  },
  components: {
    BaseConfig: BaseConfigComp,
    SortableComp: SortableComp,
    DropdownSelectorComp: DropdownSelectorComp
  }
});
;// CONCATENATED MODULE: ./src/widgets/config/WgMapConfig.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/WgMapConfig.vue?vue&type=style&index=0&id=102d5090&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/widgets/config/WgMapConfig.vue?vue&type=style&index=0&id=102d5090&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/widgets/config/WgMapConfig.vue




;


const WgMapConfig_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(WgMapConfigvue_type_script_lang_ts, [['render',WgMapConfigvue_type_template_id_102d5090_scoped_true_ts_true_render],['__scopeId',"data-v-102d5090"]])

/* harmony default export */ var WgMapConfig = (WgMapConfig_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/WgMapIrrigationConfig.vue?vue&type=template&id=356e6e54&ts=true

function WgMapIrrigationConfigvue_type_template_id_356e6e54_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IrrigationDiagram = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("IrrigationDiagram");
  const _component_BaseConfigComp = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("BaseConfigComp");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_BaseConfigComp, {
    widgetName: "Peta Irigasi",
    fullPage: "true"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_IrrigationDiagram)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/widgets/config/WgMapIrrigationConfig.vue?vue&type=template&id=356e6e54&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IrrigationDiagramDrawerComp.vue?vue&type=template&id=ba5c47ec&ts=true

const IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_1 = {
  style: {
    "width": "100%",
    "height": "100%",
    "background-color": "#fff"
  },
  ref: "containerDiagram"
};
const IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_2 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createStaticVNode)("<div id=\"tip\" style=\"position:fixed;left:50%;top:30%;transform:translate(-50%, -30%);min-width:290px;\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path d=\"M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z\" fill=\"rgb(230,126,34)\"></path></svg>Tip <ul style=\"padding-left:40px;margin-top:16px;\"><li>Geser gambar diagram ke workspace</li><li>Untuk memilih lebih dari satu diagram tekan lama</li></ul></div>", 1);
const IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_3 = {
  id: "diagram",
  tabindex: "0",
  style: {
    "touch-action": "none",
    "background-color": "#fff",
    "display": "block",
    "user-select": "none",
    "-webkit-user-select": "none",
    "-webkit-touch-callout": "none",
    "pointer-events": "none"
  }
};
const IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_4 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("g", {
  id: "canvas"
}, null, -1);
const IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_5 = [IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_4];
function IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ap_menu_shape = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("ap-menu-shape");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_ap_menu_shape, {
    id: "menu-shape"
  }), IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_2, ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_3, IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_hoisted_5))], 512);
}
;// CONCATENATED MODULE: ./src/components/IrrigationDiagramDrawerComp.vue?vue&type=template&id=ba5c47ec&ts=true

;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/util.js

//
// dom utils

/**
 * @template T
 * @param {Element} parent
 * @param {string} key
 * @returns T
 */
const child = (parent, key) => ( /** @type {T} */parent.querySelector(`[data-key="${key}"]`));

/** @param {HTMLElement|SVGElement} crcl, @param {Point} pos */
function positionSet(crcl, pos) {
  crcl.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

/** @param {Element} el, @param {string[]} cl */
const classAdd = (el, ...cl) => el?.classList.add(...cl);

/** @param {Element} el, @param {string} cl */
const classDel = (el, cl) => el?.classList.remove(cl);

/** @param {Element} el, @param {string} cl */
const classHas = (el, cl) => el?.classList.contains(cl);

/** @param {Element} shapeEl, @param {{styles?:string[]}} shapeData, @param {string} classPrefix, @param {string} classToAdd */
function classSingleAdd(shapeEl, shapeData, classPrefix, classToAdd) {
  if (!shapeData.styles) {
    shapeData.styles = [];
  }
  const currentClass = shapeData.styles.findIndex(ss => ss.startsWith(classPrefix));
  if (currentClass > -1) {
    classDel(shapeEl, shapeData.styles[currentClass]);
    shapeData.styles.splice(currentClass, 1);
  }
  shapeData.styles.push(classToAdd);
  classAdd(shapeEl, classToAdd);
}

/** @param {Element | GlobalEventHandlers} el, @param {string} type, @param {EventListenerOrEventListenerObject} listener, @param {boolean?=} once */
const listen = (el, type, listener, once) => el.addEventListener(type, listener, {
  passive: true,
  once
});

/** @param {Element | GlobalEventHandlers} el, @param {string} type, @param {EventListenerOrEventListenerObject} listener, @param {boolean?=} capture */
const listenDel = (el, type, listener, capture) => el?.removeEventListener(type, listener, {
  capture
});

/** @param {ParentNode} el, @param {string} selector, @param {(this: GlobalEventHandlers, ev: PointerEvent & { currentTarget: Element }) => any} handler */
function clickForAll(el, selector, handler) {
  el.querySelectorAll(selector).forEach( /** @param {HTMLElement} el */el => {
    el.onclick = handler;
  });
}

/** @param {PointerEvent & { currentTarget: Element }} evt, @param {string} attr */
const evtTargetAttr = (evt, attr) => evt.currentTarget.getAttribute(attr);

/**
 * @template {keyof SVGElementTagNameMap} T
 * @param {T} qualifiedName
 * @param {string?=} innerHTML
 * @returns {SVGElementTagNameMap[T]}
 */
function svgEl(qualifiedName, innerHTML) {
  const svgGrp = document.createElementNS('http://www.w3.org/2000/svg', qualifiedName);
  if (innerHTML) {
    svgGrp.innerHTML = innerHTML;
  }
  return svgGrp;
}

/**
 * calc farthest point of <tspan>s bbox in {textEl}
 * origin is in the center
 * @param {SVGTextElement} textEl
 */
function svgTxtFarthestPoint(textEl) {
  /** @type {Point} */
  let maxPoint;
  let maxAbsSum = 0;
  for (const span of textEl.getElementsByTagName('tspan')) {
    for (const point of boxPoints(span.getBBox())) {
      const pointAbsSum = Math.abs(point.x) + Math.abs(point.y);
      if (maxAbsSum < pointAbsSum) {
        maxPoint = point;
        maxAbsSum = pointAbsSum;
      }
    }
  }
  return maxPoint;
}

/** @param {DOMRect} box */
const boxPoints = box => [{
  x: box.x,
  y: box.y
}, {
  x: box.right,
  y: box.y
}, {
  x: box.x,
  y: box.bottom
}, {
  x: box.right,
  y: box.bottom
}];

//
// math, arr utils

/**
 * Get the ceiling for a number {val} with a given floor height {step}
 * @param {number} min
 * @param {number} step
 * @param {number} val
 */
function ceil(min, step, val) {
  if (val <= min) {
    return min;
  }
  return min + Math.ceil((val - min) / step) * step;
}

/**
 * @template T
 * @param {Array<T>} arr
 * @param {{(el:T):void}} action
 */
function arrPop(arr, action) {
  let itm = arr.pop();
  while (itm) {
    action(itm);
    itm = arr.pop();
  }
  ;
}

/**
 * @template T
 * @param {Array<T>} arr
 * @param {T} el
 */
function arrDel(arr, el) {
  const index = arr.indexOf(el);
  if (index > -1) {
    arr.splice(index, 1);
  }
}

/** @param {Point} point, @param {Point} shift, @param {number=} coef */
function pointShift(point, shift, coef) {
  const _coef = coef ?? 1;
  point.x += _coef * shift.x;
  point.y += _coef * shift.y;
  return point;
}

//
// object utils

/**
 * @template T
 * @param {T} obj
 * @returns {T}
 */
const deepCopy = obj => JSON.parse(JSON.stringify(obj));

/** @typedef { {x:number, y:number} } Point */
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/move-evt-mobile-fix.js


/** @param {Element} elem */
function moveEvtMobileFix(elem) {
  /** @type {Point} */let pointDown;
  /** @type {number} */
  let prevX;
  /** @type {number} */
  let prevY;

  /** @param {PointerEventFixMovement} evt */
  function move(evt) {
    if (!evt.isPrimary || !evt.isTrusted) {
      return;
    }

    // fix old Android
    if (pointDown && Math.abs(pointDown.x - evt.clientX) < 3 && Math.abs(pointDown.y - evt.clientY) < 3) {
      evt.stopImmediatePropagation();
      return;
    }
    pointDown = null;

    // fix iOS
    if (evt.movementX === undefined) {
      evt[MovementXSmbl] = prevX ? evt.clientX - prevX : 0;
      evt[MovementYSmbl] = prevY ? evt.clientY - prevY : 0;
      prevX = evt.clientX;
      prevY = evt.clientY;
    } else {
      evt[MovementXSmbl] = evt.movementX;
      evt[MovementYSmbl] = evt.movementY;
    }
  }
  elem.addEventListener('pointerdown', /** @param {PointerEvent} evt */evt => {
    pointDown = {
      x: evt.clientX,
      y: evt.clientY
    };
    prevX = null;
    prevY = null;
    elem.addEventListener('pointermove', move, {
      capture: true,
      passive: true
    });
    elem.addEventListener('pointerup', _ => {
      listenDel(elem, 'pointermove', move, true);
    }, {
      capture: true,
      once: true,
      passive: true
    });
  }, {
    capture: true,
    passive: true
  });
}
const MovementXSmbl = Symbol('movementX');
const MovementYSmbl = Symbol('movementY');
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/canvas-smbl.js
const CanvasSmbl = Symbol('Canvas');

/** @typedef { {x:number, y:number} } Point */
/** @typedef {{position:Point, scale:number, cell: number}} CanvasData */
/** @typedef {SVGGElement & { [CanvasSmbl]?: Canvas }} CanvasElement */
/**
@typedef {{
	move?(x:number, y:number, scale:number): void
	data: CanvasData

	// TODO: it is not infrastructure methods -> shouldn't be here
	selectClear?(): void
	shapeMap: Record<number, import("../shapes/shape-type-map").ShapeType>
}} Canvas
*/
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/move-evt-proc.js



/**
 * @param { Element } elemTrackOutdown poitdows in this element will be tracking to fire {onOutdown} callback
 * @param { Element } elem
 * @param { {scale:number} } canvasScale
 * @param { Point } shapePosition
 * @param { {(evt:PointerEvent):void} } onMoveStart
 * @param { {(evt:PointerEvent):void} } onMove
 * @param { {(evt:PointerEvent):void} } onMoveEnd
 * @param { {(evt:PointerEvent):void} } onClick
 * @param { {():void} } onOutdown
 */
function moveEvtProc(elemTrackOutdown, elem, canvasScale, shapePosition, onMoveStart, onMove, onMoveEnd, onClick, onOutdown) {
  let isMoved = false;
  let isInit = false;
  /** @type {Element} */
  let target;

  /** @param {PointerEventFixMovement} evt */
  function move(evt) {
    if (!isInit) {
      return;
    }
    if (!isMoved) {
      onMoveStart(evt);

      // if reset
      if (!isInit) {
        return;
      }
    }
    movementApplay(shapePosition, canvasScale.scale, evt);
    isMoved = true;
    onMove(evt);
  }

  /** @param {PointerEvent} evt */
  function cancel(evt) {
    if (isMoved) {
      onMoveEnd(evt);
    } else {
      onClick(evt);
    }
    reset(true);
  }

  /** @param {PointerEvent & { target:Node}} docEvt */
  function docDown(docEvt) {
    if (!elem.contains(docEvt.target)) {
      reset();
      onOutdown();
    }
  }
  function wheel() {
    reset();
    onOutdown();
  }

  /**
   * @param {ProcEvent} evt
   */
  function init(evt) {
    if (evt[ProcessedSmbl] || !evt.isPrimary) {
      return;
    }
    evt[ProcessedSmbl] = true;
    target = /** @type {Element} */evt.target;
    if (evt.pointerId !== fakePointerId) {
      target.setPointerCapture(evt.pointerId);
    }
    listen(target, 'pointercancel', cancel, true);
    listen(target, 'pointerup', cancel, true);
    listen(target, 'pointermove', move);
    listen(elemTrackOutdown, 'wheel', wheel, true);
    listen(elemTrackOutdown, 'pointerdown', docDown);
    isInit = true;
  }
  listen(elem, 'pointerdown', init);

  /** @param {boolean=} saveOutTrack */
  function reset(saveOutTrack) {
    listenDel(target, 'pointercancel', cancel);
    listenDel(target, 'pointerup', cancel);
    listenDel(target, 'pointermove', move);
    if (!saveOutTrack) {
      listenDel(elemTrackOutdown, 'pointerdown', docDown);
      listenDel(elemTrackOutdown, 'wheel', wheel);
    }
    target = null;
    isMoved = false;
    isInit = false;
  }
  return reset;
}

/** @param {Point} point, @param {number} scale, @param {PointerEventFixMovement} evt */
function movementApplay(point, scale, evt) {
  point.x += evt[MovementXSmbl] / scale;
  point.y += evt[MovementYSmbl] / scale;
}
const fakePointerId = 42; // random number
/** @param {SVGGraphicsElement} shapeOrPathEl */
function shapeSelect(shapeOrPathEl) {
  shapeOrPathEl.ownerSVGElement.focus();
  shapeOrPathEl.dispatchEvent(new PointerEvent('pointerdown', {
    isPrimary: true,
    pointerId: fakePointerId
  }));
  shapeOrPathEl.dispatchEvent(new PointerEvent('pointerup', {
    isPrimary: true
  }));
}
const ProcessedSmbl = Symbol('processed');

/** @typedef {PointerEvent & { [ProcessedSmbl]?: boolean }} ProcEvent */
/** @typedef {import('./move-evt-mobile-fix.js').PointerEventFixMovement} PointerEventFixMovement */
/** @typedef { {x:number, y:number} } Point */
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/move-scale-applay.js




/**
 * Get point in canvas given the scale and position of the canvas
 * @param {{position:{x:number, y:number}, scale:number}} canvasData
 * @param {number} x, @param {number} y
 */
const pointInCanvas = (canvasData, x, y) => {
  return {
    x: (x - canvasData.position.x - canvasData.offsetPosition.x) / canvasData.scale,
    y: (y - canvasData.position.y - canvasData.offsetPosition.y) / canvasData.scale
  };
};

/**
 * @param {Point} point
 * @param {number} cell
 */
function placeToCell(point, cell) {
  const cellSizeHalf = cell / 2;
  function placeToCell(coordinate) {
    const coor = Math.round(coordinate / cell) * cell;
    return coordinate - coor > 0 ? coor + cellSizeHalf : coor - cellSizeHalf;
  }
  point.x = placeToCell(point.x);
  point.y = placeToCell(point.y);
}

/** @param { CanvasElement } canvas */
function moveScaleApplay(canvas) {
  const canvasData = canvas[CanvasSmbl].data;
  const gripUpdate = applayGrid(canvas.ownerSVGElement, canvasData);
  function transform() {
    canvas.style.transform = `matrix(${canvasData.scale}, 0, 0, ${canvasData.scale}, ${canvasData.position.x}, ${canvasData.position.y})`;
    gripUpdate();
  }

  /**
   * @param {number} nextScale
   * @param {Point} originPoint
   */
  function scale(nextScale, originPoint) {
    if (nextScale < 0.25 || nextScale > 4) {
      return;
    }
    const divis = nextScale / canvasData.scale;
    canvasData.scale = nextScale;
    canvasData.position.x = divis * (canvasData.position.x - originPoint.x) + originPoint.x;
    canvasData.position.y = divis * (canvasData.position.y - originPoint.y) + originPoint.y;
    transform();
  }

  // move, scale with fingers
  applayFingers(canvas.ownerSVGElement, canvasData, scale, transform);

  // scale with mouse wheel
  canvas.ownerSVGElement.addEventListener('wheel', /** @param {WheelEvent} evt */evt => {
    evt.preventDefault();
    const delta = evt.deltaY || evt.deltaX;
    const scaleStep = Math.abs(delta) < 50 ? 0.05 // trackpad pitch
    : 0.25; // mouse wheel

    scale(canvasData.scale + (delta < 0 ? scaleStep : -scaleStep), evtPoint(evt));
  });
  canvas[CanvasSmbl].move = function (x, y, scale) {
    canvasData.position.x = x;
    canvasData.position.y = y;
    canvasData.scale = scale;
    transform();
  };
}

/**
 * @param { SVGSVGElement } svg
 * @param { {position:Point, scale:number} } canvasData
 * @param { {(nextScale:number, originPoint:Point):void} } scaleFn
 * @param { {():void} } transformFn
 * @return
 */
function applayFingers(svg, canvasData, scaleFn, transformFn) {
  /** @type { Pointer } */
  let firstPointer;

  /** @type { Pointer} */
  let secondPointer;

  /** @type {number} */
  let distance;

  /** @type {Point} */
  let center;

  /** @param {PointerEvent} evt */
  function cancel(evt) {
    distance = null;
    center = null;
    if (firstPointer?.id === evt.pointerId) {
      firstPointer = null;
    }
    if (secondPointer?.id === evt.pointerId) {
      secondPointer = null;
    }
    if (!firstPointer && !secondPointer) {
      listenDel(svg, 'pointermove', move);
      listenDel(svg, 'pointercancel', cancel);
      listenDel(svg, 'pointerup', cancel);
    }
  }
  ;

  /** @param {PointerEvent} evt */
  function move(evt) {
    if (evt[ProcessedSmbl]) {
      return;
    }
    if (firstPointer && !secondPointer || !firstPointer && secondPointer) {
      // move with one pointer
      canvasData.position.x = evt.clientX + (firstPointer || secondPointer).shift.x;
      canvasData.position.y = evt.clientY + (firstPointer || secondPointer).shift.y;
      transformFn();
      return;
    }
    if (!secondPointer || !firstPointer || secondPointer?.id !== evt.pointerId && firstPointer?.id !== evt.pointerId) {
      return;
    }
    const distanceNew = Math.hypot(firstPointer.pos.x - secondPointer.pos.x, firstPointer.pos.y - secondPointer.pos.y);
    const centerNew = {
      x: (firstPointer.pos.x + secondPointer.pos.x) / 2,
      y: (firstPointer.pos.y + secondPointer.pos.y) / 2
    };

    // not first move
    if (distance) {
      canvasData.position.x = canvasData.position.x + centerNew.x - center.x;
      canvasData.position.y = canvasData.position.y + centerNew.y - center.y;
      scaleFn(canvasData.scale / distance * distanceNew, centerNew);
    }
    distance = distanceNew;
    center = centerNew;
    if (firstPointer.id === evt.pointerId) {
      firstPointer = evtPointer(evt, canvasData);
    }
    if (secondPointer.id === evt.pointerId) {
      secondPointer = evtPointer(evt, canvasData);
    }
  }
  listen(svg, 'pointerdown', /** @param {PointerEvent} evt */evt => {
    if (evt[ProcessedSmbl] || !firstPointer && !evt.isPrimary || firstPointer && secondPointer) {
      return;
    }
    svg.setPointerCapture(evt.pointerId);
    if (!firstPointer) {
      listen(svg, 'pointermove', move);
      listen(svg, 'pointercancel', cancel);
      listen(svg, 'pointerup', cancel);
    }
    if (!firstPointer) {
      firstPointer = evtPointer(evt, canvasData);
      return;
    }
    if (!secondPointer) {
      secondPointer = evtPointer(evt, canvasData);
    }
  });
}

/**
 * @param { SVGSVGElement } svg
 * @param { import('./canvas-smbl.js').CanvasData } canvasData
 */
function applayGrid(svg, canvasData) {
  let curOpacity;
  /** @param {number} opacity */
  function backImg(opacity) {
    if (curOpacity !== opacity) {
      curOpacity = opacity;
      svg.style.backgroundImage = `radial-gradient(rgb(73 80 87 / ${opacity}) 1px, transparent 0)`;
    }
  }
  backImg(0.7);
  svg.style.backgroundSize = `${canvasData.cell}px ${canvasData.cell}px`;
  return function () {
    const size = canvasData.cell * canvasData.scale;
    if (canvasData.scale < 0.5) {
      backImg(0);
    } else if (canvasData.scale <= 0.9) {
      backImg(0.3);
    } else {
      backImg(0.7);
    }
    svg.style.backgroundSize = `${size}px ${size}px`;
    svg.style.backgroundPosition = `${canvasData.position.x}px ${canvasData.position.y}px`;
  };
}

/**
 * @param {PointerEvent | MouseEvent} evt
 * @return {Point}
 */
function evtPoint(evt) {
  return {
    x: evt.clientX,
    y: evt.clientY
  };
}

/**
 * @param { PointerEvent } evt
 * @param { {position:Point, scale:number} } canvasData
 * @return { Pointer }
 */
function evtPointer(evt, canvasData) {
  return {
    id: evt.pointerId,
    pos: evtPoint(evt),
    shift: {
      x: canvasData.position.x - evt.clientX,
      y: canvasData.position.y - evt.clientY
    }
  };
}

/** @typedef { {x:number, y:number} } Point */
/** @typedef { {id:number, pos:Point, shift:Point} } Pointer */
/** @typedef { import("./move-evt-proc").ProcEvent } DgrmEvent */
/** @typedef { import('./canvas-smbl.js').CanvasData } CanvasData */
/** @typedef { import('./canvas-smbl.js').CanvasElement } CanvasElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/evt-route-applay.js
/** @param {Element} elem */
function evtRouteApplay(elem) {
  elem.addEventListener('pointerdown', /** @param {RouteEvent} evt */evt => {
    if (!evt.isPrimary || evt[RouteedSmbl] || !evt.isTrusted) {
      return;
    }
    evt.stopImmediatePropagation();
    const newEvt = new PointerEvent('pointerdown', evt);
    newEvt[RouteedSmbl] = true;
    activeElemFromPoint(evt).dispatchEvent(newEvt);
  }, {
    capture: true,
    passive: true
  });
}

/** @param { {clientX:number, clientY:number} } evt */
function activeElemFromPoint(evt) {
  return elemFromPointByPrioity(evt).find(el => !el.hasAttribute('data-evt-no'));
}

/** @param { {clientX:number, clientY:number} } evt */
function priorityElemFromPoint(evt) {
  return elemFromPointByPrioity(evt)[0];
}

/** @param { {clientX:number, clientY:number} } evt */
function elemFromPointByPrioity(evt) {
  return document.elementsFromPoint(evt.clientX, evt.clientY).sort((a, b) => {
    const ai = a.getAttribute('data-evt-index');
    const bi = b.getAttribute('data-evt-index');
    return ai === bi ? 0 : ai > bi ? -1 : 1;
  });
}
const RouteedSmbl = Symbol('routeed');
/** @typedef {PointerEvent & { [RouteedSmbl]?: boolean }} RouteEvent */
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/path-smbl.js
const PathSmbl = Symbol('path');
/** @typedef {SVGGraphicsElement & { [PathSmbl]?: import("./path").Path }} PathElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/shape-smbl.js
const ShapeSmbl = Symbol('shape');

/** @typedef {SVGGraphicsElement & { [ShapeSmbl]?: import('./shape-evt-proc').Shape }} ShapeElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/assets.js
const delSvg = '<svg data-cmd="del" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" fill="rgb(52,71,103)"/></svg>';
const copySvg = '<svg data-cmd="copy" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" fill="rgb(52,71,103)"/></svg>';
;// CONCATENATED MODULE: ./src/mixin/irrigation/diagram/group-settings.js


class GroupSettings extends HTMLElement {
  /** @param {(cms:string)=>void} cmdHandler */
  constructor(cmdHandler) {
    super();
    /** @private */
    this._cmdHandler = cmdHandler;
  }
  connectedCallback() {
    const shadow = this.attachShadow({
      mode: 'closed'
    });
    shadow.innerHTML = `
		<style>
			.ln { display: flex; }
			.ln > * {
				height: 24px;
				padding: 10px;
			}
			[data-cmd] { cursor: pointer; }
		</style>
		<div class="ln">
			${copySvg}
			${delSvg}
		</div>`;
    clickForAll(shadow, '[data-cmd]', evt => this._cmdHandler(evtTargetAttr(evt, 'data-cmd')));
  }
}
customElements.define('ap-grp-settings', GroupSettings);
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/modal-create.js
/** @type {HTMLDivElement} */
let editModalDiv;
/** @param {number} bottomX, @param {number} bottomY, @param {HTMLElement} elem */
function modalCreate(bottomX, bottomY, elem) {
  editModalDiv = document.createElement('div');
  editModalDiv.style.cssText = 'position: fixed; box-shadow: 0px 0px 58px 2px rgb(34 60 80 / 20%); border-radius: 16px; background-color: rgba(255,255,255, .9);z-index:100;';
  editModalDiv.append(elem);
  document.body.append(editModalDiv);
  function position(btmX, btmY) {
    editModalDiv.style.left = `${btmX}px`;
    editModalDiv.style.top = `${window.scrollY + btmY - editModalDiv.getBoundingClientRect().height}px`; // window.scrollY fix IPhone keyboard
  }
  position(bottomX, bottomY);
  return {
    /**
     * @param {number} bottomX positon of the bottom left corner of the panel
     * @param {number} bottomY positon of the bottom left corner of the panel
     */
    position,
    del: () => {
      editModalDiv.remove();
      editModalDiv = null;
    }
  };
}

/** @param {number} dif */
function modalChangeTop(dif) {
  editModalDiv.style.top = `${editModalDiv.getBoundingClientRect().top + dif}px`;
}
;// CONCATENATED MODULE: ./src/mixin/irrigation/diagram/group-move.js




/** @param {CanvasElement} canvas, @param {DiagramSerialized} data */
function groupMoveToCenter(canvas, data) {
  const screenCenter = pointInCanvas(canvas[CanvasSmbl].data, window.innerWidth / 2, window.innerHeight / 2);
  placeToCell(screenCenter, canvas[CanvasSmbl].data.cell);
  const shift = pointShift(screenCenter, centerCalc(data), -1);
  iteratePoints(data, point => {
    if (point) {
      pointShift(point, shift);
    }
  });
}

/** @param {DiagramSerialized} data */
function centerCalc(data) {
  const minMax = maxAndMinPoint(data);
  return {
    x: minMax.min.x + (minMax.max.x - minMax.min.x) / 2,
    y: minMax.min.y + (minMax.max.y - minMax.min.y) / 2
  };
}

/** @param {DiagramSerialized} data */
function maxAndMinPoint(data) {
  /** @type {Point} */
  const min = {
    x: Infinity,
    y: Infinity
  };

  /** @type {Point} */
  const max = {
    x: -Infinity,
    y: -Infinity
  };
  iteratePoints(data, point => {
    if (!point) {
      return;
    }
    if (min.x > point.x) {
      min.x = point.x;
    }
    if (min.y > point.y) {
      min.y = point.y;
    }
    if (max.x < point.x) {
      max.x = point.x;
    }
    if (max.y < point.y) {
      max.y = point.y;
    }
  });
  return {
    min,
    max
  };
}

/** @param {DiagramSerialized} data, @param {(point:Point)=>void} callbackfn */
function iteratePoints(data, callbackfn) {
  data.s.forEach(shapeOrPath => {
    if (shapeOrPath.type === 0) {
      // path
      callbackfn( /** @type {PathSerialized} */shapeOrPath.s.p?.position);
      callbackfn( /** @type {PathSerialized} */shapeOrPath.e.p?.position);
    } else {
      // shape
      callbackfn( /** @type {ShapeData} */shapeOrPath.position);
    }
  });
}

/** @typedef { {x:number, y:number} } Point */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
/** @typedef { import('./dgrm-serialization.js').DiagramSerialized } DiagramSerialized */
/** @typedef { import('./dgrm-serialization.js').PathSerialized } PathSerialized */
/** @typedef { import('../shapes/shape-evt-proc.js').ShapeData } ShapeData */
;// CONCATENATED MODULE: ./src/mixin/irrigation/diagram/canvas-clear.js




/** @param {CanvasElement} canvas */
function canvasClear(canvas) {
  while (canvas.firstChild) {
    (canvas.firstChild[ShapeSmbl] || canvas.firstChild[PathSmbl]).del();
  }
  canvas[CanvasSmbl].move(0, 0, 1);
}

//
// selection clear function

/** @param {CanvasElement} canvas */
function canvasSelectionClear(canvas) {
  if (canvas[CanvasSmbl].selectClear) {
    canvas[CanvasSmbl].selectClear();
  }
  ;
}

/** @param {CanvasElement} canvas, @param {()=>void} clearFn */
function canvasSelectionClearSet(canvas, clearFn) {
  canvas[CanvasSmbl].selectClear = clearFn;
}

/** @typedef { import('../infrastructure/move-scale-applay.js').CanvasElement } CanvasElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/diagram/dgrm-serialization.js





const v = '1.1';

/** @param {Element} canvas */
const serialize = canvas => serializeShapes( /** @type {Array<ShapeElement & PathElement>} */[...canvas.children]);

/** @param {Array<ShapeElement & PathElement>} shapes */
function serializeShapes(shapes) {
  /** @type {DiagramSerialized} */
  const diagramSerialized = {
    v,
    s: []
  };
  for (const shape of shapes) {
    if (shape[ShapeSmbl]) {
      // shape
      diagramSerialized.s.push(shape[ShapeSmbl].data);
    } else {
      // path

      /** @param {PathEnd} pathEnd */
      function pathSerialize(pathEnd) {
        const shapeIndex = shapes.indexOf(pathEnd.shape?.shapeEl);
        return shapeIndex !== -1 ? {
          s: shapeIndex,
          k: pathEnd.shape.connectorKey
        } : {
          p: pathEnd.data
        };
      }
      const pathData = shape[PathSmbl].data;
      const pathJson = {
        type: 0,
        s: pathSerialize(pathData.s),
        e: pathSerialize(pathData.e)
      };
      if (pathData.styles) {
        pathJson.c = pathData.styles;
      }
      diagramSerialized.s.push(pathJson);
    }
  }
  return diagramSerialized;
}

/**
 * @param {CanvasElement} canvas
 * @param {DiagramSerialized} data
 * @param {Boolean=} dontClear
 */
function deserialize(canvas, data, dontClear) {
  if (data.v !== v) {
    alert('Wrong format');
    return null;
  }
  if (!dontClear) {
    canvasClear(canvas);
  }

  /** @type {Map<ShapeData, ShapeElement>} */
  const shapeDataToElem = new Map();

  /** @param {ShapeData} shapeData */
  function shapeEnsure(shapeData) {
    let shapeEl = shapeDataToElem.get(shapeData);
    if (!shapeEl) {
      shapeEl = canvas[CanvasSmbl].shapeMap[shapeData.type].create(shapeData);
      canvas.append(shapeEl);
      shapeDataToElem.set(shapeData, shapeEl);
    }
    return shapeEl;
  }

  /** @param {number?} index */
  const shapeByIndex = index => shapeEnsure( /** @type {ShapeData} */data.s[index]);

  /** @type {PathElement[]} */
  const paths = [];
  for (const shape of data.s) {
    switch (shape.type) {
      // path
      case 0:
        {
          /** @param {PathEndSerialized} pathEnd */
          const pathDeserialize = pathEnd => pathEnd.p ? {
            data: pathEnd.p
          } : {
            shape: {
              shapeEl: shapeByIndex(pathEnd.s),
              connectorKey: pathEnd.k
            }
          };
          const path = canvas[CanvasSmbl].shapeMap[0].create({
            styles: /** @type {PathSerialized} */shape.c,
            s: pathDeserialize( /** @type {PathSerialized} */shape.s),
            e: pathDeserialize( /** @type {PathSerialized} */shape.e)
          });
          paths.push(path);
          canvas.append(path);
          break;
        }
      default:
        shapeEnsure( /** @type {ShapeData} */shape);
        break;
    }
  }
  return [...shapeDataToElem.values(), ...paths];
}

/** @typedef {{v:string, s: Array<ShapeData | PathSerialized>}} DiagramSerialized */

/** @typedef { import("../shapes/shape-smbl").ShapeElement } ShapeElement */
/** @typedef { import('../shapes/shape-evt-proc').ShapeData } ShapeData */

/** @typedef { import("../shapes/path-smbl").PathElement } PathElement */
/** @typedef { import('../shapes/path').PathEndData } PathEndData */
/** @typedef { import('../shapes/path').PathEnd } PathEnd */
/** @typedef { import('../shapes/path').PathData } PathData */

/** @typedef { {s?:number, k?:string, p?:PathEndData} } PathEndSerialized */
/** @typedef { {type:number, c?:string, s:PathEndSerialized, e:PathEndSerialized} } PathSerialized */

/** @typedef { import('../shapes/shape-evt-proc').CanvasData } CanvasData */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/ui/ui.js
/** @type {HTMLDivElement} */let overlay;
/** @param {boolean} isDisable */
function uiDisable(isDisable) {
  if (isDisable && !overlay) {
    overlay = document.createElement('div');
    overlay.style.cssText = 'z-index: 2; position: fixed; left: 0; top: 0; width:100%; height:100%; background: #fff; opacity: 0';
    overlay.innerHTML = `<style>
		@keyframes blnk {
			0% { opacity: 0; }
			50% { opacity: 0.7; }
			100% {opacity: 0;}
		}
		.blnk { animation: blnk 1.6s linear infinite; }
		</style>`;
    overlay.classList.add('blnk');
    document.body.append(overlay);
  } else if (!isDisable) {
    overlay.remove();
    overlay = null;
  }
}

/** @param {boolean} show */
function tipShow(show) {
  document.getElementById('diagram').style.pointerEvents = show ? 'none' : 'unset';
  document.getElementById('tip').style.display = show ? 'unset' : 'none';
}
;// CONCATENATED MODULE: ./src/mixin/irrigation/diagram/group-select-applay.js














//
// copy past

const clipboardDataKey = 'dgrm';

/** @param {() => Array<ShapeElement & PathElement>} shapesToClipboardGetter */
function listenCopy(shapesToClipboardGetter) {
  /** @param {ClipboardEvent & {target:HTMLElement | SVGElement}} evt */
  function onCopy(evt) {
    const shapes = shapesToClipboardGetter();
    if (document.activeElement === shapes[0].ownerSVGElement) {
      evt.preventDefault();
      evt.clipboardData.setData(clipboardDataKey, JSON.stringify(copyDataCreate(shapes)));
    }
  }
  document.addEventListener('copy', onCopy);

  // dispose fn
  return function () {
    listenDel(document, 'copy', onCopy);
  };
}

/** @param {CanvasElement} canvas */
function copyPastApplay(canvas) {
  listen(document, 'paste', /** @param {ClipboardEvent & {target:HTMLElement | SVGElement}} evt */evt => {
    if (evt.target.tagName.toUpperCase() === 'TEXTAREA') {
      return;
    }
    // if (document.activeElement !== canvas.ownerSVGElement) { return; }

    const dataStr = evt.clipboardData.getData(clipboardDataKey);
    if (!dataStr) {
      return;
    }
    tipShow(false);
    canvasSelectionClear(canvas);
    past(canvas, JSON.parse(dataStr));
  });
}

/** @param {CanvasElement} canvas, @param {Array<ShapeElement & PathElement>} shapes */
const copyAndPast = (canvas, shapes) => past(canvas, copyDataCreate(shapes));

/** @param {Array<ShapeElement & PathElement>} shapes */
const copyDataCreate = shapes => deepCopy(serializeShapes(shapes));

/** @param {CanvasElement} canvas, @param {DiagramSerialized} data */
function past(canvas, data) {
  canvasSelectionClear(canvas);
  groupMoveToCenter(canvas, data);
  groupSelect(canvas, deserialize(canvas, data, true));
}

//
// group select

const highlightSClass = 'highlight-s';
const highlightEClass = 'highlight-e';
const highlightClass = 'highlight';

/** wait long press and draw selected rectangle
 * @param {CanvasElement} canvas
 */
function groupSelectApplay(canvas) {
  const svg = canvas.ownerSVGElement;
  let timer;
  /** @type {Point} */
  let selectStart;
  /** @type {SVGCircleElement} */
  let startCircle;
  /** @type {SVGRectElement} */
  let selectRect;
  /** @type {Point} */
  let selectRectPos;

  /** @param {PointerEvent} evt */
  function onMove(evt) {
    if (evt[ProcessedSmbl] || !selectRect) {
      reset();
      return;
    }
    evt[ProcessedSmbl] = true;
    if (startCircle) {
      startCircle.remove();
      startCircle = null;
    }

    // draw rect
    const x = evt.clientX - canvas[CanvasSmbl].data.offsetPosition.x - selectStart.x;
    const y = evt.clientY - canvas[CanvasSmbl].data.offsetPosition.y - selectStart.y;
    selectRect.width.baseVal.value = Math.abs(x);
    selectRect.height.baseVal.value = Math.abs(y);
    if (x < 0) {
      selectRectPos.x = evt.clientX - canvas[CanvasSmbl].data.offsetPosition.x;
    }
    if (y < 0) {
      selectRectPos.y = evt.clientY - canvas[CanvasSmbl].data.offsetPosition.y;
    }
    selectRect.style.transform = `translate(${selectRectPos.x}px, ${selectRectPos.y}px)`;
  }
  function onUp() {
    if (selectRect) {
      /** @param {Point} point */
      const inRect = point => pointInRect(pointInCanvas(canvas[CanvasSmbl].data, selectRectPos.x, selectRectPos.y), selectRect.width.baseVal.value / canvas[CanvasSmbl].data.scale, selectRect.height.baseVal.value / canvas[CanvasSmbl].data.scale, point.x, point.y);

      // select shapes in rect
      groupSelect(canvas, /** @type {Iterable<ShapeOrPathElement>} */canvas.children, inRect);
    }
    reset();
  }
  function reset() {
    clearTimeout(timer);
    timer = null;
    startCircle?.remove();
    startCircle = null;
    selectRect?.remove();
    selectRect = null;
    listenDel(svg, 'pointermove', onMove);
    listenDel(svg, 'wheel', reset);
    listenDel(svg, 'pointerup', onUp);
  }
  listen(svg, 'pointerdown', /** @param {PointerEvent} evt */evt => {
    if (evt[ProcessedSmbl] || !evt.isPrimary) {
      reset();
      return;
    }
    listen(svg, 'pointermove', onMove);
    listen(svg, 'wheel', reset, true);
    listen(svg, 'pointerup', onUp, true);
    timer = setTimeout(_ => {
      canvasSelectionClear(canvas);
      startCircle = svgEl('circle');
      classAdd(startCircle, 'ative-elem');
      startCircle.style.cssText = 'r:10px; fill: rgb(108 187 247 / 51%)';
      positionSet(startCircle, {
        x: evt.clientX - canvas[CanvasSmbl].data.offsetPosition.x,
        y: evt.clientY - canvas[CanvasSmbl].data.offsetPosition.y
      });
      svg.append(startCircle);
      selectStart = {
        x: evt.clientX - canvas[CanvasSmbl].data.offsetPosition.x,
        y: evt.clientY - canvas[CanvasSmbl].data.offsetPosition.y
      };
      selectRectPos = {
        x: evt.clientX - canvas[CanvasSmbl].data.offsetPosition.x,
        y: evt.clientY - canvas[CanvasSmbl].data.offsetPosition.y
      };
      selectRect = svgEl('rect');
      selectRect.style.cssText = 'rx:10px; fill: rgb(108 187 247 / 51%)';
      positionSet(selectRect, selectRectPos);
      svg.append(selectRect);
    }, 500);
  });
}

/**
 * Highlight selected shapes and procces group operations (move, del, copy)
 * @param {CanvasElement} canvas
 * @param {Iterable<ShapeOrPathElement>} elems
 * @param {{(position:Point):boolean}=} inRect
 */
function groupSelect(canvas, elems, inRect) {
  /** @param {{position:Point}} data */
  const shapeInRect = data => inRect ? inRect(data.position) : true;

  /** @type {Selected} */
  const selected = {
    shapes: [],
    shapesPaths: [],
    pathEnds: [],
    pathEndsPaths: []
  };

  /**
   * @param {ShapeOrPathElement} pathEl,  @param {PathEnd} pathEnd, @param {string} highlightClass
   * @returns {1|2|0}
   */
  function pathEndInRect(pathEl, pathEnd, highlightClass) {
    if (!pathEnd.shape && shapeInRect(pathEnd.data)) {
      selected.pathEnds.push(pathEnd);
      classAdd(pathEl, highlightClass);
      return 1; // connect to end in rect
    } else if (pathEnd.shape && shapeInRect(pathEnd.shape.shapeEl[ShapeSmbl].data)) {
      return 2; // connect to shape in rect
    }
    return 0; // not in rect
  }
  for (const shapeEl of elems) {
    if (shapeEl[ShapeSmbl]) {
      if (shapeInRect(shapeEl[ShapeSmbl].data)) {
        classAdd(shapeEl, highlightClass);
        selected.shapes.push(shapeEl);
      }
    } else if (shapeEl[PathSmbl]) {
      const isStartIn = pathEndInRect(shapeEl, shapeEl[PathSmbl].data.s, highlightSClass);
      const isEndIn = pathEndInRect(shapeEl, shapeEl[PathSmbl].data.e, highlightEClass);
      if (isStartIn === 1 || isEndIn === 1) {
        selected.pathEndsPaths.push(shapeEl);
      }
      if (isStartIn === 2 || isEndIn === 2) {
        selected.shapesPaths.push(shapeEl);
      }
    }
  }
  groupEvtProc(canvas, selected);
}

/**
 * @param {CanvasElement} canvas
 * @param {Selected} selected
 */
function groupEvtProc(canvas, selected) {
  // only one shape selected
  if (selected.shapes?.length === 1 && !selected.pathEnds?.length) {
    classDel(selected.shapes[0], 'highlight');
    shapeSelect(selected.shapes[0]);
    return;
  }

  // only one pathEnd selected
  if (!selected.shapes?.length && selected.pathEnds?.length === 1) {
    pathUnhighlight(selected.pathEndsPaths[0]);
    return;
  }

  // only one path selected
  if (!selected.shapes?.length && selected.pathEnds?.length === 2 && selected.pathEndsPaths?.length === 1) {
    pathUnhighlight(selected.pathEndsPaths[0]);
    shapeSelect(selected.pathEndsPaths[0]);
    return;
  }
  const svg = canvas.ownerSVGElement;
  let isMove = false;
  let isDownOnSelectedShape = false;

  /** @type {{del():void}} */
  let settingsPnl;
  const pnlDel = () => {
    settingsPnl?.del();
    settingsPnl = null;
  };

  /** @param {PointerEvent & {target:Node}} evt */
  function down(evt) {
    pnlDel();
    isDownOnSelectedShape = selected.shapes?.some(shapeEl => shapeEl.contains(evt.target)) || selected.pathEnds?.some(pathEnd => pathEnd.el.contains(evt.target));

    // down on not selected shape
    if (!isDownOnSelectedShape && evt.target !== svg) {
      dispose();
      return;
    }
    if (isDownOnSelectedShape) {
      evt.stopImmediatePropagation();
    }
    svg.setPointerCapture(evt.pointerId);
    listen(svg, 'pointerup', up, true);
    listen(svg, 'pointermove', move);
  }

  /** @param { {(point:Point):void} } pointMoveFn */
  function drawSelection(pointMoveFn) {
    selected.shapes?.forEach(shapeEl => {
      pointMoveFn(shapeEl[ShapeSmbl].data.position);
      shapeEl[ShapeSmbl].drawPosition();
    });
    selected.pathEnds?.forEach(pathEnd => pointMoveFn(pathEnd.data.position));
    selected.pathEndsPaths?.forEach(path => path[PathSmbl].draw());
  }

  /** @param {PointerEvent} evt */
  function up(evt) {
    if (!isMove) {
      // click on canvas
      if (!isDownOnSelectedShape) {
        dispose();
        return;
      }

      // click on selected shape - show settings panel
      settingsPnl = modalCreate(evt.clientX - 10, evt.clientY - 10, new GroupSettings(cmd => {
        switch (cmd) {
          case 'del':
            arrPop(selected.shapes, shapeEl => shapeEl[ShapeSmbl].del());
            arrPop(selected.pathEndsPaths, pathEl => pathEl[PathSmbl].del());
            dispose();
            break;
          case 'copy':
            {
              copyAndPast(canvas, elemsToCopyGet(selected)); // will call dispose
              break;
            }
        }
      }));
    } else {
      // move end
      drawSelection(point => placeToCell(point, canvas[CanvasSmbl].data.cell));
    }
    dispose(true);
  }

  /** @param {PointerEventFixMovement} evt */
  function move(evt) {
    // move canvas
    if (!isDownOnSelectedShape) {
      dispose(true);
      return;
    }

    // move selected shapes
    isMove = true;
    drawSelection(point => movementApplay(point, canvas[CanvasSmbl].data.scale, evt));
  }

  /** @param {boolean=} saveOnDown */
  function dispose(saveOnDown) {
    listenDel(svg, 'pointerup', up);
    listenDel(svg, 'pointermove', move);
    isMove = false;
    isDownOnSelectedShape = false;
    if (!saveOnDown) {
      canvasSelectionClearSet(canvas, null);
      if (listenCopyDispose) {
        listenCopyDispose();
        listenCopyDispose = null;
      }
      listenDel(svg, 'pointerdown', down, true);
      pnlDel();
      arrPop(selected.shapes, shapeEl => classDel(shapeEl, highlightClass));
      arrPop(selected.pathEndsPaths, pathEl => pathUnhighlight(pathEl));
      selected.pathEnds = null;
      selected.shapesPaths = null;
    }
  }
  svg.addEventListener('pointerdown', down, {
    passive: true,
    capture: true
  });
  canvasSelectionClearSet(canvas, dispose);
  let listenCopyDispose = listenCopy(() => elemsToCopyGet(selected));
}

/** @param {Selected} selected */
function elemsToCopyGet(selected) {
  /** @type {Set<PathElement>} */
  const fullSelectedPaths = new Set();

  /** @param {PathEnd} pathEnd */
  const pathEndSelected = pathEnd => selected.shapes.includes(pathEnd.shape?.shapeEl) || selected.pathEnds.includes(pathEnd);

  /** @param {PathElement} pathEl */
  function fullSelectedPathAdd(pathEl) {
    if (pathEndSelected(pathEl[PathSmbl].data.s) && pathEndSelected(pathEl[PathSmbl].data.e)) {
      fullSelectedPaths.add(pathEl);
    }
  }
  selected.shapesPaths?.forEach(fullSelectedPathAdd);
  selected.pathEndsPaths?.forEach(fullSelectedPathAdd);
  return [...selected.shapes, ...fullSelectedPaths];
}

/** @param {PathElement} pathEl`` */
function pathUnhighlight(pathEl) {
  classDel(pathEl, highlightSClass);
  classDel(pathEl, highlightEClass);
}

/**
 * @param {Point} rectPosition
 * @param {number} rectWidth, @param {number} rectHeight
 * @param {number} x, @param {number} y
 */
const pointInRect = (rectPosition, rectWidth, rectHeight, x, y) => rectPosition.x <= x && x <= rectPosition.x + rectWidth && rectPosition.y <= y && y <= rectPosition.y + rectHeight;

/**
 * @typedef { {
 * 	shapes:ShapeElement[]
 * 	shapesPaths:PathElement[]
 * 	pathEnds: PathEnd[]
 *	pathEndsPaths: PathElement[]
 * } } Selected
 */
/** @typedef { {x:number, y:number} } Point */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
/** @typedef { import('../shapes/shape-smbl').ShapeElement } ShapeElement */
/** @typedef { import('../shapes/shape-evt-proc').Shape } Shape */
/** @typedef { import('../shapes/path').Path } Path */
/** @typedef { import('../shapes/path').PathEnd } PathEnd */
/** @typedef { import('../shapes/path-smbl').PathElement } PathElement */
/** @typedef { SVGGraphicsElement & { [ShapeSmbl]?: Shape, [PathSmbl]?:Path }} ShapeOrPathElement */
/** @typedef { import('../infrastructure/move-evt-mobile-fix.js').PointerEventFixMovement} PointerEventFixMovement */
/** @typedef { import('./dgrm-serialization.js').DiagramSerialized } DiagramSerialized */
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/path-settings.js




class PathSettings extends HTMLElement {
  /**
  	 * @param {CanvasElement} canvas
   * @param {PathElement} pathElement
   */
  constructor(canvas, pathElement) {
    super();
    /** @private */
    this._pathElement = pathElement;

    /** @private */
    this._canvas = canvas;
  }
  connectedCallback() {
    const pathStyles = this._pathElement[PathSmbl].data.styles;
    const actStyle = style => this._pathElement[PathSmbl].data.styles?.includes(style) ? 'class="actv"' : '';
    const shadow = this.attachShadow({
      mode: 'closed'
    });
    shadow.innerHTML = `
		<style>
			.ln { display: flex; }
			.ln > * {
				height: 24px;
				padding: 10px;
				fill-opacity: 0.3;
				stroke-opacity: 0.3;
			}
			[data-cmd] { cursor: pointer; }
			.actv { 
				fill-opacity: 1;
				stroke-opacity: 1;
			}
		</style>
		<ap-shape-edit id="edit" edit-btn="true">
			<div class="ln">
				<svg data-cmd data-cmd-arg="arw-s" ${actStyle('arw-s')} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="rgb(52,71,103)"/></svg>
				<svg data-cmd data-cmd-arg="arw-e" ${actStyle('arw-e')} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgb(52,71,103)"/></svg>
				<svg data-cmd data-cmd-arg="dash" ${actStyle('dash')} viewBox="0 0 24 24" width="24" height="24"><path d="M 2,11 L 20,11" stroke="rgb(52,71,103)" style="stroke-dasharray: 4,3; stroke-width: 3;"></path></svg>
			</div>
		</ap-shape-edit>`;

    // colors, del
    listen(shadow.getElementById('edit'), 'cmd', /** @param {CustomEvent<{cmd:string, arg:string}>} evt */evt => {
      switch (evt.detail.cmd) {
        case 'style':
          classSingleAdd(this._pathElement, this._pathElement[PathSmbl].data, 'cl-', evt.detail.arg);
          break;
        case 'del':
          this._pathElement[PathSmbl].del();
          break;
        case 'copy':
          copyAndPast(this._canvas, [this._pathElement]);
          break;
      }
    });

    // arrows, dotted
    clickForAll(shadow, '[data-cmd]', evt => {
      const argStyle = evtTargetAttr(evt, 'data-cmd-arg');
      const currentArr = pathStyles.indexOf(argStyle);
      if (currentArr > -1) {
        classDel(this._pathElement, argStyle);
        pathStyles.splice(currentArr, 1);
        classDel(evt.currentTarget, 'actv');
      } else {
        classAdd(this._pathElement, argStyle);
        pathStyles.push(argStyle);
        classAdd(evt.currentTarget, 'actv');
      }
    });
  }
}
customElements.define('ap-path-settings', PathSettings);

/** @typedef { import('./path-smbl').PathElement } PathElement */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/path.js












/**
 * @param {CanvasElement} canvas
 * @param {PathData} pathData
 */
function path(canvas, pathData) {
  /** @type {PathElement} */
  // <path data-key="path" class="path" d="M0 0" stroke="#495057" stroke-width="1.8" fill="none" style="pointer-events: none;" />
  // <path data-key="selected" d="M0 0" stroke="transparent" stroke-width="10" fill="none" style="pointer-events: none;" />
  const svgGrp = svgEl('g', `
		<path data-key="outer" d="M0 0" stroke="transparent" stroke-width="20" fill="none" />
		<line data-key="path" x1="0" y1="0" x2="0" y2="0" stroke="#495057" stroke-width="1.8" fill="none" style="pointer-events: none;" />
		<line data-key="selected" x1="0" y1="0" x2="0" y2="0" stroke="transparent" stroke-width="10" fill="none" style="pointer-events: none;" />
		<g data-key="start">
			<circle data-evt-index="1" class="path-end" r="10" stroke-width="0" fill="transparent" />
			<path class="path" d="M-7 7 l 7 -7 l -7 -7" stroke="#495057" stroke-width="1.8" fill="none" style="pointer-events: none;"></path>
		</g>
		<g data-key="end">
			<circle data-evt-index="1" class="path-end" r="10" stroke-width="0" fill="transparent" />
			<path class="path" d="M-7 7 l 7 -7 l -7 -7" stroke="#495057" stroke-width="1.8" fill="none" style="pointer-events: none;"></path>
		</g>`);
  classAdd(svgGrp, 'shpath');
  pathData.s.el = child(svgGrp, 'start');
  pathData.e.el = child(svgGrp, 'end');
  pathData.styles = pathData.styles ?? [];
  const paths = childs(svgGrp, 'outer');
  function draw() {
    if (!pathData.s.shape || !pathData.e.shape) {
      const endDir = dirByAngle(pathData.s.data.position, pathData.e.data.position);
      if (!pathData.e.shape) {
        pathData.e.data.dir = endDir;
      }
      if (!pathData.s.shape) {
        pathData.s.data.dir = dirReverse(endDir);
      }
    }

    // path
    const dAttr = pathCalc(pathData);
    paths.forEach(pp => pp.setAttribute('d', dAttr));
    const pp = child(svgGrp, 'path');
    pp.setAttribute("x1", pathData.s.data.position.x);
    pp.setAttribute("y1", pathData.s.data.position.y);
    pp.setAttribute("x2", pathData.e.data.position.x);
    pp.setAttribute("y2", pathData.e.data.position.y);
    const ps = child(svgGrp, 'selected');
    ps.setAttribute("x1", pathData.s.data.position.x);
    ps.setAttribute("y1", pathData.s.data.position.y);
    ps.setAttribute("x2", pathData.e.data.position.x);
    ps.setAttribute("y2", pathData.e.data.position.y);
    let tan = Math.atan2(pathData.e.data.position.y - pathData.s.data.position.y, pathData.e.data.position.x - pathData.s.data.position.x) * 180 / Math.PI;

    // ends
    endDrawAngel(pathData.s, tan);
    endDrawAngel(pathData.e, tan);
  }

  /** @param {PathEnd} pathEnd */
  function pathDelFromShape(pathEnd) {
    shapeObj(pathEnd.shape)?.pathDel(svgGrp);
  }

  /** @param {PathEnd} pathEnd */
  function pathAddToShape(pathEnd) {
    if (pathEnd.shape) {
      pathEnd.data = shapeObj(pathEnd.shape).pathAdd(pathEnd.shape.connectorKey, svgGrp);
    }
  }
  ;

  /** @type { {position:(bottomX:number, bottomY:number)=>void, del:()=>void} } */
  let settingsPnl;
  function del() {
    unSelect();
    reset();
    pathDelFromShape(pathData.s);
    pathDelFromShape(pathData.e);
    svgGrp.remove();
  }

  /**
   * @type {0|1|2}
   * 0 - init, 1 - selected, 2 - edit
  */
  let state = 0;

  /** @type {()=>void} */
  let listenCopyDispose;

  /** @param {PointerEvent} evt */
  function select(evt) {
    // in edit mode
    if (state === 2) {
      return;
    }

    // to edit mode
    if (state === 1) {
      state = 2;
      settingsPnl = modalCreate(evt.clientX - 10, evt.clientY - 10, new PathSettings(canvas, svgGrp));
      return;
    }

    // to select mode
    state = 1;
    classAdd(svgGrp, 'select');
    endSetEvtIndex(pathData.s, 2);
    endSetEvtIndex(pathData.e, 2);
    canvasSelectionClearSet(canvas, unSelect);
    listenCopyDispose = listenCopy(() => [svgGrp]);
  }
  ;

  /** @type { {():void} } */
  let hoverEmulateDispose;
  function unSelect() {
    state = 0;
    classDel(svgGrp, 'select');
    endSetEvtIndex(pathData.s, 1);
    endSetEvtIndex(pathData.e, 1);
    settingsPnl?.del();
    settingsPnl = null;
    if (hoverEmulateDispose) {
      hoverEmulateDispose();
      hoverEmulateDispose = null;
      svgGrp.style.pointerEvents = 'unset';
    }
    canvasSelectionClearSet(canvas, null);
    if (listenCopyDispose) {
      listenCopyDispose();
      listenCopyDispose = null;
    }
  }
  ;

  /** @type {'s'|'e'} */
  let movedEnd;
  const reset = moveEvtProc(canvas.ownerSVGElement, svgGrp, canvas[CanvasSmbl].data,
  // data.end.position,
  {
    get x() {
      return pathData[movedEnd]?.data.position.x;
    },
    set x(val) {
      if (movedEnd) {
        pathData[movedEnd].data.position.x = val;
      }
    },
    get y() {
      return pathData[movedEnd]?.data.position.y;
    },
    set y(val) {
      if (movedEnd) {
        pathData[movedEnd].data.position.y = val;
      }
    }
  },
  // onMoveStart
  /** @param {PointerEvent & { target: Element} } evt */
  evt => {
    unSelect();
    movedEnd = pathData.e.el.contains(evt.target) ? 'e' : pathData.s.el.contains(evt.target) ? 's' : null;

    //
    // move whole path
    if (!movedEnd) {
      return;
    }

    //
    // move path end

    // disconnect from shape
    if (pathData[movedEnd].shape) {
      if (pathData[movedEnd].shape.shapeEl !== pathData[movedEnd === 's' ? 'e' : 's'].shape?.shapeEl) {
        pathDelFromShape(pathData[movedEnd]);
      }
      pathData[movedEnd].shape = null;
      pathData[movedEnd].data = {
        dir: pathData[movedEnd].data.dir,
        position: pointInCanvas(canvas[CanvasSmbl].data, evt.clientX, evt.clientY)
      };
    }

    // hover emulation - start
    svgGrp.style.pointerEvents = 'none';
    hoverEmulateDispose = hoverEmulate(svgGrp.parentElement);
  },
  // onMove
  /** @param {PointerEventFixMovement} evt */
  evt => {
    if (!movedEnd) {
      moveWholePath(canvas[CanvasSmbl].data, pathData, draw, evt);
    } else {
      draw();
    }
  },
  // onMoveEnd
  evt => {
    if (!movedEnd) {
      moveWholePathFinish(canvas[CanvasSmbl].data, pathData, draw);
    } else {
      // connect to shape
      const elemFromPoint = priorityElemFromPoint(evt);
      const connectorKey = elemFromPoint?.getAttribute('data-connect');
      if (connectorKey) {
        // @ts-ignore
        pathData[movedEnd].shape = {
          shapeEl: elemFromPoint.parentElement,
          connectorKey
        };
        pathAddToShape(pathData[movedEnd]);
      } else {
        placeToCell(pathData[movedEnd].data.position, canvas[CanvasSmbl].data.cell);
      }
      draw();
    }

    // hover emulation - end
    unSelect();
  },
  // onClick
  select,
  // onOutdown
  unSelect);
  svgGrp[PathSmbl] = {
    draw,
    /** @param {PointerEventInit} evt */
    pointerCapture: evt => pathData.e.el.dispatchEvent(new PointerEvent('pointerdown', evt)),
    del,
    data: pathData
  };
  if (pathData.styles) {
    classAdd(svgGrp, ...pathData.styles);
  }
  pathAddToShape(pathData.s);
  pathAddToShape(pathData.e);
  draw();
  return svgGrp;
}

/**
 * @param {{scale:number}} canvasData
 * @param {PathData} pathData
 * @param {{():void}} draw
 * @param {PointerEventFixMovement} evt
 */
function moveWholePath(canvasData, pathData, draw, evt) {
  /** @param {Point} point */
  const move = point => movementApplay(point, canvasData.scale, evt);
  moveShapeOrEnd(pathData.s, move);
  moveShapeOrEnd(pathData.e, move);

  // if any shape connected - shape will draw connected path
  if (!pathData.s.shape && !pathData.e.shape) {
    draw();
  }
}

/**
 * @param {{cell:number}} canvasData
 * @param {PathData} pathData
 * @param {{():void}} draw
 */
function moveWholePathFinish(canvasData, pathData, draw) {
  /** @param {Point} point */
  const toCell = point => placeToCell(point, canvasData.cell);
  moveShapeOrEnd(pathData.s, toCell);
  moveShapeOrEnd(pathData.e, toCell);
  if (!pathData.s.shape || !pathData.e.shape) {
    draw();
  }
}

/**
 * applay moveFn to connected shape or to path end point
 * @param {PathEnd} pathEnd, @param {{(point:Point):void}} moveFn */
function moveShapeOrEnd(pathEnd, moveFn) {
  if (pathEnd.shape) {
    moveFn(shapeObj(pathEnd.shape).data.position);
    shapeObj(pathEnd.shape).drawPosition();
  } else {
    moveFn(pathEnd.data.position);
  }
}

/** @param {PathConnectedShape} pathConnectedShape */
const shapeObj = pathConnectedShape => pathConnectedShape?.shapeEl[ShapeSmbl];

/** @param {PathEnd} pathEnd */
function endDraw(pathEnd) {
  pathEnd.el.style.transform = `translate(${pathEnd.data.position.x}px, ${pathEnd.data.position.y}px) rotate(${arrowAngle(pathEnd.data.dir)}deg)`;
}
function endDrawAngel(pathEnd, deg) {
  pathEnd.el.style.transform = `translate(${pathEnd.data.position.x}px, ${pathEnd.data.position.y}px) rotate(${deg}deg)`;
}

/** @param {PathEnd} pathEnd, @param {number} index */
function endSetEvtIndex(pathEnd, index) {
  pathEnd.el.firstElementChild.setAttribute('data-evt-index', index.toString());
}

/** @param {Dir} dir */
const arrowAngle = dir => dir === 'right' ? 180 : dir === 'left' ? 0 : dir === 'bottom' ? 270 : 90;

/** @param {Dir} dir, @return {Dir} */
const dirReverse = dir => dir === 'left' ? 'right' : dir === 'right' ? 'left' : dir === 'top' ? 'bottom' : 'top';

/** @param {Point} s, @param {Point} e, @return {Dir} */
function dirByAngle(s, e) {
  const rad = Math.atan2(e.y - s.y, e.x - s.x);
  return numInRangeIncludeEnds(rad, -0.8, 0.8) ? 'left' : numInRangeIncludeEnds(rad, 0.8, 2.4) ? 'top' : numInRangeIncludeEnds(rad, 2.4, 3.2) || numInRangeIncludeEnds(rad, -3.2, -2.4) ? 'right' : 'bottom';
}

/** @param {PathData} data */
function pathCalc(data) {
  let coef = Math.hypot(data.s.data.position.x - data.e.data.position.x, data.s.data.position.y - data.e.data.position.y) * 0.5;
  coef = coef > 70 ? 70 : coef < 15 ? 15 : coef;

  /** @param {PathEndData} pathEnd */
  function cx(pathEnd) {
    return pathEnd.dir === 'right' || pathEnd.dir === 'left' ? pathEnd.dir === 'right' ? pathEnd.position.x + coef : pathEnd.position.x - coef : pathEnd.position.x;
  }

  /** @param {PathEndData} pathEnd */
  function cy(pathEnd) {
    return pathEnd.dir === 'right' || pathEnd.dir === 'left' ? pathEnd.position.y : pathEnd.dir === 'bottom' ? pathEnd.position.y + coef : pathEnd.position.y - coef;
  }
  return `M ${data.s.data.position.x} ${data.s.data.position.y} C ${cx(data.s.data)} ${cy(data.s.data)}, ` + `${cx(data.e.data)} ${cy(data.e.data)}, ${data.e.data.position.x} ${data.e.data.position.y}`;
}

/** @param {Element} element */
function hoverEmulate(element) {
  /** @type {Element} */
  let elemFromPoint = null;

  /** @param {PointerEvent} evt */
  function move(evt) {
    const elemFromPointNew = priorityElemFromPoint(evt);
    if (elemFromPoint !== elemFromPointNew) {
      if (classHas(elemFromPointNew, 'hovertrack')) {
        classAdd(elemFromPointNew, 'hover');
      }
      let parentHover = false;
      if (classHas(elemFromPointNew?.parentElement, 'hovertrack')) {
        classAdd(elemFromPointNew.parentElement, 'hover');
        parentHover = true;
      }
      classDel(elemFromPoint, 'hover');
      if (elemFromPoint?.parentElement !== elemFromPointNew?.parentElement || !parentHover) {
        classDel(elemFromPoint?.parentElement, 'hover');
      }
      elemFromPoint = elemFromPointNew;
    }
  }
  listen(element, 'pointermove', move);
  // dispose fn
  return function () {
    listenDel(element, 'pointermove', move);
    classDel(elemFromPoint, 'hover');
    classDel(elemFromPoint?.parentElement, 'hover');
    elemFromPoint = null;
  };
}

/** @param {Element} el, @param  {...string} keys */
const childs = (el, ...keys) => keys.map(kk => child(el, kk));

/** @param {number} num, @param {number} a, @param {number} b */
const numInRangeIncludeEnds = (num, a, b) => a <= num && num <= b;

/** @typedef { {x:number, y:number} } Point */
/** @typedef { 'left' | 'right' | 'top' | 'bottom' } Dir */
/** @typedef { {shapeEl: ShapeElement, connectorKey: string} } PathConnectedShape */
/** @typedef { {position: Point, dir: Dir }} PathEndData */
/** @typedef { {shape?:PathConnectedShape, data?:PathEndData, el?:SVGElement} } PathEnd */
/**
@typedef {{
	s: PathEnd,
	e: PathEnd,
	styles?: string[],
}} PathData
*/
/** @typedef { {shape?:PathConnectedShape, data?:PathEndData, oppositeShape?:PathConnectedShape, type:number} } MovedEnd */
/**
@typedef {{
	draw(): void
	pointerCapture: (evt:PointerEventInit)=>void
	del(): void
	data: PathData
}} Path
*/

/** @typedef { import('./path-smbl.js').PathElement } PathElement */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
/** @typedef { import('./shape-smbl').ShapeElement } ShapeElement */
/** @typedef { import('./shape-evt-proc').Shape } Shape */
/** @typedef { import('../infrastructure/move-evt-mobile-fix.js').PointerEventFixMovement } PointerEventFixMovement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/svg-text-draw.js
/**
 * @param {SVGTextElement} textEl target text element
 * @param {number} verticalMiddle
 * @param {string} str
 * @returns {void}
 */
function svgTextDraw(textEl, verticalMiddle, str) {
  const strData = svgStrToTspan(str || '', textEl.x?.baseVal[0]?.value ?? 0);
  textEl.innerHTML = strData.s;
  textEl.y.baseVal[0].newValueSpecifiedUnits(textEl.y.baseVal[0].SVG_LENGTHTYPE_EMS,
  // em
  strData.c > 0 ? verticalMiddle - strData.c / 2 : verticalMiddle);
}

/**
 * create multiline tspan markup
 * @param {string} str
 * @param {number} x
 * @returns { {s:string, c:number} }
 */
function svgStrToTspan(str, x) {
  let c = 0;
  return {
    s: str.split('\n').map((t, i) => {
      c = i;
      return `<tspan x="${x}" dy="${i === 0 ? 0.41 : 1}em" ${t.length === 0 ? 'visibility="hidden"' : ''}>${t.length === 0 ? '.' : escapeHtml(t).replaceAll(' ', '&nbsp;')}</tspan>`;
    }).join(''),
    c
  };
}

/**
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  return str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/svg-text-area.js



/**
 * Create teaxtArea above SVGTextElement 'textEl'
 * update 'textEl' with text from teaxtArea
 * resize teaxtArea - so teaxtArea always cover all 'textEl'
 * @param {SVGTextElement} textEl
 * @param {number} verticalMiddle em
 * @param {string} val
 * @param {{(val:string):void}} onchange
 * @param {{(val:string):void}} onblur
 */
function textareaCreate(textEl, verticalMiddle, val, onchange, onblur) {
  let foreign = svgEl('foreignObject');
  const textarea = document.createElement('textarea');
  const draw = () => foreignWidthSet(textEl, foreign, textarea, textareaPaddingAndBorder, textareaStyle.textAlign);
  textarea.value = val || '';
  textarea.oninput = function () {
    svgTextDraw(textEl, verticalMiddle, textarea.value);
    onchange(textarea.value);
    draw();
  };
  textarea.onblur = function () {
    onblur(textarea.value);
  };
  textarea.onpointerdown = function (evt) {
    evt.stopImmediatePropagation();
  };
  foreign.appendChild(textarea);
  textEl.parentElement.appendChild(foreign);
  const textareaStyle = getComputedStyle(textarea);
  // must be in px
  const textareaPaddingAndBorder = parseInt(textareaStyle.paddingLeft) + parseInt(textareaStyle.borderWidth);
  draw();
  textarea.focus();
  return {
    dispose: () => {
      foreign.remove();
      foreign = null;
    },
    draw
  };
}

/**
 * @param {SVGTextElement} textEl
 * @param {SVGForeignObjectElement} foreign
 * @param {HTMLTextAreaElement} textarea
 * @param {number} textareaPaddingAndBorder
 * @param {string} textAlign
 */
function foreignWidthSet(textEl, foreign, textarea, textareaPaddingAndBorder, textAlign) {
  const textBbox = textEl.getBBox();
  const width = textBbox.width + 20; // +20 paddings for iPhone

  foreign.width.baseVal.value = width + 2 * textareaPaddingAndBorder + 2; // +2 magic number for FireFox
  foreign.x.baseVal.value = textBbox.x - textareaPaddingAndBorder - (textAlign === 'center' ? 10 : textAlign === 'right' ? 20 : 0);
  foreign.height.baseVal.value = textBbox.height + 2 * textareaPaddingAndBorder + 3; // +3 magic number for FireFox
  foreign.y.baseVal.value = textBbox.y - textareaPaddingAndBorder;
  textarea.style.width = `${width}px`;
  textarea.style.height = `${textBbox.height}px`;
}
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/shape-settings.js






/**
 * @param {import('../infrastructure/canvas-smbl').CanvasElement} canvas
 * @param {import('./shape-smbl').ShapeElement} shapeElement
 * @param {number} bottomX positon of the bottom left corner of the panel
 * @param {number} bottomY positon of the bottom left corner of the panel
 */
function settingsPnlCreate(canvas, shapeElement, bottomX, bottomY) {
  const shapeSettings = new ShapeEdit();
  listen(shapeSettings, 'cmd', /** @param {CustomEvent<{cmd:string, arg:string}>} evt */evt => {
    switch (evt.detail.cmd) {
      case 'style':
        classSingleAdd(shapeElement, shapeElement[ShapeSmbl].data, 'cl-', evt.detail.arg);
        break;
      case 'del':
        shapeElement[ShapeSmbl].del();
        break;
      case 'copy':
        copyAndPast(canvas, [shapeElement]);
        break;
    }
  });
  return modalCreate(bottomX, bottomY, shapeSettings);
}
class ShapeEdit extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({
      mode: 'closed'
    });
    shadow.innerHTML = `<style>
			.ln { display: flex; }
			.ln > * {
				height: 24px;
				padding: 10px;
				cursor: pointer;
			}
			#prop { padding-bottom: 10px; }

			.crcl { width: 25px; height: 25px; border-radius: 50%; }
		</style>
		<div id="pnl">
			<div id="clr" style="display: none;">
				<div class="ln">
					<div data-cmd="style" data-cmd-arg="cl-red">
						<div class="crcl" style="background: #E74C3C"></div>
					</div>
					<div data-cmd="style" data-cmd-arg="cl-orange">
						<div class="crcl" style="background: #ff6600"></div>
					</div>
					<div data-cmd="style" data-cmd-arg="cl-green">
						<div class="crcl" style="background: #19bc9b"></div>
					</div>
				</div>
				<div class="ln">
					<div data-cmd="style" data-cmd-arg="cl-blue">
						<div class="crcl" style="background: #1aaee5"></div>
					</div>
					<div data-cmd="style" data-cmd-arg="cl-dblue">
						<div class="crcl" style="background: #1D809F"></div>
					</div>
					<div data-cmd="style" data-cmd-arg="cl-dgray">
						<div class="crcl" style="background: #495057"></div>
					</div>
				</div>
			</div>
			<div id="prop" style="display: none;"><slot id="slot"></slot></div>
		</div>
		<div class="ln">
			<svg data-toggle="clr" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.228 18.732l1.768-1.768 1.767 1.768a2.5 2.5 0 1 1-3.535 0zM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778-2.122-2.121L8.88 1.08zM11 6.03L3.929 13.1 11 20.173l7.071-7.071L11 6.029z" fill="rgb(52,71,103)"/></svg>
			<svg data-toggle="prop"  ${this.getAttribute('edit-btn') ? '' : 'style="display: none;"'} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" fill="rgb(52,71,103)"/></svg>
			${copySvg}
			${delSvg}
		</div>`;

    //
    // tabs

    {
      const pnl = shadow.getElementById('pnl');

      /** @param {1|-1} coef */
      function modalSetTop(coef) {
        modalChangeTop(window.scrollY + coef * pnl.getBoundingClientRect().height); // window.scrollY fix IPhone keyboard
      }

      /** @type {HTMLElement} */
      let currentTab;
      clickForAll(shadow, '[data-toggle]', evt => {
        if (currentTab) {
          modalSetTop(1);
          display(currentTab, false);
        }
        const tab = shadow.getElementById(evtTargetAttr(evt, 'data-toggle'));
        if (currentTab !== tab) {
          display(tab, true);
          modalSetTop(-1);
          currentTab = tab;
        } else {
          currentTab = null;
        }
      });
    }

    //
    // commands

    clickForAll(shadow, '[data-cmd]', evt => {
      this.dispatchEvent(new CustomEvent('cmd', {
        detail: {
          cmd: evtTargetAttr(evt, 'data-cmd'),
          arg: evtTargetAttr(evt, 'data-cmd-arg')
        }
      }));
    });
  }
}
customElements.define('ap-shape-edit', ShapeEdit);

/** @param {ElementCSSInlineStyle} el, @param {boolean} isDisp */
function display(el, isDisp) {
  el.style.display = isDisp ? 'unset' : 'none';
}
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/shape-evt-proc.js













/**
 * provides:
 *  - shape move
 *  - connectors
 *
 *  - text editor
 *  - standard edit panel
 *  - onTextChange callback
 * @param {CanvasElement} canvas
 * @param {string} shapeHtml must have '<text data-key="text">'
 * @param {ShapeData & { title?: string, styles?: string[]}} shapeData
 * @param {ConnectorsData} cons
 * @param {SettingsPnlCreateFn=} settingsPnlCreateFn
 * @param {{(txtEl:SVGTextElement):void}} onTextChange
 */
function shapeCreate(canvas, shapeData, shapeHtml, cons, onTextChange, settingsPnlCreateFn) {
  /** @type {ShapeElement} */
  const el = svgEl('g', `${shapeHtml}
		${Object.entries(cons).map(cc => `<circle data-key="${cc[0]}" data-connect="${cc[1].dir}"	class="hovertrack" data-evt-index="2" r="10" cx="0" cy="0" style="transform: translate(${cc[1].position.x}px, ${cc[1].position.y}px);" />`).join()}`);
  const textSettings = {
    /** @type {SVGTextElement} */
    el: child(el, 'text'),
    /** vericale middle, em */
    vMid: 0
  };
  svgTextDraw(textSettings.el, textSettings.vMid, shapeData.title);
  const shapeProc = shapeEditEvtProc(canvas, el, shapeData, cons, textSettings, settingsPnlCreateFn,
  // onTextChange
  () => onTextChange(textSettings.el));
  return {
    el,
    cons,
    draw: shapeProc.draw
  };
}

/**
 * provides:
 *  - shape move
 *  - connectors
 *  - copy fn
 *
 *  - text editor
 *  - standard edit panel
 *  - onTextChange callback
 * @param {CanvasElement} canvas
 * @param {ShapeElement} svgGrp
 * @param {ShapeData & { title?: string, styles?: string[]}} shapeData
 * @param {ConnectorsData} connectorsInnerPosition
 * @param { {el:SVGTextElement, vMid: number} } textSettings vMid in em
 * @param {{():void}} onTextChange
 * @param {SettingsPnlCreateFn} settingsPnlCreateFn
 */
function shapeEditEvtProc(canvas, svgGrp, shapeData, connectorsInnerPosition, textSettings, settingsPnlCreateFn, onTextChange) {
  /** @type {{dispose():void, draw():void}} */
  let textEditor;

  /** @type { {position:(bottomX:number, bottomY:number)=>void, del:()=>void} } */
  let settingsPnl;
  function unSelect() {
    textEditor?.dispose();
    textEditor = null;
    settingsPnl?.del();
    settingsPnl = null;
  }

  /** @param {string} txt */
  function onTxtChange(txt) {
    shapeData.title = txt;
    onTextChange();
  }
  const settingPnlCreate = settingsPnlCreateFn ?? settingsPnlCreate;
  const shapeProc = shapeEvtProc(canvas, svgGrp, shapeData, connectorsInnerPosition,
  // onEdit
  () => {
    textEditor = textareaCreate(textSettings.el, textSettings.vMid, shapeData.title, onTxtChange, onTxtChange);
    const position = svgGrp.getBoundingClientRect();
    settingsPnl = settingPnlCreate(canvas, svgGrp, position.left + 10, position.top + 10);
  },
  // onUnselect
  unSelect);
  if (shapeData.styles) {
    classAdd(svgGrp, ...shapeData.styles);
  }
  svgGrp[ShapeSmbl].del = function () {
    shapeProc.del();
    svgGrp.remove();
  };
  return {
    draw: () => {
      shapeProc.drawPosition();
      if (settingsPnl) {
        const position = svgGrp.getBoundingClientRect();
        settingsPnl.position(position.left + 10, position.top + 10);
      }
      if (textEditor) {
        textEditor.draw();
      }
    }
  };
}

/**
 * provides:
 *  - shape move
 *  - connectors
 *  - copy fn
 *  - onEdit, onEditStop callbacks
 * @param {CanvasElement} canvas
 * @param {ShapeElement} svgGrp
 * @param {ShapeData} shapeData
 * @param {ConnectorsData} connectorsInnerPosition
 * @param {{():void}} onEdit
 * @param {{():void}} onUnselect
 */
function shapeEvtProc(canvas, svgGrp, shapeData, connectorsInnerPosition, onEdit, onUnselect) {
  classAdd(svgGrp, 'hovertrack');

  /** @type {ConnectorsData} */
  const connectorsData = deepCopy(connectorsInnerPosition);

  /** @type { Set<PathElement> } */
  const paths = new Set();
  function drawPosition() {
    svgGrp.style.transform = `translate(${shapeData.position.x}px, ${shapeData.position.y}px)`;

    // paths
    for (const connectorKey in connectorsInnerPosition) {
      connectorsData[connectorKey].position = {
        x: connectorsInnerPosition[connectorKey].position.x + shapeData.position.x,
        y: connectorsInnerPosition[connectorKey].position.y + shapeData.position.y
      };
    }
    for (const path of paths) {
      path[PathSmbl].draw();
    }
  }
  ;

  /**
   * @type {0|1|2}
   * 0 - init, 1 - selected, 2 - edit
  */
  let state = 0;

  /** @type {()=>void} */
  let listenCopyDispose;
  function unSelect() {
    onUnselect();
    state = 0;
    classDel(svgGrp, 'select');
    classDel(svgGrp, 'highlight');
    canvasSelectionClearSet(canvas, null);
    if (listenCopyDispose) {
      listenCopyDispose();
      listenCopyDispose = null;
    }
  }
  const moveProcReset = moveEvtProc(canvas.ownerSVGElement, svgGrp, canvas[CanvasSmbl].data, shapeData.position,
  // onMoveStart
  /** @param {PointerEvent & { target: Element} } evt */
  evt => {
    unSelect();
    const connectorKey = evt.target.getAttribute('data-connect');
    if (connectorKey) {
      moveProcReset();
      const pathEl = path(canvas, {
        s: {
          shape: {
            shapeEl: svgGrp,
            connectorKey
          }
        },
        e: {
          data: {
            dir: dirReverse(connectorsData[connectorKey].dir),
            position: pointInCanvas(canvas[CanvasSmbl].data, evt.clientX, evt.clientY)
          }
        }
      });
      svgGrp.parentNode.append(pathEl);
      pathEl[PathSmbl].pointerCapture(evt);
      paths.add(pathEl);
    }
  },
  // onMove
  drawPosition,
  // onMoveEnd
  _ => {
    placeToCell(shapeData.position, canvas[CanvasSmbl].data.cell);
    drawPosition();
  },
  // onClick
  _ => {
    // in edit mode
    if (state === 2) {
      return;
    }

    // to edit mode
    if (state === 1) {
      state = 2;
      classDel(svgGrp, 'select');
      classAdd(svgGrp, 'highlight');
      // edit mode
      onEdit();
      return;
    }

    // to select mode
    state = 1;
    classAdd(svgGrp, 'select');
    canvasSelectionClearSet(canvas, unSelect);
    listenCopyDispose = listenCopy(() => [svgGrp]);
  },
  // onOutdown
  unSelect);
  svgGrp[ShapeSmbl] = {
    /**
     * @param {string} connectorKey
     * @param {PathElement} pathEl
     */
    pathAdd: function (connectorKey, pathEl) {
      paths.add(pathEl);
      return connectorsData[connectorKey];
    },
    /** @param {PathElement} pathEl */
    pathDel: function (pathEl) {
      paths.delete(pathEl);
    },
    drawPosition,
    data: shapeData
  };
  return {
    drawPosition,
    del: () => {
      unSelect();
      moveProcReset();
      for (const path of paths) {
        path[PathSmbl].del();
      }
    }
  };
}

/** @typedef { {x:number, y:number} } Point */
/** @typedef { {position:Point, scale:number, cell:number} } CanvasData */

/** @typedef { 'left' | 'right' | 'top' | 'bottom' } PathDir */
/** @typedef { {position: Point, dir: PathDir} } PathEnd */
/** @typedef { Object.<string, PathEnd> } ConnectorsData */

/** @typedef { {type: number, position: Point, styles?:string[]} } ShapeData */
/**
@typedef {{
	pathAdd(connectorKey:string, pathEl:PathElement): PathEnd
	pathDel(pathEl:PathElement): void
	drawPosition: ()=>void
	data: ShapeData
	del?: ()=>void
	draw?: ()=>void
}} Shape
 */

/** @typedef { {(canvas:CanvasElement, shapeElement:ShapeElement, bottomX:number, bottomY:number):{position(btmX:number, btmY:number):void, del():void} } } SettingsPnlCreateFn */

/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
/** @typedef {import('./shape-smbl').ShapeElement} ShapeElement */
/** @typedef {import('./path').Path} Path */
/** @typedef {import('./path-smbl').PathElement} PathElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/circle.js



/**
 * @param {CanvasElement} canvas
 * @param {CircleData} circleData
 */
function circle(canvas, circleData) {
  const defaultRadius = 20;
  const templ = `
		<circle data-key="outer" data-evt-no data-evt-index="2" r="72" fill="transparent" stroke-width="0" />
		<circle data-key="main" r="${defaultRadius}" fill="#ff6600" stroke="#fff" stroke-width="1" />
		<text data-key="text" x="0" y="0" text-anchor="middle" style="pointer-events: none;" fill="#fff">&nbsp;</text>`;
  const shape = shapeCreate(canvas, circleData, templ, {
    right: {
      dir: 'right',
      position: {
        x: defaultRadius,
        y: 0
      }
    },
    left: {
      dir: 'left',
      position: {
        x: -defaultRadius,
        y: 0
      }
    },
    bottom: {
      dir: 'bottom',
      position: {
        x: 0,
        y: defaultRadius
      }
    },
    top: {
      dir: 'top',
      position: {
        x: 0,
        y: -defaultRadius
      }
    }
  },
  // onTextChange
  txtEl => {
    const newRadius = textElRadius(txtEl, defaultRadius, 24);
    if (newRadius !== circleData.r) {
      circleData.r = newRadius;
      resize();
    }
  });
  function resize() {
    shape.cons.right.position.x = circleData.r;
    shape.cons.left.position.x = -circleData.r;
    shape.cons.bottom.position.y = circleData.r;
    shape.cons.top.position.y = -circleData.r;
    for (const connectorKey in shape.cons) {
      positionSet(child(shape.el, connectorKey), shape.cons[connectorKey].position);
    }
    radiusSet(shape.el, 'outer', circleData.r + 24);
    radiusSet(shape.el, 'main', circleData.r);
    shape.draw();
  }
  if (!!circleData.r && circleData.r !== defaultRadius) {
    resize();
  } else {
    shape.draw();
  }
  return shape.el;
}

/** @param {Element} svgGrp, @param {string} key, @param {number} r */
function radiusSet(svgGrp, key, r) {
  /** @type {SVGCircleElement} */child(svgGrp, key).r.baseVal.value = r;
}

/**
 * calc radius that cover all <tspan> in SVGTextElement
 * origin is in the center of the circle
 * @param {SVGTextElement} textEl
 * @param {*} minR
 * @param {*} step
 */
function textElRadius(textEl, minR, step) {
  const farthestPoint = svgTxtFarthestPoint(textEl);
  return ceil(minR, step, Math.sqrt(farthestPoint.x ** 2 + farthestPoint.y ** 2));
}

/** @typedef { {x:number, y:number} } Point */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
/** @typedef { import('./shape-evt-proc').CanvasData } CanvasData */
/** @typedef { import('./shape-evt-proc').ConnectorsData } ConnectorsData */
/** @typedef { {type:number, position: Point, title?: string, styles?: string[], r?:number} } CircleData */
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/rect-txt-settings.js





/**
 * @param {import('../infrastructure/canvas-smbl.js').CanvasElement} canvas
 * @param {import('./shape-smbl').ShapeElement} shapeElement
 * @param {number} bottomX positon of the bottom left corner of the panel
 * @param {number} bottomY positon of the bottom left corner of the panel
 */
const rectTxtSettingsPnlCreate = (canvas, shapeElement, bottomX, bottomY) => modalCreate(bottomX, bottomY, new RectTxtSettings(canvas, shapeElement));
class RectTxtSettings extends HTMLElement {
  /**
  	 * @param {import('../infrastructure/canvas-smbl.js').CanvasElement} canvas
   * @param {import('./shape-smbl').ShapeElement} rectElement
   */
  constructor(canvas, rectElement) {
    super();
    /** @private */
    this._rectElement = rectElement;

    /** @private */
    this._canvas = canvas;
  }
  connectedCallback() {
    const shadow = this.attachShadow({
      mode: 'closed'
    });
    shadow.innerHTML = `
		<style>
			.ln { display: flex; }
			.ln > * {
				height: 24px;
				padding: 10px;
				fill-opacity: 0.3;
				stroke-opacity: 0.3;
			}
			[data-cmd] { cursor: pointer; }

			.ta-1 [data-cmd-arg="1"],
			.ta-2 [data-cmd-arg="2"],
			.ta-3 [data-cmd-arg="3"]
			{ fill-opacity: 1; stroke-opacity: 1; }
		</style>
		<ap-shape-edit id="edit" edit-btn="true">
			<div class="ln">
				<svg data-cmd data-cmd-arg="1" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" fill="rgb(52,71,103)"/></svg>
				<svg data-cmd data-cmd-arg="2" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" fill="rgb(52,71,103)"/></svg>
				<svg data-cmd data-cmd-arg="3" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" fill="rgb(52,71,103)"/></svg>
			</div>
		</ap-shape-edit>`;
    const rectData = /** @type {import('./rect.js').RectData} */this._rectElement[ShapeSmbl].data;
    const editEl = shadow.getElementById('edit');
    classAdd(editEl, `ta-${rectData.a}`);

    // colors, del
    listen(editEl, 'cmd', /** @param {CustomEvent<{cmd:string, arg:string}>} evt */evt => {
      switch (evt.detail.cmd) {
        case 'style':
          classSingleAdd(this._rectElement, rectData, 'cl-', evt.detail.arg);
          break;
        case 'del':
          this._rectElement[ShapeSmbl].del();
          break;
        case 'copy':
          copyAndPast(this._canvas, [this._rectElement]);
          break;
      }
    });

    // text align
    clickForAll(shadow, '[data-cmd]', evt => {
      const alignNew = /** @type {1|2|3} */Number.parseInt(evtTargetAttr(evt, 'data-cmd-arg'));
      if (alignNew === rectData.a) {
        return;
      }
      const alignOld = rectData.a;

      // applay text align to shape
      rectData.a = alignNew;
      this._rectElement[ShapeSmbl].draw();

      // highlight text align btn in settings panel
      classDel(editEl, `ta-${alignOld}`);
      classAdd(editEl, `ta-${rectData.a}`);
    });
  }
}
customElements.define('ap-rect-txt-settings', RectTxtSettings);
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/rect.js






/**
 * @param {CanvasElement} canvas
 * @param {RectData} rectData
 */
function rect(canvas, rectData) {
  rectData.w = rectData.w ?? 96;
  rectData.h = rectData.h ?? 48;
  rectData.a = rectData.a ?? (rectData.t ? 1 : 2);
  const templ = `
		<rect data-key="outer" data-evt-no data-evt-index="2" width="144" height="96" x="-72" y="-48" fill="transparent" stroke="transparent" stroke-width="0" />
		<rect data-key="main" width="96" height="48" x="-48" y="-24" rx="15" ry="15" fill="#1aaee5" stroke="#fff" stroke-width="1" />
		<text data-key="text" y="0" x="${rectTxtXByAlign(rectData)}" style="pointer-events: none;" fill="#fff">&nbsp;</text>`;
  const shape = shapeCreate(canvas, rectData, templ, {
    right: {
      dir: 'right',
      position: {
        x: 48,
        y: 0
      }
    },
    left: {
      dir: 'left',
      position: {
        x: -48,
        y: 0
      }
    },
    bottom: {
      dir: 'bottom',
      position: {
        x: 0,
        y: 24
      }
    },
    top: {
      dir: 'top',
      position: {
        x: 0,
        y: -24
      }
    }
  },
  // onTextChange
  txtEl => {
    const textBox = txtEl.getBBox();
    const newWidth = ceil(96, 48, textBox.width + (rectData.t ? 6 : 0)); // 6 px right padding for text shape
    const newHeight = ceil(48, 48, textBox.height);
    if (rectData.w !== newWidth || rectData.h !== newHeight) {
      rectData.w = newWidth;
      rectData.h = newHeight;
      resize();
    }
  },
  // settingsPnlCreateFn
  rectData.t ? rectTxtSettingsPnlCreate : settingsPnlCreate);
  classAdd(shape.el, rectData.t ? 'shtxt' : 'shrect');
  let currentW = rectData.w;
  let currentTxtAlign = rectData.a;
  /** @param {boolean?=} fixTxtAlign */
  function resize(fixTxtAlign) {
    const mainX = rectData.w / -2;
    const mainY = rectData.h / -2;
    const middleX = 0;
    shape.cons.right.position.x = -mainX;
    shape.cons.left.position.x = mainX;
    shape.cons.bottom.position.y = -mainY;
    shape.cons.bottom.position.x = middleX;
    shape.cons.top.position.y = mainY;
    shape.cons.top.position.x = middleX;
    for (const connectorKey in shape.cons) {
      positionSet(child(shape.el, connectorKey), shape.cons[connectorKey].position);
    }
    rectSet(shape.el, 'main', rectData.w, rectData.h, mainX, mainY);
    rectSet(shape.el, 'outer', rectData.w + 48, rectData.h + 48, mainX - 24, mainY - 24);

    // if text align or width changed
    // fix text align
    if (fixTxtAlign || currentTxtAlign !== rectData.a || currentW !== rectData.w) {
      let txtX;
      let posXDelta;
      switch (rectData.a) {
        // text align left
        case 1:
          txtX = mainX + 8;
          posXDelta = (rectData.w - currentW) / 2;
          break;
        case 2:
          txtX = 0;
          posXDelta = 0;
          break;
        // text align right
        case 3:
          txtX = -mainX - 8;
          posXDelta = (rectData.w - currentW) / -2;
          break;
      }
      const txtEl = child(shape.el, 'text');
      txtEl.x.baseVal[0].value = txtX;
      txtEl.querySelectorAll('tspan').forEach(ss => {
        ss.x.baseVal[0].value = txtX;
      });
      rectData.position.x += posXDelta;
      classDel(shape.el, `ta-${currentTxtAlign}`);
      classAdd(shape.el, `ta-${rectData.a}`);
      currentTxtAlign = rectData.a;
      currentW = rectData.w;
    }
    shape.draw();
  }
  classAdd(shape.el, `ta-${rectData.a}`);
  if (rectData.w !== 96 || rectData.h !== 48) {
    resize(true);
  } else {
    shape.draw();
  }
  shape.el[ShapeSmbl].draw = resize;
  return shape.el;
}

/**
 * @param {Element} svgGrp, @param {string} key,
 * @param {number} w, @param {number} h
 * @param {number} x, @param {number} y
 */
function rectSet(svgGrp, key, w, h, x, y) {
  /** @type {SVGRectElement} */const rect = child(svgGrp, key);
  rect.width.baseVal.value = w;
  rect.height.baseVal.value = h;
  rect.x.baseVal.value = x;
  rect.y.baseVal.value = y;
}

/** @param {RectData} rectData */
const rectTxtXByAlign = rectData => rectData.a === 1 ? -40 // text align keft
: rectData.a === 2 ? 0 // text align middle
: 40; // text align right

/** @typedef { {x:number, y:number} } Point */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
/** @typedef { import('./shape-evt-proc').CanvasData } CanvasData */
/** @typedef { import('./shape-evt-proc').ConnectorsData } ConnectorsData */
/**
@typedef {{
	type:number, position: Point, title?: string, styles?: string[],
	w?:number, h?:number
	t?:boolean,
	a?: 1|2|3
}} RectData */
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/rhomb.js



/**
 * @param {CanvasElement} canvas
 * @param {RhombData} rhombData
 */
function rhomb(canvas, rhombData) {
  const templ = `
		<path data-key="outer" data-evt-no data-evt-index="2" d="M-72 0 L0 -72 L72 0 L0 72 Z" stroke-width="0" fill="transparent" />
		<path data-key="border" d="M-39 0 L0 -39 L39 0 L0 39 Z" stroke-width="20" stroke="#fff"	fill="transparent" stroke-linejoin="round" />
		<path data-key="main" d="M-39 0 L0 -39 L39 0 L0 39 Z" stroke-width="18" stroke-linejoin="round"	stroke="#1D809F" fill="#1D809F" />
		<text data-key="text" x="0" y="0" text-anchor="middle" style="pointer-events: none;" fill="#fff">&nbsp;</text>`;
  const shape = shapeCreate(canvas, rhombData, templ, {
    right: {
      dir: 'right',
      position: {
        x: 48,
        y: 0
      }
    },
    left: {
      dir: 'left',
      position: {
        x: -48,
        y: 0
      }
    },
    bottom: {
      dir: 'bottom',
      position: {
        x: 0,
        y: 48
      }
    },
    top: {
      dir: 'top',
      position: {
        x: 0,
        y: -48
      }
    }
  },
  // onTextChange
  txtEl => {
    const newWidth = ceil(96, 48, textElRhombWidth(txtEl) - 20); // -20 experemental val
    if (newWidth !== rhombData.w) {
      rhombData.w = newWidth;
      resize();
    }
  });
  classAdd(shape.el, 'shrhomb');
  function resize() {
    const connectors = rhombCalc(rhombData.w, 0);
    shape.cons.right.position.x = connectors.r.x;
    shape.cons.left.position.x = connectors.l.x;
    shape.cons.bottom.position.y = connectors.b.y;
    shape.cons.top.position.y = connectors.t.y;
    for (const connectorKey in shape.cons) {
      positionSet(child(shape.el, connectorKey), shape.cons[connectorKey].position);
    }
    const mainRhomb = rhombCalc(rhombData.w, 9);
    rhombSet(shape.el, 'main', mainRhomb);
    rhombSet(shape.el, 'border', mainRhomb);
    rhombSet(shape.el, 'outer', rhombCalc(rhombData.w, -24));
    shape.draw();
  }
  if (!!rhombData.w && rhombData.w !== 96) {
    resize();
  } else {
    shape.draw();
  }
  return shape.el;
}

/**
 * @param {Element} svgGrp, @param {string} key,
 * @param {RhombPoints} rhomb
 */
function rhombSet(svgGrp, key, rhomb) {
  /** @type {SVGPathElement} */child(svgGrp, key).setAttribute('d', `M${rhomb.l.x} ${rhomb.l.y} L${rhomb.t.x} ${rhomb.t.y} L${rhomb.r.x} ${rhomb.r.y} L${rhomb.b.x} ${rhomb.b.y} Z`);
}

/**
 * calc square rhomb points by width
 * origin is in the center of the rhomb
 * @param {number} width, @param {number} margin
 * @returns {RhombPoints}
 */
function rhombCalc(width, margin) {
  const half = width / 2;
  const mrgnMinHalf = margin - half;
  const halfMinMrgn = half - margin;
  return {
    l: {
      x: mrgnMinHalf,
      y: 0
    },
    t: {
      x: 0,
      y: mrgnMinHalf
    },
    r: {
      x: halfMinMrgn,
      y: 0
    },
    b: {
      x: 0,
      y: halfMinMrgn
    }
  };
}

/**
 * calc width of the square rhomb that cover all tspan in {textEl}
 * origin is in the center of the rhomb
 * @param {SVGTextElement} textEl
 */
function textElRhombWidth(textEl) {
  const farthestPoint = svgTxtFarthestPoint(textEl);
  return 2 * (Math.abs(farthestPoint.x) + Math.abs(farthestPoint.y));
}

/** @typedef { {x:number, y:number} } Point */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
/** @typedef { import('./shape-evt-proc').CanvasData } CanvasData */
/** @typedef { import('./shape-evt-proc').ConnectorsData } ConnectorsData */
/**
@typedef {{
	type:number, position: Point, title?: string, styles?: string[]
	w?:number
}} RhombData
*/
/** @typedef { { l:Point, t:Point, r:Point, b:Point } } RhombPoints */
;// CONCATENATED MODULE: ./src/mixin/irrigation/shapes/shape-type-map.js





/**
 * @param {CanvasElement} canvas
 * @returns {Record<number, ShapeType>}
 */
function shapeTypeMap(canvas) {
  return {
    0: {
      create: shapeData => path(canvas, shapeData)
    },
    1: {
      create: shapeData => circle(canvas, shapeData)
    },
    2: {
      create: shapeData => rect(canvas, shapeData)
    },
    3: {
      create: shapeData => {
        /** @type {RectData} */shapeData.t = true;
        return rect(canvas, shapeData);
      }
    },
    4: {
      create: shapeData => rhomb(canvas, shapeData)
    }
  };
}

/** @typedef { {x:number, y:number} } Point */
/** @typedef { import('./rect.js').RectData } RectData */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
/**
@typedef {{
	create: (shapeData)=>SVGGraphicsElement
}} ShapeType
*/
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__(4603);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__(7566);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__(8721);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__(6573);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__(8100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__(7936);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-reversed.js
var es_typed_array_to_reversed = __webpack_require__(7467);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-sorted.js
var es_typed_array_to_sorted = __webpack_require__(4732);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__(9577);
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/png-chunk.js






/**
 * @param {Blob} png
 * @param {string} chunkName 4 symbol string
 * @returns {Promise<DataView | null>} chunk data
 */
async function pngChunkGet(png, chunkName) {
  return chunkGet(await png.arrayBuffer(), toUit32(chunkName));
}

/**
 * @param {Blob} png
 * @param {string} chunkName 4 symbol string
 * @param {Uint8Array} data
 * @returns {Promise<Blob>} new png
 */
async function pngChunkSet(png, chunkName, data) {
  return chunkSet(await png.arrayBuffer(), toUit32(chunkName), data);
}

/**
 * @param {ArrayBuffer} pngData
 * @param {number} chunkNameUint32 chunk name as Uint32
 * @param {Uint8Array} data
 * @returns {Blob} new png
 */
function chunkSet(pngData, chunkNameUint32, data) {
  /** @type {DataView} */
  let startPart;
  /** @type {DataView} */
  let endPart;
  const existingChunk = chunkGet(pngData, chunkNameUint32);
  if (existingChunk) {
    startPart = new DataView(pngData, 0, existingChunk.byteOffset - 8);
    endPart = new DataView(pngData, existingChunk.byteOffset + existingChunk.byteLength + 4);
  } else {
    const endChunkStart = pngData.byteLength - 12; // 12 - end chunk length
    startPart = new DataView(pngData, 0, endChunkStart);
    endPart = new DataView(pngData, endChunkStart);
  }
  const chunkHeader = new DataView(new ArrayBuffer(8));
  chunkHeader.setUint32(0, data.length);
  chunkHeader.setUint32(4, chunkNameUint32);
  return new Blob([startPart,
  // new chunk
  chunkHeader, data, new Uint32Array([0]),
  // CRC fake - not calculated

  endPart], {
    type: 'image/png'
  });
}

/**
 * @param {ArrayBuffer} pngData
 * @param {number} chunkNameUint32 chunk name as Uint32
 * @returns {DataView | null} chunk data
 */
function chunkGet(pngData, chunkNameUint32) {
  const dataView = new DataView(pngData, 8); // 8 byte - png signature

  let chunkPosition = 0;
  let chunkUint = dataView.getUint32(4);
  let chunkLenght;
  while (chunkUint !== 1229278788) {
    // last chunk 'IEND'
    chunkLenght = dataView.getUint32(chunkPosition);
    if (chunkUint === chunkNameUint32) {
      return new DataView(pngData, chunkPosition + 16, chunkLenght);
    }
    chunkPosition = chunkPosition + 12 + chunkLenght;
    chunkUint = dataView.getUint32(chunkPosition + 4);
  }
  return null;
}

/**
 * @param {string} chunkName 4 symbol string
 * @return {number} uit32
 */
function toUit32(chunkName) {
  return new DataView(new TextEncoder().encode(chunkName).buffer).getUint32(0);
}
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/svg-to-png.js



/**
 * @param {SVGSVGElement} svg
 * @param {{
		x: number;
    	y: number;
		height: number;
    	width: number;
	}} rect coordinates of the rect to export
 * @param {number} scale
 * @param {BlobCallback} callBack
 */
function svgToPng(svg, rect, scale, callBack) {
  const img = new Image();
  img.width = rect.width * scale * window.devicePixelRatio;
  img.height = rect.height * scale * window.devicePixelRatio;
  img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.style.width = `${img.width}px`;
    canvas.style.height = `${img.height}px`;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, rect.x,
    // sx
    rect.y,
    // sy
    rect.width,
    // sWidth
    rect.height,
    // sHeight

    0,
    // dx
    0,
    // dy
    img.width,
    // dWidth
    img.height // dHeight
    );
    URL.revokeObjectURL(img.src);
    canvas.toBlob(callBack, 'image/png');
  };
  svg.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, img.width);
  svg.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, img.height);
  img.src = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)], {
    type: 'image/svg+xml;charset=utf-8'
  }));
}
;// CONCATENATED MODULE: ./src/mixin/irrigation/diagram/dgrm-png.js




/**
 * @param {CanvasElement} canvas
 * @param {string} dgrmChunkVal
 * @param {BlobCallback} callBack
 */
function dgrmPngCreate(canvas, dgrmChunkVal, callBack) {
  const rectToShow = canvas.getBoundingClientRect();
  const svgVirtual = /** @type {SVGSVGElement} */canvas.ownerSVGElement.cloneNode(true);
  svgVirtual.style.backgroundImage = null;
  svgVirtual.querySelectorAll('.select, .highlight').forEach(el => el.classList.remove('select', 'highlight'));
  const nonSvgElems = svgVirtual.getElementsByTagName('foreignObject');
  while (nonSvgElems[0]) {
    nonSvgElems[0].parentNode.removeChild(nonSvgElems[0]);
  }
  const canvasData = canvas[CanvasSmbl].data;

  // diagram to left corner
  const canvasElVirtual = /** @type{SVGGraphicsElement} */svgVirtual.children[1];
  const divis = 1 / canvasData.scale;
  canvasElVirtual.style.transform = `matrix(1, 0, 0, 1, ${divis * (canvasData.position.x + 15 * canvasData.scale - rectToShow.x)}, ${divis * (canvasData.position.y + 15 * canvasData.scale - rectToShow.y)})`;
  svgToPng(svgVirtual, {
    x: 0,
    y: 0,
    height: rectToShow.height / canvasData.scale + 30,
    width: rectToShow.width / canvasData.scale + 30
  },
  // scale
  3,
  // callBack
  async blob => callBack(await pngChunkSet(blob, 'dgRm', new TextEncoder().encode(dgrmChunkVal))));
}

/**
 * @param {Blob} png
 * @returns {Promise<string|null>}
 */
async function dgrmPngChunkGet(png) {
  const dgrmChunkVal = await pngChunkGet(png, 'dgRm');
  return dgrmChunkVal ? new TextDecoder().decode(dgrmChunkVal) : null;
}

/** @typedef { {x:number, y:number} } Point */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/diagram/dgrm-srv.js






const svrApi = 'https://localhost:7156/api';

/**
 * @param {string} key
 * @param {DiagramSerialized} serialized
 * @returns {Promise}
 */
async function srvSave(key, serialized) {
  return await fetch(`${svrApi}/${key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(serialized)
  });
}

/**
 * get diagram json by key
 * @param {string} key
 * @returns {Promise<DiagramSerialized>}
 */
async function srvGet(key) {
  return (await fetch(`${svrApi}/${key}`)).json();
}
function generateKey() {
  const arr = new Uint8Array(8 / 2);
  window.crypto.getRandomValues(arr);
  const date = new Date();
  return `${date.getUTCFullYear()}${(date.getUTCMonth() + 1).toString().padStart(2, '0')}${Array.from(arr, dec => dec.toString(16).padStart(2, '0')).join('')}`;
}

/** @typedef { import("./dgrm-serialization").DiagramSerialized } DiagramSerialized */
;// CONCATENATED MODULE: ./src/mixin/irrigation/infrastructure/file.js



/**
 * save file to user
 * @param {Blob} blob
 * @param {string} name
 */
function fileSave(blob, name) {
  'showSaveFilePicker' in window ? fileSaveAs(blob) : fileDownload(blob, name);
}

/**
 * save file with "File save as" dialog
 * @param {Blob} blob
 */
async function fileSaveAs(blob) {
  try {
    // @ts-ignore
    const writable = await (await window.showSaveFilePicker({
      types: [{
        description: 'PNG Image',
        accept: {
          'image/png': ['.png']
        }
      }]
    })).createWritable();
    await writable.write(blob);
    await writable.close();
  } catch {
    alert('File not saved');
  }
}

/**
 * save file with default download process
 * @param {Blob} blob
 * @param {string} name
 */
function fileDownload(blob, name) {
  const link = document.createElement('a');
  link.download = name;
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
}

/**
 * @param {string} accept
 * @param {BlobCallback} callBack
 */
function fileOpen(accept, callBack) {
  const input = document.createElement('input');
  input.type = 'file';
  input.multiple = false;
  input.accept = accept;
  input.onchange = async function () {
    callBack(!input.files?.length ? null : input.files[0]);
  };
  input.click();
  input.remove();
}
;// CONCATENATED MODULE: ./src/mixin/irrigation/ui/menu.js









class Menu extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({
      mode: 'closed'
    });
    shadow.innerHTML = `
			<style>
			.menu {
				position: fixed;
				top: 15px;
				left: 15px;
				cursor: pointer;
			}
			#options {
				position: fixed;
				padding: 15px;
				box-shadow: 0px 0px 58px 2px rgb(34 60 80 / 20%);
				border-radius: 16px;
				background-color: rgba(255,255,255, .9);

				top: 0px;
				left: 0px;

				z-index: 1;
			}

			#options div, #options a { 
				color: rgb(13, 110, 253); 
				cursor: pointer; margin: 10px 0;
				display: flex;
				align-items: center;
				line-height: 25px;
				text-decoration: none;
			}
			#options div svg, #options a svg { margin-right: 10px; }
			</style>
			<svg id="menu" class="menu" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgb(52,71,103)"/></svg>
			<div id="options" style="visibility: hidden;">
			 	<div id="menu2" style="margin: 0 0 15px;"><svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgb(52,71,103)"/></svg></div>
				<div id="new"><svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z" fill="rgb(52,71,103)"/></svg>New diagram</div>
				<div id="open"><svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z" fill="rgb(52,71,103)"/></svg>Open diagram image</div>
				<div id="save"><svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z" fill="rgb(52,71,103)"/></svg>Save diagram image</div>
				<div id="link"><svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" fill="rgb(52,71,103)"/></svg>Copy link to diagram</div>
				<a href="/donate.html" target="_blank" style="margin-bottom: 0;">
					<svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" fill="rgb(255,66,77)"/></svg>Donate
				</a>
		 	</div>`;
    const options = shadow.getElementById('options');
    function toggle() {
      options.style.visibility = options.style.visibility === 'visible' ? 'hidden' : 'visible';
    }

    /** @param {string} id, @param {()=>void} handler */
    function click(id, handler) {
      shadow.getElementById(id).onclick = _ => {
        uiDisable(true);
        handler();
        toggle();
        uiDisable(false);
      };
    }
    shadow.getElementById('menu').onclick = toggle;
    shadow.getElementById('menu2').onclick = toggle;
    click('new', () => {
      canvasClear(this._canvas);
      tipShow(true);
    });
    click('save', () => {
      const serialized = serialize(this._canvas);
      if (serialized.s.length === 0) {
        alertEmpty();
        return;
      }
      dgrmPngCreate(this._canvas, JSON.stringify(serialized), png => fileSave(png, 'dgrm.png'));
    });
    click('open', () => fileOpen('.png', async png => await loadData(this._canvas, png)));
    click('link', async () => {
      const serialized = serialize(this._canvas);
      if (serialized.s.length === 0) {
        alertEmpty();
        return;
      }
      const key = generateKey();
      const url = new URL(window.location.href);
      url.searchParams.set('k', key);
      // use clipboard before server call - to fix 'Document is not focused'
      await navigator.clipboard.writeText(url.toString());
      await srvSave(key, serialized);
      alert('Link to diagram copied to clipboard');
    });
  }

  /** @param {CanvasElement} canvas */
  init(canvas) {
    /** @private */this._canvas = canvas;

    // file drag to window
    document.body.addEventListener('dragover', evt => {
      evt.preventDefault();
    });
    document.body.addEventListener('drop', async evt => {
      evt.preventDefault();
      if (evt.dataTransfer?.items?.length !== 1 || evt.dataTransfer.items[0].kind !== 'file' || evt.dataTransfer.items[0].type !== 'image/png') {
        alertCantOpen();
        return;
      }
      await loadData(this._canvas, evt.dataTransfer.items[0].getAsFile());
    });
  }
}
;
customElements.define('ap-menu', Menu);

/** @param {CanvasElement} canvas,  @param {Blob} png  */
async function loadData(canvas, png) {
  const dgrmChunk = await dgrmPngChunkGet(png);
  if (!dgrmChunk) {
    alertCantOpen();
    return;
  }
  if (deserialize(canvas, JSON.parse(dgrmChunk))) {
    tipShow(false);
  }
}
const alertCantOpen = () => alert('File cannot be read. Use the exact image file you got from the application.');
const alertEmpty = () => alert('Diagram is empty');

/** @typedef { {x:number, y:number} } Point */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
;// CONCATENATED MODULE: ./src/mixin/irrigation/ui/shape-menu.js




class ShapeMenu extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({
      mode: 'closed'
    });
    shadow.innerHTML = `<style>
			.menu {
				overflow-x: auto;
				padding: 0;
				position: fixed;
				top: 50%;
				left: 5px;
				transform: translateY(-50%);
				box-shadow: 0px 0px 58px 2px rgba(34, 60, 80, 0.2);
				border-radius: 16px;
				background-color: rgba(255,255,255, .9);
			}

			.content {
				white-space: nowrap;
				display: flex;
				flex-direction: column;
			}
			
			[data-cmd] {
				cursor: pointer;
			}

			.menu svg { padding: 10px; }
			.stroke {
				stroke: #344767;
				stroke-width: 2px;
				fill: transparent;
			}
		
			.menu .big {
				width: 62px;
				min-width: 62px;
			}

			@media only screen and (max-width: 700px) {
				.menu {
					width: 100%;
					border-radius: 0;
					bottom: 0;
					display: flex;
  					flex-direction: column;
					top: unset;
					left: unset;
					transform: unset;
				}

				.content {
					align-self: center;
					flex-direction: row;
				}
			}
			</style>
			<div id="menu" class="menu" style="touch-action: none;">
				<div class="content">
					<svg class="stroke" style="fill: #344767;" data-cmd="shapeAdd" data-cmd-arg="5" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
					<svg class="stroke" data-cmd="shapeAdd" data-cmd-arg="1" viewBox="0 0 24 24" width="24" height="24"><circle r="9" cx="12" cy="12"></circle></svg>
					<svg class="stroke" data-cmd="shapeAdd" data-cmd-arg="4" viewBox="0 0 24 24" width="24" height="24"><path d="M2 12 L12 2 L22 12 L12 22 Z" stroke-linejoin="round"></path></svg>
					<svg class="stroke" data-cmd="shapeAdd" data-cmd-arg="2" viewBox="0 0 24 24" width="24" height="24"><rect x="2" y="4" width="20" height="16" rx="3" ry="3"></rect></svg>
					<svg data-cmd="shapeAdd" data-cmd-arg="0" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4-5 4V7h-3a1 1 0 0 0-1 1z" fill="rgba(52,71,103,1)"/></svg>
					<svg data-cmd="shapeAdd" data-cmd-arg="3" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 6v15h-2V6H5V4h14v2z" fill="rgba(52,71,103,1)"/></svg>
				</div>
			</div>`;
    const menu = shadow.getElementById('menu');
    menu.querySelectorAll('[data-cmd="shapeAdd"]').forEach(el => listen(el, 'pointerdown', this));
    listen(menu, 'pointerleave', this);
    listen(menu, 'pointerup', this);
    listen(menu, 'pointermove', this);
  }
  /** @param {CanvasElement} canvas */
  init(canvas) {
    /** @private */this._canvas = canvas;
  }

  /** @param {PointerEvent & { currentTarget: Element }} evt */
  handleEvent(evt) {
    switch (evt.type) {
      case 'pointermove':
        if (!this._isNativePointerleaveTriggered) {
          // emulate pointerleave for mobile

          const pointElem = document.elementFromPoint(evt.clientX, evt.clientY);
          if (pointElem === this._pointElem) {
            return;
          }

          // pointerleave
          if (this._parentElem === this._pointElem) {
            // TODO: check mobile
            this._canvas.ownerSVGElement.setPointerCapture(evt.pointerId);
          }

          /**
           * @type {Element}
           * @private
           */
          this._pointElem = pointElem;
        }
        break;
      case 'pointerleave':
        this._isNativePointerleaveTriggered = true;
        if (this._pressedShapeTemplKey != null) {
          // when shape drag out from menu panel
          this._shapeCreate(evt);
        }
        this._clean();
        break;
      case 'pointerdown':
        this._pressedShapeTemplKey = parseInt(evt.currentTarget.getAttribute('data-cmd-arg'));

        // for emulate pointerleave
        this._parentElem = document.elementFromPoint(evt.clientX, evt.clientY);
        this._pointElem = this._parentElem;
        this._isNativePointerleaveTriggered = null;
        break;
      case 'pointerup':
        this._clean();
        break;
    }
  }

  /**
   * @param {PointerEvent} evt
   * @private
   */
  _shapeCreate(evt) {
    tipShow(false);
    const evtPoint = pointInCanvas(this._canvas[CanvasSmbl].data, evt.clientX, evt.clientY);

    //  TODO: create facktory map with increasing
    const shapeData = this._pressedShapeTemplKey === 0 ? ( /** @type {import('../shapes/path.js').PathData} */{
      s: {
        data: {
          dir: 'right',
          position: {
            x: evtPoint.x - 24,
            y: evtPoint.y
          }
        }
      },
      e: {
        data: {
          dir: 'right',
          position: {
            x: evtPoint.x + 24,
            y: evtPoint.y
          }
        }
      }
    }) : {
      type: this._pressedShapeTemplKey,
      position: {
        x: evtPoint.x,
        y: evtPoint.y
      },
      title: this._pressedShapeTemplKey == 3 ? 'Title' : ''
    };
    const shapeEl = this._canvas[CanvasSmbl].shapeMap[this._pressedShapeTemplKey].create(shapeData);
    this._canvas.append(shapeEl);
    shapeEl.dispatchEvent(new PointerEvent('pointerdown', evt));
  }

  /** @private */
  _clean() {
    this._pressedShapeTemplKey = null;
    this._parentElem = null;
    this._pointElem = null;
  }
}
customElements.define('ap-menu-shape', ShapeMenu);

/** @typedef { import('../shapes/shape-type-map.js').ShapeType } ShapeType */
/** @typedef { import('../infrastructure/canvas-smbl.js').CanvasElement } CanvasElement */
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IrrigationDiagramDrawerComp.vue?vue&type=script&lang=ts










/* harmony default export */ var IrrigationDiagramDrawerCompvue_type_script_lang_ts = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  setup() {
    const containerDiagram = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      const canvas = document.getElementById('canvas');
      const clientRect = containerDiagram.value?.getBoundingClientRect();
      canvas[CanvasSmbl] = {
        data: {
          position: {
            x: 0,
            y: 0
          },
          offsetPosition: {
            x: clientRect?.x,
            y: clientRect?.y
          },
          scale: 1,
          cell: 24
        },
        shapeMap: shapeTypeMap(canvas)
      };
      moveEvtMobileFix(canvas.ownerSVGElement);
      evtRouteApplay(canvas.ownerSVGElement);
      copyPastApplay(canvas);
      groupSelectApplay(canvas); // groupSelectApplay must go before moveScaleApplay
      moveScaleApplay(canvas);
      document.getElementById('menu-shape').init(canvas);
      tipShow(true);
    });
    return {
      containerDiagram
    };
  }
}));
;// CONCATENATED MODULE: ./src/components/IrrigationDiagramDrawerComp.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IrrigationDiagramDrawerComp.vue?vue&type=style&index=0&id=ba5c47ec&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/IrrigationDiagramDrawerComp.vue?vue&type=style&index=0&id=ba5c47ec&lang=css

;// CONCATENATED MODULE: ./src/components/IrrigationDiagramDrawerComp.vue




;


const IrrigationDiagramDrawerComp_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(IrrigationDiagramDrawerCompvue_type_script_lang_ts, [['render',IrrigationDiagramDrawerCompvue_type_template_id_ba5c47ec_ts_true_render]])

/* harmony default export */ var IrrigationDiagramDrawerComp = (IrrigationDiagramDrawerComp_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/widgets/config/WgMapIrrigationConfig.vue?vue&type=script&lang=ts



/* harmony default export */ var WgMapIrrigationConfigvue_type_script_lang_ts = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  components: {
    BaseConfigComp: BaseConfigComp,
    IrrigationDiagram: IrrigationDiagramDrawerComp
  },
  setup() {}
}));
;// CONCATENATED MODULE: ./src/widgets/config/WgMapIrrigationConfig.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/widgets/config/WgMapIrrigationConfig.vue




;
const WgMapIrrigationConfig_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(WgMapIrrigationConfigvue_type_script_lang_ts, [['render',WgMapIrrigationConfigvue_type_template_id_356e6e54_ts_true_render]])

/* harmony default export */ var WgMapIrrigationConfig = (WgMapIrrigationConfig_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WidgetSelector.vue?vue&type=script&lang=ts






/* harmony default export */ var WidgetSelectorvue_type_script_lang_ts = ({
  setup(props, ctx) {
    let dataReactive = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      onEdit: false,
      classSearchWrapper: [],
      searchText: "",
      dataTableListWidget: {
        data: [{
          avatarUrl: "test url",
          description: "Hero merupakan spanduk untuk menampilkan informasi di halaman awal",
          ID: 0,
          title: "Hero",
          hidden: false
        }, {
          avatarUrl: "test url",
          description: "Menampilkan posisi device",
          ID: 1,
          title: "Peta Device",
          hidden: false
        }, {
          avatarUrl: "test url",
          description: "Membuat tampilan peta irigasi",
          ID: 2,
          title: "Peta Irigasi",
          hidden: false
        }]
      },
      showSelector: false,
      selectedItem: -1
    });
    const classFocus = "focus";
    const inputEl = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    let onFocus = e => {
      if (!dataReactive.classSearchWrapper.includes(classFocus)) dataReactive.classSearchWrapper.push(classFocus);
    };
    let onBlur = e => {
      if (dataReactive.classSearchWrapper.includes(classFocus)) dataReactive.classSearchWrapper.splice(dataReactive.classSearchWrapper.indexOf(classFocus), 1);
    };
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(dataReactive, n => {
      let e = {
        showSelector: n.showSelector,
        onEdit: n.onEdit
      };
      ctx.emit("change", e);
    });
    let onSubmit = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    let onCancelEdit = () => {
      dataReactive.onEdit = false;
      ctx.emit("cancelEdit");
    };
    let onSave = () => {
      ctx.emit("save");
    };
    let onItemSelected = id => {
      dataReactive.showSelector = false;
      dataReactive.selectedItem = id;
    };
    const components = [WgHeroConfig, WgMapConfig, WgMapIrrigationConfig];
    return {
      inputEl,
      dataReactive,
      onFocus,
      onBlur,
      onSubmit,
      onItemSelected,
      onCancelEdit,
      onSave,
      components
    };
  },
  components: {
    TableWidgetList: TableListWidget,
    WgHeroConfig: WgHeroConfig,
    WgMapConfig: WgMapConfig
  },
  props: {
    layoutName: {
      type: String
    }
  }
});
;// CONCATENATED MODULE: ./src/components/WidgetSelector.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WidgetSelector.vue?vue&type=style&index=0&id=2c139a84&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/WidgetSelector.vue?vue&type=style&index=0&id=2c139a84&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/WidgetSelector.vue




;


const WidgetSelector_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(WidgetSelectorvue_type_script_lang_ts, [['render',WidgetSelectorvue_type_template_id_2c139a84_scoped_true_ts_true_render],['__scopeId',"data-v-2c139a84"]])

/* harmony default export */ var WidgetSelector = (WidgetSelector_exports_);
;// CONCATENATED MODULE: ./src/Utils.ts

class Utils {
  static listen(el, e, cb) {
    el.addEventListener(e, cb);
    return () => el.removeEventListener(e, cb);
  }
  static defaultGridOptions() {
    return {
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      useBodyForBreakpoint: false,
      minCols: 24,
      maxCols: 100,
      minRows: 10,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: false
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {
        north: true,
        east: true,
        south: true,
        west: true
      },
      pushResizeItems: false,
      displayGrid: DisplayGrid.OnDragAndResize,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };
  }
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainLayout.vue?vue&type=script&lang=ts






/* harmony default export */ var MainLayoutvue_type_script_lang_ts = ({
  setup() {
    let tempWidget = [{
      cols: 2,
      rows: 2,
      y: 0,
      x: 0,
      d: "A"
    }, {
      cols: 2,
      rows: 2,
      y: 0,
      x: 1,
      d: "B"
    }, {
      cols: 2,
      rows: 2,
      y: 0,
      x: 2,
      d: "C"
    }];
    const data = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      widgets: Object.assign({}, tempWidget),
      options: Utils.defaultGridOptions(),
      widgetSelectorEvent: {
        showSelector: false,
        onEdit: false
      },
      event: new Subject()
    });
    let widgetSelectorEvent = e => {
      data.options.resizable.enabled = data.options.draggable.enabled = e.onEdit;
      data.widgetSelectorEvent = e;
    };
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      data.event = new Subject();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      data.event = null;
    });
    let onCancel = () => {
      data.event.next();
    };
    return {
      data,
      widgetSelectorEvent,
      onCancel
    };
  },
  components: {
    gridItem: grid_item,
    gridster: gridster,
    WidgetSelector: WidgetSelector
  },
  props: {
    layoutName: {
      type: String
    }
  }
});
;// CONCATENATED MODULE: ./src/components/MainLayout.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-57.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-57.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-57.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainLayout.vue?vue&type=style&index=0&id=4491bed8&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MainLayout.vue?vue&type=style&index=0&id=4491bed8&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/MainLayout.vue




;


const MainLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MainLayoutvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-4491bed8"]])

/* harmony default export */ var MainLayout = (MainLayout_exports_);
;// CONCATENATED MODULE: ./src/main-release.ts

const widgetlugin = (app, options) => {
  app.component("MertaniWidget", MainLayout);
};
/* harmony default export */ var main_release = (widgetlugin);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (main_release);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=WidgetMertani.umd.js.map
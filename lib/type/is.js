var isArray = Array.isArray;

function isBoolean(arg) {
    return typeof arg === 'boolean';
}

function isUndefined(arg) {
    return arg === void 0;
}

function isNull(arg) {
    return arg === null;
}

function isNullOrUndefined(arg) {
    return arg == null;
}

function isNumber(arg) {
    return typeof arg === 'number';
}

function isString(arg) {
    return typeof arg === 'string';
}

function isSymbol(arg) {
    return typeof arg === 'symbol';
}

function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}

function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}

function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

function isFunction(arg) {
    return typeof arg === 'function';
}

function isPrimitive(arg) {
    return arg === null ||
        typeof arg === 'boolean' ||
        typeof arg === 'number' ||
        typeof arg === 'string' ||
        typeof arg === 'symbol' ||  // ES6 symbol
        typeof arg === 'undefined';
}

function objectToString(o) {
    return Object.prototype.toString.call(o);
}

exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isObject = isObject;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isString = isString;
exports.isDate = isDate;
exports.isArray = isArray;
exports.isRegExp = isRegExp;
exports.isSymbol = isSymbol;
exports.isError = isError;
exports.isFunction = isFunction;
exports.isPrimitive = isPrimitive;

/*----------------------------------------------------
 * convert to object to string if not null
 * 
 * @param {*} obj
 * @returns {String} empty if undefined/null
 */
function asString(obj) {
    if (obj === undefined || obj === null) {
        return '';
    }
    return obj.toString();
}

/**
 * convert to object to float if not null
 *
 * (null / undefined) === NaN
 * ("1234.5678", 2) === 1234.56
 * 
 * @param {*} obj
 * @param {Integer} precision
 * @returns {Float}
 */
function asFloat(obj, precision) {
    if (obj === undefined || obj === null) {
        return NaN;
    }
    if (isNumber(obj)) {
        return obj;
    }
    var num = parseFloat(obj.toString(), 10);
    if (precision !== undefined) {
        num = parseFloat(num.toFixed(precision), 10);
    }
    return num;
};



  /*----------------------------------------------------
   * convert to object to integer if not null.
   * If the string starts with '0x' or '-0x', parse as hex.
   *
   * (null / undefined) === null
   * ("1234") === 1234
   * ("0xFF") === 255
   * 
   * @param {*} obj
   * @returns {Integer}
  */
  function asInt(obj) {
    var str;
    if (isNull(obj)) {
      return null;
    }
    if (_.isNumber(obj)) {
      return obj.toFixed(0);
    }
    str = obj.toString();
    return (/^\s*-?0x/i.test(str) ? parseInt(str, 16) : parseInt(str, 10));
  };

  /*----------------------------------------------------
   * Parses the object argument as a boolean.
   *
   * (null, undefined) === false
   * (true, yes, on, y, t, 1) === true
   * 
   * @param {*} obj
   * @returns {Boolean}
   ---------------------------------------------------
  */
  function asBoolean(obj) {
    var s;
    if (isNull(obj)) {
      return false;
    }
    if (_.isBoolean(obj)) {
      return obj;
    }
    if (_.isString(obj)) {
      s = obj.toString().toLowerCase();
      return s === "true" || s === "yes" || s === "on" || s === "t" || s === "y" || s === "1";
    }
    return !!obj;
  };

  /*----------------------------------------------------
   * @required date-js
   *
   * ("2012-01-01 12:00:00") === new Date(2012-01-01 12:00:00)
   * 
   * @param {*} obj
   * @returns {Date}
   ---------------------------------------------------
  */
  function asDate(obj) {
    if (isNull(obj)) {
      return null;
    }
    if (_.isDate(obj)) {
      return obj;
    }
    if (_.isNumber(obj)) {
      return new Date(obj);
    }
    return Date.parseExact(obj.toString(), asDate.DATE_FORMATER_LIST);
  };

  asDate.DATE_FORMATER_LIST = ["yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd", "HH:mm:ss"];

  /*----------------------------------------------------
   * ("object.func", window) === window.object.func
   * 
   * @param {*} fn
   * @param {*} context
   * @returns {Function}
   ---------------------------------------------------
  */
function asFunction(fn, context) {
    var f;
    if (isNull(fn)) {
      return null;
    }
    if (_.isFunction(fn)) {
      return fn;
    }
    if (context) {
      f = get(context, fn);
      if (_.isFunction(f)) {
        return f;
      }
    }
    f = get(global, fn);
    if (_.isFunction(f)) {
      return f;
    }
    return null;
  };

  /*----------------------------------------------------
   * ("[{id:1},{id,2}]") === [{id:1},{id,2}]
   * 
   * @required JSON2.js
   * @param {String} str
   * @returns {*}
   ---------------------------------------------------
  */
function asJSON(str) {
  if (isNull(str)) {
    return null;
  }
  if (_.isString(str)) {
    return JSON.parse(str);
  }
  return str;
};
  
  
module.exports.asString = asString;
module.exports.asFloat = asFloat;
module.exports.asInt = asInt;
module.exports.asBoolean = asBoolean;
module.exports.asDate = asDate;
module.exports.asFunction = asFunction;
module.exports.asJSON = asJSON;

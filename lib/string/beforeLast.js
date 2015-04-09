/**
 * Gets the substring before the last occurrence of a separator.
 * 
 * @static
 * @param {string} string - the String to get a substring from, may be null
 * @param {string} separator - the String to search for, may be null
 * @returns {string} the substring before the last occurrence of the separator, null if null String input
 * 
 * @example
 * 
 * beforeLast(null, *)      = null
 * beforeLast("", *)        = ""
 * beforeLast("abc", "a")   = ""
 * beforeLast("abcba", "b") = "abc"
 * beforeLast("abc", "c")   = "ab"
 * beforeLast("abc", "d")   = "abc"
 * beforeLast("abc", "")    = ""
 * beforeLast("abc", null)  = "abc"
 */
module.exports = function beforeLast(string, separator) {
    if (string == null) {
        return null;
    }
    var pos = string.lastIndexOf(separator);
    if (pos !== -1) {
        return string.substring(0, pos);
    }
    return '';
};

/**
 * Gets the substring before the first occurrence of a separator.
 * 
 * @static
 * @param {string} string - the String to get a substring from, may be null
 * @param {string} separator - the String to search for, may be null
 * @returns {string} the substring before the first occurrence of the separator, null if null String input
 * 
 * @example
 * 
 * before(null, *)      = null
 * before("", *)        = ""
 * before("abc", "a")   = ""
 * before("abcba", "b") = "a"
 * before("abc", "c")   = "ab"
 * before("abc", "d")   = "abc"
 * before("abc", "")    = ""
 * before("abc", null)  = "abc"
 */
module.exports = function before(string, separator) {
    if (string == null) {
        return null;
    }
    var pos = string.indexOf(separator);
    if (pos !== -1) {
        return string.substring(0, pos);
    }
    return '';
};

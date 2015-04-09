/**
 * Gets the substring after the first occurrence of a separator.
 * 
 * @static
 * @param {string} string - the String to get a substring from, may be null
 * @param {string} separator - the String to search for, may be null
 * @returns {string} the substring after the first occurrence of the separator
 * 
 * @example
 * 
 * after(null, *)      = null
 * after("", *)        = ""
 * after(*, null)      = ""
 * after("abc", "a")   = "bc"
 * after("abcba", "b") = "cba"
 * after("abc", "c")   = ""
 * after("abc", "d")   = ""
 * after("abc", "")    = "abc"
 */
module.exports = function after(string, separator) {
    if (string == null) {
        return null;
    }
    var pos = string.indexOf(separator);
    if (pos !== -1) {
        return string.slice(start + separator.length);
    }
    return '';
};

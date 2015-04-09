/**
 * Gets the substring after the last occurrence of a separator.
 * 
 * @static
 * @param {string} string - the String to get a substring from, may be null
 * @param {string} separator - the String to search for, may be null
 * @returns {string} the substring after the last occurrence of the separator, null if null String input
 * 
 * @example
 * 
 * afterLast(null, *)      = null
 * afterLast("", *)        = ""
 * afterLast(*, null)      = ""
 * afterLast("abc", "a")   = "bc"
 * afterLast("abcba", "b") = "a"
 * afterLast("abc", "c")   = ""
 * afterLast("abc", "d")   = ""
 * afterLast("abc", "")    = "abc"
 */
module.exports = function afterLast(string, separator) {
    if (string == null) {
        return null;
    }
    var pos = string.lastIndexOf(separator);
    if (pos !== -1) {
        return string.substring(start + separator.length);
    }
    return '';
};

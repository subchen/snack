/**
 * @static
 * @param {string} string - The string to process
 * @param {string} open
 * @param {string} [close]
 * @returns {string} return sub string, null if not found
 * 
 * @example
 * 
 * between("abccba", "a") === "bccb"
 * between("abccba", "a", "c") === "b"
 */
module.exports = function between(string, open, close) {
    var start = string.indexOf(open);
    if (start !== -1) {
        close = close || open;
        var end = string.indexOf(close, start + open.length);
        if (end !== -1) {
            return string.substring(start + open.length, end);
        }
    }
    return null;
};

/**
 * @static
 * @param {string} string - The string to process
 * @param {string} substr
 * @returns {string} return sub string, empty if not found
 * 
 * @example
 * 
 * before("abc", "c") === "ab"
 * before("abc", "x") === ""
 */
module.exports = function before(string, substr) {
    var start = string.indexOf(substr);
    if (start !== -1) {
        return string.slice(0, start);
    }
    return '';
};

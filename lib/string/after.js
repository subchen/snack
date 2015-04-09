/**
 * @static
 * @param {string} string - The string to process
 * @param {string} substr
 * @returns {string} return sub string, empty if not found
 * 
 * @example
 * 
 * after("abc", "a") === "bc"
 * after("abc", "x") === ""
 */
module.exports = function after(string, substr) {
    var start = string.indexOf(substr);
    if (start !== -1) {
        return string.slice(start + substr.length);
    }
    return '';
};

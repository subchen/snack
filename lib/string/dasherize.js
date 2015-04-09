var toString = require('./toString');

/**
 * @param {string} string
 */
module.exports = function dasherize(string) {
    string = toString(string);
    return string.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

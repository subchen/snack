var toString = require('./toString');

module.exports = function decapitalize(string) {
    string = toString(string);
    return string.charAt(0).toLowerCase() + string.substring(1);
};

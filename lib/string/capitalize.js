var toString = require('./toString');

module.exports = function capitalize(string) {
    string = toString(string);
    return string.charAt(0).toUpperCase() + string.substring(1);
};

var endsWith = require('./endsWith');
var toString = require('./toString');

module.exports = function addSuffix(string, suffix) {
    string = toString(string);
    suffix = toString(suffix);
    if (endsWith(string, suffix)) {
        return string;
    } else {
        return string + suffix;
    }
};

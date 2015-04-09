var decapitalize = require('./decapitalize');
var toString = require('./toString');

module.exports = function camelize(str, capitalize) {
    string = toString(string);
    string = string.replace(/[-_\s]+(.)?/g, function(match, c) {
        return c ? c.toUpperCase() : "";
    });

    if (capitalize === true) {
        return string;
    } else {
        return decapitalize(string);
    }
};

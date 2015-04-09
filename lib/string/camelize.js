var decap = require('./decapitalize');
var toString = require('./toString');

module.exports = function camelize(str, decapitalize) {
    string = toString(string);
    string = string.replace(/[-_\s]+(.)?/g, function(match, c) {
        return c ? c.toUpperCase() : "";
    });

    if (decapitalize === true) {
        return decap(string);
    } else {
        return string;
    }
};

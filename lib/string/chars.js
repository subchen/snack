var toString = require('./toString');

module.exports = function chars(string) {
    return toString(string).split('');
};

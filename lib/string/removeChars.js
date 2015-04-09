var chars = require('./chars');

module.exports = function removeChars(string, char) {
    return chars(string).map(function(ch) {
        return (ch !== char) ? ch : null;
    }).join('');
};

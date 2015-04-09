var repeat = require('./repeat');
var toString = require('./toString');

/**
 * @param {string} string
 * @param {number} length
 * @param {char} [char=' ']
 * @param {string} [type='both'] - left/right/both
 */
module.exports = function pad(string, length, char, type) {
    string = toString(string);
    char = (char || ' ').charAt(0);

    var padlen;
    switch (type || 'both') {
        case 'left':
            padlen = length - string.length;
            return repeat(char, padlen) + string;
        case 'right':
            padlen = length - string.length;
            return string + repeat(char, padlen);
        case 'both':
            padlen = length - string.length;
            return repeat(char, Math.ceil(padlen / 2)) + string + repeat(char, Math.floor(padlen / 2));
    }
};

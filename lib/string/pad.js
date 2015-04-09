var repeat = require('./repeat');

module.exports = function pad(str, length, padStr, type) {
    if (!padStr) {
        padStr = ' ';
    } else if (padStr.length > 1) {
        padStr = padStr.charAt(0);
    }

    var padlen;
    switch (type) {
        case 'right':
            padlen = length - str.length;
            return str + repeat(padStr, padlen);
        case 'both':
            padlen = length - str.length;
            return repeat(padStr, Math.ceil(padlen / 2)) + str + repeat(padStr, Math.floor(padlen / 2));
        default: // 'left'
            padlen = length - str.length;
            return repeat(padStr, padlen) + str;
    }
};

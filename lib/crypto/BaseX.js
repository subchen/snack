// Credits to  https://github.com/dcousens/base-x

/* jshint bitwise: false */

/**
 * @class
 * @param {string} alphabet
 */
function BaseX(alphabet) {
    this.alphabet = alphabet;
    this.alphabetMap = {};
    for (var i = 0; i < alphabet.length; i++) {
        this.alphabetMap[alphabet.charAt(i)] = i;
    }
}

/**
 * @param {string} string
 * @returns {string}
 */
BaseX.prototype.encode = function(string) {
    if (string.length === 0) {
        return '';
    }

    var base = this.alphabet.length;
    var buffer = new Buffer(string);
    var i, j, digits = [0];
    for (i = 0; i < buffer.length; i++) {
        for (j = 0; j < digits.length; j++) {
            digits[j] <<= 8;
        }
        digits[0] += buffer[i];

        var carry = 0;
        for (j = 0; j < digits.length; j++) {
            digits[j] += carry;
            carry = (digits[j] / base) | 0;
            digits[j] %= base;
        }

        while (carry) {
            digits.push(carry % base);
            carry = (carry / base) | 0;
        }
    }

    // deal with leading zeros
    for (i = 0; buffer[i] === 0 && i < buffer.length - 1; i++) {
        digits.push(0);
    }

    // convert digits to a string
    var str = '';
    for (i = digits.length - 1; i >= 0; i--) {
        str += this.alphabet[digits[i]];
    }
    return str;
};

/**
 * @param {string} string
 * @returns {string}
 */
BaseX.prototype.decode = function(string) {
    if (string.length === 0) {
        return '';
    }

    var base = this.alphabet.length;
    var i, j, bytes = [0];
    for (i = 0; i < string.length; i++) {
        var c = string[i];
        if (!(c in this.alphabetMap)) {
            throw new Error('Invalided character');
        }

        for (j = 0; j < bytes.length; j++) {
            bytes[j] *= base;
        }
        bytes[0] += this.alphabetMap[c];

        var carry = 0;
        for (j = 0; j < bytes.length; j++) {
            bytes[j] += carry;
            carry = bytes[j] >> 8;
            bytes[j] &= 0xff;
        }

        while (carry) {
            bytes.push(carry & 0xff);
            carry >>= 8;
        }
    }

    // deal with leading zeros
    //for (i = 0; string[i] === '1' && i < string.length - 1; i++) {
    //    bytes.push(0);
    //}

    return new Buffer(bytes.reverse()).toString();
};

module.exports = BaseX;

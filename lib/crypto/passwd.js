var string = require('snack-string');
var md5 = require('./md5');

var passwd = module.exports = {};
var SALT_LENGTH = 8;

/**
 * Hash a password string.
 *
 * @param {string} passwd - the password to hash
 * @returns {string} hashed string
 */
passwd.hash = function hash(passwd) {
    var salt = string.randomHex(SALT_LENGTH);
    var hashed = md5(salt + passwd);
    return salt + hashed.slice(SALT_LENGTH);
};

/**
 * Validate the password is currently.
 *
 * @param {string} passwd - the password to check
 * @param {string} hashed - the result of `passwd.hash()`
 * @returns {boolean}
 */
passwd.check = function check(passwd, hashed) {
    var salt = hashed.slice(0, SALT_LENGTH);
    var rehashed = md5(salt + passwd);
    return hashed.slice(SALT_LENGTH) === rehashed.slice(SALT_LENGTH);
};

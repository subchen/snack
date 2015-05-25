var string = require('snack-string');
var md5 = require('./md5');

var SALT_LENGTH = 8;

function hash(passwd) {
    var salt = string.randomHex(SALT_LENGTH);
    var hashed = md5(salt + passwd);
    return salt + hashed.slice(SALT_LENGTH);
}

function check(passwd, hashed) {
    var salt = hashed.slice(0, SALT_LENGTH);
    var rehashed = md5(salt + passwd);
    return hashed.slice(SALT_LENGTH) === rehashed.slice(SALT_LENGTH);
}

module.exports = {
    hash: hash,
    check: check
};

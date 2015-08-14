var crypto = require('crypto');

module.exports = function sha512(string) {
    var hash = crypto.createHash('sha512');
    hash.update(string);
    return hash.digest('hex');
};

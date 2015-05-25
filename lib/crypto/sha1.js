var crypto = require('crypto');

module.exports = function sha1(string) {
    var hash = crypto.createHash('sha1');
    hash.update(string);
    return hash.digest('hex');
};

var crypto = require('crypto');

module.exports = function sha256(string) {
    var hash = crypto.createHash('sha256');
    hash.update(string);
    return hash.digest('hex');
};

var crypto = require('crypto');

module.exports = function sha256(str) {
    var hash = crypto.createHash('sha256');
    hash.update(str);
    return hash.digest('hex');
};

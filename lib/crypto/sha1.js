var crypto = require('crypto');

module.exports = function sha1(str) {
    var hash = crypto.createHash('sha1');
    hash.update(str);
    return hash.digest('hex');
};

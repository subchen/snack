var crypto = require('crypto');

module.exports = function md5(string) {
    var hash = crypto.createHash('md5');
    hash.update(string);
    return hash.digest('hex');
};

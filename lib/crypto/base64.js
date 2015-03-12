var Buffer = require('buffer');

module.exports.encode = function base64_encode(str) {
    var buffer = new Buffer(str);
    return buffer.toString('base64');
};

module.exports.decode = function base64_decode(str) {
    var buffer = new Buffer(str, 'base64');
    return buffer.toString();
};

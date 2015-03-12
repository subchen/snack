var Buffer = require('buffer');

module.exports = function hex(str) {
    var buffer = new Buffer(str);
    return buffer.toString('hex');
};

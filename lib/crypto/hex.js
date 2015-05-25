module.exports = function hex(string) {
    var buffer = new Buffer(string);
    return buffer.toString('hex');
};

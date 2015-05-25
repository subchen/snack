var base64 = module.exports = {};

base64.encode = function encode(string) {
    var buffer = new Buffer(string);
    return buffer.toString('base64');
};

base64.decode = function decode(string) {
    var buffer = new Buffer(string, 'base64');
    return buffer.toString();
};

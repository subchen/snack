var BaseX = require('./BaseX');

// remove number: 0
// remove char: bug I, big O, small L
module.exports = new BaseX('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');

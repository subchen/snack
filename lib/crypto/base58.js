var BaseX = require('./BaseX');

// remove numbers: 0
// remove chars: big I, big O, small L
module.exports = new BaseX('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');

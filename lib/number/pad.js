var padleft = require('../string/padleft');

module.exports = function pad(num, width) {
    return padleft(num.toString(), width, '0');
};

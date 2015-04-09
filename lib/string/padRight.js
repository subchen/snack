var pad = require('./pad');

module.exports = function padRight(string, length, char) {
    return pad(string, length, char, 'right');
};

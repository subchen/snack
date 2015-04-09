var pad = require('./pad');

module.exports = function padLeft(string, length, char) {
    return pad(string, length, char, 'left');
};

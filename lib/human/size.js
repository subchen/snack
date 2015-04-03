var format = require('../number/format');

module.exports = function human_size(size, precision) {
    if (precision === undefined) {
        precision = 2;
    }
    if (size < 1024) {
        return size.toString() + 'Byte';
    }
    if (size < 1024 * 1024) {
        return format(size / 1024, precision) + 'KB';
    }
    if (size < 1024 * 1024 * 1024) {
        return format(size / 1024 / 1024, precision) + 'MB';
    }
    if (size < 1024 * 1024 * 1024 * 1024) {
        return format(size / 1024 / 1024 / 1024, precision) + 'GB';
    }
};

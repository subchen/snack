module.exports = function repeat(str, count, separator) {
    separator = separator || '';

    var s = [];
    for (var i=0; i<count; i++) {
        s.push(str);
    }
    return s.join(separator);
};

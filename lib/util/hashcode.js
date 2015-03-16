module.exports = function hashcode(s) {
    for (var h = 0, i = 0; i < s.length; h &= h) {
        h = 31 * h + s.charCodeAt(i++);
    }
    return h;
};

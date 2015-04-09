/**
 * Returns a hash code for this string.
 */
module.exports = function hashCode(s) {
    for (var h = 0, i = 0; i < s.length; h &= h) {
        h = 31 * h + s.charCodeAt(i++);
    }
    return h;
};

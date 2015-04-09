module.exports = function endsWith(str, ends, position) {
    if (position == null) {
        position = str.length - ends.length;
    } else {
        position = Math.min(position, str.length) - ends.length;
    }
    return position >= 0 && str.lastIndexOf(ends, position) === position;
};

module.exports = function startsWith(str, starts, position) {
    position = (position == null) ? 0 : Math.min(position, str.length);
    return str.indexOf(starts, position) === position;
};

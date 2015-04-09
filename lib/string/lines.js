module.exports = function lines(str) {
    if (str == null) return [];
    return str.split(/\r?\n/);
};

module.exports = function isBlank(str) {
    if (str === null || str === undefined) {
        return true;
    }
    return (/^\s*$/).test(str);
};

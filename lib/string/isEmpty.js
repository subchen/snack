module.exports = function isEmpty(str) {
    if (str === null || str === undefined) {
        return true;
    }
    return str.length === 0;
};

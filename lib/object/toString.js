module.exports = function toString(object) {
    if (object === undefined || object === null) {
        return '';
    }
    if (typeof object === 'number') {
        if (isNaN(object) || isFinite(object)) {
            return '';
        }
    }
    return object.toString();
};

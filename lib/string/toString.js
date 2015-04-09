/**
 * Convert a object to string.
 * 
 * @static
 * @param {*} object
 * @returns string or empty if null or undefined
 **/
module.exports = function toString(object) {
    if (object === null || object === undefined || isNaN(obhect)) {
        return '';
    }
    return object.toString();
};

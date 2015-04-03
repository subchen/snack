/**
 * @param {Date} date
 */
module.exports = function toJSON(date) {
    function f(n) {
        return (n < 10) ? '0' + n : n;
    }
    return date.getUTCFullYear() + '-' + f(date.getUTCMonth() + 1) + '-' + f(date.getUTCDate()) + ' ' + f(date.getUTCHours()) + ':' + f(date.getUTCMinutes()) + ':' + f(date.getUTCSeconds());
};

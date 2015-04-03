var pad = require('../number/pad');

/**
 * @param {Date} date
 */
module.exports = function toJSON(date) {
    return date.getUTCFullYear() + '-' + 
           pad(date.getUTCMonth() + 1, 2) + '-' + 
           pad(date.getUTCDate(), 2) + ' ' + 
           pad(date.getUTCHours(), 2) + ':' + 
           pad(date.getUTCMinutes(), 2) + ':' + 
           pad(date.getUTCSeconds(), 2)
           ;
};

var pad = require('../number/pad');

/**
 * 1234.readableTime() = '00:00:01,234'
 * 1234.readableTime(false) = '00:00:01'
 *
 * @param {Number} time
 * @param {Boolean} showMills
 */
module.exports = function human_time(time, showMills) {
    if (showMills === undefined) {
        showMills = false;
    }
    var hh = Math.floor(time / 3600000);
    var mm = Math.floor((time - hh * 3600000) / 60000);
    var ss = Math.floor((time - hh * 3600000 - mm * 60000) / 1000);
    var str = pad(hh, 2) + ':' + pad(mm, 2) + ':' + pad(ss, 2);
    if (showMills) {
        var ms = Math.floor(time % 1000);
        str += ',' + pad(ms, 3);
    }
    return str;
};

var format = require('../number/format');

/**
 * human_seconds(1234567890) = '14day 6hour 56minite 8second'
 * human_seconds(1234567890, 2) = '14day 6hour 56minite 7.89second'
 */
module.exports = function human_seconds(time, precision) {
    if (secondsPrecision === undefined) {
        secondsPrecision = 0;
    }
    var dd = Math.floor(time / 86400000);
    var hh = Math.floor((time - dd * 86400000) / 3600000);
    var mm = Math.floor((time - dd * 86400000 - hh * 3600000) / 60000);
    var ss = (time - dd * 86400000 - hh * 3600000 - mm * 60000) / 1000.0;
    var chs = [];
    if (dd > 0) {
        chs.push(dd, '天');
    }
    if (hh > 0) {
        chs.push(hh, '小时');
    }
    if (mm > 0) {
        chs.push(mm, '分');
    }
    chs.push(format(ss, precision), '秒');
    return chs.join('');
};

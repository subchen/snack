/**
 * 返回友好的时间（如:10分钟前)
 *
 * @param {Date} date
 * @returns {String}
*/
module.exports = function human_time(date) {
    var t = (new Date().getTime() - date.getTime()) / 1000;
    if (t < 60) {
        return "刚刚";
    } else if (t < 3600) {
        return Math.floor(t / 60) + "分钟前";
    } else if (t < 86400) {
        return Math.floor(t / 3600) + "小时前";
    } else if (t < 604800) {
        var day = Math.floor(t / 86400);
        return (day < 2 ? "昨天" : day + "天前");
    }
    return date.toLocaleDateString();
};

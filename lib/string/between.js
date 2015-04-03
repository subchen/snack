/**
  * between("abccba", "a") === "bccb"
  * between("abccba", "a", "c") === "b"
  * 
  * @param {String} open
  * @param {String} close
  * @returns {String} null if not found
  */
module.exports = function between(str, open, close) {
    var start = str.indexOf(open);
    if (start !== -1) {
        close = close || open;
        var end = str.indexOf(close, start + open.length);
        if (end !== -1) {
            return str.substring(start + open.length, end);
        }
    }
    return null;
};

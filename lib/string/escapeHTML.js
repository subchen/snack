var escapeChars = {
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: "'"
};

var reversedEscapeChars = {};
for(var key in escapeChars) {
    reversedEscapeChars[escapeChars[key]] = key;
}
reversedEscapeChars["'"] = '#39';

module.exports = function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(m) {
        return '&' + reversedEscapeChars[m] + ';';
    });
};

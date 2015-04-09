var escapeChars = {
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: "'"
};

module.exports = function unescapeHTML(str) {
    return str.replace(/\&([^;]+);/g, function(entity, entityCode) {
        if (entityCode in escapeChars) {
            return escapeChars[entityCode];
        }

        var match = entityCode.match(/^#x([\da-fA-F]+)$/)
        if (match) {
            return String.fromCharCode(parseInt(match[1], 16));
        }

        match = entityCode.match(/^#(\d+)$/);
        if (match) {
            return String.fromCharCode(~~match[1]);
        }

        return entity;
    });
};

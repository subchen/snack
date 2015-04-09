module.exports = function truncate(str, length, truncateStr) {
    truncateStr = truncateStr || '...';
    return str.length > length ? str.slice(0, length) + truncateStr : str;
};

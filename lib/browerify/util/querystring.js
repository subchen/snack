'use strict';

var window = require('window');

module.exports = function queryString() {
    var str = window.location.search;
    if (typeof str !== 'string') {
        return {};
    }

    str = str.trim().replace(/^(\?|#)/, '');
    if (!str) {
        return {};
    }

    return str.trim().split('&').reduce(function(map, param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = parts[0];
        var val = parts[1];

        key = decodeURIComponent(key);
        val = (val === undefined) ? null : decodeURIComponent(val);
        if (!map.hasOwnProperty(key)) {
            map[key] = val;
        } else if (Array.isArray(map[key])) {
            map[key].push(val);
        } else {
            map[key] = [map[key], val];
        }
        return map;
    }, {});
};

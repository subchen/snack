var window = require('window');

/**
 * 生成 namespace, 如果存在，则直接返回.
 * namespace("jetbrick.string") === window.jetbrick.string
 * namespace("jetbrick.string", root) === root.jetbrick.string
 *
 * @param {String} ns
 * @param {Object} context
 * @returns {Object}
 */
module.exports = function namespace(ns, context) {
    if (context === undefined) {
        context = window;
    }
    var names = ns.split('.');
    for (i = 0, len = names.length; i < len; i++) {
        var name = names[i];
        var ctx = context[name];
        if (ctx === undefined) {
            ctx = context[name] = {};
        }
        context = ctx;
    }
    return context;
};

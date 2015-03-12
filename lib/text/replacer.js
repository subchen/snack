'use strict';

/**
 * Usage:
 *
 * var replacer = require('replacer');
 * var template = 'name={{user.name}}, date={{ new Date() }}';
 * var model = {
 *     user: {
 *         name: 'sub'
 *     }
 * };
 * console.log(replacer(template, model); // name=sub, date=2015-02-13 12:00:00
 *
 * or
 * var replacer = require('replacer').scripts;
 * var replacer = require('replacer').create('<%', '%>');
 */


/**
 * Create replacer function with given prefix and suffix.
 * @param {String} prefix
 * @param {String} suffix
 * @returns {RegExp}
 */
function createReplacer(prefix, suffix) {
    'use strict';

    var ESCAPE_CHARS_REGEXP = /[\-|\\{}()\[\]\^$+*?.]/g;
    prefix = prefix.replace(ESCAPE_CHARS_REGEXP, '\\$&');
    suffix = suffix.replace(ESCAPE_CHARS_REGEXP, '\\$&');
    var pattern = new RegExp(prefix + '(.+?)' + suffix, 'g');

    /**
     * Template replace function.
     * @param {String} templateString
     * @param {Object} model
     * @return {String}
     */
    return function replacer(templateString, model) {
        model = model || {};
        return templateString.replace(pattern, function replacer(match, $1) {
            var source = 'with($$obj) { return ' + $1 + '; }';
            var fn = new Function('$$obj', source);
            return fn.call(this, model);
        });
    };
}

// exports replacer
module.exports = createReplacer('{{', '}}');
module.exports.scripts = createReplacer('<%', '%>');
module.exports.create = createReplacer;


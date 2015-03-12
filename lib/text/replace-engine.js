'use strict';

/**
 * Usage:
 *
 * var engine = require('replace-engine').defaults;
 * // var engine = require('replace-engine').create('<%', '%>');
 *
 * var source = 'name={{user.name}}, date={{ new Date() }}';
 * var data = {
 *     user: {
 *         name: 'sub'
 *     }
 * };
 * console.log(engine.replace(source, data)); // name=sub, date=2015-02-13 12:00:00
 *
 * var replacer = engine.compile(source);
 * console.log(replacer(data));
 */

/**
 * @exports
 */
module.exports = {
    defaults: new ReplaceEngine('{{', '}}'),
    scripts: new ReplaceEngine('<%', '%>'),
    create: function create(prefix, suffix) {
        return new ReplaceEngine(prefix, suffix);
    }
};

/**
 * Create replace engine with given prefix and suffix.
 * @class
 * @constructs
 * @param {String} prefix
 * @param {String} suffix
 */
function ReplaceEngine(prefix, suffix) {
    prefix = prefix || '{{';
    suffix = suffix || '}}';

    var ESCAPE_CHARS_REGEXP = /[\-|\\{}()\[\]\^$+*?.]/g;
    prefix = prefix.replace(ESCAPE_CHARS_REGEXP, '\\$&');
    suffix = suffix.replace(ESCAPE_CHARS_REGEXP, '\\$&');
    this.pattern = new RegExp(prefix + '(.+?)' + suffix, 'g');
}

/**
 * Replace a template string using data.
 * @param {String} templateString
 * @param {Object} data
 * @return {String} result
 */
ReplaceEngine.prototype.replace = function replace(templateString, data) {
    var replacer = this.compile(templateString);
    return replacer(data);
};

/**
 * Compile a template string as replacer function.
 * @param {String} templateString
 * @return {Function} a replacer function(data)
 */
ReplaceEngine.prototype.compile = function compile(templateString) {
    // generate source
    var s = [];
    var index = 0;
    templateString.replace(this.pattern, function(match, $1, offset) {
        if (index < offset) {
            s.push(JSON.stringify(templateString.slice(index, offset)));
        }
        s.push('(' + $1 + ')');
        index = offset + match.length;
    });
    if (index < templateString.length) {
        s.push(JSON.stringify(templateString.slice(index)));
    }

    // create render function
    var source = 'with($$obj) { return ' + s.join('+') + '; }';
    try {
        var render = new Function('$$obj', source);
        return function replacer(data) {
            return render.call(this, data);
        };
    } catch(e) {
        e.source = source;
        console.error(e);
        throw e;
    }
};

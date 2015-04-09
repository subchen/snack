var clone = require('clone');

/**
 * @example
 * options = defaults(options, {
 *   timeout: 100
 * });
 */

module.exports = function(options, defaults) {
    options = options || {};

    Object.keys(defaults).forEach(function(key) {
        if (options[key] === undefined) {
            options[key] = clone(defaults[key]);
        }
    });

    return options;
};

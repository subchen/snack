'use strict';

/**
 * Use the \ character to escape a character that has special meaning inside a regular expression.
 * 
 * @param {String} text
 * @return {String} escaped text
 */
module.exports = function escape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};


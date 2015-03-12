'use strict';

var doc = require('document');

/**
 * Get the current script's URL by throwing an `Error` and analyzing it.
 *
 * @returns String or `undefined`
 * @private
 */
function getCurrentScriptUrlFromErrorStack(stack) {
    var url, matches;
    if (typeof stack === "string" && stack) {
        matches = stack.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
        if (matches && matches[1]) {
            url = matches[1];
        } else {
            matches = stack.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
            if (matches && matches[1]) {
                url = matches[1];
            }
        }
    }
    return url;
}

/**
 * Get the current script's URL.
 *
 * @returns String or undefined
 */
function getCurrentScriptUrl() {
    if (doc.currentScript && doc.currentScript.src) {
        return doc.currentScript.src;
    }

    var scripts = doc.getElementsByTagName("script");
    if (scripts.length === 1) {
        return scripts[0].src || undefined;
    }
    var url;
    if ("readyState" in scripts[0]) {
        for (i = scripts.length; i--;) {
            if (scripts[i].readyState === "interactive" && (url = scripts[i].src)) {
                return url;
            }
        }
    }
    if (doc.readyState === "loading" && (url = scripts[scripts.length - 1].src)) {
        return url;
    }

    // Get the current script's URL by throwing an `Error` and analyzing it.
    try {
        throw new Error();
    } catch (e) {
        return e.sourceURL || e.fileName || getCurrentScriptUrlFromErrorStack(e.stack);
    }

    return undefined;
}

// exports
module.exports = getCurrentScriptUrl;

'use strict';

var nextTick;

if (typeof process === 'object' && typeof process.nextTick === 'function') {
    // Node.js
    nextTick = process.nextTick;
} else if (typeof setImmediate === 'function') {
    // W3C Draft
    // http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
    nextTick = setImmediate;
} else if (typeof setTimeout === 'function') {
    // Wide available standard
    nextTick = function nextTick(cb) { 
        setTimeout(cb, 0); 
    };
} else {
    // direct call
    nextTick = function nextTick(cb) { 
        cb();
    };
}

module.exports = nextTick;
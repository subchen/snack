define('lodash', function(require) {
    var window = require('window');
    
    if (typeof window._ === 'undefined') {
        throw new Error('lodash not found');
    }
    return window._;
});

define('jquery', function(require) {
    var window = require('window');
    
    if (typeof window.jQuery === 'undefined') {
        throw new Error('jQuery not found');
    }
    return window.jQuery;
});

define('angular', function(require) {
    var window = require('window');
    
    if (typeof window.angular === 'undefined') {
        throw new Error('angular.js not found');
    }
    return window.angular;
});

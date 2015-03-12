define('jquery', function(require) {
    var window = require('window');
    
    if (typeof window.jQuery === 'undefined') {
        throw new Error('jQuery not found');
    }
    return window.jQuery;
});
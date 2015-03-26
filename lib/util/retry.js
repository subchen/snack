var defaults = require('./defaults');

var defaultOptions = {
    retries: 10,
    interval: 1000
};

/**
 * function download(url, filename, callback) {
 *     var operation = retry.attemps(function() {
 *         ...
 *         if (error) {
 *             if (operation.retry()) {
 *                 return;
 *             }
 *             throw new Error([url, body]);
 *         }
 *         ...
 *     });
 * }
 */
module.exports.attemps = function attemps(fn, options) {
    var task = {
        fn: fn,
        options: defaults(options || {}, defaultOptions),
        count: 0
    };
    
    task.retry = function() {
        if (task.count++ >= task.options.retries) {
            return false;
        }
        setTimeout(task.fn, task.options.interval);
        return true;
    };
    
    fn();
    
    return task;
};

'use strict';

var es6 = require('es6-shim');

/**
 * var Q = require('es6-defer');
 * 
 * function fs_readFile(file, encoding, callback) {
 *   var deferred = Q.defer();
 *   fs.readFile(file, encoding, function (err, data) {
 *     if (err) {
 *       deferred.reject(err);
 *     } else {
 *       deferred.resolve(data);
 *     }
 *   });
 *   return deferred.promise.nodeify(callback);
 * }
 * 
 * 
 * var q = fs_readFile(...);
 * q.then(...)
 * 
 * or 
 * 
 * fs_readFile(..., function() {...});
 */
module.exports.defer = function defer() {
    var defered = {};
    var promise = new es6.Promise(function(resolve, reject) {
        defered.resolve = resolve;
        defered.reject = reject;
    });
    promise.nodeify = function nodeify(callback) {
        if (callback) {
            promise.then(function(value) {
                callback(null, value);
            }, function(error) {
                callback(error);
            });
        }
        return promise;
    };
    
    defered.promise = promise;

    return defered;
};


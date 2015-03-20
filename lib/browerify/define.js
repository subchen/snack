/**
 * # demo for define & require
 *
 * define('add', function(require, exports, module) {
 *     module.exports = function add(a, b) {
 *         return a+b;
 *     };
 * });
 *
 * or
 *
 * define('add', function() {
 *     return function add(a, b) {
 *         return a+b;
 *     };
 * });
 *
 * define('sum', function(require) {
 *     var add = require('add');
 *
 *     return function sum(x) {
 *         return x.reduce(function(total, a) {
 *              return add(total, a)
 *         }, 0);
 *     };
 * });
 *
 * var sum = require('sum');
 * console.log(sum([1,2,3,4]));
 */
 
(function(root) {
    'use strict';

    var modules = {};

    function define(name, factory) {
        modules[name] = {
            name: name,
            factory: factory,
            exports: {},
            resolved: false
        };
    }

    function require(name) {
        var module = modules[name];
        if (module === undefined) {
            throw new Error('cannot require module: ' + name);
        }
        if (!module.resolved) {
            var object = module.factory(require, module.exports, module);
            module.exports = object || module.exports;
            module.resolved = true;
        }
        return module.exports;
    }

    // build-in module for browser
    if (root.window === root) {
        define('window', function() {
            return root;
        });
        define('document', function(require) {
            var window = require('window');
            return window.document;
        });
    }

    // export global object
    root.snack = {
        define: define,
        require: require,
        modules: modules,
        root: root
    };

})(this);

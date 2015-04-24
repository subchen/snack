var Q = require('q');

var modules = {};

function require(name) {
    var module = modules[name];
    if (module === undefined) {
        throw new Error('cannot require module: ' + name);
    }
    if (!module.resolved) {
        module.factory(module.require.bind(module), module.exports, module);
        module.resolved = true;
    }
    return module.exports;
}

require.has = function has(name) {
    return modules[name] !== undefined;
};

function define(name, factory) {
    var module = modules[name] = new Module(name, factory);

    if (name === '_main_') {
        module.run();
    }
}

define('window', function(require, exports, module) {
    module.exports = window;
});
define('document', function(require, exports, module) {
    var window = require('window');
    module.exports = window.document;
});

function Module(name, factory) {
    this.name = name;
    this.dependencies = [];
    this.factory = factory;
    this.exports = {};
    this.resolved = false;
    this.defered = Q.defer();
}

Module.prototype.resolve = function(name) {
    if (require.has(name)) {
        return name;
    }
    return path.join(this.name, name);
};

Module.prototype.require = function(name) {
    return require(this.resolve(name));
};

Module.prototype.run = function() {
    var module = this;

    var document = require('document');
    module.name = document.location.pathname;

    var source = module.factory.toString();
    module.xhrGetDependencies(source);

    module.defered.promise.then(function() {
        module.factory.call(null, module.require.bind(module));
    }).catch(function(e) {
        console.error(e);
    });
};

var REQUIRE_REGEX = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g;

Module.prototype.xhrGetDependencies = function(source) {
    var module = this;

    source = source.replace(REQUIRE_REGEX, function(match, $1) {
        var name = module.resolve($1);
        module.dependencies.push(name);
        return match.replace($1, name);
    });

    var promises = module.dependencies.map(function(name) {
        if (require.has(name)) {
            return null;
        } else {
            return xhrGet(name);
        }
    });

    Q.all(promises).then(function() {
        module.defered.resolve(module.name);
    });

    return source;
};

function xhrGet(name) {
    var defered = Q.defer();

    var xhr = jQuery.get(name);
    xhr.done(function(data) {
        var module = new Module(name);
        var source = module.xhrGetDependencies(data);
        module.define(source);
        module.defered.promise.then(function() {
            defered.resolve(name);
        });
    });
    xhr.fail(function(xhr, status, error) {
        defered.reject(error);
    });

    return defered.promise;
}

Module.prototype.define = function(source) {
    source = '(function(require, exports, module) {\n' + source + '\n});\n//# sourceURL=' + this.name;
    this.factory = eval(source);
    modules[this.name] = this;
};

var path = {
    base: '/assets/js/',
    join: function(parent, name) {
        if (name.indexOf('./') !== 0) {
            parent = path.base;
        }
        return util.join(parent, name) + '.js';
    }
};

var util = {
    // Joins path segments.  Preserves initial "/" and resolves ".." and "."
    // Does not support using ".." to go above/outside the root.
    // This means that join("foo", "../../bar") will not resolve to "../bar"
    join: function join(url_var_args) {
        // Split the inputs into a list of path commands.
        var parts = [];
        for (var i = 0, l = arguments.length; i < l; i++) {
            parts = parts.concat(arguments[i].split('/'));
        }
        // Interpret the path commands to get the new resolved path.
        var newParts = [];
        for (i = 0, l = parts.length; i < l; i++) {
            var part = parts[i];
            // Remove leading and trailing slashes
            // Also remove "." segments
            if (!part || part === '.') continue;
            // Interpret ".." to pop the last segment
            if (part === '..') newParts.pop();
            // Push new path segments.
            else newParts.push(part);
        }
        // Preserve the initial slash if there was one.
        if (parts[0] === '') newParts.unshift('');
        // Turn back into a single string path.
        return newParts.join('/') || (newParts.length ? '/' : '.');
    }
};

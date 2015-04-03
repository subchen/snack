var path = require('path');
var _ = require('lodash');
var Iterator = require('./iterator');

var DEFAULT_OPTIONS = {
    required: false,
    args: 0
};

/**
 var argv = cli
    .option('h', 'host', 'target hostname/ip', true, 1)
    .option('', 'port', 'target port', false, 1, "22")
    .option('u', 'username', 'username for authentication', false, 1, 'admin')
    .option('p', 'password', 'password for authentication', false, 1, 'default')
    .option('f', 'file-list', 'file list to synchronize', false, 1, 'filelist.json')
    .parse();
 */

function CLI() {
    this.options = [];
}

CLI.prototype.option = function (flag, alias, desc, required, args, def) {
    var option;
    if (_.isPlainObject(flag)) {
        option = _.defaults(flag, DEFAULT_OPTIONS);
    } else {
        option = {
            flag: flag,
            alias: alias,
            desc: desc,
            required: required || false,
            args: args || 0,
            def: def
        };
    }
    this.options.push(option);
    return this;
};

CLI.prototype.parse = function () {
    var it = new Iterator(getOpts());
    var argv = {
        '*': []
    };

    this.option({
        alias: 'help',
        desc: 'display this help and exit'
    });

    while (it.hasNext()) {
        var opt = it.next();
        if (_.startsWith(opt, '--')) {
            this.parseOpt(it, opt, opt.slice(2), true, argv);
        } else if (_.startsWith(opt, '-')) {
            this.parseOpt(it, opt, opt.slice(1), false, argv);
        } else {
            argv['*'].push(opt);
        }
    }

    if (argv.help) {
        this.usage();
    }

    return this.validate(argv);
};


/**
 * @private
 */
CLI.prototype.parseOpt = function (it, arg, name, alias, argv) {
    var option = _.find(this.options, function (opt) {
        return alias ? (opt.alias === name) : (opt.flag === name);
    });

    if (option === undefined) {
        unknownOption(arg);
    }

    var name = getName(option);
    if (option.args === 0) {
        argv[name] = true;
        return;
    }

    if (it.hasNext()) {
        var value = it.next();
        if (_.startsWith(value, '-')) {
            missingOptionArgument(arg);
        }

        if (option.args === 1) {
            argv[name] = value;
        } else {
            argv[name] = argv[name] || [];
            argv[name].push(value);
        }
        return;
    }

    missingOptionArgument(arg);
};

/**
 * @private
 */
CLI.prototype.validate = function (argv) {
    this.options.forEach(function (option) {
        var name = getName(option);
        if (argv[name] === undefined) {
            if (option.required) {
                missingRequiredOption(option);
                return false;
            }
            if (option.def !== undefined) {
                argv[name] = option.def;
            }
        }
    });
    return argv;
};

CLI.prototype.usage = function () {
    var script = path.basename(process.argv[1]);
    console.log('Usage: node %s [options] ...', script);
    console.log();
    console.log('Options:');

    this.options.forEach(function (option) {
        var str = '  ';

        str += option.flag ? ('-' + option.flag) : '  ';
        if (option.alias) {
            str += option.flag ? ',' : ' ';
            str += ' --' + option.alias;
        }
        if (option.args > 0) {
            str += ' [args]';
        }

        str = _.padRight(str, 32, ' ');
        str += option.desc;
        if (option.def) {
            str += ' (default: ' + option.def + ')';
        }
        console.log(str);
    });
    console.log();

    process.exit(0);
};

function getOpts() {
    var it = new Iterator(process.argv.slice(2));
    var argv = [];
    while (it.hasNext()) {
        var opt = it.next();
        if (_.startsWith(opt, '--')) {
            var pos = opt.indexOf('=');
            if (pos === -1) {
                argv.push(opt);
            } else {
                argv.push(opt.slice(0, pos));
                argv.push(opt.slice(pos + 1));
            }
        } else if (_.startsWith(opt, '-')) {
            for (var i = 1; i < opt.length; i++) {
                argv.push('-' + opt.charAt(i));
            }
        } else {
            argv.push(opt);
        }
    }
    return argv;
}

function getName(option) {
    if (option.alias) {
        return _.camelCase(option.alias);
    }
    return option.flag;
}

function unknownOption(name) {
    console.error();
    console.error("  error: unknown option '%s'", name);
    console.error();
    process.exit(1);
}

function missingRequiredOption(option) {
    var name = '';
    if (option.flag) {
        name = '-' + option.flag;
    }
    if (option.alias) {
        if (name.length > 0) {
            name += ', ';
        }
        name += '--' + option.alias;
    }
    console.error();
    console.error("  error: option '%s' missing", name);
    console.error();
    process.exit(1);
}

function missingOptionArgument(name) {
    console.error();
    console.error("  error: option '%s' argument missing", name);
    console.error();
    process.exit(1);
}

module.exports = new CLI();

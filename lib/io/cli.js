'use strict';

var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var Q = require('Q');

function cliSpawn(command, args, options, callback) {
    var p = spawn(command, args, options);

    var res = {};
    p.stdout.on('data', function(data) {
        res.stdout = data;
    });
    p.stderr.on('data', function(data) {
        res.stderr = data;
    });

    var defered = Q.defer();
    p.on('exit', function(error) {
        if (error !== 0) {
            console.log('process exited with code ' + error);
        }
        res.error = error;
        defered.resolve(res);
    });
    return defered.promise.nodeify(callback);
}

function cliExec(command, options, callback) {
    var defered = Q.defer();
    var p = exec(command, options, function(error, stdout, stderr) {
        if (error !== null) {
            console.log('process exited with error ' + error);
        }

        var res = {};
        res.error = error;
        res.stdout = stdout;
        res.stderr = stderr;

        defered.resolve(res);
    });
    return defered.promise.nodeify(callback);
}


// exports
module.exports.spawn = cliSpawn;
module.exports.exec = cliExec;
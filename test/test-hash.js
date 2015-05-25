var assert = require('chai').assert;
var crypto = require('../lib/crypto/');

/* jshint mocha: true */
describe('crypto hash', function() {

    var equal = assert.strictEqual;

    describe('#md5()', function() {
        it('Returns a md5 hash string', function() {
            var md5 = crypto.md5;
            equal(md5(''), 'd41d8cd98f00b204e9800998ecf8427e');
            equal(md5('admin'), '21232f297a57a5a743894a0e4a801fc3');
            equal(md5('123'), '202cb962ac59075b964b07152d234b70');
        });
    });
    
    describe('#sha1()', function() {
        it('Returns a sha1 hash string', function() {
            var sha1 = crypto.sha1;
            equal(sha1(''), 'da39a3ee5e6b4b0d3255bfef95601890afd80709');
            equal(sha1('admin'), 'd033e22ae348aeb5660fc2140aec35850c4da997');
            equal(sha1('123'), '40bd001563085fc35165329ea1ff5c5ecbdbbeef');
        });
    });
    
    describe('#sha256()', function() {
        it('Returns a sha256 hash string', function() {
            var sha256 = crypto.sha256;
            equal(sha256(''), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
            equal(sha256('admin'), '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');
            equal(sha256('123'), 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3');
        });
    });
});

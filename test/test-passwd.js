var assert = require('chai').assert;
var crypto = require('../lib/crypto/');

/* jshint mocha: true */
describe('crypto passwd', function() {

    describe('#hash()', function() {
        it('Returns a hash string for the password', function() {
            var passwd = crypto.passwd;
            assert.lengthOf(passwd.hash(''), 32);
            assert.lengthOf(passwd.hash('admin'), 32);
            assert.lengthOf(passwd.hash('123'), 32);
            assert.lengthOf(passwd.hash('中文'), 32);
        });
    });

    describe('#check()', function() {
        it('Checks the password is currectly', function() {
            var passwd = crypto.passwd;
            assert.isTrue(passwd.check('', '03c879c6e0b9739d0754f881bb7e5f58'));
            assert.isTrue(passwd.check('admin', '7e798faac2a12f83ecbfc3e360cc738f'));
            assert.isTrue(passwd.check('123', '3ed2154055328c8c6a577fc6c2478012'));
            assert.isTrue(passwd.check('中文', '3c9116e0a8ca88212c9d0b97dbcc6d1b'));
        });
    });
    
});

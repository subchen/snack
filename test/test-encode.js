var assert = require('chai').assert;
var crypto = require('../lib/crypto/');

/* jshint mocha: true */
describe('crypto encode/decode', function() {

    var equal = assert.strictEqual;

    describe('#hex()', function() {
        it('Returns a hex string', function() {
            var hex = crypto.hex;
            equal(hex(''), '');
            equal(hex('admin'), '61646d696e');
            equal(hex('123'), '313233');
            equal(hex('中文'), 'e4b8ade69687');
        });
    });

    describe('#base64.encode()', function() {
        it('Encodes base64 string', function() {
            var base64 = crypto.base64;
            equal(base64.encode(''), '');
            equal(base64.encode('admin'), 'YWRtaW4=');
            equal(base64.encode('123'), 'MTIz');
            equal(base64.encode('中文'), '5Lit5paH');
        });
    });
    
    describe('#base64.decode()', function() {
        it('Decodes base64 string', function() {
            var base64 = crypto.base64;
            equal(base64.decode(''), '');
            equal(base64.decode('YWRtaW4='), 'admin');
            equal(base64.decode('MTIz'), '123');
            equal(base64.decode('5Lit5paH'), '中文');
        });
    });
});

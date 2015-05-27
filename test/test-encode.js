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

    describe('#base62.encode()', function() {
        it('Encodes base62 string', function() {
            var base62 = crypto.base62;
            equal(base62.encode(''), '');
            equal(base62.encode('admin'), '7MaYPFu');
            equal(base62.encode('123'), 'DWjr');
            equal(base62.encode('中文'), '19PTglOr9');
        });
    });
    describe('#base62.decode()', function() {
        it('Decodes base62 string', function() {
            var base62 = crypto.base62;
            equal(base62.decode(''), '');
            equal(base62.decode('7MaYPFu'), 'admin');
            equal(base62.decode('DWjr'), '123');
            equal(base62.decode('19PTglOr9'), '中文');
        });
    });

    describe('#base58.encode()', function() {
        it('Encodes base58 string', function() {
            var base58 = crypto.base58;
            equal(base58.encode(''), '');
            equal(base58.encode('admin'), 'BzJT2Y5');
            equal(base58.encode('123'), 'HXRC');
            equal(base58.encode('中文'), '2xu16HBbU');
        });
    });
    describe('#base58.decode()', function() {
        it('Decodes base58 string', function() {
            var base58 = crypto.base58;
            equal(base58.decode(''), '');
            equal(base58.decode('BzJT2Y5'), 'admin');
            equal(base58.decode('HXRC'), '123');
            equal(base58.decode('2xu16HBbU'), '中文');
        });
    });
});

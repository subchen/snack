var dasherize = require('./dasherize');
var toString = require('./toString');

/**
 * @example
 *
 * slugify('Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/') 
 *     === 'jack-jill-like-numbers-1-2-3-and-4-and-silly-characters'    
 * slugify('Un éléphant à l\'orée du bois') 
 *     === 'un-elephant-a-l-oree-du-bois'
 * slugify('I know latin characters: á í ó ú ç ã õ ñ ü ă ș ț') 
 *     === 'i-know-latin-characters-a-i-o-u-c-a-o-n-u-a-s-t'
 * slugify('I am a word too, even though I am but a single letter: i!') 
 *     === 'i-am-a-word-too-even-though-i-am-but-a-single-letter-i'
 * slugify('Some asian 天地人 characters') === 'some-asian-characters'
 * slugify('') === ''
 * slugify(null) === ''
 * slugify(undefined) === ''
 */
module.exports = function slugify(string) {
    var from  = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",
        to    = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz",
        regex = new RegExp('[' + from + ']', 'g');

    string = toString(string).toLowerCase().replace(regex, function(c) {
        var index = from.indexOf(c);
        return to.charAt(index) || '-';
    });

    return dasherize(string.replace(/[^\w\s-]/g, '-')), '-').trim();
};

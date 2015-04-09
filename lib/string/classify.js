/**
 * @example
 *
 * classify('some_class_name') === 'SomeClassName'
 * classify('my wonderfull class_name') === 'MyWonderfullClassName'
 * classify('my wonderfull.class.name') === 'MyWonderfullClassName'
 * classify('myLittleCamel') === 'MyLittleCamel'
 * classify('myLittleCamel.class.name') === 'MyLittleCamelClassName'
 * classify(123) === '123'
 * classify('') === ''
 * classify(null) === ''
 * classify(undefined) === ''
 */
module.exports = function classify(string) {
    string = toString(string);
    return capitalize(camelize(string.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};

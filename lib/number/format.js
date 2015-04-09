
/**
 * @static
 * @param {number} number
 * @param {number} [dec=0]
 * @returns formatted number
 *
 * @example
 *
 * format(9000) === '9,000'
 * format(9000, 0) === '9,000'
 * format(9000, 0, '', '') === '9000'
 * format(90000, 2) === '90,000.00'
 * format(1000.754) === '1,001'
 * format(1000.754, 2) === '1,000.75'
 * format(1000.755, 2) === '1,000.75'
 * format(1000.756, 2) === '1,000.76'
 * format(1000000000) === '1,000,000,000'
 * format(100000000) === '100,000,000'
 * format('not number') === ''
 * format() === ''
 * format(null, '.', ',') === ''
 * format(undefined, '.', ',') === ''
 * format(new Number(5000)) === '5,000'
 */
module.exports = function format(number, dec) {
    if (isNaN(number) || number == null) return '';

    number = number.toFixed(~~dec);

    var parts = number.split('.'),
        fnums = parts[0],
        decimals = parts[1] ? '.' + parts[1] : '';

    return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + decimals;
};

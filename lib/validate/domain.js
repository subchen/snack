/**
 * http://stackoverflow.com/questions/17986371/regular-expression-to-validate-fqdn-in-c-sharp-and-javascript
 * 
 * ^                      # Start of string
 * (?=.{1,254}$)          # Assert length of string: 1-254 characters
 * (                      # Match the following group (domain name segment):
 *  (?=[a-z0-9-]{1,63}\.) # Assert length of group: 1-63 characters
 *  (xn--)?               # Allow punycode notation
 *  [a-z0-9]+             # Match letters/digits
 *  (-[a-z0-9]+)*         # optionally followed by dash-separated letters/digits
 *  \.                    # followed by a dot.
 * )+                     # Repeat this as needed (at least one match is required)
 * [a-z]{2,63}            # Match the TLD (at least 2 characters)
 * $                      # End of string
 * 
 */
define('validation/domain', function(require, exports, module) {
    var regex = /^(?=.{1,254}$)((?=[a-z0-9\-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/i;

    module.exports = function validate_domain(value) {
        return regex.test(value);
    };
});

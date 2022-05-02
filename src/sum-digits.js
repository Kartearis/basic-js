const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nstr = n.toString();
  if (nstr.length > 1) {
    let sum = nstr.split('').reduce((s,x) => s + parseInt(x), 0);
    if (sum.toString().length > 1)
      return getSumOfDigits(sum);
    else return sum;
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strn = n.toString();
  let max = parseInt(strn.slice(1));
  for (let i = 0; i < strn.length; i++) {
    let newn = strn.slice(0, i) + strn.slice(i+1);
    if (parseInt(newn) > max) max = parseInt(newn);
  }
  return max;
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sa1 = s1.split('');
  let sa2 = s2.split('');
  let cnt = 0;
  for (let c of sa1) {
    let i = sa2.indexOf(c);
    if (i === -1) continue;
    cnt++;
    sa2.splice(i, 1);
  }
  return cnt;
}

module.exports = {
  getCommonCharacterCount
};

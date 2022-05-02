const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let prev = "";
  let cnt = 0;
  let res = "";
  for (let c of str) {
    if (prev === c)
      cnt++;
    else if (prev === "")
    {
      prev = c;
      cnt = 1;
    }
    else {
      res += `${cnt > 1 ? cnt : ""}${prev}`;
      cnt = 1;
      prev = c;
    }
  }
  return res + `${cnt > 1 ? cnt : ""}${prev}`;
}

module.exports = {
  encodeLine
};
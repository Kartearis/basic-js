const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  console.log(backyard);
  return backyard.reduce((s, x) => s + x.reduce((ss, y) => ss + (y === '^^' ? 1 : 0), 0), 0);
}

module.exports = {
  countCats
};

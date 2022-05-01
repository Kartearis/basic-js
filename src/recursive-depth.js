const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    let baseDepth = depth + 1;
    let maxDepth = baseDepth;
    for (let el of arr)
      if (Array.isArray(el))
      {
        let localDepth = this.calculateDepth(el, baseDepth);
        if (localDepth > maxDepth) maxDepth = localDepth;
      }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
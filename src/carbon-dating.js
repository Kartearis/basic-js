const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
  if (typeof activity !== 'string') return false;
  let a = parseFloat(activity);
  if (isNaN(a)) return false;
  if (a >= 15 || a <= 0) return false;
  let rate = MODERN_ACTIVITY / a;
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(rate) / k);
}

module.exports = {
  dateSample
};


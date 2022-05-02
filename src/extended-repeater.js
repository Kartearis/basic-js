const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = "";
  if (options.addition === undefined) options.addition = "";
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options === undefined || options.repeatTimes === undefined) return str;
  for (let i = 0; i < options.repeatTimes; i++)
  {
    res += str;
    let flag = false;
    for (let j = 0; j < options.additionRepeatTimes; j++)
      if (!flag) {
        flag = true;
        res+=options.addition;
      }
      else res += options.additionSeparator + options.addition;
    if (i !== (options.repeatTimes - 1))
      res += options.separator ? options.separator : "";

  }
  return res;
}

module.exports = {
  repeater
};

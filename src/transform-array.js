const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let action = "none";
  let prevDiscarded = false;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (action !== "none")
      switch (action) {
        case "--discard-next": action = "none"; prevDiscarded = true; break;
        case "--discard-prev":
          action = "none";
          newArr.pop();
          newArr.push(arr[i]);
          break;
        case "--double-next": action = "none"; newArr.push(arr[i]); newArr.push(arr[i]); break;
        case "--double-prev":
          action = "none";
          if (newArr.length > 0)
            newArr.push(newArr[newArr.length - 1]);
          newArr.push(arr[i]);
          break;
      }
    else if (typeof(arr[i]) === 'string' && arr[i].match(/^(--discard-next|--discard-prev|--double-next|--double-prev)$/)) {
      if (prevDiscarded) {
        prevDiscarded = false;
        if (arr[i].includes("-prev"))
          continue;
      }
      action = arr[i];
    }
    else {
      if (prevDiscarded)
        prevDiscarded = false;
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = {
  transform
};

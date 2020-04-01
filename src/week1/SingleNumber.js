/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = nums.reduce(function(acc, v) {
    if (acc[v] === undefined) {
      acc[v] = 0;
    }
    acc[v]++;
    return acc;
  }, {});
  return Object.keys(map)[Object.values(map).indexOf(1)];
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));

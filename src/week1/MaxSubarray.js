/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    let maxAmongMax = -Infinity;
    let max = 0;
    nums.forEach(a => {
        max = Math.max(max + a, a);
        maxAmongMax =Math.max(maxAmongMax, max);
    });
    return maxAmongMax;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([1]));
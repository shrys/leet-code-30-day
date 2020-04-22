/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    let i;
    let j = 0;
    let sum = 0;
    const prevSum = {};
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === k) {
            j++;
        }
        if (prevSum[sum - k] !== undefined) {
            j += prevSum[sum - k];
        }
        if (prevSum[sum] === undefined) {
            prevSum[sum] = 0;
        }
        prevSum[sum]++;
    }
    return j;
};

console.log(subarraySum([1, 1, 1], 2));

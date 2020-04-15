/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
    const res = [1];
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let k = nums.length - 1; k >= 0; k--) {
        res[k] = res[k] * right;
        right = right * nums[k];
    }
    return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));

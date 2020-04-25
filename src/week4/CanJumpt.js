/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
    let maxReachable = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReachable) {
            return false;
        }
        maxReachable = Math.max(i + nums[i], maxReachable)
    }

    return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

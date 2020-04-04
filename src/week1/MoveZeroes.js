/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    let i = nums.length - 1;
    while (i--) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1)[0]);
        }
    }
    console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 0, 1]);
moveZeroes([1]);
moveZeroes([1, 0]);
moveZeroes([1, 0, 1]);
moveZeroes([0]);
moveZeroes([0, 1]);
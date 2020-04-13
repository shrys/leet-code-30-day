/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = nums => {
    const sum = new Map();
    let s = 0;
    let longest = 0;
    sum.set(0, -1); // put 0 to the left
    for (i = 0; i < nums.length; ++i) {
        if (nums[i] == 0) {
            s += -1;
        } else {
            s += 1;
        }

        if (sum.has(s)) {
            longest = Math.max(longest, i - sum.get(s));
        } else {
            sum.set(s, i);
        }
    }

    return longest;
};

console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1, 0]));

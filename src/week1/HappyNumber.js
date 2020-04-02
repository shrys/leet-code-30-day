/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = n => {
    const splitResult = num => {
        const arr = num.toString().split('');
        return arr.reduce((acc, v) => acc + v * v, 0);
    }
    const arr = [];
    while (true) {
        n = splitResult(n);
        if (n === 1) {
            return true;
        } else if (arr.indexOf(n) > -1) {
            return false;
        }
        arr.push(n);
    }
};

console.log(isHappy(18));
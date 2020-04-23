/**
* @param {number} m
* @param {number} n
* @return {number}
*/
const rangeBitwiseAnd = (m, n) => {
    let shift = 0;
    while (m < n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }
    return m << shift;
};

console.log(rangeBitwiseAnd(5, 7));
console.log(rangeBitwiseAnd(0, 1));

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = (s, shift) => {
    let str = s.split('');
    shift.forEach(([d, c]) => {
        if (d === 1) {
            str = [...str.splice(str.length - c, c), ...str];
        } else {
            str.push(...str.splice(0, c));
        }
    });
    return str.join('');
};

console.log(stringShift("abc", [[0, 1], [1, 2]]));
console.log(stringShift("abcdefg", [[1, 1], [1, 1], [0, 2], [1, 3]]));

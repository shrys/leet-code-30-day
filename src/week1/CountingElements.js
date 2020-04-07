/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = arr => arr.reduce((count, element) => count + (arr.indexOf(element + 1) > -1 ? 1 : 0), 0);

console.log(countElements([1, 2, 3]));
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7]));
console.log(countElements([1, 3, 2, 3, 5, 0]));
console.log(countElements([1, 1, 2, 2]));
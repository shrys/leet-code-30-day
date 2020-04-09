/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
    const process = str => str.split('').reduce((s, a) => a === '#' ? s.slice(0, s.length - 1) : s + a, '');
    return process(S) === process(T);
};

console.log(backspaceCompare("ab#c", "ad#c"));

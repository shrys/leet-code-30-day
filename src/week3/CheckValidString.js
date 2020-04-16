/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = s => {
    let low = 0;
    let high = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(') {
            low++;
            high++;
        } else {
            if (low > 0) {
                low--;
            }
            if (s.charAt(i) == ')') {
                high--;
            } else {
                high++;
            }
        }
        if (high < 0) {
            return false;
        }
    }
    return low == 0;
};

console.log(checkValidString('()'));
console.log(checkValidString('(*)'));
console.log(checkValidString('(*))'));
console.log(checkValidString('())'));
console.log(checkValidString('(*()'));
console.log(checkValidString('(((******)))'));
console.log(checkValidString('(((***)*(**)))'));
console.log(checkValidString('(((******))'));
console.log(checkValidString('(((*(((*)(****))'));

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = stones => {
    const spliceMax = a => a.splice(a.indexOf(Math.max(...a)), 1)[0];
    let abs;
    while (stones.length > 1) {
        abs = Math.abs(spliceMax(stones) - spliceMax(stones));
        if (abs > 0) {
            stones.push(abs);
        }
    }
    return stones.length === 1 ? stones[0] : 0;
};


console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([8, 10, 4]));
console.log(lastStoneWeight([7, 6, 7, 6, 9]));

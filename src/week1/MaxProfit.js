/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    return prices.reduce((profit, _, i) => (i > 0 && (profit += Math.max(prices[i] - prices[i - 1], 0)), profit), 0);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
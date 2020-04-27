/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = matrix => {
    if (matrix.length === 0) return 0;
    
    let max = 0;
    let dp = Array(matrix.length + 1)
        .fill(1)
        .map((_, i) => Array(matrix[0].length + 1).fill(0));

    for (let i = 1; i <= matrix.length; i++) {
        for (let j = 1; j <= matrix[0].length; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }

    return max * max;
};

console.log(maximalSquare(
    [
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"]
    ]
));
console.log(maximalSquare([]));

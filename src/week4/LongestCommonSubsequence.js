/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
    const m = text1.length;
    const n = text2.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        const next = new Array(n + 1).fill(0);
        for (let j = 1; j <= n; j++) {
            next[j] = (() => {
                if (text1[i - 1] === text2[j - 1]) {
                    return dp[j - 1] + 1;
                }
                return Math.max(dp[j], next[j - 1], dp[j - 1]);
            })();
        }
        dp = next;
    }
    return dp[n];
};

console.log(longestCommonSubsequence('abc', 'abc'));
console.log(longestCommonSubsequence('abc', 'def'));

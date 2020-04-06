/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs =>
    Object.values(
        strs.reduce(
            (dict, str) => {
                const key = str.split('').sort().join('');
                if (dict[key] === undefined) {
                    dict[key] = [str];
                } else {
                    dict[key].push(str);
                }
                return dict;
            }, {}
        )
    );


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/


var longestCommonPrefix = function(strs) {
    let prefix = "";
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) return prefix;
        }
        prefix += char;
    }
    return prefix;
};


var longestCommonPrefix2 = function(strs) {
    // sort strs array and compare first and last elements
    // if they have a common prefix, return it
    // if not, return ""
    if (!strs.length) return "";
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && first[i] === last[i]) i++;
    return first.slice(0, i);
};


console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""

console.log(longestCommonPrefix2(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix2(["dog","racecar","car"])); // ""

export default longestCommonPrefix;

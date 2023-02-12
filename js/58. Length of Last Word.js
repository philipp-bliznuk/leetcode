// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/


var lengthOfLastWord = function(s) {
    let length = 0;
    let cursor = s.length - 1;

    while (cursor >= 0 && s[cursor] === " ") {
        cursor--;
    }

    while (cursor >= 0 && s[cursor] !== " ") {
        length++;
        cursor--;
    }

    return length;
};


console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("a ")); // 1
console.log(lengthOfLastWord("a")); // 1
console.log(lengthOfLastWord(" ")); // 0

// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/


var isPalindrome = function(x) {
    if (x < 0) {return false}
    let original = x
    let digit, reversed = 0
    while (x) {
        digit = x % 10
        reversed = (reversed * 10) + digit
        x = x / 10 | 0
    }
    return original === reversed
};


var isPalindrome2 = function(x) {
    // pretty much the same as above, but with a few optimizations
    if (x < 0) {return false}
    let i = 1
    let digit, reversed = 0
    let originalLength = Math.floor(Math.log10(x)) + 1
    if (originalLength === 1) { return true}
    let isEven = originalLength % 2 === 0
    let half = isEven ? originalLength / 2 : (originalLength - 1) / 2
    while (x) {
        digit = x % 10
        reversed = (reversed * 10) + digit
        x = Math.floor(x / 10)
        if (i === half) {
            return isEven ? x === reversed : Math.floor(x / 10) === reversed
        }        
        i++
    }
    return x === reversed
};


let x = 123321
console.log(isPalindrome(x));
console.log(isPalindrome2(x));

let y = 1235321
console.log(isPalindrome(y));
console.log(isPalindrome2(y));

let z = 12356321
console.log(isPalindrome(z));
console.log(isPalindrome2(z));

export default isPalindrome;

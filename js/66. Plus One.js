// 66. Plus One
// https://leetcode.com/problems/plus-one/


var plusOne = function(digits) {
    let cursor = digits.length - 1;
    let carry = 1;

    while (cursor >= 0) {
        let sum = digits[cursor] + carry;
        digits[cursor] = sum % 10;
        carry = Math.floor(sum / 10);
        cursor--;
    }

    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
};


console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([4,3,2,1])); // [4,3,2,2]
console.log(plusOne([0])); // [1]
console.log(plusOne([9])); // [1,0]

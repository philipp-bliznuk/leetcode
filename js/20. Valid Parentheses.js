// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/


var isValid = function(s) {
    let stack = [];
    let map = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("]")); // false
console.log(isValid("[")); // false
console.log(isValid("")); // true

export default isValid;

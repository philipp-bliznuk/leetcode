// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/


const romanNumbers = ["I", "V", "X", "L", "C", "D", "M"]
const decimalNumbers = [1, 5, 10, 50, 100, 500, 1000]

const romanToInt = function(s) {
    const symbols = s.split("")
    let result = []

    symbols.forEach((element, i) => {
        let next = symbols[i + 1]
        let index = romanNumbers.indexOf(element)
        let next_index = romanNumbers.indexOf(next) || 0
        let num = decimalNumbers[index]
        let offcet = next_index - index

        if ((index % 2 === 0) && (0 < offcet && offcet < 3)) {
            result.push(-num)
        } else {
            result.push(num)
        }
    });

    return result.reduce((a, b) => a + b, 0)
};


function getDecimal(r) {
    switch (r) {
        case "I": return 1;
        case "V": return 5;
        case "X": return 10;
        case "L": return 50;
        case "C": return 100;
        case "D": return 500;
        case "M": return 1000;
        default: return 0;
    }
};


const romanToInt2 = function(s) {
    let sum = 0
    for (let i = 0; i < s.length; i ++) {
        let current = getDecimal(s[i])
        let next = getDecimal(s[i + 1])

        if (next > current) {
            sum -= current
        } else {
            sum += current
        }
    }

    return sum
};


const romanToInt3 = function(s) {
    let sum = 0
    s = s.replace(/IV|IX|XL|XC|CD|CM/g, match => {
        switch (match) {
            case "IV": return "IIII";
            case "IX": return "VIIII";
            case "XL": return "XXXX";
            case "XC": return "LXXXX";
            case "CD": return "CCCC";
            case "CM": return "DCCCC";
        }
    });
    for (let i = 0; i < s.length; i++) {
        sum += getDecimal(s[i])
    }
    return sum
};


const s = "MCMXCIV";
console.log(romanToInt(s))
console.log(romanToInt2(s))
console.log(romanToInt3(s))


export default romanToInt;

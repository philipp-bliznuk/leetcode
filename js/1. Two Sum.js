// 1. Two Sum
// https://leetcode.com/problems/two-sum/


var twoSum = function(nums, target) {
    for (let current = 0; current < nums.length; current++) {
        for (let runner = current + 1; runner < nums.length; runner++) {
            if (nums[current] + nums[runner] === target) {
                return [current, runner]
            }
        }
    }
};

var twoSum2 = function(nums, target) {
    let diffs = new Map();
    for (let i = 0; i < nums.length; i ++) {
        if (diffs.has(nums[i])) {
            return [diffs.get(nums[i]), i]
        }
        diffs.set(target - nums[i], i)
    }
};


let nums = [2,7,11,15]
let target = 9

console.log(twoSum(nums, target))
console.log(twoSum2(nums, target))

export default twoSum;

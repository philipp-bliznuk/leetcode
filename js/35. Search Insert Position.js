// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/


var searchInsert = function(nums, target) {
    let cursor = 0;
    for (let runner = 0; runner < nums.length; runner++) {
        if (nums[runner] >= target) {
            return cursor;
        }
        cursor++;
    }
    return cursor;
};


console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 0)); // 0

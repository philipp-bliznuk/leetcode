// 27. Remove Element
// https://leetcode.com/problems/remove-element/


var removeElement = function(nums, val) {
    let cursor = 0;
    for (let runner = 0; runner < nums.length; runner++) {
        if (nums[runner] !== val) {
            nums[cursor] = nums[runner];
            cursor++;
        }
    }
    return cursor;
};


console.log(removeElement([3,2,2,3], 3)); // 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5

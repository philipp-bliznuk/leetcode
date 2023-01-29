// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/


// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.


var removeDuplicates = function(nums) {
    let cursor = 0;
    for (let runner = 1; runner < nums.length; runner++) {
        if (nums[cursor] !== nums[runner]) {
            cursor++;
            nums[cursor] = nums[runner];
        }
    }
    return cursor + 1;
};


console.log(removeDuplicates([1,1,2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5

export default removeDuplicates;

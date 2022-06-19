/**
 * @param {number[]} nums - Array of integers for which to remove val
 * @param {number} val - Integer value to be removed from nums
 * @return {number} - Size of array after removing num from nums
 */
var removeElement = function(nums, val) {
    
    var removed = 0;
    for (var i = 0; i < nums.length; i++) {
        nums[i - removed] = nums[i];
        if (nums[i] === val) {
            removed++;
        }
    }
    return nums.length - removed;
};
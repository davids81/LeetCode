/**
 * Search for the target value in nums.  If not found, return the position where it should be inserted
 * Must run in O(log n) runtime complexity
 * @param {number[]} nums - array for which to find target
 * @param {number} target - value to search within array
 * @return {number} - insert position index or index where found
 */
var searchInsert = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    
    while (low <= high) {
        var mid = Math.floor((high + low) / 2);
        if (target < nums[mid]) {
            high = mid - 1;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    if (target < nums[mid]) {
        return mid;
    } else {
        return mid + 1;
    }
};
/**
 * @param {number[]} nums - Array of integers for which to search for the maximum sub array
 * @return {number} - Maximum value within nums
 */
var maxSubArray = function(nums) {
    var max_so_far = Number.MIN_SAFE_INTEGER;
    var max_ending_here = 0;

    for (var i = 0; i < nums.length; i++) {
        max_ending_here += nums[i];
        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
        }
        if (max_ending_here < 0) {
            max_ending_here = 0;
        }
    }
    return max_so_far;
};

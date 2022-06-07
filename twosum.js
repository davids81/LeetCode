/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Initial solution was faster than ~25% of all submissions
/*var twoSum = function(nums, target) {
    for (firstNum = 0; firstNum < nums.length; firstNum++) {
        for (secondNum = firstNum + 1; secondNum < nums.length; secondNum++) {
            if (nums[firstNum] + nums[secondNum] == target) {
                return [firstNum, secondNum];
            }
        }
        
    }
};*/

// Second solution was faster than 67% of all submissions
var twoSum = function(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i] ;
        }
        map.set(nums[i], i);
    }
    return null;
};
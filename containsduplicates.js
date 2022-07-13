
/**
 * @param {number[]} nums - Array of integers to check if any duplicates exist
 * @return {boolean} - true if a duplicate exists, false otherwise
 */
var containsDuplicateNaive = function(nums) {
    nums.sort();
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};

/**
 * @param {number[]} nums - Array of integers to check if any duplicates exist
 * @return {boolean} - true if a duplicate exists, false otherwise
 */
var containsDuplicateWithSet = function(nums) {
    var numsSet = new Set(nums);
    if (numsSet.size < nums.length) {
        return true;
    } 
    return false;
};

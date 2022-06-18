
/**
 * @param {number[]} nums - array for which duplicate integers need to be removed
 * @return {number} - number of non-duplicate values left in the array
 */
var removeDuplicates = function(nums) {
    var back = 0;
    var front = 1;
    var ahead = 0;
    
    while (front + ahead < nums.length) {
        nums[front] = nums[front + ahead];
        var backNum = nums[back];
        var frontNum = nums[front + ahead];
        
        if (backNum == frontNum) {
            ahead++;
        } else {
            back++;
            front++;
        }
    }
    
    return nums.length - ahead;
};

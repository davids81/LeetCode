/**
 * @param {number[]} nums1 - First array to find intersection with second array
 * @param {number[]} nums2 - Second array to find intersection with first array
 * @return {number[]} - Array of numbers which are in both arrays (intersection)
 *                      Can be in any order
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    var i = 0;
    var j = 0;
    var ret = [];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            ret.push(nums1[i]);
            i++;
            j++;
        }
    }
    return ret;
};

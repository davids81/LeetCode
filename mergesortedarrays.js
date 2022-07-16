/**
 * @param {number[]} nums1 - First sorted array to combine elements into
 * @param {number} m - Quantity of elements in nums1
 * @param {number[]} nums2 - Second sorted array to merge into nums1
 * @param {number} n - Quantity of elements in nums2
 * @return {void} do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
    while (n > 0) {
        nums1[m + n - 1] = nums2[n - 1];
        n--;
    }
};

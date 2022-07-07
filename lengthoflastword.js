/**
 * @param {string} s - The string for which to get the length of the last word
 * @return {number} - The length of the last word
 */
 var lengthOfLastWord = function(s) {
    var endIdx = s.length - 1;
    while (s.charAt(endIdx) === " " && endIdx >= 0) {
        endIdx--;
    }
    var beginIdx = endIdx;
    while (s.charAt(beginIdx) !== " " && beginIdx >= 0) {
        beginIdx--;
    }
    return endIdx - beginIdx;
};

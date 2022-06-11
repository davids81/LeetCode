
/**
 * @param {number} x - Integer to determin if is a palindrome
 * @return {boolean} - Returns True if is a palindrome, false otherwise
 */
var isPalindrome = function(x) {
    var numAsString = x.toString();
    var rIdx = numAsString.length - 1;
    var lIdx = 0;
    
    while (rIdx > lIdx) {
        var rChar = numAsString.charAt(rIdx);
        var lChar = numAsString.charAt(lIdx);
        if (rChar !== lChar) {
            return false;
        }
        rIdx--;
        lIdx++;
    }
    return true;
};
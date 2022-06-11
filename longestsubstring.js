



/**
 * @param {string} s - The string for which to find the longest substring with unique characters
 * @return {number} - Character count of the longest substring with unique characters
 */
var lengthOfLongestSubstring = function(s) {
    var longStrMap = new Map();
    var strLen = s.length;
    var longStrLen = 0;

    for (var end = 0, start = 0; end < strLen; end++) {
        var crntChar = s.charAt(end);
        if (longStrMap.has(crntChar)) {
            start = Math.max(longStrMap.get(crntChar), start);
        } 
        longStrLen = Math.max(longStrLen, end - start + 1);
        longStrMap.set(crntChar, end + 1);
    }
    return longStrLen;
};

/**
 * This example was taken directly from one of the LeetCode discussion examples (user example)
 * @param {string} s - The string for which to find the longest substring with unique characters
 * @return {number} - Character count of the longest substring with unique characters
 */
var lengthOfLongestSubstringFast = function(s) {
    var len = s.length;
    var longest = 0;
    var nextIdx = [];

    for (var i = 0; i < 128; i++) {
        nextIdx.push(0);
    }

    for (var end = 0, l = 0; end < s.length; end++) {
        l = Math.max(nextIdx[s.charCodeAt(end)], l);
        longest = Math.max(longest, end - l + 1);
        nextIdx[s.charCodeAt(end)] = end + 1;
    }
    return longest;
};


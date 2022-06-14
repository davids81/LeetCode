/**
 * Initial solution
 * @param {string[]} strs - Array of strings to search for the longest common prefix
 * @return {string} A string representing the longest common prefix. Can be empty, never null or undefined.
 */
 var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return "";
    }
    var firstString = strs[0];
    var longestPrefix = "";
    for (var i = 0; i < firstString.length; i++) {
        var matchChar = firstString.charAt(i);
        var match = true;
        for (var j = 1; j < strs.length; j++) {
            if (strs[j].charAt(i) != matchChar) {
                return firstString.slice(0, i);
            }
        }
    }
    return firstString;
};

/**
 * From Leetcode solution examples, using a divide and conquer technique
 * @param {string[]} strs - Array of strings to search for the longest common prefix
 * @return {string} A string representing the longest common prefix. Can be empty, never null or undefined.
 */
function longestCommonPrefixdc(strs) {
    if (strings.length == 0) {
        return "";
    }
    return longestCommonPrefixInternal(strings, 0, strings.length - 1);
}

function longestCommonPrefixInternal(strings, l, r) {
    if (l == r) {
        return strings[l];
    } else {
        var mid = parseInt((l + r) / 2);
        var lcpLeft = longestCommonPrefixInternal(strings, l, mid);
        var lcpRight = longestCommonPrefixInternal(strings, mid + 1, r);
        return commonPrefix(lcpLeft, lcpRight);
    }
}

function commonPrefix(strLeft, strRight) {
    var min = Math.min(strLeft.length, strRight.length);
    for (var i = 0; i < min; i++) {
        if (strLeft.charAt(i) != strRight.charAt(i)) {
            return strLeft.substring(0, i);
        }
    }
    return strLeft.substring(0, min);
}


/**
 * From Leetcode solution examples, using a binary search algorithm
 * @param {string[]} strs - Array of strings to search for the longest common prefix
 * @return {string} A string representing the longest common prefix. Can be empty, never null or undefined.
 */
function longestCommonPrefixBinSearch(strs) {
    if (strs.length == 0) {
        return "";
    }

    var minLen = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < strs.length; i++) {
        minLen = Math.min(minLen, strs[i].length);
    }

    var low = 0;
    var high = minLen;
    while (low <= high) {
        var middle = parseInt((low + high) / 2);
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return strs[0].substring(0, (low + high) / 2);
}

function isCommonPrefix(strs, len) {
    var str1 = strs[0].substring(0, len);
    for (var i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(str1)) {
            return false;
        }
    }
    return true;
}



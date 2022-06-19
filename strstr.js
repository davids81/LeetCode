/**
 * @param {string} haystack - String for which to find needle within
 * @param {string} needle - String for which to find within haystack
 * @return {number} - Index of the first character of the string match
 */
var strStrSlow = function(haystack, needle) {
    if (needle == null || needle.length === 0) {
        return 0;
    }
    
    for (var i = 0; i < haystack.length; i++) {
        var dup = [];
        for (var j = 0; j + i < haystack.length; j++) {
            var needleChar = needle.charAt(j);
            if (needle.charAt(j) === haystack.charAt(i + j)) {
                dup.push(needleChar);
            }
        }
        if (dup.length == needle.length) {
            return i;
        }
    }
    return -1;
};

/**
 * @param {string} haystack - String for which to find needle within
 * @param {string} needle - String for which to find within haystack
 * @return {number} - Index of the first character of the string match
 */
var strStrFast = function(haystack, needle) {
    if (needle == null || needle.length === 0) {
        return 0;
    }
    
    var hIdx = 0;
    var nIdx = 0;
    
    var start = -1;
    var inString = false;
    while (hIdx < haystack.length && nIdx < needle.length) {
        var hChar = haystack.charAt(hIdx);
        var nChar = needle.charAt(nIdx);
        
        if (hChar === nChar && inString) {
            nIdx++;
        } else if (hChar === nChar && !inString) {
            inString = true;
            start = hIdx;   
            nIdx++;
        } else if (hChar !== nChar && inString) {
            inString = false;
            nIdx = 0;
            hIdx = start;
            start = -1;
        }
        hIdx++;
    }
    
    if (nIdx == needle.length) {
        return start;
    } else {
        return -1;
    }
};


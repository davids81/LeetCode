/**
 * This is my initial solution, which, honestly is really bad, but works
 * @param {string} s - String for which to determine if parenthesis are matched
 * @return {boolean} - True if parenthesis are matched, false otherwise
 */
var isValidAttempt1 = function(s) {
    
    var bracketStack = [];
    for (var i = 0; i < s.length; i++) {
        var crntChar = s[i];
        if (crntChar == "(" || crntChar == "{" || crntChar == "[") {
            bracketStack.push(crntChar);
        } else {
            var bracketChar = bracketStack.pop();
            if (crntChar == ")" && bracketChar != "(") {
                return false;
            } else if (crntChar == "}" && bracketChar != "{") {
                return false;
            } else if (crntChar == "]" && bracketChar != "[") {
                return false;
            }
        }
    }
    return bracketStack.length === 0;
};


/**
 * This is a slightly cleaner version, adapted from GeeksForGeeks, found here:
 * https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
 * @param {string} s - String for which to determine if parenthesis are matched
 * @return {boolean} - True if parenthesis are matched, false otherwise
 */
var isValid = function(s) {
    var charStack = [];
    for (var i = 0; i < s.length; i++) {
        var crntChar = s.charAt(i);
        if (charStack.length === 0) {
            charStack.push(crntChar);
        } else if (charStack.at(-1) === '(' && crntChar === ')' 
                || charStack.at(-1) === '{' && crntChar === '}' 
                || charStack.at(-1) === '[' && crntChar === ']') {
            charStack.pop();
        } else {
            charStack.push(crntChar);
        }
    }
    return charStack.length === 0;
};
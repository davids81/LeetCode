
/**
 * @param {string} s - String in Roman Numerals for which to calculate the value
 * @return {number} - Number representation of the Roman Numeral passed in
 */
var romanToInt = function(s) {
    var valMap = new Map();
    valMap.set("I", 1);
    valMap.set("V", 5);
    valMap.set("X", 10);
    valMap.set("L", 50);
    valMap.set("C", 100);
    valMap.set("D", 500);
    valMap.set("M", 1000);
    
    var answer = 0;
    var valToSubtract = 0;
    for (var i = 0; i < s.length; i++) {
        var crntVal = valMap.get(s.charAt(i));
        var peekVal = 0;
        
        if (i + 1 < s.length) {
            peekVal = valMap.get(s.charAt(i + 1));
        }
        
        if (peekVal > crntVal) {
            valToSubtract = crntVal;
        } else {
            answer = answer + crntVal;
            answer = answer - valToSubtract;
            valToSubtract = 0;
        }
    }
    return answer;
};
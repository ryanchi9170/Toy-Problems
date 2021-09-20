/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var stringNumber = x.toString();
    var reverseNumber = '';
    for (var i = stringNumber.length - 1; i >= 0; i--) {
        reverseNumber += stringNumber[i];
    }
    
    console.log('stringNumber: ', stringNumber)
    console.log('reverseNumber: ', reverseNumber)
    
    if (stringNumber === reverseNumber) {
        return true;
    }
    else {
        return false;
    }
};
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var isNegative = false;
    var result = null;
    if (dividend < 0) {
        isNegative = !isNegative;
    }
    if (divisor < 0) {
        isNegative = !isNegative;
    } 
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    if (dividend < divisor) {
        result = 0;
    }
    else if (dividend === divisor) {
        result = 1;
    }
    else {
        var count = 0;
        while (dividend >= divisor) {
            var value = divisor;
            var multiple = 1;
            while (value + value < dividend) {
                value += value;
                multiple += multiple;
            }
            count += multiple;
            dividend -= value;
        }
        result = count;
    }
    
    if (result >= 2**31 && isNegative) {
        return -Math.abs(result);
    }
    else if (result >= 2**31 && isNegative === false) {
        return result - 1;
    }
    else if (isNegative) {
        return -Math.abs(result);
    }
    else {
        return result;
    }
};
/**
 * @param {string} s
 * @return {number}
 */

 //rohitsharmadev
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    console.log(n)
    let count = 0;
    while(n>=0) {
        if(s[n] !==" ") {
            ++count;
        } else if(count >0) {
            break;
        }
        --n;
    }
    return count;
};
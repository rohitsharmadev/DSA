/**
 * @param {string} s
 * @return {number}
 */

 //rohitsharmadev
var maxFreqSum = function(s) {
    let map = {};
    for(let i=0; i < s.length; i++){
        if(map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] =1;
        }
    }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0;
    let cons = 0;
    let mapKeys = Object.keys(map);
    for (let i = 0; i < mapKeys.length; i++) {
        if (vowels.includes(mapKeys[i])) {
            vowelsCount = Math.max(vowelsCount, map[mapKeys[i]]);
        } else {
            cons = Math.max(cons, map[mapKeys[i]]);
        }
    }
    return vowelsCount + cons;
};
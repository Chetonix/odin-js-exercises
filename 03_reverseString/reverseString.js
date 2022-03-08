const reverseString = function(str) {
    let reversedString = "";
    for (let char of str) {
        reversedString = char + reversedString;
    }
    return reversedString;
};

// console.log(reverseString("hello  !123"));
// Do not edit below this line
module.exports = reverseString;

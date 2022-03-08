const palindromes = function (str) {
    let newStr = str.toLowerCase();
    let finalStr = "";
    for (let char of newStr) {
        if ("abcdefghijklmnopqrstuvwxyz".includes(char)) {
            finalStr = finalStr + char;
        }
    }
    console.log("finalStr", finalStr);
    console.log("reverse",reverseString(finalStr));
    return reverseString(finalStr) === finalStr ? true : false;
};

const reverseString = function(str) {
    let reversedString = "";
    for (let char of str) {
        reversedString = char + reversedString;
    }
    return reversedString;
};

// palindromes("hello");
// console.log(palindromes("hello"));
// Do not edit below this line
module.exports = palindromes;

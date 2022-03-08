const repeatString = function(str, repeat) {
    let newStr = "";
    if (repeat < 0) {
        return "ERROR";
    }
    if (repeat === 0) {
        return "";
    }
    for (let i = 0; i < repeat; i++) {
    newStr = newStr + str;
    
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;


const sumAll = function(a, b) {
    if (typeof(a) === "number" && typeof(b) === "number") {
        if (a<0 || b<0) {
            return "ERROR";
        }
        return a > b ?  findSum(b, a) : findSum(a, b);
    }else {
        return "ERROR";
    }
    
};

function findSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(num) {
    let prevFib = 1;
    let prevPrevFib = 1;
    if(num < 0) {
        return "OOPS";
    }
    if (num == 1 || num == 2) {
        return 1;
    } else {
        for (i = 3; i <= num; i++){
            fib = prevFib + prevPrevFib;
            prevPrevFib = prevFib;
            prevFib = fib;
        }
        return fib;
    }
};

// console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;

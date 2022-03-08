const fibonacci = function(num) {
    let fib = 1;
    let prevFib = 1;
    if (num === 1 || num === 2) {
        return 1;
    } else {
        
        for (i = 1; i<= num; i++){
            fib = fib + i;
        }
        return fib;
    }
};

console.log(fibonacci(3));
// Do not edit below this line
module.exports = fibonacci;

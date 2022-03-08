const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arr) {
  let sum = 0;
  for (let num of arr) {
   sum += num;
  } 
  return sum;
};

const multiply = function(arr) {
  let mult = 1;
  for (let num of arr) {
    mult = mult * num;
  }
  return mult;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let fact = 1;
  if (num === 0) {
    return fact;
  }
  for (let i = 1; i <= num; i++){
    fact *= i;
  }
  return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};



const add = function(x, y) {
	
  let sum = x+y;
  return sum;

};

const subtract = function(x,y) {
	
  let difference= x-y;
  return difference;

};

const sum = function(arr) {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
return sum;
	
};

const multiply = function(x,y) {
 let product = x * y;
 return product;
};

const power = function(x,y) {
  let result= 1;
  
  for(let i = 0; i < y; i++){
    result = result * x 
  }
  
  return result;
	
};

const factorial = function(n) {

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
	
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

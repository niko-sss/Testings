// mylib.js consisting of basic mathematic operations
// Created at 28.01.2026 DD/MM/YYYY
// Created by: Niko Sukari


// addition of two numbers
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return a + b;
}

// Boolean testing wether a number is even number
function isEven(n) {
  if (typeof n !== "number") {
    throw new Error("Input must be a number");
  }
  return n % 2 === 0;
}


// division of two numbers, dividing by zero raises an error
function division(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    } else if (b === 0) {
      throw new Error("Division by zero.");
    } else {
      return a / b
    }
}


// multiplication of two numbers
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return a * b;
}


// substraction of two numbers
function substract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return a - b;
}


// modular export of functions listed to main.js and test suite
module.exports = { add, isEven, division, multiply, substract };
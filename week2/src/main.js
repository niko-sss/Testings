// Main script using mylib module's basic mathematic operations
// Created at 28.01.2026 DD/MM/YYYY
// Created by: Niko Sukari


// Technical requirements
const { add, isEven, division, multiply, substract } = require('./modules/mylib')

// Overall logging to test code manually
console.log(add(2, 3))
console.log(isEven(2))
console.log(isEven(3))
console.log(division(1, 4));
console.log(multiply(1, 0));
console.log(substract(4, 2));


// Global variables
A = 2
B = 3


// Calculate function tries to calculate the operations and log them
// if trial fails, error is being thrown and logged
function calculate(a, b) {
    try {
        let c = add(a, b)
        let d = substract(a, b)
        let e = multiply(c, d)
        let f = isEven(d)
        let g = division(b, a)
        console.log("Addition of", a, "and", b, "is", c);
        console.log(`Substraction of ${a} and ${b} is ${d}`);
        console.log(`Multiplication of ${c} and ${d} is ${e}`);
        console.log(`Testing if ${d} is even number: ${f}`);
        console.log(`Division of ${b} and ${a} is ${g}`);
    } catch {
        throw new Error("Error:", Error)
    }

}


function main() {
    calculate(A, B)
}

// starts the main function and calculate function in it
main()
// Test suite for src/mylib.js
// Created at 28.01.2026 DD/MM/YYYY
// Created by: Niko Sukari

// Technical requirements
const { expect } = require("chai");
const { add, isEven, division, multiply, substract } = require("../src/modules/mylib");


// Test suite starts here
// Describe function describes the tested file or function
// before() happens before any other tests are being driven
// after() happens after all the other tests
// otherwise tests are self-explanatory

describe("mylib.js (expect skeleton)", () => {

  before(() => {
    console.log("Testing if the test are starting and this is being executed first");
    expect(isEven(2)).to.equal(true)
  })

  after(() => {
    console.log("Testing if this is the final thing being executed");
    expect(isEven(1)).to.equal(false)
  })

  describe("add()", () => {
    it("should add two numbers correctly", () => {
        expect(add(2, 3)).to.equal(5)
        let a = add(5, 3)
        console.log("\n\nTesting wether the function add() works inside test:\n");
        
        console.log("Manual testing the addition of 5 and 3 to equal", a, "\n\n");
        
        expect(a).to.equal(8)
    });

    it("should throw an error if inputs are not numbers", () => {
        expect(() => add('ThisIsNotANumber', 3)).to.throw("Inputs must be numbers")
        expect(() => add(null, 3)).to.throw("Inputs must be numbers")
        expect(() => add(undefined, 3)).to.throw("Inputs must be numbers")
        expect(() => add(true, 3)).to.throw("Inputs must be numbers")
        expect(() => add(Object, 3)).to.throw("Inputs must be numbers")
    });
  });

  describe("isEven()", () => {
    it("should return true for even numbers", () => {
        expect(isEven(2)).to.equal(true)
    });

    it("should return false for odd numbers", () => {
      expect(isEven(3)).to.equal(false)
    });

    it("should throw an error if input is not a number", () => {
        expect(() => isEven('ThisIsNotANumber')).to.throw("Input must be a number")
        expect(() => isEven(null)).to.throw("Input must be a number")
        expect(() => isEven(undefined)).to.throw("Input must be a number")
        expect(() => isEven(true)).to.throw("Input must be a number")
        expect(() => isEven(Object)).to.throw("Input must be a number")
    });
  });

  describe("division", () => {
    it("should divide two numbers correctly", () => {
        expect(division(4, 2)).to.equal(2)
        expect(division(1, 4)).to.equal(0.25)
    })

    it("Should throw an error if params are not numbers", () => {
      expect(() => division('ThisIsNotANumber', 2)).to.throw("Inputs must be numbers")
    })

    it("Should throw an error when dividing by zero", () => {
      expect(() => division(4, 0)).to.throw("Division by zero.")
    })
  })

  describe("muliplication", () => {
    it("should multiply two numbers correctly", () => {
        expect(multiply(4, 2)).to.equal(8)
    })

    it("Should throw an error if params are not numbers", () => {
      expect(() => multiply('ThisIsNotANumber', 2)).to.throw("Inputs must be numbers")
    })
  })

  describe("substraction", () => {
    it("should substract two numbers correctly", () => {
        expect(substract(4, 2)).to.equal(2)
    })

    it("Should throw an error if params are not numbers", () => {
      expect(() => substract('ThisIsNotANumber', 2)).to.throw("Inputs must be numbers")
    })
  })
});
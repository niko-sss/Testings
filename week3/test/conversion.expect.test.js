// Tests for ../src/conversion.js
// 04.02.2026 - DD/MM/YYYY
// Author: Niko Sukari


// Requires files
const { expect } = require("chai");
const { hexToRgbConversion } = require("../src/conversion");


describe("conversion.js", () => {

  describe("hexToRgbConversion", () => {

    // Test conversion function with pre-determined hexadecimal.
    // Expects to return proper RGB-value.
    it("should convert pre-determined hexadecimal to corresponding RGB-value properly", () => {
      expect(hexToRgbConversion("f1339b")).to.equal("RGB: 241, 51, 155");
    });

    // Test conversion function with a non-string parameter.
    // Expects to throw an error.
   it("should throw an error if input is not a string", () => {
       expect(() => hexToRgbConversion(33)).to.throw("Hexadecimal should be String.")
       expect(() => hexToRgbConversion(null)).to.throw("Hexadecimal should be String.")
       expect(() => hexToRgbConversion(undefined)).to.throw("Hexadecimal should be String.")
       expect(() => hexToRgbConversion(true)).to.throw("Hexadecimal should be String.")
    });
    
    // Test conversion function with too short parameter.
    // Expects to throw an error.
    it("should throw an error if input is too short", () => {
        expect(() => hexToRgbConversion("f123")).to.throw("Hexadecimal should be 6 digits long.");
    });
    
    // Test conversion function with too long parameter.
    // Expects to throw an error.
    it("should throw an error if input is too long", () => {
        expect(() => hexToRgbConversion("3344556677")).to.throw("Hexadecimal should be 6 digits long.");
    });
    
    // Test conversion function with values not ranging from hexadecimal range of 0-9 and a-f.
    // Expects to throw an error.
    it("should throw an error if input is not a proper hexadecimal from 0-9 and a-f", () => {
        expect(() => hexToRgbConversion("f1339w")).to.throw("Not a hexadecimal");
    });

})})
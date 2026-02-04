// Tests for ../src/conversion.js
// 04.02.2026 - DD/MM/YYYY
// Author: Niko Sukari

const { expect } = require("chai");
const { hexToRgbConversion } = require("../src/conversion");


describe("conversion.js", () => {

  describe("hexToRgbConversion", () => {

    it("should convert hex to rgb", () => {
      expect(hexToRgbConversion("f1339b")).to.equal("RGB: 241, 51, 155");
    });

   it("should throw an error if input is not a string", () => {
       expect(() => hexToRgbConversion(33)).to.throw("Hexadecimal should be String.")
       expect(() => hexToRgbConversion(null)).to.throw("Hexadecimal should be String.")
       expect(() => hexToRgbConversion(undefined)).to.throw("Hexadecimal should be String.")
       expect(() => hexToRgbConversion(true)).to.throw("Hexadecimal should be String.")
    });
    
    it("should throw an error if input is too short", () => {
        expect(() => hexToRgbConversion("f123")).to.throw("Hexadecimal should be 6 digits long.");
    });
    
    it("should throw an error if input is too long", () => {
        expect(() => hexToRgbConversion("3344556677")).to.throw("Hexadecimal should be 6 digits long.");
    });
    
    it("should throw an error if input is not a proper hexadecimal from 0-9 and a-f", () => {
        expect(() => hexToRgbConversion("f1339w")).to.throw("Not a hexadecimal");
    });

})})
// Module for calculations to convert hex to rgb
// 02.02.2026 - DD/MM/YYYY
// Author: Niko Sukari


const HEX_VALUES = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

function hexToRgbConversion(hexaDecimal) {
    // Throw an error if hexadecimal is not of String type
    if (typeof hexaDecimal !== "string") {
        throw new Error("Hexadecimal should be String.")
    }

    // Throw an error if hexadecimal is not exactly 6 digits long
    if (hexaDecimal.length < 6 || hexaDecimal.length > 6) {
        throw new Error("Hexadecimal should be 6 digits long.")
    }

    // Prime a table
    // Concatenate each input hexadecimal letter for it
    let hexaTable = []
    for (let i = 0; i < hexaDecimal.length; i++) {
        hexaTable = hexaTable.concat(hexaDecimal[i])
    }

    // For every index of input, test if index is proper value of hexadecimal
    //      If not proper value, throw an error
    for (i in hexaTable) {
        if (!HEX_VALUES.includes(hexaTable[i])) {
            throw new Error("Not a hexadecimal");
            
        }
    }

    // Conversion formula per colors of red, green and blue: 16 * digit_1 + 1 * digit_2
    // For each, red, green and blue:
    //      1. Match corresponding hexa valuee to indexes of proper hex values
    //      2. Apply to conversion formula
    const red = 16 * HEX_VALUES.indexOf(hexaTable[0]) + 1 * HEX_VALUES.indexOf(hexaTable[1]) 
    const green = 16 * HEX_VALUES.indexOf(hexaTable[2]) + 1 * HEX_VALUES.indexOf(hexaTable[3]) 
    const blue = 16 * HEX_VALUES.indexOf(hexaTable[4]) + 1 * HEX_VALUES.indexOf(hexaTable[5])
    
    // Return as a string
    return `RGB: ${red}, ${green}, ${blue}`

}


module.exports = { hexToRgbConversion }
// Module for API to convert hexadexcimal to RGB-value
// 04.02.2026 - DD/MM/YYYY
// Author: Niko Sukari

const express = require("express");
const conversion = require("./conversion.js");
const app = express();
const port = 3000;


app.get("/", (req, res) => {

	res.send("Hello, GET .../convert?hex={yourHexWithout#-symbol}")
});

app.get("/convert", (req, res) => {
	const hexaDecimal = req.query.hex;
	res.send(String(conversion.hexToRgbConversion(hexaDecimal)));
});


if (process.env.NODE_ENV !== "test") {
	app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;
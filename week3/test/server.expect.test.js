// Tests for ../src/server.js.js
// 04.02.2026 - DD/MM/YYYY
// Author: Niko Sukari

const request = require("supertest");
const expect = require("chai").expect;

process.env.NODE_ENV = "test"; // ensure server exports app
const app = require("../src/server");


// Integration tests for the RGB conversion API.
// Uses Supertest for HTTP requests and Chai for assertions.

describe("RGB conversion API", () => {

	// Test the root route.
	// Expects a 200 status and "Hello" response text.
	it("should return status code 200 to the root route", async () => {
		const res = await request(app).get("/");
		expect(res.status).to.equal(200);
		expect(res.text).to.equal("Hello, GET .../convert?hex={yourHexWithout#-symbol}");
	});


	// Test the /conversion route with query parameters.
	// Expects HTTP status code 200.
	it("should return status code 200 for /convert route", async () => {
		const res = await request(app).get("/convert?hex=f1f1f1");
		expect(res.status).to.equal(200);
	});


	// Test the /convert route for correct hex to rgb conversion.
	// Expects proper conversion for pre-determined hexadecimal.
	it("should return proper RGB value for corresponding hexadecimal values", async () => {
		const res = await request(app).get("/convert?hex=f1339b");
		expect(res.text).to.equal("RGB: 241, 51, 155");
	});

	// Test an invalid route.
	// Expects to return status code 404 as route should not exist.
	it("should return response code 404 for invalid route", async () => {
	const res = await request(app).get("/notaroute");
	expect(res.statusCode).to.equal(404);
	});

	// Test /convert route with invalid query parameter
	// Expects to return status code 500.
	it("should return response code 500 for invalid query parameter", async () => {
	const res = await request(app).get("/convert?hex=f132239b");
	expect(res.statusCode).to.equal(500);
	})});
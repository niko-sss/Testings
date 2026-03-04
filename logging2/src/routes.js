// This is a basic Express server setup for counter.
// Routes are per counter funtion: increase counter, current count and reset counter.
// Router uses imported Winston custom logging to log counter behavior and value
// to external .log file.
// 04.03.2026 DD.MM.YYYY

// Activate Express.
// Activate the Router() method of Express.
// Acquire methods of counter.
// Acquire methods of logger.
const express = require('express');
const router = express.Router();
const counter = require('./counter');
const logger = require('./logger');


// This defines http GET /counter-increase route.
// This route:
// - Logs used route.
// - Increases the counter with counter method increase().
// - Logs incremented value.
// - Returns the incremented value.

router.get('/counter-increase', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-increase'");
  const newValue = counter.increase();
  logger.info(`[COUNTER] increase ${newValue}`);
  res.json({ count: newValue });
});

// This defines http GET /counter-read route.
// This route:
// - Logs used route.
// - Reads the counter with counter method read().
// - Logs the value read.
// - Returns the read value.
router.get('/counter-read', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-read'");
  const value = counter.read();
  logger.info(`[COUNTER] read ${value}`);
  res.json({ count: value });
});

// This defines http GET /counter-reset route.
// This route:
// - Logs used route.
// - Resets the counter with counter method reset().
// - Logs the reset value.
// - Returns the value.
router.get('/counter-reset', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-reset'");
  const value = counter.reset();
  logger.info(`[COUNTER] zeroed ${value}`);
  res.json({ count: value });
});

// This exports used Express routing methods for other files to use.
module.exports = router;
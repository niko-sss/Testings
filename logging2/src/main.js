// This is a basic main program to start an Express server with routing and logging. 
// 04.03.2026 DD.MM.YYYY

// Acquire Express library used for setupping a server and function with it.
// Acquire Winston custom logger file from path in parameter.
// Acquire routing from routing file from path in parameter.
const express = require('express');
const logger = require('./logger');
const routes = require('./routes');

// Start the Express.
// Use port defined in .env or port 3000
const app = express();
const PORT = process.env.PORT || 3000;

// Log with low severity level 'info' to log information
// that the server is starting
logger.info('[MAIN] Starting...');

// Define that the Express library should use the routing that
// is being defined in routes parameter.
app.use(routes);

// Define the Express to listen the predefined port,
// and to log severity level 'info' that the server is
// now functioning and listening on predefined port.
const server = app.listen(PORT, () => {
  logger.info(`[MAIN] Listening on port ${PORT}`);
});



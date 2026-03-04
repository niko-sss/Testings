// This is a module to use for logging. 
// 04.03.2026 DD.MM.YYYY

// Import and destructure needed Winston logging components.
const { createLogger, transports, format } = require('winston');

// Create a custom Logger with winston.
// This defines logging format and severity levels.
const logger = createLogger({

// Severity levels by RFC5424 syslog protocol.
  level: 'info',

// This defines how the log is formatted.
// Combines formatting functions:
// 1. Add a timestamp.
// 2. Structure as JSON.
  format: format.combine(
    format.timestamp(),
    format.json()
  ),

// This defines where the logs should be sent to.
// Log is sent to:
// - console
// - logs/error.log if the RFC5424 severity level is 'error'
// - logs/combined.log
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

// This exports the custom logger to be used by other files.
module.exports = logger;
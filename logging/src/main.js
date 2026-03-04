// This is a main file to test winston framework used to log.
// 04.03.2026 DD.MM.YYYY

// Import logger module to a constant variable.
const logger = require('./logger');

// Three logging examples with log() method.
// Severity level is provided as parameter.
logger.log('info', 'This is an informational message.');
logger.log('warn', 'This is a warning message.');
logger.log('error', 'This is an error message.');

// Three logging examples using a method per severity level.
// Severity level is provided in used method,
// so only the message is provided as parameter
logger.info('This is another informational message.');
logger.warn('This is another warning message.');
logger.error('This is another error message.');
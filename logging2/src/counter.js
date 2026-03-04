// This is a module to use as a simple counter. 
// 04.03.2026 DD.MM.YYYY

// Define counter to be variable with value 0.
let count = 0;

// Getter function that returns itself, it's own value.
function read() {
  return count;
}

// Increases the count by one and returns the count.
function increase() {
  count += 1;
  return count;
}

// Resets the value to be 0.
function reset() {
  count = 0;
  return count;
}

// Export the functions for the use of other files.
module.exports = {
  read,
  increase,
  reset
};
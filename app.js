// Test setup using Node.js Assert Module.
const assert = require('assert');
// Test Meethod.
function cat() {
  return 'woof';
}
assert.equal(cat(), 'meow');

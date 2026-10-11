
const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./calculator');

test('adds two numbers correctly', () => {
    assert.strictEqual(add(2, 3), 5);
});

/**
 * Dependencies
 */

const test = require('tape')
const index = require('..')

test('should return true if string index of array', assert => {
  assert.plan(1)
  assert.equal(index(['hello', 'world'], 'hello'), true)
})

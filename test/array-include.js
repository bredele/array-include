/**
 * Dependencies
 */

const test = require('tape')
const index = require('..')

test('should return true if string index of array', assert => {
  assert.plan(1)
  assert.equal(index(['hello', 'world'], 'hello'), true)
})

test('should return true if array items index of array', assert => {
  assert.plan(2)
  assert.equal(index(['hello', 'world'], ['hello']), true)
  assert.equal(index(['hello', 'world'], ['hello', 'world']), true)
})

test('should return false if array item not index of array', assert => {
  assert.plan(1)
  assert.equal(index(['hello', 'world'], ['hello', 'world', 'foo']), false)
})

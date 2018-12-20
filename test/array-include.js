/**
 * Dependencies
 */

const test = require('tape')
const index = require('..')

test('should return false if argument not specified', assert => {
  assert.plan(1)
  assert.equal(index(['hello', 'world']), false)
})

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


test('should return false if string is not strictly equal to one of the array item', assert => {
  assert.plan(1)
  assert.equal(index(['oliviera'], 'olivier'), false)
})

const { test } = require('tap')
const hsl = require('../')

test('pure white', (assert) => {
  const expect = '#ffffff'
  const actual = hsl(0, 100, 100)
  assert.is(actual, expect, 'shoudl return pure white #ffffff')
  assert.end()
})

import test from 'tape'
import { isUnixTimestamp, isNaturalLanguageDate } from '../core'

test('myFunctions test', (assert) => {
  test('isUnixTimestamp test', (assert) => {
    assert.equal(isUnixTimestamp(0), true)
    assert.equal(isUnixTimestamp('0'), true)
    assert.equal(isUnixTimestamp(0.0), true)
    assert.equal(isUnixTimestamp('0.0'), true)
    assert.equal(isUnixTimestamp(0.1), false)
    assert.equal(isUnixTimestamp('0.1'), false)
    assert.equal(isUnixTimestamp(1), true)
    assert.equal(isUnixTimestamp(Number.MIN_VALUE), false)
    assert.equal(isUnixTimestamp(Number.MAX_VALUE), true)
    assert.end()
  })
  test('isNaturalLanguageDate test', (assert) => {
    assert.equal(isNaturalLanguageDate('December 15, 2015'), true)
    assert.equal(isNaturalLanguageDate('December 15'), true)
    assert.equal(isNaturalLanguageDate('December'), false)
    assert.equal(isNaturalLanguageDate('December 15, Foo'), false)
    assert.equal(isNaturalLanguageDate('December, 2015'), true)
    assert.equal(isNaturalLanguageDate('2015'), true)
    assert.end()
  })
  assert.end()
})

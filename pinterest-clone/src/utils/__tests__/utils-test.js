import test from 'tape'
import {randomInt} from '../utils'

test('Utils test', (assert) => {
  test('randomInt test', (assert) => {
    assert.throws(() => {
      randomInt()
    }, 'throws error when called without arguments')
    assert.throws(() => {
      randomInt(1)
    }, 'throws error when called without both min and max arguments-1')
    assert.throws(() => {
      randomInt(null, 1)
    }, 'throws error when called without both min and max arguments-2')
    assert.throws(() => {
      randomInt('foo')
    }, 'throws error when arguments are not numbers-1')
    assert.throws(() => {
      randomInt(1, 'foo')
    }, 'throws error when arguments are not numbers-2')
    assert.throws(() => {
      randomInt(1.1, 1)
    }, 'throws error when both arguments are not integers-1')
    assert.throws(() => {
      randomInt(1, 1.1)
    }, 'throws error when both arguments are not integers-2')
    assert.end()
  })
  assert.end()
})

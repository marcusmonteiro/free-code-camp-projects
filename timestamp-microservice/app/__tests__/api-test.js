import test from 'tape'
import {
  unixTimestampToNaturalLanguageDateApi,
  timestampMicroservice
} from '../api'

test('api test', (assert) => {
  test('unixTimestampToNaturalLanguageDateApi test', (assert) => {
    const t = unixTimestampToNaturalLanguageDateApi
    const secondsInHour = 3600
    const secondsInDay = secondsInHour * 24
    assert.equal(t(0), 'January 1, 1970')
    assert.equal(t(secondsInDay), 'January 2, 1970')
    assert.equal(t(-secondsInDay), 'December 31, 1969')
    assert.equal(t(secondsInHour * 21, 3), 'January 2, 1970')
    assert.equal(t('Foo'), null, 'Invalid unix timestamp')
    assert.equal(t({}), null, 'Invalid unix timestamp')
    assert.equal(t([]), null, 'Invalid unix timestamp')
    assert.equal(t(undefined), null, 'Invalid unix timestamp')
    assert.end()
  })

  test('timestampMicroservice test', (assert) => {
    const t = timestampMicroservice
    const secondsInHour = 3600
    const secondsInDay = secondsInHour * 24
    assert.deepEqual(t(0), { unix: 0, natural: 'January 1, 1970' })
    assert.deepEqual(t(secondsInDay), { unix: secondsInDay, natural: 'January 2, 1970' })
    assert.deepEqual(t(-secondsInDay), { unix: -secondsInDay, natural: 'December 31, 1969' })
    assert.deepEqual(t(secondsInHour * 21, 3), { unix: secondsInHour * 21, natural: 'January 2, 1970' })
    assert.deepEqual(t('Foo'), { unix: null, natural: null }, 'Invalid unix timestamp')
    assert.deepEqual(t({}), { unix: null, natural: null }, 'Invalid unix timestamp')
    assert.deepEqual(t([]), { unix: null, natural: null }, 'Invalid unix timestamp')
    assert.deepEqual(t(undefined), { unix: null, natural: null }, 'Invalid unix timestamp')
    assert.end()
  })
  assert.end()
})

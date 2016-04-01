import test from 'tape'
import {
  timestampMicroservice
} from '../api'

test('api test', (assert) => {
  test('timestampMicroservice test', (assert) => {
    const t = timestampMicroservice
    const SECONDS_IN_HOUR = 3600
    const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24
    assert.deepEqual(t(0), { unix: 0, natural: 'January 1, 1970' })
    assert.deepEqual(t(SECONDS_IN_DAY), { unix: SECONDS_IN_DAY, natural: 'January 2, 1970' })
    assert.deepEqual(t(-SECONDS_IN_DAY), { unix: -SECONDS_IN_DAY, natural: 'December 31, 1969' })
    assert.deepEqual(t(SECONDS_IN_HOUR * 21, 3), { unix: SECONDS_IN_HOUR * 21, natural: 'January 2, 1970' })

    let d = t('January 1, 1970')
    assert.equal(d.unix >= 0 && d.unix < SECONDS_IN_DAY, true, 'Unix timestamp somewhere inside January 1, 1970')
    assert.equal(d.natural, 'January 1, 1970')

    d = t('January 2, 1970')
    assert.equal(d.unix >= SECONDS_IN_DAY && d.unix < SECONDS_IN_DAY * 2, true, 'Unix timestamp somewhere inside January 2, 1970')
    assert.equal(d.natural, 'January 2, 1970')

    d = t('December 31, 1969')
    assert.equal(d.unix < 0 && d.unix > -SECONDS_IN_DAY, true, 'Unix timestamp somewhere inside December 31, 1969')
    assert.equal(d.natural, 'December 31, 1969')

    d = t('January, 1970')
    assert.equal(d.unix >= 0 && d.unix < SECONDS_IN_DAY, true, 'Unix timestamp somewhere inside January 1, 1970')
    assert.equal(d.natural, 'January 1, 1970')

    assert.deepEqual(t('Foo'), { unix: null, natural: null })
    assert.deepEqual(t('Foo1970'), { unix: null, natural: null })
    assert.deepEqual(t('Foo 1, 1970'), { unix: null, natural: null })
    assert.deepEqual(t('1, 1970'), { unix: null, natural: null })
    assert.deepEqual(t('January'), { unix: null, natural: null })
    assert.end()
  })
  assert.end()
})

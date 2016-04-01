import test from 'tape'
import {
  timestampMicroservice
} from '../api'

test('api test', (assert) => {
  test('timestampMicroservice test', (assert) => {
    const t = timestampMicroservice
    const SECONDS_IN_HOUR = 3600
    const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24
    assert.ok(t('January 1, 1970').unix >= 0 && t('January 1, 1970').unix < SECONDS_IN_DAY, 'Result must be somewhere inside January 1, 1970')
    assert.ok(t('January 1, 1969').unix < 0 && t('January 1, 1970').unix > -SECONDS_IN_DAY, 'Returns negative unix timestamps correctly')
    assert.equal(t('January 1, 1970').natural, 'January 1, 1970', 'Returns same natural language date')
    assert.deepEqual(t(0), { unix: 0, natural: 'January 1, 1970' })
    assert.deepEqual(t(SECONDS_IN_DAY), { unix: SECONDS_IN_DAY, natural: 'January 2, 1970' })
    assert.deepEqual(t(-SECONDS_IN_DAY), { unix: -SECONDS_IN_DAY, natural: 'December 31, 1969' })
    assert.deepEqual(t(SECONDS_IN_HOUR * 21, 3), { unix: SECONDS_IN_HOUR * 21, natural: 'January 2, 1970' })
    assert.deepEqual(t('Foo'), { unix: null, natural: null }, 'Invalid unix timestamp')
    assert.deepEqual(t({}), { unix: null, natural: null }, 'Invalid unix timestamp')
    assert.deepEqual(t([]), { unix: null, natural: null }, 'Invalid unix timestamp')
    assert.deepEqual(t(undefined), { unix: null, natural: null }, 'Invalid unix timestamp')
    assert.end()
  })
  assert.end()
})

import test from 'tape'
import { unixTimestampToNaturalLanguageDateApi } from '../api'

test('api test', (assert) => {
  test('unixTimestampToNaturalLanguageDateApi test', (assert) => {
    const t = unixTimestampToNaturalLanguageDateApi
    assert.equal(t(0), 'January 1, 1970')
    assert.equal(t('Foo'), null, 'Invalid unix timestamp')
    assert.equal(t({}), null, 'Invalid unix timestamp')
    assert.equal(t([]), null, 'Invalid unix timestamp')
    assert.equal(t(undefined), null, 'Invalid unix timestamp')
    assert.end()
  })
  assert.end()
})

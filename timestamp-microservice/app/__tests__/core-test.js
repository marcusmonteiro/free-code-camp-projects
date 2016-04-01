import test from 'tape'
import {
  isUnixTimestamp,
  unixTimestampToNaturalLanguageDate,
  isNaturalLanguageDate,
  naturalLanguageDateToUnixTimestamp
} from '../core'

const SECONDS_IN_HOUR = 3600
const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24

test('core test', (assert) => {
  test('isUnixTimestamp test', (assert) => {
    const t = isUnixTimestamp
    // https://github.com/jquery/jquery/blob/0c1f72667dd74bf00c6c514ebe8b7e92c3e7ad0e/test/unit/core.js
    const ToString = function (value) {
      this.toString = function () {
        return String(value)
      }
    }
    assert.ok(t('-10'), 'Negative integer string')
    assert.ok(t('0'), 'Zero string')
    assert.ok(t('5'), 'Positive integer string')
    assert.ok(t(-16), 'Negative integer number')
    assert.ok(t(0), 'Zero integer number')
    assert.ok(t(32), 'Positive integer number')
    assert.ok(t('-1.6'), 'Negative floating point string')
    assert.ok(t('4.536'), 'Positive floating point string')
    assert.ok(t(-2.6), 'Negative floating point number')
    assert.ok(t(3.1415), 'Positive floating point number')
    assert.ok(t(1.5999999999999999), 'Very precise floating point number')
    assert.ok(t(8e5), 'Exponential notation')
    assert.ok(t('123e-2'), 'Exponential notation string')
    assert.ok(t('040'), 'Legacy octal integer literal string')
    assert.ok(t('0xFF'), 'Hexadecimal integer literal string (0x...)')
    assert.ok(t('0Xba'), 'Hexadecimal integer literal string (0X...)')
    assert.ok(t(0xFFF), 'Hexadecimal integer literal')

    if (+'0b1' === 1) {
      assert.ok(t('0b111110'), 'Binary integer literal string (0b...)')
      assert.ok(t('0B111110'), 'Binary integer literal string (0B...)')
    } else {
      assert.ok(true, 'Browser does not support binary integer literal (0b...)')
      assert.ok(true, 'Browser does not support binary integer literal (0B...)')
    }

    if (+'0o1' === 1) {
      assert.ok(t('0o76'), 'Octal integer literal string (0o...)')
      assert.ok(t('0O76'), 'Octal integer literal string (0O...)')
    } else {
      assert.ok(true, 'Browser does not support octal integer literal (0o...)')
      assert.ok(true, 'Browser does not support octal integer literal (0O...)')
    }

    assert.equal(t(new ToString('42')), false, 'Only limited to strings and numbers')
    assert.equal(t(''), false, 'Empty string')
    assert.equal(t('        '), false, 'Whitespace characters string')
    assert.equal(t('\t\t'), false, 'Tab characters string')
    assert.equal(t('abcdefghijklm1234567890'), false, 'Alphanumeric character string')
    assert.equal(t('xabcdefx'), false, 'Non-numeric character string')
    assert.equal(t(true), false, 'Boolean true literal')
    assert.equal(t(false), false, 'Boolean false literal')
    assert.equal(t('bcfed5.2'), false, 'Number with preceding non-numeric characters')
    assert.equal(t('7.2acdgs'), false, 'Number with trailing non-numeric characters')
    assert.equal(t(undefined), false, 'Undefined value')
    assert.equal(t(null), false, 'Null value')
    assert.equal(t(NaN), false, 'NaN value')
    assert.equal(t(Infinity), false, 'Infinity primitive')
    assert.equal(t(Number.POSITIVE_INFINITY), false, 'Positive Infinity')
    assert.equal(t(Number.NEGATIVE_INFINITY), false, 'Negative Infinity')
    assert.equal(t(new ToString('Devo')), false, 'Custom .toString returning non-number')
    assert.equal(t({}), false, 'Empty object')
    assert.equal(t([]), false, 'Empty array')
    assert.equal(t([ 42 ]), false, 'Array with one number')
    assert.equal(t(function () {}), false, 'Instance of a function')
    assert.equal(t(new Date()), false, 'Instance of a Date')
    assert.end()
  })

  test('unixTimestampToNaturalLanguageDate test', (assert) => {
    const t = unixTimestampToNaturalLanguageDate
    assert.equal(t(0), 'January 1, 1970')
    assert.equal(t(SECONDS_IN_DAY), 'January 2, 1970')
    assert.equal(t(-SECONDS_IN_DAY), 'December 31, 1969')
    assert.equal(t(SECONDS_IN_HOUR * 21, 3), 'January 2, 1970')
    assert.throws(() => { t('Foo') }, null, 'Invalid unix timestamp')
    assert.throws(() => { t({}) }, null, 'Invalid unix timestamp')
    assert.throws(() => { t([]) }, null, 'Invalid unix timestamp')
    assert.throws(() => { t(undefined) }, null, 'Invalid unix timestamp')
    assert.doesNotThrow(() => { t(0.1) }, null, 'Valid unix timestamp')
    assert.doesNotThrow(() => { t(-0.1) }, null, 'Valid unix timestamp')
    assert.doesNotThrow(() => { t(Number.MAX_VALUE) }, null, 'Valid unix timestamp')
    assert.doesNotThrow(() => { t(Number.MIN_VALUE) }, null, 'Valid unix timestamp')
    assert.end()
  })

  test('isNaturalLanguageDate test', (assert) => {
    const t = isNaturalLanguageDate
    assert.ok(t('December 15, 2015'), 'Normal case')
    assert.ok(t('December 1, 2015'), 'Day with one digit')
    assert.ok(t('December -1, 2015'), 'Negative days will be considered positive. Is it dangerous?')
    assert.ok(t('December, 2015'), 'There must be a default day')
    assert.ok(t('December Foo, 2015'), 'There must be a default day(2)')
    assert.ok(t('December 15'), 'There must be a default year')
    assert.ok(t('December 15, 99999'), 'Year can be any positive number')
    assert.ok(t('2015'), 'There must be a default date')
    assert.notOk(t('Foovember 15, 2015'), 'Invalid month')
    assert.notOk(t('15, 2015'), 'Must have month')
    assert.notOk(t('December 32, 2015'), 'Day cannot be larger than 31')
    assert.notOk(t('December 15, -1'), 'Year cannot be a negative number')
    assert.notOk(t('December 15, Foo'), 'Year must be a number')
    assert.end()
  })

  test('naturalLanguageDateToUnixTimestamp test', (assert) => {
    const t = naturalLanguageDateToUnixTimestamp
    const DEFAULT_UNIX_TIMESTAMP = 0
    assert.ok(isUnixTimestamp(t('January 1, 1970')), 'Must return unix timestamp')
    assert.ok(t('January 1, 1970') >= 0 && t('January 1, 1970') <= SECONDS_IN_DAY, 'Result must be somewhere inside January 1, 1970')
    assert.ok(t('January 2, 1970') >= SECONDS_IN_DAY && t('January 2, 1970') <= (2 * SECONDS_IN_DAY), 'Result must be somewhere inside January 2, 1970')
    assert.ok(t('December 31, 1969') < 0 && t('December 31, 1969') >= -SECONDS_IN_DAY, 'Returns negative unix timestamps correctly')
    assert.ok(t('January 2, 1970', 3) >= 0 && t('January 2, 1970', 3) >= SECONDS_IN_HOUR * 21, 'Utc offset working correctly')
    assert.equal(t('0'), DEFAULT_UNIX_TIMESTAMP, 'Send only a number, return a default unix timestamp')
    assert.equal(t('2015'), DEFAULT_UNIX_TIMESTAMP, 'Send only a number, return a default unix timestamp(2)')
    assert.equal(t('-2015'), DEFAULT_UNIX_TIMESTAMP, 'Send only a number, return a default unix timestamp(3)')
    assert.throws(() => { t('Foovember 15, 2015') }, null, 'Invalid month')
    assert.throws(() => { t('15, 2015') }, null, 'Must have month')
    assert.throws(() => { t('December 32, 2015') }, null, 'Day cannot be larger than 31')
    assert.throws(() => { t('December 15, -1') }, null, 'Year cannot be a negative number')
    assert.throws(() => { t('December 15, Foo') }, null, 'Year must be a number')
    assert.end()
  })
  assert.end()
})

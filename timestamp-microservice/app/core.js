import { isNumeric } from './utils'
import moment from 'moment'

function isUnixTimestamp (timestamp) {
  return isNumeric(timestamp)
}

function unixTimestampToNaturalLanguageDate (timestamp, utcOffset = 0) {
  if (!isUnixTimestamp(timestamp)) {
    throw new Error('Invalid unix timestamp')
  }
  return moment.unix(timestamp).utcOffset(utcOffset).format('MMMM D, YYYY')
}

function isNaturalLanguageDate (date) {
  throw new Error('Not implemented')
}

export {
  isUnixTimestamp,
  unixTimestampToNaturalLanguageDate,
  isNaturalLanguageDate
}

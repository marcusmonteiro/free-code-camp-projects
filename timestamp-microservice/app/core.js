import { isFinite } from 'lodash'
import moment from 'moment'

function isUnixTimestamp (timestamp) {
  return isFinite(timestamp)
}

function unixTimestampToNaturalLanguageDate (timestamp, utcOffset = 0) {
  if (!isUnixTimestamp(timestamp)) {
    throw new Error(`Invalid unix timestamp: ${timestamp}`)
  }
  return moment.unix(timestamp).utcOffset(utcOffset).format('MMMM D, YYYY')
}

function isNaturalLanguageDate (date) {
  return moment(date).isValid()
}

function naturalLanguageDateToUnixTimestamp (date, utcOffset = 0) {
  if (!isNaturalLanguageDate(date)) {
    throw new Error(`Invalid natural language date: ${date}`)
  }
  return parseInt(moment(date).utcOffset(utcOffset).format('X'))
}

export {
  unixTimestampToNaturalLanguageDate,
  naturalLanguageDateToUnixTimestamp
}

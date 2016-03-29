import { isNumeric } from './utils'

function isUnixTimestamp(timestamp) {
  return isNumeric(timestamp)
}

function unixTimestampToNaturalLanguageDate(timestamp) {
  throw new Error('Not implemented')
}

function isNaturalLanguageDate(date) {
  throw new Error('Not implemented')
}

export {
  isUnixTimestamp,
  unixTimestampToNaturalLanguageDate,
  isNaturalLanguageDate
}

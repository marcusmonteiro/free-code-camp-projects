function isUnixTimestamp(timestamp) {
  return Number.isInteger(parseFloat(timestamp))
}

function isNaturalLanguageDate(date) {
  throw new Error('Not implemented')
}

export { isUnixTimestamp, isNaturalLanguageDate }

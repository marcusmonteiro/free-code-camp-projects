function isUnixTimestamp(timestamp) {
  return Number.isInteger(parseFloat(timestamp))
}

function isNaturalLanguageDate(date) {
  if (chrono.parseDate(date)) {
    return true
  }
  return false
}

export { isUnixTimestamp, isNaturalLanguageDate }

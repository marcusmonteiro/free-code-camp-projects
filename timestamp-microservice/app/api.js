import {
  unixTimestampToNaturalLanguageDate,
  naturalLanguageDateToUnixTimestamp
} from './core'

function unixTimestampToNaturalLanguageDateApi (timestamp, utcOffset = 0) {
  try {
    return unixTimestampToNaturalLanguageDate(timestamp, utcOffset)
  } catch (err) {
    return null
  }
}

function naturalLanguageDateToUnixTimestampApi (date, utcOffset = 0) {
  try {
    return naturalLanguageDateToUnixTimestamp(date, utcOffset)
  } catch (err) {
    return null
  }
}

function timestampMicroservice (timestampOrNaturalLanguageDate, utcOffset = 0) {
  let r = unixTimestampToNaturalLanguageDateApi(timestampOrNaturalLanguageDate, utcOffset)
  if (r) {
    return {
      unix: timestampOrNaturalLanguageDate,
      natural: r
    }
  }
  r = naturalLanguageDateToUnixTimestampApi(timestampOrNaturalLanguageDate, utcOffset)
  if (r) {
    return {
      unix: r,
      natural: timestampOrNaturalLanguageDate
    }
  }
  return {
    unix: null,
    natural: null
  }
}

export {
  timestampMicroservice
}

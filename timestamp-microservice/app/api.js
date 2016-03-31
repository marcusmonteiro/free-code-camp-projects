import { unixTimestampToNaturalLanguageDate } from './core'

function unixTimestampToNaturalLanguageDateApi (timestamp, utcOffset = 0) {
  try {
    return unixTimestampToNaturalLanguageDate(timestamp, utcOffset)
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
  return {
    unix: null,
    natural: null
  }
}

export {
  unixTimestampToNaturalLanguageDateApi,
  timestampMicroservice
}

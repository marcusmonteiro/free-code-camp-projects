import { unixTimestampToNaturalLanguageDate } from './core'

function unixTimestampToNaturalLanguageDateApi (timestamp) {
  try {
    return unixTimestampToNaturalLanguageDate(timestamp)
  } catch (err) {
    return null
  }
}

export { unixTimestampToNaturalLanguageDateApi }

/*
 *
 * QuoteHero actions
 *
 */

import {
  LOAD_QUOTE,
  LOAD_QUOTE_SUCCESS,
  LOAD_QUOTE_ERROR,
} from './constants';

export function loadQuote() {
  return {
    type: LOAD_QUOTE,
  };
}

export function loadQuoteSuccess(quote, author) {
  return {
    type: LOAD_QUOTE_SUCCESS,
    quote,
    author,
  };
}

export function loadQuoteError(error) {
  return {
    type: LOAD_QUOTE_ERROR,
    error,
  };
}

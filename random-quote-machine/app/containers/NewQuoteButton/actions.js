/*
 *
 * NewQuoteButton actions
 *
 */

import {
  GET_QUOTE,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_ERROR
} from './constants';

export function getQuote() {
  return {
    type: GET_QUOTE,
  };
}

export function gotQuoteSucess(quote, author) {
  return {
    type: GET_QUOTE_SUCCESS,
    quote,
    author
  };
}

export function getQuoteError(error) {
  return {
    type: GET_QUOTE_ERROR,
    error,
  };
}

/*
 *
 * NewQuoteButton reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_QUOTE,
  GET_QUOTE_SUCESS,
  GET_QUOTE_ERROR
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  quoteData: fromJS({
    quote: false,
    author: false
  })
});

function newQuoteButtonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTE:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['quoteData', 'quote'], false)
        .setIn(['quoteData', 'author'], false);
    case GET_QUOTE_SUCESS:
      return state
        .setIn(['quoteData', 'quote'], action.quote)
        .setIn(['quoteData', 'author'], action.author);
        .set('loading', false)
    case GET_QUOTE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state;
  }
}

export default newQuoteButtonReducer;

/*
 *
 * QuoteHero reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_QUOTE,
  LOAD_QUOTE_SUCCESS,
  LOAD_QUOTE_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  quote: '',
  author: '',
});

function quoteHeroReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUOTE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('quote', '')
        .set('author', '');
    case LOAD_QUOTE_SUCCESS:
      return state
        .set('quote', action.quote)
        .set('author', action.author)
        .set('loading', false);
    case LOAD_QUOTE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default quoteHeroReducer;

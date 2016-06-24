import expect from 'expect';
import quoteHeroReducer from '../reducer';
import {
  loadQuote,
  loadQuoteSuccess,
  loadQuoteError,
} from '../actions';
import { fromJS } from 'immutable';

describe('quoteHeroReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      quote: '',
      author: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(quoteHeroReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadQuote action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('quote', '')
      .set('author', '');

    expect(quoteHeroReducer(state, loadQuote())).toEqual(expectedResult);
  });

  it('should handle the loadQuoteSuccess action correctly', () => {
    const fixture = {
      content: 'Pau que nasce torto, nunca se endireita',
      title: 'É o Tchan',
    };
    const expectedResult = state
      .set('quote', fixture.content)
      .set('author', fixture.title)
      .set('loading', false);

    expect(quoteHeroReducer(state, loadQuoteSuccess(fixture.content, fixture.title))).toEqual(expectedResult);
  });

  it('should handle the loadQuoteError action correctly', () => {
    const fixture = {
      msg: 'Server error',
    };
    const expectedResult = state
      .set('error', fixture.msg)
      .set('loading', false);

    expect(quoteHeroReducer(state, loadQuoteError(fixture.msg))).toEqual(expectedResult);
  });
});

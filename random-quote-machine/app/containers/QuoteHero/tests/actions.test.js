import expect from 'expect';
import {
  loadQuote,
  loadQuoteSuccess,
  loadQuoteError,
} from '../actions';
import {
  LOAD_QUOTE,
  LOAD_QUOTE_SUCCESS,
  LOAD_QUOTE_ERROR,
} from '../constants';

describe('QuoteHero actions', () => {
  describe('loadQuote', () => {
    it('should return the correct type', () => {
      const expected = {
        type: LOAD_QUOTE,
      };

      expect(loadQuote()).toEqual(expected);
    });
  });

  describe('loadQuoteSuccess', () => {
    it('should return the correct type, a quote and an author', () => {
      const fixture = {
        content: 'Pau que nasce torto nunca se endireita',
        title: 'É o Tchan',
      };
      const expectedResult = {
        type: LOAD_QUOTE_SUCCESS,
        quote: fixture.content,
        author: fixture.title,
      };

      expect(loadQuoteSuccess(fixture.content, fixture.title)).toEqual(expectedResult);
    });
  });

  describe('loadQuoteError', () => {
    it('should return the correct type and an error message', () => {
      const fixture = {
        msg: 'Server error',
      };
      const expectedResult = {
        type: LOAD_QUOTE_ERROR,
        error: fixture.msg,
      };

      expect(loadQuoteError(fixture.msg)).toEqual(expectedResult);
    });
  });
});

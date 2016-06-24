import {
  selectQuoteHero,
  selectLoading,
  selectQuote,
  selectAuthor,
  selectError,
} from '../selectors';
import { fromJS } from 'immutable';
import expect from 'expect';

describe('selectQuoteHero', () => {
  const quoteHeroSelector = selectQuoteHero();
  it('should select the quoteHero state', () => {
    const quoteHeroState = fromJS({});
    const mockedState = fromJS({
      quoteHero: quoteHeroState,
    });

    expect(quoteHeroSelector(mockedState)).toEqual(quoteHeroState);
  });
});

describe('selectLoading', () => {
  const loadingSelector = selectLoading();
  it('should select the loading state', () => {
    const loading = true;
    const mockedState = fromJS({
      quoteHero: {
        loading,
      },
    });

    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('selectQuote', () => {
  const quoteSelector = selectQuote();
  it('should select the quote', () => {
    const quote = 'Pau que nasce torto nunca se endireita';
    const mockedState = fromJS({
      quoteHero: {
        quote,
      },
    });

    expect(quoteSelector(mockedState)).toEqual(quote);
  });
});

describe('selectAuthor', () => {
  const authorSelector = selectAuthor();
  it('should select the quote', () => {
    const author = 'É o Tchan';
    const mockedState = fromJS({
      quoteHero: {
        author,
      },
    });

    expect(authorSelector(mockedState)).toEqual(author);
  });
});

describe('selectError', () => {
  const errorSelector = selectError();
  it('should select the error message', () => {
    const error = 'Server error';
    const mockedState = fromJS({
      quoteHero: {
        error,
      },
    });

    expect(errorSelector(mockedState)).toEqual(error);
  });
});

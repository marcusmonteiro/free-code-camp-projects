/**
 * Test  sagas
 */

import expect from 'expect';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getQuote, getQuoteWatcher, getQuoteData } from '../sagas';
import { loadQuoteSuccess, loadQuoteError } from '../actions';
import { LOAD_QUOTE } from '../constants';

import request from 'utils/request';

describe('getQuote Saga', () => {
  let getQuoteGenerator;

  beforeEach(() => {
    getQuoteGenerator = getQuote();

    const requestURL = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    const callDescriptor = getQuoteGenerator.next().value;
    expect(callDescriptor).toEqual(call(request, requestURL));
  });

  it('should dispatch the loadQuoteSuccess action if it requests the data successfully', () => {
    const response = [{
      ID: 1125,
      title: 'Ellen Lupton',
      content: '<p>To say a grid is limiting is to say that language is limiting, or typography is limiting.  </p>\n',
      link: 'http://quotesondesign.com/ellen-lupton-4/',
    }];
    const putDescriptor = getQuoteGenerator.next(response).value;

    expect(putDescriptor).toEqual(put(loadQuoteSuccess(response[0].content, response[0].title)));
  });

  it('should dispatch the loadQuoteError action if the response errors', () => {
    const response = [{
      err: 'FOOBAR',
    }];
    const putDescriptor = getQuoteGenerator.next(response).value;

    expect(putDescriptor).toEqual(put(loadQuoteError('Quote API request failed')));
  });
});

describe('getQuoteWatcher Saga', () => {
  const getQuoteWatcherGenerator = getQuoteWatcher();

  it('should watch for the LOAD_QUOTE action', () => {
    const takeDescriptor = getQuoteWatcherGenerator.next().value;

    expect(takeDescriptor).toEqual(take(LOAD_QUOTE));
  });

  it('should invoke getQuote sagas on actions', () => {
    const callDescriptor = getQuoteWatcherGenerator.next(put(LOAD_QUOTE)).value;

    expect(callDescriptor).toEqual(call(getQuote));
  });
});

describe('getQuoteData Saga', () => {
  const getQuoteDataSaga = getQuoteData();

  let forkDescriptor;

  it('should asyncronously fork getQuoteWatcher saga', () => {
    forkDescriptor = getQuoteDataSaga.next();
    expect(forkDescriptor.value).toEqual(fork(getQuoteWatcher));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = getQuoteDataSaga.next();
    expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  });

  it('should finally cancel() the forked getQuoteWatcher saga',
    function* getQuoteDataSagaCancellabe() {
      forkDescriptor = getQuoteDataSaga.next(put(LOCATION_CHANGE));
      expect(forkDescriptor.value).toEqual(cancel(getQuoteWatcher));
    }
  );
});

import { take, call, put, cancel, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_QUOTE } from './constants';
import { loadQuoteSuccess, loadQuoteError } from './actions';
import request from 'utils/request';

export function* getQuote() {
  const requestURL = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

  const quoteData = yield call(request, requestURL);

  const quote = quoteData[0].content;
  const author = quoteData[0].title;

  if (quote && author) {
    yield put(loadQuoteSuccess(quote, author));
  } else {
    yield put(loadQuoteError('Quote API request failed'));
  }
}

export function* getQuoteWatcher() {
  while (yield take(LOAD_QUOTE)) {
    yield call(getQuote);
  }
}

export function* getQuoteData() {
  const watcher = yield fork(getQuoteWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getQuoteData,
];

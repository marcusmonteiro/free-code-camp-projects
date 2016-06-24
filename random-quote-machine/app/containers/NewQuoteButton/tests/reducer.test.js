import expect from 'expect';
import newQuoteButtonReducer from '../reducer';
import { fromJS } from 'immutable';

describe('newQuoteButtonReducer', () => {
  it('returns the initial state', () => {
    expect(newQuoteButtonReducer(undefined, {})).toEqual(fromJS({}));
  });
});

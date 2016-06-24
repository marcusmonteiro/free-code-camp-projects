import { createSelector } from 'reselect';

/**
 * Direct selector to the newQuoteButton state domain
 */
const selectNewQuoteButtonDomain = () => state => state.get('newQuoteButton');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewQuoteButton
 */

const selectNewQuoteButton = () => createSelector(
  selectNewQuoteButtonDomain(),
  (substate) => substate.toJS()
);

export default selectNewQuoteButton;
export {
  selectNewQuoteButtonDomain,
};

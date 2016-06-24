import { createSelector } from 'reselect';

const selectQuoteHero = () => state => state;

const selectLoading = () => createSelector(
  selectQuoteHero(),
  (quoteHeroState) => quoteHeroState.get('loading')
);

const selectQuote = () => createSelector(
  selectQuoteHero(),
  (quoteHeroState) => quoteHeroState.get('quote')
);

const selectAuthor = () => createSelector(
  selectQuoteHero(),
  (quoteHeroState) => quoteHeroState.get('author')
);

const selectError = () => createSelector(
  selectQuoteHero(),
  (quoteHeroState) => quoteHeroState.get('error')
);

export {
  selectQuoteHero,
  selectLoading,
  selectQuote,
  selectAuthor,
  selectError,
};

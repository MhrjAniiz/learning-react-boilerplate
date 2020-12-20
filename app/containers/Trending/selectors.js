import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the trending state domain
 */

const selectTrendingDomain = state => state.trending || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Trending
 */

const makeSelectTrending = () =>
  createSelector(
    selectTrendingDomain,
    substate => substate,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectTrendingDomain,
    ({ loading }) => loading,
  );

export const makeSelectTrendingData = () =>
  createSelector(
    selectTrendingDomain,
    ({ trending }) => trending,
  );

export const makeSelectError = () =>
  createSelector(
    selectTrendingDomain,
    ({ error }) => error,
  );

export default makeSelectTrending;
export { selectTrendingDomain };

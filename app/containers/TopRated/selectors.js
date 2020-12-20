import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the topRated state domain
 */

const selectTopRatedDomain = state => state.topRated || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TopRated
 */

const makeSelectTopRated = () =>
  createSelector(
    selectTopRatedDomain,
    substate => substate,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectTopRatedDomain,
    ({ loading }) => loading,
  );

export const makeSelectTopRatedData = () =>
  createSelector(
    selectTopRatedDomain,
    ({ topRated }) => topRated,
  );

export const makeSelectError = () =>
  createSelector(
    selectTopRatedDomain,
    ({ error }) => error,
  );
export default makeSelectTopRated;
export { selectTopRatedDomain };

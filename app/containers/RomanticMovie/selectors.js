import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the romanticMovie state domain
 */

const selectRomanticMovieDomain = state => state.romanticMovie || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RomanticMovie
 */

const makeSelectRomanticMovie = () =>
  createSelector(
    selectRomanticMovieDomain,
    substate => substate,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectRomanticMovieDomain,
    ({ loading }) => loading,
  );

export const makeSelectRomanticData = () =>
  createSelector(
    selectRomanticMovieDomain,
    ({ romantic }) => romantic,
  );

export const makeSelectError = () =>
  createSelector(
    selectRomanticMovieDomain,
    ({ error }) => error,
  );

export default makeSelectRomanticMovie;
export { selectRomanticMovieDomain };

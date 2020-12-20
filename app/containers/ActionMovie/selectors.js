import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the actionMovie state domain
 */

const selectActionMovieDomain = state => state.actionMovie || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ActionMovie
 */

const makeSelectActionMovie = () =>
  createSelector(
    selectActionMovieDomain,
    substate => substate,
  );
export const makeSelectLoading = () =>
  createSelector(
    selectActionMovieDomain,
    ({ loading }) => loading,
  );

export const makeSelectActionData = () =>
  createSelector(
    selectActionMovieDomain,
    ({ actionMovies }) => actionMovies,
  );

export const makeSelectError = () =>
  createSelector(
    selectActionMovieDomain,
    ({ error }) => error,
  );

export default makeSelectActionMovie;
export { selectActionMovieDomain };

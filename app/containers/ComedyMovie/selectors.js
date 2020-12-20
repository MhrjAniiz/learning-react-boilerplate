import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the comedyMovie state domain
 */

const selectComedyMovieDomain = state => state.comedyMovie || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ComedyMovie
 */

const makeSelectComedyMovie = () =>
  createSelector(
    selectComedyMovieDomain,
    substate => substate,
  );
export const makeSelectLoading = () =>
  createSelector(
    selectComedyMovieDomain,
    ({ loading }) => loading,
  );

export const makeSelectComedyData = () =>
  createSelector(
    selectComedyMovieDomain,
    ({ comedy }) => comedy,
  );

export const makeSelectError = () =>
  createSelector(
    selectComedyMovieDomain,
    ({ error }) => error,
  );

export default makeSelectComedyMovie;
export { selectComedyMovieDomain };

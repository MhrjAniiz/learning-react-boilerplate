import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the horrorMovie state domain
 */

const selectHorrorMovieDomain = state => state.horrorMovie || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HorrorMovie
 */

const makeSelectHorrorMovie = () =>
  createSelector(
    selectHorrorMovieDomain,
    substate => substate,
  );
export const makeSelectLoading = () =>
  createSelector(
    selectHorrorMovieDomain,
    ({ loading }) => loading,
  );

export const makeSelectHorrorData = () =>
  createSelector(
    selectHorrorMovieDomain,
    ({ horror }) => horror,
  );

export const makeSelectError = () =>
  createSelector(
    selectHorrorMovieDomain,
    ({ error }) => error,
  );

export default makeSelectHorrorMovie;
export { selectHorrorMovieDomain };

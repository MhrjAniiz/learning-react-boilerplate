import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the netFlixOriginals state domain
 */

const selectNetFlixOriginalsDomain = state =>
  state.netFlixOriginals || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NetFlixOriginals
 */

const makeSelectNetFlixOriginals = () =>
  createSelector(
    selectNetFlixOriginalsDomain,
    substate => substate,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectNetFlixOriginalsDomain,
    ({ loading }) => loading,
  );

export const makeSelectNetflixData = () =>
  createSelector(
    selectNetFlixOriginalsDomain,
    ({ netflixOriginals }) => netflixOriginals,
  );

export const makeSelectError = () =>
  createSelector(
    selectNetFlixOriginalsDomain,
    ({ error }) => error,
  );
export default makeSelectNetFlixOriginals;
export { selectNetFlixOriginalsDomain };

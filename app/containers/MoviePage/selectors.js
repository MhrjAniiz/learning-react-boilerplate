import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the moviePage state domain
 */

const selectMoviePageDomain = state => state.moviePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MoviePage
 */

const makeSelectMoviePage = () =>
  createSelector(
    selectMoviePageDomain,
    substate => substate,
  );

export default makeSelectMoviePage;
export { selectMoviePageDomain };

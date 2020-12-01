import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the robotApi state domain
 */

const selectRobotApiDomain = state => state.robotApi || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RobotApi
 */

const makeSelectRobotApi = () =>
  createSelector(
    selectRobotApiDomain,
    substate => substate,
  );

export default makeSelectRobotApi;
export { selectRobotApiDomain };

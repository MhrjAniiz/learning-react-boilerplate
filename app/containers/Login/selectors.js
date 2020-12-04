import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { get } from 'lodash';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectLoginDomain,
    ({ loading }) => loading,
  );

export const makeSelectError = () =>
  createSelector(
    selectLoginDomain,
    ({ error }) => error,
  );

export const makeSelectAuthenticated = () =>
  createSelector(
    selectLoginDomain,
    ({ authenticated }) => authenticated,
  );

export const makeSelectUserName = () =>
  createSelector(
    selectLoginDomain,
    ({ username }) => username,
  );

export const makeSelectPassword = () =>
  createSelector(
    selectLoginDomain,
    ({ password }) => password,
  );

export default makeSelectLogin;
export { selectLoginDomain };

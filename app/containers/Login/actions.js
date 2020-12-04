/*
 *
 * Login actions
 *
 */

import { ACTION_TYPES } from './constants';

export const loginRequest = () => {
  return {
    type: ACTION_TYPES.LOGIN_REQUEST,
  };
};

export const handleNameChange = username => {
  return {
    type: ACTION_TYPES.HANDLE_CHANGE_NAME,
    username,
  };
};

export const handlePasswordChange = password => {
  return {
    type: ACTION_TYPES.HANDLE_CHANGE_PASSWORD,
    password,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOG_OUT,
  };
};

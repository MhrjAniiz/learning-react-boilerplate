/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, ACTION_TYPES } from './constants';
import { getLocalSession, clearLocalSession } from '../../utils/localStorage';

const localSession = getLocalSession();

export const initialState = {
  account: localSession ? localSession.account : null,
  token: localSession ? localSession.token : null,

  authenticated: !!getLocalSession(),
  loading: false,
  error: null,
  username: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPES.LOGIN_REQUEST:
        draft.loading = true;

        break;
      case ACTION_TYPES.HANDLE_CHANGE_NAME:
        draft.username = action.username;

        break;
      case ACTION_TYPES.HANDLE_CHANGE_PASSWORD:
        draft.password = action.password;

        break;
      case ACTION_TYPES.LOGIN_REQUEST_SUCCESS:
        draft.account = action.account;
        draft.token = action.token;
        draft.loading = false;
        draft.error = null;
        draft.authenticated = true;

        break;
      case ACTION_TYPES.LOGIN_REQUEST_FAIL:
        draft.loading = false;
        draft.authenticated = false;
        draft.token = null;
        draft.error = action.error;

        break;
      case ACTION_TYPES.LOG_OUT:
        draft.account = null;
        draft.authenticated = false;
        draft.token = null;
        clearLocalSession();
        break;
    }
  });

export default loginReducer;

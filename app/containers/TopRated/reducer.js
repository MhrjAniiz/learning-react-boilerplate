/*
 *
 * TopRated reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, ACTION_TYPES } from './constants';

export const initialState = {
  loading: false,
  topRated: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const topRatedReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case ACTION_TYPES.FETCH_TOP_RATED_REQUEST:
        draft.loading = true;
        break;

      case ACTION_TYPES.FETCH_TOP_RATED_SUCCESS:
        draft.loading = false;
        draft.topRated = action.payload;
        draft.error = '';
        break;
      case ACTION_TYPES.FETCH_TOP_RATED_ERROR:
        draft.loading = false;
        draft.topRated = [];
        draft.error = action.message;
        break;
    }
  });

export default topRatedReducer;

/*
 *
 * Trending reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, ACTION_TYPES } from './constants';

export const initialState = {
  loading: false,
  trending: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const trendingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case ACTION_TYPES.FETCH_REQUEST:
        draft.loading = true;
        break;

      case ACTION_TYPES.FETCH_SUCCESS:
        draft.loading = false;
        draft.trending = action.payload;
        draft.error = '';
        break;
      case ACTION_TYPES.FETCH_ERROR:
        draft.loading = false;
        draft.trending = [];
        draft.error = action.message;
        break;
    }
  });

export default trendingReducer;

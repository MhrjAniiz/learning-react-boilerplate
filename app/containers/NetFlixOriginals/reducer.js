/*
 *
 * NetFlixOriginals reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, ACTION_TYPES } from './constants';

export const initialState = {
  loading: false,
  netflixOriginals: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const netFlixOriginalsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case ACTION_TYPES.FETCH_NETFLIX_ORIGINALS_REQUEST:
        draft.loading = true;
        break;

      case ACTION_TYPES.FETCH_NETFLIX_ORIGINALS_SUCCESS:
        draft.loading = false;
        draft.netflixOriginals = action.payload;
        draft.error = '';
        break;
      case ACTION_TYPES.FETCH_NETFLIX_ORIGINALS_ERROR:
        draft.loading = false;
        draft.netflixOriginals = [];
        draft.error = action.message;
        break;
    }
  });

export default netFlixOriginalsReducer;

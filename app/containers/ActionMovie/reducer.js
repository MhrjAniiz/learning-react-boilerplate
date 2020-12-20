/*
 *
 * ActionMovie reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, ACTION_TYPES } from './constants';

export const initialState = {
  loading: false,
  actionMovies: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const actionMovieReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case ACTION_TYPES.FETCH_ACTION_REQUEST:
        draft.loading = true;
        break;

      case ACTION_TYPES.FETCH_ACTION_SUCCESS:
        draft.loading = false;
        draft.actionMovies = action.payload;
        draft.error = '';
        break;
      case ACTION_TYPES.FETCH_ACTION_ERROR:
        draft.loading = false;
        draft.actionMovies = [];
        draft.error = action.message;
        break;
    }
  });

export default actionMovieReducer;

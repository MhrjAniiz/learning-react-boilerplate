/*
 *
 * ComedyMovie reducer
 *
 */
import produce from 'immer';
import { ACTION_TYPES, DEFAULT_ACTION } from './constants';

export const initialState = {
  loading: false,
  comedy: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const comedyMovieReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case ACTION_TYPES.FETCH_COMEDY_REQUEST:
        draft.loading = true;
        break;
      case ACTION_TYPES.FETCH_COMEDY_SUCCESS:
        draft.loading = false;
        draft.comedy = action.payload;
        draft.error = '';
        break;
      case ACTION_TYPES.FETCH_COMEDY_ERROR:
        draft.loading = false;
        draft.comedy = [];
        draft.error = action.message;
        break;
    }
  });

export default comedyMovieReducer;

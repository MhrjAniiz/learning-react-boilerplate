/*
 *
 * HorrorMovie reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, ACTION_TYPES } from './constants';

export const initialState = {
  loading: false,
  horror: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const horrorMovieReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case ACTION_TYPES.FETCH_HORROR_REQUEST:
        draft.loading = true;
        break;
      case ACTION_TYPES.FETCH_HORROR_SUCCESS:
        draft.loading = false;
        draft.horror = action.payload;
        draft.error = '';
        break;
      case ACTION_TYPES.FETCH_HORROR_ERROR:
        draft.loading = false;
        draft.horror = [];
        draft.error = action.message;
        break;
    }
  });

export default horrorMovieReducer;

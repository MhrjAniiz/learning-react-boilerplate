/*
 *
 * RomanticMovie reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, ACTION_TYPES } from './constants';

export const initialState = {
  loading: false,
  romantic: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const romanticMovieReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case ACTION_TYPES.FETCH_ROMANTIC_REQUEST:
        draft.loading = true;
        break;

      case ACTION_TYPES.FETCH_ROMANTIC_SUCCESS:
        draft.loading = false;
        draft.romantic = action.payload;
        draft.error = '';
        break;
      case ACTION_TYPES.FETCH_ROMANTIC_ERROR:
        draft.loading = false;
        draft.romantic = [];
        draft.error = action.message;
        break;
    }
  });

export default romanticMovieReducer;

/*
 *
 * Documentries reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, ACTION_TYPES } from './constants';

export const initialState = {
  loading: false,
  documentries: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const documentriesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case ACTION_TYPES.FETCH_DOCUMENTRIES_REQUEST:
        draft.loading = true;
        break;

      case ACTION_TYPES.FETCH_DOCUMENTRIES_SUCCESS:
        draft.loading = false;
        draft.documentries = action.payload;
        draft.error = '';
        break;
      case ACTION_TYPES.FETCH_DOCUMENTRIES_ERROR:
        draft.loading = false;
        draft.documentries = [];
        draft.error = action.message;
        break;
    }
  });

export default documentriesReducer;

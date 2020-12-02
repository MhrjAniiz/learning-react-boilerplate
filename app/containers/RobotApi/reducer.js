/*
 *
 * RobotApi reducer
 *
 */
import produce from 'immer';
import {
  FETCH_ROBOT,
  FETCH_ROBOT_FAIL,
  FETCH_ROBOT_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  data: [],
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const robotApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROBOT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROBOT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_ROBOT_FAIL:
      return {
        loading: false,
        data: [],
        error: action.message,
      };
    default:
      return state;
  }
};

export default robotApiReducer;

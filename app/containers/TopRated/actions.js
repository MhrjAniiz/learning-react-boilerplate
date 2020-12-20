/*
 *
 * TopRated actions
 *
 */

import { DEFAULT_ACTION, ACTION_TYPES } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchRequest() {
  return {
    type: ACTION_TYPES.FETCH_TOP_RATED_REQUEST,
  };
}

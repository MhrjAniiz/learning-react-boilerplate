/*
 *
 * ComedyMovie actions
 *
 */

import { ACTION_TYPES, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchRequest() {
  return {
    type: ACTION_TYPES.FETCH_COMEDY_REQUEST,
  };
}

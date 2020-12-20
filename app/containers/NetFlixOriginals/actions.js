/*
 *
 * NetFlixOriginals actions
 *
 */

import { DEFAULT_ACTION } from './constants';
import { ACTION_TYPES } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchRequest() {
  return {
    type: ACTION_TYPES.FETCH_NETFLIX_ORIGINALS_REQUEST,
  };
}

/*
 *
 * RobotApi actions
 *
 */

import { FETCH_ROBOT } from './constants';

export function fetchRobots() {
  return {
    type: FETCH_ROBOT,
  };
}

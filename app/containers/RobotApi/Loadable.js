/**
 *
 * Asynchronously loads the component for RobotApi
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

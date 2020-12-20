/**
 *
 * Asynchronously loads the component for ComedyMovie
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

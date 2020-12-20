/**
 *
 * Asynchronously loads the component for ActionMovie
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

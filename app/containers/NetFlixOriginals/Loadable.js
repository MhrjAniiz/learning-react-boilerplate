/**
 *
 * Asynchronously loads the component for NetFlixOriginals
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

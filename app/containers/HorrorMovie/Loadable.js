/**
 *
 * Asynchronously loads the component for HorrorMovie
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

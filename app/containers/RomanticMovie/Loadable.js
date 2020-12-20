/**
 *
 * Asynchronously loads the component for RomanticMovie
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

/**
 *
 * Asynchronously loads the component for Documentries
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

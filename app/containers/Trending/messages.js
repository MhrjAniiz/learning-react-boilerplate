/*
 * Trending Messages
 *
 * This contains all the text for the Trending container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Trending';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Trending container!',
  },
});

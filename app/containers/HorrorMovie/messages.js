/*
 * HorrorMovie Messages
 *
 * This contains all the text for the HorrorMovie container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HorrorMovie';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HorrorMovie container!',
  },
});

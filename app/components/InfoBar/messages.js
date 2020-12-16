/*
 * InfoBar Messages
 *
 * This contains all the text for the InfoBar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.InfoBar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the InfoBar component!',
  },
});

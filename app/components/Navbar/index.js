/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Navbar() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Navbar.propTypes = {};

export default memo(Navbar);

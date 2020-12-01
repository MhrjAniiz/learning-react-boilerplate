/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Nav from './Nav';
import Paragraph from './P';
import messages from './messages';

function Navbar() {
  return (
    <Nav>
      <Paragraph>RoboFriends</Paragraph>
    </Nav>
  );
}

Navbar.propTypes = {};

export default memo(Navbar);

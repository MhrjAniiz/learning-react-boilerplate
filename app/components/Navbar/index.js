/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Paragraph from './P';
import './navbar.css';

function Navbar() {
  return (
    <Nav>
      <Paragraph>
        <Link className="link" to="/">
          RoboFriends
        </Link>
      </Paragraph>
    </Nav>
  );
}

Navbar.propTypes = {};

export default memo(Navbar);

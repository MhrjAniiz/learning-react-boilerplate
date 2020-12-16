/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../images/1280px-Netflix_2015_logo.svg.png';
import { Button } from 'antd';

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo__image" src={logo} />
      <Button className="btn" type="primary" danger>
        Sign In
      </Button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatchEvent(logout()),
  };
}

Navbar.propTypes = {};

export default memo(Navbar);

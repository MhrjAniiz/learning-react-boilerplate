/**
 *
 * HomeForm
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import './HomeForm.css';

function HomeForm() {
  return (
    <div className="searchBar">
      <input type="email" placeholder="Email address" />
      <button type="submit">GET STARTED </button>
    </div>
  );
}

HomeForm.propTypes = {};

export default memo(HomeForm);

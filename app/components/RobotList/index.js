/**
 *
 * RobotList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Div from './Div';
import Image from './Image';

function RobotList({ id, name, email }) {
  return (
    <Div>
      <Image src={`https://robohash.org/${id}`} alt="Avatar" class="avatar" />
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
    </Div>
  );
}

RobotList.propTypes = {};

export default memo(RobotList);

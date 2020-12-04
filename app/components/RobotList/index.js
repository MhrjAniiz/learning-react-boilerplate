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
    <div>
      <Div>
        <Image
          src={`https://robohash.org/${id}`}
          alt="Avatar"
          className="avatar"
        />
        <h3>Name : {name}</h3>
        <h3>Email : {email}</h3>
      </Div>
    </div>
  );
}

RobotList.propTypes = {};

export default memo(RobotList);

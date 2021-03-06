/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import { isLogin } from '../../utils/localStorage';
import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PrivateRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      component={props => {
        return isLogin() ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

PrivateRoute.propTypes = {};

export default PrivateRoute;

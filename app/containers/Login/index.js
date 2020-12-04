/**
 *
 * Login
 *
 */

import { memo } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import LoginForm from './LoginForm';

import makeSelectLogin from './selectors';
import {
  makeSelectPassword,
  makeSelectUserName,
  makeSelectAuthenticated,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import {
  loginRequest,
  handleNameChange,
  handlePasswordChange,
} from './actions';

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  authenticated: makeSelectAuthenticated(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
  name: makeSelectUserName(),
  password: makeSelectPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    submit: () => dispatch(loginRequest()),
    onNameChange: username => dispatch(handleNameChange(username)),
    onPasswordChange: password => dispatch(handlePasswordChange(password)),
    logout: () => dispatchEvent(logout()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginForm);

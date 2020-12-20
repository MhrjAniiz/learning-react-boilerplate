/**
 *
 * ActionMovie
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { fetchRequest } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectActionMovie from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Rows from 'components/MoviesRow/Rows';
import {
  makeSelectLoading,
  makeSelectActionData,
  makeSelectError,
} from './selectors';

export function ActionMovie({ loading, action, error, fetchRequest }) {
  useInjectReducer({ key: 'actionMovie', reducer });
  useInjectSaga({ key: 'actionMovie', saga });
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div>
      <Rows title="Action Movies" data={action} islargeRow />
    </div>
  );
}

ActionMovie.propTypes = {};

const mapStateToProps = createStructuredSelector({
  action: makeSelectActionData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchRequest: () => dispatch(fetchRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ActionMovie);

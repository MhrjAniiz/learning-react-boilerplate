/**
 *
 * ComedyMovie
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
import makeSelectComedyMovie from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectLoading,
  makeSelectComedyData,
  makeSelectError,
} from './selectors';
import Rows from 'components/MoviesRow/Rows';

export function ComedyMovie({ comedy, loading, error, fetchRequest }) {
  useInjectReducer({ key: 'comedyMovie', reducer });
  useInjectSaga({ key: 'comedyMovie', saga });
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div>
      <Rows title="Comedy" data={comedy} />
    </div>
  );
}

ComedyMovie.propTypes = {
  fetchRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  comedy: makeSelectComedyData(),
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
)(ComedyMovie);

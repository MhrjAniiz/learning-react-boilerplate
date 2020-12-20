/**
 *
 * TopRated
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
import makeSelectTopRated from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectLoading,
  makeSelectTopRatedData,
  makeSelectError,
} from './selectors';
import Rows from 'components/MoviesRow/Rows';

export function TopRated({ loading, fetchRequest, error, topRated }) {
  useInjectReducer({ key: 'topRated', reducer });
  useInjectSaga({ key: 'topRated', saga });

  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div>
      <Rows title="Top Rated" data={topRated} isLargeRow />
    </div>
  );
}

TopRated.propTypes = {
  fetchRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  topRated: makeSelectTopRatedData(),
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
)(TopRated);

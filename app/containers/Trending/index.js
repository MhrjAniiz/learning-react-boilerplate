/**
 *
 * Trending
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
import makeSelectTrending from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectLoading,
  makeSelectTrendingData,
  makeSelectError,
} from './selectors';
import Rows from 'components/MoviesRow/Rows';

export function Trending({ fetchRequest, trending, loading, error }) {
  useInjectReducer({ key: 'trending', reducer });
  useInjectSaga({ key: 'trending', saga });

  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div>
      <Rows title="Trending" data={trending} isLargeRow />
    </div>
  );
}

Trending.propTypes = {
  fetchRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  trending: makeSelectTrendingData(),
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
)(Trending);

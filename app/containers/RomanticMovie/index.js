/**
 *
 * RomanticMovie
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
import makeSelectRomanticMovie from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectLoading,
  makeSelectRomanticData,
  makeSelectError,
} from './selectors';
import Rows from 'components/MoviesRow/Rows';

export function RomanticMovie({ fetchRequest, loading, romantic, error }) {
  useInjectReducer({ key: 'romanticMovie', reducer });
  useInjectSaga({ key: 'romanticMovie', saga });
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div>
      <Rows title="Romantic" data={romantic} />
    </div>
  );
}

RomanticMovie.propTypes = {};

const mapStateToProps = createStructuredSelector({
  romantic: makeSelectRomanticData(),
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
)(RomanticMovie);

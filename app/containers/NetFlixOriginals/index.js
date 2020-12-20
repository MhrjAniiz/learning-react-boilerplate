/**
 *
 * NetFlixOriginals
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
import makeSelectNetFlixOriginals from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectLoading,
  makeSelectNetflixData,
  makeSelectError,
} from './selectors';
import Rows from 'components/MoviesRow/Rows';

export function NetFlixOriginals({ netflix, loading, error, fetchRequest }) {
  useInjectReducer({ key: 'netFlixOriginals', reducer });
  useInjectSaga({ key: 'netFlixOriginals', saga });

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div>
      <Rows title="Netflix Originals" data={netflix} isLargeRow />
    </div>
  );
}

NetFlixOriginals.propTypes = {
  fetchRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  netflix: makeSelectNetflixData(),
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
)(NetFlixOriginals);

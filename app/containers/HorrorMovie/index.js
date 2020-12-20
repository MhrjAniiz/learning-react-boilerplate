/**
 *
 * HorrorMovie
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
import makeSelectHorrorMovie from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectLoading,
  makeSelectHorrorData,
  makeSelectError,
} from './selectors';
import Rows from 'components/MoviesRow/Rows';

export function HorrorMovie({ loading, netflix, error, fetchRequest }) {
  useInjectReducer({ key: 'horrorMovie', reducer });
  useInjectSaga({ key: 'horrorMovie', saga });

  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div>
      <Rows title="Horror" data={netflix} />
    </div>
  );
}

HorrorMovie.propTypes = {
  fetchRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  netflix: makeSelectHorrorData(),
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
)(HorrorMovie);

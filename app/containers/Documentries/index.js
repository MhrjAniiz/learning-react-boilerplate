/**
 *
 * Documentries
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
import makeSelectDocumentries from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  makeSelectLoading,
  makeSelectDocumentriesData,
  makeSelectError,
} from './selectors';
import Rows from 'components/MoviesRow/Rows';

export function Documentries({ loading, documentries, error, fetchReq }) {
  useInjectReducer({ key: 'documentries', reducer });
  useInjectSaga({ key: 'documentries', saga });
  useEffect(() => {
    fetchReq();
  }, []);
  return (
    <div>
      <Rows title="Documentries" data={documentries} />
    </div>
  );
}

Documentries.propTypes = {
  fetchReq: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  documentries: makeSelectDocumentriesData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchReq: () => dispatch(fetchRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Documentries);

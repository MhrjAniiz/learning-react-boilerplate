/**
 *
 * RobotApi
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { fetchRobots } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeDataSelector from './selectors';
import reducer from './reducer';
import saga from './saga';
import RobotList from 'components/RobotList';

export function RobotApi({ data, fetchData }) {
  useInjectReducer({ key: 'robotApi', reducer });
  useInjectSaga({ key: 'robotApi', saga });

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <Helmet>
        <title>Robot page</title>
        <meta name="description" content="Description of RobotApi" />
      </Helmet>
      {data.loading && <p> loading ......</p>}
      {data.data.length > 0 &&
        data.data.map(user => {
          return (
            <RobotList
              id={user.id}
              name={user.name}
              company={user.company}
              email={user.email}
              key={user.id}
            />
          );
        })}
      {data.data.length === 0 && <p>no users available</p>}
      {data.error && !loading && <p>{error}</p>}
    </div>
  );
}

RobotApi.propTypes = {
  data: PropTypes.any,
  fetchData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeDataSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchRobots()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RobotApi);

/**
 *
 * MoviePage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMoviePage from './selectors';
import reducer from './reducer';
import messages from './messages';
import Trending from '../Trending/Loadable';
import ActionMovie from '../ActionMovie/Loadable';
import TopRated from '../TopRated/Loadable';
import RomanticMovie from '../RomanticMovie/Loadable';
import NetFlixOriginals from '../NetFlixOriginals/Loadable';
import HorrorMovie from '../HorrorMovie/Loadable';
import ComedyMovie from '../ComedyMovie/Loadable';
import Documnetries from '../Documentries/Loadable';
import Banner from 'components/Banner/Banner';
import './MoviePage.css';
import Topbar from 'components/Topbar/Topbar';

export function MoviePage() {
  useInjectReducer({ key: 'moviePage', reducer });

  return (
    <div className="movie-body">
      <Banner />
      <div className="row-container">
        <NetFlixOriginals />
        <Trending />
        <TopRated />
        <ActionMovie />

        <RomanticMovie />
        <HorrorMovie />
        <ComedyMovie />
        <Documnetries />
      </div>
    </div>
  );
}

MoviePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  moviePage: makeSelectMoviePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MoviePage);

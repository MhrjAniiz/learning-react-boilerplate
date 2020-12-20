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
import Logo from '../../images/1280px-Netflix_2015_logo.svg.png';
import { Link, Redirect } from 'react-router-dom';
import { isLogin, clearLocalSession } from '../../utils/localStorage';

export function MoviePage() {
  useInjectReducer({ key: 'moviePage', reducer });

  if (!isLogin()) return <Redirect to="/" />;
  const [show, handleShow] = useState(false);

  const handleLogOut = () => {
    clearLocalSession();
    location.replace('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className="movie-body">
      <div className={`nav ${show && 'nav__black'}`}>
        <Link to="/">
          <img className="nav__logo" src={Logo} alt="" />
        </Link>
        <button onClick={handleLogOut} className="nav__logout">
          logout
        </button>
      </div>
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

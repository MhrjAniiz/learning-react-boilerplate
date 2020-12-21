/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import RobotApi from 'containers/RobotApi/Loadable';
import Login from 'containers/Login/Loadable';
import PrivateRoute from 'components/PrivateRoute';
import MoviePage from 'containers/MoviePage/Loadable';
import Topbar from 'components/Topbar/Topbar';

export default function App() {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact={true} path="/robots" component={RobotApi} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/movies" component={MoviePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

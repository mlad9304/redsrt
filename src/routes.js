import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { userIsNotAuthenticatedRedir, userIsAuthenticatedRedir } from 'utils/authHelper';

import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route exact path="/login" component={userIsNotAuthenticatedRedir(Login)} />
      <Route exact path="/dashboard" component={userIsAuthenticatedRedir(Dashboard)} />
    </Switch>
  </Router>
);

export default Routes;

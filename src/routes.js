import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from 'pages/Login';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;

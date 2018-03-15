import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LogIn from 'containers/LogIn';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={LogIn} />
    </Switch>
  </Router>
);

export default Routes;

import {
 BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import React from 'react';
import { isAuthenticated } from './Services/auth';
import Home from './Pages/Home';
import Main from './Pages/Main';
import Box from './Pages/Box';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
  }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/main" component={Main} />
      <PrivateRoute path="/box/:id" component={Box} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);


export default Routes;

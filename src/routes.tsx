/* eslint-disable @typescript-eslint/class-name-casing */
import {
 BrowserRouter, Switch, Route,
} from 'react-router-dom';

import React from 'react';

import Main from './Pages/Main';
import Box from './Pages/Box';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  </BrowserRouter>
);


export default Routes;

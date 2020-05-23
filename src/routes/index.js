import React from 'react';
import { Switch } from 'react-router-dom';

import About from '~/pages/About';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import Work from '~/pages/Work';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/" to="/error" component={NotFound} />
  </Switch>
);

export default Routes;

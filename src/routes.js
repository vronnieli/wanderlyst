import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import ItinerariesIndex from './components/itineraries_index'

export default (
  <Route path="/" component={App}>
    <Route path="/cocktails" component={ ItinerariesIndex } />
  </Route>
)

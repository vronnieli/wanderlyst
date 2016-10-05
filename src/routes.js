import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import ItinerariesIndex from './components/itineraries_index'
import ItinerariesNew from './components/itineraries_new'

export default (
  <Route>
    <Route path="/" component={App} >
      <Route path="/itineraries" component={ ItinerariesIndex } />
      <Route path="/itineraries/new" component={ ItinerariesNew }/>
    </Route>
  </Route>
)

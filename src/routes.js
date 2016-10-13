import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import ItinerariesIndex from './components/itineraries_index'
import ItinerariesNew from './components/itineraries_new'
import ItinerariesShow from './components/itineraries_show'
import LoginForm from './components/login_form'
import SignUpForm from './components/sign_up_form'
import ItinerariesUpdate from './components/itineraries_update'

export default (
  <Route>
    <Route path="/" component={App}  >
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/itineraries" component={ItinerariesIndex} >
        <Route path="/itineraries/new" component={ItinerariesNew} onEnter={requireAuth} />
        <Route path="/itineraries/:id" component={ItinerariesShow} />
        <Route path="/itineraries/:id/update" component={ItinerariesUpdate} />
      </Route>
    </Route>
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt){
    replace({
      pathname: '/login',
      // state: {
      //   nextPathname: nextState.location.pathname
      // }
    })
  }
}

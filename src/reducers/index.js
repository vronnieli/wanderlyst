import { combineReducers } from 'redux';
import itinerariesReducer from './itineraries_reducer';
import sessionReducer from './sessionReducer';

const rootReducer =  combineReducers({
  itineraries: itinerariesReducer,
  session: sessionReducer
});

export default rootReducer;

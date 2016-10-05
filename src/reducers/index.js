import { combineReducers } from 'redux';
import itinerariesReducer from './itineraries_reducer'

const rootReducer =  combineReducers({
  itineraries: itinerariesReducer,
});

export default rootReducer;

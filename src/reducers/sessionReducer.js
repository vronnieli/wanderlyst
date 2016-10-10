import * as types from '../actions';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = [], action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      sessionStorage.setItem('jwt', action.payload.jwt)
      sessionStorage.setItem('currentUserId', action.payload.currentUserId)
      browserHistory.push('/')
      return !!sessionStorage.jwt
    case 'LOG_OUT':
      browserHistory.push('/')
    default:
      return state;
  }
}

// export default function sessionReducer(state = initialState.session, action) {
//   switch (action.type) {
//     case types.LOG_IN_SUCCESS:
//       browserHistory.push('/')
//       // check out what browserHistory is...
//       return !!sessionStorage.jwt;
//     default:
//       return state;
//   }
// }

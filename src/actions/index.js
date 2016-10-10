// export const BASE_URL = 'https://wanderlyst-api.herokuapp.com/api/v1/'
export const BASE_URL = 'http://localhost:3000/api/v1/'

export function createUser(params){
  // debugger
  // const headers = this.requestHeaders();
  debugger
  const user = fetch(`${BASE_URL}users`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // headers
    }
  })
  debugger
  return {
    type: 'CREATE_USER',
    payload: user
  }
}
// static requestHeaders() {
export function requestHeaders() {
  return {
    'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
  }
}

export function logInUser(credentials) {
  const jwtToken = fetch(`${BASE_URL}login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(response => {
    return response.json()
  }).then(jwtPayload => {
    return jwtPayload
  })
  return {type: 'LOG_IN_SUCCESS', payload: jwtToken}
}

export function logOutUser(){
  sessionStorage.removeItem('jwt');
  return {type: 'LOG_OUT'}
}

// export function loginSuccess(){
//   return {type: types.LOG_IN_SUCCESS};
// }
//
// export function logInUser(credentials){
//   return function(dispatch){
//     return sessionApi.login(credentials).then(response =>{
//       sessionStorage.setItem('jwt', response.jwt);
//       dispatch(loginSuccess());
//     }).catch(error => {
//       throw(error)
//     });
//   };
// }

export function searchedItineraries(searchTerm){
  const itineraries = fetch(`${BASE_URL}itineraries/:search`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify(searchTerm)
    }).then((response) => {return response.json()}).then((itinerariesPayload) => {return itinerariesPayload})
  return {
    type: 'SEARCHED_ITINERARIES',
    payload: itineraries
  }
}


export function fetchItineraries(){
  const itineraries = fetch(`${BASE_URL}itineraries`).then((response) => {return response.json()}).then((itinerariesPayload) => {return itinerariesPayload})
  return {
    type: 'FETCH_ITINERARIES',
    payload: itineraries
  }
}

export function createItinerary(params){
  const headers = this.requestHeaders();
  const itinerary = fetch(`${BASE_URL}itineraries`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      headers
    }
  })
  return {
    type: 'CREATE_ITINERARY',
    payload: itinerary
  }
}

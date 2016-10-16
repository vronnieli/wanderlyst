//export const BASE_URL = 'https://wanderlyst-api.herokuapp.com/api/v1/'
export const BASE_URL = 'http://localhost:3000/api/v1/'

export function createUser(params){
  const user = fetch(`${BASE_URL}users`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // headers
    }
  })
  return {
    type: 'CREATE_USER',
    payload: user
  }
}
// static requestHeaders() {
// export function requestHeaders() {
//   return {
//     'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
//   }
// }

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
  const itinerary = fetch(`${BASE_URL}itineraries`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
    }
  }).then((response) => {return response.json()}).then((itineraryPayload) => {return itineraryPayload})
  return {
    type: 'CREATE_ITINERARY',
    payload: itinerary
  }
}

export function updateItinerary(params){
  // debugger
  // const headers = this.requestHeaders();
  const itineraries = fetch(`${BASE_URL}itineraries/${params.itinerary.id}`, {
    method: 'PATCH',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
    }
  }).then((response) => {return response.json()}).then((itinerariesPayload) => {return itinerariesPayload})
  return {
    type: 'UPDATE_ITINERARY',
    payload: itineraries
  }
}

export function addVote(params) {
  debugger;
  const itineraries = fetch(`${BASE_URL}itineraries/${params.itinerary.id}`, {
    method: 'PATCH',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
    }
  }).then((response) => {return response.json()}).then((itinerariesPayload) => {return itinerariesPayload})
  return {
    type: 'ADD_VOTE',
    payload: itineraries
  }
}

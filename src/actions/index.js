// const BASE_URL = 'https://wanderlyst-api.herokuapp.com/'
const BASE_URL = 'http://localhost:3000/'

export function searchedItineraries(searchTerm){
  const itineraries = fetch(`${BASE_URL}api/v1/itineraries/:search`, {
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

// export function searchedItineraries(params){
//   const itineraries = fetch(`${BASE_URL}api/v1/itineraries/:search`, {
//     method: 'POST',
//     body: JSON.stringify(params),
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//   return {
//     type: 'SEARCH_ITINERARY',
//     payload: itineraries
//   }
// }

export function fetchItineraries(){
  const itineraries = fetch(`${BASE_URL}api/v1/itineraries`).then((response) => {return response.json()}).then((itinerariesPayload) => {return itinerariesPayload})
  return {
    type: 'FETCH_ITINERARIES',
    payload: itineraries
  }
}

export function createItinerary(params){
  const itinerary = fetch(`${BASE_URL}api/v1/itineraries`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return {
    type: 'CREATE_ITINERARY',
    payload: itinerary
  }
}

// export function createDays(params){
//   const day = fetch(`${BASE_URL}api/v1/days`, {
//     method: 'POST',
//     body: JSON.stringify(params),
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//   return {
//     type: 'CREATE_DAYS',
//     payload: day
//   }
// }

const BASE_URL = 'https://wanderlyst-api.herokuapp.com/'

export function searchedItineraries(searchTerm){
  const itineraries = fetch(`${BASE_URL}api/v1/itineraries`).then((response) => {return response.json()}).then((itinerariesPayload) => {return itinerariesPayload})
  return {
    type: 'SEARCHED_ITINERARIES',
    payload: itineraries
  }
}

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

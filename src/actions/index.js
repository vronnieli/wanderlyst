const BASE_URL = 'https://wanderlyst-api.herokuapp.com/'

export function searchedItineraries(searchTerm){
  debugger;
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

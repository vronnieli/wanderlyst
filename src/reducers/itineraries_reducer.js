export default function itineraries_reducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_ITINERARIES':
      return action.payload;
    default:
      return state;
  }
};

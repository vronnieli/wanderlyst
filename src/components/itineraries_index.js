import React from 'react';
import {connect} from 'react-redux';

function ItinerariesIndex(props){

  function renderActivities(activity) {
    return(
        <li>{activity.name}</li>
    )
  }

  function renderLocations(location) {
    return(
      <div>
        <li>{location.city}</li>
        <ul>
          {location.activities.map(renderActivities)}
        </ul>
      </div>
    )
  }

  function renderDays(day) {
    return(
      <div>
        <li>Day {day.day}</li>
        <ul>
          {day.locations.map(renderLocations)}
        </ul>
      </div>
    )
  }

  function renderItineraries(itinerary) {
    return (
      <div>
        <li>{itinerary.name}</li>
        <ul>
          {itinerary.days.map(renderDays)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {props.itineraries.map(renderItineraries)}
      </ul>
    </div>
  )
}

function mapStateToProps(state){
  return {
    itineraries: state.itineraries
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(ItinerariesIndex);

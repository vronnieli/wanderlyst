import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

function ItinerariesIndex(props){

  function renderActivities(activity) {
    return(
        <li key={activity.id}>{activity.name}</li>
    )
  }

  function renderLocations(location) {
    return(
      <div>
        <ul>
        <strong>City: </strong>{location.city}
          {location.activities.map(renderActivities)}
        </ul>
      </div>
    )
  }

  function renderDays(day) {
    return(
      <div className="list-group-item">
        <strong>Day {day.day}</strong>
        {day.locations.map(renderLocations)}
      </div>
    )
  }

  function renderItineraries(itinerary) {
    return (
      <div className="col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <Link to={`/itineraries/${itinerary.id}`}>{itinerary.name}</Link>
            </h3>
          </div>
            {itinerary.days.map(renderDays)}
        </div>
      </div>
    )
  }

  return (
    <div>
      {props.itineraries.map(renderItineraries)}
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

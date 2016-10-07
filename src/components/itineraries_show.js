import React from 'react';
import {connect} from 'react-redux';

function ItinerariesShow(props){
  const itinerary = props.itinerary

  function renderActivities(activity) {
    return(
        <li key={activity.id}>{activity.name}</li>
    )
  }

  function renderLocations(location) {
    return(
      <div>
        <li key={location.id}>{location.city}</li>
        <ul>
          {location.activities.map(renderActivities)}
        </ul>
      </div>
    )
  }

  function renderDays(day) {
    return(
      <div>
        <li key={day.id}>Day {day.day}</li>
        <ul>
          {day.locations.map(renderLocations)}
        </ul>
      </div>
    )
  }

  function renderUsers(user) {
    return(
      <div>
        <li key={user.id}>{user.username}</li>
      </div>
    )
  }

  return (
    <div>
      <h3>{itinerary.name}</h3>
      User: {itinerary.users.map(renderUsers)}
      <ul>
        {itinerary.days.map(renderDays)}
      </ul>
    </div>
  )

}


function mapStateToProps(state, ownProps){
  const itinerary = state.itineraries.find(itinerary => itinerary.id == ownProps.params.id);
  if (itinerary) {
    return {
      itinerary: itinerary
    }
  } else {
    return  {
      itinerary: {
        name: "",
        users: [{
          username: "",
          first_name: "",
          last_name: ""
        }],
        days: [{
          day: "",
          locations: [{
            city: "",
            activities: [{
              name: ""
            }]
          }]
        }]
      }
    }
  }
}

export default connect(mapStateToProps)(ItinerariesShow)

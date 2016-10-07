import React from 'react';
import {connect} from 'react-redux';

function ItinerariesShow(props){
  const itinerary = props.itinerary

  function renderActivities(activity) {
    return(
        <p draggable="true" className="list-group-item" key={activity.id}>{activity.name}</p>
    )
  }

  function renderLocations(location) {
    return(
      <div draggable="true" className="list-group-item">
        <p key={location.id}>{location.city}</p>
        <ul>
          {location.activities.map(renderActivities)}
        </ul>
      </div>
    )
  }

  function renderDays(day) {
    return(
      <div draggable="true" className="list-group-item">
        <h4 key={day.id}>Day {day.day}</h4>
        <ul>
          {day.locations.map(renderLocations)}
        </ul>
      </div>
    )
  }

  function renderUsers(user) {
    return(
      <div>
        <p key={user.id}>{user.username}</p>
      </div>
    )
  }

  return (
    <div className="col-lg-8">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title">
            {itinerary.name}
          </h2>
        </div>
        <p className="list-group-item">User(s): {itinerary.users.map(renderUsers)}</p>
        {itinerary.days.map(renderDays)}
      </div>
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

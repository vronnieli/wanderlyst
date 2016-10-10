import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

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
  //
  // window.itineraryProps = props.itinerary
  return (
    <div className="col-lg-6">
      <div className="panel panel-default">
        <div className="panel-heading">
          <button className="btn btn-default right">{itinerary.upvotes} Upvotes</button>
          <h2 className="panel-title">
            {itinerary.name}
          </h2>
          <Link className="left" to={`/itineraries/${itinerary.id}/update`}>
            Update
          </Link>
          <br />
        </div>
        <div className="list-group-item">User(s): {itinerary.users.map(renderUsers)}</div>
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
        upvotes: 0,
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

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

class ItinerariesShow extends React.Component {
  constructor(props) {
    super(props)
    this.renderUsers = this.renderUsers.bind(this)
    this.renderDays = this.renderDays.bind(this)
    this.renderLocations = this.renderLocations.bind(this)
    this.renderActivites = this.renderActivities.bind(this)
    this.addVote = this.addVote.bind(this)
  }

  addVote(event) {
    event.preventDefault();
    const copyOfState = Object.assign({}, this.state)
    copyOfState.itinerary.upvotes += 1
    this.setState(copyOfState)
    this.props.actions.addVote(copyOfState)
  }

  renderActivities(activity) {
    return(
        <p draggable="true" className="list-group-item" key={activity.id}>
          {activity.name}
          <br/>
          <img className="image" src={"http://localhost:3000"+activity.image_url_thumb} />
        </p>
    )
  }

  renderLocations(location) {
    return(
      <div draggable="true" className="list-group-item">
        <p key={location.id}>{location.city}</p>
        <ul>
          {location.activities.map(this.renderActivities)}
        </ul>
      </div>
    )
  }

  renderDays(day) {
    return(
      <div draggable="true" className="list-group-item">
        <h4 key={day.id}>Day {day.day}</h4>
        <ul>
          {day.locations.map(this.renderLocations)}
        </ul>
      </div>
    )
  }

  renderUsers(user) {
    return(
      <div>
        <p key={user.id}>{user.username}</p>
      </div>
    )
  }

  render() {
    const itinerary = this.props.itinerary
    return (
      <div className="col-lg-8">
        <div className="panel panel-default">
          <div className="panel-heading">
            <button className="btn btn-default right" onClick={this.addVote} >{itinerary.upvotes} Upvotes</button>
            <h2 className="panel-title">
              {itinerary.name}
            </h2>
            <Link className="left" to={`/itineraries/${itinerary.id}/update`}>
              Update
            </Link>
            <br />
          </div>
          <div className="list-group-item">User(s): {itinerary.users.map(this.renderUsers)}</div>
          {itinerary.days.map(this.renderDays)}
        </div>
      </div>
    )
  }
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

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(ItinerariesShow)

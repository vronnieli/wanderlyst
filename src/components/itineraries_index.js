import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function ItinerariesIndex(props){
  // function allowDrop(event) {
  //     event.preventDefault();
  // }
  //
  // function drag(event) {
  //     event.dataTransfer.setData("text", event.target.id);
  // }
  //
  // function drop(event) {
  //     event.prevententDefault();
  //     var data = event.dataTransfer.getData("text");
  //     event.target.appendChild(document.getElementById(data));
  // }

  function renderActivities(activity) {
    return(
        <p className="list-group-item" key={activity.id}>
          {activity.name}
          <img className="image" src={"http://localhost:3000/"+activity.image_url_thumb} />
        </p>
    )
  }

      // <div draggable="true" ondragstart={this.drag} className="list-group-item">
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

      // <div ondrop={this.drop} ondragover={this.allowDrop} className="list-group-item">
  function renderDays(day) {
    return(
      <div className="list-group-item">
        <h4 key={day.id}>Day {day.day}</h4>
        <ul>
          {day.locations.map(renderLocations)}
        </ul>
      </div>
    )
  }

  function renderItineraries(itinerary) {
    return (
      <div >
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
      <div className="col-lg-4">
        {props.itineraries.map(renderItineraries)}
      </div>
      {props.children}
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

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function MyLyst(props){

  // function renderActivities(activity) {
  //   return(
  //       <p className="list-group-item" key={activity.id}>
  //         {activity.name}
  //       </p>
  //   )
  // }
  // function renderLocations(location) {
  //   return(
  //     <div draggable="true" className="list-group-item">
  //       <p key={location.id}>{location.city}</p>
  //       <ul>
  //         {location.activities.map(renderActivities)}
  //       </ul>
  //     </div>
  //   )
  // }
  //
  // function renderDays(day) {
  //   return(
  //     <div className="list-group-item">
  //       <h4 key={day.id}>Day {day.day}</h4>
  //       <ul>
  //         {day.locations.map(renderLocations)}
  //       </ul>
  //     </div>
  //   )
  // }
  //
  // function renderItineraries(itinerary) {
  //   debugger
  //   // itinerary.users[0].id
  //   return (
  //     <div >
  //       <div className="panel panel-default">
  //         <div className="panel-heading">
  //         <button className="btn btn-default right">{itinerary.upvotes} Upvotes</button>
  //           <h3 className="panel-title">
  //             <Link to={`/itineraries/${itinerary.id}`}>{itinerary.name}</Link>
  //           </h3>
  //             <Link to={`/itineraries/${itinerary.id}/update`}>Update</Link>
  //         </div>
  //           {itinerary.days.map(renderDays)}
  //       </div>
  //     </div>
  //   )
  // }
  return(
    <div className="col-lg-8">
      <h1>MY ITINERARIES</h1>
      {/* {props.itineraries.map(renderItineraries)} */}
    </div>
  )
}

function mapStateToProps(state){
  return {
    itineraries: state.itineraries
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MyLyst);

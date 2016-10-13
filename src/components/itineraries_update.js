import React from 'react';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItinerariesNew from './itineraries_new'
import ItinerariesShow from './itineraries_show'
import DayForm from './day_form'

class ItinerariesUpdate extends React.Component {
  constructor(props){
    // debugger;
    super(props)

    this.state = {
      itinerary: props.itinerary
    }
    // this.props.params.id
    this.addDay = this.addDay.bind(this)
    this.addLocation = this.addLocation.bind(this)
    this.addActivity = this.addActivity.bind(this)
    this.updateItineraryHandler = this.updateItineraryHandler.bind(this)
    this.updateItineraryName = this.updateItineraryName.bind(this)
    this.updateDayHandler = this.updateDayHandler.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.updateActivity = this.updateActivity.bind(this)
    this.deleteDay = this.deleteDay.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
    this.deleteActivity = this.deleteActivity.bind(this)
  }
  updateItineraryHandler(event) {
    event.preventDefault();
    this.props.actions.updateItinerary(this.state)
  }

  addDay(event) {
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const dayLength = this.state.itinerary.days.length+1
    copyOfState.itinerary.days.push({
      day: dayLength,
      locations: [{
        id: 1,
        city: "",
        activities: [{
          id: 1,
          name: ""
        }]
      }]
    })
    this.setState(copyOfState)
  }

  deleteDay(event) {
    // debugger;
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const day = event.target.id
    copyOfState.itinerary.days.splice(day-1,1)
    copyOfState.itinerary.days.map((day,index) => {return day.day = index+1})
    this.setState(copyOfState)
  }

  addLocation(event) {
    const day = event.target.id
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const locationLength = this.state.itinerary.days[day-1].locations.length+1
    copyOfState.itinerary.days[day-1].locations.push({
      id: locationLength,
      city: "",
      activities: [{
        id: 1,
        name: ""
      }]
    })
    this.setState(copyOfState)
  }

  deleteLocation(event) {
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const location = event.target.id
    const day = event.target.name
    copyOfState.itinerary.days[day-1].locations.splice(location-1,1)
    copyOfState.itinerary.days[day-1].locations.map((location,index) => {return location.id = index+1})
    this.setState(copyOfState)
  }

  addActivity(event) {
    const location = event.target.id
    const day = event.target.name
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const activitiesLength = this.state.itinerary.days[day-1].locations[location-1].activities.length+1
    copyOfState.itinerary.days[day-1].locations[location-1].activities.push({
      id: activitiesLength,
      name: ""
    })
    this.setState(copyOfState)
  }

  deleteActivity(event) {
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const location = event.target.id
    const day = event.target.name
    const activity = event.target.value
    copyOfState.itinerary.days[day-1].locations[location-1].activities.splice(activity-1,1)
    copyOfState.itinerary.days[day-1].locations[location-1].activities.map((activity,index) => {return activity.id = index+1})
    this.setState(copyOfState)
  }

  updateItineraryName(event) {
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.name = event.target.value
    this.setState(copyOfState)
  }

  updateDayHandler(event){
    const copyOfState = Object.assign({},this.state)
    // debugger;
    if (event.target.value) {
      copyOfState.itinerary.days.filter(item => item.id !== parseInt(event.target.value))
    } else {
      this.deleteDay(event)
    }
    this.setState(copyOfState)
  }

  updateLocation(event) {
    // debugger;
    const location = parseInt(event.target.id)
    const day = parseInt(event.target.name)
    var newValue
    if (event.target.value == undefined){
      newValue = event.target.placeholder
    } else {
      newValue = event.target.value
    }
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days.find(x => x.day === day).locations.find(x => x.id === location).city = event.target.value = newValue
    this.setState(copyOfState)
  }

  updateActivity(event) {
    // debugger;
    const location = event.target.id
    const day = event.target.name
    const activity = event.target.alt
    var newValue
    if (event.target.value == undefined){
      newValue = event.target.placeholder
    } else {
      newValue = event.target.value
    }
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days.find(x => x.day === parseInt(day)).locations.find(x => x.id === parseInt(location)).activities.find(x => x.id === parseInt(activity)).name = newValue
    this.setState(copyOfState)
  }

  collectDayForm() {
    debugger;
    return this.state.itinerary.days.map((day) => {
      return <div className="panel panel-default">
        <div className="panel-heading">
          <button className="btn btn-default right" onClick={this.deleteDay} id={day.day}>Delete</button>
          <h4>Day {day.day}</h4>
        </div>
        <div id="collapseOne" className="panel-collapse collapse in">
          <div className="panel-body">
            <DayForm day={day} addLocation={this.addLocation} addActivity={this.addActivity} updateLocation={this.updateLocation} updateActivity={this.updateActivity} deleteLocation={this.deleteLocation} deleteActivity={this.deleteActivity} ref={this.refs} dayState={this.state} value={this.state.itinerary.days[day.id-1]} />
          </div>
        </div>
      </div>
    })
  }
  render(){
    const dayFormElements = this.collectDayForm()

    return(
      <div className="col-lg-8">
        <div className="panel panel-default">
          <form onSubmit={this.updateItineraryHandler}>
            <div className="panel-heading">
              <div className="form-inline">
                <label>Itinerary Name:</label>
                <input type="text" ref="itinerary-name" value={this.state.itinerary.name} onChange={this.updateItineraryName} />
              </div>
              <button className="btn btn-default" onClick={this.addDay}>+ Date</button>
            </div>
            <div className="panel-body">
              <div className="panel-group">
                {dayFormElements}
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  const itinerary = state.itineraries.find(itinerary => itinerary.id == ownProps.params.id);
  if (itinerary) {
    return {
      itineraries: state.itineraries,
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

// export default connect(mapStateToProps)(ItinerariesShow)


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(ItinerariesUpdate)

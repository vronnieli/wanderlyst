import React from 'react';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DayForm from './day_form';


class ItinerariesNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itinerary: {
        name: "",
        upvotes: 0,
        user: {
          name: ""
        },
        days: [{
          day: 1,
          locations: [{
            id: 1,
            city: "",
            activities: [{
              id: 1,
              name: "",
              image: ""
            }]
          }]
        }]
      }
    }
    this.addDay = this.addDay.bind(this)
    this.addLocation = this.addLocation.bind(this)
    this.addActivity = this.addActivity.bind(this)
    this.newItineraryHandler = this.newItineraryHandler.bind(this)
    this.updateItineraryName = this.updateItineraryName.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.updateActivity = this.updateActivity.bind(this)
    this.updateActivityImage = this.updateActivityImage.bind(this)
    this.deleteDay = this.deleteDay.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
    this.deleteActivity = this.deleteActivity.bind(this)
  }

  newItineraryHandler(event) {
    event.preventDefault();
    // this.props.actions.createItinerary(event.target)
    this.props.actions.createItinerary(this.state)
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
          name: "",
          image: ""
        }]
      }]
    })
    this.setState(copyOfState)
  }

  deleteDay(event) {
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
        name: "",
        image: ""
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
      name: "",
      image: ""
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

  updateLocation(event) {
    // debugger
    const location = event.target.id
    const day = event.target.name
    const newValue = event.target.value
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days[day-1].locations[location-1].city = newValue
    this.setState(copyOfState)
  }

  updateActivity(event) {
    // debugger
    const location = event.target.id
    const day = event.target.name
    const activity = event.target.alt
    const newValue = event.target.value
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days[day-1].locations[location-1].activities[activity-1].name = newValue
    this.setState(copyOfState)
  }

  updateActivityImage(event) {
    const location = event.target.id
    const day = event.target.name
    const activity = event.target.alt
    const newFile = event.target.files[0]
    const reader = new FileReader()
    const copyOfState = Object.assign({},this.state)
    reader.onload = function(event) {
      copyOfState.itinerary.days[day-1].locations[location-1].activities[activity-1].image = event.target.result
      this.setState(copyOfState)
    }.bind(this)
    reader.readAsDataURL(newFile)
  }

  collectDayForm() {
    return this.state.itinerary.days.map((day) => {
      return <div className="panel panel-default">
        <div className="panel-heading">
          <button className="btn btn-default right" onClick={this.deleteDay} id={day.day}>Delete</button>
          <h4>Day {day.day}</h4>
        </div>
        <div id="collapseOne" className="panel-collapse collapse in">
          <div className="panel-body">
            <DayForm day={day} addLocation={this.addLocation} addActivity={this.addActivity} updateLocation={this.updateLocation} updateActivity={this.updateActivity} updateActivityImage={this.updateActivityImage} deleteLocation={this.deleteLocation} deleteActivity={this.deleteActivity} />
          </div>
        </div>
      </div>
    })
  }


  render() {
    const dayFormElements = this.collectDayForm()

    return(
      <div className="col-lg-6">
        <div className="panel panel-default">
          <form onSubmit={this.newItineraryHandler} encType="multipart/form-data">
            <div className="panel-heading">
              <div className="panel-title">
                <label>Itinerary Name:</label>
                <input className="form-control" type="text" ref="itinerary-name" value={this.state.itinerary.name} onChange={this.updateItineraryName} />
              </div>
              <button className="btn btn-default" onClick={this.addDay}>+ Date</button>
            </div>
            <div className="panel-body">
              <div className="panel-group">
                {dayFormElements}
              </div>
            </div>
            <input className="btn btn-default" type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ItinerariesNew)

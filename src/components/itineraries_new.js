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
    this.addDay = this.addDay.bind(this)
    this.addLocation = this.addLocation.bind(this)
    this.newItineraryHandler = this.newItineraryHandler.bind(this)
    this.updateDay = this.updateDay.bind(this)
    this.updateLocation = this.updateLocation.bind(this)

  }

  newItineraryHandler(event) {
    event.preventDefault();
    const newItinerary = {
      itinerary: {
        name: this.refs["itinerary-name"].value
      }
    }
    this.props.actions.createItinerary(newItinerary)
  }

  addDay() {
    const copyOfState = Object.assign({},this.state)
    debugger;
    copyOfState.itinerary.days.push({
      day: "",
      locations: [{
        city: "",
        activities: [{
          name: ""
        }]
      }]
    })
    this.setState(copyOfState)
  }

  addLocation(day) {
    const copyOfState = Object.assign({},this.state)
    debugger
    // const dayNumber = day.day
    // const dayToAddLocation = copyOfState.itinerary.days.map((day) => {
    //   if (day.day === dayNumber) {
    //     return day
    //   }})

    copyOfState.itinerary.days[0].locations.push({
      city: "",
      activities: [{
        name: ""
      }]
    })
  }

  addActivity(location) {
    const copyOfState = Object.assign({},this.state)
    debugger
    // const dayNumber = day.day
    // const dayToAddLocation = copyOfState.itinerary.days.map((day) => {
    //   if (day.day === dayNumber) {
    //     return day
    //   }})

    copyOfState.itinerary.days[0].locations[0].activities.push({
      name: ""
    })
  }

  updateDay(value) {
    debugger;
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days[0].day.location = event.target.value
    this.setState(copyOfState)
  }

  updateLocation(event) {
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days[0].day.location = event.target.value
    this.setState(copyOfState)
    // this.setState({
    //   itinerary: Object.assign({}, this.state.itinerary, {
    //     days: Object.assign([{}], this.state.days, [{
    //       day: event.target.value
    //     }])
    //   })
    // })
  }

  collectDayForm() {
    const dayNumber = this.state.itinerary.days.length
    debugger;
    return this.state.itinerary.days.map((day) => {
      return <DayForm day={day} addDay={this.addDay} updateDay={this.updateDay} value={dayNumber} addLocation={this.addLocation} updateLocation={this.updateLocation} />
    })
  }



  render() {
    const dayFormElements = this.collectDayForm()
    return(
      <div>
        <form onSubmit={this.newItineraryHandler}>
          <label>Itinerary Name:</label>
          <input type="text" ref="itinerary-name" />
          <br></br>
          {dayFormElements}
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


const componentCreator = connect(null, mapDispatchToProps)

export default componentCreator(ItinerariesNew)

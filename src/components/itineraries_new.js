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
    this.newItineraryHandler = this.newItineraryHandler.bind(this)
    this.addLocation = this.addLocation.bind(this)
    this.updateDay = this.updateDay.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  updateState(updatedItinerary) {
    this.setState(updatedItinerary)
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

  // addDay(event) {
  //   event.preventDefault();
  //   const copyOfState = Object.assign({},this.state)
  //   copyOfState.itinerary.days.push({day: ""})
  //   this.setState(copyOfState)
  //   // this.setState({
  //   //   itinerary: Object.assign({}, this.state.itinerary, {
  //   //     days: Object.assign([{}], this.state.days, [{
  //   //       day: event.target.value
  //   //     }])
  //   //   })
  //   // })
  // }

  addLocation(event) {
    event.preventDefault();
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days.slice(-1,1)[0].locations.push({location: ""})
    debugger;
    this.setState(copyOfState)
    debugger;
    // this.setState({
    //   itinerary: Object.assign({}, this.state.itinerary, {
    //     days: Object.assign([{}], this.state.days, [{
    //       day: event.target.value
    //     }])
    //   })
    // })
  }

  updateDay(event) {
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
      return <DayForm day={day} updateDay={this.updateDay} state={this.state} updateState={this.updateState} value={dayNumber} updateLocation={this.updateLocation} addLocation={this.addLocation} />
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

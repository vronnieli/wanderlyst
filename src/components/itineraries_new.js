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

  updateDay(event) {
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days[0].day = event.target.value
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
    return this.state.itinerary.days.map((day) => {
      return <DayForm day={day} onFormChange={this.updateDay.bind(this)}/>
    })
  }

  render() {
    const dayFormElements = this.collectDayForm()
    // debugger
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

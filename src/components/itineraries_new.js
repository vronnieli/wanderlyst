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
    this.setState()
  }

  collectDayForm() {
    this.state.itinerary.days.map((day) => {
      debugger;
      return <div></div>
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

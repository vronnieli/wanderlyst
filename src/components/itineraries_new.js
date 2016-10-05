import React from 'react';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ItinerariesNew extends React.Component {
  constructor(props) {
    super(props)
    this.newItineraryHandler = this.newItineraryHandler.bind(this)
  }
  newItineraryHandler(event) {
    event.preventDefault();
    // debugger
    const newItinerary = {
      itinerary: {
        name: this.refs["itinerary-name"].value
      }
    }
    // debugger;
    this.props.actions.createItinerary(newItinerary)
  }
  render() {
    return(
      <div>
        <form onSubmit={this.newItineraryHandler}>
          <label>Itinerary Name:</label>
          <input type="text" ref="itinerary-name" /><br></br>
          {/* this.refs["it-name"].value */}
          <label>Number of Days:</label>
          <input type="number" ref="num-day" /><br></br>
          {/* this.refs["num-day"].value */}
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

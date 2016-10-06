import React from 'react';
import ActivityForm from './activity_form'

class LocationForm extends React.Component {
  debugger;
  constructor(props){
    debugger;
    super(props);
    this.addLocation = this.addLocation.bind(this)
  }

  collectActivityForm() {
    // const dayNumber = this.state.itinerary.days.length
    const location = this.props.location
    debugger;
    return this.props.location.activities.map((activity) => {
      return <ActivityForm activity={activity} addActivity={this.props.addActivity}  updateActivity={this.props.updateActivity} location={location}/>
    })
  }

  addLocation(event) {
    event.preventDefault();
    this.props.addLocation(this.props.day);
  }

  render(){
  const activityFormElements = this.collectActivityForm()
    return(
      <div>
        <input type="text" />
        <button onClick={this.addLocation}>+ Location</button>
        {activityFormElements}
      </div>
    )
  }

}

export default LocationForm

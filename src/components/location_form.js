import React from 'react';
import ActivityForm from './activity_form'

class LocationForm extends React.Component {

  constructor(props){
    super(props);
  }

  collectActivityForm() {
    // const dayNumber = this.state.itinerary.days.length
    const location = this.props.location
    return this.props.location.activities.map((activity) => {
      return <ActivityForm activity={activity} addActivity={this.props.addActivity} location={this.props.location} day={this.props.day} ref={this.refs} />
    })
  }

  render(){
  const activityFormElements = this.collectActivityForm()
  const location = this.props.location.id
  const day = this.props.day.day
    return(
      <div>
        <input type="text" ref="location-city"/>
        <br/>
        <button onClick={this.props.addActivity} id={location} name={day}>+ Activity</button>
        {activityFormElements}
      </div>
    )
  }

}

export default LocationForm

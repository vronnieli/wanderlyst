import React from 'react';
import ActivityForm from './activity_form'

class LocationForm extends React.Component {

  constructor(props){
    // debugger;
    super(props);
  }

  collectActivityForm() {
    const location = this.props.location
    const day = this.props.day
    return this.props.location.activities.map((activity) => {
      return <div className="panel panel-default">
        <label>Activity</label>
        <ActivityForm activity={activity} addActivity={this.props.addActivity} location={this.props.location} day={this.props.day} updateActivity={this.props.updateActivity} ref={this.refs} id={location.id}/>
        <button className="btn btn-default" onClick={this.props.deleteActivity} id={location.id} name={day.day} value={activity.id}>Delete</button>
      </div>
    })
  }

  render(){

  const activityFormElements = this.collectActivityForm()
  const locationId = this.props.location.id
  const locationCity = this.props.location.city
  const day = this.props.day.day
    return(
      <div>
        <input type="text" ref="location-city" onChange={this.props.updateLocation} id={locationId} apiId={locationId} name={day} value={locationCity}/>
        <br/>
        <button className="btn btn-default" onClick={this.props.addActivity} id={locationId} name={day}>+ Activity</button>
        <div className="panel-group">
          {activityFormElements}
        </div>
      </div>
    )
  }

}

export default LocationForm

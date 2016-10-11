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
<<<<<<< HEAD
      return <div className="panel panel-default">
        <label>Activity</label>
        <ActivityForm activity={activity} addActivity={this.props.addActivity} location={this.props.location} day={this.props.day} updateActivity={this.props.updateActivity} ref={this.refs} id={location.id}/>
        <button className="btn btn-default" onClick={this.props.deleteActivity} id={location.id} name={day.day} value={activity.id}>Delete</button>
      </div>
=======
      return(
        <div className="panel panel-default">
          <button className="btn btn-default right" onClick={this.props.deleteActivity} id={location.id} name={day.day} value={activity.id}>Delete</button>
          <label>Activity</label>
          <div className="panel-group-item">
            <ActivityForm activity={activity} addActivity={this.props.addActivity} location={this.props.location} day={this.props.day} updateActivity={this.props.updateActivity} ref={this.refs} />
          </div>
        </div>
      )
>>>>>>> f8b8c6e4a27a332cd8b5a0e3b8c707b77de627e0
    })
  }

  render(){

  const activityFormElements = this.collectActivityForm()
  const locationId = this.props.location.id
  const locationCity = this.props.location.city
  const day = this.props.day.day
    return(
      <div className="activities">
        <div className="panel-group-item">
          <input className="form-control" type="text" ref="location-city" onChange={this.props.updateLocation} id={location} name={day} value={this.props.location.city}/>
        </div>

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

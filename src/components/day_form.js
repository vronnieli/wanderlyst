import React from 'react';
import LocationForm from './location_form';

class DayForm extends React.Component {
  constructor(props){
    super(props);
  }

  collectLocationForm() {

    const day = this.props.day
    return this.props.day.locations.map((location) => {
      return(
        <div className="panel panel-default">
          <button className="btn btn-default right" onClick={this.props.deleteLocation} id={location.id} name={day.day}>Delete</button>
          <label>Location</label>
          <LocationForm location={location} addActivity={this.props.addActivity} day={day} updateLocation={this.props.updateLocation} updateActivity={this.props.updateActivity} deleteActivity={this.props.deleteActivity} ref={this.refs} />
        </div>
      )
    })
  }


  render(){
  const locationFormElements = this.collectLocationForm()
  const day = this.props.day.day
    return(
      <div>
        <button className="btn btn-default" onClick={this.props.addLocation} id={day}>+ Location</button>
        <div className="panel-group">
          {locationFormElements}
        </div>
      </div>
    )
  }
}

export default DayForm

import React from 'react';
import LocationForm from './location_form';

class DayForm extends React.Component {
  constructor(props){
    super(props);
  }

  collectLocationForm() {
    // const dayNumber = this.state.itinerary.days.length
    const day = this.props.day
    return this.props.day.locations.map((location) => {
      return <div><label>Location</label><LocationForm location={location} addActivity={this.props.addActivity} day={day} ref={this.refs} /></div>
    })
  }


  render(){
  const locationFormElements = this.collectLocationForm()
  const day = this.props.day.day
    return(
      <div>
        <button onClick={this.props.addLocation} id={day}>+ Location</button>
        {locationFormElements}
      </div>
    )
  }
}

export default DayForm

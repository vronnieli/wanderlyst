import React from 'react';
import LocationForm from './location_form';

class DayForm extends React.Component {
  constructor(props){
    super(props);
    this.addDay = this.addDay.bind(this)
  }


  collectLocationForm() {
    // const dayNumber = this.state.itinerary.days.length
    const day = this.props.day
    debugger;
    return this.props.day.locations.map((location) => {
      return <LocationForm location={location} addLocation={this.props.addLocation}  updateLocation={this.props.updateLocation} day={day}/>
    })
  }

  addDay(event) {
    event.preventDefault();
    this.props.addDay();
  }

  render(){
  const locationFormElements = this.collectLocationForm()
    return(
      <div>
        <input type="text" onChange={this.updateDay} id={this.value}/>
        {this.value}
        <button onClick={this.addDay}>+ Date</button>
        {locationFormElements}
      </div>
    )
  }
}

export default DayForm

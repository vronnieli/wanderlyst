import React from 'react';
import LocationForm from './location_form';

class DayForm extends React.Component {
  debugger;
  constructor(props){
    debugger;
    super(props);

    this.addDay = this.addDay.bind(this)
  }


  // collectLocationForm() {
  //   // const dayNumber = this.state.itinerary.days.length
  //   debugger;
  //   return this.props.day.locations.map((location) => {
  //     return <LocationForm location={location}/>
  //   })
  // }

  addDay(event) {
    event.preventDefault();
    debugger;
    const copyOfItinerary = Object.assign({},this.props.state.itinerary)
    copyOfItinerary.days.push({day: ""})
    this.props.updateState(copyOfItinerary)
    // this.setState({
    //   itinerary: Object.assign({}, this.state.itinerary, {
    //     days: Object.assign([{}], this.state.days, [{
    //       day: event.target.value
    //     }])
    //   })
    // })
  }

  render(){

    return(
      <div>
        <input type="text" onChange={this.updateDay} id={this.value} updateLocation={this.updateLocation}/>
        {this.value}
        <button onClick={this.addDay}>+ Date</button>

      </div>
    )
  }
}

export default DayForm

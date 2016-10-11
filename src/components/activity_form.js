import React from 'react';

class ActivityForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const location = this.props.location.id
    const day = this.props.day.day
    const activity = this.props.activity.id
    return(
      <div>
        <input type="text" onChange={this.props.updateActivity} id={location} name={day} alt={activity}/>
        <input type="file" onChange={this.props.updateActivityImage} id={location} name={day} alt={activity}/>
      </div>
    )
  }
}

export default ActivityForm

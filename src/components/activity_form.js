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
        <label>Activity</label>
        <br></br>
        <input type="text" ref="activity-name" onChange={this.props.updateActivity} id={location} name={day} alt={activity}/>
      </div>
    )
  }
}

export default ActivityForm

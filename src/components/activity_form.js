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
      <div className="panel-group-item">
        <input className="form-control" type="text" onChange={this.props.updateActivity} id={location} name={day} alt={activity} value={this.props.activity.name}/>
        <input type="file" onChange={this.props.updateActivityImage} id={location} name={day} alt={activity}/>
      </div>
    )
  }
}

export default ActivityForm

import React from 'react';

class ActivityForm extends React.Component {
  debugger;
  constructor(props){
    debugger;
    super(props);
    this.addActivity = this.addActivity.bind(this)
  }


  addActivity(event) {
    event.preventDefault();
    this.props.addActivity(this.props.location);
  }

  render(){
    return(
      <div>
        <input type="text" ref="activity-name"/>
        <button onClick={this.addActivity}>+ Activity</button>
      </div>
    )
  }

}

export default ActivityForm

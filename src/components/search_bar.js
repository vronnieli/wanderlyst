import React from 'react';
import * as actions from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler(event){
    event.preventDefault();
    this.props.actions.searchedItineraries({
      location: this.refs.location.value,
      days: this.refs.days.value,
      activity: this.refs.activity.value
    })
    event.target.children[1].value = ""
  }

  render(){
  return (
    <nav className="navbar navbar-inverse">
      <form className="form-inline" onSubmit={this.onSubmitHandler} >
        <input type="text" placeholder="city" ref="location"/>
        <input type="number" placeholder="number of days" ref="days"/>
        <input type="text" placeholder="activity" ref="activity"/>
        <input type="submit" />
      </form>
    </nav>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions,dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SearchBar)

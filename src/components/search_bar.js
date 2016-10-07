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
      <form className="navbar navbar-inverse navbar-static-top well well-lg" role="search" onSubmit={this.onSubmitHandler} >
        <div className="container-fluid form-inline">

          <input type="text" className="form-control" placeholder="city" ref="location"/>

          <input type="number" className="form-control" placeholder="number of days" ref="days"/>

          <input type="text" className="form-control" placeholder="activity" ref="activity"/>

          <button type="submit" class="btn btn-default">Search</button>
          
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions,dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SearchBar)

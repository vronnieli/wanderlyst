import React from 'react';
import * as actions from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const SearchBar = function(props) {
  function onSubmitHandler(event){
    event.preventDefault();
    props.actions.searchedItineraries(event.target.children[1].value)
    event.target.children[1].value = ""
  }

  return (
    <nav className="navbar navbar-inverse">
      <form className="navbar-form" onSubmit={onSubmitHandler.bind(this)}>
        <label color="white">Search:</label>
        <input type="text" placeholder="city"/>
        <input type="number" placeholder="number of days"/>
        <input type="text" placeholder="activity"/>
        <input type="submit" />
      </form>
    </nav>
  )
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions,dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SearchBar)

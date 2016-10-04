import React from 'react';
import * as actions from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const SearchBar = function(props) {
  function onSubmitHandler(event){
    event.preventDefault();
    debugger;
    props.actions.searchedItineraries(event.target.children[1].value)
    event.target.children[1].value = ""
  }

  return (
    <form onSubmit={onSubmitHandler.bind(this)}>
      <label>Search:</label>
      <input type="text"/>
    </form>
  )
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions,dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SearchBar)
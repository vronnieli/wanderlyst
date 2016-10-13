import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function MyLyst(props){
  return(
    <h1>Here's My List</h1>
  )
}

function mapStateToProps(state){
  return {
    itineraries: state.itineraries
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MyLyst);

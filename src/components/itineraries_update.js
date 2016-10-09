import React from 'react';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ItinerariesUpdate extends React.Component {
  constructor(props){
    super(props)
    debugger
    // this.props.params.id
  }
  render(){
    return(<div>hellurrr</div>)
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ItinerariesUpdate)

import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

function ItinerariesUpdate(props){
// class ItinerariesUpdate extends React.Component {

  // constructor(props){
  //
  //   super(props)
  //
  //   const itinerary = props.itinerary
  // }
  // render(){
    return(
      <h1>hello</h1>
    )
  // }
}

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }
//
// const componentCreator = connect(null, mapDispatchToProps)
// export default componentCreator(ItinerariesUpdate)

function mapStateToProps(state, ownProps){
  const itinerary = state.itineraries.find(itinerary => itinerary.id == ownProps.params.id);
  if (itinerary) {
    return {
      itinerary: itinerary
    }
  } else {
    return  {
      itinerary: {
        name: "",
        upvotes: 0,
        users: [{
          username: "",
          first_name: "",
          last_name: ""
        }],
        days: [{
          day: "",
          locations: [{
            city: "",
            activities: [{
              name: ""
            }]
          }]
        }]
      }
    }
  }
}

export default connect(mapStateToProps)(ItinerariesUpdate)

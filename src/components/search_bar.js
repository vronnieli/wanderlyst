import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onLogOutHandler = this.onLogOutHandler.bind(this)
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

  onLogOutHandler(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }
  sessionBasedLink(){
    if (sessionStorage.jwt == undefined) {
      return(
        <div>
          <div className="navbar-brand topnav">
            <strong>
              <Link to="/login">Log In</Link>
            </strong>
          </div>
          <div className="navbar-brand topnav">
            <strong>
              <Link to="/signup">Sign Up</Link>
            </strong>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <div className="navbar-brand topnav">
            <strong>
              <Link onClick={this.onLogOutHandler}>
                Log Out
              </Link>
            </strong>
          </div>
          <div className="navbar-brand topnav">
            <strong>
              <Link to="/itineraries/new">
                Create An Itinerary
              </Link>
            </strong>
          </div>
        </div>
      )
    }
  }

  render(){
  return (
    <nav className="navbar navbar-default navbar-static-top topnav">
      <div className="navbar-brand topnav">
        <strong>
          <Link to="/">
            wanderlyst
          </Link>
        </strong>
      </div>
      {this.sessionBasedLink()}
      <div className="navbar-brand topnav">
        <strong>
          <Link to="/itineraries" onClick={this.props.actions.fetchItineraries}>
            All Itineraries
          </Link>
        </strong>
      </div>
      <form className="form-inline well-sm" onSubmit={this.onSubmitHandler}>

        <input type="text" className="form-control" placeholder="search city..." ref="location"/>
        <input type="number" className="form-control" placeholder="number of days..." ref="days"/>
        <input type="text" className="form-control" placeholder="activity..." ref="activity"/>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    </nav>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

const componentCreator = connect(null, mapDispatchToProps);
export default componentCreator(SearchBar);

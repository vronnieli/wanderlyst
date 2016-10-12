import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import SearchBar from './search_bar'
import {Link} from 'react-router';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginForm from './login_form';

class App extends Component {
  constructor(props) {
    debugger;
    super(props)
    this.state = {logged_in: false}
    this.loggedInHandler = this.loggedInHandler.bind(this)
    this.onLogOutHandler = this.onLogOutHandler.bind(this)
  }

  loggedInHandler(){
    debugger;
    if (sessionStorage.jwt)
      {this.setState({logged_in: true})}
  }

  onLogOutHandler(event) {
    debugger;
    event.preventDefault();
    this.props.actions.logOutUser();
    this.setState({logged_in: false})
  }

  render() {
    return (
      <div>
        <SearchBar state={this.state} loggedIn={this.loggedInHandler} loggedOut={this.onLogOutHandler} />
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

function mapStateToProps(state) {
  return {
    logged_in: state.logged_in
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
export default componentCreator(App);



// <div className="App">
//   <div className="App-header">
//     <h2>Welcome to React</h2>
//   </div>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>

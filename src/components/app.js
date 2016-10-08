import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import SearchBar from './search_bar'
import {Link} from 'react-router';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar/>
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

const componentCreator = connect(null, mapDispatchToProps);
export default componentCreator(App);



// <div className="App">
//   <div className="App-header">
//     <h2>Welcome to React</h2>
//   </div>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>

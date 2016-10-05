import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import NavBar from './nav_bar'
import SearchBar from './search_bar'
import {Link} from 'react-router';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBar/>
        <SearchBar/>
        <Link to="/itineraries">All Itineraries</Link>
        <br></br>
        <Link to="/itineraries/new">Create An Itinerary</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;


// <div className="App">
//   <div className="App-header">
//     <h2>Welcome to React</h2>
//   </div>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>

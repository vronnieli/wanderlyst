import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import SearchBar from './search_bar'
import {Link} from 'react-router';
import HTML5Backend from 'react-dnd-html5-backend';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar/><br /><br /><br />
        <Link to="/itineraries">All Itineraries</Link>
        <br />
        <Link to="/itineraries/new">Create An Itinerary</Link>
        <br />
        {this.props.children}
      </div>
    );
  }
}

export default App;
// export default DragDropContext(HTML5Backend)(App);


// <div className="App">
//   <div className="App-header">
//     <h2>Welcome to React</h2>
//   </div>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>

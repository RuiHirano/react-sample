import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      lat: 0,
      lon: 0
    }
  }
  render(){
    navigator.geolocation.getCurrentPosition(
      pos => this.setState({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      err => console.log(err)
    );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.state.lat}
          {this.state.lon}
        </a>
      </header>
    </div>
  );
  }
}

export default App;

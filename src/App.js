import React, { Component } from 'react';
import Router from './Router';
import logo from './tom1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to best cat mash!!!!!!!</h1>
        </header>
        <p className="App-intro">
        Miaou!!!
        </p>
        <Router />
      </div>
    );
  }
}

export default App;


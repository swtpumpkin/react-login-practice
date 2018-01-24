import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

export default App;

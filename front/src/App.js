import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import Home from './pages/HomePage/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={ Home }
          />
          <Route
            path="/auth/login"
            component={ Login }
          />
          <Route
            path="/auth/register"
            component={ Register }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

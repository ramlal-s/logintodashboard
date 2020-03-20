import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/login";
import Main from "./main/main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    );
  }
}

export default App;

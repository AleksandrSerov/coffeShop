import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.sass";
import MainPage from "./containers/MainPage/MainPage";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
      </Router>
    );
  }
}

export default App;

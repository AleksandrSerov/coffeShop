import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.sass";
import MainPage from "./containers/MainPage/MainPage";
import CoffeePage from "./containers/CoffeePage/CoffePage";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/our_coffee" component={CoffeePage} />
        <Route exact path="/for_your_pleasure" component={MainPage} />
      </Router>
    );
  }
}

export default App;

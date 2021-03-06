import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CoffeeService from './services/CoffeeService/CoffeService';
import actions from './store/actions';

import CoffeePage from './containers/CoffeePage/CoffePage';
import MainPage from './containers/MainPage/MainPage';
import ItemPage from './containers/ItemPage/ItemPage';
import ForYourPleasure from './containers/ForYourPleasure/ForYourPleasure';

import './App.sass';
class App extends Component {
  service = new CoffeeService();
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.handleSetInitialState(this.service.getData()));
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/our_coffee" component={CoffeePage} />
        <Route exact path="/for_your_pleasure" component={ForYourPleasure} />
        <Route exact path="/item_page/:id" component={ItemPage} />
      </Router>
    );
  }
}
const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapDispatchToProps)(App);

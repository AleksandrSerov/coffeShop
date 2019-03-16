import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";

import "./CoffeePage.sass";
import BeansLogoDark from "../../media/logo/Beans_logo_dark.svg";
import CoffeeGirl from "../../media/img/coffee_girl.jpg";
class CoffeePage extends Component {
  state = {
    shopItems: {}
  };

  renderShopItems = items => {
    return items.map((item, index) => {
      return (
        <div className="shop__item" key={index}>
          <img src={item.url} alt={item.name} />
          <div className="shop__item-title">{item.name}</div>
          <div className="shop__item-country">{item.country}</div>
          <div className="shop__item-price">{item.price}</div>
        </div>
      );
    });
  };

  handleSearch = e => {
    const { items } = this.props;
    const updateList = items.coffee.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      shopItems: updateList
    });
  };

  handleFiltreByCountry = e => {
    console.log(e.target.textContent);
    const { items } = this.props;
    const updateList = items.coffee.filter(item => {
      return item.country === e.target.textContent;
    });
    this.setState({
      shopItems: updateList
    });
  };

  render() {
    const { items } = this.props;
    console.log(items.coffee);
    const shopItems =
      Object.entries(this.state.shopItems).length === 0 && items.coffee
        ? this.renderShopItems(items.coffee)
        : Object.entries(this.state.shopItems).length != 0
        ? this.renderShopItems(this.state.shopItems)
        : "error";
    return (
      <>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header />
              </div>
            </div>
            <h1 className="title-big">Our Coffee</h1>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 offset-2">
                <img className="shop__girl" src={CoffeeGirl} alt="girl" />
              </div>
              <div className="col-lg-4">
                <div className="title">About our beans</div>
                <img
                  className="beanslogo"
                  src={BeansLogoDark}
                  alt="Beans logo"
                />
                <div className="shop__text">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible.
                  <br />
                  <br />
                  Afraid at highly months do things on at. Situation recommend
                  objection do intention
                  <br />
                  so questions. <br />
                  As greatly removed calling pleased improve an. Last ask him
                  cold feel
                  <br />
                  met spot shy want. Children me laughing we prospect answered
                  followed. At it went
                  <br />
                  is song that held help face.
                </div>
              </div>
            </div>
            <div className="line" />
            <div className="row">
              <div className="col-lg-4 offset-2">
                <form action="#" className="shop__search">
                  <label className="shop__search-label" htmlFor="filter">
                    Looking for
                  </label>
                  <input
                    id="filter"
                    type="text"
                    placeholder="start typing here..."
                    className="shop__search-input"
                    onChange={this.handleSearch}
                  />
                </form>
              </div>
              <div className="col-lg-4">
                <div className="shop__filter">
                  <div className="shop__filter-label">Or filter</div>
                  <div className="shop__filter-group">
                    <button
                      className="shop__filter-btn"
                      onClick={this.handleFiltreByCountry}
                    >
                      Brazil
                    </button>
                    <button
                      className="shop__filter-btn"
                      onClick={this.handleFiltreByCountry}
                    >
                      Kenya
                    </button>
                    <button
                      className="shop__filter-btn"
                      onClick={this.handleFiltreByCountry}
                    >
                      Columbia
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper"> {shopItems}</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeePage);

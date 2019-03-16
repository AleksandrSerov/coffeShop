import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import BeansLogoDark from "../../media/logo/Beans_logo_dark.svg";
import CoffeeItem from "../../media/img/coffee_item.jpg";

class ItemPage extends Component {
  render() {
    return (
      <>
        <div class="banner">
          <div class="container">
            <Header />
            <h1 class="title-big">Our Coffee</h1>
          </div>
        </div>
        <section class="shop">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 offset-1">
                <img class="shop__girl" src={CoffeeItem} alt="coffee_item" />
              </div>
              <div class="col-lg-4">
                <div class="title">About it</div>
                <img class="beanslogo" src={BeansLogoDark} alt="Beans logo" />
                <div class="shop__point">
                  <span>Country:</span>
                  Brazil
                </div>
                <div class="shop__point">
                  <span>Description:</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div class="shop__point">
                  <span>Price:</span>
                  <span class="shop__point-price">16.99$</span>
                </div>
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
)(ItemPage);

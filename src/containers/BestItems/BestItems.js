import React, { Component } from "react";

import { connect } from "react-redux";

import "./BestItem.sass";

class BestItems extends Component {
  bestHandleClick = () => {
    console.log("click");
  };

  renderBestItems = items => {
    return items.map((item, index) => {
      return (
        <div className="best__item" key={index} onClick={this.bestHandleClick}>
          <img src={item.url} alt={item.name} />
          <div className="best__item-title">{item.name}</div>
          <div className="best__item-price">{item.price}</div>
        </div>
      );
    });
  };

  render() {
    const { items } = this.props;
    const bestItems = items.bestsellers
      ? this.renderBestItems(items.bestsellers)
      : "";

    return (
      <section className="best">
        <div className="container">
          <div className="title">Our best</div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="best__wrapper">{bestItems}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};
export default connect(mapStateToProps)(BestItems);

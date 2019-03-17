import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import BeansLogoDark from '../../media/logo/Beans_logo_dark.svg';

class ItemPage extends Component {
  renderItem = () => {
    const { id } = this.props.match.params;
    const { items } = this.props;
    const item = items.coffee.find(item => {
      return item.id === id;
    });
    return (
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-1">
              <img className="shop__girl" src={item.url} alt={item.name} />
            </div>
            <div className="col-lg-4">
              <div className="title">About it</div>
              <img className="beanslogo" src={BeansLogoDark} alt="Beans logo" />
              <div className="shop__point">
                <span>Country:</span>
                {item.country}
              </div>
              <div className="shop__point">
                <span>Description:</span>
                {item.description}
              </div>
              <div className="shop__point">
                <span>Price:</span>
                <span className="shop__point-price">{item.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  render() {
    const item = this.props.items.coffee ? this.renderItem() : 'Error';
    return (
      <>
        <div className="banner">
          <div className="container">
            <Header />
            <h1 className="title-big">Our Coffee</h1>
          </div>
        </div>
        {item}
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

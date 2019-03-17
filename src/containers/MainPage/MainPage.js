import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './MainPage.sass';
import BeansLogo from '../../media/logo/Beans_logo.svg';
import BeansLogoDark from '../../media/logo/Beans_logo_dark.svg';

class MainPage extends Component {
  renderBestItems = items => {
    return items.map((item, index) => {
      return (
        <Link to={`/item_page/${item.id}`} className="best__item" key={index}>
          <div>
            <img src={item.url} alt={item.name} />
            <div className="best__item-title">{item.name}</div>
            <div className="best__item-price">{item.price}</div>
          </div>
        </Link>
      );
    });
  };
  render() {
    const { items } = this.props;
    const bestItems = items.bestsellers ? this.renderBestItems(items.bestsellers) : 'Error';
    return (
      <>
        <div className="preview">
          <div className="container">
            <Header />
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h1 className="title-big">Everything You Love About Coffee</h1>
                <img className="beanslogo" src={BeansLogo} alt="Beans logo" />
                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                <div className="preview__subtitle">Want to try our beans?</div>
                <Link to="/our_coffee" className="preview__btn">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="title">About Us</div>
                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo" />
                <div className="about__text">
                  Extremity sweetness difficult behaviour he of. On disposal of as landlord
                  horrible. Afraid at highly months do things on at. Situation recommend objection
                  do intention so questions. As greatly removed calling pleased improve an. Last ask
                  him cold feel met spot shy want. Children me laughing we prospect answered
                  followed. At it went is song that held help face.
                  <br />
                  <br />
                  Now residence dashwoods she excellent you. Shade being under his bed her, Much
                  read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                  horrible but confined day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active living depend son
                  repair day ladies now.
                </div>
              </div>
            </div>
          </div>
        </section>
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
export default connect(mapStateToProps)(MainPage);

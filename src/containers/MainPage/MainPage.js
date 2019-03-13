import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./MainPage.sass";
import BeansLogo from "../../media/logo/Beans_logo.svg";
import BeansLogoDark from "../../media/logo/Beans_logo_dark.svg";

class MainPage extends Component {
  render() {
    return (
      <>
        <div class="preview">
          <div class="container">
            <Header />
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <h1 class="title-big">Everything You Love About Coffee</h1>
                <img class="beanslogo" src={BeansLogo} alt="Beans logo" />
                <div class="preview__subtitle">
                  We makes every day full of energy and taste
                </div>
                <div class="preview__subtitle">Want to try our beans?</div>
                <a href="#" class="preview__btn">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>

        <section class="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="title">About Us</div>
                <img class="beanslogo" src={BeansLogoDark} alt="Beans logo" />
                <div class="about__text">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible. Afraid at highly months do things on at.
                  Situation recommend objection do intention so questions. As
                  greatly removed calling pleased improve an. Last ask him cold
                  feel met spot shy want. Children me laughing we prospect
                  answered followed. At it went is song that held help face.
                  <br />
                  <br />
                  Now residence dashwoods she excellent you. Shade being under
                  his bed her, Much read on as draw. Blessing for ignorant
                  exercise any yourself unpacked. Pleasant horrible but confined
                  day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active
                  living depend son repair day ladies now.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="best">
          <div class="container">
            <div class="title">Our best</div>
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="best__wrapper">
                  <div class="best__item">
                    <img
                      src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                      alt="coffee"
                    />
                    <div class="best__item-title">Solimo Coffee Beans 2kg</div>
                    <div class="best__item-price">10.73$</div>
                  </div>
                  <div class="best__item">
                    <img
                      src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                      alt="coffee"
                    />
                    <div class="best__item-title">Presto Coffee Beans 1kg</div>
                    <div class="best__item-price">15.99$</div>
                  </div>
                  <div class="best__item">
                    <img
                      src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                      alt="coffee"
                    />
                    <div class="best__item-title">AROMISTICO Coffee 1kg</div>
                    <div class="best__item-price">6.99$</div>
                  </div>
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

export default MainPage;
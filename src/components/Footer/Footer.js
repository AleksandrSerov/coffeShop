import React, { Component } from "react";
import LogoBlack from "../../media/logo/Logo_black.svg";
import BeansLogoDark from "../../media/logo/Beans_logo_dark.svg";
import { Link } from "react-router-dom";

import "./Footer.sass";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <ul className="footer">
                <li className="footer__item">
                  <Link to="/">
                    <img src={LogoBlack} alt="logo" />
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/our_coffee">Our coffee</Link>
                </li>
                <li className="footer__item">
                  <Link to="/for_your_pleasure">For your pleasure</Link>
                </li>
              </ul>
            </div>
          </div>
          <img className="beanslogo" src={BeansLogoDark} alt="Beans logo" />
        </div>
      </footer>
    );
  }
}
export default Footer;

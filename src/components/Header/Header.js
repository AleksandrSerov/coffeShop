import React, { Component } from "react";
import "./Header.sass";
import Logo from "../../media/logo/Logo.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <header>
            <ul className="header">
              <li className="header__item">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </li>
              <li className="header__item">
                <Link to="/our_coffee">Our coffee</Link>
              </li>
              <li className="header__item">
                <Link to="/for_your_pleasure">For your pleasure</Link>
              </li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}
export default Header;

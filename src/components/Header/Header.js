import React, { Component } from "react";
import "./Header.sass";
import Logo from "../../media/logo/Logo.svg";

class Header extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-lg-6">
          <header>
            <ul class="header">
              <li class="header__item">
                <a href="#">
                  <img src={Logo} alt="logo" />
                </a>
              </li>
              <li class="header__item">
                <a href="#">Our coffee</a>
              </li>
              <li class="header__item">
                <a href="#">For your pleasure</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}
export default Header;

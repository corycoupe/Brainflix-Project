import React from "react";
import logo from "../assets/logo/Logo-brainflix.png";
import upload from "../assets/icons/SVG/Icon-upload.svg";
import { Link } from "react-router-dom";
// Header contains links to both pages
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <Link to="/videos">
            <img
              src={logo}
              className="header__logo-brainflix"
              alt="brainflix"
            />
          </Link>
        </div>
        <div className="header__search">
          <input
            className="header__search-bar"
            type="string"
            placeholder="Search"
          />
          <div className="header__search-container">
            <button className="header__search-button">
              <Link to="/upload" className="header__link">
                <img
                  className="header__search-button--img"
                  src={upload}
                  alt="upload"
                ></img>

                <p className="header__search-button--text">UPLOAD </p>
              </Link>
            </button>

            <img
              src="./images/Mohan-muruge.jpg"
              className="header__search-mohan mohan-image"
              alt=""
            ></img>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;

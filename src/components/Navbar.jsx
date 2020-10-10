import React from "react";
import logo from "../img/slroofinglogo.png";
import BookNowModal from "./Modal/BookNowModal";
import { ProductConsumer } from "../stateManagement/context";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    window.scrollTo(0, 0);
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="sl-navbar">
        <div className="sl-nav-center">
          <div className="sl-nav-header">
            <Link to="/">
              <img className="sl-nav-logo" src={logo} alt="slroofing-logo" />
            </Link>
            <span className="contact">
              <i className="fa fa-phone"></i>712-898-0221
            </span>
            {/* Burger */}
            <div className="sl-nav-burger" onClick={() => this.handleToggle()}>
              <div className={this.state.isOpen ? "toggle line1" : "line1"} />
              <div className={this.state.isOpen ? "toggle line2" : "line2"} />
              <div
                className={this.state.isOpen ? "toggle line3 wew" : "line3"}
              />
            </div>
          </div>

          <ul
            className={
              this.state.isOpen ? "sl-nav-links sl-show-nav" : "sl-nav-links"
            }
          >
            <li className="active" onClick={() => this.handleToggle()}>
              <Link to="/">Home</Link>
            </li>
            <li className="active" onClick={() => this.handleToggle()}>
              <Link to="/about">About</Link>
            </li>
            <li className="active" onClick={() => this.handleToggle()}>
              <Link to="/services">Services</Link>
            </li>
            <li className="active" onClick={() => this.handleToggle()}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className="active" onClick={() => this.handleToggle()}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="active" onClick={() => this.handleToggle()}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <ProductConsumer>
              {value => {
                const { isBookNow, handleBookNowModal } = value;
                return (
                  <div>
                    <li className="active">
                      <button
                        className="btn-book text-uppercase mx-3 rad"
                        onClick={handleBookNowModal}
                      >
                        book now
                      </button>
                    </li>
                    {isBookNow ? <BookNowModal /> : null}
                  </div>
                );
              }}
            </ProductConsumer>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

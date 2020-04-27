import React from "react";
import logo from "../img/slroofing-logo.png";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="sl-navbar">
        <div className="sl-nav-center">
          <div className="sl-nav-header">
            <Link to="/">
              <img className="sl-nav-logo" src={logo} alt="slroofing-logo" />
              <span className="contact">402-414-4000</span>
            </Link>

            <div className="sl-nav-burger" onClick={() => this.handleToggle()}>
              <div className={this.state.isOpen ? "toggle line1" : "line1"} />
              <div className={this.state.isOpen ? "toggle line2" : "line2"} />
              <div className={this.state.isOpen ? "toggle line3" : "line3"} />
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
              <Link>Services</Link>
            </li>
            <li className="active" onClick={() => this.handleToggle()}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className="active" onClick={() => this.handleToggle()}>
              <Link>Contact Us</Link>
            </li>
            <li className="active">
              <button className="btn-book text-uppercase mx-3 rad">
                book now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

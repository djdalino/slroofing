import React from "react";
import logo from "../img/slroofing-logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-xl navbar-light bg-color-light px-sm-5 ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand icon-logo">
          <img src={logo} alt="" />
        </Link>
        <Link to="/" className="phone-number">
          402-414-4000
        </Link>
        <button
          className="navbar-toggler rad"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mx-auto">
              <Link className="nav-link " to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active mx-auto">
              <Link className="nav-link mx-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active mx-auto">
              <Link className="nav-link mx-3" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item active mx-auto">
              <Link className="nav-link mx-3" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item active mx-auto">
              <Link className="nav-link mx-3" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item active mx-auto">
              <button className="btn-book text-uppercase mx-3 rad">
                book now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

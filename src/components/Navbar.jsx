import React from "react";
import logo from "../img/LOGO.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-expand-sm navbar-light bg-light px-sm-5 mb-5">
      <div className="container-box">
        <Link to="/" className="navbar-brand icon-logo">
          <img src={logo} alt="" />
          712-898-0211-424-SL-ROOFS
        </Link>

        <div className="navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link mx-4">
            Home
          </Link>
          <Link to="/" className="nav-item nav-link mx-4">
            About
          </Link>
          <Link to="/" className="nav-item nav-link mx-4">
            Contact Us
          </Link>
          <Link to="/" className="nav-item nav-link mx-4">
            Services
          </Link>
          <Link to="/" className="nav-item nav-link mx-4">
            Blog
          </Link>
          <Link to="/" className="nav-item nav-link mx-4">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

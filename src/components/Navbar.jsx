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
              <span className="text-dark">424-SL-ROOFS</span>
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
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li className="active">
              <Link to="/about">About</Link>
            </li>
            <li className="active">
              <Link>Services</Link>
            </li>
            <li className="active">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="active">
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
      // <nav className="nnavbar">
      //   <div className="nav-center">
      //     <div className="nav-header">
      //       <Link to="/">
      //         <img className="navbar-logo" src={logo} alt="" />
      //       </Link>

      //       <button
      //         type="button"
      //         className="nav-btn"
      //         onClick={() => this.handleToggle()}
      //       >
      //         {this.state.isOpen ? (
      //           <FaAlignLeft className="nav-icon" />
      //         ) : (
      //           <FaAlignRight className="nav-icon" />
      //         )}
      //       </button>
      //     </div>
      //     <ul
      //       className={
      //         this.state.isOpen ? "nav-links show-nav" : "nav-links ml-auto"
      //       }
      //     >
      // <li className="active mx-auto">
      //   <Link className="nav-link " to="/">
      //     Home <span className="sr-only">(current)</span>
      //   </Link>
      // </li>
      // <li className="active mx-auto">
      //   <Link className="nav-link mx-3" to="/about">
      //     About
      //   </Link>
      // </li>
      // <li className="active mx-auto">
      //   <Link className="nav-link mx-3" to="/services">
      //     Services
      //   </Link>
      // </li>
      // <li className="active mx-auto">
      //   <Link className="nav-link mx-3" to="/blog">
      //     Blog
      //   </Link>
      // </li>
      // <li className="active mx-auto">
      //   <Link className="nav-link mx-3" to="/contact-us">
      //     Contact Us
      //   </Link>
      // </li>
      // <li className="active mx-auto">
      // <button className="btn-book text-uppercase mx-3 rad">
      //   book now
      // </button>
      // </li>
      //     </ul>
      //   </div>
      // </nav>

      // <nav className="navbar fixed-top navbar-expand-xl navbar-light bg-color-light px-sm-5 ">
      //   <div className="container-fluid">
      //     <Link to="/" className="navbar-brand icon-logo">
      //       <img src={logo} alt="" />
      //     </Link>
      //     <Link to="/" className="phone-number">
      //       402-414-4000
      //     </Link>
      //     <button
      //       className="navbar-toggler rad"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarSupportedContent"
      //       aria-controls="navbarSupportedContent"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //       <ul className="navbar-nav ml-auto">
      // <li className="nav-item active mx-auto">
      //   <Link className="nav-link " to="/">
      //     Home <span className="sr-only">(current)</span>
      //   </Link>
      // </li>
      // <li className="nav-item active mx-auto">
      //   <Link className="nav-link mx-3" to="/about">
      //     About
      //   </Link>
      // </li>
      // <li className="nav-item active mx-auto">
      //   <Link className="nav-link mx-3" to="/services">
      //     Services
      //   </Link>
      // </li>
      // <li className="nav-item active mx-auto">
      //   <Link className="nav-link mx-3" to="/blog">
      //     Blog
      //   </Link>
      // </li>
      // <li className="nav-item active mx-auto">
      //   <Link className="nav-link mx-3" to="/contact-us">
      //     Contact Us
      //   </Link>
      // </li>
      // <li className="nav-item active mx-auto">
      //   <button className="btn-book text-uppercase mx-3 rad">
      //     book now
      //   </button>
      // </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Service extends Component {
  render() {
    const { title, img, category } = this.props.service;
    const { activeCategory } = this.props.value;
    if (category.indexOf(activeCategory) < 0 && activeCategory !== "all") {
      return null;
    }
    return (
      <div className="hold-services">
        <div className="hover-button">
          <Link className="sbook-now width-book" to="/">
            Book now
          </Link>
          <Link className="slearn-more" to="/">
            Learn more &nbsp;>>
          </Link>
        </div>
        <img src={img} alt={title} className="mx-auto" />
        <p className="text-center mt-3 ourServicesFont">{title}</p>
      </div>
    );
  }
}

export default Service;

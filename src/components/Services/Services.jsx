import React, { Component } from "react";
import { Link } from "react-router-dom";
class Services extends Component {
  render() {
    const { title, img, category } = this.props.service;
    const { activeCategoryServices } = this.props.value;
    if (
      category.indexOf(activeCategoryServices) < 0 &&
      activeCategoryServices !== "all"
    ) {
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

export default Services;

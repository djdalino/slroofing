import React, { Component } from "react";
import { Link } from "react-router-dom";
class Services extends Component {
  render() {
    const { id, title, img, category } = this.props.service;
    const {
      activeCategoryServices,
      handleSingleServiceOffer,
    } = this.props.value;
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
        <img
          src={img}
          alt={title}
          height="200px"
          width="200px"
          className="mx-auto"
        />

        <Link
          to={`/service-offer/${id}`}
          className="text-center mt-3 services-font"
          onClick={() => handleSingleServiceOffer(id)}
        >
          {title}
        </Link>
      </div>
    );
  }
}

export default Services;

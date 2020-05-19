import React, { Component } from "react";
import { Link } from "react-router-dom";
import RoofingCarousel from "./Carousel/RoofingCarousel";
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
      <Link
        className="hold-services"
        to={`/service-offer/${id}`}
        onClick={() => handleSingleServiceOffer(id)}
      >
        <div className="hover-button-services">
          <Link className="sbook-now width-book" to="/">
            Book now
          </Link>
          <Link
            className="slearn-more"
            to={`/service-offer/${id}`}
            onClick={() => handleSingleServiceOffer(id)}
          >
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

        <p className="text-center mt-3 ourServicesFont  ">{title}</p>
      </Link>
    );
  }
}

export default Services;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Services extends Component {
  render() {
    const { id, title, img } = this.props.service;
    const { handleSingleServiceOffer } = this.props.value;

    return (
      <Link
        className="hold-services"
        to={`/service-offer/${id}`}
        onClick={() => handleSingleServiceOffer(id)}
      >
        <div className="hover-button-services">
          <Link to="#" className="sbook-now width-book">
            Book now
          </Link>
          <Link
            className="slearn-more"
            to={`/service-offer/${id}`}
            onClick={() => handleSingleServiceOffer(id)}
          >
            Learn more &nbsp;
          </Link>
        </div>
        <Link to={`/service-offer/${id}`}>
          <img
            src={img}
            alt={title}
            height="100%"
            width="100%"
            className="mx-auto"
          />
        </Link>
        <p className="text-center mt-3 ourServicesFont">{title}</p>
      </Link>
    );
  }
}

export default Services;

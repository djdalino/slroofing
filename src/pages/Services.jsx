import React, { Component } from "react";
import Hero from "../components/Hero";
import ServicesOffer from "../components/Services/servicesOffer";
import Testimonial from "../components/Testimonial/Testimonial";
class Services extends Component {
  render() {
    return (
      <div>
        <Hero hero="blogHero">
          <div className="blogBanner">
            <div style={{ marginTop: "7rem " }}>
              <h1 className="text-uppercase text-center">our services</h1>
              <h3 className="text-capitalize text-center">
                We've got you covered
              </h3>
            </div>
          </div>
        </Hero>
        <ServicesOffer />
        <Testimonial />
      </div>
    );
  }
}

export default Services;

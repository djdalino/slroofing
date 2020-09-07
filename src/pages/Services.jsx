import React, { Component } from "react";
import Hero from "../components/Hero";
import ServicesOffer from "../components/Services/servicesOffer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
class Services extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
        <Footer />
      </div>
    );
  }
}

export default Services;

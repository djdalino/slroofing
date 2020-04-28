import React, { Component } from "react";
import Hero from "../Hero";

export default class ContactBanner extends Component {
  render() {
    return (
      <div>
        <Hero hero="contactBan banner-tempt">
          <div className="ContactBanner">
            <div style={{ marginTop: "7rem " }}>
              <h1 className="text-uppercase text-center">Contact Us</h1>
              <h3 className="text-capitalize text-center">
                {" "}
                Let us know how can we help you.{" "}
              </h3>
            </div>
          </div>
        </Hero>
      </div>
    );
  }
}

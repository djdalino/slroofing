import React, { Component } from "react";
import Hero from "../Hero";

export default class AboutBanner extends Component {
  render() {
    return (
      <div>
        <Hero hero="aboutBan banner-tempt">
          <div className="blogBanner">
            <div style={{ marginTop: "7rem " }}>
              <h1 className="text-uppercase text-center">ABOUT US</h1>
              <h3 className="text-capitalize text-center">
                {" "}
                DEDICATED ROOFING PROFESSIONALS
              </h3>
            </div>
          </div>
        </Hero>
      </div>
    );
  }
}

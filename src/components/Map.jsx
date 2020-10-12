import React, { Component } from "react";
import MapIMG from "../img/map-slroof.png";
export default class Map extends Component {
  render() {
    return (
      <div className="m-15">
        <div className="findLocation">
          <h5>Our service area</h5>
          <h3>
            Trust your next projects success with SL ROOFING & RENOVATIONS
          </h3>
          <p>
            <center>
              {" "}
              We will help guide you by choosing the right products for your
              projects overall durability, longevity, and appearance saving you
              both time and money.
              <br />
              <br />
              We service Iowa (IA) Minnesota (MN) Nebraska (NE) South Dakota
              (SD) Missouri (MO) Kansas KS) and surrounding areas.
            </center>
          </p>
        </div>
        <div className="center-map">
          <img src={MapIMG} alt={MapIMG} />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import MapIMG from "../img/map-slroof.png";
export default class Map extends Component {
  render() {
    return (
      <div className="m-15">
        <div className="findLocation">
          <h5>Our service area</h5>
          <h3>
            TRUST YOUR NEXT PROJECTS SUCCESS WITH <br />
            SL ROOFING & RENOVATIONS
          </h3>
          <p>
            <center>
              {" "}
              <br />
              We Service Iowa (IA) Minnesota (MN) Nebraska (NE) South Dakota
              (SD) Missouri (MO) Kansas (KS) Colorado (CO) Wyoming (WY) and
              surrounding areas.
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

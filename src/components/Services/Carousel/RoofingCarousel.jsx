import React, { Component } from "react";
import "./RoofingCarousel.css";
import { roofingDetails } from "./data";
import DefaultImage from "./roofing/GAF Timberline HD BARKWOOD-model.jpg";
class RoofingCarousel extends Component {
  state = {
    step: 1,
    roofing: [],
    carouselImage: [],
  };
  componentDidMount() {
    this.setRoofingDetails();
  }
  setRoofingDetails = () => {
    let tempData = [];

    roofingDetails.forEach((data) => {
      const singleData = { ...data };
      tempData = [...tempData, singleData];
    });

    this.setState(() => {
      return { roofing: tempData };
    });
  };
  handleRoofingGetId = (id) => {
    const item = this.state.roofing.find((data) => data.id === id);
    this.setState({ carouselImage: item });
  };

  getImageCarousel = () => {
    if (this.state.carouselImage.length === 0) {
      return (
        <div style={{ maxHeight: "768px", width: "924px" }}>
          <img src={DefaultImage} height="768" width="100%" alt="" />
        </div>
      );
    } else {
      return (
        <div style={{ maxHeight: "768px", width: "924px" }}>
          <img
            src={this.state.carouselImage.imgHouse}
            height="768"
            width="100%"
            alt=""
          />
        </div>
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div style={{ display: "flex" }}>
            <div>{this.getImageCarousel()}</div>
            <div
              style={{
                width: "150px",
                height: "768px",
                overflow: "auto",
              }}
            >
              {this.state.roofing.map((item) => {
                return (
                  <div
                    className="roofingImg"
                    key={item.id}
                    onClick={() => this.handleRoofingGetId(item.id)}
                  >
                    <img
                      className="singleImg"
                      src={item.color}
                      height="50"
                      width="100%"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RoofingCarousel;

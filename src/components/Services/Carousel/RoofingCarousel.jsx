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
        <div className="default-image">
          <img src={DefaultImage} alt="" />
        </div>
      );
    } else {
      return (
        <div className="second-image">
          <img src={this.state.carouselImage.imgHouse} alt="" />
        </div>
      );
    }
  };
  getCarouselName = () => {
    if (this.state.carouselImage.length === 0) {
      return (
        <div>
          <p>Dark Wood</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.state.carouselImage.name}</p>
        </div>
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="vizual-wrapper">
            <div className="default-cover">{this.getImageCarousel()}</div>
            <div className="roofing-list">
              {this.state.roofing.map((item) => {
                return (
                  <React.Fragment>
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
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-center">{this.getCarouselName()}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RoofingCarousel;

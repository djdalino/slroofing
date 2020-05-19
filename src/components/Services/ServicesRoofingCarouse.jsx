import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import RoofingCarousel from "./Carousel/RoofingCarousel";
class ServicesRoofingCarouse extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { activeCategoryServices } = value;

            if (activeCategoryServices === "Roofing") {
              return <RoofingCarousel />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default ServicesRoofingCarouse;

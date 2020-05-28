import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import ServicesOfferColumn from "./ServicesOfferColumn";
import ListGroup from "./ListGroup";
import ServicesList from "./ServicesList";
import RoofingCarousel from "./ServicesRoofingCarouse";
import ServicesPagination from "./ServicesPagination";
class servicesOffer extends Component {
  render() {
    return (
      <div>
        <div className="who-we-are">
          <h5 className="text-uppercase">What services are you looking for?</h5>
          <h2 className="text-center text-capitalize mainText">
            Our services we offer
          </h2>
          <br />
          <div className="row">
            <ListGroup />
            {/* <ProductConsumer>
              {(value) => {
                const { servicesOffers } = value;
                const arrayCategory = ["all"];
                servicesOffers.forEach((item) => {
                  item.category.forEach((category) => {
                    if (arrayCategory.indexOf(category) < 0) {
                      arrayCategory.push(category);
                    }
                  });
                });
                return arrayCategory.map((category) => {
                  return (
                    <ServicesOfferColumn
                      key={category}
                      item={category}
                      value={value}
                    />
                  );
                });
              }}
            </ProductConsumer> */}
          </div>
        </div>
        <ServicesList />
        <ServicesPagination />
        <RoofingCarousel />
      </div>
    );
  }
}

export default servicesOffer;

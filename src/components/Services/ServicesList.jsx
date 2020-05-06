import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import Services from "./Services";
class ServicesList extends Component {
  render() {
    return (
      <div className="container-fluid mb-5">
        <div className="our-service-gallery">
          <ProductConsumer>
            {(value) => {
              return value.servicesOffer.map((service) => {
                return (
                  <Services key={service.id} service={service} value={value} />
                );
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default ServicesList;

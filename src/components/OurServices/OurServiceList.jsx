import React from "react";
import { ProductConsumer } from "../../stateManagement/context";
import Service from "./Service";
function OurServiceList() {
  return (
    <div className="container-fluid mb-5">
      <div className="our-service-gallery">
        <ProductConsumer>
          {(value) => {
            return value.services.map((service) => {
              return (
                <Service key={service.id} service={service} value={value} />
              );
            });
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}

export default OurServiceList;

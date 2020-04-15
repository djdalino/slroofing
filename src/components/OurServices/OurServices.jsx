import React from "react";
import OurServiceColumn from "./OurServiceColumn";
import OurServiceList from "./OurServiceList";
import { ProductConsumer } from "../../stateManagement/context";
export default class OurServices extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="my-15">
          <div className="container mx-15">
            <div className="text-center d-none d-lg-block mb-5">
              <h5 className="text-uppercase">what we can do</h5>
              <h1 className="text-uppercase">our services</h1>
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    const { services } = value;
                    const arrayCategory = ["all"];
                    services.forEach((item) => {
                      item.category.forEach((category) => {
                        if (arrayCategory.indexOf(category) < 0) {
                          arrayCategory.push(category);
                        }
                      });
                    });
                    return arrayCategory.map((category) => {
                      return (
                        <OurServiceColumn
                          key={category}
                          item={category}
                          value={value}
                        />
                      );
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>

          <OurServiceList />
        </div>
      </React.Fragment>
    );
  }
}

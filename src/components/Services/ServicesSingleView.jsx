import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
class ServicesSingleView extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { title, details, img } = value.serviceOfferView;

            return (
              <React.Fragment>
                <Navbar />
                <div
                  style={{
                    width: "85%",
                    margin: " 7rem auto 0 auto",
                    textAlign: "center",
                  }}
                >
                  <h1>{title}</h1>
                  <h4>{details}</h4>

                  <img src={img} alt={title} />
                </div>

                <Footer />
              </React.Fragment>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default ServicesSingleView;

import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import Subscriber from "../Subscribe";
import OurServices from "../OurServices/OurServices";
import RoofingCarousel from "./ServicesRoofingCarouse";
class ServicesSingleView extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { title, details, img, category } = value.serviceOfferView;

            return (
              <React.Fragment>
                <Navbar />
                <div className="banner-attr">
                  <div className="blogCateg">
                    <div className="blogCategStyle">
                      <h1>{category}</h1>
                    </div>
                  </div>
                  <div style={{ display: "flex", position: "relative" }}>
                    <div
                      style={{
                        background: `url('${img}') center/cover no-repeat`,
                        width: "100%",
                        height: "220px",
                        zIndex: "-1"
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="serviceContent"
                  style={{
                    width: "85%",
                    margin: "50px auto",
                    textAlign: "justify"
                  }}
                >
                  <h1>{title}</h1>
                  <p>{details}</p>

                  <img className="serviceImage" src={img} alt={title} />
                </div>
                <RoofingCarousel />
                <Subscriber />
                <OurServices />
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

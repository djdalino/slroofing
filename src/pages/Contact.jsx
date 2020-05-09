import React, { Component } from "react";
import { ProductConsumer } from "../stateManagement/context";
import ContactBan from "../components/contact/ContactBanner";
import Findmap from "../components/Map";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProductConsumer>
          {(value) => {
            const { handleChangeColor, isDark } = value;
            return (
              <h1
                className={isDark ? "dark-background" : "light-background"}
                onClick={handleChangeColor}
              ></h1>
            );
          }}
        </ProductConsumer>
        <ContactBan />

        <Findmap />
        <Footer />
      </div>
    );
  }
}

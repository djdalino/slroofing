import React, { Component } from "react";
import { ProductConsumer } from "../stateManagement/context";
import AboutSLroofing from "../components/About/AboutSLroofing";
import AboutBanner from "../components/About/AboutBanner";
import Findmap from "../components/Map";
export default class About extends Component {
  render() {
    return (
      <div>
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
        <AboutBanner />
        <AboutSLroofing />
        <Findmap />
      </div>
    );
  }
}

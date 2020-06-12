import React from "react";
import { ProductConsumer } from "../stateManagement/context";
import ContactBan from "../components/contact/ContactBanner";
import Findmap from "../components/Map";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ProductConsumer>
        {(value) => {
          const { handleChangeColor, isDark } = value;
          return (
            <React.Fragment>
              <h1
                className={isDark ? "dark-background" : "light-background"}
                onClick={handleChangeColor}
              ></h1>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
      <ContactBan />
      <Findmap />
      <Footer />
    </div>
  );
};
export default Contact;

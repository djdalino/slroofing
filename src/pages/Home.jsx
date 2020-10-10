import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import OurServices from "../components/OurServices/OurServices";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial/Testimonial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { ProductConsumer } from "../stateManagement/context";
import BookNowModal from "../components/Modal/BookNowModal";
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Hero>
        <div className="banner-container">
          <div className="box-container">
            <h1 className="text-uppercase">
              AFFORDABLE - QUALITY - GUARANTEED
            </h1>
            <p>
              <strong>COMMERCIAL - RESIDENTIAL ROOFING</strong>
            </p>
            <h2 className="text-uppercase">
              ROOFING <br />
              &amp; <br />
              CONSTRUCTION
            </h2>
            <br />
            <h2 className="text-uppercase">
              DONE RIGHT!
              <br />
              WATERTIGHT!
            </h2>
            <br />
            <div className="button-container book-an-appointment">
              <ProductConsumer>
                {value => {
                  const { isBookNow, handleBookNowModal } = value;
                  return (
                    <React.Fragment>
                      <button
                        className="book-an-appointment btn btn-danger text-uppercase"
                        onClick={handleBookNowModal}
                      >
                        book an appointment
                      </button>

                      {isBookNow ? <BookNowModal /> : null}
                    </React.Fragment>
                  );
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        <Banner></Banner>
      </Hero>
      <OurServices />
      <Subscribe />
      <Testimonial />

      <Footer />
    </React.Fragment>
  );
};

export default Home;

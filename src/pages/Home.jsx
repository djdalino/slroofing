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
            <h1 className="text-uppercase">Done right!</h1>
            <h1 className="text-uppercase">Watertight!</h1>
            <p>
              <strong>COMMERCIAL - RESIDENTIAL ROOFING</strong>
              <br /> <br />
              Innovative solutions and design for all your roofing, restoration
              and construction needs!
            </p>
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

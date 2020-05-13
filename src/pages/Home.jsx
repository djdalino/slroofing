import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import OurServices from "../components/OurServices/OurServices";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial/Testimonial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Hero>
          <div className="banner-container">
            <div className="box-container">
              <h1 className="text-uppercase">Done right!</h1>
              <h1 className="text-uppercase">Watertight!</h1>
              <p>
                <strong>COMMERCIAL - RESIDENTIAL ROOFING</strong>
                <br /> <br />
                Innovative solutions and design for all your roofing,
                restoration and construction needs!
              </p>
              <div className="button-container">
                <button className="btn btn-danger text-uppercase">
                  book an appointment
                </button>
              </div>
            </div>
          </div>
          <Banner></Banner>
        </Hero>
        <OurServices />
        <Subscribe />
        <Testimonial />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;

import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import OurServices from "../components/OurServices/OurServices";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial/Testimonial";
function Home() {
  return (
    <div>
      <Hero>
        <div className="banner-container">
          <div className="box-container">
            <h1 className="text-uppercase">Done right!</h1>
            <h1 className="text-uppercase">Watertight!</h1>
            <p>
              Innovative solutions and design for all your commercial and
              residential roofing, renovation and contruction needs! roofing
              companies, roofing contractors.
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
  );
}

export default Home;

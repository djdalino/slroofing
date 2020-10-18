import React, { Component } from "react";
import Owner from "../../img/slroofing-owners.png";
import Covered from "../../img/slroofingpips.jpg";
import OwnerSecond from "../../img/owner-second.png";
import Testimonial from "../../components/Testimonial/Testimonial";

export default class AboutSLroofing extends Component {
  render() {
    return (
      <div>
        <div className="who-we-are">
          <h5 className="text-uppercase">AFFORDABLE - TRUSTED - QUALITY</h5>
          <h2 className="text-center text-capitalize mainText">
            Welcome to SL ROOFING
          </h2>
          <br />
          <p>
            A Midwest Roofing, Restoration and Construction contracting company
            since 2008. Established in Sioux City, Iowa with nearly two decades
            of all construction experience under our belt being a one stop
            construction shop. SL ROOFING specializes in residential and
            commercial roofing, restoration and construction services. We are
            dedicated at providing exceptional customer service with affordable
            and trusted quality at the most competitive prices in the industry.
          </p>
        </div>
        <div className="ownerCover">
          <div className="the-owner">
            <div className="owner-description">
              <h3>SL Roofing</h3>
              <p>
                Shaun Lake began to form the establishment of his business in
                2008. SL ROOFING was created to deliver dedication to quality
                and honesty through the roofing and construction industry to
                their clientele and employees. Shaun had spent his earlier years
                working and learning a multitude of trades in construction.
                While gaining knowledge through first hand experience and
                understanding the value of hard work, dedication to quality and
                an appreciation to the results manual labor provides, had
                applied these principals into the businesses focus on affordable
                quality and its goals of guaranteed complete customer
                satisfaction.
              </p>
              <p style={{ marginTop: "10px" }}>
                “There’s something about building things that I’ve always been
                drawn to. Whether it’s composing music, creating art, or
                designing a construction project, I am completely invested! You
                get to see and feel accomplishments throughout its progress.
                Your time and effort creates a products value, Passion is key to
                what drives amazing results!
              </p>
            </div>
            <div className="owner-image">
              <img src={Owner} alt="" />
            </div>
            <div className="owner-image-two">
              <img src={OwnerSecond} alt="" />
            </div>
          </div>
        </div>
        <Testimonial />
        <div className="got-you-covered">
          <div className="left-cov">
            <img src={Covered} alt="" />
          </div>
          <div className="about-description">
            <h3 className="drp-main-blue">Dedicated Roofing Professionals</h3>
            <p>
              {" "}
              SL ROOFING &amp; RENOVATIONS helps our clients create ideas by
              adding color and definition to make their home or business shine.
              Making detailed decisions on design while coordinating color
              schemes and combining creative concepts will define your home or
              businesses unique style by showing off its beauty and charm while
              incorporating your personality. We will help guide you by choosing
              the right products for your projects overall durability,
              longevity, and appearance saving you both time and money. There
              are are many options to choose from these days to help create the
              perfect combination for your home or businesses inner and outter
              appearance.
            </p>
            <button className="btn-book text-uppercase mx-3 rad">
              book an appointment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

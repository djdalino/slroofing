import React, { Component } from "react";
import Owner from "../../img/slroofing-owners.png";
import Covered from "../../img/covered.jpg";
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
              <h3>Lorem Ipsum doliere</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur
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
            <h5>We've got you covered!</h5>
            <h3>Roofing Contractors</h3>
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

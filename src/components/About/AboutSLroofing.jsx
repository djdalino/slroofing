import React, { Component } from "react";
import Owner from "../../img/slroofing-owners.png";
import Covered from "../../img/covered.jpg";
import Testimonial from "../../components/Testimonial/Testimonial";

export default class AboutSLroofing extends Component {
  render() {
    return (
      <div>
        <div className="who-we-are">
          <h5>Hellow About Services</h5>
          <h3>SL ROOFING RENOVATION</h3>
          <p>
            Midwest‘s Roofing, Renovation and Construction contracting company
            since 2008. Established in Sioux City, Iowa with nearly two decades
            of all construction experience under our belt being your one stop
            construction shop.We service Iowa (IA) Minnesota (MN) Nebraska (NE)
            South Dakota (SD) Missouri (MO) Kansas KS) and surrounding areas.
            <br /> <br />
            As a premier company specializing in residential and commercial
            roofing, construction and renovation services, we are dedicated at
            providing exceptional customer service with affordable and trusted
            quality at the most competitive prices in the industry. roofing
            contractors roofing companies. SL ROOFING &amp; RENOVATIONS helps
            our clients create ideas by adding color and definition to make
            their home or business shine. Making detailed decisions on design
            while coordinating color schemes and combining creative concepts
            will define your home or businesses unique style by showing off its
            beauty and charm while incorporating your personality. We will help
            guide you by choosing the right products for your projects overall
            durability, longevity, and appearance saving you both time and
            money. There are are many options to choose from these days to help
            create the perfect combination for your home or businesses inner and
            outter appearance.
            <br /> <br />
            SL ROOFING & RENOVATIONS will save you both time and money by
            combining our use of roofing and construction knowledge, the highest
            quality materials and installation techniques along with our
            dedication to delivering exceptional service. Trust your next
            projects success with SL ROOFING &amp; RENOVATIONS.
          </p>
        </div>
        <div className="the-owner">
          <div className="owner-description">
            <h3>Lorem Ipsum doliere</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur
            </p>
          </div>
          <div className="owner-image">
            <img src={Owner} alt="" />
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

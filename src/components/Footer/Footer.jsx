import React from "react";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box-container">
        <div className="container-box text-light">
          <div className="column footer-box">
            <h4 className="mainText text-uppercase ">
              sl roofing & renovations
            </h4>
            <h4 className="secondaryText">
              contact: 424-sl-roofs 424-757-6637
            </h4>
            <h4 className="secondaryText">712-898-0221</h4>
            <h4 className="secondaryText">email: slroofs@yahoo.com</h4>
          </div>
          <div className="column footer-box">
            <h4 className="mainText text-uppercase ">
              sign up to our newsletter
            </h4>
            <h4 className="text-capitalize secondaryText">
              You'll receive inspirational ideas <br /> and advice for your home
              renovation
            </h4>
            <div className="subscribe-container">
              <input
                type="text"
                className="text-uppercase"
                placeholder="enter you email..."
                name="search"
              />
              <button type="submit" className="text-uppercase bg">
                subscribe
              </button>
            </div>
          </div>
          <div className="column footer-box">
            <h4 className="text-uppercase mainText">stay connected with us</h4>
            <h4 className="text-capitalize secondaryText">follow us on:</h4>
            <div>
              <i className="fab fa-linkedin-in mx-2" />
              <i className="fab fa-facebook-f mx-2" />
              <i className="fab fa-instagram mx-2"></i>
            </div>
          </div>
        </div>
        <div className="col footer-copy-right text-light">
          <p className="text-capitalize text-center">
            copyright@2020SLROOFING All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

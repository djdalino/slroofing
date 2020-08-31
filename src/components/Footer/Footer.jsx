import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import BookNowModal from "../Modal/BookNowModal";
import axios from "axios";
class Footer extends Component {
  state = {
    email: ""
  };

  handleSubsribe = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSendSubscribe = async e => {
    e.preventDefault();
    const data = {
      email: this.state.email
    };
    try {
      const res = await axios.post("sl/api/subscribe/", data);
      if (res.status === 200) {
        console.log("Thank you for subscribing");
        alert("Thank you for subscribing");
        this.setState({ email: "" });
      }
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <div className="footer-container">
        <div className="footer-box-container">
          <div className="container-box text-light">
            <div className="column footer-box">
              <h4 className="mainText text-uppercase ">
                sl roofing & renovations
              </h4>
              <h4 className="secondaryText">
                Contact: 424-sl-roofs 424-757-6637
              </h4>
              <h4 className="secondaryText">712-898-0221</h4>
              <h4 className="secondaryText ">
                Email: SLROOFINGCOMPANY@gmail.com
              </h4>
            </div>
            <div className="column footer-box">
              <h4 className="mainText text-uppercase ">
                sign up to our newsletter
              </h4>
              <h4 className="text-capitalize secondaryText">
                You'll receive inspirational ideas <br /> and advice for your
                home renovation
              </h4>
              <div className="subscribe-container">
                <form onSubmit={this.handleSendSubscribe}>
                  <input
                    type="text"
                    className="text-uppercase"
                    placeholder="enter you email..."
                    name="search"
                  />
                  <button type="submit" className="text-uppercase bg">
                    subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="column footer-box">
              <h4 className="text-uppercase mainText">
                stay connected with us
              </h4>
              <h4 className="text-capitalize secondaryText">follow us on:</h4>
              <div>
                <i className="fab fa-linkedin-in mx-2" />
                <a href="https://facebook.com/SLROOFS" target="_blank">
                  <i
                    className="fab fa-facebook-f mx-2"
                    style={{ color: "#fff" }}
                  />
                </a>
                <a
                  href="https://instagram.com/sl.roofing?igshid=lk6jko47lvw1"
                  target="_blank"
                >
                  <i
                    className="fab fa-instagram mx-2"
                    style={{ color: "#fff" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col footer-copy-right text-light">
            <p className="text-capitalize text-center">
              copyright@2020SLROOFING All Rights Reserved
            </p>
          </div>
        </div>
        <ProductConsumer>
          {value => {
            const { isBookNow, handleBookNowModal } = value;
            return (
              <div className="button-fixed">
                <button
                  className="btn-book text-uppercase mx-3 rad"
                  onClick={handleBookNowModal}
                >
                  book an appointment
                </button>
                {isBookNow ? <BookNowModal /> : null}
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Footer;

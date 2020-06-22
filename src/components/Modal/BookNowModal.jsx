import React, { Component } from "react";
import "./BookNow.css";
import "react-datepicker/dist/react-datepicker.css";
import FormDatePick from "./FormDatePick";
import FormTimePick from "./FormTimePick";
import FormInfo from "./FormInfo";
import FormDetails from "./FormDetails";
import FormSuccess from "./FormSuccess";
import axios from "axios";
import { ProductConsumer } from "../../stateManagement/context";
class BookNowModal extends Component {
  state = {
    step: 1,
    startDate: "",
    pickTime: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    stateValue: "",
    postal_code: "",
    modalMsg: [],
  };
  setNewValue = (newValue) => {
    this.setState({ stateValue: newValue });
  };

  handleSubmitBookNow = async (e) => {
    const {
      startDate,
      pickTime,
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      stateValue,
      postal_code,
    } = this.state;
    const data = {
      startDate: this.state.startDate,
      pickTime: this.state.pickTime,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      stateValue: this.state.stateValue,
      postal_code: this.state.postal_code,
    };
    try {
      if (
        startDate === "" &&
        pickTime === "" &&
        first_name === "" &&
        last_name === "" &&
        email === "" &&
        phone === "" &&
        address === "" &&
        city === "" &&
        stateValue === "" &&
        postal_code === ""
      ) {
        console.log("please fill up the form");
        alert("Please Fill up the Form");
        this.prevStep();
      } else {
        const res = await axios.post(`sl/api/booknow/`, data);

        if (res.status === 200) {
          this.nextStep();
        }
      }
    } catch (error) {
      alert("Please Fill up the Form");
      this.prevStep();
    }
  };
  getDate = (dateString) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dateString);

    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  setStartDate = (date) => {
    this.setState({ startDate: date });
  };
  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };
  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleInputChange = (e) => {
    this.setState({ pickTime: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      startDate,
      pickTime,
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      stateValue,
      postal_code,
    } = this.state;
    const values = {
      startDate,
      pickTime,
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      stateValue,
      postal_code,
    };
    switch (step) {
      case 1:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <ProductConsumer>
                {(value) => {
                  const { handleBookNowModal } = value;
                  return (
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={handleBookNowModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  );
                }}
              </ProductConsumer>

              <div className="book-now-datetime">
                <h1 className="pick">
                  Pick a time and date that is most convenient for you.
                </h1>
                <FormDatePick
                  values={values}
                  setStartDate={this.setStartDate}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  handleInputChange={this.handleInputChange}
                  getDate={this.getDate}
                />
              </div>
              <div className="book-now-datetime">
                <FormTimePick
                  values={values}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  handleInputChange={this.handleInputChange}
                  getDate={this.getDate}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <ProductConsumer>
                {(value) => {
                  const { handleBookNowModal } = value;
                  return (
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={handleBookNowModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  );
                }}
              </ProductConsumer>

              <div className="book-now-form-info">
                <h1 className="pick">Your Information</h1>
                <FormInfo
                  values={values}
                  setStartDate={this.setStartDate}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  handleInputChange={this.handleInputChange}
                  setNewValue={this.setNewValue}
                  getDate={this.getDate}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <ProductConsumer>
                {(value) => {
                  const { handleBookNowModal } = value;
                  return (
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={handleBookNowModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  );
                }}
              </ProductConsumer>

              <div className="book-now-form-info">
                <h1 className="pick">Your Information</h1>
                <FormDetails
                  values={values}
                  setStartDate={this.setStartDate}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  handleInputChange={this.handleInputChange}
                  setNewValue={this.setNewValue}
                  getDate={this.getDate}
                  handleSubmitBookNow={this.handleSubmitBookNow}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <div className="book-now-form-info">
                <h1 className="suc">Success</h1>
                <FormSuccess
                  values={values}
                  setStartDate={this.setStartDate}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  handleInputChange={this.handleInputChange}
                  setNewValue={this.setNewValue}
                  getDate={this.getDate}
                  handleSubmitBookNow={this.handleSubmitBookNow}
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

export default BookNowModal;

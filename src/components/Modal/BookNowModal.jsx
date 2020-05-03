import React, { Component } from "react";
import "./BookNow.css";
import "react-datepicker/dist/react-datepicker.css";
import FormDatePick from "./FormDatePick";
import FormTimePick from "./FormTimePick";
import FormInfo from "./FormInfo";
import FormDetails from "./FormDetails";
import FormSuccess from "./FormSuccess";
import axios from "axios";
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
  };
  setNewValue = (newValue) => {
    this.setState({ stateValue: newValue });
  };

  handleSubmitBookNow = async (e) => {
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
    console.log(data);
    try {
      const res = await axios.post(`/api/booknow/`, data);

      if (res.status === 200) {
        console.log(res.status);
        this.nextStep();
      }
    } catch (error) {
      alert(error);
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
    console.log(e.target.value);
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
    console.log(this.state);
    switch (step) {
      case 1:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <div className="book-now-datetime">
                <h1 className="text-center">Pick Date</h1>
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
            </div>
          </div>
        );
      case 2:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <div className="book-now-datetime">
                <h1 className="text-center">Pick Time</h1>
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
      case 3:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <div className="book-now-form-info">
                <h1 className="text-center">Your Information</h1>
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
      case 4:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <div className="book-now-form-info">
                <h1 className="text-center">Your Information</h1>
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
      case 5:
        return (
          <div className="book-now-modal">
            <div className="book-now-modal-container">
              <div className="book-now-form-info">
                <h1 className="text-center">Success</h1>
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
    }
    // return (
    //   <div className="book-now-modal">
    //     <div className="book-now-modal-container">
    //       <div className="book-now-datetime">
    //         <DatePicker
    //           selected={this.state.startDate}
    //           minDate={new Date()}
    //           maxDate={addDays(new Date(), 30)}
    //           timeIntervals={30}
    //           excludeDates={[new Date(), subDays(new Date(), 0)]}
    //           onChange={this.setStartDate}
    //           inline
    //         />
    //         <button> continue</button>
    //       </div>
    //     </div>
    //   </div>
  }
}

export default BookNowModal;

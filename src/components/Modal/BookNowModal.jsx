import React, { Component } from "react";
import "./BookNow.css";
import "react-datepicker/dist/react-datepicker.css";
import FormDatePick from "./FormDatePick";
import FormTimePick from "./FormTimePick";
import FormInfo from "./FormInfo";
import FormDetails from "./FormDetails";
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
    const d = date.toLocaleString();
    this.setState({ startDate: date });
    console.log(d);
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

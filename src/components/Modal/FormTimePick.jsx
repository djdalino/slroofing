import React, { Component } from "react";

class FormTimePick extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-time-pick-container">
          <p className="pick">Time:</p>
          <select class="form-control" onChange={this.props.handleInputChange}>
            <option value="8:00 AM">8:00 AM</option>
            <option value="8:30 AM">8:30 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 NN">12:00 NN</option>
            <option value="12:30 NN">12:30 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="01:30 PM">01:30 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="02:30 PM">02:30 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="03:30 PM">03:30 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            <option value="04:30 PM">04:30 PM</option>
          </select>
        </div>
        <button
          style={{ margin: "auto" }}
          onClick={() => this.props.nextStep()}
        >
          Continue
        </button>
      </React.Fragment>
    );
  }
}

export default FormTimePick;

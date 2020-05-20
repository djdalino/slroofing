import React, { Component } from "react";

class FormTimePick extends Component {
  render() {
    const { pickTime } = this.props.values;
    return (
      <div>
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
          {/* <div className="form-time-pick-morning">
            <h1>Morning</h1>
            <div className="form-time-pick-gird">
              <button
                className={
                  pickTime === "8:00AM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="8:00AM"
              >
                8:00AM
              </button>

              <button
                className={
                  pickTime === "8:30AM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="8:30AM"
              >
                8:30AM
              </button>

              <button
                className={
                  pickTime === "9:00AM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="9:00AM"
              >
                9:00AM
              </button>

              <button
                className={
                  pickTime === "9:30AM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="9:30AM"
              >
                9:30AM
              </button>

              <button
                className={
                  pickTime === "10:00AM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="10:00AM"
              >
                10:00AM
              </button>

              <button
                className={
                  pickTime === "10:30AM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="10:30AM"
              >
                10:30AM
              </button>

              <button
                className={
                  pickTime === "11:00AM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="11:00AM"
              >
                11:00AM
              </button>

              <button
                className={
                  pickTime === "11:30AM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="11:30AM"
              >
                11:30AM
              </button>

              <button
                className={
                  pickTime === "12:00NN" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="12:00NN"
              >
                12:00NN
              </button>
            </div>
          </div>
          <div className="form-time-pick-afternoon">
            <h1>Afternoon</h1>
            <div className="form-time-pick-gird">
              <button
                className={
                  pickTime === "1:00PM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="1:00PM"
              >
                1:00PM
              </button>

              <button
                className={
                  pickTime === "1:30PM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="1:30PM"
              >
                1:30PM
              </button>

              <button
                className={
                  pickTime === "2:00PM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="2:00PM"
              >
                2:00PM
              </button>

              <button
                className={
                  pickTime === "2:30PM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="2:30PM"
              >
                2:30PM
              </button>

              <button
                className={
                  pickTime === "3:00PM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="3:00PM"
              >
                3:00PM
              </button>

              <button
                className={
                  pickTime === "3:30PM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="3:30PM"
              >
                3:30PM
              </button>

              <button
                className={
                  pickTime === "4:00PM" ? "form-time-pick-active" : null
                }
                name="pickTime"
                type="button"
                onClick={this.props.handleInputChange}
                value="4:00PM"
              >
                4:00PM
              </button>
            </div>
          </div> */}
        </div>
        <button
          style={{ margin: "auto" }}
          onClick={() => this.props.nextStep()}
        >
          Continue
        </button>
      </div>
    );
  }
}

export default FormTimePick;

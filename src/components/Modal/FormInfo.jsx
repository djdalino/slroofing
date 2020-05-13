import React, { Component } from "react";
import SelectUSState from "react-select-us-states";
class FormInfo extends Component {
  render() {
    const { setNewValue } = this.props;
    return (
      <div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                className="form-control"
                id="first_name"
                onChange={this.props.handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                className="form-control"
                id="last_name"
                onChange={this.props.handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                onChange={this.props.handleChange}
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                onChange={this.props.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="form-control d-column"
              id="address"
              onChange={this.props.handleChange}
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-row d-column">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                id="city"
                onChange={this.props.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="stateValue">State</label>
              <SelectUSState
                id="stateValue"
                name="stateValue"
                className="form-control"
                onChange={setNewValue}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="postal_code">Zip</label>
              <input
                type="text"
                name="postal_code"
                className="form-control"
                id="postal_code"
                onChange={this.props.handleChange}
              />
            </div>
          </div>
        </form>
        <button onClick={() => this.props.prevStep()}>Back</button>
        <button onClick={() => this.props.nextStep()}>Continue</button>
      </div>
    );
  }
}

export default FormInfo;

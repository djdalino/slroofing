import React, { Component } from "react";
import SelectUSState from "react-select-us-states";
class FormInfo extends Component {
  render() {
    const { setNewValue } = this.props;
    return (
      <React.Fragment>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
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
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                onChange={this.props.handleChange}
                placeholder="Email Address"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                onChange={this.props.handleChange}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              className="form-control d-column"
              id="address"
              onChange={this.props.handleChange}
              placeholder="Address"
            />
          </div>
          <div className="form-row d-column">
            <div className="form-group col-md-6">
              <input
                type="text"
                name="city"
                className="form-control"
                id="city"
                onChange={this.props.handleChange}
                placeholder="City"
              />
            </div>
            <div className="form-group col-md-4">
              <SelectUSState
                id="stateValue"
                name="stateValue"
                className="form-control"
                onChange={setNewValue}
                placeholder="State"
              />
            </div>
            <div className="form-group col-md-2">
              <input
                type="text"
                name="postal_code"
                className="form-control"
                id="postal_code"
                onChange={this.props.handleChange}
                placeholder="Zip"
              />
            </div>
          </div>
        </form>
        <div style={{ margin: "auto" }}>
          <button onClick={() => this.props.prevStep()}>Back</button>
          <button onClick={() => this.props.nextStep()}>Continue</button>
        </div>
      </React.Fragment>
    );
  }
}

export default FormInfo;

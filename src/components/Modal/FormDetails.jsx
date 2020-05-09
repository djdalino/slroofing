import React, { Component } from "react";

class FormDetails extends Component {
  render() {
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
    } = this.props.values;

    return (
      <React.Fragment>
        <p className="text-center">{`Pick Date: ${this.props.getDate(
          startDate
        )}`}</p>
        <p className="text-center">{`Pick Time: ${pickTime}`}</p>
        <p className="text-center">{`Full name: ${first_name} ${last_name}`}</p>
        <p className="text-center">{`Email: ${email}`}</p>
        <p className="text-center">{`Phone: ${phone}`}</p>
        <p className="text-center">{`Adresss: ${address}`}</p>
        <p className="text-center">{`City: ${city}`}</p>
        <p className="text-center">{`State: ${stateValue}`}</p>
        <p className="text-center"> {`Zip: ${postal_code}`}</p>
        <input
          type="submit"
          value="submit"
          onClick={this.props.handleSubmitBookNow}
        />
      </React.Fragment>
    );
  }
}

export default FormDetails;

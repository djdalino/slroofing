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
      <div>
        <p>{`Pick Date: ${this.props.getDate(startDate)}`}</p>
        <p>{`Pick Time: ${pickTime}`}</p>
        <p>{`Full name: ${first_name} ${last_name}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Phone: ${phone}`}</p>
        <p>{`Adresss: ${address}`}</p>
        <p>{`City: ${city}`}</p>
        <p>{`State: ${stateValue}`}</p>
        <p>{`Zip: ${postal_code}`}</p>
      </div>
    );
  }
}

export default FormDetails;

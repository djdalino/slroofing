import React, { Component } from "react";
import axios from "axios";
class ContactUsForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  };
  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  reset = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      inquiry: "",
    });
  };
  handleSubmitContactUs = async (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      inquiry: this.state.inquiry,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/contactUs", data);

      if (res.data) {
        console.log("success");
      }
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <div className="container-sm">
        <form onSubmit={this.handleSubmitContactUs}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              id="inputAddress"
              onChange={this.handleInputChange}
              value={this.state.name}
              placeholder="YOURNAME"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                id="inputEmail4"
                onChange={this.handleInputChange}
                value={this.state.phone}
                placeholder="PHONE NUMBER"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                id="inputPassword4"
                onChange={this.handleInputChange}
                value={this.state.email}
                placeholder="EMAIL"
              />
            </div>
          </div>
          <textarea
            name="inquiry"
            className="form-control form-control-lg"
            id="inquiry"
            rows="3"
            onChange={this.handleInputChange}
            value={this.state.inquiry}
            placeholder="YOUR INQUIRY"
          ></textarea>
          <button type="submit" className="btn btn-danger">
            SEND MESSAGE
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;

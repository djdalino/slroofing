import React, { Component } from "react";
import axios from "axios";
class Subscribe extends Component {
  state = {
    email: "",
  };
  componentDidMount() {}

  handleSubsribe = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSendSubscribe = async (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };
    try {
      const res = await axios.post("sl/api/subscribe/", data);
      if (res.status === 200) {
        console.log("Thank you for subscribing");
        alert("Thank you for subscribing");
        this.setState({ email: "" });
      }
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <div className="subscribe">
        <div className="subscribe-box ">
          <h5>Get latest news about us</h5>
          <h3>subscribe</h3>
          <p>
            Sign up to receive maintenance reminders and hear about our latest
            project
          </p>
          <form
            className="subscribe-container"
            onSubmit={this.handleSendSubscribe}
          >
            <input
              type="text"
              className="text-uppercase"
              placeholder="enter you remail..."
              name="email"
              onChange={this.handleSubsribe}
            />
            <button type="submit" className="text-uppercase btn-secondary">
              subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Subscribe;

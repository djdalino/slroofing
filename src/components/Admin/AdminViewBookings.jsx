import React, { Component } from "react";
import axios from "axios";
class AdminViewBookings extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.handleGetBookings();
  }

  handleGetBookings = async () => {
    const res = await axios.get("/api/booknow");

    let tempData = [];

    res.data.forEach((item) => {
      const singleItem = { ...item };
      tempData = [...tempData, singleItem];
    });
    this.setState(() => {
      return { data: tempData };
    });
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
  render() {
    return (
      <React.Fragment>
        <div className="admin-subs">
          <h1 className="text-center">List of Bookings</h1>

          {this.state.data.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  maxWidth: "768px",
                  margin: "auto",
                  justifyContent: "center",
                }}
                key={item._id}
              >
                <h4 className="text-center" style={{ width: "100%" }}>
                  {item.first_name} {item.last_name}
                </h4>
                <h4 className="text-center" style={{ width: "100%" }}>
                  {item.email}
                </h4>
                <h4 className="text-center" style={{ width: "100%" }}>
                  {item.phone}
                </h4>
                <h4 className="text-center" style={{ width: "100%" }}>
                  {this.getDate(item.createdAt)}
                </h4>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default AdminViewBookings;

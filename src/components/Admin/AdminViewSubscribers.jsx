import React, { Component } from "react";
import axios from "axios";
class AdminViewSubscribers extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.handleGetSubscribers();
  }
  handleGetSubscribers = async () => {
    const res = await axios.get("sl/api/subscribe");

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
          <div className="list-of-subs">
            <h1 className="text-center">List of Subsribers</h1>
            {this.state.data.length === 0 ? (
              <h2>No Subscribers at this moment...</h2>
            ) : (
              this.state.data.map((item) => {
                if (item.length === 0) {
                  return;
                }
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
                      {item.email}
                    </h4>
                    <h4 className="text-center" style={{ width: "100%" }}>
                      {this.getDate(item.createdAt)}
                    </h4>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminViewSubscribers;

import React, { Component } from "react";
import axios from "axios";
class AdminViewContacts extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.handleGetContact();
  }

  handleGetContact = async () => {
    const res = await axios.get("sl/api/contactUs");

    let tempData = [];

    res.data.forEach(item => {
      const singleItem = { ...item };
      tempData = [...tempData, singleItem];
    });
    this.setState(() => {
      return { data: tempData };
    });
  };

  getDate = dateString => {
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
      "December"
    ];
    const date = new Date(dateString);

    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };
  render() {
    if (this.state.data.length === 0) {
      return <h1>No data</h1>;
    }
    return (
      <React.Fragment>
        <div className="admin-subs">
          <div className="list-of-contacts">
            <h1 className="text-center">List of Contacts</h1>

            {this.state.data.map(item => {
              return (
                <div
                  style={{
                    display: "flex",
                    maxWidth: "768px",
                    margin: "auto",
                    justifyContent: "center"
                  }}
                  key={item._id}
                >
                  <h4 className="text-center" style={{ width: "100%" }}>
                    {item.name}
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
        </div>
      </React.Fragment>
    );
  }
}

export default AdminViewContacts;

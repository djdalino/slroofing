import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import { Link } from "react-router-dom";
import "./admin.css";
class Sidebar extends Component {
  render() {
    return (
      <div className="admin-sidebar">
        <div className="admin-sidebar-container">
          <div className="admin-profile">
            <h3>Admin Dash Board</h3>
          </div>
          <ProductConsumer>
            {(value) => {
              const { handleAdminPage } = value;
              return (
                <React.Fragment>
                  <ul className="admin-sidebar-menu">
                    <li>
                      <p onClick={() => handleAdminPage(1)}>Blog Post</p>
                    </li>
                    <li>
                      <p onClick={() => handleAdminPage(2)}>Blog Post View</p>
                    </li>
                    <li>
                      <p onClick={() => handleAdminPage(3)}>
                        List of Subcribers
                      </p>
                    </li>
                    <li>
                      <p onClick={() => handleAdminPage(4)}>Bookings</p>
                    </li>
                    <li>
                      <p onClick={() => handleAdminPage(5)}>Contacts</p>
                    </li>
                    <li>
                      <Link
                        to="/admin"
                        onClick={() => localStorage.removeItem("usertoken")}
                      >
                        Log out
                      </Link>
                    </li>
                  </ul>
                </React.Fragment>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default Sidebar;

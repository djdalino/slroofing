import React, { Component } from "react";
import "./admin.css";
import Sidebar from "./Sidebar";
import AdminBlogPost from "./AdminBLogPost";

class AdminDashboard extends Component {
  render() {
    return (
      <div className="admin-container">
        <Sidebar />
        <div className="admin-blogpost">
          <div className="admin-bgg"></div>
          <AdminBlogPost />
        </div>
      </div>
    );
  }
}

export default AdminDashboard;

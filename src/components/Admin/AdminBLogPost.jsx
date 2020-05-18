import React, { Component } from "react";
import BlogPost from "../Blog/BlogPost";
import AdminViewBlogPost from "./AdminViewBlogPost";
import { ProductConsumer } from "../../stateManagement/context";
class AdminBLogPost extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { adminPage } = value;

          console.log(adminPage);
          switch (adminPage) {
            case 1:
              return <BlogPost />;
            case 2:
              return <AdminViewBlogPost />;
            case 3:
              return <h1>List of Subcribers On Process</h1>;
            case 4:
              return <h1>Bookings On Process</h1>;
            case 5:
              return <h1> Contacts On Process</h1>;
          }
        }}
      </ProductConsumer>
    );
  }
}

export default AdminBLogPost;

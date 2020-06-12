import React, { Component } from "react";
import BlogPost from "../Blog/BlogPost";
import AdminViewBlogPost from "./AdminViewBlogPost";
import AdminViewSubscribers from "./AdminViewSubscribers";
import { ProductConsumer } from "../../stateManagement/context";
import AdminViewBookings from "./AdminViewBookings";
import AdminViewContacts from "./AdminViewContacts";
class AdminBLogPost extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { adminPage } = value;
          switch (adminPage) {
            case 1:
              return <BlogPost />;
            case 2:
              return <AdminViewBlogPost />;
            case 3:
              return <AdminViewSubscribers />;
            case 4:
              return <AdminViewBookings />;
            case 5:
              return <AdminViewContacts />;
          }
        }}
      </ProductConsumer>
    );
  }
}

export default AdminBLogPost;

import React, { Component } from "react";
import BlogList from "../Blog/BlogList";
import { ProductConsumer } from "../../stateManagement/context";
class AdminViewBlogPost extends Component {
  render() {
    return (
      <div className="admin-view-blog-post">
        <ProductConsumer>
          {value => {
            const { posts } = value;
            return posts.map(post => {
              return <BlogList key={post._id} post={post} value={value} />;
            });
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default AdminViewBlogPost;

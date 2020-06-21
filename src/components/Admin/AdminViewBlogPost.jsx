import React, { Component } from "react";
import BlogList from "../Blog/BlogList";
import { ProductConsumer } from "../../stateManagement/context";
class AdminViewBlogPost extends Component {
  render() {
    return (
      <div className="admin-view-blog-post">
        <ProductConsumer>
          {(value) => {
            const { posts } = value;
            if (posts.length === 0) {
              return (
                <div>
                  <h1 className="admin-blog-text-color">Blog Post View</h1>
                  <h2 className="admin-blog-text-color">No Blog Posted</h2>
                </div>
              );
            }
            return (
              <div>
                <h1 className="admin-blog-text-color">Blog Post View</h1>
                {posts.map((post) => {
                  return <BlogList key={post._id} post={post} value={value} />;
                })}
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default AdminViewBlogPost;

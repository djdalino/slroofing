import React, { Component } from "react";
import BlogList from "../components/Blog/BlogList";
import BlogPost from "../components/Blog/BlogPost";
import { ProductConsumer } from "../stateManagement/context";
import Hero from "../components/Hero";
class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero hero="ourServicesHero"></Hero>
        <div className="margin-top our-service-gallery">
          <ProductConsumer>
            {(value) => {
              const { posts } = value;
              if (posts.length === 0)
                return <h1 className="text-center">No Record</h1>;
              return posts.map((post) => {
                return <BlogList key={post._id} post={post} value={value} />;
              });
            }}
          </ProductConsumer>
        </div>
        {localStorage.item ? <BlogPost /> : <BlogPost />}
      </React.Fragment>
    );
  }
}

export default Blog;

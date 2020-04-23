import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import BlogList from "../components/Blog/BlogList";
import { ProductConsumer } from "../stateManagement/context";
import Hero from "../components/Hero";
class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero hero="blogHero">
          <div className="blogBanner">
            <div style={{ marginTop: "7rem " }}>
              <h1 className="text-uppercase text-center">our blog</h1>
              <h3 className="text-capitalize text-center">
                latest tips, bews and updates about us
              </h3>
            </div>
          </div>
        </Hero>
        <div className="my-5 our-blog-gallery">
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;

import React, { Component } from "react";
import BlogList from "../components/Blog/BlogList";
import BlogCategory from "../components/Blog/BlogCategory";
import { ProductConsumer } from "../stateManagement/context";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";
import OurServices from "../components/OurServices/OurServices";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
const Blog = () => {
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
      <div className="mt-5 blog-category-cointainer">
        <h5 className="text-center text-uppercase main-blue">tips and news</h5>
        <h3 className="text-center text-uppercase">our latest update</h3>
        <BlogCategory />
      </div>

      <div className="my-5 our-blog-gallery">
        <ProductConsumer>
          {(value) => {
            const {
              posts,
              blogCategorySelect,
              handleBlogView,
              getDate,
            } = value;
            if (blogCategorySelect === "All") {
              if (posts.length === 0)
                return <h1 className="text-center">No Record</h1>;

              return posts.map((post) => {
                return <BlogList key={post._id} post={post} value={value} />;
              });
            }
            return posts
              .filter((e) => e.category == blogCategorySelect)
              .map((cat) => {
                return (
                  <Link
                    key={cat._id}
                    className="h-100 text-center mx-auto our-blog-img-gallery"
                    to={`/blog/${cat._id}`}
                    onClick={() => handleBlogView(cat._id)}
                  >
                    <img
                      src={`http://localhost:5000/${cat.blogImage}`}
                      alt=""
                    />
                    <div className="our-blog-text">
                      <h2>{cat.title}</h2>
                      <p>{getDate(cat.createdAt)}</p>
                    </div>
                  </Link>
                );
              });
          }}
        </ProductConsumer>
      </div>
      <Subscribe />
      <OurServices />
      <Footer />
    </React.Fragment>
  );
};
export default Blog;

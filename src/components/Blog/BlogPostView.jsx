import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import { Redirect } from "react-router-dom";
class BlogPostView extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          var {
            title,
            titleText,
            article,
            blogImage,
            articleImage,
            createdAt,
          } = value.blogPost;
          const { categoryList, getDate } = value;

          const blogReplace = blogImage.replace(/\\/g, "/");
          const blogImg = `http://localhost:5000/${blogReplace}`;
          console.log(blogImg);
          if (categoryList._id) {
            return <Redirect to="/blog" />;
          }
          return (
            <div className="blog-category-cointainer">
              <div
                style={{
                  height: "300px",
                  width: "100%",
                  marginTop: "6rem",
                  background: "#1279af99 ",
                }}
              >
                <h3>
                  {categoryList.map((item) => (
                    <div
                      style={{
                        position: "absolute",
                        right: "10%",
                        top: "300px",
                        color: "white",
                      }}
                      key={item._id}
                    >
                      <h1>{item.name}</h1>
                    </div>
                  ))}
                </h3>
                <div style={{ display: "flex", position: "relative" }}>
                  <div
                    style={{
                      background: `url('${blogImg}') center/cover no-repeat`,
                      width: "100%",
                      height: "300px",
                      zIndex: "-1",
                    }}
                  ></div>
                </div>
              </div>
              <div className="my-15">
                <h4 className="main-blue">{getDate(createdAt)}</h4>
                <h1>{title}</h1>
                <p>Title Message: {titleText}</p>
                <div className="text-center">
                  <img
                    style={{ width: "100%", maxHeight: "700px" }}
                    className="text-center"
                    src={`http://localhost:5000/${articleImage}`}
                    alt="img"
                  />
                </div>

                <p>{article}</p>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default BlogPostView;

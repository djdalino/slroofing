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
          } = value.blogPost;
          const { categoryList } = value;

          const blogReplace = blogImage.replace(/\\/g, "/");
          const blogImg = `http://localhost:5000/${blogReplace}`;
          console.log(blogImg);
          if (categoryList._id) {
            return <Redirect to="/blog" />;
          }
          return (
            <React.Fragment>
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
              <div className="margin-top text-center">
                <h1>Title: {title}</h1>
                <p>Title Message: {titleText}</p>
                <img
                  style={{
                    align: "center",
                    height: "200px",
                    width: "200px",
                    margin: "auto",
                  }}
                  src={`http://localhost:5000/${articleImage}`}
                  alt="img"
                />
                <p>{article}</p>
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default BlogPostView;

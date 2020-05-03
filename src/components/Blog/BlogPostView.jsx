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
            <React.Fragment>
              <div className="banner-attr">
                <div className="blogCateg">
                  {categoryList.map((item) => (
                    <div className="blogCategStyle" key={item._id}>
                      <h1>{item.name}</h1>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", position: "relative" }}>
                  <div
                    style={{
                      background: `url('${blogImg}') center/cover no-repeat`,
                      width: "100%",
                      height: "220px",
                      zIndex: "-1",
                    }}
                  ></div>
                </div>
              </div>
              <div className="blog-category-cointainer">
                <div className="my-15">
                  <h4 className="main-blue">{getDate(createdAt)}</h4>
                  <h1>{title}</h1>
                  <p>{titleText}</p>
                  <div className="text-center">
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        margin: "30px 0",
                      }}
                      className="text-center"
                      src={`http://localhost:5000/${articleImage}`}
                      alt="img"
                    />
                  </div>

                  <p>{article}</p>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default BlogPostView;

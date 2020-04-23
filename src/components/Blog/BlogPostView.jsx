import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
class BlogPostView extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { _id, title, article, blogImage } = value.blogPost;
          const { categoryList } = value;

          return (
            <React.Fragment>
              <div
                style={{
                  height: "auto",
                  width: "100%",
                  border: "1px solid black",
                  marginTop: "6rem",
                  background: "black",
                }}
              >
                <h1 className="text-light text-center">Hello blog post</h1>
                <div style={{ display: "flex" }}>
                  <img
                    style={{
                      align: "center",
                      height: "200px",
                      width: "200px",
                      margin: "auto",
                    }}
                    src={`http://localhost:5000/${blogImage}`}
                    alt="img"
                  />
                </div>
              </div>
              <div className="margin-top text-center">
                <h1>Hello blog post</h1>
                <h3>{_id}</h3>
                <h3>
                  {categoryList.map((item) => (
                    <div key={item._id}>
                      <h1>{item.name}</h1>
                    </div>
                  ))}
                </h3>
                <h1>{title}</h1>
                <p>{article}</p>
              </div>
            </React.Fragment>
          );
          // console.log(value.blogPost);
          // return value.blogPost.map((blog) => {
          //   const { _id, category, title, article, blogImage } = blog;
          //   console.log(value);
          //   return (
          //     <React.Fragment>
          // <div
          //   style={{
          //     height: "auto",
          //     width: "100%",
          //     border: "1px solid black",
          //     marginTop: "6rem",
          //     background: "black",
          //   }}
          //       >
          //         <h1 className="text-light text-center">Hello blog post</h1>
          //         <div style={{ display: "flex" }}>
          //           <img
          //             style={{
          //               align: "center",
          //               height: "200px",
          //               width: "200px",
          //               margin: "auto",
          //             }}
          //             src={`http://localhost:5000/${blogImage}`}
          //             alt="img"
          //           />
          //         </div>
          //       </div>
          //       <div className="margin-top text-center">
          //         <h1>Hello blog post</h1>
          //         {/* <h3>{_id}</h3>
          //   <h3></h3>
          //   <h1>{title}</h1>
          //   <p>{article}</p> */}
          //       </div>
          //     </React.Fragment>
          //   );
          // });
        }}
      </ProductConsumer>
    );
  }
}

export default BlogPostView;

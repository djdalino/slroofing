import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
class BlogCategory extends Component {
  render() {
    return (
      <div className="blog-category ">
        <ProductConsumer>
          {(value) => {
            const {
              posts,
              category,
              handleBlogCategorySelected,
              blogCategorySelect,
            } = value;
            if (posts < 1) {
              return null;
            }
            return (
              <div className="d-flex align-items-center">
                <h4 className="ml-auto ">Category: </h4>
                <select
                  name="blogCategorySelect"
                  onChange={handleBlogCategorySelected}
                  value={blogCategorySelect}
                >
                  <option value="All">All</option>
                  {category.map((item, i) => {
                    return (
                      <option key={i} value={item._id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default BlogCategory;

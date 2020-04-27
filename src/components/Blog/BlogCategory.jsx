import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
class BlogCategory extends Component {
  render() {
    return (
      <div className="blog-category ">
        <div className="d-flex align-items-center">
          <h4 className="ml-auto ">Category: </h4>
          <ProductConsumer>
            {(value) => {
              const {
                category,
                handleBlogCategorySelected,
                blogCategorySelect,
              } = value;
              console.log(blogCategorySelect);
              return (
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
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default BlogCategory;

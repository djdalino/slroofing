import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
class BlogCategory extends Component {
  render() {
    return (
      <div className="container-fluid">
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
                className="mx-auto"
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
    );
  }
}

export default BlogCategory;

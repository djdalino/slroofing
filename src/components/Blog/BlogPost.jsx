import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import MultiSelect from "react-multi-select-component";
class BlogPost extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {(value) => {
            const {
              title,
              titleMessage,
              article,
              fileSelectedHandler,
              articleFileSelectedHandler,
              handleInputChange,
              handleSubmitPost,
              category,
              selected,
              setSelected,
            } = value;
            let options = [];
            category.forEach((item) => {
              const select = { ...item };
              options = [...options, { value: select._id, label: select.name }];
            });
            return (
              <div className="container margin-top">
                <form onSubmit={handleSubmitPost} encType="multipart/form-data">
                  <h1 className="text-center">Add new blog post</h1>
                  <div className="form-group">
                    <label htmlFor="blogImage">Choose featured Image:</label>
                    <input
                      type="file"
                      name="blogImage"
                      className="form-control-file"
                      id="blogImage"
                      accept="image/*"
                      onChange={fileSelectedHandler}
                    />
                  </div>
                  <div>
                    <label>Select Category:</label>
                    <MultiSelect
                      selectAllLabel
                      hasSelectAll={false}
                      options={options}
                      value={selected}
                      onChange={setSelected}
                      labelledBy={"Select"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      id="title"
                      placeholder="Title"
                      value={title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="titleMessage">Title Message:</label>
                    <textarea
                      name="titleMessage"
                      className="form-control"
                      id="titleMessage"
                      placeholder="Title Message"
                      value={titleMessage}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="articleImage">
                      Choose Image for Article:
                    </label>
                    <input
                      type="file"
                      name="articleImage"
                      className="form-control-file"
                      id="articleImage"
                      accept="image/*"
                      onChange={articleFileSelectedHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="article">Article</label>
                    <textarea
                      name="article"
                      className="form-control"
                      id="article"
                      rows="3"
                      value={article}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-danger btn-secondary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}

export default BlogPost;

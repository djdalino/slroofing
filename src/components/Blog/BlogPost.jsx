import React, { Component } from "react";
import axios from "axios";
class BlogPost extends Component {
  state = {
    title: "",
    article: "",
    blogImage: null,
  };
  fileSelectedHandler = (e) => {
    this.setState({ blogImage: e.target.files[0] });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitPost = () => {
    const fd = new FormData();
    fd.append("title", this.state.title);
    fd.append("article", this.state.article);
    fd.append("blogImage", this.state.blogImage);

    axios
      .post(`http://localhost:5000/posts`, fd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmitPost}>
          <div className="form-group">
            <label htmlFor="blogImage">Pick Image:</label>
            <input
              type="file"
              name="blogImage"
              class="form-control-file"
              id="blogImage"
              onChange={this.fileSelectedHandler}
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
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="article">Article</label>
            <textarea
              name="article"
              className="form-control"
              id="article"
              rows="3"
              value={this.state.article}
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BlogPost;

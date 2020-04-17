import React, { Component } from "react";
import Hero from "../Hero";

import axios from "axios";
class BlogPostView extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    this.handleGetPost();
  }
  handleGetPost = async () => {
    const res = await axios.get(
      `http://localhost:5000/posts/${this.props.match.params.id}`
    );
    let tempPost = [];

    res.data.forEach((item) => {
      const singleItem = { ...item };
      tempPost = [...tempPost, singleItem];
    });
    this.setState(() => {
      return { post: tempPost };
    });
  };
  render() {
    const { _id, title, article, blogImage } = this.state.post;
    const URL = blogImage;
    console.log(URL);
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
          <h3>{_id}</h3>

          <h1>{title}</h1>
          <p>{article}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogPostView;

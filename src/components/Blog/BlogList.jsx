import React from "react";
import { Link } from "react-router-dom";
function BlogList({ post, value }) {
  const { _id, title, blogImage, createdAt } = post;
  const { getDate, handleBlogView } = value;
  return (
    <Link
      className="h-100 text-center mx-auto our-blog-img-gallery"
      // onClick={() => handleSinglePost(_id)}
      to={`/blog/${_id}`}
      onClick={() => handleBlogView(_id)}
    >
      <img src={`/${blogImage}`} alt="" />
      <div className="our-blog-text">
        <h2>{title}</h2>
        <p>{getDate(createdAt)}</p>
      </div>
    </Link>
  );
}

export default BlogList;

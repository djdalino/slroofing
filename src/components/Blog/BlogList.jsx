import React from "react";
import { Link } from "react-router-dom";
function BlogList({ post, value }) {
  const { _id, title, blogImage, createdAt } = post;
  const { getDate } = value;
  return (
    <Link
      className="mt-5 w-50 h-100 text-center mx-auto"
      // onClick={() => handleSinglePost(_id)}
      to={`/blog/${_id}`}
    >
      <img
        src={`http://localhost:5000/${blogImage}`}
        height="200"
        width="30"
        alt=""
      />
      <h5>{_id}</h5>
      <h4>{title}</h4>
      <p>{getDate(createdAt)}</p>
    </Link>
  );
}

export default BlogList;

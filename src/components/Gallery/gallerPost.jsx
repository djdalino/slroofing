import React, { useState } from "react";
import "./gallery.css";
import axios from "axios";
import AdminViewGallery from "../Admin/AdminViewGallery";
const GallerPost = () => {
  const [gallery, setGallery] = useState("");
  const handleSubmitPost = async e => {
    if (gallery === "") {
      alert("Select Image");
    }
    const fd = new FormData();
    fd.append("photo", gallery);
    try {
      const res = await axios.post(
        `http://localhost:5000/sl/api/gallery/`,
        fd,
        {
          onUploadProgress: progressEvent => {
            console.log(
              "upload progress",
              (progressEvent / progressEvent.total) * 100 + "%"
            );
          }
        },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      if (res.status === 200) {
        console.log(res);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="admin-subs">
      <form onSubmit={handleSubmitPost}>
        <label htmlFor="gallery" style={{ zIndex: 1000 }}>
          Gallery:
        </label>{" "}
        <input
          style={{ zIndex: 1000 }}
          type="file"
          name="gallery"
          onChange={e => setGallery(e.target.files[0])}
        />
        <input type="submit" value="Post" />
      </form>
      <div className="admin-gallery-view">
        <AdminViewGallery />
      </div>
    </div>
  );
};

export default GallerPost;

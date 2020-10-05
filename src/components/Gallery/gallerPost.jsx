import React, { useState } from "react";
import axios from "axios";
import GalleryView from "./galleryView";
const GallerPost = () => {
  const [gallery, setGallery] = useState("");
  const handleSubmitPost = async e => {
    const fd = new FormData();
    fd.append("photo", gallery);
    try {
      const res = await axios.post(
        `sl/api/gallery/`,
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
      <div>
        <GalleryView />
      </div>
    </div>
  );
};

export default GallerPost;

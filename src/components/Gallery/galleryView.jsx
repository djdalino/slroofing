import React, { useState, useEffect } from "react";
import "./gallery.css";
import axios from "axios";
import { Link } from "react-router-dom";
const GalleryView = () => {
  const [gallery, setGallery] = useState([]);
  console.log(gallery);
  useEffect(() => {
    getPhotos();
  }, []);
  const getPhotos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/sl/api/gallery", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      setGallery(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (gallery.length < 1) {
    return (
      <div className="my-5">
        <h1 className="text-center">No photo...</h1>
      </div>
    );
  } else {
    return (
      <div className="gallery-container mt-5">
        {gallery.map((data, id) => (
          <div className="gallery-box" key={id}>
            <Link to={`/gallery/${data._id}`}>
              <img src={`${data.photo}`} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default GalleryView;

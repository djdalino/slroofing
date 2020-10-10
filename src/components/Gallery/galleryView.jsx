import React, { useState, useEffect } from "react";
import "./gallery.css";
import axios from "axios";
import { paginate } from "../Utilities/paginate";
import Pagination from "../Pagination";
import { ProductConsumer } from "../../stateManagement/context";
import GallerySingleView from "./gallerySingleView";
const GalleryView = () => {
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const filtered =
    gallery && gallery._id
      ? gallery.filter(g => g._id === gallery._id)
      : gallery;
  const galleryPaginate = paginate(filtered, currentPage, pageSize);
  useEffect(() => {
    getPhotos();
  }, []);
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  useEffect(() => {
    getPhotos();
  }, []);
  const getPhotos = async () => {
    try {
      const res = await axios.get("/sl/api/gallery", {
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
      <React.Fragment>
        <div className="gallery-container mt-5">
          {galleryPaginate.map((data, id) => (
            <div className="gallery-box" key={id}>
              <ProductConsumer>
                {value => {
                  const { handleGalleryChangeView } = value;

                  return (
                    <React.Fragment>
                      <img
                        className="gallery-img"
                        src={`${data.photo}`}
                        alt={data._id}
                        onClick={() => handleGalleryChangeView(id)}
                      />
                    </React.Fragment>
                  );
                }}
              </ProductConsumer>
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={gallery.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <GallerySingleView />
      </React.Fragment>
    );
  }
};

export default GalleryView;

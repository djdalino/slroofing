import React, { useState, useEffect } from "react";
import { ProductConsumer } from "../../stateManagement/context";
import axios from "axios";
const GallerySingleView = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    handleGalleryData();
  }, []);
  const handleGalleryData = async () => {
    try {
      const res = await axios.get("/sl/api/gallery");
      setGallery(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPhoto = num => {
    const photo = gallery.map(g => g.photo);
    return photo[num];
  };
  console.log(getPhoto(0));
  return (
    <ProductConsumer>
      {value => {
        const { galleryCount, handleGalleryChangeView } = value;
        const countAdd = () => {
          const add = galleryCount + 1;
          handleGalleryChangeView(add);
        };
        const countMinus = () => {
          const minus = galleryCount - 1;
          handleGalleryChangeView(minus);
        };
        if (galleryCount === null) {
          console.log(galleryCount);
          return null;
        } else {
          return (
            <React.Fragment>
              <div className="gallery-modal-container">
                <button type="button" className="close" aria-label="Close">
                  <span
                    aria-hidden="true"
                    onClick={() => handleGalleryChangeView(null)}
                  >
                    &times;
                  </span>
                </button>
                <button
                  onClick={() => countMinus()}
                  disabled={galleryCount === 0 ? true : false}
                >
                  &larr;
                </button>
                <img
                  src={getPhoto(galleryCount)}
                  alt="pishur"
                  className="gallery-img-show"
                />
                <button
                  onClick={() => countAdd()}
                  disabled={galleryCount === gallery.length - 1 ? true : false}
                >
                  &rarr;
                </button>
              </div>
            </React.Fragment>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default GallerySingleView;

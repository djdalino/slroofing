import React, { useState, useEffect } from "react";
import axios from "axios";
import { paginate } from "../Utilities/paginate";
import Pagination from "../Pagination";
import { ProductConsumer } from "../../stateManagement/context";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
const AdminGalleryViewState = () => {
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
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

  const handleDelete = async id => {
    confirmAlert({
      title: "Confirm to delete",
      message: `Are you sure to do this.`,
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`/sl/api/gallery/${id}`);
              window.location.reload();
            } catch (error) {
              alert(error.message);
            }
          }
        },
        {
          label: "No"
          //onClick: () => alert("Click No")
        }
      ]
    });
  };

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
              <span
                className="delete-one-photogallery"
                onClick={() => handleDelete(data._id)}
              >
                x
              </span>
              <ProductConsumer>
                {value => {
                  const { handleGalleryChangeView } = value;

                  return (
                    <React.Fragment>
                      <img
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
      </React.Fragment>
    );
  }
};

export default AdminGalleryViewState;

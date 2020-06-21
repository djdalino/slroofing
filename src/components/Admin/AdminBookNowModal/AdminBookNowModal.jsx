import React from "react";
import "./adminBookNowModal.css";
import { ProductConsumer } from "../../../stateManagement/context";
const AdminBookNowModal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          bookNowModal,
          bookNowFullDetail,
          handleCloseModalBookNow,
          getDate,
        } = value;
        const {
          first_name,
          last_name,
          email,
          phone,
          address,
          city,
          stateValue,
          postal_code,
          pickTime,
          startDate,
        } = bookNowFullDetail;
        if (!bookNowModal) {
          return null;
        } else {
          return (
            <div className="book-now-modal">
              <div className="book-now-modal-container">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModalBookNow}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h1>Client Information</h1>
                <div className="bookNow-modal-label">
                  <p>Name:</p> <p>{`${first_name} ${last_name}`}</p>
                </div>

                <div className="bookNow-modal-label">
                  <p>Email:</p> <p>{email}</p>
                </div>

                <div className="bookNow-modal-label">
                  <p>Phone:</p>
                  <p>{phone}</p>
                </div>

                <div className="bookNow-modal-label">
                  <p>Address:</p> <p>{`${address} ${city} ${stateValue} `}</p>
                </div>
                <div className="bookNow-modal-label">
                  <p>Postal Code:</p>
                  <p>{postal_code}</p>
                </div>
                <div className="bookNow-modal-label">
                  <p>Availability:</p>
                  <p>{`${pickTime} ${getDate(startDate)}`}</p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default AdminBookNowModal;

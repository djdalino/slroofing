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
                <h1>{`${first_name} ${last_name}`}</h1>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
                <p>{city}</p>
                <p>{stateValue}</p>
                <p>{postal_code}</p>
                <p>{pickTime}</p>
                <p>{getDate(startDate)}</p>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default AdminBookNowModal;

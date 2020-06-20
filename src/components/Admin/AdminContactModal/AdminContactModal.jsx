import React from "react";
import { ProductConsumer } from "../../../stateManagement/context";
const AdminContactModal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          contactModal,
          contactFullDetail,
          handleCloseModalContactModal,
          getDate,
        } = value;
        const { name, email, phone, inquiry, createdAt } = contactFullDetail;
        if (!contactModal) {
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
                  onClick={handleCloseModalContactModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{inquiry}</p>
                <p>{getDate(createdAt)}</p>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default AdminContactModal;

import React from "react";
import "./adminContactModal.css";
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
                <h1>Client Information</h1>
                <div className="contact-modal-label">
                  <p>Name:</p> <p>{name}</p>
                </div>

                <div className="contact-modal-label">
                  <p>Email:</p> <p>{email}</p>
                </div>

                <div className="contact-modal-label">
                  <p>Phone:</p>
                  <p>{phone}</p>
                </div>

                <div className="contact-modal-label">
                  <p>Message:</p> <p>{inquiry}</p>
                </div>

                <div className="contact-modal-label">
                  <p>Date:</p> <p>{getDate(createdAt)}</p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default AdminContactModal;

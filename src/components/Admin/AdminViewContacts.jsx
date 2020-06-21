import React, { Component } from "react";
import AdminContactModal from "./AdminContactModal/AdminContactModal";
import { ProductConsumer } from "../../stateManagement/context";
class AdminViewContacts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="admin-subs">
          <div className="list-of-contacts">
            <h1 className="text-center">List of Contacts</h1>
            <ProductConsumer>
              {(value) => {
                const {
                  contactData,
                  handleGetContactFullDetail,
                  getDate,
                } = value;
                if (contactData.length === 0) {
                  return <h2>No contact at this moment...</h2>;
                }
                return contactData.map((item) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        maxWidth: "768px",
                        margin: "auto",
                        justifyContent: "center",
                      }}
                      key={item._id}
                    >
                      <h4 className="text-center" style={{ width: "100%" }}>
                        {item.name}
                      </h4>
                      <h4 className="text-center" style={{ width: "100%" }}>
                        {item.email}
                      </h4>
                      <h4 className="text-center" style={{ width: "100%" }}>
                        {item.phone}
                      </h4>
                      <h4 className="text-center" style={{ width: "100%" }}>
                        {getDate(item.createdAt)}
                      </h4>
                      <h4 className="text-center" style={{ width: "100%" }}>
                        <p onClick={() => handleGetContactFullDetail(item._id)}>
                          View Detail
                        </p>
                      </h4>
                    </div>
                  );
                });
              }}
            </ProductConsumer>
          </div>
        </div>
        <AdminContactModal />
      </React.Fragment>
    );
  }
}

export default AdminViewContacts;

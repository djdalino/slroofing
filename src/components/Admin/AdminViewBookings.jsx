import React, { Component } from "react";
import AdminBookNowModal from "./AdminBookNowModal/AdminBookNowModal";
import { ProductConsumer } from "../../stateManagement/context";
class AdminViewBookings extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="admin-subs">
          <div className="booking-list">
            <h1 className="text-center">List of Bookings</h1>
            <ProductConsumer>
              {(value) => {
                const { bookNowData, getFullDetail, getDate } = value;
                if (bookNowData.length === 0) {
                  return <h2>No bookings at this moment...</h2>;
                }
                return bookNowData.map((item) => {
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
                        {item.first_name} {item.last_name}
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
                        <p onClick={() => getFullDetail(item._id)}>
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
        <AdminBookNowModal />
      </React.Fragment>
    );
  }
}

export default AdminViewBookings;

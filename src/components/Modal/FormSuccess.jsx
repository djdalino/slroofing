import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
class FormSuccess extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { handleBookNowModal } = value;
          return (
            <div>
              <h1>Booking submitted</h1>
              <button onClick={handleBookNowModal}>Close</button>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default FormSuccess;

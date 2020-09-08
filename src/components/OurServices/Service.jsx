import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../stateManagement/context";
import BookNowModal from "../Modal/BookNowModal";
class Service extends Component {
  render() {
    const { title, img, category } = this.props.service;
    // const { handleSlCategorySelect } = this.props.value;
    return (
      <Link to="/services" className="hold-services">
        <Link to="#" className="hover-button">
          <ProductConsumer>
            {value => {
              const { isBookNow, handleBookNowModal } = value;
              return (
                <React.Fragment>
                  <Link
                    to="#"
                    className="sbook-now width-book"
                    onClick={handleBookNowModal}
                  >
                    book now
                  </Link>

                  {isBookNow ? <BookNowModal /> : null}
                </React.Fragment>
              );
            }}
          </ProductConsumer>
          <Link to="/services" className="slearn-more">
            Learn more &nbsp;
          </Link>
        </Link>
        <img src={img} alt={title} className="mx-auto" />
        <p className="text-center mt-3 ourServicesFont">{title}</p>
      </Link>
    );
  }
}

export default Service;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../stateManagement/context";
import BookNowModal from "../Modal/BookNowModal";
class Service extends Component {
  render() {
    const { title, img, category } = this.props.service;
    const { activeCategory } = this.props.value;
    if (category.indexOf(activeCategory) < 0 && activeCategory !== "all") {
      return null;
    }
    return (
      <div className="hold-services">
        <div className="hover-button">
          <ProductConsumer>
            {(value) => {
              const { isBookNow, handleBookNowModal } = value;
              return (
                <React.Fragment>
                  <a
                    className="sbook-now width-book"
                    onClick={handleBookNowModal}
                  >
                    book now
                  </a>

                  {isBookNow ? <BookNowModal /> : null}
                </React.Fragment>
              );
            }}
          </ProductConsumer>
          <Link className="slearn-more" to="/services">
            Learn more &nbsp;>>
          </Link>
        </div>
        <img src={img} alt={title} className="mx-auto" />
        <p className="text-center mt-3 ourServicesFont">{title}</p>
      </div>
    );
  }
}

export default Service;

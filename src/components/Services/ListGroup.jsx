import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
class ListGroup extends Component {
  render() {
    return (
      <div>
        <p className="text-center text-capitalize mainText">
          RESIDENTIAL &amp; COMMERCIAL ROOFING INSPECTIONS - LEAK
          DETECTION/PREVENTION AND REPAIRS - FULL ROOF REPLACEMENT - NEW
          CONSTRUCTION - TEAR OFFS - LAYOVERS - RESHEETING - CHIMNEY REPAIRS -
          WIND DAMAGE - HAIL DAMAGE - STORM DAMAGE - INSURANCE CLAIMS - FREE
          ESTIMATES
        </p>
        {/* <ProductConsumer>
          {(value) => {
            const {
              slservicesCategory,
              handleSlCategorySelect,
              slSelectedCategory,
            } = value;
            return (
              <React.Fragment>
                <ul className="row">
                  {slservicesCategory.map((item) => (
                    <li
                      onClick={() => handleSlCategorySelect(item)}
                      key={item._id}
                      style={{ cursor: "pointer" }}
                      className={
                        item === slSelectedCategory
                          ? "list-group-item active"
                          : "list-group-item"
                      }
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            );
          }}
        </ProductConsumer> */}
      </div>
    );
  }
}

export default ListGroup;

import React, { Component } from "react";
import { ProductConsumer } from "../../stateManagement/context";
class ListGroup extends Component {
  render() {
    return (
      <div>
        <h2 className="text-uppercase mainText">Roofing</h2>

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

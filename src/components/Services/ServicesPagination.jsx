import React from "react";
import { ProductConsumer } from "../../stateManagement/context";
import Pagination from "../Pagination";
class ServicesPagination extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { itemsCount, pageSize, currentPage, handlePageChange } = value;
          return (
            <React.Fragment>
              <Pagination
                itemsCount={itemsCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ServicesPagination;

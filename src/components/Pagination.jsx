import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  const pages = _.range(1, pagesCount + 1);

  if (pages.length === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <Link className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

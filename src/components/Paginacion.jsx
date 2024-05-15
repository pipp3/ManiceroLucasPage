import { useState, useEffect } from "react";

const ProductPagination = ({ totalProducts }) => {
  const ProductosPorPagina = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(totalProducts / ProductosPorPagina);

  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="join">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`join-item btn ${
            currentPage === index + 1 ? "btn-active" : ""
          }`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default ProductPagination;

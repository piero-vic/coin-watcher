import React from "react";

const PaginationButton = (props) => {
  const { onClick, disabled, children } = props;

  return (
    <button
      className="px-3 text-xl text-cyan-900 disabled:opacity-70 dark:text-cyan-800"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Pagination = (props) => {
  const { page, setPage } = props;

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => p - 1);

  return (
    <div className="mt-2 flex items-center justify-center">
      <PaginationButton onClick={prevPage} disabled={page === 1} children="←" />
      <span>Page {page} of 25</span>
      <PaginationButton onClick={nextPage} disabled={page === 25} children="→" />
    </div>
  );
};

export default Pagination;

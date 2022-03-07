import React from "react";

const PaginationButton = (props) => {
  const { page, setPage, content } = props;

  const onClick = () =>
    content === "←" ? setPage(page - 1) : setPage(page + 1);
  const disabled = content === "←" ? page === 1 : page === 25;

  return (
    <button
      className="px-3 text-xl text-cyan-900 disabled:opacity-70 dark:text-cyan-800"
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

const Pagination = (props) => {
  const { page, setPage } = props;

  return (
    <div className="mt-2 flex items-center justify-center">
      <PaginationButton page={page} setPage={setPage} content="←" />
      <span>Page {page} of 25</span>
      <PaginationButton page={page} setPage={setPage} content="→" />
    </div>
  );
};

export default Pagination;

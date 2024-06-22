import React from 'react';

const Pagination = ({ page, onPageChange }) => {
  return (
    <div className="mt-4 flex justify-center">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="p-2 bg-gray-300 rounded-l">
        Previous
      </button>
      <span className="p-2 bg-gray-100">{page}</span>
      <button onClick={() => onPageChange(page + 1)} className="p-2 bg-gray-300 rounded-r">
        Next
      </button>
    </div>
  );
};

export default Pagination;

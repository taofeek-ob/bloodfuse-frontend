/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
  recordsPerPage,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div class="py-3 flex  justify-between gap-4 place-items-center border-gray-200 text-sm sm:hidden">
      <div className="mr-auto">
        <span class="text-sm text-gray-700 ">
          Showing <span class="font-semibold text-gray-900">1</span> to{" "}
          <span class="font-semibold text-gray-900 ">{recordsPerPage}</span> of{" "}
          <span class="font-semibold text-gray-900 ">{nPages}</span> Pages
        </span>
      </div>
      <div class="flex  justify-between items-center gap-2 ">
        <span className="text-sm">The page you’re on</span>
        <select
          class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={currentPage}
          onChange={(e) => setCurrentPage(e.target.value)}
        >
          {pageNumbers.map((pgNumber) => (
            <option value={pgNumber}>
              <a
                href="#"
                aria-current="page"
                className="z-10    relative inline-flex items-center px-4 py-2 border text-sm font-medium "
              >
                {pgNumber}
              </a>
            </option>
          ))}
        </select>
        <button
          className=" px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          {" "}
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <button
          className={`   items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
          onClick={nextPage}
          disabled={currentPage === nPages}
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

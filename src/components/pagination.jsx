import React from "react"
import ResponsivePagination from "react-responsive-pagination"
import "./styles/pagination.css"

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="w-full">
      <ResponsivePagination
        className="flex-row flex justify-center items-center"
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default Pagination

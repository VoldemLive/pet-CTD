import React, { useEffect, useState } from "react"
import { LuSearch } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

const SearchInput = ({ searchQuery, placeholder }) => {
  const [search, setSearch] = useState(searchQuery)
  const navigate = useNavigate()

  const startSearching = (e) => {
    e.preventDefault()
    updateQueryParams(search, 1)
  }

  const updateQueryParams = (newSearch, newPage) => {
    navigate(`?q=${newSearch}&p=${newPage}`)
  }

  return (
    <div className="flex w-full mb-6 gap-1 sm:gap-3">
      <div className="flex w-full">
        <input
          className="w-full p-2 border-b bg-gray-50 text-gray-500 border-gray-400 focus:outline-none "
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && startSearching(e)
          }}
          placeholder={placeholder || "Search"}
        />
      </div>

      <button
        onClick={startSearching}
        className="p-2 sm:p-3 sm:ml-3 bg-gray-50 border border-gray-300 bottom-1 tetx-large sm:text-xl text-gray-500"
      >
        <div className="flex flex-row items-center gap-2">
          <LuSearch size={30} className="flex text-gray-400" />
          <div className="absolute collapse sm:visible sm:relative">Search</div>
        </div>
      </button>
    </div>
  )
}

export default SearchInput

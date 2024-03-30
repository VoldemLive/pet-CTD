import React, { useState, useEffect } from "react"
import api from "@/api/api"
import Pagination from "@/components/pagination"
import { Link, useLocation, useNavigate } from "react-router-dom"
import ArtistsListItem from "@/components/artistListItem"
import SearchInput from "@/components/searchInput"

const SearchArtistsPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [artists, setArtists] = useState([])
  const [maxPage, setMaxPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(parseInt(searchParams.get("p")) || 1)
  const [search, setSearch] = useState(searchParams.get("q") || "")

  useEffect(() => {
    const newPage = parseInt(searchParams.get("p")) || 1
    const newSearch = searchParams.get("q") || ""
    setPage(newPage)
    setSearch(newSearch)
    fetchData(newSearch, newPage)
  }, [location.search])

  const fetchData = async (query = search, currentPage = page) => {
    setIsLoading(true)
    const response = await api.searchArtists(
      query,
      currentPage,
      24,
      "id,title,birth_date,death_date"
    )
    if (response && response.data && response.pagination) {
      setArtists(response.data)
      setMaxPage(response.pagination.total_pages)
    }
    setIsLoading(false)
  }

  const updateQueryParams = (newSearch, newPage) => {
    navigate(`?q=${newSearch}&p=${newPage}`)
  }

  const handlePageChange = (newPage) => {
    updateQueryParams(search, newPage)
  }

  return (
    <>
      <div className="relative flex-col p-6 max-w-[1640px] mx-auto flex w-full h-full">
        <h1 className="text-4xl sm:text-3xl font-semibold text-gray-500 m-4">
          Search artists
        </h1>
        <SearchInput
          searchQuery={search}
          placeholder={"Dive into artist profiles: Enter any name or alias ..."}
        />
        {artists.length === 0 && isLoading === false && (
          <div className="flex w-full h-40 text-gray-500 text-xl">
            Sorry, but nothing can find by this query ...
          </div>
        )}
        <div
          className={`mb-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 transition-all duration-300 ${
            isLoading && "opacity-20"
          }`}
        >
          {artists.map((artist) => (
            <div className="break-inside-avoid group" key={artist.id}>
              <ArtistsListItem artist={artist} />
              <hr className="border-gray-300/50 my-1 mt-1" />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="flex w-full lg:max-w-[850px]">
            {maxPage > 1 && (
              <Pagination
                currentPage={page}
                totalPages={maxPage}
                setCurrentPage={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchArtistsPage

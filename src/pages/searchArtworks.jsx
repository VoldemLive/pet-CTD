import React, { useState, useEffect } from "react"
import api from "@/api/api"
import Pagination from "@/components/pagination"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { LuSearch } from "react-icons/lu"
import ArtworkItem from "@/components/artworkListItem"
import SearchInput from "@/components/searchInput"
const SearchArtworksPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [artworks, setArtworks] = useState([])
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
    const response = await api.searchArtworks(
      query,
      currentPage,
      12,
      "id,title,image_id,date_display,thumbnail"
    )
    if (response && response.data && response.pagination) {
      setArtworks(response.data)
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
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-500 m-4">
          Search artworks
        </h1>
        <SearchInput
          placeholder={
            "Art at your fingertips: Search paintings by title, artist, or era..."
          }
          searchQuery={search}
        />
        {artworks.length === 0 && isLoading === false && (
          <div className="flex w-full h-40 text-gray-500 text-xl">
            Sorry, but nothing can find by this query ...
          </div>
        )}
        <div
          className={`mb-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 transition-all duration-300 ${
            isLoading && "opacity-20"
          }`}
        >
          {artworks.map((artwork) => (
            <div className="break-inside-avoid group mb-7" key={artwork.id}>
              <ArtworkItem artwork={artwork} />
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

export default SearchArtworksPage

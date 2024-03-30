import React, { useState, useEffect } from "react"
import api from "@/api/api"
import Pagination from "@/components/pagination"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Alphabet from "@/components/alphabet"
import ArtworkItem from "@/components/artworkListItem"
const ArtworksPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const page_limit = 24
  const [artworks, setArtwork] = useState([])
  const [maxPage, setMaxPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(searchParams.get("p") || "1", 10)
  const [letter, setLetter] = useState(searchParams.get("l") || "A")

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const pageFromUrl = parseInt(searchParams.get("p")) || 1
      const letterFromUrl = searchParams.get("l") || "A"

      const response = await api.getArtworks(
        pageFromUrl,
        page_limit,
        letterFromUrl,
        "id,title,image_id,date_display"
      )
      if (response && response.data) {
        setArtwork(response.data)
        setPage(response.pagination.current_page)
        setLetter(letterFromUrl)
        setMaxPage(response.pagination.total_pages)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [location.search])

  const updateQueryParams = (nextLetter, nextPage) => {
    navigate(`?l=${nextLetter}&p=${nextPage}`)
  }

  const nextLetter = (curLetter) => {
    updateQueryParams(curLetter, 1)
  }

  const loadPage = (newPage) => {
    updateQueryParams(letter, newPage)
  }

  return (
    <>
      <div className="relative flex-col p-6 max-w-[1640px] mx-auto flex w-full h-full">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-500 m-4">
          Artworks catalog
        </h1>

        <div
          className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 transition-all duration-300 ${
            isLoading && "opacity-20"
          }`}
        >
          {artworks.map((artwork) => (
            <div className="break-inside-avoid group mb-7" key={artwork.id}>
              <ArtworkItem artwork={artwork} />
            </div>
          ))}
        </div>
        <div className="my-7">
          <div>
            <Alphabet letterSelected={nextLetter} currentLetter={letter} />
          </div>
          <div className="flex w-full justify-center items-center">
            <div className="flex w-full lg:max-w-[850px]">
              {maxPage > 1 && (
                <Pagination
                  currentPage={page}
                  totalPages={maxPage}
                  setCurrentPage={loadPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtworksPage

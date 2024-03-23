import React, { useState, useEffect } from "react"
import api from "@/api/api"
import Pagination from "@/components/pagination"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Alphabet from "@/components/alphabet"
import ArtworkItem from "@/components/artworkItem"
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
    const pageFromUrl = parseInt(searchParams.get("p")) || 1
    const letterFromUrl = searchParams.get("l") || "A"
    setPage(pageFromUrl)
    setLetter(letterFromUrl)
  }, [location.search])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await api.getArtworks(page, page_limit, letter)
      setArtwork(response.data)
      setPage(response.pagination.current_page)
      setMaxPage(response.pagination.total_pages)
      setIsLoading(false)
    }
    fetchData()
  }, [page, letter])

  const updateQueryParams = (nextLetter, nextPage) => {
    navigate(`?l=${nextLetter}&p=${nextPage}`)
  }

  const nextLetter = (curLetter) => {
    updateQueryParams(curLetter, 1)
  }

  const loadPage = async (newPage) => {
    updateQueryParams(letter, newPage)
  }

  return (
    <>
      <div>
        <h1 className="text-4xl sm:text-3xl font-semibold text-slate-500 m-4">
          Artworks catalog
        </h1>
        {/* when loading fade bottom part and show loading component */}
        <div
          className={`mb-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 transition-all duration-300 ${
            isLoading && "opacity-20"
          }`}
        >
          {artworks.map((artwork) => (
            <div className="break-inside-avoid group" key={artwork.id}>
              <ArtworkItem data={artwork} />
            </div>
          ))}
        </div>
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
    </>
  )
}

export default ArtworksPage

import React, { useState, useEffect } from "react"
import api from "@/api/api"
import Pagination from "@/components/pagination"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Alphabet from "@/components/alphabet"
import ArtistsListItem from "@/components/artistListItem"

const ArtistsPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const page_limit = 24
  const [artists, setArtists] = useState([])
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
      const response = await api.getArtists(page, page_limit, letter)
      setArtists(response.data)
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
      <div className="relative flex-col p-6 max-w-[1640px] mx-auto flex w-full h-full">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-500 m-4">
          Artists catalog
        </h1>
        {/* when loading fade bottom part and show loading component */}
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

export default ArtistsPage

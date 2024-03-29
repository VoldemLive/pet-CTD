import React, { useEffect, useState } from "react"
import api from "@/api/api"
import ArtworkItem from "./artworkListItem"
import { LuLoader2 } from "react-icons/lu"
import Pagination from "./pagination"
const ArtworksCollection = ({ endpoint, id, paginationType }) => {
  const limit = 12
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const endpoints = {
    artist: api.getArtworksByArtistId.bind(api),
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await endpoints[endpoint](id)
      setData(response.data)
      setPage(response.pagination.current_page)
      setMaxPage(response.pagination.total_pages)
      setIsLoading(false)
    }
    fetchData()
  }, [endpoint, id])

  const loadData = async (currentPage) => {
    const response = await endpoints[endpoint](id, currentPage)
    return response
  }

  const loadMore = async () => {
    setIsLoading(true)
    const response = await loadData(page + 1)
    setData([...data, ...response.data])
    setPage(response.pagination.current_page)
    setMaxPage(response.pagination.total_pages)
    setIsLoading(false)
  }

  const loadPage = async (page) => {
    setIsLoading(true)
    const response = await loadData(page)
    setData(response.data)
    setPage(response.pagination.current_page)
    setMaxPage(response.pagination.total_pages)
    setIsLoading(false)
  }

  return (
    <>
      <div className="relative flex-col max-w-[1640px] mx-auto flex w-full h-full">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 transition-all duration-300">
          {data.map((artwork) => (
            <div className="mb-7" key={artwork.id}>
              <ArtworkItem artwork={artwork} />
            </div>
          ))}
        </div>
        <div className="mt-28">
          {paginationType === "infinite" &&
            page < maxPage &&
            page < maxPage && (
              <div className="absolute flex justify-center p-3 w-full bottom-0">
                <button
                  onClick={loadMore}
                  className="p-3 border w-full max-w-[250px] bg-gray-400 text-white my-3"
                >
                  {isLoading ? (
                    <div className="flex justify-center content-center flex-row gap-2">
                      <LuLoader2 className="animate-spin" size={30} />
                      <div>loading</div>
                    </div>
                  ) : (
                    <div>load more</div>
                  )}
                </button>
              </div>
            )}
        </div>
      </div>

      {paginationType === "pagination" && maxPage > 1 && (
        <div className="flex w-full justify-center items-center h-40">
          <div className="flex w-full lg:max-w-[850px]">
            <Pagination
              currentPage={page}
              totalPages={maxPage}
              setCurrentPage={loadPage}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ArtworksCollection

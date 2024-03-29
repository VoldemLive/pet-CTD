import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import api from "@/api/api"
import Loading from "@/components/loading"
import ArtistsListItem from "@/components/artistListItem"
import ArtworksListItem from "@/components/artworkListItem"
import SearchInput from "@/components/searchInput"

const SearchPage = () => {
  const limit = 12
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [search, setSearch] = useState(searchParams.get("q") || "")
  const [artworksData, setArtworksData] = useState(null)
  const [artistsData, setArtistsData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const query = searchParams.get("q") || ""
    setSearch(query)

    const fetchData = async () => {
      setIsLoading(true)
      let res = await api.searchArtworkAndArtist(query, 1, limit, [
        "id",
        "title",
        "image_id",
        "thumbnail",
        "date_birth",
        "date_death",
      ])
      console.log(res)
      setArtistsData(res.artists)
      setArtworksData(res.artworks)
      setIsLoading(false)
    }

    fetchData()
  }, [location.search])

  return (
    <div className="relative flex-col p-6 max-w-[1640px] mx-auto flex w-full h-full">
      {isLoading && (
        <div className="absolute w-full h-full">
          <Loading />
        </div>
      )}
      <div className="text-xl sm:text-2xl text-slate-500 p-3">
        Search results:
      </div>
      <SearchInput searchQuery={search} />
      <h2 className="text-slate-400 text-xl">Artists:</h2>
      <hr className="border-gray-300/50 my-1" />
      <div className="p-3 mb-4">
        <div className="columns-1 sm:columns-2 md:columns-3">
          <div>
            {artistsData?.data?.map((artist) => (
              <div key={artist.id} className="break-inside-avoid">
                <ArtistsListItem artist={artist} />
                <hr className="border-gray-300/50 my-1 mt-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end w-full p-3 text-slate-500 underline">
          {artistsData && artistsData?.pagination?.total > limit && (
            <Link to={`/search/artists?q=${search}`}>
              show all {artistsData?.pagination?.total} artists ...
            </Link>
          )}
        </div>
      </div>
      <h2 className="text-slate-400 text-xl">Artworks:</h2>
      <hr className="border-gray-300/50 my-1" />
      <div className="p-3 mb-4">
        <div className="columns-1 sm:gap-5 sm:columns-2 md:gap-14 md:columns-3 lg:columns-4">
          {artworksData?.data?.map((artwork) => (
            <div key={artwork.id} className="break-inside-avoid my-7">
              <ArtworksListItem artwork={artwork} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end w-full p-3 text-slate-500 underline">
          {artworksData && artworksData?.pagination?.total > limit && (
            <Link to={`/search/artworks?q=${search}`}>
              show all {artworksData?.pagination?.total} artworks ...
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage

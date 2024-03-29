import React, { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"
import api from "@/api/api"
import { LuX, LuMoveRight, LuSearch } from "react-icons/lu"
import ListArtworks from "./components/listArtworks"
import ListArtists from "./components/listArtists"
import { Link, useNavigate, useNavigation } from "react-router-dom"

const QuickSearch = ({ toggleShowSearch }) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [artworksData, setArtworksData] = useState([])
  const [artistsData, setArtistsData] = useState([])
  const [value] = useDebounce(search, 300)

  useEffect(() => {
    const fetchData = async () => {
      let res = await api.searchArtworkAndArtist(
        value,
        1,
        12,
        "id,title,image_id"
      )
      setArtistsData(res.artists)
      setArtworksData(res.artworks)
    }
    if (value.length > 2) fetchData()
    else {
      setArtistsData([])
      setArtworksData([])
    }
  }, [value])

  const gotoSearch = (e) => {
    e.preventDefault()
    toggleShowSearch(false)
    navigate(`/search?q=${value}`)
  }

  return (
    <div className="absolute flex z-[1000] bg-slate-700 max-h-screen text-slate-300 content-center justify-center w-full min-h-[95px] min-w-[280px] overflow-y-scroll overflow-x-clip">
      <div className="max-w-[1640px] w-full">
        <div className="flex w-full items-center content-center mt-2 p-2 justify-between flex-row">
          <div className="relative  flex w-full">
            <div className="flex w-full">
              <input
                className="w-full p-2 border-b bg-gray-300/10 text-gray-300 border-gray-300 focus:outline-none "
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  e.key === "Escape" && toggleShowSearch(false)
                  e.key === "Enter" && gotoSearch(e)
                }}
                placeholder="Start searching here..."
              />
            </div>
            {value.length > 2 && (
              <div className="absolute flex top-0 pr-2 w-full h-full justify-end items-center content-center pointer-events-none">
                <Link to={`/search?${value}`}>
                  <LuSearch
                    size={30}
                    className="flex text-gray-300 pointer-events-auto cursor-hand"
                  />
                </Link>
              </div>
            )}
          </div>
          <div className="flex ml-2">
            <LuX
              className=" text-gray-300 place-self-end cursor-pointer"
              size={35}
              onClick={() => toggleShowSearch(false)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          {artistsData?.data?.length > 0 && (
            <div className="p-4">
              <ListArtists data={artistsData} />
            </div>
          )}
          {artworksData?.data?.length > 0 && (
            <div className="p-4">
              <ListArtworks data={artworksData} />
            </div>
          )}
        </div>
        {artistsData?.data?.length > 0 || artworksData?.data?.length > 0 ? (
          <div className="sticky bottom-0 justify-end p-3 flex w-full bg-slate-700 shadow-lg border-t border-slate-500">
            <Link to={`/search?q=${value}`}>
              <div className="flex flex-row gap-2 content-center items-center">
                <div className=" text-xl  hover:text-slate-100 transition-all duration-300">
                  Search
                </div>
                <LuMoveRight size={35} />
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default QuickSearch

import React, { useState, useEffect, useRef } from "react"
import api from "@/api/api"
import { LuChevronRightSquare, LuChevronLeftSquare } from "react-icons/lu"
import ArtworkRowItem from "./artworkRowItem"
const RandomArtworksRow = () => {
  const [data, setData] = useState([])

  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 40)
    const fetchData = async () => {
      const response = await api.getArtworks(randomPage, 24, "", "date")
      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col justify-center relative w-full bg-gray-700 overflow-hidden">
      <div className="relative max-w-[1640px] mx-auto flex w-full mb-20">
        <div className="absolute text-clip text-nowrap top-0 text-7xl sm:text-8xl lg:text-9xl text-slate-600/50">
          art surprise
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto items-center snap-mandatory snap-x scroll-auto pt-4 md:pt-12 pb-12 scrollbar-hide"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex snap-center snap-always shrink-0 px-6 lg:px-6 max-w-[95%]"
          >
            <ArtworkRowItem maxHeight={550} artwork={item} />
          </div>
        ))}
      </div>
      <div className="absolute left-3 flex items-center justify-center h-full">
        <div className="cursor-hand text-slate-400 opacity-50 hover:opacity-100 hover:text-slate-400 transition-all duration-300">
          <LuChevronLeftSquare
            size={45}
            className="text-slate-400 opacity-50 hover:opacity-100"
            onClick={scrollLeft}
          />
        </div>
      </div>
      <div className="absolute right-3 flex items-center justify-center h-full ">
        <div className="cursor-hand text-slate-400 opacity-50 hover:opacity-100 hover:text-slate-400 transition-all duration-300">
          <LuChevronRightSquare
            size={45}
            className="text-slate-400 opacity-50 hover:opacity-100"
            onClick={scrollRight}
          />
        </div>
      </div>
    </div>
  )
}

export default RandomArtworksRow

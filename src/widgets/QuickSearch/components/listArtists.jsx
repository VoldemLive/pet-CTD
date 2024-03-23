import React, { useEffect, useState } from "react"
import ArtistItem from "./artistItem"

const ListArtists = ({ data }) => {
  const [artistsData, setArtistsData] = useState([])
  const [paginationData, setPaginationData] = useState({})
  useEffect(() => {
    if (data) {
      setArtistsData(data.data)
      setPaginationData(data.pagination)
    }
  }, [data])
  return (
    <div>
      {artistsData.length > 0 && (
        <>
          <div className="text-gray-300 font-semibold">
            {artistsData.length > 1 ? (
              <div className="flex w-full flex-row gap-2">
                <div>Artists </div>
                <p className="text-gray-300/50 font-thin">
                  ({paginationData.total})
                </p>
              </div>
            ) : (
              "Artist"
            )}
          </div>
          <hr className=" opacity-15" />
          <div className="flex flex-col w-full items-center flex-1 flex-wrap gap-1 p-3 max-h-[250px]">
            {artistsData.map((artist) => (
              <ArtistItem key={artist.id} data={artist} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ListArtists

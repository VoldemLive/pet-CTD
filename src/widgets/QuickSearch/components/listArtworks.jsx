import React, { useState, useEffect } from "react"
import ArtworkItem from "./artworkItem"

const ListArtworks = ({ data }) => {
  const [artworksData, setArtworksData] = useState([])
  const [paginationData, setPaginationData] = useState({})
  useEffect(() => {
    if (data) {
      setArtworksData(data.data)
      setPaginationData(data.pagination)
    }
  }, [data])
  return (
    <div>
      {artworksData.length > 0 && (
        <>
          <div className="text-gray-300 font-semibold">
            {artworksData.length > 1 ? (
              <div className="flex flex-row gap-2">
                <div>Artworks</div>
                <p className="text-gray-300/50 font-thin">
                  ({paginationData.total})
                </p>
              </div>
            ) : (
              "Artwork"
            )}
          </div>
          <hr className=" opacity-15" />
          <div className="flex flex-col flex-1 flex-wrap gap-1 p-3">
            {artworksData.map((artwork) => (
              <ArtworkItem key={artwork.id} data={artwork} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ListArtworks

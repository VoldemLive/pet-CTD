import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const ArtworkItem = ({ data }) => {
  const [artworkTitle, setArtworkTitle] = useState()
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    let maxLength = 80
    if (data.title.length > maxLength) {
      setArtworkTitle(data.title.slice(0, maxLength - 3) + "...")
    } else {
      setArtworkTitle(data.title)
    }
  }, [data])

  const handlerError = (e) => {}

  return (
    <div className="text-gray-300 flex flex-row gap-2">
      <Link className="hover:text-gray-200" to={`/artwork/${data.id}`}>
        <div className="flex flex-row items-center gap-2">
          <div className="flex min-w-[40px]">
            {!imageError ? (
              <img
                className="h-10 w-8 object-cover"
                src={`https://www.artic.edu/iiif/2/${data?.image_id}/full/43,/0/default.jpg`}
                alt={artworkTitle}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="h-10 w-8 bg-slate-900"></div>
            )}
          </div>
          <div className="flex hover:text-grey-300 hover:ml-1 transition-all duration-300">
            {artworkTitle}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArtworkItem

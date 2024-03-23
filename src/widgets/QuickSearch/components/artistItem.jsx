import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ArtistItem = ({ data }) => {
  const [artistName, setArtistName] = useState()

  useEffect(() => {
    let maxLength = 20
    if (data.title.length > maxLength) {
      setArtistName(data.title.slice(0, maxLength - 3) + "...")
    } else {
      setArtistName(data.title)
    }
  }, [data])

  return (
    <div className="text-gray-300">
      <Link
        className=" hover:text-gray-200 transition-all duration-200"
        to={`/artist/${data.id}`}
      >
        {artistName}
      </Link>
    </div>
  )
}

export default ArtistItem

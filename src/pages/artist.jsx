import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "@/api/api"
import Loading from "@/components/loading"
import ArtworksCollection from "@/components/artworksCollection"
const Artist = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [artistData, setArtistData] = useState(null)
  const [altNames, setAltNames] = useState("")
  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const response = await api.findArtistById(id)

      setArtistData(response.data)
      setIsLoading(false)
    }
    fetchData()
  }, [id])

  useEffect(() => {
    if (artistData?.alt_titles?.length > 0) {
      setAltNames(artistData.alt_titles.join(", "))
    }
  }, [artistData])

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-500 text-2xl">{artistData.title}</h1>
        <p className="text-gray-400">{`${artistData.birth_date} - ${artistData.death_date}`}</p>
        <div className="sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
          {altNames.length > 0 ? (
            <div>
              <h3 className="text-xs text-gray-400">Also known as:</h3>
              <p className="text-sm text-gray-400">{altNames}</p>
            </div>
          ) : (
            <div>
              <p className="text-xs text-gray-400">Also known as:</p>
              <h2 className="text-sm text-gray-400">
                Alternative names not founded
              </h2>
            </div>
          )}
        </div>
        <hr />
        <ArtworksCollection
          endpoint="artist"
          id={id}
          paginationType="infinite"
        />
      </div>
    </>
  )
}

export default Artist

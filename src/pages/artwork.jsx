import React, { useEffect, useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import api from "@/api/api"
import { OutletContext } from "@/hoc/context"
import htmlParser from "html-react-parser"
import Loading from "@/components/loading"
import ForbiddenImage from "@/components/forbiddenImage"
const Artwork = () => {
  const [artworkData, setArtworkData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const { id } = useParams()

  const { getImageData } = useContext(OutletContext)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const response = await api.findArtworkById(id)
      setArtworkData(response.data)
      console.log(response.data)
      setIsLoading(false)
    }
    fetchData()
  }, [id])

  if (isLoading) return <Loading />

  return (
    <div>
      <div>
        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex flex-col flex-1">
            <div className="mb-3">
              <p className="text-slate-500 text-4xl">{artworkData?.title}</p>
              <Link to={`/artist/${artworkData?.artist_ids[0]}`}>
                <p className="text-slate-400 text-sm">
                  {artworkData?.artist_display}
                </p>
              </Link>
            </div>
            <div className="flex md:flex-row flex-col gap-8">
              <div className="flex flex-col md:max-w-[50%]">
                {!imageError ? (
                  <img
                    className="cursor-zoom-in"
                    onClick={() => getImageData(artworkData?.id)}
                    src={`https://www.artic.edu/iiif/2/${artworkData?.image_id}/full/400,/0/default.jpg`}
                    alt={artworkData?.thumbnail?.alt_text}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex justify-center items-center">
                    <ForbiddenImage alert="This artwork is exclusively available for viewing at the Art Institute of Chicago" />
                  </div>
                )}
                <div>
                  <p className="w-full text-center text-slate-500">
                    {`${artworkData?.title} (${artworkData?.date_display})`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-4">
                <p className="text-slate-500">
                  {artworkData?.description
                    ? htmlParser(artworkData?.description)
                    : null}
                </p>
                <div className="flex flex-col gap-3 text-slate-500">
                  <div>
                    {artworkData.medium_display &&
                      `Technique: ${artworkData.medium_display}`}
                  </div>
                  <div>
                    {artworkData.date_start &&
                      `Work period: (${artworkData.date_start} - ${artworkData.date_end})`}
                  </div>
                  <div>
                    {artworkData.place_of_origin &&
                      `Origin: ${artworkData.place_of_origin}`}
                  </div>
                  <div>{`Dimensions: ${artworkData?.dimensions}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artwork

import React, { useEffect, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LuZoomIn } from "react-icons/lu"
import { OutletContext } from "@/hoc/context"
import useHoverCapability from "@/hooks/useHoverCapability"
import ForbiddenImage from "./forbiddenImage"
const ArtworkItem = ({ data }) => {
  const canHover = useHoverCapability()
  const { getImageData } = useContext(OutletContext)
  const [imageError, setImageError] = useState(false)

  return (
    <>
      <div className="relative md:max-w-[300px] mb-5 flex flex-col break-inside-avoid group">
        <div className="relative">
          <Link to={`/artwork/${data.id}`}>
            {!imageError ? (
              <img
                className="w-full h-full object-cover"
                src={`https://www.artic.edu/iiif/2/${data?.image_id}/full/400,/0/default.jpg`}
                alt={data?.thumbnail?.alt_text}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-slate-200 flex justify-center items-center">
                <ForbiddenImage imageData={data} />
              </div>
            )}
          </Link>
          <div
            className={
              canHover
                ? "opacity-0 group-hover:opacity-100 transition duration-200"
                : "opacity-100"
            }
          >
            {!imageError && (
              <div
                onClick={() => getImageData(data?.id)}
                className=" bg-slate-100/50 cursor-pointer flex absolute top-1 right-1 h-10 w-10 justify-center items-center"
              >
                <LuZoomIn className="text-gray-400" size={35} />
              </div>
            )}
          </div>
        </div>
        <Link to={`/artwork/${data.id}`}>
          <div className="flex flex-col text-xs text-center mt-1 text-gray-400 ">
            {data.title}
            <p className="font-semibold">
              {data.date_display && `(${data.date_display})`}
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ArtworkItem

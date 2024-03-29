/**
 * Component for rendering an artwork list item.
 *
 * @component
 * @param {Object} data - The artwork data.
 * @returns {JSX.Element} - The rendered component.
 */
import React, { useEffect, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LuZoomIn } from "react-icons/lu"
import { OutletContext } from "@/hoc/context"
import useHoverCapability from "@/hooks/useHoverCapability"
import ForbiddenImage from "./forbiddenImage"
const ArtworkListItem = ({ artwork }) => {
  const canHover = useHoverCapability()
  const { getImageData } = useContext(OutletContext)
  const [imageError, setImageError] = useState(false)
  return (
    <>
      <div className="relative md:max-w-[300px] flex flex-col break-inside-avoid group">
        <div className="relative">
          <Link to={`/artwork/${artwork.id}`}>
            {!imageError ? (
              <div className="p-2 border border-slate-200 bg-neutral-50">
                <img
                  className="w-full h-full object-cover"
                  src={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/400,/0/default.jpg`}
                  alt={artwork?.thumbnail?.alt_text}
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="w-full h-full bg-slate-200 flex justify-center items-center">
                <ForbiddenImage imageData={artwork} />
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
                onClick={() => getImageData(artwork?.id)}
                className=" bg-slate-100/50 cursor-pointer flex absolute top-1 right-1 h-10 w-10 justify-center items-center"
              >
                <LuZoomIn className="text-gray-400" size={35} />
              </div>
            )}
          </div>
        </div>
        <Link to={`/artwork/${artwork.id}`}>
          <div className="flex flex-col text-xs font-thin text-center mt-1 text-gray-400 ">
            <div className="px-3 truncate">{artwork.title}</div>
            <p className="font-normal">
              {artwork.date_display && `${artwork.date_display}`}
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ArtworkListItem

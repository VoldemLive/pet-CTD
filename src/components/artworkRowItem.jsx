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
const ArtworkRowItem = ({ artwork, maxHeight }) => {
  const canHover = useHoverCapability()
  const { getImageData } = useContext(OutletContext)
  const [imageError, setImageError] = useState(false)
  return (
    <>
      <div className="md:max-w-[300px] flex flex-col break-inside-avoid group">
        <div className="relative border border-slate-200 bg-neutral-100 p-2 hover:scale-105 shadow-md shadow-black/20 hover:shadow-2xl hover:shadow-black/50  transition-all duration-300">
          <Link to={`/artwork/${artwork.id}`}>
            {!imageError ? (
              <img
                className={`w-full h-full object-cover`}
                src={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/400,/0/default.jpg`}
                alt={artwork?.thumbnail?.alt_text}
                onError={() => setImageError(true)}
                style={maxHeight ? { maxHeight: `${maxHeight}px` } : {}}
              />
            ) : (
              <div
                className={`w-full h-full ${
                  maxHeight && `max-h-[${maxHeight}px]`
                } bg-slate-200 flex justify-center items-center`}
              >
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
          ></div>
        </div>
        {/* <Link to={`/artwork/${artwork.id}`}>
          <div className="flex flex-col text-xs text-center mt-1 text-gray-400 ">
            {artwork.title}
            <p className="font-semibold">
              {artwork.date_display && `(${artwork.date_display})`}
            </p>
          </div>
        </Link> */}
      </div>
    </>
  )
}

export default ArtworkRowItem

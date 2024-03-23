import React, { useEffect, useRef, useState } from "react"
import OpenSeadragon from "openseadragon"
import { CiCircleRemove, CiCirclePlus, CiCircleMinus } from "react-icons/ci"
const OpenSeadragonViewer = ({ id, close }) => {
  const viewerRef = useRef(null)
  const [viewer, setViewer] = useState(null)
  const manifestUrl = `https://api.artic.edu/api/v1/artworks/${id}/manifest.json`

  useEffect(() => {
    const initViewer = async () => {
      const response = await fetch(manifestUrl)
      const manifest = await response.json()

      const tileSources = manifest.sequences[0].canvases.map((canvas) => {
        const imageServiceUrl = `${canvas.images[0].resource.service["@id"]}/info.json`
        return imageServiceUrl
      })

      if (viewerRef.current) {
        const osdViewer = OpenSeadragon({
          showNavigationControl: false,
          element: viewerRef.current,
          tileSources: tileSources,
        })
        setViewer(osdViewer)
      }
    }

    initViewer()
    return () => {
      if (viewer) {
        viewer.destroy()
      }
    }
  }, [manifestUrl])

  const handleZoomIn = () => {
    if (viewer && viewer.viewport) {
      const currentZoom = viewer.viewport.getZoom()
      const maxZoom = viewer.viewport.getMaxZoom()
      if (currentZoom < maxZoom) {
        viewer.viewport.zoomBy(1.1)
        viewer.viewport.applyConstraints()
      }
    }
  }

  const handleZoomOut = () => {
    if (viewer && viewer.viewport) {
      const currentZoom = viewer.viewport.getZoom()
      const minZoom = viewer.viewport.getMinZoom()
      if (currentZoom > minZoom) {
        viewer.viewport.zoomBy(0.9)
        viewer.viewport.applyConstraints()
      }
    }
  }

  return (
    <div>
      <div ref={viewerRef} className="w-screen h-screen bg-transparent" />
      <div className="z-[10000] absolute top-0 w-full p-4">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row gap-2">
            <CiCircleMinus
              className="text-gray-600 cursor-pointer rounded-full bg-slate-200"
              size={40}
              onClick={handleZoomOut}
            />
            <CiCirclePlus
              className="text-gray-600 cursor-pointer rounded-full bg-slate-200"
              size={40}
              onClick={handleZoomIn}
            />
          </div>
          <div className="flex">
            <CiCircleRemove
              className="text-gray-600 cursor-pointer rounded-full bg-slate-200"
              size={40}
              onClick={close}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenSeadragonViewer

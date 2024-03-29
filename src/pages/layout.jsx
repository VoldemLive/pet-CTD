import React, { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickSearch from "@/widgets/QuickSearch/quickSearch"
import { OutletContext } from "@/hoc/context"
import OpenSeadragonViewer from "@/components/openSeadragonViewer"
const Layout = () => {
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()
  const [imageId, setImageId] = useState(null)

  useEffect(() => {
    setShowSearch(false)
  }, [location])

  const toggleShowSearch = (visible) => {
    setShowSearch(visible)
  }

  const getImageData = async (id) => {
    setImageId(id)
  }

  useEffect(() => {}, [showSearch])

  return (
    <>
      {imageId && (
        <div className="fixed z-[1000] h-full w-full bg-slate-400/60 backdrop-blur-md transition duration-3000">
          <OpenSeadragonViewer close={() => setImageId(null)} id={imageId} />
        </div>
      )}
      <div className="flex flex-col min-h-screen justify-between">
        {showSearch ? (
          <QuickSearch toggleShowSearch={toggleShowSearch} />
        ) : (
          <></>
        )}
        <header>
          <Navbar toggleShowSearch={toggleShowSearch} />
        </header>
        <article className="mb-auto">
          <div className="relative left-[50%] translate-x-[-50%] w-full">
            <OutletContext.Provider value={{ getImageData }}>
              <Outlet />
            </OutletContext.Provider>
          </div>
        </article>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout

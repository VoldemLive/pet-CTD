import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci"
import Logo from "./logo"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = ({ toggleShowSearch }) => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div className="relative z-20 bg-slate-500 text-slate-300 w-full pt-1 pb-1 h-[95px] min-w-[280px]">
      <div className="max-w-[1640px] mx-auto flex items-center justify-between w-full h-full px-4 sm:px-6 lg:px-8">
        <Logo
          onClick={() => {
            setMobileMenu(false)
          }}
        />
        <div className="hidden sm:flex text-sm lg:text-lg items-center space-x-4">
          <Link to="/artists" className="hover:text-slate-200">
            Artists
          </Link>
          <Link to="/artworks" className="hover:text-slate-200">
            Artworks
          </Link>
          <Link to="/collections" className="hover:text-slate-200">
            Collections
          </Link>
          <CiSearch
            className="text-2xl lg:text-3xl cursor-pointer hover:text-slate-200"
            onClick={() => {
              toggleShowSearch(true)
            }}
          />
        </div>
        <div className="sm:hidden flex items-center">
          <CiSearch
            className="text-3xl cursor-pointer hover:text-slate-200"
            onClick={() => {
              setMobileMenu(false)
              toggleShowSearch(true)
            }}
          />
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
        {mobileMenu && (
          <div className="absolute top-full left-0 right-0 bg-slate-600 py-5 flex text-xl flex-col items-center space-y-4 sm:hidden">
            <Link
              to="/artists"
              className="hover:text-slate-200"
              onClick={() => setMobileMenu(false)}
            >
              Artists
            </Link>
            <Link
              to="/artworks"
              className="hover:text-slate-200"
              onClick={() => setMobileMenu(false)}
            >
              Artworks
            </Link>
            <Link
              to="/collections"
              className="hover:text-slate-200"
              onClick={() => setMobileMenu(false)}
            >
              Collections
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
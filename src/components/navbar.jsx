import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci"
import Logo from "./logo"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = ({ toggleShowSearch }) => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const menuItems = [
    {
      name: "Artists",
      link: "/artists",
    },
    {
      name: "Artworks",
      link: "/artworks",
    },
    {
      name: "About",
      link: "/about",
    },
  ]

  return (
    <div className="relative z-20 bg-gray-700 text-gray-300 w-full pt-1 pb-1 h-[95px] min-w-[280px]">
      <div className="max-w-[1640px] mx-auto flex items-center justify-between w-full h-full px-4 sm:px-6 lg:px-8">
        <Logo
          compact={true}
          onClick={() => {
            setMobileMenu(false)
          }}
        />
        <div className="hidden sm:flex text-sm lg:text-lg items-center space-x-4">
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index} className="hover:text-gray-200">
              {item.name}
            </Link>
          ))}
          <CiSearch
            className="text-2xl lg:text-3xl cursor-pointer hover:text-gray-200"
            onClick={() => {
              toggleShowSearch(true)
            }}
          />
        </div>
        <div className="sm:hidden flex items-center">
          <CiSearch
            className="text-3xl cursor-pointer hover:text-gray-200"
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
          <div className="absolute top-full left-0 right-0 transition-all duration-300 bg-gray-600 py-5 flex text-xl flex-col items-center space-y-4 sm:hidden">
            {menuItems.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="hover:text-gray-200"
                onClick={() => setMobileMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

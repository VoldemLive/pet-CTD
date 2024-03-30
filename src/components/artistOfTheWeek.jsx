import React from "react"
import { Link } from "react-router-dom"
const ArtistOfTheWeek = () => {
  return (
    <div className="flex flex-col justify-center relative w-full overflow-hidden">
      <div className="relative max-w-[1640px] justify-center mx-auto flex w-full">
        <div className="z-[1] max-w-[1110px] flex flex-col-reverse md:flex-row py-14 md:py-24 px-6 w-full justify-center gap-10 md:gap-20">
          <div className="relative flex flex-col justify-center shrink-1">
            <h2 className="sm:text-xl lg:text-4xl text-nowrap font-semibold text-gray-400/20">
              Artist of the week:
            </h2>
            <h2 className="text-4xl font-semibold text-gray-400">
              Pablo Picasso
            </h2>
            <p className="text-lg py-4 font-light text-gray-400">
              Dive into the week with Pablo Picasso, the master of innovation
              and the father of Cubism. His bold vision and relentless
              experimentation paved the way for modern art as we know it.
            </p>
            <Link
              className="text-lg text-right text-gray-400 underline mt-5"
              to="/artist/36198"
            >
              Learn more about Pablo Picasso
            </Link>
          </div>
          <div className="flex flex-col aspect-square">
            <img
              className="object-cover w-full h-full"
              src="https://www.artic.edu/iiif/2/04a29d2c-21b9-f090-f97f-2f18dae589df/full/400,/0/default.jpg"
              alt="picasso photo by Irving Penn"
            />
            <p className="text-xs text-gray-400 text-center p-1">
              Photo Pablo Picasso by{" "}
              <Link className="underline" to="/artist/36169">
                Irving Penn
              </Link>
              . 1957
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistOfTheWeek

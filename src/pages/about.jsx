import React from "react"

const About = () => {
  return (
    <div className="flex text-gray-600 bg-slate-200 p-5 justify-center w-full h-full ">
      <div className="flex max-w-[1100px] bg-slate-50 shadow-sm p-5">
        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">About Arthive</h1>
          <p className="text-lg mb-4">
            Welcome to Arthive, a digital sanctuary dedicated to the exploration
            of art. Our mission is clear and simple: to create an accessible
            catalog of artworks that allows you to focus solely on the beauty
            and depth of art, free from any distractions. Arthive is designed as
            a pre-work project for Code The Dream, reflecting our commitment to
            leveraging technology for social good.
          </p>
          <p className="text-lg mb-4">
            At the heart of Arthive's development is a deep appreciation for the
            possibilities unlocked by the Art Institute of Chicago's API. This
            powerful tool has enabled us to bridge the gap between you and
            countless masterpieces, allowing for an immersive experience that is
            both educational and inspiring.
          </p>
          <h2 className="text-xl font-semibold mb-3">Our Inspiration</h2>
          <p className="text-lg">
            The foundation of Arthive is rooted in a profound admiration for the
            capabilities provided by the Art Institute of Chicago's API. It's
            not just the access to a vast collection of art that excites us—it's
            the opportunity to present these works in a new light, making them
            more accessible and engaging for everyone, everywhere.
          </p>
          <p className="text-lg mt-4">
            By choosing Arthive, you're joining us on a journey to rediscover
            art, explore unseen details, and find unexpected inspiration in
            every corner of the canvas.
          </p>
          <h2 className="text-xl font-semibold mb-3">
            Technology Behind Arthive
          </h2>
          <p className="text-lg mb-4">
            The creation of Arthive was guided by a selection of modern web
            technologies, chosen for their reliability and performance:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>React</strong> and <strong>React-DOM</strong> for building
              a dynamic and responsive user interface.
            </li>
            <li>
              <strong>Vite</strong> as our build tool, ensuring fast development
              and an optimized final product.
            </li>
            <li>
              <strong>TailwindCSS</strong> for streamlined, utility-first
              styling that adapts to any device.
            </li>
            <li>
              <strong>Axios</strong> for efficient and straightforward data
              fetching from the Art Institute of Chicago's API.
            </li>
            <li>
              <strong>OpenSeadragon</strong> for providing a deep-zoom view of
              high-resolution art images, making your virtual visit as close to
              an in-person experience as possible.
            </li>
            <li>
              <strong>React Router DOM</strong> for seamless navigation
              throughout our digital gallery.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

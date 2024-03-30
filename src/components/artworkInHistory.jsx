import React, { useEffect, useState } from "react"
import api from "@/api/api"
import ArtworkListItem from "./artworkListItem"
import ArtworkRowItem from "./artworkRowItem"
const ArtworkInHistory = () => {
  const page = 1
  const limit = 48
  const [artwork, setArtwork] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const variant = Math.ceil(Math.random() * 3)
      const yearCreation = new Date().getFullYear() - variant * 100
      const data = await api.getArtworksByYear(yearCreation, page, limit)
      let someArtworkNumber = 0
      if (data.pagination.total > limit) {
        someArtworkNumber = Math.floor(Math.random() * limit)
      } else {
        someArtworkNumber = Math.floor(Math.random() * data.pagination.total)
      }
      setArtwork(data.data[someArtworkNumber])
      const desriptiponObject = generateDescription(
        variant,
        data.data[someArtworkNumber].artist_title,
        yearCreation
      )
      setTitle(desriptiponObject.title)
      setDescription(desriptiponObject.description)
      //console.log(data, data.data[someArtworkNumber])
    }
    fetchData()
  }, [])

  const generateDescription = (variant, artistName, yearCreation) => {
    const titles = [
      "Echoes of Eternity",
      "The Art of Ages",
      "Timeless Masterpieces Unveiled",
    ]

    const descriptions = [
      `This year marks a significant milestone in the journey of timeless masterpieces. As we celebrate the ${
        variant == 1 ? "100th" : variant == 2 ? "200th" : "300th"
      } anniversary of this remarkable artwork, we invite you to explore its history, influence, and the enduring legacy that continues to inspire and awe.`,
      `Created in ${yearCreation}, this piece not only showcases the exceptional skill of ${artistName} but also serves as a window into the era that shaped its creation. From the delicate brush strokes to the vibrant colors that bring the scene to life, every aspect of this artwork tells a story of innovation, creativity, and the enduring human spirit.`,
      `As we commemorate this ${
        variant == 1
          ? "century"
          : variant == 2
          ? "double century"
          : "tricentennial"
      } milestone, join us in delving into the depth of its beauty and the story it encapsulates. This artwork is not just a piece of history; it's a testament to the timeless dialogue between the past and the present, an echo of the age-old quest for beauty and truth that continues to resonate in the heart of the beholder.`,
    ]
    const finalDescription = {
      title: titles[Math.floor(Math.random() * 3)],
      description: descriptions[Math.floor(Math.random() * 3)],
      yearCreation: yearCreation,
    }

    return finalDescription
  }

  return (
    <div className="relative text-gray-400 bg-gray-100 w-full min-w-[280px]">
      <div className="relative pt-20 pb-16 max-w-[1640px] mx-auto flex items-center justify-between w-full h-full">
        <div className="absolute md:text-nowrap top-0 text-right right-0 text-7xl sm:text-8xl lg:text-9xl text-gray-400/10">
          centuries speak
        </div>
        <div className="flex w-full flex-col md:flex-row gap-0 md:gap-10 lg:gap-30">
          <div className="w-full justify-center md:mr-10 md:justify-end flex ">
            <div className="flex flex-col w-full justify-center items-center md:items-end">
              {title && (
                <h2 className="visible text-center font-semibold md:absolute md:invisible text-2xl my-5">
                  {title}
                </h2>
              )}
              {artwork && (
                <div className="px-6 sm:p-0">
                  <ArtworkRowItem artwork={artwork} />
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full">
            <div className="flexflex-col">
              {title && (
                <h2 className="invisible font-semibold absolute md:relative md:visible text-2xl my-5">
                  {title}
                </h2>
              )}
              {description && (
                <h3 className="text-xl font-thin md:max-w-[90%] lg:max-w-[70%] mt-10 sm:mt-5 px-6 sm:px-20 md:p-0">
                  {description}
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtworkInHistory

import React from "react"
import HeroBanner from "@/widgets/HeroBanner/heroBanner"
import ArtworkInHistory from "@/components/artworkInHistory"
import RandomArtworksRow from "@/components/randomArtworksRow"
import ArtistOfTheWeek from "@/components/artistOfTheWeek"
import ArtsMoment from "@/components/artsMoment"
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ArtworkInHistory />
      <ArtistOfTheWeek />
      <RandomArtworksRow />
    </div>
  )
}

export default Home

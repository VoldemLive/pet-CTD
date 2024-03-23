import { Routes, Route, Link } from "react-router-dom"
import Layout from "@/pages/layout"
import Artist from "./pages/artist"
import Artwork from "./pages/artwork"
import ArtworksPage from "./pages/artworks"
import ArtistsPage from "./pages/artists"
import Playground from "./pages/playground"
import Search from "./pages/search"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/search" element={<Search />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/artwork/:id" element={<Artwork />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="/playground" element={<Playground />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

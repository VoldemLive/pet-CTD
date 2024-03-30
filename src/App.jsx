import { Routes, Route, Link } from "react-router-dom"
import Layout from "@/pages/layout"
import Artist from "./pages/artist"
import Artwork from "./pages/artwork"
import ArtworksPage from "./pages/artworks"
import ArtistsPage from "./pages/artists"
import Playground from "./pages/playground"
import SearchPage from "./pages/search"
import SearchArtistsPage from "./pages/searchArtists"
import SearchArtworksPage from "./pages/searchArtworks"
import About from "./pages/about"
import Home from "./pages/home"
import PrivacyPolicy from "./pages/privacy"
import TermsOfService from "./pages/termsOfService"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/artists" element={<SearchArtistsPage />} />
          <Route path="/search/artworks" element={<SearchArtworksPage />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/artwork/:id" element={<Artwork />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

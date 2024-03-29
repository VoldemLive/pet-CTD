import React from "react"
import { Link } from "react-router-dom"
/**
 * Renders a single artist item.
 *
 * @component
 * @param {Object} artist - The artist object.
 * @param {string} artist.id - The unique identifier of the artist.
 * @param {string} artist.title - The title of the artist.
 * @param {string|null} artist.birth_date - The birth date of the artist (nullable).
 * @param {string|null} artist.death_date - The death date of the artist (nullable).
 * @returns {JSX.Element} The rendered artist item.
 */
const ArtistsListItem = ({ artist }) => {
  return (
    <div className="break-inside-avoid group" key={artist.id}>
      <Link to={`/artist/${artist.id}`}>
        <div className="p-3 hover:bg-slate-50 transition-all duration-300">
          <h2 className="text-gray-500 text-xl sm:text-lg lg:text-xl truncate">
            {artist.title}
          </h2>
          <p className="text-gray-300">
            {artist.birth_date != null && ` (${artist.birth_date}`}
            {artist.birth_date != null && artist.death_date != null && "-"}
            {artist.death_date != null && ` ${artist.death_date})`}
            {artist.death_date === null &&
              artist.birth_date != null &&
              `- ... )`}
            {artist.birth_date === null && artist.death_date === null ? (
              <div className="invisible">(... - ...)</div>
            ) : null}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ArtistsListItem

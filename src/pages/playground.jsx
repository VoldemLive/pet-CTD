import React, { useState } from "react"
import api from "@/api/api"

const playground = () => {
  const [someId, setSomeId] = useState(36198)
  const [apiData, setApiData] = useState("")
  const getArtistData = async () => {
    const response = await api.findArtistById(someId)
    setApiData(JSON.stringify(response.data, null, 2))
  }

  const getArtworksByGalleryId = async () => {
    const response = await api.getArtworksByGalleryId(someId)
    setApiData(JSON.stringify(response.data, null, 2))
  }

  const getArtworksByDepartment = async () => {
    const response = await api.getArtworksByDepartmentTitle(someId)
    setApiData(JSON.stringify(response.data, null, 2))
  }

  const getArtworksByYear = async () => {
    const response = await api.getArtworksByYear(someId)
    setApiData(JSON.stringify(response.data, null, 2))
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full rounded-md border border-green-200 bg-green-100 p-3 ">
        <h3 className="font-bold text-green-600">Hint!</h3>
        <p
          onClick={() => {
            setSomeId(36198)
          }}
        >
          Pablo Picasso id: 36198
        </p>
        <p
          onClick={() => {
            setSomeId(25474)
          }}
        >
          Gallery id: 25474
        </p>
        <p
          onClick={() => {
            setSomeId("Modern Art")
          }}
        >
          Department title: Modern Art
        </p>
        <p
          onClick={() => {
            setSomeId(1824)
          }}
        >
          Year of artwork: 1824
        </p>
      </div>
      <input
        type="text"
        className="border rounded-md p-3"
        value={someId}
        onChange={(e) => setSomeId(e.target.value)}
      />
      <div className="flex flex-row flex-wrap gap-3">
        <div>
          <button
            onClick={() => getArtistData()}
            className="p-3 border-lime-400 border rounded-md text-lime-600 bg-lime-300"
          >
            Get artists data
          </button>
        </div>
        <div>
          <button
            onClick={() => getArtworksByGalleryId()}
            className="p-3 border-lime-400 border rounded-md text-lime-600 bg-lime-300"
          >
            Get gallery data
          </button>
        </div>
        <div>
          <button
            onClick={() => getArtworksByDepartment()}
            className="p-3 border-lime-400 border rounded-md text-lime-600 bg-lime-300"
          >
            Get artworks by department
          </button>
        </div>
        <div>
          <button
            onClick={() => getArtworksByDepartment()}
            className="p-3 border-lime-400 border rounded-md text-lime-600 bg-lime-300"
          >
            Get artworks by department
          </button>
        </div>
        <div>
          <button
            onClick={() => getArtworksByYear()}
            className="p-3 border-lime-400 border rounded-md text-lime-600 bg-lime-300"
          >
            Get artworks by year
          </button>
        </div>
      </div>

      <div className="w-full">
        <textarea
          className="w-full rounded-md p-3 border border-amber-100 bg-amber-50 text-amber-700"
          name="apidata"
          id="apidata"
          value={apiData}
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  )
}

export default playground

import axios from "axios"

class API {
  constructor() {
    this.BASE_URL = "https://api.artic.edu/api/v1"
    this.ARTISTS = "/artists"
    this.ARTWORKS = "/artworks"
    this.AGENTS = "/agents"
    this.IMAEGES = "/images"
    this.GALLERIES = "/galleries"
    this.ARTWORKS_SEARCH = "/artworks/search"
    this.ARTISTS_SEARCH = "/agents/search"
    this.PAGE_SIZE = 10
    this.config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    }
    this.apiController = axios.create({
      baseURL: this.BASE_URL,
      timeout: 1000 * 5,
      headers: {
        accept: "application/json",
      },
    })
  }

  async searchArtworkAndArtist(query, page = 1, limit = 12) {
    const fieldsArtwork = "id,title,image_id"
    const artworkSearchPromise = this.apiController.get(
      `${this.ARTWORKS_SEARCH}?q=${encodeURIComponent(
        query
      )}&fields=${fieldsArtwork}&limit=12`
    )
    const artistSearchPromise = this.apiController.get(
      `${this.ARTISTS_SEARCH}?q=${encodeURIComponent(query)}&limit=12`
    )

    const [artworkResponse, artistResponse] = await Promise.all([
      artworkSearchPromise,
      artistSearchPromise,
    ])

    return {
      artworks: artworkResponse.data,
      artists: artistResponse.data,
    }
  }

  async getArtworksByArtistId(id, page = 1, limit = 12) {
    const fields = ["title", "image_id", "thumbnail", "id"]
    const params = encodeURIComponent(
      JSON.stringify({
        query: {
          term: {
            artist_id: id,
          },
        },
        fields: fields,
        page: page,
        limit: limit,
      })
    )
    const response = await this.apiController.get(
      `${this.ARTWORKS_SEARCH}?params=${params}`
    )
    return response.data
  }

  async findArtistById(id) {
    const response = await this.apiController.get(`${this.AGENTS}/${id}`)
    return response.data
  }

  async getImage(id) {
    const response = await this.apiController.get(`${this.IMAEGES}/${id}`)
    return response.data
  }

  async getArtworks(page = 1, limit = 12, startLetter = "T") {
    const fields = [
      "title",
      "id",
      "date_display",
      "image_id",
      "colorfulness",
      "color",
      "thumbnail",
    ]
    const query = {
      query: {
        bool: {
          must: [{ prefix: { "title.keyword": startLetter } }],
        },
      },
      sort: [{ "title.keyword": { order: "asc" } }],
      fields: fields,
    }
    const params = encodeURIComponent(JSON.stringify(query))
    const queryString = `params=${params}&size=${limit}&from=${
      (page - 1) * limit
    }`

    const response = await this.apiController.get(
      `${this.ARTWORKS_SEARCH}?${queryString}`
    )
    return response.data
  }

  async getArtists(page = 1, limit = 12, startLetter = "T") {
    //// This is old version of the code
    //// to get artists
    ////but API ARTIC has restricted access to this endpoint
    //// so I need make it litlle bit different and simpler

    // const queryParam = encodeURIComponent(
    //   JSON.stringify({
    //     bool: {
    //       must: [
    //         { match: { is_artist: true } },
    //         { prefix: { "title.keyword": startLetter } },
    //       ],
    //     },
    //   })
    // )

    // const sortParam = "title.keyword"
    // const queryString = `query=${queryParam}&sort=${sortParam}&size=${limit}&from=${
    //   (page - 1) * limit
    // }`

    // console.log(`${this.BASE_URL}${this.ARTISTS_SEARCH}?${queryString}`)
    // const response = await this.apiController.get(
    //   `${this.ARTISTS_SEARCH}?${queryString}`
    // )
    // return response.data

    //// New version of the code
    //// I'm still got stuck with the restricted access of the API
    //// but current version of the code I like more
    const fields = [
      "title",
      "sort_title",
      "id",
      "birth_date",
      "death_date",
      "is_artist",
    ]
    const query = {
      query: {
        bool: {
          must: [
            { match: { is_artist: true } },
            { prefix: { "sort_title.keyword": startLetter } },
          ],
        },
      },
      sort: [{ "sort_title.keyword": { order: "asc" } }],
      fields: fields,
    }
    const params = encodeURIComponent(JSON.stringify(query))
    const queryString = `params=${params}&size=${limit}&from=${
      (page - 1) * limit
    }`

    const response = await this.apiController.get(
      `${this.ARTISTS_SEARCH}?${queryString}`
    )
    return response.data
  }

  async findArtworkById(id, fields = []) {
    let connectionString = `${this.ARTWORKS}/${id}?fields=${fields.join(",")}`
    if (fields.length === 0) connectionString = `${this.ARTWORKS}/${id}`
    const response = await this.apiController.get(connectionString)
    return response.data
  }

  async getArtworksByGalleryId(id) {
    const galleryResponse = await this.apiController.get(
      `${this.GALLERIES}/${id}`
    )
    const artworkIds = galleryResponse.data.artworks || []
    const artworkPromises = artworkIds.map((artworkId) =>
      this.findArtworkById(artworkId)
    )
    const artworks = await Promise.all(artworkPromises)

    return artworks
  }

  // async getArtworksByDepartmentTitle(departmentTitle) {
  //   const response = await this.apiController.get(
  //     `${this.ARTWORKS_SEARCH}?department_title=${encodeURIComponent(
  //       departmentTitle
  //     )}`
  //   )
  //   return response.data
  // }

  async getArtworksByYear(year) {
    const query = {
      query: {
        bool: {
          must: [
            {
              range: {
                date_start: {
                  gte: year,
                  lte: year,
                  format: "yyyy",
                },
              },
            },
          ],
        },
      },
    }

    const response = await this.apiController.get(
      `${this.ARTWORKS_SEARCH}?params=${encodeURIComponent(
        JSON.stringify(query)
      )}`
    )

    return response.data
  }
}

export default new API()

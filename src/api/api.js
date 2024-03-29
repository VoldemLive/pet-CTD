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

  async searchArtworkAndArtist(query, page = 1, limit = 12, fields = null) {
    console.log(query, page, limit, fields)
    const artworksData = await this.searchArtworks(query, page, limit, fields)
    const artistsData = await this.searchArtists(query, page, limit, fields)

    return {
      artworks: artworksData,
      artists: artistsData,
    }
  }

  async searchArtists(searchText = "", page = 1, limit = 24, fields = null) {
    let queryString = `q=${searchText}&size=${limit}&from=${(page - 1) * limit}`
    if (fields) queryString += `&fields=${fields}`
    const response = await this.apiController.get(
      `${this.ARTISTS_SEARCH}?${queryString}`
    )
    return response.data
  }

  async searchArtworks(searchText = "", page = 1, limit = 24, fields = null) {
    let queryString = `q=${searchText}&size=${limit}&from=${(page - 1) * limit}`
    if (fields) queryString += `&fields=${fields}`
    const response = await this.apiController.get(
      `${this.ARTWORKS_SEARCH}?${queryString}`
    )
    return response.data
  }

  async getArtworksByArtistId(id, page = 1, limit = 12) {
    const fields = ["title", "id", "image_id", "date_display"]
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

  // async getImage(id) {
  //   const response = await this.apiController.get(`${this.IMAEGES}/${id}`)
  //   return response.data
  // }

  async getArtworks(page = 1, limit = 12, startLetter = "A", sortBy = "title") {
    let sort = []
    switch (sortBy) {
      case "title":
        sort = [{ "title.keyword": { order: "asc" } }]
        break
      case "date":
        sort = [{ updated_at: { order: "asc" } }]
        break
      default:
        break
    }
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
      sort: sort,
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

  async getArtworksByYear(year, page = 1, limit = 12) {
    const fields = ["title", "id", "image_id", "artist_title", "date_display"]
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
      fields: fields,
    }
    const params = encodeURIComponent(JSON.stringify(query))
    const response = await this.apiController.get(
      `${this.ARTWORKS_SEARCH}?params=${params}&size=${limit}&from=${
        (page - 1) * limit
      }`
    )

    return response.data
  }
}

export default new API()

import React from "react"
import { useSearchParams } from "react-router-dom"
const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  return <div>search with query {searchParams}</div>
}

export default Search

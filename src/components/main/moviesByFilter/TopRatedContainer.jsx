import React, {useState, useEffect}from 'react'
import axios from "axios"
import MoviesList from "./MoviesList"

const TopRatedContainer = () => {
  const [newest, setNewest] = useState([])
  let apikey = import.meta.env.VITE_API_KEY
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`)
    .then((res) => setNewest(res.data.results))
  }, [])
  
  return (
    <MoviesList movies={newest}/>
  )
}

export default TopRatedContainer


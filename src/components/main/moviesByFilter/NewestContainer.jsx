import React, {useState, useEffect}from 'react'
import axios from "axios"
import MoviesList from "./MoviesList"


const NewestContainer = () => {
  const [newest, setNewest] = useState([])
  let apikey = import.meta.env.VITE_API_KEY
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&release_date.gte=2022-11-25&release_date.lte=2022-12-01&with_watch_monetization_types=flatrate`)
    .then((res) => setNewest(res.data.results))
  }, [])
  
  return (
    <MoviesList movies={newest}/>
  )
}

export default NewestContainer
import React, {useState, useEffect}from 'react'
import axios from "axios"
import MoviesList from "./MoviesList"


const NewestContainer = () => {
  const [newest, setNewest] = useState([])
  let apikey = import.meta.env.VITE_API_KEY
  
const ifRating =(movie) =>{
  return movie.vote_average != 0.0
}

const order = (a,b) => {
let da = new Date(a.release_date),
db= new Date(b.release_date);
return db -da
}

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1&region=MX`)
    .then((res) => setNewest(res.data.results.filter(ifRating).sort(order)))
  }, [])
  
  return (
    <MoviesList movies={newest}/>
  )
}

export default NewestContainer
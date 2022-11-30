import React, {useState, useEffect}from 'react'
import axios from "axios"
import MoviesHomeList from "./MoviesHomeList"


const NewestHomeContainer = () => {
  const [newest, setNewest] = useState([])
  let apikey = import.meta.env.VITE_API_KEY
  const ifBackDrop = (backDrop) => {
    return backDrop.backdrop_path != null && backDrop.poster_path != null
  }
  const random = () => {
    return Math.random() - 0.5
  }
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1&region=MX`)
    .then((res) => setNewest(res.data.results.sort(random).filter(ifBackDrop).slice(0,5)))
  }, [])
  
  return (
    <MoviesHomeList movies={newest} name={"Newest"}/>
  )
}

export default NewestHomeContainer

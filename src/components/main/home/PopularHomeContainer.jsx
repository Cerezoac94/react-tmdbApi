import React, {useState, useEffect}from 'react'
import axios from "axios"
import MoviesHomeList from "./MoviesHomeList"


const PopularHomeContainer = () => {
    const [popular, setPopular] = useState([])
    let apikey = import.meta.env.VITE_API_KEY
    
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
      .then((res) => setPopular(res.data.results.slice(0,5)))
    }, [])
    
    return (
      <MoviesHomeList movies={popular} name={"Popular"}/>
    )
}

export default PopularHomeContainer
import React, {useState, useEffect}from 'react'
import axios from "axios"
import MoviesHomeList from "./MoviesHomeList"



const TopRatedHomeContainer = () => {
    const [topRated, setTopRated] = useState([])
    let apikey = import.meta.env.VITE_API_KEY
    
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`)
      .then((res) => setTopRated(res.data.results.slice(1,6)))
    }, [])
    
    return (
        <MoviesHomeList movies={topRated} name={"Top-Rated"}/>
      )
}

export default TopRatedHomeContainer
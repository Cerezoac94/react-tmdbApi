import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import MoviesList from './MoviesList'

const GenresMoviesContainer = () => {
    let apikey = import.meta.env.VITE_API_KEY
    const {genre}  = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`)
        .then((res)=>setMovie(res.data.results))
    },[genre]);
  return (
    <MoviesList movies={movie}/>
  )
}

export default GenresMoviesContainer
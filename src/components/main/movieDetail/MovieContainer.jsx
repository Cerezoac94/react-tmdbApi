import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import Movie from "./Movie"

const MovieContainer = () => {
  let apikey = import.meta.env.VITE_API_KEY
  const {id}  = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&append_to_response=releases&language=en-US`)
    .then(res=>setMovie(res.data))
  }, []);
  return <Movie movie={movie}/>
}

export default MovieContainer
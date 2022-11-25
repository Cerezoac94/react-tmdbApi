import React, {useState, useEffect}from 'react'
import axios from "axios"
import NowPlayingList from "./NowPlayingList"

const NowPlayingContainer = () => {
    const [nowPlaying, setNowPlaying] = useState([])
  let apikey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1&region=MX`)
    .then((res) => setNowPlaying(res.data.results.slice(0,4)))
  }, [])



  return (
    <NowPlayingList movies={nowPlaying}/>
  )
}

export default NowPlayingContainer
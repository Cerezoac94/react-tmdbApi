import React, {useState, useEffect}from 'react'
import axios from "axios"
import NowPlaying from "./NowPlaying"

const NowPlayingContainer = () => {
    const [nowPlaying, setNowPlaying] = useState([])
  let apikey = import.meta.env.VITE_API_KEY

  const ifPoster = (poster) => {
    return poster.poster_path != null
  }

  const order = (a,b) => {
    let da = new Date(a.release_date),
    db= new Date(b.release_date);
    return db -da
    }
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2022-11-30&release_date.lte=2022-12-01&with_watch_monetization_types=flatrate`)
    .then((res) => setNowPlaying(res.data.results.filter(ifPoster).sort(order).slice(0,4)))
  }, [])



  return (
    <NowPlaying movies={nowPlaying}/>
  )
}

export default NowPlayingContainer
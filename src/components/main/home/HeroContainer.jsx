// https://api.themoviedb.org/3/discover/movie?api_key=cec0ccb8f028ce31dffbbdd8f0268ccd&language=en-US&region=MX&sort_by=popularity.Asc&include_adult=false&include_video=false&page=1&release_date.gte=2022-11-20&release_date.lte=2022-12-01&watch_region=MX

import React, {useState, useEffect} from 'react'
import axios from "axios";
import Hero from "./Hero"

const HeroContainer = () => {
    const [heroMovie, setHeroMovie] = useState([])
    let apikey = import.meta.env.VITE_API_KEY

    const ifImg = (img) => {
        return img.backdrop_path != null && img.poster_path != null
      }

    const random = () => {
        return Math.random() - 0.5
      }

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&region=MX&sort_by=popularity.Asc&include_adult=false&include_video=false&page=1&release_date.gte=2022-11-25&release_date.lte=2022-12-01&watch_region=MX`)
      .then((res) => setHeroMovie(res.data.results.sort(random).filter(ifImg).slice(0,9)))
    }, [])

  return (
    <Hero movies={heroMovie}/>
  )
}

export default HeroContainer
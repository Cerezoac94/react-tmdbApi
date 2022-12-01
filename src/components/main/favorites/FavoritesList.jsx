import React, { useContext } from 'react'
import { favContext } from '../../../Context/FavContext'

import Favorites from './Favorites';

const FavoritesList = () => {
const {fav} = useContext(favContext)
// console.log(fav)
if (fav.length === 0) {return <Favorites movie={0}/>}

return fav.map((movie, key) => (
    <Favorites movie={movie} key={key}/>
  ))
}

export default FavoritesList
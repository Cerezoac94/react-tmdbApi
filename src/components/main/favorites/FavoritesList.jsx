import React, { useContext } from 'react'
import { favContext } from '../../../Context/FavContext'

const FavoritesList = () => {
const {fav} = useContext(favContext)
console.log(fav)
  return (
    <section>FAVORITES LIST</section>
  )
}

export default FavoritesList
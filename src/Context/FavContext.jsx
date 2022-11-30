import React, { useState, createContext } from "react";

export const favContext = createContext();
const { Provider } = favContext;


const FavContext = ({children}) => {
    const [fav, setFav] = useState([])

    const addToFav = (movie) => {
      let favCopy = JSON.parse(JSON.stringify(fav))
      let ifMovie = favCopy.findIndex(m => m.id === movie.id)
      if (ifMovie >= 0) {
        favCopy.splice(ifMovie,1)
      }else{
        favCopy.push(movie)
      }
      setFav(favCopy);
    };
  return <Provider value={addToFav}>{children}</Provider>
}

export default FavContext
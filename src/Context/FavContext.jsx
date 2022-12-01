import React, { useState, createContext } from "react";

export const favContext = createContext();
const { Provider } = favContext;


const FavContext = ({children}) => {
    const [fav, setFav] = useState([])
    // const [isFav, setIsFav] = useState(false);

    const addToFav = (movie) => {
      let favCopy = JSON.parse(JSON.stringify(fav))
      let ifMovie = favCopy.findIndex(m => m.id === movie.id)
      if (ifMovie >= 0) {
        favCopy.splice(ifMovie,1)
        // setIsFav(false)
      }else{
        favCopy.push(movie)
        // setIsFav(!isFav)
      }
      setFav(favCopy);
    };

    
    const favData = {
      fav,
      addToFav,
      // isFav

    };
  return <Provider value={favData}>{children}</Provider>
}

export default FavContext
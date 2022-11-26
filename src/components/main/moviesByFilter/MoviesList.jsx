import React from "react";
import Movies from "./Movies";
// Intentar mapear con este componente todas las peliculas filtradas
const MoviesList = ({movies}) => {
	return movies.map((movie, key) => {
    
  if(movie.poster_path != null){return <Movies movie={movie} key={key} />}
  });
};

export default MoviesList;

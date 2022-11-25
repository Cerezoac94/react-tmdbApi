import React from 'react'
import NowPlaying from './NowPlaying'

const NowPlayingList = ({movies}) => {
    return movies.map((movie,key) => (
       <NowPlaying movie={movie} key={key}/>
      ));
};

export default NowPlayingList
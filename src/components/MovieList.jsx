import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ Data , searchTitleFilm }) => {
 

  return (
    <div className="Father">
      {Data.map((film, index) => 
        film.stream_name.toLowerCase().includes(searchTitleFilm) && (
        <MovieCard key={index} film={film} />
        )
       
      )}
    </div>
  ); 
};

export default MovieList;

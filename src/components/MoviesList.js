// ./src/components/MoviesList.js
import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  
  const renderMovies = Object.keys(movies).map((movieID) => ( //we use object.keys since movies is an object to get an array of keys and then map over the array
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link> 
    </li> //we use interpolation to create a dynamic path in to={}
  ));

  return <ul>{renderMovies}</ul>;
}

export default MoviesList; 
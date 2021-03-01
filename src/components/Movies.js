import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log( movies )
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map(movie => {
          return(
            <div className="movie">
            <h3>Name: { movie.title }</h3>
            <p>Time: { movie.time }</p>
            <p>Genres:
              { movie.genres.map(genre => <li key={ genre }>{ genre }</li>) }
            </p>
          </div>
          )
        }) }
    </div>
  );
};

export default Movies;

import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map(director => {
        return(
          <div className="director">
            <h3>Name: { director.name }</h3>
            <p>Movies:
              { director.movies.map(movie => <li key={ movie }>{ movie }</li>) }
            </p>
          </div>
        )
      }) }
    </div>
  );
}

export default Directors

import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map(actor => {
        return(
          <div className="actor">
            <h3>Name: { actor.name } </h3>
            <p>Movies:
              { actor.movies.map(movie => <li key={ movie }>{ movie }</li>) }
            </p>
          </div>
        )
      }) }
    </div>
  );
};

export default Actors;

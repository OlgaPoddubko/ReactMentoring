import React from 'react';
import Movie from './Movie';

const MovieList = props =>
  <div className="items">
    {props.movies.map(elem =>
      <Movie
        key={elem.id}
        poster_path={elem.poster_path}
        title={elem.title}
        genres={elem.genres}
        release_date={elem.release_date}  />
    )}
    <style jsx>{`
      .items {
        max-width: 1200px;
        margin: 0 auto;
      }
    `}</style>
  </div>;

export default MovieList;

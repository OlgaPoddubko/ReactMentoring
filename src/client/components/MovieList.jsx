import React from 'react';
import Movie from './Movie';

// functioanal component
const MovieList = props =>
  <ul>
    {props.movies.map(elem =>
      <Movie key={elem.id} poster_path={elem.poster_path} title={elem.title} release_date={elem.release_date} genres={elem.genres} />
    )}
  </ul>;

export default MovieList;

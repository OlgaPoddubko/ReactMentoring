import React from 'react';

// functioanal component
const Movie = props =>
  <li>
    <p> {props.poster_path} </p>
    <p> {props.title} </p>
    <p> {props.release_date} </p>
    <p> {props.genres} </p>
  </li>;

export default Movie;
